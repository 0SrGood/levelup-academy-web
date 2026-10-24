import { E as require_react, w as require_jsx_runtime } from "./lagtest-offline-guard-Bgh6rVPp.js";
import { Lt as isPart, Mt as defaults, Ut as make, Zt as rotMatrix, m as decodeMesh } from "./lagtest-index-DDqu-Ugr.js";
import { n as IMPORT_3D_ACCEPT, o as UserRoundPlus, r as import3d, s as Upload, t as fromRbxlx } from "./lagtest-StudioLite-BG7bgRc1.js";
import { t as CharacterImportGuide } from "./lagtest-CharacterImportGuide-DLLmIWhc.js";
//#region lib/studio/import-character.ts
var import_react = require_react();
var CHARACTER_BONES = {
	R6: [
		"Head",
		"Torso",
		"Left Arm",
		"Right Arm",
		"Left Leg",
		"Right Leg"
	],
	R15: [
		"Head",
		"UpperTorso",
		"LowerTorso",
		"LeftUpperArm",
		"LeftLowerArm",
		"LeftHand",
		"RightUpperArm",
		"RightLowerArm",
		"RightHand",
		"LeftUpperLeg",
		"LeftLowerLeg",
		"LeftFoot",
		"RightUpperLeg",
		"RightLowerLeg",
		"RightFoot"
	]
};
/** Only conventional body names and numeric export suffixes qualify automatically. */
function detectCharacterBone(name) {
	const accessory = name.match(/^LUAccessory_(.+)_\d+$/);
	if (accessory) {
		const bone = detectCharacterBone(accessory[1]);
		return bone ? "accessory:" + bone : "";
	}
	const clean = name.trim().replace(/[._ -]?\d+$/, "").replace(/[ _-]/g, "").toLowerCase();
	return [...CHARACTER_BONES.R6, ...CHARACTER_BONES.R15].find((b) => b.replace(/ /g, "").toLowerCase() === clean) ?? "";
}
async function importCharacterFiles$1(files) {
	if (files.reduce((sum, f) => sum + f.size, 0) > 32 * 1024 * 1024) throw new Error("Os arquivos somam mais de 32 MB. Reduza as malhas e as imagens antes de importar.");
	if (!files.some((f) => /\.(obj|fbx|glb|gltf)$/i.test(f.name))) throw new Error("Escolha um arquivo OBJ, FBX, GLB ou GLTF e seus arquivos vinculados.");
	return import3d(files, { character: true });
}
/** Every source visual survives. Extra material segments attach rigidly to their selected bone. */
function finalizeCharacter(imported, assignments, rig) {
	const bones = CHARACTER_BONES[rig];
	if (!bones) throw new Error("Escolha R6 ou R15.");
	const meshes = imported.insts.filter((i) => i.cls === "MeshPart");
	if (meshes.length > 127) throw new Error("Use até 127 peças visuais, mais a raiz invisível.");
	const assigned = /* @__PURE__ */ new Set();
	for (const mesh of meshes) {
		const value = assignments[mesh.id] ?? "", bone = value.replace(/^accessory:/, "");
		if (!bones.includes(bone)) throw new Error(`Escolha a parte do corpo para ${mesh.name}.`);
		if (!value.startsWith("accessory:")) assigned.add(bone);
	}
	const missing = bones.filter((b) => !assigned.has(b));
	if (missing.length) throw new Error(`Corpo ${rig} incompleto: ${missing.join(", ")}.`);
	const model = imported.insts.find((i) => i.cls === "Model");
	if (!model) throw new Error("Modelo inválido.");
	const used = /* @__PURE__ */ new Set(), counts = /* @__PURE__ */ new Map();
	const visual = meshes.map((mesh) => {
		const value = assignments[mesh.id], bone = value.replace(/^accessory:/, "");
		const extra = value.startsWith("accessory:") || used.has(bone);
		if (!extra) used.add(bone);
		const n = (counts.get(bone) ?? 0) + 1;
		if (extra) counts.set(bone, n);
		return {
			...mesh,
			parent: model.id,
			name: extra ? `LUAccessory_${bone}_${n}` : bone,
			props: {
				...mesh.props,
				Anchored: true,
				CanCollide: false,
				LocalCharacterBaked: true
			}
		};
	});
	const torso = visual.find((i) => i.name === (rig === "R6" ? "Torso" : "LowerTorso"));
	const root = make("Part", model.id, "HumanoidRootPart", {
		Position: [...torso.props.Position],
		Size: [
			2,
			2,
			1
		],
		Transparency: 1,
		Anchored: true,
		CanCollide: false,
		Orientation: [
			0,
			0,
			0
		]
	});
	const humanoid = make("Humanoid", model.id, "Humanoid", { RigType: rig });
	return {
		...imported,
		insts: [
			{
				...model,
				props: {
					...model.props,
					PrimaryPart: root.id,
					LocalCharacterBaked: true
				}
			},
			...visual,
			root,
			humanoid
		],
		parts: visual.length,
		notes: [...imported.notes, "Aparência local incorporada; roupas já presentes na textura permanecem incorporadas."]
	};
}
//#endregion
//#region lib/studio/character-identification.ts
var R6 = [
	"Head",
	"Torso",
	"Left Arm",
	"Right Arm",
	"Left Leg",
	"Right Leg"
];
var R15 = [
	"Head",
	"UpperTorso",
	"LowerTorso",
	"LeftUpperArm",
	"LeftLowerArm",
	"LeftHand",
	"RightUpperArm",
	"RightLowerArm",
	"RightHand",
	"LeftUpperLeg",
	"LeftLowerLeg",
	"LeftFoot",
	"RightUpperLeg",
	"RightLowerLeg",
	"RightFoot"
];
var canonical = (name) => R6.includes(name) || R15.includes(name) || /^LUAccessory_(.+)_\d+$/.test(name) && [...R6, ...R15].includes(name.match(/^LUAccessory_(.+)_\d+$/)[1]);
var vector = (v) => Array.isArray(v) && v.length === 3 && v.every((n) => typeof n === "number" && Number.isFinite(n));
function valid(b) {
	return !!b && vector(b.center) && vector(b.size) && b.size.every((n) => n >= 0) && Math.max(...b.size) > 0;
}
function referenceBounds(part) {
	const p = part.props;
	if (valid(p.CharacterSourceBounds)) return p.CharacterSourceBounds;
	if (!vector(p.Position) || !vector(p.Size) || p.Size.some((n) => n <= 0) || !vector(p.Orientation ?? [
		0,
		0,
		0
	])) throw new Error(`Referência inválida: ${part.name}. Exporte novamente pelo plugin.`);
	const rotation = rotMatrix(p.Orientation ?? [
		0,
		0,
		0
	]);
	return {
		center: p.Position,
		size: [
			0,
			1,
			2
		].map((row) => [
			0,
			1,
			2
		].reduce((sum, col) => sum + Math.abs(rotation[row * 3 + col]) * p.Size[col], 0))
	};
}
function aggregate(boxes) {
	const min = [
		0,
		1,
		2
	].map((k) => Math.min(...boxes.map((b) => b.center[k] - b.size[k] / 2)));
	const max = [
		0,
		1,
		2
	].map((k) => Math.max(...boxes.map((b) => b.center[k] + b.size[k] / 2)));
	return {
		center: min.map((n, k) => (n + max[k]) / 2),
		size: min.map((n, k) => max[k] - n)
	};
}
function contains(outer, inner) {
	const tolerance = Math.max(...outer.size) * .035 + .002;
	return outer.size.every((s, k) => Math.abs(inner.center[k] - outer.center[k]) + inner.size[k] / 2 <= s / 2 + tolerance);
}
function sameEnvelope(a, b) {
	const tolerance = Math.max(...b.size) * .12 + .005;
	return a.size.every((s, k) => Math.abs(s - b.size[k]) <= tolerance && Math.abs(a.center[k] - b.center[k]) <= tolerance / 2);
}
function tightEnvelope(a, b) {
	return a.size.every((s, k) => Math.abs(s - b.size[k]) <= Math.max(b.size[k] * .05, .002) && Math.abs(a.center[k] - b.center[k]) <= Math.max(b.size[k] * .02, .002));
}
/** Associate local geometry with a prepared companion model, without asset requests or mutation.
* Bounds must be captured before import3d recenters/scales geometry. A uniform global unit
* conversion and translation are supported; rotation, reflection and incomplete exports fail closed.
*/
function identifyCharacterParts(imported, reference) {
	const parts = reference.insts.filter((i) => isPart(i.cls) && canonical(i.name));
	const names = new Set(parts.map((p) => p.name));
	if (names.size !== parts.length) throw new Error("A referência contém partes repetidas. Exporte somente um personagem pelo plugin.");
	if (!(names.has("Torso") ? R6 : R15).every((n) => names.has(n))) throw new Error("A referência do personagem está incompleta. Exporte novamente pelo plugin.");
	const meshes = imported.insts.filter((i) => i.cls === "MeshPart");
	if (!meshes.length) throw new Error("O arquivo não contém malhas do personagem.");
	const source = meshes.map((m) => {
		const b = m.props.CharacterSourceBounds;
		if (!valid(b)) throw new Error(`Dimensões originais ausentes em ${m.name}. Importe novamente o OBJ.`);
		return b;
	});
	const targets = parts.map(referenceBounds), allSource = aggregate(source), allTarget = aggregate(targets);
	const scale = Math.max(...allTarget.size) / Math.max(...allSource.size);
	const aligned = source.map((b) => ({
		center: b.center.map((n, k) => (n - allSource.center[k]) * scale + allTarget.center[k]),
		size: b.size.map((n) => n * scale)
	}));
	if (!Number.isFinite(scale) || scale <= 0 || !sameEnvelope(aggregate(aligned), allTarget)) throw new Error("O OBJ e a referência têm proporções diferentes. Exporte os dois arquivos da mesma cópia pelo plugin.");
	const assignments = /* @__PURE__ */ new Map(), groups = /* @__PURE__ */ new Map();
	meshes.forEach((mesh, index) => {
		const box = aligned[index];
		const candidates = targets.map((target, j) => contains(target, box) ? j : -1).filter((j) => j >= 0);
		const exact = parts.findIndex((p) => p.name === mesh.name);
		const envelopes = candidates.filter((j) => tightEnvelope(box, targets[j]));
		const chosen = exact >= 0 && candidates.includes(exact) ? exact : envelopes.length === 1 ? envelopes[0] : candidates.length === 1 ? candidates[0] : -1;
		if (chosen < 0) throw new Error(`Não foi possível identificar ${mesh.name} com segurança${candidates.length > 1 ? " (partes sobrepostas: " + candidates.map((j) => parts[j].name).join(", ") + ")" : ""}. Exporte novamente OBJ e referência pelo plugin, preservando os nomes das partes.`);
		assignments.set(mesh.id, chosen);
		groups.set(chosen, [...groups.get(chosen) ?? [], box]);
	});
	for (let j = 0; j < parts.length; j++) {
		const boxes = groups.get(j);
		if (!boxes || !sameEnvelope(aggregate(boxes), targets[j])) throw new Error(`A geometria de ${parts[j].name} não corresponde à referência. Exporte OBJ e referência da mesma cópia pelo plugin.`);
	}
	return {
		...imported,
		insts: imported.insts.map((i) => assignments.has(i.id) ? {
			...i,
			name: parts[assignments.get(i.id)].name,
			props: { ...i.props }
		} : i),
		notes: [...imported.notes, "Partes do personagem identificadas automaticamente pela referência local."]
	};
}
//#endregion
//#region lib/studio/character-package.ts
var MAX_FILE = 32 * 1024 * 1024;
function imageCheck(url) {
	const m = /^data:image\/(png|jpeg);base64,([A-Za-z0-9+/=]+)$/.exec(url);
	if (!m || m[2].length > 6 * 1024 * 1024) throw new Error("Textura inválida ou grande demais no pacote.");
	const bytes = Uint8Array.from(atob(m[1] === "png" ? m[2].slice(0, 48) : m[2]), (c) => c.charCodeAt(0));
	let w = 0, h = 0;
	if (m[1] === "png") {
		if (bytes.length < 24 || bytes[0] !== 137 || bytes[1] !== 80) throw new Error("Textura PNG inválida.");
		const v = new DataView(bytes.buffer);
		w = v.getUint32(16);
		h = v.getUint32(20);
	} else {
		if (bytes[0] !== 255 || bytes[1] !== 216) throw new Error("Textura JPEG inválida.");
		let k = 2;
		while (k + 8 < bytes.length) {
			if (bytes[k++] !== 255) continue;
			let marker = bytes[k++];
			while (marker === 255) marker = bytes[k++];
			if (marker === 217 || marker === 218) break;
			const n = bytes[k] << 8 | bytes[k + 1];
			if (n < 2 || k + n > bytes.length) break;
			if ([
				192,
				193,
				194,
				195,
				197,
				198,
				199,
				201,
				202,
				203,
				205,
				206,
				207
			].includes(marker)) {
				h = bytes[k + 3] << 8 | bytes[k + 4];
				w = bytes[k + 5] << 8 | bytes[k + 6];
				break;
			}
			k += n;
		}
	}
	if (!w || !h || w > 4096 || h > 4096 || w * h > 4194304) throw new Error("Textura acima do limite de 4 megapixels. Reduza a imagem antes de importar.");
}
function validateCharacterPackage(raw) {
	if (raw?.format !== "levelup-character" || raw.version !== 1) throw new Error("Este JSON não é um pacote de personagem Level Up.");
	const c = raw.character;
	if (!c || !Array.isArray(c.insts) || c.insts.length > 131) throw new Error("Pacote de personagem inválido.");
	const ids = /* @__PURE__ */ new Set();
	let total = 0;
	const namespace = crypto.randomUUID();
	const meshesByData = /* @__PURE__ */ new Map(), texturesByData = /* @__PURE__ */ new Map();
	const model = c.insts.filter((i) => i?.cls === "Model");
	if (model.length !== 1 || model[0].parent !== null) throw new Error("O pacote precisa de um único Model principal.");
	const root = model[0].id;
	const allowed = new Set([
		"Model",
		"MeshPart",
		"Part",
		"Humanoid"
	]);
	const insts = c.insts.map((i) => {
		if (!i || !allowed.has(i.cls) || typeof i.id !== "string" || !i.id || i.id.length > 100 || /[|;,\x00-\x1f]/.test(i.id) || ids.has(i.id) || typeof i.name !== "string" || i.name.length > 100 || /[|;,\x00-\x1f]/.test(i.name)) throw new Error("Objeto inválido no pacote de personagem.");
		ids.add(i.id);
		if (i.cls !== "Model" && i.parent !== root) throw new Error("A hierarquia do personagem é inválida.");
		const p = i.props;
		if (!p || typeof p !== "object" || Array.isArray(p)) throw new Error("Propriedades inválidas.");
		const props = { ...defaults(i.cls) };
		for (const key of [
			...Object.keys(props),
			"InitialSize",
			"MeshData",
			"MeshKey",
			"TextureData",
			"TextureKey",
			"LocalCharacterBaked",
			"SurfaceAlphaMode",
			"SurfaceColor",
			"Imported",
			"PrimaryPart"
		]) if (Object.hasOwn(p, key)) props[key] = p[key];
		for (const key of [
			"Position",
			"Orientation",
			"Size",
			"InitialSize",
			"Color",
			"SurfaceColor"
		]) if (props[key] !== void 0) {
			if (!Array.isArray(props[key]) || props[key].length !== 3 || !props[key].every((n) => typeof n === "number" && Number.isFinite(n) && Math.abs(n) <= 1e6)) throw new Error("Transformação/cor inválida.");
		}
		if (i.cls === "MeshPart") {
			if (typeof props.MeshData !== "string" || props.MeshData.length > 16 * 1024 * 1024) throw new Error("A malha não está incorporada no pacote.");
			const mesh = decodeMesh(props.MeshData);
			total += mesh.indices.length / 3;
			if (total > 1e5) throw new Error("O personagem ultrapassa 100 mil triângulos.");
			if (mesh.indices.some((n) => n >= mesh.positions.length / 3)) throw new Error("Índice de malha inválido.");
			if (props.TextureID || props.MeshId) throw new Error("O pacote ainda contém recursos remotos. Importe as malhas e imagens locais.");
			if (props.TextureData) imageCheck(props.TextureData);
			if (!meshesByData.has(props.MeshData)) meshesByData.set(props.MeshData, namespace + "-m" + meshesByData.size);
			props.MeshKey = meshesByData.get(props.MeshData);
			if (props.TextureData) {
				if (!texturesByData.has(props.TextureData)) texturesByData.set(props.TextureData, namespace + "-t" + texturesByData.size);
				props.TextureKey = texturesByData.get(props.TextureData);
			}
			props.MeshId = "";
			props.TextureID = "";
			props.LocalCharacterBaked = true;
			props.Parts = [];
		}
		if (i.cls === "Part" && i.name !== "HumanoidRootPart") throw new Error("Peça adicional sem malha incorporada.");
		if (i.cls === "Part" || i.cls === "MeshPart") {
			if (!props.Size?.every((n) => n > 0 && n <= 100)) throw new Error("Tamanho de peça inválido.");
			props.Anchored = true;
			props.CanCollide = false;
			props.CanTouch = false;
		}
		return {
			id: i.id,
			cls: i.cls,
			name: i.name,
			parent: i.parent,
			props
		};
	});
	const visuals = insts.filter((i) => i.cls === "MeshPart");
	if (!visuals.length || visuals.length > 127) throw new Error("Use de 1 a 127 peças visuais.");
	if ((visuals.some((i) => i.name === "UpperTorso") ? CHARACTER_BONES.R15 : CHARACTER_BONES.R6).some((name) => !visuals.some((i) => i.name === name))) throw new Error("O corpo está incompleto no pacote.");
	if (insts.filter((i) => i.cls === "Part" && i.name === "HumanoidRootPart").length !== 1) throw new Error("O pacote não tem HumanoidRootPart.");
	return {
		name: String(c.name || "Personagem").slice(0, 80),
		insts,
		parts: visuals.length,
		triangles: total,
		scaled: null,
		notes: ["Pacote local: malhas e texturas já estão incorporadas."]
	};
}
async function importCharacterFiles(files) {
	if (files.reduce((sum, file) => sum + file.size, 0) > MAX_FILE) throw new Error("Os arquivos somam mais de 32 MB. Reduza as malhas e as imagens antes de importar.");
	const packs = files.filter((f) => /\.json$/i.test(f.name));
	if (packs.length) {
		if (files.length !== 1) throw new Error("Escolha apenas o pacote JSON do personagem.");
		if (packs[0].size > MAX_FILE) throw new Error("Pacote maior que 32 MB.");
		let raw;
		try {
			raw = JSON.parse(await packs[0].text());
		} catch {
			throw new Error("O arquivo JSON do personagem é inválido.");
		}
		return validateCharacterPackage(raw);
	}
	const references = files.filter((f) => /\.(rbxm|rbxmx)$/i.test(f.name));
	if (references.length > 1) throw new Error("Selecione somente um RBXM de identificação do personagem.");
	const imported = await importCharacterFiles$1(files.filter((f) => !references.includes(f)));
	if (references.length) {
		const reference = fromRbxlx(new Uint8Array(await references[0].arrayBuffer())).project;
		return identifyCharacterParts(imported, reference);
	}
	return imported;
}
function encodeCharacterFile(character) {
	const raw = {
		format: "levelup-character",
		version: 1,
		character
	};
	validateCharacterPackage(raw);
	const content = JSON.stringify(raw);
	if (new Blob([content]).size > MAX_FILE) throw new Error("Pacote maior que 32 MB.");
	return {
		name: (character.name || "Personagem").replace(/[\\/:*?"<>|\x00-\x1f]/g, "").slice(0, 80) + ".levelup-character.json",
		content
	};
}
//#endregion
//#region components/studio/ImportCharacter.tsx
var import_jsx_runtime = require_jsx_runtime();
var imageFile = (name) => /\.(png|jpe?g|webp|bmp|tga)$/i.test(name);
var meshFile = (name) => /\.(obj|fbx|glb|gltf|json)$/i.test(name);
var isBone = (rig, name) => CHARACTER_BONES[rig].includes(name);
var validDestination = (rig, value) => isBone(rig, value.replace(/^accessory:/, ""));
function ImportCharacter({ onClose, onImport }) {
	const titleId = (0, import_react.useId)(), descriptionId = (0, import_react.useId)(), fileRef = (0, import_react.useRef)(null), dialogRef = (0, import_react.useRef)(null), closeRef = (0, import_react.useRef)(null);
	const [phase, setPhase] = (0, import_react.useState)("choose");
	const [busy, setBusy] = (0, import_react.useState)(false), [error, setError] = (0, import_react.useState)("");
	const [imported, setImported] = (0, import_react.useState)(null), [files, setFiles] = (0, import_react.useState)([]);
	const [advanced, setAdvanced] = (0, import_react.useState)(false);
	const [rig, setRig] = (0, import_react.useState)("R15"), [assignments, setAssignments] = (0, import_react.useState)({});
	const parts = imported?.insts.filter((inst) => inst.cls === "MeshPart") ?? [];
	const missing = parts.filter((part) => !assignments[part.id]);
	const missingBones = CHARACTER_BONES[rig].filter((bone) => !Object.values(assignments).includes(bone));
	const incomplete = missing.length > 0 || missingBones.length > 0;
	(0, import_react.useEffect)(() => {
		const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
		closeRef.current?.focus();
		return () => previous?.focus();
	}, []);
	(0, import_react.useEffect)(() => {
		function onKeyDown(event) {
			if (event.key === "Escape") {
				event.preventDefault();
				if (!busy) onClose();
				return;
			}
			if (event.key !== "Tab" || !dialogRef.current) return;
			const focusable = [...dialogRef.current.querySelectorAll("a[href],summary,button:not(:disabled),select:not(:disabled),input:not(:disabled),[tabindex]:not([tabindex=\"-1\"])")].filter((el) => el.tabIndex >= 0 && el.getClientRects().length > 0);
			if (!focusable.length) return;
			const first = focusable[0], last = focusable[focusable.length - 1];
			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		}
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [busy, onClose]);
	async function readFiles(chosen) {
		setError("");
		if (!chosen.length) return;
		if (!chosen.some((f) => meshFile(f.name))) {
			setError("Escolha .obj, .fbx, .glb, .gltf ou um pacote de personagem .json. STL não guarda um personagem com roupas e texturas.");
			return;
		}
		setBusy(true);
		try {
			const result = await importCharacterFiles(chosen);
			const meshParts = result.insts.filter((inst) => inst.cls === "MeshPart");
			if (!meshParts.length) throw new Error("Nenhuma peça do personagem foi encontrada.");
			const guesses = Object.fromEntries(meshParts.map((part) => [part.id, detectCharacterBone(part.name)]));
			const r15Hits = Object.values(guesses).filter((name) => validDestination("R15", name)).length;
			const initialRig = Object.values(guesses).filter((name) => validDestination("R6", name)).length > r15Hits ? "R6" : "R15";
			const required = CHARACTER_BONES[initialRig];
			const missingAssignments = Object.values(guesses).some((value) => !validDestination(initialRig, value));
			const missingBody = required.some((bone) => !Object.values(guesses).includes(bone));
			if (missingAssignments || missingBody) throw new Error("Os arquivos não contêm a identificação completa do personagem. No plugin v5, use “Exportar personagem local” e selecione juntos o OBJ, MTL, imagens e o RBXM de identificação. Não é necessário identificar pelas texturas.");
			setAdvanced(false);
			setRig(initialRig);
			setAssignments(Object.fromEntries(Object.entries(guesses).map(([id, bone]) => [id, validDestination(initialRig, bone) ? bone : ""])));
			setImported(result);
			setFiles(chosen);
			setPhase("review");
		} catch (cause) {
			setError(cause instanceof Error ? cause.message : "Não foi possível ler os arquivos do personagem.");
		} finally {
			setBusy(false);
			if (fileRef.current) fileRef.current.value = "";
		}
	}
	function switchRig(next) {
		setRig(next);
		setAssignments((current) => Object.fromEntries(parts.map((part) => {
			const existing = current[part.id] ?? "";
			if (isBone(next, existing.startsWith("accessory:") ? existing.slice(10) : existing)) return [part.id, existing];
			const guess = detectCharacterBone(part.name);
			return [part.id, validDestination(next, guess) ? guess : ""];
		})));
		setError("");
	}
	function finish() {
		if (!imported) return;
		if (missing.length) {
			setError(`Defina o osso ou acessório de ${missing.length} peça${missing.length === 1 ? "" : "s"} antes de importar.`);
			return;
		}
		if (missingBones.length) {
			setError(`Corpo ${rig} incompleto: ${missingBones.join(", ")}.`);
			return;
		}
		setBusy(true);
		setError("");
		try {
			onImport(finalizeCharacter(imported, assignments, rig));
			onClose();
		} catch (cause) {
			setError(cause instanceof Error ? cause.message : "Não foi possível finalizar o personagem.");
			setBusy(false);
		}
	}
	function downloadPack() {
		if (!imported) return;
		if (missing.length) {
			setError(`Defina o destino de ${missing.length} peça${missing.length === 1 ? "" : "s"} antes de baixar.`);
			return;
		}
		if (missingBones.length) {
			setError(`Corpo ${rig} incompleto: ${missingBones.join(", ")}.`);
			return;
		}
		try {
			const { name, content } = encodeCharacterFile(finalizeCharacter(imported, assignments, rig));
			const url = URL.createObjectURL(new Blob([content], { type: "application/json" }));
			const link = document.createElement("a");
			link.href = url;
			link.download = name;
			document.body.appendChild(link);
			link.click();
			link.remove();
			window.setTimeout(() => URL.revokeObjectURL(url), 1e3);
			setError("");
		} catch (cause) {
			setError(cause instanceof Error ? cause.message : "Não foi possível criar o pacote do personagem.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "ic-shade",
		onMouseDown: (event) => {
			if (event.target === event.currentTarget && !busy) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ic-dialog",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": titleId,
			"aria-describedby": descriptionId,
			ref: dialogRef,
			"aria-busy": busy,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "ic-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ic-eyebrow",
						children: "Level Up Studio · Importador local"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: titleId,
						children: "Importar novo personagem"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ic-close",
						onClick: onClose,
						disabled: busy,
						"aria-label": "Fechar",
						ref: closeRef,
						children: "×"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ic-body",
					children: [phase === "choose" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: descriptionId,
							className: "ic-lead",
							children: "Traga seu personagem com malhas e texturas, ou abra um pacote salvo."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ci-intro",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRoundPlus, {
								size: 30,
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Seu personagem, pronto para importar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Exporte pelo plugin e selecione os arquivos juntos. As partes são identificadas automaticamente." })] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharacterImportGuide, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: fileRef,
							className: "ic-file-input",
							type: "file",
							multiple: true,
							accept: `${IMPORT_3D_ACCEPT.replace(",.stl", "")},.bin,.json,.rbxm,.rbxmx`,
							tabIndex: -1,
							"aria-label": "Selecionar arquivos do personagem",
							onChange: (event) => void readFiles(Array.from(event.currentTarget.files ?? [])),
							disabled: busy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ci-upload",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "ic-pick",
								type: "button",
								onClick: () => fileRef.current?.click(),
								disabled: busy,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
									size: 18,
									"aria-hidden": "true"
								}), busy ? "Lendo arquivos…" : "Selecionar arquivos"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								className: "ic-help",
								children: "OBJ + MTL + imagens + RBXM, ou um pacote .json · Até 32 MB"
							})]
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: descriptionId,
							className: "ic-lead",
							children: "Corpo e acessórios identificados automaticamente. Confira o resumo e importe o personagem."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ic-summary",
							"aria-label": "Resumo da importação",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: files.length }), " arquivos"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: parts.length }), " peças"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: imported?.triangles.toLocaleString("pt-BR") }), " triângulos"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: parts.filter((part) => part.props.TextureData).length }), " peças com textura"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: files.filter((f) => imageFile(f.name)).length }), " imagens separadas"] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "ic-secondary",
							onClick: () => setAdvanced((value) => !value),
							children: advanced ? "Ocultar detalhes" : "Ver identificação (avançado)"
						}),
						advanced && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ic-rig",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "ic-rig-select",
									children: "Tipo de corpo"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "ic-rig-select",
									value: rig,
									onChange: (event) => switchRig(event.target.value),
									disabled: busy,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "R15",
										children: "R15"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "R6",
										children: "R6"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ic-mapping-head",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Peças importadas" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: missing.length ? `${missing.length} sem destino` : "Todas as peças têm destino" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "ic-parts",
								children: parts.map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartRow, {
									part,
									rig,
									value: assignments[part.id] ?? "",
									disabled: busy,
									onChange: (value) => {
										setAssignments((current) => ({
											...current,
											[part.id]: value
										}));
										setError("");
									}
								}, part.id))
							})
						] }),
						missingBones.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "ic-note ic-missing",
							children: [
								"Para formar um corpo ",
								rig,
								", atribua uma peça a cada parte: ",
								missingBones.join(", "),
								"."
							]
						}),
						imported?.notes.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ic-notes",
							children: imported.notes.map((note, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: note }, i))
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "ic-note",
							children: "O visual depende das malhas e texturas presentes nos arquivos. Camadas especiais, animações faciais e scripts não são copiados; scripts dos arquivos nunca são executados."
						})
					] }), error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "ic-error",
						role: "alert",
						children: error
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "ic-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ic-secondary",
						disabled: busy,
						onClick: () => {
							if (phase === "review") {
								setPhase("choose");
								setError("");
							} else onClose();
						},
						children: phase === "review" ? "Voltar" : "Cancelar"
					}), phase === "review" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ic-secondary",
						onClick: downloadPack,
						disabled: busy || incomplete,
						children: "Baixar pacote do personagem"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ic-primary",
						onClick: finish,
						disabled: busy || incomplete,
						children: busy ? "Importando…" : "Importar personagem"
					})] })]
				})
			]
		})
	});
}
function PartRow({ part, rig, value, disabled, onChange }) {
	const id = (0, import_react.useId)();
	const texture = part.props.TextureData;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ic-part",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ic-part-info",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ic-thumb",
				children: typeof texture === "string" && texture.startsWith("data:image/") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: texture,
					alt: ""
				}) : "◇"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "ic-part-name",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
					title: part.name,
					children: part.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: texture ? "Textura incluída" : "Sem textura incluída" })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ic-destination",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: id,
				children: "Destino"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				id,
				value,
				disabled,
				onChange: (event) => onChange(event.target.value),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "Escolha um destino"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
						label: "Parte do corpo",
						children: CHARACTER_BONES[rig].map((bone) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: bone,
							children: bone
						}, bone))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
						label: "Acessório preso a",
						children: CHARACTER_BONES[rig].map((bone) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: `accessory:${bone}`,
							children: ["Acessório · ", bone]
						}, bone))
					})
				]
			})]
		})]
	});
}
//#endregion
export { ImportCharacter as default };
