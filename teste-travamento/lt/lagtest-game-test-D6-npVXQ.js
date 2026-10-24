const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./lagtest-StudioLite-BG7bgRc1.js","./lagtest-offline-guard-Bgh6rVPp.js","./lagtest-index-DDqu-Ugr.js","./lagtest-offline-guard-DXashqPX.css","./lagtest-mock-pwa-BHJj_hmx.js"])))=>i.map(i=>d[i]);
import { E as require_react, T as require_profiling, g as RotateCw, l as LevelUpLoader, u as api, w as require_jsx_runtime } from "./lagtest-offline-guard-Bgh6rVPp.js";
import { a as mountHost, cn as session, i as hud, l as rec, n as checkpoint, p as __vitePreload, r as countdown, s as autoWalk, sn as local, u as sleep } from "./lagtest-index-DDqu-Ugr.js";
//#region lib/game-downloads.ts
var import_react = require_react();
var import_profiling = require_profiling();
var import_jsx_runtime = require_jsx_runtime();
//#endregion
//#region components/GamesPage.tsx
/** "Jogue criações dos nossos alunos": jogos aprovados pelo professor.
*  Com login (aba Jogos da plataforma): votar 👍/👎 e "Meus jogos". Sem login (link …/jogos/): jogar e baixar.
*  Leve para a franquia grátis: 24 jogos por vez, miniaturas pequenas, cada jogo baixado só ao jogar ou ao baixar,
*  e jogos baixados rodam sem internet (nada do servidor). */
var StudioLite = (0, import_react.lazy)(() => __vitePreload(() => import("./lagtest-StudioLite-BG7bgRc1.js"), __vite__mapDeps([0,1,2,3,4]), import.meta.url));
(() => {
	try {
		const back = session.getItem("levelup-resume-game");
		if (back) {
			session.removeItem("levelup-resume-game");
			if (/^[\w-]{1,80}$/.test(back)) return back;
		}
		const q = new URLSearchParams(location.search);
		const id = q.get("j");
		if (!id) return null;
		q.delete("j");
		history.replaceState(null, "", location.pathname + (q.toString() ? "?" + q.toString().replace(/=(&|$)/g, "$1") : "") + location.hash);
		if (/^[a-f0-9]{32}$/.test(id)) return id.replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, "$1-$2-$3-$4-$5");
		return /^[\w-]{1,80}$/.test(id) ? id : null;
	} catch {
		return null;
	}
})();
/** Abre um jogo em tela cheia, só para jogar (nada é salvo no aparelho).
*  Com internet, avisa o servidor a cada minuto ("jogando agora"); offline, joga sem avisar ninguém. */
function GamePlayer({ game, playerName, userId, onClose, offline = false }) {
	const mpName = (String(playerName || "").trim().split(/\s+/)[0] || "Visitante").slice(0, 20);
	let project = null;
	try {
		project = JSON.parse(game.project);
	} catch {}
	(0, import_react.useEffect)(() => {
		const d = document.documentElement.dataset;
		d.busy = "game";
		return () => {
			if (d.busy === "game") delete d.busy;
			__vitePreload(() => import("./lagtest-mock-pwa-BHJj_hmx.js").then((n) => n.n).then((m) => {
				if (m.isUpdatePending()) {
					try {
						session.setItem("levelup-resume-game", game.id);
					} catch {}
					m.updateNow();
				}
			}), __vite__mapDeps([4,1,2,3]), import.meta.url);
		};
	}, [game.id]);
	(0, import_react.useEffect)(() => {
		if (offline) return;
		const sid = crypto.randomUUID();
		const ping = () => {
			if (!document.hidden && navigator.onLine) api({
				action: "game-ping",
				id: game.id,
				sid
			}).catch(() => {});
		};
		ping();
		const t = window.setInterval(ping, 6e4);
		return () => {
			window.clearInterval(t);
			if (navigator.onLine) api({
				action: "game-leave",
				id: game.id,
				sid
			}).catch(() => {});
		};
	}, [game.id, offline]);
	(0, import_react.useEffect)(() => {
		if (!(matchMedia("(pointer:coarse)").matches && Math.min(screen.width, screen.height) < 600)) return;
		let full = false;
		(async () => {
			try {
				if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
					await document.documentElement.requestFullscreen({ navigationUI: "hide" });
					full = true;
				}
			} catch {}
			try {
				await screen.orientation?.lock?.("landscape");
			} catch {}
		})();
		return () => {
			try {
				screen.orientation?.unlock?.();
			} catch {}
			if (full && document.fullscreenElement) document.exitFullscreen().catch(() => {});
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
		fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "games-loading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelUpLoader, {
				title: game.title,
				detail: "Carregando o jogo…"
			})
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioLite, {
			userId,
			playerName,
			playOnly: {
				project,
				title: game.title,
				author: game.author,
				onClose,
				...game.multi && !offline ? { multi: {
					gameId: game.id,
					name: mpName,
					version: game.v
				} } : {}
			}
		}, game.id), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "po-rotate",
			role: "alert",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { size: 44 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Gire o celular" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Os jogos são jogados com o celular deitado." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					children: "Sair do jogo"
				})
			]
		})]
	});
}
//#endregion
//#region ../../scripts/lag-test/page/game-test.tsx
async function waitFor(fn, ms, msg) {
	const t = performance.now();
	while (!fn()) {
		if (performance.now() - t > ms) throw new Error(msg);
		await sleep(100);
	}
}
async function run(c) {
	try {
		local.removeItem("levelup-studio-graficos");
	} catch {}
	const host = mountHost();
	const root = (0, import_profiling.createRoot)(host);
	const game = {
		id: "lagtest-" + c.fixture,
		title: c.project.name || "Jogo de teste",
		author: "Aluno",
		project: JSON.stringify(c.project)
	};
	rec.setPhase("carregando-jogo");
	hud("Carregando o jogo…");
	const t = performance.now();
	let walk = null;
	try {
		root.render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Profiler, {
			id: "GamePlayer",
			onRender: rec.onRender,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GamePlayer, {
				game,
				playerName: "Aluno",
				userId: "lagtest-aluno",
				onClose: () => {}
			})
		}));
		await waitFor(() => !!rec.engine, 3e4, "O motor não apareceu em 30 s");
		rec.startup.engineVisibleMs = Math.round(performance.now() - t);
		await waitFor(() => !!rec.engine?.playing && rec.workers.some((w) => w.readyAt != null), 4e4, "O jogo não ficou pronto em 40 s");
		rec.startup.openToReadyMs = Math.round(performance.now() - t);
		rec.extra.engineAtPlay = rec.engineInfo();
		checkpoint("jogo-pronto");
		await sleep(500);
		rec.setPhase("jogando");
		rec.resetRenderClock();
		walk = autoWalk("touch");
		await countdown(45, "Teste 3", (s) => {
			rec.extra.inputMode = walk.mode;
			checkpoint("jogando-" + s + "s");
		});
		rec.extra.inputMode = walk.mode === "touch" ? "controle de toque (.sl-stick)" : "engine.setInput (sem controle de toque na tela)";
		rec.extra.engineAtEnd = rec.engineInfo();
		rec.extra.domNodes = document.getElementsByTagName("*").length;
	} finally {
		walk?.stop();
		root.unmount();
		host.remove();
	}
}
//#endregion
export { run };
