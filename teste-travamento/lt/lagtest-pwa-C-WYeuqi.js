import { D as __exportAll, E as require_react } from "./lagtest-offline-guard-09XAK-Pr.js";
import { an as diagnosticEvent, on as markDiagnosticReload } from "./lagtest-index-BzqKvxjC.js";
//#region lib/reload-guard.ts
var import_react = require_react();
var STUDIO_RELOAD_CONFIRMATION = "Você tem certeza que quer recarregar a página?";
var studios = /* @__PURE__ */ new Set();
function warnBeforeUnload(event) {
	if (!studios.size) return;
	event.preventDefault();
	event.returnValue = STUDIO_RELOAD_CONFIRMATION;
}
/** Only the mounted Studio Lite owns the native refresh/close warning. */
function protectStudioReload() {
	if (typeof window === "undefined") return () => {};
	const scope = Symbol("StudioLite");
	if (!studios.size) window.addEventListener("beforeunload", warnBeforeUnload);
	studios.add(scope);
	document.documentElement.dataset.studioOpen = "1";
	let released = false;
	return () => {
		if (released) return;
		released = true;
		studios.delete(scope);
		if (!studios.size) {
			window.removeEventListener("beforeunload", warnBeforeUnload);
			delete document.documentElement.dataset.studioOpen;
		}
	};
}
function studioIsOpen() {
	return studios.size > 0;
}
function pageReloadProtected() {
	if (studioIsOpen()) return true;
	if (typeof document === "undefined") return false;
	const d = document.documentElement.dataset;
	return d.busy === "game" || d.busy === "lab" || d.studioOpen === "1";
}
/** App requests never interrupt a mounted Studio, even if a parent marker is overwritten.
* Explicit error recovery may ignore a stale parent marker after React unmounted the failed screen. */
function requestPageReload(reason, { recovering = false } = {}) {
	if (studioIsOpen() || !recovering && pageReloadProtected()) {
		diagnosticEvent("reload-blocked", reason);
		return false;
	}
	markDiagnosticReload(reason);
	location.reload();
	return true;
}
//#endregion
//#region lib/pwa.ts
/** Instalação da Level Up Academy como aplicativo (PWA) e preparação das notificações.
*  - Android/Chrome: guarda o evento beforeinstallprompt e abre a instalação nativa no clique.
*  - iPhone/iPad: não existe instalação automática; a interface mostra o passo a passo do Safari.
*  - Convite da primeira visita: aparece uma vez em celulares, respeita "Agora não" e nunca aparece no app instalado. */
var pwa_exports = /* @__PURE__ */ __exportAll({
	applyUpdate: () => applyUpdate,
	canInstallHere: () => canInstallHere,
	currentBuild: () => currentBuild,
	enableNotifications: () => enableNotifications,
	hasNewVersion: () => hasNewVersion,
	installedAppDetected: () => installedAppDetected,
	inviteDismissed: () => inviteDismissed,
	inviteShown: () => inviteShown,
	isBusy: () => isBusy,
	isUpdatePending: () => isUpdatePending,
	latestBuild: () => latestBuild,
	notificationState: () => notificationState,
	notifyDevice: () => notifyDevice,
	notifyInviteDismissed: () => notifyInviteDismissed,
	notifyInviteDue: () => notifyInviteDue,
	preferSiteNotifications: () => preferSiteNotifications,
	promptInstall: () => promptInstall,
	pushEndpoint: () => pushEndpoint,
	readPwaState: () => readPwaState,
	registerServiceWorker: () => registerServiceWorker,
	safeToReload: () => safeToReload,
	shouldInvite: () => shouldInvite,
	startPwa: () => startPwa,
	syncPush: () => syncPush,
	tutorialOpened: () => tutorialOpened,
	updateNow: () => updateNow,
	useBusy: () => useBusy,
	usePwa: () => usePwa,
	waitForPrompt: () => waitForPrompt,
	webPushSupported: () => webPushSupported
});
var keys = {
	installed: "levelup-pwa-installed",
	invite: "levelup-pwa-invite"
};
var read = (k) => {
	try {
		return localStorage.getItem(k);
	} catch {
		return null;
	}
};
var write = (k, v) => {
	try {
		localStorage.setItem(k, v);
	} catch {}
};
var deferred = null, started = false, snapshot = null;
var listeners = /* @__PURE__ */ new Set();
function emit() {
	snapshot = null;
	listeners.forEach((fn) => fn());
}
function detect() {
	if (typeof window === "undefined") return {
		platform: "desktop",
		mobile: false,
		standalone: false,
		canPrompt: false,
		installed: false,
		iosSafari: false,
		iosBrowser: "",
		androidBrowser: "",
		inApp: false
	};
	const ua = navigator.userAgent;
	const ios = /iPad|iPhone|iPod/.test(ua) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
	const android = /Android/i.test(ua);
	const standalone = matchMedia("(display-mode: standalone)").matches || matchMedia("(display-mode: fullscreen)").matches || navigator.standalone === true;
	const inAppUa = /Instagram|FBAN|FBAV|FB_IAB|WhatsApp|Line\/|TikTok|musical_ly|Snapchat|Twitter/.test(ua);
	const iosBrowser = ios ? /CriOS/.test(ua) ? "Chrome" : /FxiOS/.test(ua) ? "Firefox" : /EdgiOS/.test(ua) ? "Edge" : /OPiOS|OPT\//.test(ua) ? "Opera" : /GSA\//.test(ua) ? "Google" : inAppUa ? "navegador do aplicativo" : "Safari" : "";
	const androidBrowser = android ? inAppUa || /; wv\)/.test(ua) ? "in-app" : /SamsungBrowser/.test(ua) ? "Samsung Internet" : /Firefox/.test(ua) ? "Firefox" : /EdgA/.test(ua) ? "Edge" : /OPR\//.test(ua) ? "Opera" : /Chrome\//.test(ua) ? "Chrome" : "outro" : "";
	return {
		platform: ios ? "ios" : android ? "android" : "desktop",
		mobile: ios || android,
		standalone,
		canPrompt: !!deferred,
		installed: standalone || read(keys.installed) === "1",
		iosSafari: iosBrowser === "Safari",
		iosBrowser,
		androidBrowser,
		inApp: androidBrowser === "in-app" || ios && iosBrowser === "navegador do aplicativo"
	};
}
/** Chamado uma vez no início do site, antes de renderizar, para não perder o evento de instalação. */
function startPwa() {
	if (started || typeof window === "undefined") return;
	started = true;
	const w = window;
	const offer = (event) => {
		deferred = event;
		try {
			localStorage.removeItem(keys.installed);
		} catch {}
		emit();
	};
	if (w.__luInstallPrompt) offer(w.__luInstallPrompt);
	if (w.__luInstalled) write(keys.installed, "1");
	addEventListener("beforeinstallprompt", (event) => {
		event.preventDefault();
		offer(event);
	});
	addEventListener("appinstalled", () => {
		deferred = null;
		write(keys.installed, "1");
		emit();
	});
	matchMedia("(display-mode: standalone)").addEventListener?.("change", emit);
	if (detect().standalone) write(keys.installed, "1");
}
/** Espera alguns segundos pelo pedido de instalação do Chrome, que pode chegar depois da abertura da página. */
function waitForPrompt(ms) {
	if (deferred) return Promise.resolve(true);
	return new Promise((resolve) => {
		const done = (ok) => {
			clearTimeout(timer);
			listeners.delete(check);
			resolve(ok);
		};
		const check = () => {
			if (deferred) done(true);
		};
		const timer = setTimeout(() => done(false), ms);
		listeners.add(check);
	});
}
/** Registra o service worker e mantém o app atualizado. O app instalado fica "vivo" em segundo plano e, sem isto,
*  continuaria com o código antigo até ser fechado de vez. Ao voltar para a tela, procuramos versão nova; quando ela
*  assume, o app recarrega sozinho se estiver em segundo plano, ou avisa com o botão "Atualizar" (evento levelup-update).
*  Nunca recarrega no meio de um jogo nem no Laboratório (nem com o app em segundo plano): o jogo não tem onde guardar
*  o progresso, então a versão nova só entra quando o aluno sai do jogo/laboratório ou abre o site de novo. */
function registerServiceWorker() {
	if (typeof navigator === "undefined" || !("serviceWorker" in navigator) || !isSecureContext) return;
	const hadController = !!navigator.serviceWorker.controller;
	let reloading = false, watching = false;
	const reload = () => {
		if (reloading || isBusy()) return;
		reloading = requestPageReload("Atualização automática da PWA fora do jogo");
	};
	navigator.serviceWorker.addEventListener("controllerchange", () => {
		if (!hadController) return;
		updatePending = true;
		window.dispatchEvent(new Event("levelup-update"));
		if (safeToReload() && !document.hidden) {
			reload();
			return;
		}
		if (watching) return;
		watching = true;
		let timer = null;
		const whenHidden = () => {
			clearTimeout(timer);
			if (document.hidden && !isBusy()) timer = setTimeout(() => {
				if (document.hidden && !isBusy()) reload();
			}, 5 * 6e4);
		};
		document.addEventListener("visibilitychange", whenHidden);
		whenHidden();
	});
	addEventListener("load", () => {
		navigator.serviceWorker.register("./sw.js", { scope: "./" }).then((reg) => {
			const check = () => {
				if (!document.hidden && navigator.onLine && !isBusy()) reg.update().catch(() => {});
			};
			document.addEventListener("visibilitychange", check);
			addEventListener("focus", check);
			setInterval(check, 20 * 6e4);
			const compare = async () => {
				if (document.hidden) return;
				if (await hasNewVersion() && !document.hidden && safeToReload()) updateNow();
			};
			setTimeout(compare, 4e3);
			document.addEventListener("visibilitychange", () => {
				compare();
			});
			addEventListener("focus", () => {
				compare();
			});
			setInterval(() => {
				compare();
			}, 5 * 6e4);
			let wasBusy = isBusy();
			subscribeBusy(() => {
				const now = isBusy();
				if (wasBusy && !now) {
					check();
					compare();
				}
				wasBusy = now;
			});
		}).catch(() => {});
	});
}
/** Versão em uso (nome do arquivo principal, ex.: index-C8PJJjj6.js). Vazio na prévia. */
var currentBuild = () => typeof document !== "undefined" && document.querySelector("meta[name=\"lu-build\"]")?.getAttribute("content") || typeof window !== "undefined" && window.__levelupBuild || "";
/** Versão publicada agora (lê só a página inicial do site no GitHub; nada passa pelo Supabase). */
async function latestBuild() {
	if (typeof navigator !== "undefined" && !navigator.onLine) return "";
	try {
		const r = await fetch(new URL("./", location.href).href.split("?")[0] + "?lu-download=versao&t=" + Date.now(), { cache: "no-store" });
		if (!r.ok) return "";
		const html = await r.text();
		return /<meta name="lu-build" content="([\w-]+)"/.exec(html)?.[1] ?? /index-[\w-]+\.js/.exec(html)?.[0] ?? "";
	} catch {
		return "";
	}
}
var updatePending = false;
/** Tem versão nova? (marca para atualizar assim que for seguro) */
async function hasNewVersion() {
	const cur = currentBuild();
	if (!cur) return false;
	const l = await latestBuild();
	if (l && l !== cur) {
		if (!updatePending) {
			updatePending = true;
			window.dispatchEvent(new Event("levelup-update"));
		}
		return true;
	}
	return false;
}
var isUpdatePending = () => updatePending;
/** Atualiza já: pede ao service worker a versão nova e recarrega. */
async function updateNow() {
	if (isBusy()) return false;
	try {
		const last = Number(sessionStorage.getItem("levelup-update-try") || 0);
		if (Date.now() - last < 3 * 6e4) return false;
		sessionStorage.setItem("levelup-update-try", String(Date.now()));
	} catch {}
	try {
		await (await navigator.serviceWorker?.getRegistration())?.update();
	} catch {}
	if (isBusy()) {
		try {
			sessionStorage.removeItem("levelup-update-try");
		} catch {}
		return false;
	}
	return requestPageReload("Atualização da plataforma solicitada");
}
/** Jogo aberto (data-busy="game") ou Laboratório (data-busy="lab"): nada de recarregar a página. */
function isBusy() {
	return pageReloadProtected();
}
/** Acompanha a marcação data-busy (para esconder o aviso de versão nova durante o jogo). */
function subscribeBusy(fn) {
	if (typeof MutationObserver === "undefined") return () => {};
	const o = new MutationObserver(fn);
	o.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["data-busy", "data-studio-open"]
	});
	return () => o.disconnect();
}
var busyNow = () => typeof document === "undefined" ? "" : document.documentElement.dataset.busy || (document.documentElement.dataset.studioOpen === "1" ? "studio" : "");
function useBusy() {
	return (0, import_react.useSyncExternalStore)(subscribeBusy, busyNow, () => "");
}
/** Lugares seguros para recarregar sozinho: página de jogos (fora de um jogo) ou app em segundo plano. Nunca no Laboratório nem no meio de um jogo. */
function safeToReload() {
	return !isBusy() && (document.hidden || document.documentElement.dataset.view === "games");
}
/** Recarrega para usar a versão nova (o código e o Explorador do laboratório são salvos ao sair da página). */
function applyUpdate() {
	return requestPageReload("Botão Atualizar plataforma");
}
var readPwaState = detect;
function subscribe(fn) {
	listeners.add(fn);
	return () => listeners.delete(fn);
}
function current() {
	return snapshot ||= detect();
}
var server = detect();
function usePwa() {
	return (0, import_react.useSyncExternalStore)(subscribe, current, () => server);
}
/** Detecta, quando o navegador permite, se o app já está instalado neste aparelho (Chrome no Android). */
async function installedAppDetected() {
	try {
		const apps = await navigator.getInstalledRelatedApps?.();
		return Array.isArray(apps) && apps.some((a) => a.platform === "webapp");
	} catch {
		return false;
	}
}
/** Abre a instalação nativa (Android/Chrome). "unavailable" quando o navegador não oferece instalação automática. */
async function promptInstall() {
	const event = deferred;
	if (!event) return "unavailable";
	deferred = null;
	emit();
	try {
		await event.prompt();
		const { outcome } = await event.userChoice;
		emit();
		return outcome;
	} catch {
		return "unavailable";
	}
}
var day = 864e5;
function invite() {
	try {
		return JSON.parse(read(keys.invite) || "{}");
	} catch {
		return {};
	}
}
function remember(patch) {
	write(keys.invite, JSON.stringify({
		...invite(),
		...patch
	}));
}
function shouldInvite(state) {
	if (!state.mobile || state.standalone || state.installed) return false;
	const m = invite(), now = Date.now();
	if (m.dismissedAt && now - m.dismissedAt < 30 * day) return false;
	if (!m.shownAt) return true;
	return !!m.tutorialAt && now - m.shownAt > 7 * day;
}
var inviteShown = () => remember({ shownAt: Date.now() });
var inviteDismissed = () => remember({ dismissedAt: Date.now() });
var tutorialOpened = () => remember({ tutorialAt: Date.now() });
var SITE_KEY = "levelup-notify-site";
var preferSiteNotifications = () => write(SITE_KEY, "1");
function webPushSupported() {
	return typeof window !== "undefined" && "Notification" in window && "serviceWorker" in navigator && "PushManager" in window;
}
/** Dá para instalar o app neste navegador? (sem ele já estar instalado) */
function canInstallHere(state) {
	if (state.standalone || state.installed || state.inApp) return false;
	if (state.platform === "ios") return true;
	if (state.canPrompt) return true;
	return state.platform === "android" && [
		"Chrome",
		"Samsung Internet",
		"Edge",
		"Opera"
	].includes(state.androidBrowser);
}
function notificationState(state) {
	if (typeof window === "undefined") return "unsupported";
	const push = webPushSupported();
	if (state.standalone) {
		if (!("Notification" in window) || !("serviceWorker" in navigator) || !push && state.platform === "ios") return "unsupported";
		return Notification.permission;
	}
	if (push && Notification.permission === "granted") return "granted";
	if (canInstallHere(state) && read(SITE_KEY) !== "1") return push ? "install-or-site" : "needs-install";
	if (!push) return state.platform === "ios" ? "needs-install" : "unsupported";
	return Notification.permission;
}
/** Avisa sobre uma novidade encontrada na atualização automática. Com o app em segundo plano e permissão concedida,
*  usa uma notificação do sistema; caso contrário, devolve false para a tela mostrar um aviso interno. */
async function notifyDevice(title, body, tag, url = "./") {
	try {
		if (!document.hidden || !("Notification" in window) || Notification.permission !== "granted" || !("serviceWorker" in navigator)) return false;
		await (await navigator.serviceWorker.ready).showNotification(title, {
			body,
			tag,
			icon: "./icons/icon-192-v2.png",
			badge: "./icons/icon-192-v2.png",
			data: { url }
		});
		return true;
	} catch {
		return false;
	}
}
/** Pede a permissão (apenas após um toque do aluno) e, se houver chave VAPID configurada, cria a inscrição push. */
async function enableNotifications(vapidPublicKey = "") {
	const permission = await Notification.requestPermission();
	if (permission !== "granted") return {
		permission,
		subscription: null
	};
	await (await navigator.serviceWorker.ready).showNotification("Notificações ativadas!", {
		body: "Você vai receber os avisos da Level Up Academy por aqui.",
		icon: "./icons/icon-192-v2.png",
		badge: "./icons/icon-192-v2.png",
		tag: "levelup-welcome"
	});
	return {
		permission,
		subscription: await syncPush(vapidPublicKey)
	};
}
var fromB64url = (text) => {
	const pad = "=".repeat((4 - text.length % 4) % 4), raw = atob((text + pad).replace(/-/g, "+").replace(/_/g, "/"));
	return Uint8Array.from(raw, (c) => c.charCodeAt(0));
};
/** Garante a inscrição de push deste aparelho com a chave atual do servidor (sem pedir permissão de novo).
*  Só age quando a permissão já foi concedida. */
async function syncPush(vapidPublicKey) {
	if (!vapidPublicKey || typeof window === "undefined" || !("Notification" in window) || Notification.permission !== "granted" || !("serviceWorker" in navigator)) return null;
	const registration = await navigator.serviceWorker.ready;
	if (!("pushManager" in registration)) return null;
	const appKey = fromB64url(vapidPublicKey);
	let subscription = await registration.pushManager.getSubscription();
	const current = subscription?.options?.applicationServerKey ? new Uint8Array(subscription.options.applicationServerKey) : null;
	if (subscription && current && (current.length !== appKey.length || current.some((b, i) => b !== appKey[i]))) {
		await subscription.unsubscribe();
		subscription = null;
	}
	subscription ||= await registration.pushManager.subscribe({
		userVisibleOnly: true,
		applicationServerKey: appKey
	});
	return subscription.toJSON();
}
/** Endereço da inscrição deste aparelho (para removê-la do servidor ao sair da conta). */
async function pushEndpoint() {
	try {
		return (await (await navigator.serviceWorker?.getRegistration())?.pushManager?.getSubscription())?.endpoint || "";
	} catch {
		return "";
	}
}
/** Convite para ativar as notificações (prioridade, como o de instalar): volta 3 dias depois de "Agora não". */
var NOTIFY_INVITE = "levelup-notify-invite";
function notifyInviteDue() {
	const v = Number(read(NOTIFY_INVITE) || 0);
	return !v || Date.now() - v > 3 * day;
}
var notifyInviteDismissed = () => write(NOTIFY_INVITE, String(Date.now()));
//#endregion
export { pwa_exports as n, protectStudioReload as r, currentBuild as t };
