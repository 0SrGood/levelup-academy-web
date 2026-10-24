import { E as require_react, T as require_profiling, n as saveCode, w as require_jsx_runtime } from "./lagtest-offline-guard-Bgh6rVPp.js";
import { a as mountHost, c as pe, i as hud, l as rec, n as checkpoint, o as withTimeout, r as countdown, s as autoWalk, sn as local, t as SHORT, u as sleep } from "./lagtest-index-DDqu-Ugr.js";
import StudioLite from "./lagtest-StudioLite-BG7bgRc1.js";
//#region ../../scripts/lag-test/page/editor-test.tsx
var import_react = require_react();
var import_profiling = require_profiling();
var import_jsx_runtime = require_jsx_runtime();
var USER = "lagtest-aluno";
var coarse = () => matchMedia("(pointer: coarse)").matches;
async function waitFor(fn, ms, msg) {
	const t = performance.now();
	while (!fn()) {
		if (performance.now() - t > ms) throw new Error(msg);
		await sleep(100);
	}
}
var canvas = () => rec.engine.renderer.domElement;
var pid = 100;
async function tap(x, y) {
	const el = canvas(), t = coarse(), id = ++pid;
	pe(el, "pointerdown", id, x, y, t);
	await sleep(60);
	pe(el, "pointerup", id, x, y, t, 0, 0);
}
async function drag(x0, y0, dx, dy, ms, kind) {
	const el = canvas(), t = coarse(), id = ++pid, button = kind === "orbit" && !t ? 2 : 0, buttons = button === 2 ? 2 : 1, steps = Math.max(6, Math.round(ms / 33));
	pe(el, "pointerdown", id, x0, y0, t, button, buttons);
	for (let i = 1; i <= steps; i++) {
		await sleep(ms / steps);
		pe(el, "pointermove", id, x0 + dx * i / steps, y0 + dy * i / steps, t, button, buttons);
	}
	pe(el, "pointerup", id, x0 + dx, y0 + dy, t, button, 0);
}
/** Pontos da tela que acertam peças não travadas (para selecionar e mover). */
function partPoints() {
	const r = canvas().getBoundingClientRect(), e = rec.engine, out = [], seen = /* @__PURE__ */ new Set();
	for (let gy = 1; gy < 8; gy++) for (let gx = 1; gx < 10; gx++) {
		const x = r.left + r.width * gx / 10, y = r.top + r.height * gy / 8;
		let id = null;
		try {
			id = e.hitId({
				clientX: x,
				clientY: y
			});
		} catch {}
		if (id && !seen.has(id)) {
			seen.add(id);
			out.push({
				x,
				y,
				id
			});
		}
	}
	return out;
}
var byText = (sel, text) => [...document.querySelectorAll(sel)].find((b) => b.textContent?.trim() === text);
var explorerOpen = () => !!document.querySelector(".sl-explorer");
async function toggleExplorer() {
	if (coarse()) {
		const b = document.querySelector("button.sl-rail-btn[aria-label^=\"Explorador\"]");
		if (b) {
			b.click();
			return true;
		}
	}
	byText(".sl-rtabs button", "Exibir")?.click();
	await sleep(120);
	const b = document.querySelector("button[title^=\"Explorador:\"]");
	if (b) {
		b.click();
		return true;
	}
	return false;
}
async function openScript(project) {
	const insts = project.insts, script = insts.find((i) => i.cls === "Script") ?? insts.find((i) => i.cls === "LocalScript");
	if (!script) return "sem script no projeto";
	if (!explorerOpen()) await toggleExplorer();
	await sleep(300);
	const chain = [];
	let p = script.parent;
	while (p) {
		chain.unshift(p);
		p = insts.find((i) => i.id === p)?.parent ?? null;
	}
	for (const id of chain) {
		const row = document.querySelector(`.sl-row[data-id="${CSS.escape(id)}"]`);
		if ((row?.parentElement)?.getAttribute("aria-expanded") === "false") {
			row.querySelector(".sl-twist")?.click();
			await sleep(200);
		}
	}
	const row = document.querySelector(`.sl-row[data-id="${CSS.escape(script.id)}"]`);
	if (!row) return "linha do script não encontrada no Explorador";
	if (coarse()) {
		row.click();
		await sleep(120);
		row.click();
	} else row.dispatchEvent(new MouseEvent("dblclick", {
		bubbles: true,
		cancelable: true
	}));
	await waitFor(() => !!document.querySelector("#code-editor"), 5e3, "O editor de script não abriu");
	return "ok: " + script.name;
}
async function typeText(text, perChar) {
	const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value").set;
	for (const ch of text) {
		const ta = document.querySelector("#code-editor");
		if (!ta) return false;
		ta.focus();
		const v = ta.value;
		setter.call(ta, v + ch);
		ta.selectionStart = ta.selectionEnd = v.length + 1;
		ta.dispatchEvent(new Event("input", { bubbles: true }));
		await sleep(perChar);
	}
	return true;
}
var playBtn = () => document.querySelector("button.sl-play:not(.stop)");
var stopBtn = () => document.querySelector("button.sl-play.stop");
async function startPlay(timeout) {
	const before = rec.workers.length, t = performance.now();
	const b = playBtn();
	if (b) b.click();
	else window.dispatchEvent(new KeyboardEvent("keydown", {
		key: "F5",
		bubbles: true
	}));
	await waitFor(() => !!rec.engine?.playing && rec.workers.length > before && rec.workers[rec.workers.length - 1].readyAt != null, timeout, "O jogo não ficou pronto em " + timeout / 1e3 + " s");
	return Math.round(performance.now() - t);
}
async function stopPlay() {
	const b = stopBtn();
	if (b) b.click();
	else window.dispatchEvent(new KeyboardEvent("keydown", {
		key: "F5",
		shiftKey: true,
		bubbles: true
	}));
	await waitFor(() => !rec.engine?.playing, 1e4, "O jogo não parou em 10 s");
}
function snapshot() {
	const e = rec.engine, heap = performance.memory, info = e?.renderer?.info;
	return {
		heapMB: heap ? Math.round(heap.usedJSHeapSize / 104857.6) / 10 : null,
		liveWorkers: rec.workers.filter((w) => w.terminatedAt == null).length,
		totalWorkers: rec.workers.length,
		geometries: info?.memory?.geometries ?? null,
		textures: info?.memory?.textures ?? null,
		programs: info?.programs?.length ?? null,
		domNodes: document.getElementsByTagName("*").length,
		canvases: document.querySelectorAll("canvas").length
	};
}
async function run(c, mode) {
	try {
		local.removeItem("levelup-studio-graficos");
	} catch {}
	await saveCode(USER, "studio", JSON.stringify(c.project));
	const host = mountHost();
	host.className = "app-shell in-lab";
	const root = (0, import_profiling.createRoot)(host);
	let ready = () => {};
	const opened = new Promise((r) => ready = r);
	rec.setPhase("abrindo-editor");
	hud("Abrindo o editor…");
	const t = performance.now();
	root.render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Profiler, {
		id: "StudioLite",
		onRender: rec.onRender,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioLite, {
			userId: USER,
			playerName: "Aluno",
			onReady: () => ready(),
			onExit: () => {},
			onHome: () => {},
			onLeave: () => {}
		})
	}));
	try {
		await withTimeout(opened, 4e4, "O editor não abriu em 40 s");
		rec.startup.openToEditorMs = Math.round(performance.now() - t);
		await waitFor(() => !!rec.engine, 15e3, "Motor do editor não encontrado");
		rec.extra.engineAtEditor = rec.engineInfo();
		rec.extra.before = snapshot();
		checkpoint("editor-aberto");
		await sleep(800);
		if (mode === "uso") await uso(c);
		else await ciclos();
	} finally {
		rec.extra.engineAtEnd = rec.engineInfo();
		rec.extra.after = snapshot();
		root.unmount();
		host.remove();
	}
}
async function uso(c) {
	const r = canvas().getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2, log = [];
	rec.setPhase("editor-girar-camera");
	hud("Teste 4 · girando a câmera");
	for (let k = 0; k < 3; k++) await drag(r.left + r.width * .5, r.top + r.height * .2, (k % 2 ? -1 : 1) * r.width * .25, r.height * .05, 1800, "orbit");
	checkpoint("editor-girar-camera");
	rec.setPhase("editor-selecionar");
	hud("Teste 4 · selecionando peças");
	const pts = partPoints();
	log.push("pontos com peça: " + pts.length);
	for (let k = 0; k < 6; k++) {
		const p = pts[k % Math.max(1, pts.length)] ?? {
			x: cx,
			y: cy
		};
		await tap(p.x, p.y);
		await sleep(900);
	}
	checkpoint("editor-selecionar");
	rec.setPhase("editor-mover-peca");
	hud("Teste 4 · movendo uma peça");
	const p = partPoints()[0];
	if (p) {
		await tap(p.x, p.y);
		await sleep(700);
		await drag(p.x, p.y, 70, 0, 1500, "part");
		await sleep(500);
		const q = partPoints().find((x) => x.id === p.id) ?? {
			x: p.x + 70,
			y: p.y
		};
		await drag(q.x, q.y, -70, 0, 1500, "part");
		log.push("peça movida: " + p.id);
	} else log.push("nenhuma peça móvel encontrada na tela");
	await sleep(800);
	checkpoint("editor-mover-peca");
	rec.setPhase("editor-explorador");
	hud("Teste 4 · abrindo e fechando o Explorador");
	for (let k = 0; k < 4; k++) {
		log.push("explorador " + (await toggleExplorer() ? "ok" : "botão não achado") + " → " + (explorerOpen() ? "aberto" : "fechado"));
		await sleep(1300);
	}
	checkpoint("editor-explorador");
	rec.setPhase("editor-digitar");
	hud("Teste 4 · digitando num script");
	let opened = "";
	try {
		opened = await openScript(c.project);
	} catch (e) {
		opened = "falhou: " + e.message;
	}
	log.push("script: " + opened);
	if (opened.startsWith("ok")) log.push("digitou: " + await typeText("\n-- teste de travamento: digitando no script\nlocal pontos = 10\n", 110));
	checkpoint("editor-digitar");
	document.querySelector(".sl-docs button[role=tab]")?.click();
	await sleep(400);
	rec.setPhase("carregando-jogo");
	hud("Teste 4 · apertando Jogar");
	rec.startup.playToReadyMs = await startPlay(3e4);
	rec.extra.engineAtPlay = rec.engineInfo();
	checkpoint("jogo-pronto");
	rec.setPhase("jogando");
	rec.resetRenderClock();
	const walk = autoWalk("touch");
	await countdown(20, "Teste 4 · jogando", (s) => checkpoint("jogando-" + s + "s"));
	rec.extra.inputMode = walk.mode;
	walk.stop();
	await stopPlay();
	rec.extra.actions = log;
}
async function ciclos() {
	const N = SHORT ? 3 : 15;
	for (let i = 1; i <= N; i++) {
		rec.setPhase("carregando-ciclo-" + i);
		hud(`Teste 5 · Jogar ${i} de ${N}`);
		let readyMs = null, err = null;
		try {
			readyMs = await startPlay(2e4);
			rec.extra.engineAtPlay ??= rec.engineInfo();
		} catch (e) {
			err = e.message;
		}
		if (!err) {
			rec.setPhase("jogando-ciclo-" + i);
			rec.resetRenderClock();
			const walk = autoWalk("touch");
			await sleep(3e3);
			rec.extra.inputMode = walk.mode;
			walk.stop();
		}
		rec.setPhase("parando-ciclo-" + i);
		hud(`Teste 5 · Parar ${i} de ${N}`);
		try {
			await stopPlay();
		} catch (e) {
			err = (err ? err + "; " : "") + e.message;
		}
		await sleep(1500);
		const w = rec.workers[rec.workers.length - 1];
		rec.cycles.push({
			cycle: i,
			playToReadyMs: readyMs,
			workerReadyMs: w?.readyMs ?? null,
			error: err,
			...snapshot()
		});
		checkpoint("ciclo-" + i);
		if (err && /não ficou pronto|não parou/.test(err)) break;
	}
	rec.setPhase("depois-dos-ciclos");
	hud("Teste 5 · esperando a memória baixar");
	await sleep(4e3);
	rec.extra.afterIdle = snapshot();
	const failed = rec.cycles.find((c) => c.error);
	if (failed || rec.cycles.length !== N) throw new Error(`Teste de ciclos incompleto: ${rec.cycles.filter((c) => !c.error).length}/${N}. ${failed?.error ?? "Nem todos os ciclos foram executados."}`);
}
//#endregion
export { run };
