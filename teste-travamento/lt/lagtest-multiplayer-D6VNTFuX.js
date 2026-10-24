//#region lib/multiplayer.ts
var ROOM_MAX = 8, MAX_ROOMS = 20;
var ICE = [{ urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"] }];
/** Cliente mínimo do Realtime (protocolo Phoenix): um canal, broadcast e presença. */
var RealtimeChannel = class {
	constructor(url, key, topic) {
		this.url = url;
		this.key = key;
		this.topic = topic;
		this.ws = null;
		this.ref = 0;
		this.beat = 0;
		this.joinRef = "";
		this.onBroadcast = () => {};
		this.onPresence = () => {};
		this.presence = /* @__PURE__ */ new Map();
		this.onClosed = () => {};
	}
	join(meta, timeoutMs = 8e3) {
		return new Promise((res, rej) => {
			const ws = new WebSocket(this.url);
			this.ws = ws;
			let done = false;
			const fail = (e) => {
				if (!done) {
					done = true;
					rej(new Error(e));
				}
			};
			const timer = setTimeout(() => {
				fail("Tempo esgotado ao entrar na sala.");
				this.leave();
			}, timeoutMs);
			ws.onopen = () => {
				this.joinRef = this.send("phx_join", {
					config: {
						broadcast: {
							self: false,
							ack: false
						},
						presence: {
							key: meta.id,
							enabled: true
						},
						private: false
					},
					...this.key.split(".").length === 3 ? { access_token: this.key } : {}
				});
				this.beat = window.setInterval(() => this.raw("phoenix", "heartbeat", {}), 25e3);
			};
			ws.onmessage = (m) => {
				let d;
				try {
					d = JSON.parse(String(m.data));
				} catch {
					return;
				}
				if (d.event === "phx_reply" && d.ref === this.joinRef) {
					if (d.payload?.status === "ok") {
						this.send("presence", {
							type: "presence",
							event: "track",
							payload: meta
						});
						clearTimeout(timer);
						if (!done) {
							done = true;
							res();
						}
					} else {
						clearTimeout(timer);
						fail("A sala recusou a entrada.");
					}
					return;
				}
				if (d.event === "broadcast") this.onBroadcast(d.payload?.event, d.payload?.payload);
				if (d.event === "presence_state") {
					this.presence.clear();
					for (const [k, v] of Object.entries(d.payload || {})) this.presence.set(k, v?.metas?.[0]);
					this.emitPresence();
				}
				if (d.event === "presence_diff") {
					for (const k of Object.keys(d.payload?.leaves || {})) this.presence.delete(k);
					for (const [k, v] of Object.entries(d.payload?.joins || {})) this.presence.set(k, v?.metas?.[0]);
					this.emitPresence();
				}
			};
			ws.onerror = () => fail("Não foi possível conectar à sala.");
			ws.onclose = () => {
				clearTimeout(timer);
				clearInterval(this.beat);
				fail("Conexão fechada.");
				this.onClosed();
			};
		});
	}
	emitPresence() {
		this.onPresence([...this.presence].map(([key, meta]) => ({
			key,
			meta
		})));
	}
	raw(topic, event, payload) {
		const ref = String(++this.ref);
		try {
			this.ws?.readyState === 1 && this.ws.send(JSON.stringify({
				topic,
				event,
				payload,
				ref,
				join_ref: this.joinRef || void 0
			}));
		} catch {}
		return ref;
	}
	send(event, payload) {
		return this.raw("realtime:" + this.topic, event, payload);
	}
	broadcast(event, payload) {
		this.send("broadcast", {
			type: "broadcast",
			event,
			payload
		});
	}
	count() {
		return this.presence.size;
	}
	leave() {
		clearInterval(this.beat);
		try {
			this.send("phx_leave", {});
			this.ws?.close();
		} catch {}
		this.ws = null;
	}
};
/** Sala de um jogo. Os aparelhos se encontram pelo Realtime e depois conversam direto (WebRTC). */
var GameRoom = class {
	constructor(opts) {
		this.opts = opts;
		this.ch = null;
		this.peers = /* @__PURE__ */ new Map();
		this.retryTimers = /* @__PURE__ */ new Set();
		this.retries = /* @__PURE__ */ new Map();
		this.pendingSignals = [];
		this.names = /* @__PURE__ */ new Map();
		this.closed = false;
		this.room = 0;
		this.host = "";
		this.joinedAt = Date.now();
		this.members = /* @__PURE__ */ new Map();
		this.chunks = /* @__PURE__ */ new Map();
		this.onState = () => {};
		this.onOtherVersion = () => {};
		this.onLeave = () => {};
		this.onPeers = () => {};
		this.onData = () => {};
		this.onHost = () => {};
		this.onError = () => {};
		this.onNotice = () => {};
		this.discoveryClosed = false;
		this.me = opts.peer ?? crypto.randomUUID();
		this.joinedAt = opts.joinedAt ?? Date.now();
	}
	get hostId() {
		return this.host;
	}
	get isHost() {
		return this.host === this.me;
	}
	/** Entra na primeira sala com lugar. */
	async join() {
		for (let n = 0; n < MAX_ROOMS && !this.closed; n++) {
			const topic = `${this.opts.channel ?? "jogo-" + this.opts.gameId}-${n}`;
			const ch = this.opts.channelFactory?.(topic) ?? new RealtimeChannel(this.opts.url, this.opts.key, topic);
			const signals = [];
			ch.onBroadcast = (event, p) => {
				if (event === "sig" && p?.to === this.me) signals.push(p);
			};
			let first = null;
			let gotFirst = () => {};
			const ready = new Promise((r) => {
				gotFirst = r;
			});
			ch.onPresence = (list) => {
				if (!first) {
					first = list;
					gotFirst();
				}
			};
			this.ch = ch;
			try {
				await ch.join({
					id: this.me,
					name: this.opts.name.slice(0, 24),
					t: this.joinedAt,
					b: this.opts.build ?? ""
				});
			} catch (e) {
				ch.leave();
				if (this.ch === ch) this.ch = null;
				throw e;
			}
			await Promise.race([ready, new Promise((r) => setTimeout(r, 1500))]);
			if (this.closed) {
				ch.leave();
				throw new Error("Entrada na sala cancelada.");
			}
			const seen = first ?? [];
			if (seen.filter((p) => p.key !== this.me).length >= ROOM_MAX) {
				ch.leave();
				continue;
			}
			this.room = n;
			this.ch = ch;
			this.wire(ch);
			this.syncPresence(seen);
			for (const signal of signals) this.onSignal(signal);
			return n;
		}
		throw new Error("Todas as salas estão cheias agora. Tente daqui a pouco.");
	}
	wire(ch) {
		ch.onClosed = () => {
			if (!this.closed) if (this.isHost || this.peerOpen(this.host)) this.closeDiscovery();
			else this.onError("A conexão da sala foi interrompida. Saia e entre novamente.");
		};
		ch.onPresence = (list) => this.syncPresence(list);
		ch.onBroadcast = (event, p) => {
			if (event === "sig" && p && p.to === this.me && typeof p.from === "string") this.onSignal(p);
		};
	}
	peerOpen(id) {
		const e = this.peers.get(id);
		return !!e?.connected && e.reliable?.readyState === "open" && e.dc?.readyState === "open";
	}
	closeDiscovery() {
		if (this.discoveryClosed) return;
		this.discoveryClosed = true;
		this.pendingSignals = [];
		for (const id of [...this.peers.keys()]) if (!this.peerOpen(id)) this.drop(id, true);
		this.emitPeers();
		this.onNotice("A partida continua entre os jogadores conectados. Novas entradas estão pausadas; entre novamente depois para abrir outra sala.");
		this.ch?.leave();
	}
	syncPresence(list) {
		if (this.closed || this.discoveryClosed) return;
		if (this.host && this.host !== this.me && !list.some((p) => p.key === this.host) && this.peerOpen(this.host)) {
			this.closeDiscovery();
			return;
		}
		const here = /* @__PURE__ */ new Set();
		this.members.clear();
		this.members.set(this.me, this.joinedAt);
		for (const { key, meta } of list) if (/^[a-f0-9-]{36}$/.test(key) && Number.isFinite(meta?.t)) this.members.set(key, meta.t);
		const next = [...this.members].sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))[0]?.[0] ?? this.me;
		if (next !== this.host) {
			this.host = next;
			this.onHost(next);
		}
		for (const { key, meta } of list) {
			if (key === this.me || !/^[a-f0-9-]{36}$/.test(key)) continue;
			here.add(key);
			this.names.set(key, String(meta?.name || "Jogador").slice(0, 24));
			if (this.opts.build && meta?.b && meta.b !== this.opts.build) this.onOtherVersion();
			if (!this.peers.has(key) && this.me < key) this.call(key);
		}
		for (const id of [...this.peers.keys()]) if (!here.has(id)) this.drop(id);
		this.emitPeers();
		const pending = this.pendingSignals.splice(0);
		for (const signal of pending) if (here.has(signal.from)) this.onSignal(signal);
	}
	newPc(id) {
		const pc = new RTCPeerConnection({ iceServers: ICE });
		const entry = {
			pc,
			dc: null,
			name: this.names.get(id) ?? "Jogador",
			connected: false,
			since: Date.now(),
			reliable: null
		};
		this.peers.set(id, entry);
		pc.onconnectionstatechange = () => {
			if (this.peers.get(id) !== entry) return;
			if (pc.connectionState === "failed" || pc.connectionState === "closed") this.drop(id);
		};
		const timeout = window.setTimeout(() => {
			this.retryTimers.delete(timeout);
			if (this.closed || this.peers.get(id) !== entry || entry.connected) return;
			const attempt = this.retries.get(id) || 0;
			if (this.me < id && attempt < 2) {
				this.retries.set(id, attempt + 1);
				this.drop(id, true);
				this.call(id);
			} else if (this.host === id) this.onError("Não foi possível conectar à autoridade da sala. Tente outra rede ou jogue sozinho.");
		}, 7e3);
		this.retryTimers.add(timeout);
		pc.ondatachannel = (e) => {
			if (e.channel.label === "world") this.useReliable(id, e.channel);
			else this.useChannel(id, e.channel);
		};
		return entry;
	}
	useChannel(id, dc) {
		const e = this.peers.get(id);
		if (!e) return;
		e.dc = dc;
		dc.onopen = () => {
			if (this.peers.get(id) !== e) return;
			e.connected = true;
			this.emitPeers();
		};
		dc.onclose = () => {
			if (this.peers.get(id) === e) this.drop(id);
		};
		dc.onmessage = (m) => {
			try {
				const a = JSON.parse(String(m.data));
				if (Array.isArray(a) && a.length >= 5 && a.slice(0, 4).every((n) => Number.isFinite(n))) this.onState(id, {
					x: a[0],
					y: a[1],
					z: a[2],
					yaw: a[3],
					anim: String(a[4]).slice(0, 12),
					show: a[5] !== 0,
					hp: typeof a[6] === "number" ? Math.max(0, Math.min(1, a[6])) : 1,
					dn: typeof a[7] === "string" ? a[7].slice(0, 24) : void 0,
					hpType: typeof a[8] === "string" ? a[8].slice(0, 20) : void 0
				});
			} catch {}
		};
	}
	/** Junta os candidatos de rede numa mensagem só (menos mensagens no Realtime). */
	async gathered(pc) {
		if (pc.iceGatheringState === "complete") return;
		await new Promise((r) => {
			const t = setTimeout(r, 2500);
			pc.addEventListener("icegatheringstatechange", () => {
				if (pc.iceGatheringState === "complete") {
					clearTimeout(t);
					r();
				}
			});
		});
	}
	async call(id) {
		if (this.closed || this.peers.has(id)) return;
		const { pc } = this.newPc(id);
		this.useChannel(id, pc.createDataChannel("pos", {
			ordered: false,
			maxRetransmits: 0
		}));
		this.useReliable(id, pc.createDataChannel("world", { ordered: true }));
		try {
			await pc.setLocalDescription(await pc.createOffer());
			await this.gathered(pc);
			if (!this.closed && this.peers.get(id)?.pc === pc) this.ch?.broadcast("sig", {
				to: id,
				from: this.me,
				kind: "offer",
				sdp: pc.localDescription?.sdp ?? ""
			});
		} catch {
			if (!this.closed && this.peers.get(id)?.pc === pc) this.drop(id);
		}
	}
	async onSignal(s) {
		if (this.discoveryClosed) return;
		try {
			if (this.closed || !/^[a-f0-9-]{36}$/.test(s.from) || typeof s.sdp !== "string" || s.sdp.length > 2e4) return;
			if (!this.names.has(s.from)) {
				if (this.pendingSignals.length < 16) this.pendingSignals.push(s);
				return;
			}
			if (s.kind === "offer") {
				this.drop(s.from, true);
				const { pc } = this.newPc(s.from);
				await pc.setRemoteDescription({
					type: "offer",
					sdp: s.sdp
				});
				await pc.setLocalDescription(await pc.createAnswer());
				await this.gathered(pc);
				if (!this.closed && this.peers.get(s.from)?.pc === pc) this.ch?.broadcast("sig", {
					to: s.from,
					from: this.me,
					kind: "answer",
					sdp: pc.localDescription?.sdp ?? ""
				});
			} else {
				const e = this.peers.get(s.from);
				if (e && e.pc.signalingState === "have-local-offer") await e.pc.setRemoteDescription({
					type: "answer",
					sdp: s.sdp
				});
			}
		} catch {}
	}
	drop(id, quiet = false) {
		const e = this.peers.get(id);
		if (!e) return;
		this.peers.delete(id);
		try {
			e.dc?.close();
			e.reliable?.close();
			e.pc.close();
		} catch {}
		if (!quiet) {
			this.onLeave(id);
			this.emitPeers();
		}
	}
	emitPeers() {
		this.onPeers([...this.peers].map(([id, e]) => ({
			id,
			name: this.names.get(id) ?? e.name,
			connected: e.connected && e.reliable?.readyState === "open"
		})));
	}
	/** Manda a posição para todos (direto, sem passar pelo Supabase). */
	send(s) {
		const msg = JSON.stringify([
			Math.round(s.x * 100) / 100,
			Math.round(s.y * 100) / 100,
			Math.round(s.z * 100) / 100,
			Math.round(s.yaw * 100) / 100,
			s.anim,
			s.show === false ? 0 : 1,
			Math.round((s.hp ?? 1) * 100) / 100,
			s.dn ?? "",
			s.hpType ?? "DisplayWhenDamaged"
		]);
		for (const e of this.peers.values()) if (e.dc?.readyState === "open") try {
			e.dc.send(msg);
		} catch {}
	}
	useReliable(id, dc) {
		const e = this.peers.get(id);
		if (!e) return;
		e.reliable = dc;
		dc.onopen = () => {
			if (this.peers.get(id) === e) this.emitPeers();
		};
		dc.onmessage = (message) => {
			if (this.closed || this.peers.get(id) !== e) return;
			if (typeof message.data !== "string" || message.data.length > 12e3) return;
			try {
				const m = JSON.parse(message.data);
				if (!m || typeof m.k !== "string") return;
				if (m.k !== "chunk") {
					this.onData(id, m);
					return;
				}
				if (typeof m.id !== "string" || m.id.length > 50 || !Number.isInteger(m.n) || !Number.isInteger(m.i) || m.n < 1 || m.n > 1024 || m.i < 0 || m.i >= m.n || typeof m.s !== "string" || m.s.length > 2e3) return;
				for (const [key, c] of this.chunks) if (Date.now() - c.at > 15e3) this.chunks.delete(key);
				const key = id + ":" + m.id;
				let c = this.chunks.get(key);
				if (!c) {
					if (this.chunks.size >= 16) return;
					c = {
						at: Date.now(),
						parts: [],
						count: 0,
						bytes: 0
					};
					this.chunks.set(key, c);
				}
				if (c.parts[m.i] !== void 0) return;
				c.parts[m.i] = m.s;
				c.count++;
				c.bytes += m.s.length;
				if (c.bytes > 2e6) {
					this.chunks.delete(key);
					return;
				}
				if (c.count === m.n) {
					this.chunks.delete(key);
					this.onData(id, JSON.parse(c.parts.join("")));
				}
			} catch {}
		};
		dc.onclose = () => {
			if (!this.closed && this.peers.get(id) === e) this.drop(id);
		};
	}
	sendData(to, data) {
		if (this.closed) return;
		const targets = (to === "*" ? [...this.peers.keys()] : [to]).filter((id) => this.peers.get(id)?.reliable?.readyState === "open");
		if (!targets.length) return;
		const encoded = JSON.stringify(data);
		if (encoded.length > 2e6) {
			this.onError("Este jogo ficou grande demais para sincronizar a sala. Reduza os objetos ou jogue sozinho.");
			return;
		}
		const id = crypto.randomUUID();
		const frames = encoded.length <= 2e3 ? [encoded] : Array.from({ length: Math.ceil(encoded.length / 2e3) }, (_, i) => JSON.stringify({
			k: "chunk",
			id,
			n: Math.ceil(encoded.length / 2e3),
			i,
			s: encoded.slice(i * 2e3, (i + 1) * 2e3)
		}));
		for (const peer of targets) {
			const dc = this.peers.get(peer)?.reliable;
			if (dc?.readyState !== "open") continue;
			if (dc.bufferedAmount + encoded.length * 4 > 4e6) {
				this.onError("A conexão ficou lenta. Entre novamente para sincronizar a sala.");
				continue;
			}
			try {
				for (const frame of frames) dc.send(frame);
			} catch {
				this.onError("A conexão da sala foi interrompida. Entre novamente para sincronizar.");
			}
		}
	}
	diagnostics() {
		return [...this.peers].map(([id, e]) => ({
			name: this.nameOf(id),
			connection: e.pc.connectionState,
			ice: e.pc.iceConnectionState,
			signaling: e.pc.signalingState,
			position: e.dc?.readyState,
			world: e.reliable?.readyState
		}));
	}
	nameOf(id) {
		return this.names.get(id) ?? "Jogador";
	}
	leave() {
		this.closed = true;
		for (const t of this.retryTimers) clearTimeout(t);
		this.retryTimers.clear();
		this.chunks.clear();
		for (const id of [...this.peers.keys()]) this.drop(id, true);
		this.ch?.leave();
		this.ch = null;
		this.pendingSignals = [];
		this.names.clear();
		this.members.clear();
		this.retries.clear();
	}
};
//#endregion
export { GameRoom, RealtimeChannel };
