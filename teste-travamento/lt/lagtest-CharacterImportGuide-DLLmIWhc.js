import { E as require_react, w as require_jsx_runtime } from "./lagtest-offline-guard-Bgh6rVPp.js";
import { h as ChevronDown, m as Download } from "./lagtest-StudioLite-BG7bgRc1.js";
//#region components/studio/CharacterImportGuide.tsx
var import_react = require_react();
var import_jsx_runtime = require_jsx_runtime();
function CharacterImportGuide({ download = true }) {
	const [open, setOpen] = (0, import_react.useState)(false), id = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ci-guide",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ci-guide-actions",
			children: [download && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "ci-download",
				href: new URL("studio/LevelUp-Character-Plugin.lua", document.baseURI).href,
				download: "LevelUp-Character-Plugin.lua",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
					size: 16,
					"aria-hidden": "true"
				}), "Baixar plugin de personagens v5"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "ci-more",
				"aria-expanded": open,
				"aria-controls": id,
				onClick: () => setOpen((value) => !value),
				children: [open ? "Ver menos" : "Veja mais", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					size: 16,
					"aria-hidden": "true",
					style: { transform: open ? "rotate(180deg)" : void 0 }
				})]
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id,
			className: "ci-guide-content",
			"aria-label": "Como importar um personagem",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: new URL("studio/tutorial/character-selection.webp", document.baseURI).href,
				alt: "Personagem completo no cenário do Roblox Studio",
				width: 296,
				height: 678,
				loading: "lazy",
				decoding: "async"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: "Captura real do Roblox Studio." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Do Roblox Studio para cá" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "ci-guide-steps",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Instale e selecione" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Na aba Plugins, abra ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Plugins Folder" }),
							", substitua o plugin anterior pelo v5 e reinicie o Studio. Selecione o Model completo do personagem no Explorador, com o cabelo e os acessórios."
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Exporte pelo plugin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Clique em ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Exportar personagem local" }),
							". Salve o OBJ e, na segunda janela, o RBXM de identificação. Mantenha o MTL e todas as imagens na mesma pasta."
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Importe os arquivos juntos" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Aqui, selecione OBJ + MTL + imagens + RBXM. O plugin identifica as partes automaticamente. Se você já tem um pacote .levelup-character.json, selecione apenas ele." })] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "ci-details",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: "Formatos e limites" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Também aceitamos FBX e GLB/GLTF com nomes de peças R6/R15. Inclua as imagens e o BIN quando houver. Até 32 MB, 100 mil triângulos e 127 peças visuais." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Um RBXM sozinho pode conter apenas IDs. Roupas em camadas, animações faciais e scripts não são copiados. A leitura dos arquivos é local e não exige chave de API." })
					]
				})
			] })]
		})]
	});
}
//#endregion
export { CharacterImportGuide as t };
