//#region lib/studio/toolbox-compact.ts
/** Deixa um item da Caixa de ferramentas leve, sem mudar o que aparece no Laboratório:
*  - tira os arquivos originais do Roblox guardados nas uniões e MeshParts importadas (props.Rbx e parts[].rbx).
*    Eles só servem para exportar de volta ao Roblox Studio idêntico; a forma continua em props.Parts.
*  - arredonda números para 3 casas (1 milésimo de stud: invisível na tela).
*  Item menor = publicação aceita e menos dados baixados por quem insere o item (franquia grátis do Supabase). */
var round = (n) => Math.round(n * 1e3) / 1e3;
function slim(v, depth = 0) {
	if (typeof v === "number") return Number.isFinite(v) ? round(v) : 0;
	if (Array.isArray(v)) return v.map((x) => slim(x, depth + 1));
	if (v && typeof v === "object") {
		const out = {};
		for (const [k, x] of Object.entries(v)) {
			if (k === "rbx" || k === "Rbx") continue;
			out[k] = slim(x, depth + 1);
		}
		return out;
	}
	return v;
}
function compactInsts(insts) {
	return insts.map((i) => ({
		...i,
		props: slim(i.props)
	}));
}
/** Tamanho em caracteres do texto que vai para o servidor. */
var modelSize = (insts) => JSON.stringify({
	v: 1,
	insts
}).length;
//#endregion
export { modelSize as n, compactInsts as t };
