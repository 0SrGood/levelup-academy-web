import { E as require_react, _ as createLucideIcon, f as upload, h as WifiOff, i as isNetworkError, u as api, w as require_jsx_runtime, y as PrivateImage } from "./lagtest-offline-guard-Bgh6rVPp.js";
import { At as byId, Lt as isPart, Nt as descendants, Rt as isScript, zt as isService } from "./lagtest-index-DDqu-Ugr.js";
import { a as Users, c as Trash2, f as Package, i as X, p as Ellipsis, s as Upload, u as RefreshCw } from "./lagtest-StudioLite-BG7bgRc1.js";
import { n as modelSize, t as compactInsts } from "./lagtest-toolbox-compact-DjPES5hc.js";
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowDownWideNarrow = createLucideIcon("arrow-down-wide-narrow", [
	["path", {
		d: "m3 16 4 4 4-4",
		key: "1co6wj"
	}],
	["path", {
		d: "M7 20V4",
		key: "1yoxec"
	}],
	["path", {
		d: "M11 4h10",
		key: "1w87gc"
	}],
	["path", {
		d: "M11 8h7",
		key: "djye34"
	}],
	["path", {
		d: "M11 12h4",
		key: "q8tih4"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FolderHeart = createLucideIcon("folder-heart", [["path", {
	d: "M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417",
	key: "10r6g4"
}], ["path", {
	d: "M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z",
	key: "15cy7q"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Pencil = createLucideIcon("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Search = createLucideIcon("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ThumbsUp = createLucideIcon("thumbs-up", [["path", {
	d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
	key: "emmmcr"
}], ["path", {
	d: "M7 10v12",
	key: "1qc93n"
}]]);
//#endregion
//#region lib/toolbox.ts
var import_react = require_react();
var import_jsx_runtime = require_jsx_runtime();
var TOOLBOX_MAX_CHARS = 4e5;
//#endregion
//#region components/studio/Toolbox.tsx
/** Caixa de ferramentas (Toolbox) da turma: os alunos publicam o que fizeram no Laboratório e usam o que os colegas fizeram.
*  Só funciona com internet (nada daqui fica no pacote offline). */
var norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
var ago = (iso) => {
	const d = (Date.now() - new Date(iso).getTime()) / 864e5;
	return d < 1 ? "hoje" : d < 2 ? "ontem" : d < 30 ? `há ${Math.floor(d)} dias` : new Date(iso).toLocaleDateString("pt-BR");
};
/** Objetos que vão no item: os selecionados (sem serviços) e tudo que tem dentro deles. As raízes ficam sem pai. */
function toolboxModel(p, ids) {
	const picked = ids.map((id) => byId(p, id)).filter((i) => !!i && !isService(i.cls));
	const set = new Set(picked.map((i) => i.id));
	const under = (i) => {
		let x = i.parent ? byId(p, i.parent) : void 0;
		while (x) {
			if (set.has(x.id)) return true;
			x = x.parent ? byId(p, x.parent) : void 0;
		}
		return false;
	};
	const roots = picked.filter((i) => !under(i));
	if (!roots.length) return null;
	const keep = /* @__PURE__ */ new Set();
	for (const r of roots) {
		keep.add(r.id);
		descendants(p, r.id).forEach((d) => keep.add(d));
	}
	const rootIds = new Set(roots.map((r) => r.id));
	return {
		insts: p.insts.filter((i) => keep.has(i.id)).map((i) => ({
			...structuredClone(i),
			parent: rootIds.has(i.id) ? null : i.parent
		})),
		name: roots.length === 1 ? roots[0].name : "Itens"
	};
}
async function dataUrlFile(url) {
	const b = await (await fetch(url)).blob();
	return new File([b], "toolbox.jpg", { type: "image/jpeg" });
}
function Toolbox({ project, selection, thumbnail, onInsert, onClose, say, publishNow }) {
	const [items, setItems] = (0, import_react.useState)(null), [err, setErr] = (0, import_react.useState)(null), [offline, setOffline] = (0, import_react.useState)(false);
	const [tab, setTab] = (0, import_react.useState)("turma"), [q, setQ] = (0, import_react.useState)(""), [busy, setBusy] = (0, import_react.useState)(null), [sort, setSort] = (0, import_react.useState)("recentes"), [menu, setMenu] = (0, import_react.useState)(null);
	const [publish, setPublish] = (0, import_react.useState)(null), [renaming, setRenaming] = (0, import_react.useState)(null);
	async function load() {
		setErr(null);
		setOffline(false);
		if (typeof navigator !== "undefined" && navigator.onLine === false) {
			setOffline(true);
			return;
		}
		try {
			setItems((await api({ action: "toolbox" })).items);
		} catch (e) {
			if (isNetworkError(e)) setOffline(true);
			else setErr(e instanceof Error ? e.message : "Não foi possível abrir a Caixa de ferramentas.");
		}
	}
	(0, import_react.useEffect)(() => {
		load();
		const on = () => load();
		addEventListener("online", on);
		return () => removeEventListener("online", on);
	}, []);
	(0, import_react.useEffect)(() => {
		const k = (e) => {
			if (e.key === "Escape" && !publish && !renaming) onClose();
		};
		addEventListener("keydown", k);
		return () => removeEventListener("keydown", k);
	}, [
		publish,
		renaming,
		onClose
	]);
	const shown = (0, import_react.useMemo)(() => {
		if (!items) return [];
		let l = tab === "meus" ? items.filter((i) => i.mine) : items;
		const t = norm(q.trim());
		if (t) l = l.filter((i) => norm(i.name + " " + i.author).includes(t));
		if (sort === "curtidos") l = [...l].sort((a, b) => b.likes - a.likes || b.created.localeCompare(a.created));
		return l;
	}, [
		items,
		tab,
		q,
		sort
	]);
	const fail = (e) => say(isNetworkError(e) ? "Sem internet: a Caixa de ferramentas só funciona conectada." : e instanceof Error ? e.message : "Algo deu errado.");
	async function use(it) {
		setBusy(it.id);
		try {
			const d = await api({
				action: "toolbox-get",
				id: it.id
			});
			const m = JSON.parse(String(d.model));
			onInsert(it.name, m.insts);
		} catch (e) {
			fail(e);
		} finally {
			setBusy(null);
		}
	}
	async function like(it) {
		setItems((l) => l && l.map((x) => x.id === it.id ? {
			...x,
			liked: !x.liked,
			likes: x.likes + (x.liked ? -1 : 1)
		} : x));
		try {
			const d = await api({
				action: "toolbox-like",
				id: it.id
			});
			setItems((l) => l && l.map((x) => x.id === it.id ? {
				...x,
				liked: !!d.liked,
				likes: Number(d.likes) || 0
			} : x));
		} catch (e) {
			setItems((l) => l && l.map((x) => x.id === it.id ? it : x));
			fail(e);
		}
	}
	async function remove(it) {
		setMenu(null);
		if (!confirm(`Remover "${it.name}" da Caixa de ferramentas? Quem já colocou no projeto continua com a cópia.`)) return;
		setBusy(it.id);
		try {
			await api({
				action: "toolbox-remove",
				id: it.id
			});
			setItems((l) => l && l.filter((x) => x.id !== it.id));
			say(`"${it.name}" foi removido da Caixa de ferramentas.`);
		} catch (e) {
			fail(e);
		} finally {
			setBusy(null);
		}
	}
	async function rename() {
		if (!renaming) return;
		const name = renaming.name.replace(/\s+/g, " ").trim();
		if (name.length < 2 || name.length > 40) {
			say("Use um nome de 2 a 40 letras.");
			return;
		}
		setBusy(renaming.id);
		try {
			await api({
				action: "toolbox-rename",
				id: renaming.id,
				name
			});
			setItems((l) => l && l.map((x) => x.id === renaming.id ? {
				...x,
				name
			} : x));
			setRenaming(null);
		} catch (e) {
			fail(e);
		} finally {
			setBusy(null);
		}
	}
	function startPublish() {
		const m = toolboxModel(project, selection);
		if (!m) {
			say("Selecione no Explorador ou no 3D o que você quer publicar (uma peça, um Model ou uma pasta).");
			return;
		}
		const parts = m.insts.filter((i) => isPart(i.cls)).map((i) => i.id);
		setPublish({
			name: m.name === "Model" || m.name === "Part" ? "" : m.name,
			thumb: parts.length ? thumbnail(parts) : null,
			insts: compactInsts(m.insts)
		});
	}
	async function sendPublish() {
		if (!publish) return;
		const name = publish.name.replace(/\s+/g, " ").trim();
		if (name.length < 2 || name.length > 40) {
			say("Dê um nome de 2 a 40 letras para o item.");
			return;
		}
		const size = modelSize(publish.insts);
		if (size > 4e5) {
			say("O item tem " + Math.ceil(size / 1024) + " KB e o limite é " + Math.floor(TOOLBOX_MAX_CHARS / 1024) + " KB. Publique uma parte de cada vez ou use menos peças.");
			return;
		}
		setBusy("publish");
		try {
			let thumb = null;
			if (publish.thumb) thumb = await upload(await dataUrlFile(publish.thumb));
			await api({
				action: "toolbox-publish",
				name,
				thumb,
				model: JSON.stringify({
					v: 1,
					insts: publish.insts
				})
			});
			setPublish(null);
			setTab("meus");
			setQ("");
			await load();
			say(`"${name}" está na Caixa de ferramentas da turma ✓`);
		} catch (e) {
			fail(e);
		} finally {
			setBusy(null);
		}
	}
	(0, import_react.useEffect)(() => {
		if (publishNow) startPublish();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!menu) return;
		const off = (e) => {
			if (!e.target.closest(".tb-more-menu,.tb-more")) setMenu(null);
		};
		addEventListener("pointerdown", off);
		return () => removeEventListener("pointerdown", off);
	}, [menu]);
	const canPublish = selection.some((id) => {
		const i = byId(project, id);
		return i && !isService(i.cls);
	});
	const counts = publish ? {
		parts: publish.insts.filter((i) => isPart(i.cls)).length,
		scripts: publish.insts.filter((i) => isScript(i.cls)).length
	} : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "tb-wrap",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "tb-panel",
			role: "dialog",
			"aria-label": "Caixa de ferramentas",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "tb-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {
							size: 15,
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Caixa de ferramentas" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "tb-x",
							onClick: onClose,
							"aria-label": "Fechar a Caixa de ferramentas",
							title: "Fechar (Esc)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 15 })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "tb-bar",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "tb-seg",
							role: "tablist",
							"aria-label": "Onde procurar",
							children: [[
								"turma",
								"Da turma",
								Users
							], [
								"meus",
								"Minhas criações",
								FolderHeart
							]].map(([id, label, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "tab",
								"aria-selected": tab === id,
								className: tab === id ? "on" : "",
								onClick: () => setTab(id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 14,
									"aria-hidden": "true"
								}), label]
							}, id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "tb-searchrow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "tb-search",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
										size: 15,
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: q,
										onChange: (e) => setQ(e.target.value),
										onKeyDown: (e) => e.stopPropagation(),
										placeholder: tab === "meus" ? "Pesquisar nas suas criações" : "Pesquisar na Caixa de ferramentas",
										"aria-label": "Pesquisar na Caixa de ferramentas"
									}),
									q && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "tb-clear",
										onClick: () => setQ(""),
										"aria-label": "Limpar pesquisa",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 13 })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "tb-sort",
								title: "Ordenar",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownWideNarrow, {
									size: 15,
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: sort,
									onChange: (e) => setSort(e.target.value),
									"aria-label": "Ordenar itens",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "recentes",
										children: "Mais recentes"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "curtidos",
										children: "Mais curtidos"
									})]
								})]
							})]
						}),
						items && !offline && !err && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "tb-meta",
							children: [
								shown.length,
								" ",
								shown.length === 1 ? "item" : "itens",
								q ? ` para "${q.trim()}"` : ""
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "tb-list",
					children: offline ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "tb-empty",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { size: 28 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Sem conexão" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A Caixa de ferramentas só funciona com internet. O resto do Laboratório continua funcionando normalmente." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "tb-btn ghost",
								onClick: load,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { size: 14 }), "Tentar de novo"]
							})
						]
					}) : err ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "tb-empty",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Não deu para abrir" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: err }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "tb-btn ghost",
								onClick: load,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { size: 14 }), "Tentar de novo"]
							})
						]
					}) : !items ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "tb-grid",
						"aria-busy": "true",
						children: Array.from({ length: 9 }, (_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "tb-tile skel",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tb-img" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tb-line" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tb-line short" })
							]
						}, k))
					}) : !shown.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "tb-empty",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { size: 28 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: q ? "Nenhum resultado" : tab === "meus" ? "Nenhuma criação publicada" : "A Caixa de ferramentas está vazia" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: q ? "Tente pesquisar com outras palavras." : "Selecione algo que você construiu e clique em \"Publicar seleção\"." })
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "tb-grid",
						children: shown.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "tb-tile" + (busy === it.id ? " busy" : ""),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "tb-img",
									disabled: busy === it.id,
									onClick: () => use(it),
									title: `${it.name}\npor ${it.author} · ${it.parts} peça${it.parts === 1 ? "" : "s"} · ${ago(it.created)}\nClique para inserir no projeto`,
									children: [
										it.thumb ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivateImage, {
											src: it.thumb,
											alt: "",
											loading: "lazy",
											draggable: false
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {
											size: 30,
											"aria-hidden": "true"
										}),
										busy === it.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tb-spin" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tb-insert",
											children: "Inserir"
										})
									]
								}),
								renaming?.id === it.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
									className: "tb-rename",
									onSubmit: (e) => {
										e.preventDefault();
										rename();
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										autoFocus: true,
										maxLength: 40,
										value: renaming.name,
										onChange: (e) => setRenaming({
											id: it.id,
											name: e.target.value
										}),
										onBlur: () => setRenaming(null),
										onKeyDown: (e) => {
											e.stopPropagation();
											if (e.key === "Escape") setRenaming(null);
										},
										"aria-label": "Novo nome do item"
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tb-name",
									title: it.name,
									children: it.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tb-creator",
									children: [it.author_avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivateImage, {
										variant: "thumb",
										src: it.author_avatar,
										alt: ""
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
										"aria-hidden": "true",
										children: (it.author || "?").trim().charAt(0).toUpperCase()
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: it.mine ? "Você" : it.author })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tb-stats",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "tb-like" + (it.liked ? " on" : ""),
										"aria-pressed": it.liked,
										onClick: () => like(it),
										"aria-label": (it.liked ? "Tirar curtida de " : "Curtir ") + it.name,
										title: it.liked ? "Tirar curtida" : "Curtir",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, {
											size: 13,
											fill: it.liked ? "currentColor" : "none"
										}), it.likes]
									}), it.mine && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "tb-more",
										"aria-label": "Opções de " + it.name,
										"aria-expanded": menu === it.id,
										onClick: () => setMenu((m) => m === it.id ? null : it.id),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { size: 15 })
									})]
								}),
								menu === it.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "tb-more-menu",
									role: "menu",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										role: "menuitem",
										onClick: () => {
											setMenu(null);
											setRenaming({
												id: it.id,
												name: it.name
											});
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { size: 13 }), "Renomear"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										role: "menuitem",
										className: "danger",
										onClick: () => remove(it),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 13 }), "Remover"]
									})]
								})
							]
						}, it.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "tb-foot",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "tb-btn",
						disabled: !canPublish || offline,
						onClick: startPublish,
						title: canPublish ? "Publicar o que está selecionado" : "Selecione algo no projeto primeiro",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 15 }), "Publicar seleção"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: canPublish ? "Vai junto tudo o que estiver dentro (peças, scripts…)." : "Selecione algo no projeto para publicar." })]
				})
			]
		}), publish && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tb-modal-shade",
			onPointerDown: (e) => {
				if (e.target === e.currentTarget && busy !== "publish") setPublish(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "tb-modal",
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": "tb-pub-title",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						id: "tb-pub-title",
						children: "Publicar na Caixa de ferramentas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "tb-x",
						onClick: () => setPublish(null),
						disabled: busy === "publish",
						"aria-label": "Cancelar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 15 })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "tb-modal-body",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "tb-shot",
							children: [publish.thumb ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: publish.thumb,
								alt: "Miniatura do item"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { size: 34 }), "Sem peças para fotografar"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Miniatura" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "tb-form",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "tb-field",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Nome ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "*" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										autoFocus: true,
										maxLength: 40,
										value: publish.name,
										placeholder: "Ex.: Casa de madeira",
										onChange: (e) => setPublish({
											...publish,
											name: e.target.value
										}),
										onKeyDown: (e) => {
											e.stopPropagation();
											if (e.key === "Enter") sendPublish();
											if (e.key === "Escape") setPublish(null);
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [publish.name.trim().length, "/40"] })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "tb-facts",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Tamanho" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
										Math.max(1, Math.ceil(modelSize(publish.insts) / 1024)),
										" KB de ",
										Math.floor(4e5 / 1024),
										" KB"
									] })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Conteúdo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
										counts.parts,
										" peça",
										counts.parts === 1 ? "" : "s",
										counts.scripts ? ` · ${counts.scripts} script${counts.scripts === 1 ? "" : "s"}` : "",
										" · ",
										publish.insts.length,
										" objeto",
										publish.insts.length === 1 ? "" : "s"
									] })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Quem vê" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Todos os alunos da turma" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Criador" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Você (nome e foto do seu perfil)" })] })
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "tb-btn ghost",
						onClick: () => setPublish(null),
						disabled: busy === "publish",
						children: "Cancelar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "tb-btn",
						disabled: busy === "publish" || publish.name.trim().length < 2,
						onClick: sendPublish,
						children: busy === "publish" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tb-spin small" }), "Publicando…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 15 }), "Publicar"] })
					})] })
				]
			})
		})]
	});
}
//#endregion
export { Toolbox as default, toolboxModel };
