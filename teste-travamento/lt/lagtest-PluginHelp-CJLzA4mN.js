import { E as require_react, w as require_jsx_runtime } from "./lagtest-offline-guard-09XAK-Pr.js";
import { d as Puzzle, g as Boxes, h as ChevronDown, i as X, m as Download, o as UserRoundPlus } from "./lagtest-StudioLite-BI-e8H4s.js";
import { t as CharacterImportGuide } from "./lagtest-CharacterImportGuide-BETs03Nq.js";
//#region components/studio/PluginHelp.tsx
var import_react = require_react();
var import_jsx_runtime = require_jsx_runtime();
function PluginHelp({ onClose }) {
	const id = (0, import_react.useId)(), ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const previous = document.activeElement;
		ref.current?.querySelector("button")?.focus();
		return () => previous?.focus();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "ic-shade",
		onMouseDown: (event) => {
			if (event.target === event.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			className: "ic-dialog ph-dialog",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": id,
			onKeyDown: (event) => {
				if (event.key === "Escape") {
					event.preventDefault();
					onClose();
				}
				if (event.key === "Tab") {
					const items = [...event.currentTarget.querySelectorAll("button,a[href],summary")].filter((el) => el.getClientRects().length > 0);
					const first = items[0], last = items.at(-1);
					if (event.shiftKey && document.activeElement === first) {
						event.preventDefault();
						last?.focus();
					} else if (!event.shiftKey && document.activeElement === last) {
						event.preventDefault();
						first?.focus();
					}
				}
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "ic-header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ic-eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Puzzle, {
						size: 14,
						"aria-hidden": "true"
					}), " Conectar os dois Studios"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id,
					children: "Plugins Level Up"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "ic-close",
					onClick: onClose,
					"aria-label": "Fechar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ic-body",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "ic-lead",
						children: "Escolha o plugin para o que você quer trazer."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ph-cards",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "ph-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ph-card-title",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRoundPlus, {
											size: 24,
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Personagens" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "v5" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Importe o corpo e as texturas com identificação automática das partes." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharacterImportGuide, {})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "ph-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ph-card-title",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, {
										size: 24,
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Modelos e uniões" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Prepare uniões da Toolbox e refaça uniões ao voltar para o Roblox Studio." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "ci-download",
									href: new URL("studio/LevelUp-Plugin.lua", document.baseURI).href,
									download: "LevelUp-Plugin.lua",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										size: 16,
										"aria-hidden": "true"
									}), "Baixar plugin de modelos"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
									className: "ci-details",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", { children: ["Veja mais", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
										size: 16,
										"aria-hidden": "true"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
										className: "ph-model-steps",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
												"Instale pela pasta ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Plugins Folder" }),
												" e reinicie o Roblox Studio."
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
												"Selecione o modelo e clique em ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Preparar para o Level Up" }),
												". Salve a cópia como .rbxmx e use ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Importar modelo" }),
												" aqui."
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
												"Para voltar ao Roblox, exporte o modelo daqui, use ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Inserir do arquivo…" }),
												" no Roblox Studio e clique em ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Refazer uniões" }),
												"."
											] })
										]
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "ph-hint",
						children: "Modelos comuns podem ser importados sem plugin: salve como .rbxm ou .rbxmx no Roblox Studio e use Importar modelo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "ci-details ph-install",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: "Como instalar ou atualizar um plugin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "ph-model-steps",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Baixe o plugin desejado." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"No Roblox Studio, abra ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Plugins → Plugins Folder" }),
									" e coloque o arquivo .lua nessa pasta. Ao atualizar, substitua a versão anterior."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Feche e abra o Roblox Studio. Os botões aparecem na aba Plugins." })
							]
						})]
					})
				]
			})]
		})
	});
}
//#endregion
export { PluginHelp as default };
