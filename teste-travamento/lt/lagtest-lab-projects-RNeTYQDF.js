import { a as loadCode, c as saveLocal, o as loadLocal } from "./lagtest-offline-guard-Bgh6rVPp.js";
import "./lagtest-index-DDqu-Ugr.js";
//#region lib/studio/lab-projects.ts
/** Projetos do Laboratório guardados no aparelho (tela inicial, como a do Roblox Studio).
*  - O projeto ABERTO fica na chave 'studio' (salva e sincroniza como sempre).
*  - Os outros ficam só neste aparelho (lab:<id>), sem ir para o servidor: não aumentam o banco grátis do Supabase.
*  - A lista (nome, data e miniatura pequena) também fica só no aparelho. */
var newId = () => crypto.randomUUID();
var projectName = (json) => {
	try {
		const n = JSON.parse(json || "")?.name;
		return typeof n === "string" && n.trim() ? n.trim().slice(0, 60) : "";
	} catch {
		return "";
	}
};
async function readIndex(user) {
	const saved = await loadLocal(user, "lab-index");
	if (saved && Array.isArray(saved.list) && saved.list.some((e) => e.id === saved.current)) return saved;
	const json = await loadCode(user, "studio");
	const now = Date.now();
	const first = {
		id: newId(),
		name: projectName(json) || "Meu primeiro projeto",
		updated: now,
		created: now,
		thumb: null
	};
	const idx = {
		current: first.id,
		list: [first]
	};
	await saveLocal(user, "lab-index", idx);
	return idx;
}
var writeIndex = (user, idx) => saveLocal(user, "lab-index", idx);
/** Jogo publicado a partir do projeto aberto (para "Atualizar" e para o selo na tela inicial). */
async function currentGameUnlocked(user) {
	const idx = await readIndex(user);
	return idx.list.find((x) => x.id === idx.current)?.game ?? null;
}
async function linkGameUnlocked(user, game, name) {
	const idx = await readIndex(user);
	const e = idx.list.find((x) => x.id === idx.current);
	if (!e) return;
	e.game = game;
	if (name && name.trim()) e.name = name.trim().slice(0, 60);
	e.updated = Date.now();
	await writeIndex(user, idx);
}
var userOperations = /* @__PURE__ */ new Map();
function serialized(operation) {
	return (user, ...args) => {
		const run = (userOperations.get(user) ?? Promise.resolve()).then(() => operation(user, ...args));
		const tail = run.then(() => {}, () => {});
		userOperations.set(user, tail);
		tail.then(() => {
			if (userOperations.get(user) === tail) userOperations.delete(user);
		});
		return run;
	};
}
var currentGame = serialized(currentGameUnlocked);
var linkGame = serialized(linkGameUnlocked);
//#endregion
export { currentGame, linkGame };
