import { Ct as toRuntime, St as parseChanges, bt as validRemote, yt as clientPhysics } from "./lagtest-index-DDqu-Ugr.js";
//#region lib/studio/game-session.ts
var workerUrl = () => new URL("./lua-worker.js", document.baseURI).href;
var GameSession = class {
	constructor(engine, room, project, name) {
		this.engine = engine;
		this.room = room;
		this.project = project;
		this.name = name;
		this.server = null;
		this.stopped = false;
		this.failed = false;
		this.started = false;
		this.ready = false;
		this.currentHost = "";
		this.startTimer = 0;
		this.timer = 0;
		this.ticks = 0;
		this.tickAt = 0;
		this.lastAck = 0;
		this.waiting = false;
		this.connected = /* @__PURE__ */ new Set();
		this.added = /* @__PURE__ */ new Set();
		this.rates = /* @__PURE__ */ new Map();
		this.helloAt = 0;
		this.began = performance.now();
		this.queued = [];
		this.world = "";
		this.lastWorldAt = 0;
		this.outgoing = [];
		this.characterPhysics = /* @__PURE__ */ new Map();
		this.onError = () => {};
		this.onReady = () => {};
		this.touchIds = new Set(project.insts.map((i) => i.id));
		this.clickIds = new Set(project.insts.filter((i) => i.cls === "ClickDetector").map((i) => i.id));
		room.onHost = (id) => this.hostChanged(id);
		room.onData = (from, m) => this.message(from, m);
		const peers = room.onPeers;
		room.onPeers = (list) => {
			peers(list);
			this.peers(list);
		};
		room.onError = (m) => this.fail(m);
		engine.connectNetwork(false, (p) => this.input(p), (p) => this.remote(p));
		this.timer = window.setInterval(() => this.step(), 50);
	}
	hostChanged(id) {
		if (this.currentHost && id !== this.currentHost && this.started) {
			this.fail("Quem estava hospedando a sala saiu. Entre novamente para começar outra partida.", "host");
			return;
		}
		this.currentHost = id;
		clearTimeout(this.startTimer);
		if (id === this.room.me) this.startTimer = window.setTimeout(() => {
			if (!this.stopped && !this.failed && this.room.isHost) this.startServer();
		}, 800);
	}
	fail(message, reason = "error") {
		if (this.stopped || this.failed) return;
		this.failed = true;
		this.engine.haltNetwork();
		this.room.leave();
		this.close();
		this.onError(message, reason);
	}
	startServer() {
		if (this.server) return;
		this.started = true;
		const w = new Worker(workerUrl(), { type: "module" });
		this.server = w;
		this.tickAt = performance.now();
		this.lastAck = this.tickAt;
		w.onmessage = (e) => {
			if (this.stopped || this.failed || w !== this.server) return;
			const m = e.data;
			if (m.studio === "fatal") {
				this.fail("O servidor da sala parou: " + String(m.message).slice(0, 250));
				return;
			}
			if (m.studio === "remote") {
				if (this.outgoing.length >= 128) {
					this.fail("Um script enviou chamadas remotas demais no mesmo passo. Reduza os envios e entre novamente.");
					return;
				}
				this.outgoing.push({
					target: m.target,
					kind: m.kind,
					id: m.id,
					request: m.request,
					args: m.args
				});
				return;
			}
			if (m.studio === "snapshot") {
				this.room.sendData(m.n, {
					k: "snapshot",
					text: m.text,
					world: [this.engine.networkWorld(true), ...this.characterPhysics.values()].filter(Boolean).join(";")
				});
				return;
			}
			if (m.studio === "ready") {
				this.ready = true;
				this.waiting = false;
				this.added.add(this.room.me);
				this.engine.connectNetwork(true, (p) => this.input(p), (p) => this.remote(p));
				for (const peer of this.connected) this.add(peer);
				for (const p of this.queued.splice(0)) this.remote(p);
			}
			if (m.studio === "tick") {
				this.waiting = false;
				this.lastAck = performance.now();
			}
			if (typeof m.text === "string" && m.text) {
				for (const c of parseChanges(m.text)) if (c.t === "new") {
					this.touchIds.add(c.id);
					if (c.cls === "ClickDetector") this.clickIds.add(c.id);
				} else if (c.t === "del") {
					this.touchIds.delete(c.id);
					this.clickIds.delete(c.id);
				}
				this.engine.networkReplica(m.text);
				this.room.sendData("*", {
					k: "replica",
					text: m.text
				});
			}
			if (this.stopped || this.failed) return;
			if (m.studio === "ready") {
				this.lastAck = performance.now();
				this.engine.startNetworkScripts();
				this.onReady();
			}
			for (const p of this.outgoing.splice(0)) this.deliverRemote(p.target, p);
		};
		w.onerror = () => this.fail("Não foi possível iniciar os scripts compartilhados. Entre novamente.");
		w.postMessage({
			studio: "start",
			player: this.name,
			network: {
				mode: "server",
				peer: this.room.me
			},
			...toRuntime(this.project)
		});
	}
	add(peer) {
		if (!this.ready || this.added.has(peer)) return;
		this.added.add(peer);
		this.server?.postMessage({
			studio: "network",
			op: "Player",
			args: [
				peer,
				this.room.nameOf(peer),
				true
			]
		});
	}
	peers(list) {
		const next = new Set(list.filter((p) => p.connected).map((p) => p.id));
		if (this.room.isHost && this.ready) {
			for (const id of next) this.add(id);
			for (const id of this.connected) if (!next.has(id) && this.added.delete(id)) {
				this.characterPhysics.delete(id);
				this.server?.postMessage({
					studio: "network",
					op: "Player",
					args: [
						id,
						"",
						false
					]
				});
			}
		}
		if (this.ready && !this.room.isHost && this.connected.has(this.currentHost) && !next.has(this.currentHost)) this.fail("A conexão com quem hospeda a sala caiu. Entre novamente para sincronizar.", "host");
		this.connected = next;
	}
	allow(id) {
		const at = performance.now();
		let r = this.rates.get(id);
		if (!r || at - r.at > 1e3) {
			r = {
				at,
				n: 0
			};
			this.rates.set(id, r);
		}
		return ++r.n <= 100;
	}
	message(from, m) {
		if (this.failed || this.stopped || !m || !this.connected.has(from) || this.room.isHost && !this.allow(from)) return;
		if (this.room.isHost) {
			if (!this.ready) return;
			if (m.k === "hello") {
				this.add(from);
				this.server?.postMessage({
					studio: "network",
					op: "Snapshot",
					args: [],
					n: from
				});
				return;
			}
			if (m.k === "remote" && validRemote(m.packet)) {
				const p = m.packet;
				if (p.target !== "server") return;
				this.server?.postMessage({
					studio: "network",
					op: "Receive",
					args: [
						from,
						p.kind,
						p.id,
						p.request,
						p.args
					]
				});
				return;
			}
			if (m.k === "input") this.serverInput(from, m.input);
			return;
		}
		if (from !== this.currentHost) return;
		if (m.k === "snapshot" && !this.ready && typeof m.text === "string" && m.text.length <= 2e6) {
			this.started = true;
			this.engine.networkReplica(m.text, true);
			if (typeof m.world === "string") this.engine.applyNetworkWorld(m.world);
			this.ready = true;
			this.engine.startNetworkScripts();
			for (const p of this.queued.splice(0)) this.remote(p);
			this.onReady();
		} else if (m.k === "replica" && this.ready && typeof m.text === "string" && m.text.length <= 2e6) this.engine.networkReplica(m.text);
		else if (m.k === "world" && this.ready && typeof m.phys === "string" && m.phys.length <= 1e6) this.engine.applyNetworkWorld(m.phys);
		else if (m.k === "remote" && validRemote(m.packet)) this.engine.receiveNetworkRemote("server", m.packet);
	}
	serverInput(peer, p) {
		if (!p || typeof p.phys !== "string" || p.phys.length > 1e6 || typeof p.touches !== "string" || p.touches.length > 8192 || typeof p.events !== "string" || p.events.length > 4096) return;
		const phys = clientPhysics(p.phys, peer), own = "np_" + peer + "_";
		const touches = p.touches.split(";").filter((v) => {
			const f = v.split(",");
			return f.length === 3 && this.touchIds.has(f[0]) && [
				"HRP",
				"CLFoot",
				"CRFoot",
				"CHead",
				"CTorso"
			].some((k) => f[1] === own + k) && /^[01]$/.test(f[2]);
		}).slice(0, 64).join(";");
		const events = p.events.split(";").filter((v) => /^(hstate:(Running|Jumping|Freefall|Landed|Dead),[\d.-]+|fell|respawn|reset|moveto:[01])$/.test(v) || /^click:/.test(v) && this.clickIds.has(v.slice(6))).slice(0, 30).join(";");
		if (phys) this.characterPhysics.set(peer, phys);
		this.server?.postMessage({
			studio: "network",
			op: "Input",
			args: [
				peer,
				phys,
				touches,
				events
			]
		});
	}
	input(p) {
		if (this.stopped || !this.ready || this.failed) return;
		if (this.room.isHost) this.serverInput(this.room.me, p);
		else this.room.sendData(this.currentHost, {
			k: "input",
			input: {
				...p,
				phys: clientPhysics(p.phys, this.room.me)
			}
		});
	}
	remote(p) {
		if (this.stopped || this.failed || !validRemote(p)) return;
		if (!this.ready) {
			if (this.queued.length < 128) this.queued.push(p);
			return;
		}
		if (this.room.isHost) this.server?.postMessage({
			studio: "network",
			op: "Receive",
			args: [
				this.room.me,
				p.kind,
				p.id,
				p.request,
				p.args
			]
		});
		else this.room.sendData(this.currentHost, {
			k: "remote",
			packet: p
		});
	}
	deliverRemote(target, p) {
		if (!validRemote(p)) return;
		if (target === "*" || target === this.room.me) this.engine.receiveNetworkRemote("server", p);
		if (target !== this.room.me) this.room.sendData(target, {
			k: "remote",
			packet: p
		});
	}
	step() {
		if (this.stopped || this.failed) return;
		const now = performance.now();
		if (now - this.began > 36e5) {
			this.fail("A sala completou uma hora. Entre novamente para iniciar outra partida.", "limit");
			return;
		}
		if (!this.ready) {
			if (now - this.began > 3e4) {
				this.fail("Não foi possível sincronizar a sala. A rede pode bloquear conexões diretas. Tente outra rede ou jogue sozinho.");
				return;
			}
			if (!this.room.isHost && this.connected.has(this.currentHost) && now - this.helloAt > 1e3) {
				this.helloAt = now;
				this.room.sendData(this.currentHost, { k: "hello" });
			}
			return;
		}
		if (!this.room.isHost) return;
		if (this.waiting) {
			if (now - this.lastAck > 4e3) this.fail("Um script da sala ficou sem responder. Confira os laços com task.wait() e entre novamente.");
			return;
		}
		if (now - this.lastWorldAt > 100) {
			this.lastWorldAt = now;
			const objects = this.engine.networkWorld(), characters = [...this.characterPhysics.values()].join(";");
			const phys = [objects, characters].filter(Boolean).join(";");
			if (characters) this.engine.applyNetworkWorld(characters);
			if (objects) this.world += this.world ? ";" + objects : objects;
			if (phys) this.room.sendData("*", {
				k: "world",
				phys
			});
		}
		const dt = Math.min(.2, (now - this.tickAt) / 1e3);
		this.tickAt = now;
		this.waiting = true;
		this.server?.postMessage({
			studio: "tick",
			dt,
			phys: this.world,
			touches: "",
			events: "",
			n: ++this.ticks
		});
		this.world = "";
	}
	close() {
		this.stopped = true;
		clearTimeout(this.startTimer);
		clearInterval(this.timer);
		this.server?.terminate();
		this.server = null;
		this.engine.onNetworkInput = null;
		this.engine.onNetworkRemote = null;
		this.queued = [];
		this.outgoing = [];
		this.world = "";
		this.characterPhysics.clear();
		this.connected.clear();
		this.added.clear();
		this.touchIds.clear();
		this.clickIds.clear();
		this.rates.clear();
	}
};
//#endregion
export { GameSession };
