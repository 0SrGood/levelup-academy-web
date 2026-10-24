import { E as require_react, S as loadPrivateImage, _ as createLucideIcon, b as acquireGameThumb, f as upload, u as api, w as require_jsx_runtime } from "./lagtest-offline-guard-09XAK-Pr.js";
import { i as X, l as Rocket } from "./lagtest-StudioLite-BI-e8H4s.js";
import { t as GAME_MAX_CHARS } from "./lagtest-games-uC_-X8gL.js";
import { t as compactInsts } from "./lagtest-toolbox-compact-DGOnoN6A.js";
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Camera = createLucideIcon("camera", [["path", {
	d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
	key: "18u6gg"
}], ["circle", {
	cx: "12",
	cy: "13",
	r: "3",
	key: "1vg3eu"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ImagePlus = createLucideIcon("image-plus", [
	["path", {
		d: "M16 5h6",
		key: "1vod17"
	}],
	["path", {
		d: "M19 2v6",
		key: "4bpg5p"
	}],
	["path", {
		d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
		key: "1ue2ih"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Image$1 = createLucideIcon("image", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShieldCheck = createLucideIcon("shield-check", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
//#endregion
//#region components/studio/PublishGame.tsx
var import_react = require_react();
var import_jsx_runtime = require_jsx_runtime();
/** Foto pequena do jogo (320×180, JPEG) para a lista: leve para quem abre a página. */
async function smallThumb(src) {
	if (!src) return null;
	try {
		const img = new Image();
		img.src = src;
		await img.decode();
		const c = document.createElement("canvas");
		c.width = 320;
		c.height = 180;
		const g = c.getContext("2d");
		const s = Math.max(320 / img.width, 180 / img.height), w = img.width * s, h = img.height * s;
		g.drawImage(img, (320 - w) / 2, (180 - h) / 2, w, h);
		for (const q of [
			.72,
			.6,
			.5
		]) {
			const u = c.toDataURL("image/jpeg", q);
			if (u.length <= 38e3) return u;
		}
		return null;
	} catch {
		return null;
	}
}
/** Banner 16:9 (1920×1080) a partir de uma imagem qualquer, recortado no centro. */
async function bannerFrom(src) {
	try {
		const img = new Image();
		img.src = src;
		await img.decode();
		const c = document.createElement("canvas");
		c.width = 1920;
		c.height = 1080;
		const g = c.getContext("2d");
		const s = Math.max(1920 / img.width, 1080 / img.height), w = img.width * s, h = img.height * s;
		g.drawImage(img, (1920 - w) / 2, (1080 - h) / 2, w, h);
		for (const q of [
			.82,
			.7,
			.6,
			.5
		]) {
			const u = c.toDataURL("image/webp", q);
			if (u.length <= 65e4) return u;
		}
		return null;
	} catch {
		return null;
	}
}
/** Capa atual do jogo (banner enviado ou, sem banner, a miniatura). */
function CurrentCover({ game }) {
	const [loaded, setLoaded] = (0, import_react.useState)(null);
	const key = game?.id + "|" + game?.banner + "|" + game?.thumb, url = loaded?.key === key ? loaded.url : null;
	(0, import_react.useEffect)(() => {
		let alive = true, release = () => {};
		const b = game?.banner?.match(/^\/api\/media\/([a-f0-9-]{36})$/)?.[1];
		const go = async () => {
			if (b) return {
				url: await loadPrivateImage("/media/" + b),
				release: () => {}
			};
			const th = game?.thumb;
			if (!th) return {
				url: null,
				release: () => {}
			};
			if (th.startsWith("/game-thumb/")) return await acquireGameThumb(th);
			return {
				url: th,
				release: () => {}
			};
		};
		go().then((lease) => {
			release = lease.release;
			if (alive) setLoaded({
				key,
				url: lease.url
			});
			else release();
		}).catch(() => {});
		return () => {
			alive = false;
			release();
		};
	}, [
		game?.id,
		game?.banner,
		game?.thumb,
		key
	]);
	return url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: url,
		alt: "Capa atual do jogo"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "pg-empty",
		children: "Capa atual"
	});
}
function PublishGame({ project, snapshot, onClose, say, linked = null, onPublished }) {
	const [title, setTitle] = (0, import_react.useState)((project.name || "").replace(/Experiência sem título/i, "").slice(0, 40)), [desc, setDesc] = (0, import_react.useState)(""), [thumb, setThumb] = (0, import_react.useState)(null);
	const [banner, setBanner] = (0, import_react.useState)(null), [fromFile, setFromFile] = (0, import_react.useState)(false), [keep, setKeep] = (0, import_react.useState)(false);
	const [mine, setMine] = (0, import_react.useState)(null), [target, setTarget] = (0, import_react.useState)(""), [busy, setBusy] = (0, import_react.useState)(false), [err, setErr] = (0, import_react.useState)("");
	const json = JSON.stringify({
		...project,
		insts: compactInsts(project.insts)
	});
	const kb = Math.ceil(json.length / 1024), max = Math.floor(GAME_MAX_CHARS / 1024);
	(0, import_react.useEffect)(() => {
		if (!fromFile && snapshot) bannerFrom(snapshot).then(setBanner);
	}, [snapshot, fromFile]);
	(0, import_react.useEffect)(() => {
		smallThumb(banner ?? snapshot).then(setThumb);
	}, [banner, snapshot]);
	async function pickBanner(f) {
		if (!f) return;
		if (f.size > 2e7) {
			setErr("Escolha uma imagem de até 20 MB.");
			return;
		}
		if (![
			"image/png",
			"image/jpeg",
			"image/webp"
		].includes(f.type)) {
			setErr("Escolha uma imagem (PNG, JPG ou WebP).");
			return;
		}
		const u = URL.createObjectURL(f);
		try {
			const b = await bannerFrom(u);
			if (b) {
				setBanner(b);
				setFromFile(true);
				setKeep(false);
				setErr("");
			} else setErr("Não foi possível usar essa imagem.");
		} finally {
			URL.revokeObjectURL(u);
		}
	}
	(0, import_react.useEffect)(() => {
		api({ action: "games-mine" }).then((d) => {
			const list = d.games || [];
			setMine(list);
			const same = list.find((g) => g.id === linked) ?? list.find((g) => g.title === project.name);
			if (same) {
				setTarget(same.id);
				setTitle(same.title);
				setDesc(same.description);
				setKeep(true);
			}
		}).catch(() => setMine([]));
	}, [project.name, linked]);
	async function send() {
		setErr("");
		const t = title.replace(/\s+/g, " ").trim();
		if (t.length < 3) {
			setErr("Dê um nome de 3 a 40 letras para o jogo.");
			return;
		}
		if (json.length > 15e5) {
			setErr(`O jogo tem ${kb} KB e o limite é ${max} KB. Tire modelos 3D grandes ou peças repetidas.`);
			return;
		}
		setBusy(true);
		try {
			let bannerUrl = null;
			if (banner && !(keep && target)) {
				const blob = await (await fetch(banner)).blob();
				bannerUrl = await upload(new File([blob], "banner.webp", { type: "image/webp" }), "banner");
			}
			const r = await api({
				action: "game-publish",
				id: target || void 0,
				title: t,
				description: desc,
				...keep && target ? { keep: true } : {
					thumb,
					banner: bannerUrl
				},
				project: json
			});
			if (r?.id) onPublished?.(String(r.id), t, thumb);
			say(`"${t}" foi enviado ✓ Assim que o professor aprovar, aparece em Jogos.`);
			onClose();
		} catch (e) {
			setErr(e instanceof Error ? e.message : "Não foi possível publicar. Confira a internet.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sl-menu-shade",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sl-help pg-dialog",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "pg-t",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { size: 18 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						id: "pg-t",
						children: "Publicar jogo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "sl-icon",
						onClick: onClose,
						"aria-label": "Fechar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pg-body",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pg-thumb",
						children: [
							keep && target ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrentCover, { game: mine?.find((g) => g.id === target) }) : banner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: banner,
								alt: "Banner do jogo"
							}) : thumb ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: thumb,
								alt: "Foto do jogo"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pg-empty",
								children: "Sem foto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: keep && target ? "Capa: a atual do jogo (não muda)" : fromFile ? "Banner: imagem enviada" : "Banner: o que a câmera mostra agora" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "pg-banner-btns",
								children: [
									target && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: keep ? "on" : "",
										onClick: () => setKeep(true),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image$1, { size: 14 }), "Manter a capa"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: !fromFile && !keep ? "on" : "",
										onClick: () => {
											setKeep(false);
											setFromFile(false);
											if (snapshot) bannerFrom(snapshot).then(setBanner);
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { size: 14 }), "Câmera"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "pg-file" + (fromFile && !keep ? " on" : ""),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { size: 14 }),
											"Enviar imagem",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "file",
												accept: "image/png,image/jpeg,image/webp",
												"aria-describedby": "pg-image-help",
												hidden: true,
												onChange: (e) => {
													pickBanner(e.target.files?.[0]);
													e.target.value = "";
												}
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
								id: "pg-image-help",
								children: [
									"Recomendado: ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1920 × 1080 px (16:9)" }),
									" · PNG, JPG ou WebP. Até 20 MB no envio; otimização automática para até 300 KB. Mantenha textos e elementos importantes no centro: algumas miniaturas são recortadas."
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pg-form",
						children: [
							mine && mine.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Publicar como", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: target,
								onChange: (e) => {
									const g = mine.find((x) => x.id === e.target.value);
									setTarget(e.target.value);
									setKeep(!!g);
									if (g) {
										setTitle(g.title);
										setDesc(g.description);
									}
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Jogo novo"
								}), mine.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: g.id,
									children: [
										"Atualizar “",
										g.title,
										"”"
									]
								}, g.id))]
							})] }),
							mine && mine.length > 0 && !target && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "pg-hint",
								children: [
									"Este projeto já está publicado? Em ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Publicar como" }),
									", escolha ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Atualizar" }),
									" para mandar a nova versão do mesmo jogo (em vez de criar outro)."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Nome do jogo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: title,
								maxLength: 40,
								onChange: (e) => setTitle(e.target.value),
								placeholder: "Ex.: Obby da Lava"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Descrição (opcional)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: desc,
								maxLength: 300,
								rows: 3,
								onChange: (e) => setDesc(e.target.value),
								placeholder: "Como jogar, objetivo…"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "pg-facts",
								children: [
									"Tamanho do projeto: ",
									kb,
									" KB de ",
									max,
									" KB"
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "pg-note",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 15 }),
						"O professor confere antes de o jogo aparecer. Quem é de fora vê só o seu primeiro nome e a sua foto de perfil. ",
						target ? "Atualizar manda a nova versão para aprovação de novo." : ""
					]
				}),
				err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pg-err",
					role: "alert",
					children: err
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pg-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "secondary",
						onClick: onClose,
						children: "Cancelar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "pg-go",
						disabled: busy,
						onClick: () => void send(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { size: 16 }), busy ? "Enviando…" : target ? "Enviar nova versão" : "Publicar"]
					})]
				})
			]
		})
	});
}
//#endregion
export { PublishGame as default };
