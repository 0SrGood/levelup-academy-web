const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./lagtest-STLLoader-CuGeDy0n.js","./lagtest-index-BzqKvxjC.js","./lagtest-OBJLoader-DjDIIeLc.js","./lagtest-MTLLoader-dyQHvdmv.js","./lagtest-FBXLoader-CK4qRWGa.js","./lagtest-GLTFLoader-CTSXvt7n.js","./lagtest-Toolbox-kuujqAEY.js","./lagtest-offline-guard-09XAK-Pr.js","./lagtest-offline-guard-DXashqPX.css","./lagtest-toolbox-compact-DGOnoN6A.js","./lagtest-PublishGame-CmgUgf47.js","./lagtest-games-uC_-X8gL.js","./lagtest-ImportCharacter-CknOy5ys.js","./lagtest-CharacterImportGuide-BETs03Nq.js","./lagtest-PluginHelp-CJLzA4mN.js","./lagtest-game-session-fa9jEbgX.js","./lagtest-lab-projects-BdqARTUN.js"])))=>i.map(i=>d[i]);
import { E as require_react, S as loadPrivateImage, _ as createLucideIcon, d as robloxAsset, f as upload, g as RotateCw, h as WifiOff, l as LevelUpLoader, m as mediaIdOf, n as saveCode, p as isPublicGameMedia, t as loadCode, u as api, v as robloxIconClasses, w as require_jsx_runtime, x as acquirePublicImage, y as PrivateImage } from "./lagtest-offline-guard-09XAK-Pr.js";
import { $t as sanitize, At as byId, Bt as isText, C as Box3, D as Color, Dt as PROPS, Et as MATERIAL_TOKEN, F as Group$1, Ft as isGui, G as Matrix3, Gt as newId, H as LoadingManager, Ht as isWorldGui, It as isImage, Jt as orientationFromMatrix, Kt as newProject, Lt as isPart, Mt as defaults, Nt as descendants, Ot as SERVICES, Pt as duplicate, Qt as rotateParts, Rt as isScript, T as BufferGeometry, Tt as MATERIALS, Ut as make$1, Vt as isUiComponent, Wt as negate, X as MeshStandardMaterial, Xt as reparent, Yt as remove, Zt as rotMatrix, _ as ConvexHull, an as diagnosticEvent, d as StudioEngine, en as separate, f as autoQuality, ft as Texture, g as assetIdOf, gt as Vector3, h as encodeMesh, ht as Vector2, in as attachGameDiagnostics, jt as children, kt as SHAPE_TOKEN, nn as unionChildrenWorld, p as __vitePreload, q as Mesh, qt as nodeKidsWorld, rn as unite, sn as setDiagnosticPhase, tn as setProp, w as BufferAttribute, wt as BODY_COLOR_PROPS, xt as fullName, y as mergeGeometries, zt as isService } from "./lagtest-index-BzqKvxjC.js";
import { r as protectStudioReload, t as currentBuild } from "./lagtest-pwa-C-WYeuqi.js";
//#region lib/lua-suggestions.ts
var import_react = require_react();
var import_jsx_runtime = require_jsx_runtime();
var fn = (label, detail, insert = label + "($0)") => ({
	label,
	insert,
	kind: "function",
	detail
});
var kw = (label, detail, insert = label) => ({
	label,
	insert,
	kind: "keyword",
	detail
});
var sn = (label, detail, insert) => ({
	label,
	insert,
	kind: "snippet",
	detail
});
var globals = [
	fn("print", "Mostra uma mensagem no Output"),
	fn("wait", "Pausa o script por alguns segundos (prefira task.wait)"),
	fn("warn", "Mostra um aviso amarelo no Output"),
	fn("tostring", "Transforma um valor em texto"),
	fn("tonumber", "Transforma um texto em número"),
	fn("typeof", "Diz o tipo de um valor do Roblox"),
	fn("type", "Diz o tipo de um valor"),
	fn("pairs", "Percorre todas as chaves de uma tabela"),
	fn("ipairs", "Percorre uma lista na ordem (1, 2, 3…)"),
	fn("pcall", "Executa uma função sem parar o script se der erro"),
	fn("require", "Carrega um ModuleScript"),
	{
		label: "game",
		insert: "game",
		kind: "variable",
		detail: "O jogo inteiro: acesse os serviços por aqui"
	},
	{
		label: "workspace",
		insert: "workspace",
		kind: "variable",
		detail: "Tudo o que aparece no mundo 3D"
	},
	{
		label: "script",
		insert: "script",
		kind: "variable",
		detail: "O próprio script que está rodando"
	},
	{
		label: "task",
		insert: "task",
		kind: "variable",
		detail: "Funções de tempo: task.wait, task.spawn…"
	},
	{
		label: "math",
		insert: "math",
		kind: "variable",
		detail: "Funções de matemática: math.random, math.floor…"
	},
	{
		label: "string",
		insert: "string",
		kind: "variable",
		detail: "Funções de texto"
	},
	{
		label: "table",
		insert: "table",
		kind: "variable",
		detail: "Funções de tabelas e listas"
	},
	{
		label: "Instance",
		insert: "Instance",
		kind: "variable",
		detail: "Cria objetos: Instance.new(\"Part\")"
	},
	{
		label: "Vector3",
		insert: "Vector3",
		kind: "variable",
		detail: "Posição ou tamanho em 3D (X, Y, Z)"
	},
	{
		label: "Color3",
		insert: "Color3",
		kind: "variable",
		detail: "Cores: Color3.fromRGB(255, 0, 0)"
	},
	{
		label: "CFrame",
		insert: "CFrame",
		kind: "variable",
		detail: "Posição e rotação no espaço"
	},
	{
		label: "UDim2",
		insert: "UDim2",
		kind: "variable",
		detail: "Posição e tamanho de interfaces"
	},
	{
		label: "Enum",
		insert: "Enum",
		kind: "variable",
		detail: "Listas de opções do Roblox (materiais, teclas…)"
	},
	{
		label: "TweenInfo",
		insert: "TweenInfo",
		kind: "variable",
		detail: "Configura animações suaves (tweens)"
	},
	kw("local", "Cria uma variável"),
	kw("function", "Cria uma função", "function $0()\n	\nend"),
	kw("return", "Devolve um valor da função"),
	kw("then", "Começa o bloco do if"),
	kw("do", "Começa o bloco do laço"),
	kw("end", "Fecha o bloco"),
	kw("else", "Caminho quando a condição é falsa"),
	kw("elseif", "Testa outra condição", "elseif $0 then"),
	kw("true", "Verdadeiro"),
	kw("false", "Falso"),
	kw("nil", "Nada / sem valor"),
	kw("and", "E: as duas condições"),
	kw("or", "Ou: pelo menos uma condição"),
	kw("not", "Inverte: verdadeiro vira falso"),
	kw("break", "Para o laço na hora"),
	kw("continue", "Pula para a próxima volta do laço"),
	kw("until", "Condição para parar o repeat", "until $0"),
	sn("if", "Bloco if … then … end", "if $0 then\n	\nend"),
	sn("for", "Laço com contador", "for i = 1, $0 do\n	\nend"),
	sn("for in ipairs", "Percorre uma lista", "for _, item in ipairs($0) do\n	\nend"),
	sn("while", "Repete enquanto a condição for verdadeira", "while $0 do\n	\nend"),
	sn("repeat", "Repete até a condição ser verdadeira", "repeat\n	$0\nuntil ")
];
var members = {
	task: [
		fn("wait", "Pausa o script por alguns segundos"),
		fn("spawn", "Roda uma função em paralelo"),
		fn("delay", "Roda uma função depois de um tempo"),
		fn("defer", "Roda uma função logo depois"),
		fn("cancel", "Cancela uma tarefa")
	],
	math: [
		fn("random", "Número aleatório: math.random(1, 10)"),
		fn("floor", "Arredonda para baixo"),
		fn("ceil", "Arredonda para cima"),
		fn("round", "Arredonda"),
		fn("abs", "Valor sem sinal"),
		fn("max", "Maior valor"),
		fn("min", "Menor valor"),
		fn("clamp", "Limita entre mínimo e máximo"),
		fn("sqrt", "Raiz quadrada"),
		{
			label: "pi",
			insert: "pi",
			kind: "property",
			detail: "3,14159…"
		},
		{
			label: "huge",
			insert: "huge",
			kind: "property",
			detail: "Infinito"
		}
	],
	string: [
		fn("len", "Quantidade de letras"),
		fn("upper", "Tudo em maiúsculas"),
		fn("lower", "Tudo em minúsculas"),
		fn("sub", "Pedaço do texto"),
		fn("format", "Monta um texto com valores"),
		fn("rep", "Repete o texto"),
		fn("find", "Procura um trecho"),
		fn("split", "Divide o texto"),
		fn("gsub", "Troca trechos do texto")
	],
	table: [
		fn("insert", "Adiciona um item na lista"),
		fn("remove", "Remove um item da lista"),
		fn("find", "Procura um item"),
		fn("sort", "Ordena a lista"),
		fn("concat", "Junta os itens em um texto"),
		fn("clear", "Esvazia a tabela"),
		fn("clone", "Copia a tabela")
	],
	Instance: [fn("new", "Cria um objeto: Instance.new(\"Part\")", "new(\"$0\")")],
	Vector3: [
		fn("new", "Cria um Vector3 (X, Y, Z)"),
		{
			label: "zero",
			insert: "zero",
			kind: "property",
			detail: "0, 0, 0"
		},
		{
			label: "one",
			insert: "one",
			kind: "property",
			detail: "1, 1, 1"
		}
	],
	Color3: [
		fn("fromRGB", "Cor com valores de 0 a 255"),
		fn("new", "Cor com valores de 0 a 1"),
		fn("fromHex", "Cor em hexadecimal: \"#FF0000\"", "fromHex(\"$0\")")
	],
	CFrame: [
		fn("new", "Cria um CFrame"),
		fn("Angles", "Rotação em radianos"),
		fn("lookAt", "Aponta de um lugar para outro")
	],
	UDim2: [
		fn("new", "Escala e pixels (X, Y)"),
		fn("fromScale", "Só proporção da tela"),
		fn("fromOffset", "Só pixels")
	],
	Enum: [
		{
			label: "HumanoidStateType",
			insert: "HumanoidStateType.",
			kind: "property",
			detail: "Estados do personagem: Running, Jumping, Freefall, Landed, Dead"
		},
		{
			label: "Material",
			insert: "Material.",
			kind: "property",
			detail: "Materiais: Enum.Material.Neon"
		},
		{
			label: "KeyCode",
			insert: "KeyCode.",
			kind: "property",
			detail: "Teclas: Enum.KeyCode.E"
		},
		{
			label: "EasingStyle",
			insert: "EasingStyle.",
			kind: "property",
			detail: "Estilos de animação"
		}
	],
	HumanoidStateType: [
		"Running",
		"Jumping",
		"Freefall",
		"Landed",
		"Dead"
	].map((label) => ({
		label,
		insert: label,
		kind: "property",
		detail: "Estado do Humanoid"
	}))
};
/** Métodos depois de ":" (objetos do Roblox). */
var methods = [
	{
		label: "GetService",
		insert: "GetService(\"$0\")",
		kind: "method",
		detail: "Pega um serviço: game:GetService(\"Players\")"
	},
	{
		label: "WaitForChild",
		insert: "WaitForChild(\"$0\")",
		kind: "method",
		detail: "Espera um filho existir"
	},
	{
		label: "FindFirstChild",
		insert: "FindFirstChild(\"$0\")",
		kind: "method",
		detail: "Procura um filho (ou devolve nil)"
	},
	{
		label: "GetChildren",
		insert: "GetChildren()",
		kind: "method",
		detail: "Lista os filhos diretos"
	},
	{
		label: "GetDescendants",
		insert: "GetDescendants()",
		kind: "method",
		detail: "Lista todos os objetos dentro"
	},
	{
		label: "IsA",
		insert: "IsA(\"$0\")",
		kind: "method",
		detail: "Confere o tipo: objeto:IsA(\"BasePart\")"
	},
	{
		label: "Clone",
		insert: "Clone()",
		kind: "method",
		detail: "Faz uma cópia"
	},
	{
		label: "Destroy",
		insert: "Destroy()",
		kind: "method",
		detail: "Apaga o objeto"
	},
	{
		label: "ApplyCharacterReset",
		insert: "ApplyCharacterReset($0)",
		kind: "method",
		detail: "Studio Lite: aparência R6/R15; preserva vida, movimento e câmera (solo)"
	},
	{
		label: "TakeDamage",
		insert: "TakeDamage($0)",
		kind: "method",
		detail: "Retira uma quantidade de vida do Humanoid"
	},
	{
		label: "GetState",
		insert: "GetState()",
		kind: "method",
		detail: "Estado atual do Humanoid"
	},
	{
		label: "ChangeState",
		insert: "ChangeState(Enum.HumanoidStateType.$0)",
		kind: "method",
		detail: "Muda o estado do Humanoid"
	},
	{
		label: "MoveTo",
		insert: "MoveTo($0)",
		kind: "method",
		detail: "Humanoid: caminha até um Vector3; Model: muda a posição"
	},
	{
		label: "Connect",
		insert: "Connect(function($0)\n	\nend)",
		kind: "method",
		detail: "Reage a um evento"
	},
	{
		label: "Wait",
		insert: "Wait()",
		kind: "method",
		detail: "Espera o evento acontecer"
	},
	{
		label: "GetPlayers",
		insert: "GetPlayers()",
		kind: "method",
		detail: "Lista os jogadores conectados"
	},
	{
		label: "Create",
		insert: "Create($0)",
		kind: "method",
		detail: "Cria um tween (TweenService)"
	},
	{
		label: "Play",
		insert: "Play()",
		kind: "method",
		detail: "Inicia o tween ou o som"
	}
];
/** Propriedades e eventos comuns depois de "." em objetos. */
var properties = [
	"Name|Nome do objeto",
	"Parent|Onde o objeto está",
	"Position|Posição (Vector3)",
	"Size|Tamanho (Vector3)",
	"Color|Cor (Color3)",
	"Transparency|0 visível, 1 invisível",
	"Anchored|Preso no lugar (true/false)",
	"CanCollide|Tem colisão (true/false)",
	"Material|Material da peça",
	"CFrame|Posição e rotação",
	"Text|Texto de uma interface",
	"Visible|Aparece ou não",
	"Humanoid|Humanoide do personagem",
	"Character|Personagem do jogador",
	"LocalPlayer|O jogador deste aparelho"
].map((s) => {
	const [label, detail] = s.split("|");
	return {
		label,
		insert: label,
		kind: "property",
		detail
	};
});
properties.push(...[
	"Health|Vida atual (0 até MaxHealth)",
	"MaxHealth|Vida máxima",
	"WalkSpeed|Velocidade de caminhada em studs por segundo",
	"JumpPower|Força do salto quando UseJumpPower é true",
	"JumpHeight|Altura do salto quando UseJumpPower é false",
	"UseJumpPower|true: usa força; false: usa altura",
	"Jump|true solicita um salto",
	"AutoRotate|O personagem gira na direção do movimento",
	"MoveDirection|Direção do movimento (somente leitura)",
	"WalkToPoint|Destino configurado por MoveTo"
].map((s) => {
	const [label, detail] = s.split("|");
	return {
		label,
		insert: label,
		kind: "property",
		detail
	};
}));
var events = [
	"Touched|Algo encostou na peça",
	"TouchEnded|Algo deixou de encostar",
	"Died|A vida do Humanoid chegou a zero",
	"HealthChanged|A vida mudou: recebe a vida atual",
	"Running|A velocidade mudou: recebe studs por segundo",
	"Jumping|Entrou ou saiu do salto: recebe true/false",
	"FreeFalling|Entrou ou saiu de queda livre: recebe true/false",
	"StateChanged|O estado mudou: recebe estado anterior e atual",
	"MoveToFinished|Terminou MoveTo: recebe se alcançou o destino",
	"PlayerAdded|Um jogador entrou",
	"CharacterAdded|O personagem apareceu",
	"Changed|Uma propriedade mudou",
	"ChildAdded|Um filho foi adicionado",
	"ChildRemoved|Um filho foi removido",
	"MouseClick|Um ClickDetector foi clicado",
	"MouseButton1Click|Clique principal ou toque no botao",
	"MouseButton1Down|Pressionar botao principal: recebe x e y",
	"MouseButton1Up|Soltar botao principal: recebe x e y",
	"MouseButton2Click|Clique com botao direito",
	"MouseButton2Down|Pressionar botao direito: recebe x e y",
	"MouseButton2Up|Soltar botao direito: recebe x e y",
	"MouseEnter|Ponteiro entrou: recebe x e y",
	"MouseLeave|Ponteiro saiu: recebe x e y",
	"Activated|Um botão foi ativado",
	"Heartbeat|Um passo da simulação",
	"Completed|Um tween terminou"
].map((s) => {
	const [label, detail] = s.split("|");
	return {
		label,
		insert: label,
		kind: "event",
		detail: "Evento · " + detail
	};
});
var services = [
	"Players",
	"ReplicatedStorage",
	"ServerScriptService",
	"ServerStorage",
	"TweenService",
	"RunService",
	"UserInputService",
	"Lighting",
	"SoundService",
	"StarterGui",
	"Workspace",
	"Debris",
	"HttpService",
	"DataStoreService"
].map((s) => ({
	label: s,
	insert: s,
	kind: "service",
	detail: "Serviço do Roblox"
}));
var rank = (list, prefix) => {
	const p = prefix.toLowerCase();
	if (!p) return list;
	const starts = list.filter((s) => s.label.toLowerCase().startsWith(p)), contains = p.length < 2 ? [] : list.filter((s) => !s.label.toLowerCase().startsWith(p) && s.label.toLowerCase().includes(p));
	return [...starts, ...contains];
};
/** Variáveis e funções criadas pelo próprio aluno no código. */
/** O que o parâmetro recebe nos eventos mais comuns do Roblox. */
var EVENT_PARAM = {
	PlayerAdded: "o jogador que entrou (Player)",
	PlayerRemoving: "o jogador que está saindo (Player)",
	Touched: "a peça que encostou (BasePart)",
	TouchEnded: "a peça que parou de encostar (BasePart)",
	CharacterAdded: "o personagem que nasceu (Model)",
	MouseClick: "o jogador que clicou (Player)",
	Died: "",
	Changed: "o nome da propriedade que mudou (texto)",
	ChildAdded: "o objeto que entrou (Instance)",
	ChildRemoved: "o objeto que saiu (Instance)",
	Activated: "",
	MouseButton1Click: "",
	Heartbeat: "o tempo desde o último quadro (segundos)",
	InputBegan: "a tecla ou toque (InputObject)"
};
var short = (s) => {
	const t = s.replace(/\s+/g, " ").trim();
	return t.length > 60 ? t.slice(0, 57) + "…" : t;
};
var P = (s) => {
	const [label, detail] = s.split("|");
	return {
		label,
		insert: label,
		kind: "property",
		detail
	};
};
var extraProps = [
	"ClassName|Tipo do objeto (texto)",
	"ClipsDescendants|Corta o que passa da borda (true/false)",
	"Value|Valor guardado",
	"Health|Vida atual",
	"MaxHealth|Vida máxima",
	"WalkSpeed|Velocidade de caminhada",
	"JumpPower|Força do pulo",
	"UserId|Número da conta do jogador",
	"DisplayName|Nome de exibição",
	"PrimaryPart|Peça principal do Model",
	"Enabled|Ligado ou desligado",
	"TextColor3|Cor do texto",
	"BackgroundColor3|Cor do fundo",
	"BackgroundTransparency|Transparência do fundo",
	"TextScaled|Texto se ajusta ao tamanho",
	"Image|Imagem (rbxassetid://)",
	"SoundId|Som (rbxassetid://)",
	"Volume|Volume do som",
	"Playing|Está tocando (true/false)",
	"Looped|Repete ao terminar",
	"MaxActivationDistance|Distância máxima do clique",
	"Gravity|Gravidade do mundo",
	"CurrentCamera|Câmera atual",
	"Brightness|Brilho do céu",
	"ClockTime|Hora do dia (0 a 24)",
	"Disabled|Script desligado",
	"Team|Time do jogador",
	"leaderstats|Placar do jogador (Folder)",
	"Orientation|Rotação em graus (Vector3)",
	"Reflectance|Reflexo (0 a 1)",
	"Shape|Formato (Ball, Block, Cylinder)",
	"KeyCode|Tecla pressionada (Enum.KeyCode)",
	"UserInputType|Tipo de entrada (mouse, toque, teclado)"
].map(P);
var extraEvents = [
	"OnServerEvent|Chegou do cliente (Script): function(player, ...)",
	"OnClientEvent|Chegou do servidor (LocalScript): function(...)",
	"Event|Disparou (BindableEvent)",
	"PlayerRemoving|Um jogador está saindo",
	"RenderStepped|Antes de cada quadro (LocalScript)",
	"Stepped|Antes de cada passo da física",
	"InputBegan|Tecla ou toque começou",
	"InputEnded|Tecla ou toque terminou"
].map((s) => {
	const [label, detail] = s.split("|");
	return {
		label,
		insert: label,
		kind: "event",
		detail: "Evento · " + detail
	};
});
var extraMethods = [
	{
		label: "FireServer",
		insert: "FireServer($0)",
		kind: "method",
		detail: "LocalScript → servidor (o servidor recebe o player primeiro)"
	},
	{
		label: "FireClient",
		insert: "FireClient(player, $0)",
		kind: "method",
		detail: "Servidor → um jogador"
	},
	{
		label: "FireAllClients",
		insert: "FireAllClients($0)",
		kind: "method",
		detail: "Servidor → todos os jogadores"
	},
	{
		label: "InvokeServer",
		insert: "InvokeServer($0)",
		kind: "method",
		detail: "Pergunta ao servidor e espera a resposta"
	},
	{
		label: "InvokeClient",
		insert: "InvokeClient(player, $0)",
		kind: "method",
		detail: "Pergunta ao jogador e espera a resposta"
	},
	{
		label: "Fire",
		insert: "Fire($0)",
		kind: "method",
		detail: "Dispara o BindableEvent"
	},
	{
		label: "Invoke",
		insert: "Invoke($0)",
		kind: "method",
		detail: "Chama o BindableFunction e espera"
	},
	{
		label: "Kick",
		insert: "Kick(\"$0\")",
		kind: "method",
		detail: "Expulsa o jogador com uma mensagem"
	},
	{
		label: "LoadCharacter",
		insert: "LoadCharacter()",
		kind: "method",
		detail: "Faz o personagem renascer"
	},
	{
		label: "GetPivot",
		insert: "GetPivot()",
		kind: "method",
		detail: "Posição e rotação (CFrame) do objeto"
	},
	{
		label: "PivotTo",
		insert: "PivotTo($0)",
		kind: "method",
		detail: "Move o objeto para um CFrame"
	},
	{
		label: "Stop",
		insert: "Stop()",
		kind: "method",
		detail: "Para o som"
	},
	{
		label: "Pause",
		insert: "Pause()",
		kind: "method",
		detail: "Pausa"
	},
	{
		label: "Cancel",
		insert: "Cancel()",
		kind: "method",
		detail: "Cancela o tween"
	},
	{
		label: "FindFirstChildOfClass",
		insert: "FindFirstChildOfClass(\"$0\")",
		kind: "method",
		detail: "Procura um filho por tipo"
	},
	{
		label: "ClearAllChildren",
		insert: "ClearAllChildren()",
		kind: "method",
		detail: "Apaga todos os filhos"
	},
	{
		label: "GetAttribute",
		insert: "GetAttribute(\"$0\")",
		kind: "method",
		detail: "Lê um atributo"
	},
	{
		label: "SetAttribute",
		insert: "SetAttribute(\"$0\")",
		kind: "method",
		detail: "Grava um atributo"
	}
];
var clothingProps = [
	"ShirtTemplate|Imagem da camisa (rbxassetid://)",
	"PantsTemplate|Imagem da calça (rbxassetid://)",
	"Color3|Cor que tinge a roupa",
	"HeadColor3|Cor da cabeça",
	"TorsoColor3|Cor do tronco",
	"LeftArmColor3|Cor do braço esquerdo",
	"RightArmColor3|Cor do braço direito",
	"LeftLegColor3|Cor da perna esquerda",
	"RightLegColor3|Cor da perna direita",
	"HeadColor|BrickColor da cabeça",
	"TorsoColor|BrickColor do tronco",
	"LeftArmColor|BrickColor do braço esquerdo",
	"RightArmColor|BrickColor do braço direito",
	"LeftLegColor|BrickColor da perna esquerda",
	"RightLegColor|BrickColor da perna direita"
].map(P);
var GUI_EVENTS = [
	"MouseButton1Click",
	"MouseButton1Down",
	"MouseButton1Up",
	"MouseButton2Click",
	"MouseEnter",
	"MouseLeave",
	"Activated"
];
var CLASSES = {
	Instance: {
		props: [
			"Name",
			"Parent",
			"ClassName"
		],
		events: [
			"Changed",
			"ChildAdded",
			"ChildRemoved"
		],
		methods: [
			"FindFirstChild",
			"WaitForChild",
			"FindFirstChildOfClass",
			"GetChildren",
			"GetDescendants",
			"IsA",
			"Clone",
			"Destroy",
			"ClearAllChildren",
			"GetAttribute",
			"SetAttribute"
		]
	},
	StarterPack: { is: "Instance" },
	Backpack: { is: "Instance" },
	Tool: {
		is: "Instance",
		props: [
			"RequiresHandle",
			"Enabled",
			"CanBeDropped",
			"ToolTip",
			"Grip",
			"GripPos"
		],
		events: [
			"Equipped",
			"Unequipped",
			"Activated",
			"Deactivated"
		],
		methods: ["Activate", "Deactivate"]
	},
	WeldConstraint: {
		is: "Instance",
		props: [
			"Part0",
			"Part1",
			"Enabled"
		]
	},
	Folder: { is: "Instance" },
	Configuration: { is: "Instance" },
	BasePart: {
		is: "Instance",
		props: [
			"Position",
			"Size",
			"Color",
			"Transparency",
			"Anchored",
			"CanCollide",
			"Material",
			"CFrame",
			"Orientation",
			"Reflectance"
		],
		events: ["Touched", "TouchEnded"],
		methods: ["GetPivot", "PivotTo"]
	},
	Part: {
		is: "BasePart",
		props: ["Shape"]
	},
	MeshPart: { is: "BasePart" },
	UnionOperation: { is: "BasePart" },
	SpawnLocation: { is: "BasePart" },
	WedgePart: { is: "BasePart" },
	TrussPart: { is: "BasePart" },
	CornerWedgePart: { is: "BasePart" },
	Model: {
		is: "Instance",
		props: ["PrimaryPart"],
		methods: [
			"MoveTo",
			"GetPivot",
			"PivotTo"
		]
	},
	Shirt: {
		is: "Instance",
		props: ["ShirtTemplate", "Color3"]
	},
	Pants: {
		is: "Instance",
		props: ["PantsTemplate", "Color3"]
	},
	BodyColors: {
		is: "Instance",
		props: [
			"HeadColor3",
			"TorsoColor3",
			"LeftArmColor3",
			"RightArmColor3",
			"LeftLegColor3",
			"RightLegColor3",
			"HeadColor",
			"TorsoColor",
			"LeftArmColor",
			"RightArmColor",
			"LeftLegColor",
			"RightLegColor"
		]
	},
	Player: {
		is: "Instance",
		props: [
			"Character",
			"UserId",
			"DisplayName",
			"Team",
			"leaderstats"
		],
		events: ["CharacterAdded"],
		methods: ["Kick", "LoadCharacter"]
	},
	Humanoid: {
		is: "Instance",
		props: [
			"Health",
			"MaxHealth",
			"WalkSpeed",
			"JumpPower",
			"JumpHeight",
			"HipHeight"
		],
		events: [
			"Died",
			"HealthChanged",
			"Running",
			"Jumping",
			"FreeFalling",
			"StateChanged",
			"MoveToFinished"
		],
		methods: [
			"ApplyCharacterReset",
			"TakeDamage",
			"GetState",
			"ChangeState",
			"MoveTo",
			"EquipTool",
			"UnequipTools"
		]
	},
	Players: {
		is: "Instance",
		props: ["LocalPlayer"],
		events: ["PlayerAdded", "PlayerRemoving"],
		methods: ["GetPlayers"]
	},
	IntValue: {
		is: "Instance",
		props: ["Value"]
	},
	NumberValue: {
		is: "Instance",
		props: ["Value"]
	},
	StringValue: {
		is: "Instance",
		props: ["Value"]
	},
	BoolValue: {
		is: "Instance",
		props: ["Value"]
	},
	ObjectValue: {
		is: "Instance",
		props: ["Value"]
	},
	Color3Value: {
		is: "Instance",
		props: ["Value"]
	},
	Vector3Value: {
		is: "Instance",
		props: ["Value"]
	},
	GuiObject: {
		is: "Instance",
		props: [
			"Position",
			"Size",
			"Visible",
			"BackgroundColor3",
			"BackgroundTransparency",
			"ClipsDescendants",
			"ZIndex",
			"Rotation",
			"AnchorPoint"
		]
	},
	Frame: { is: "GuiObject" },
	ScrollingFrame: { is: "GuiObject" },
	TextLabel: {
		is: "GuiObject",
		props: [
			"Text",
			"TextColor3",
			"TextScaled"
		]
	},
	TextBox: { is: "TextLabel" },
	TextButton: {
		is: "TextLabel",
		events: GUI_EVENTS
	},
	ImageLabel: {
		is: "GuiObject",
		props: ["Image"]
	},
	ImageButton: {
		is: "ImageLabel",
		events: GUI_EVENTS
	},
	ScreenGui: {
		is: "Instance",
		props: ["Enabled"]
	},
	BillboardGui: {
		is: "Instance",
		props: ["Enabled"]
	},
	SurfaceGui: {
		is: "Instance",
		props: ["Enabled"]
	},
	ClickDetector: {
		is: "Instance",
		props: ["MaxActivationDistance"],
		events: ["MouseClick"]
	},
	RemoteEvent: {
		is: "Instance",
		events: ["OnServerEvent", "OnClientEvent"],
		methods: [
			"FireServer",
			"FireClient",
			"FireAllClients"
		]
	},
	RemoteFunction: {
		is: "Instance",
		props: ["OnServerInvoke", "OnClientInvoke"],
		methods: ["InvokeServer", "InvokeClient"]
	},
	BindableEvent: {
		is: "Instance",
		events: ["Event"],
		methods: ["Fire"]
	},
	BindableFunction: {
		is: "Instance",
		props: ["OnInvoke"],
		methods: ["Invoke"]
	},
	ProximityPrompt: {
		is: "Instance",
		props: ["Enabled"]
	},
	Sound: {
		is: "Instance",
		props: [
			"SoundId",
			"Volume",
			"Playing",
			"Looped"
		],
		methods: [
			"Play",
			"Stop",
			"Pause"
		]
	},
	Tween: {
		is: "Instance",
		events: ["Completed"],
		methods: [
			"Play",
			"Cancel",
			"Pause"
		]
	},
	TweenService: {
		is: "Instance",
		methods: ["Create"]
	},
	RunService: {
		is: "Instance",
		events: [
			"Heartbeat",
			"RenderStepped",
			"Stepped"
		]
	},
	UserInputService: {
		is: "Instance",
		events: ["InputBegan", "InputEnded"]
	},
	InputObject: { props: [
		"KeyCode",
		"UserInputType",
		"Position"
	] },
	Workspace: {
		is: "Instance",
		props: ["Gravity", "CurrentCamera"]
	},
	Lighting: {
		is: "Instance",
		props: ["Brightness", "ClockTime"]
	},
	Script: {
		is: "Instance",
		props: ["Enabled", "Disabled"]
	},
	LocalScript: { is: "Script" },
	ModuleScript: { is: "Instance" },
	Camera: {
		is: "Instance",
		props: ["CFrame"]
	},
	DataModel: {
		is: "Instance",
		methods: ["GetService"]
	}
};
for (const s of services) CLASSES[s.label] ??= { is: "Instance" };
var ALL_PROPS = [
	...properties,
	...extraProps,
	...clothingProps
], ALL_EVENTS = [...events, ...extraEvents], ALL_METHODS = [...methods, ...extraMethods];
var find$1 = (list, l) => list.find((s) => s.label === l);
function classMembers(cls, sep) {
	const out = [], seen = /* @__PURE__ */ new Set();
	let c = cls;
	const add = (s) => {
		if (s && !seen.has(s.label)) {
			seen.add(s.label);
			out.push(s);
		}
	};
	const chain = [];
	while (c && CLASSES[c]) {
		chain.push(CLASSES[c]);
		c = CLASSES[c].is;
	}
	for (const info of chain) if (sep === ":") info.methods?.forEach((l) => add(find$1(ALL_METHODS, l)));
	else {
		info.props?.forEach((l) => add(find$1(ALL_PROPS, l)));
		info.events?.forEach((l) => add(find$1(ALL_EVENTS, l)));
	}
	if (cls === "DataModel" && sep === ".") services.forEach(add);
	return out;
}
/** O que o evento entrega no primeiro parâmetro. */
var EVENT_ARG = {
	PlayerAdded: "Player",
	PlayerRemoving: "Player",
	Touched: "BasePart",
	TouchEnded: "BasePart",
	CharacterAdded: "Model",
	MouseClick: "Player",
	ChildAdded: "Instance",
	ChildRemoved: "Instance",
	DescendantAdded: "Instance",
	InputBegan: "InputObject",
	InputEnded: "InputObject",
	Triggered: "Player"
};
/** Propriedades que já dizem o tipo do que guardam. */
var PROP_TYPE = {
	Character: "Model",
	Humanoid: "Humanoid",
	LocalPlayer: "Player",
	leaderstats: "Folder",
	PrimaryPart: "BasePart",
	CurrentCamera: "Camera",
	HumanoidRootPart: "BasePart",
	Head: "BasePart",
	PlayerGui: "Instance",
	Backpack: "Instance"
};
var GLOBAL_TYPE = {
	game: "DataModel",
	workspace: "Workspace",
	Workspace: "Workspace",
	script: "Script"
};
var esc$1 = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
/** Tipo de um nome criado no código (última atribuição antes do cursor). */
function nameType(name, code, depth = 0) {
	if (depth > 4) return;
	const assigns = [...code.matchAll(new RegExp("(?:^|\\n)[\\t ]*(?:local[\\t ]+)?" + esc$1(name) + "[\\t ]*=[\\t ]*([^\\n]+)", "g"))];
	const param = [...code.matchAll(new RegExp("([A-Za-z_]\\w*)\\s*:\\s*Connect\\s*\\(\\s*function\\s*\\(\\s*" + esc$1(name) + "\\b", "g"))];
	const lastA = assigns.at(-1), lastP = param.at(-1);
	if (lastP && (!lastA || lastP.index > lastA.index)) return EVENT_ARG[lastP[1]];
	if (lastA) {
		const e = lastA[1].replace(/--.*$/, "").trim();
		if (e !== name) return exprType(e, code, depth + 1);
	}
	if (new RegExp("\\bfor\\s+[A-Za-z_]\\w*\\s*,\\s*" + esc$1(name) + "\\s+in\\s+[^\\n]*Get(?:Children|Descendants)\\(").test(code)) return "Instance";
	if (new RegExp("\\bfor\\s+[A-Za-z_]\\w*\\s*,\\s*" + esc$1(name) + "\\s+in\\s+[^\\n]*GetPlayers\\(").test(code)) return "Player";
	return GLOBAL_TYPE[name] ?? (CLASSES[name] && services.some((s) => s.label === name) ? name : void 0);
}
/** Tipo de uma expressão simples (Instance.new, GetService, WaitForChild, a.b.c...). */
function exprType(expr, code, depth = 0) {
	expr = expr.trim();
	if (depth > 6 || !expr) return;
	let m = expr.match(/^Instance\.new\(\s*["'](\w+)["']/);
	if (m) return m[1];
	m = expr.match(/:GetService\(\s*["'](\w+)["']\s*\)$/);
	if (m) return m[1];
	m = expr.match(/:(?:WaitForChild|FindFirstChild)\(\s*["'](\w+)["'][^()]*\)$/);
	if (m) return PROP_TYPE[m[1]] ?? (CLASSES[m[1]] && m[1] !== "Instance" ? m[1] : void 0);
	m = expr.match(/:(?:FindFirstChildOfClass|FindFirstChildWhichIsA)\(\s*["'](\w+)["']\s*\)$/);
	if (m) return m[1];
	if (/\.CharacterAdded:Wait\(\)$/.test(expr)) return "Model";
	if (/^TweenService:Create\(|:Create\(/.test(expr)) return "Tween";
	m = expr.match(/^(.*):Clone\(\)$/);
	if (m) return exprType(m[1], code, depth + 1);
	if (/^[A-Za-z_]\w*$/.test(expr)) return nameType(expr, code, depth + 1);
	m = expr.match(/^(.*)\.([A-Za-z_]\w*)$/);
	if (m) {
		if (exprType(m[1], code, depth + 1) === "DataModel" && services.some((s) => s.label === m[2])) return m[2];
		if (PROP_TYPE[m[2]]) return PROP_TYPE[m[2]];
		if (m[2] === "Parent") return;
		if (CLASSES[m[2]] && m[2] !== "Instance") return m[2];
	}
}
/** Filhos que o aluno colocou dentro deste objeto (ex.: moedas.Parent = leaderstats -> "Moedas"). */
function childrenOf(owner, code) {
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	const vars = [...code.matchAll(new RegExp("\\b([A-Za-z_]\\w*)\\.Parent\\s*=\\s*" + esc$1(owner) + "\\b", "g"))].map((m) => m[1]);
	for (const m of code.matchAll(new RegExp("\\blocal\\s+([A-Za-z_]\\w*)\\s*=\\s*Instance\\.new\\(\\s*[\"'](\\w+)[\"']\\s*,\\s*" + esc$1(owner) + "\\s*\\)", "g"))) vars.push(m[1]);
	for (const v of vars) {
		const label = [...code.matchAll(new RegExp("\\b" + esc$1(v) + "\\.Name\\s*=\\s*[\"']([A-Za-z_]\\w*)[\"']", "g"))].at(-1)?.[1] ?? nameType(v, code) ?? "";
		if (!label || seen.has(label)) continue;
		seen.add(label);
		out.push({
			label,
			insert: label,
			kind: "property",
			detail: "Filho criado no seu código (" + (nameType(v, code) ?? "objeto") + ")"
		});
	}
	return out;
}
/** Variáveis, funções e parâmetros criados pelo próprio aluno, com o que cada um guarda. */
function ownNames(code) {
	const out = /* @__PURE__ */ new Map();
	const add = (n, kind, detail) => {
		if (n && n !== "_" && !out.has(n)) out.set(n, {
			label: n,
			insert: kind === "function" ? n + "($0)" : n,
			kind,
			detail
		});
	};
	for (const m of code.matchAll(/\b(?:local\s+)?function\s+([A-Za-z_][\w.:]*)\s*\(([^)]*)\)/g)) add(m[1].split(/[.:]/).pop(), "function", "Sua função: " + m[1] + "(" + m[2].trim() + ")");
	for (const m of code.matchAll(/(?:([A-Za-z_]\w*)\s*:\s*Connect\s*\(\s*)?function\s*[\w.:]*\s*\(([^)]*)\)/g)) {
		const ev = m[1];
		m[2].split(",").map((x) => x.trim()).filter(Boolean).forEach((p, k) => {
			const info = ev && k === 0 && EVENT_PARAM[ev];
			add(p, "variable", info ? "Parâmetro: " + info : "Parâmetro da função" + (ev ? " do evento " + ev : ""));
		});
	}
	for (const m of code.matchAll(/\bfor\s+([A-Za-z_]\w*)(?:\s*,\s*([A-Za-z_]\w*))?\s*(=|in)\s*([^\n]*?)\s+do\b/g)) if (m[3] === "=") add(m[1], "variable", "Contador do for: " + short(m[4]));
	else {
		add(m[1], "variable", "Posição na lista (" + short(m[4]) + ")");
		add(m[2], "variable", "Item da lista (" + short(m[4]) + ")");
	}
	for (const m of code.matchAll(/\blocal\s+([A-Za-z_]\w*(?:\s*,\s*[A-Za-z_]\w*)*)\s*(?:=\s*([^\n]*))?/g)) m[1].split(",").map((x) => x.trim()).forEach((n) => add(n, "variable", m[2] ? "Sua variável: " + n + " = " + short(m[2]) : "Sua variável (ainda sem valor)"));
	return [...out.values()];
}
var M_PART = new Set([
	"Part",
	"SpawnLocation",
	"UnionOperation",
	"NegateOperation",
	"MeshPart",
	"WedgePart",
	"TrussPart"
]);
var SERVICE_ALIAS = {
	workspace: "Workspace",
	Workspace: "Workspace"
};
var kid$1 = (n, name) => n.kids.find((k) => k.name === name);
/** Que objeto do Explorador esta expressão aponta (ou undefined se não der para saber). */
function sceneNode(expr, code, scene, depth = 0) {
	expr = expr.trim();
	if (depth > 8 || !expr) return;
	if (expr === "game") return scene.root;
	if (expr === "script") return scene.script;
	let m = expr.match(/^(.*):GetService\(\s*["'](\w+)["']\s*\)$/);
	if (m) return kid$1(scene.root, m[2]);
	m = expr.match(/^(.*):(?:WaitForChild|FindFirstChild)\(\s*["']([^"']+)["'][^()]*\)$/);
	if (m) {
		const b = sceneNode(m[1], code, scene, depth + 1);
		return b && kid$1(b, m[2]);
	}
	m = expr.match(/^(.*?)\s*\.\s*([A-Za-z_]\w*)$/);
	if (m) {
		const b = sceneNode(m[1], code, scene, depth + 1);
		if (!b) return;
		if (m[2] === "Parent") return b.parent ?? void 0;
		return kid$1(b, m[2]);
	}
	if (/^[A-Za-z_]\w*$/.test(expr)) {
		const a = [...code.matchAll(new RegExp("(?:^|\\n)[\\t ]*(?:local[\\t ]+)?" + esc$1(expr) + "[\\t ]*=[\\t ]*([^\\n]+)", "g"))].at(-1);
		if (a) {
			const e = a[1].replace(/--.*$/, "").trim();
			return e === expr ? void 0 : sceneNode(e, code, scene, depth + 1);
		}
		return SERVICE_ALIAS[expr] ? kid$1(scene.root, SERVICE_ALIAS[expr]) : void 0;
	}
}
var childItems = (n) => {
	const seen = /* @__PURE__ */ new Set();
	return n.kids.filter((k) => {
		if (seen.has(k.name)) return false;
		seen.add(k.name);
		return true;
	}).map((k) => ({
		label: k.name,
		insert: /^[A-Za-z_]\w*$/.test(k.name) ? k.name : k.name,
		kind: "property",
		cls: k.cls,
		detail: `Filho de ${n.name} · ${k.cls}${k.kids.length ? ` · ${k.kids.length} dentro` : ""}`
	}));
};
var NEW_CLASSES = [...[
	["RemoteEvent", "Mensagem entre servidor e cliente"],
	["RemoteFunction", "Pergunta e resposta entre servidor e cliente"],
	["BindableEvent", "Mensagem entre scripts do mesmo lado"],
	["BindableFunction", "Pergunta entre scripts do mesmo lado"],
	["Part", "Peça (bloco)"],
	["SpawnLocation", "Onde o jogador nasce"],
	["MeshPart", "Peça com malha"],
	["Model", "Grupo de objetos"],
	["Folder", "Pasta para organizar"],
	["IntValue", "Guarda um número inteiro (ex.: moedas)"],
	["NumberValue", "Guarda um número com vírgula"],
	["StringValue", "Guarda um texto"],
	["BoolValue", "Guarda verdadeiro/falso"],
	["PointLight", "Luz em volta da peça"],
	["ClickDetector", "Deixa a peça clicável"],
	["Script", "Script do servidor"],
	["LocalScript", "Script do jogador"],
	["ModuleScript", "Código reutilizável (require)"],
	["ScreenGui", "Tela de interface"],
	["Frame", "Retângulo de interface"],
	["TextLabel", "Texto na tela"],
	["TextButton", "Botão com texto"],
	["ImageLabel", "Imagem na tela"],
	["ImageButton", "Botão com imagem"],
	["UICorner", "Arredonda os cantos"],
	["UIStroke", "Contorno"],
	["UIGradient", "Degradê"],
	["UIListLayout", "Organiza em lista"]
], ...[
	["Shirt", "Camisa do personagem"],
	["Pants", "Calça do personagem"],
	["BodyColors", "Cores das partes do corpo"]
]].map(([c, d]) => ({
	label: c,
	insert: c,
	kind: "property",
	detail: d,
	cls: c
}));
/** Para :IsA(" — classes e as categorias que juntam várias (como no Roblox). */
var ISA_CLASSES = [
	...[
		["BasePart", "Qualquer peça: Part, MeshPart, união…"],
		["GuiObject", "Qualquer elemento de interface"],
		["GuiButton", "TextButton ou ImageButton"],
		["ValueBase", "Qualquer valor (IntValue, StringValue…)"],
		["LuaSourceContainer", "Qualquer script"],
		["BaseScript", "Script ou LocalScript"],
		["PVInstance", "Peças e Models"],
		["Instance", "Todo objeto"],
		["Humanoid", "Personagem (vida, andar, pular)"],
		["Player", "Jogador"]
	].map(([c, d]) => ({
		label: c,
		insert: c,
		kind: "property",
		detail: d,
		cls: c === "BasePart" ? "Part" : c === "GuiObject" ? "Frame" : c === "ValueBase" ? "IntValue" : c === "BaseScript" || c === "LuaSourceContainer" ? "Script" : c === "PVInstance" ? "Model" : c
	})),
	...NEW_CLASSES,
	{
		label: "UnionOperation",
		insert: "UnionOperation",
		kind: "property",
		detail: "União de peças",
		cls: "UnionOperation"
	}
];
function suggest(code, caret, scene) {
	const before = code.slice(0, caret), line = before.slice(before.lastIndexOf("\n") + 1);
	const inNew = line.match(/Instance\.new\(\s*["'](\w*)$/);
	if (inNew) return {
		items: rank(NEW_CLASSES, inNew[1]).slice(0, 12),
		replace: inNew[1].length
	};
	const inIsA = line.match(/:\s*(?:IsA|FindFirstChildOfClass|FindFirstChildWhichIsA|FindFirstAncestorOfClass|FindFirstAncestorWhichIsA)\(\s*["'](\w*)$/);
	if (inIsA) return {
		items: rank(ISA_CLASSES, inIsA[1]).slice(0, 14),
		replace: inIsA[1].length
	};
	if (/GetService\(\s*["']\w*$/.test(line)) {
		const p = line.match(/["'](\w*)$/)[1];
		return {
			items: rank(services, p).slice(0, 8),
			replace: p.length
		};
	}
	const inChild = scene && line.match(/([A-Za-z_][\w.:]*(?:\([^()]*\))?(?:[.:][A-Za-z_]\w*(?:\([^()]*\))?)*)\s*:\s*(?:WaitForChild|FindFirstChild)\(\s*["']([^"']*)$/);
	if (inChild) {
		const n = sceneNode(inChild[1], before.slice(0, before.length - line.length) + line.slice(0, line.length - inChild[0].length + inChild[1].length), scene);
		if (n) return {
			items: rank(childItems(n), inChild[2]).slice(0, 30),
			replace: inChild[2].length
		};
	}
	const open = line.replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, "");
	if (/["']|--/.test(open) || /\[=*\[(?![\s\S]*\]=*\])/.test(before)) return {
		items: [],
		replace: 0
	};
	const m = line.match(/(?:([A-Za-z_]\w*)\s*([.:]))?\s*([A-Za-z_]\w*)?$/);
	if (!m) return {
		items: [],
		replace: 0
	};
	let [, owner, sep, word = ""] = m;
	const afterCall = line.match(/\)\s*([.:])\s*([A-Za-z_]\w*)?$/);
	if (!sep && afterCall) {
		sep = afterCall[1];
		word = afterCall[2] || "";
		owner = "";
	}
	if (sep === "." && members[owner]) return {
		items: rank(members[owner], word).slice(0, 8),
		replace: word.length
	};
	if (sep) {
		const head = line.slice(0, line.length - word.length).replace(/\s*[.:]\s*$/, "");
		const chain = head.match(/([A-Za-z_][\w]*(?:\s*[.:]\s*[A-Za-z_]\w*(?:\([^()]*\))?)*)$/)?.[1] ?? owner ?? "";
		const eventOwner = ALL_EVENTS.some((e) => e.label === owner) && /[.]\s*[A-Za-z_]\w*$/.test(head);
		if (sep === ":" && eventOwner) return {
			items: rank(methods.filter((m) => m.label === "Connect" || m.label === "Wait"), word).slice(0, 8),
			replace: word.length
		};
		const ctxCode = before.slice(0, before.length - line.length) + head;
		const node = scene ? sceneNode(chain, ctxCode, scene) : void 0;
		const cls = node ? CLASSES[node.cls] ? node.cls : M_PART.has(node.cls) ? "BasePart" : "Instance" : exprType(chain, ctxCode);
		if (cls && CLASSES[cls]) {
			const kids = sep === "." ? [...node ? childItems(node) : [], .../^[A-Za-z_]\w*$/.test(chain) ? childrenOf(chain, code) : []] : [];
			const own = new Set(kids.map((k) => k.label));
			return {
				items: rank([...kids, ...classMembers(cls, sep).filter((s) => !own.has(s.label))].map((s) => s.kind === "property" && !s.detail.startsWith("Filho") ? {
					...s,
					detail: cls + " · " + s.detail
				} : s), word).slice(0, 30),
				replace: word.length
			};
		}
		if (sep === ".") return {
			items: rank([...properties, ...events], word).slice(0, 30),
			replace: word.length
		};
		return {
			items: rank(methods, word).slice(0, 30),
			replace: word.length
		};
	}
	if (!word) return {
		items: [],
		replace: 0
	};
	const own = ownNames(code.slice(0, caret - word.length) + code.slice(caret)).filter((s) => s.label !== word);
	return {
		items: rank([...own, ...globals.filter((g) => !own.some((o) => o.label === g.label))], word).filter((s) => s.label !== word || s.kind === "snippet").slice(0, 8),
		replace: word.length
	};
}
//#endregion
//#region lib/lua-highlight.ts
var eventLabels = new Set(events.map((e) => e.label));
var keywords = new Set("and break continue do else elseif end export for function if in local not or repeat return then type until while".split(" "));
/** true, false e nil têm a cor de valores no Roblox Studio (a mesma dos números). */
var literals = new Set([
	"true",
	"false",
	"nil"
]);
/** Funções e objetos nativos do Lua e do Roblox, na cor "Built-in" do Studio. */
var builtins = new Set("print warn pairs ipairs tonumber tostring type typeof require assert error pcall xpcall next select unpack setmetatable getmetatable rawget rawset rawequal wait delay spawn tick time elapsedTime game workspace script plugin shared Enum Instance Vector2 Vector3 CFrame Color3 BrickColor UDim UDim2 TweenInfo Ray Random NumberRange NumberSequence ColorSequence Region3 Rect DateTime task math string table coroutine os utf8 bit32 buffer debug".split(" "));
/** Bibliotecas cujas funções (task.wait, math.random…) também ficam na cor nativa. */
var libraries = new Set("task math string table coroutine os utf8 bit32 buffer debug".split(" "));
/** Tipos do Roblox cujas funções (Color3.fromRGB, Vector3.new, Instance.new…) também ficam na cor nativa. */
var constructors = new Set("Instance Vector2 Vector3 CFrame Color3 BrickColor UDim UDim2 TweenInfo Ray Random NumberRange NumberSequence ColorSequence Region3 Rect DateTime".split(" "));
function tokenizeLua(code) {
	const pattern = /--\[(=*)\[[\s\S]*?\]\1\]|--[^\n]*|\[(=*)\[[\s\S]*?\]\2\]|"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\b(?:0[xX][\da-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b|\b[A-Za-z_]\w*\b|(?:\.\.|==|~=|<=|>=|[+*/%^#=<>:.-])|[\s\S]/g;
	const out = [];
	let last = "", beforeLast = "";
	for (const m of code.matchAll(pattern)) {
		const text = m[0];
		const kind = text.startsWith("--") ? "comment" : /^['"]|^\[=*\[/.test(text) ? "string" : /^\d/.test(text) ? "number" : literals.has(text) ? "number" : keywords.has(text) ? "keyword" : /^[A-Za-z_]/.test(text) && last === "." && eventLabels.has(text) ? "event" : /^[A-Za-z_]/.test(text) && last === "." && (libraries.has(beforeLast) || constructors.has(beforeLast)) ? "function" : /^[A-Za-z_]/.test(text) && last !== "." && last !== ":" && builtins.has(text) ? "function" : /^[A-Za-z_]/.test(text) && (last === "." || last === ":") ? code.slice(m.index + text.length).trimStart().startsWith("(") ? "method" : "property" : /^[+*/%^#=<>:.-]/.test(text) ? "operator" : "plain";
		out.push({
			text,
			kind
		});
		if (!/^\s+$/.test(text)) {
			beforeLast = last;
			last = text;
		}
	}
	return out;
}
//#endregion
//#region lib/lua-editing.ts
function maskLua(source) {
	return tokenizeLua(source).map((t) => t.kind === "string" || t.kind === "comment" ? t.text.replace(/[^\n]/g, " ") : t.text).join("");
}
function enterLua(source, start, end = start) {
	const lineStart = source.lastIndexOf("\n", start - 1) + 1;
	const lineEnd = source.indexOf("\n", end) < 0 ? source.length : source.indexOf("\n", end);
	let indent = source.slice(lineStart, start).match(/^\s*/)?.[0] || "";
	const masked = maskLua(source), head = masked.slice(lineStart, start).trim();
	if (/^(else|elseif)\b/.test(head)) {
		const stack = [];
		for (const match of masked.slice(0, lineStart).matchAll(/\b(if|for|while|function|repeat|do|end|until)\b/g)) {
			const kind = match[0];
			if (kind === "end" || kind === "until") {
				stack.pop();
				continue;
			}
			if (kind === "do" && stack.at(-1)?.pending) {
				stack[stack.length - 1].pending = false;
				continue;
			}
			const at = match.index, begin = masked.lastIndexOf("\n", at - 1) + 1;
			stack.push({
				kind,
				indent: masked.slice(begin, at).match(/^[\t ]*/)?.[0] || "",
				pending: kind === "for" || kind === "while"
			});
		}
		const parent = stack.at(-1);
		if (parent?.kind === "if" && parent.indent !== indent) {
			const difference = parent.indent.length - indent.length;
			return enterLua(source.slice(0, lineStart) + parent.indent + source.slice(lineStart + indent.length), start + difference, end + difference);
		}
	}
	const tail = masked.slice(end, lineEnd).trim();
	let addition = "", close = "", open = false;
	if (!tail) {
		if (/^(for|while)\b/.test(head) && !/\bend\b/.test(head)) {
			addition = /\bdo\s*$/.test(head) ? "" : " do";
			close = "end";
			open = true;
		} else if (/^(if|elseif)\b/.test(head) && !/\bend\b/.test(head)) {
			addition = /\bthen\s*$/.test(head) ? "" : " then";
			close = "end";
			open = true;
		} else if (head === "else" || head === "do") {
			close = "end";
			open = true;
		} else if (head === "repeat") {
			close = "until ";
			open = true;
		} else if (/\bfunction\b.*\)\s*$/.test(head) && !/\bend\b/.test(head)) {
			close = "end" + ")".repeat(Math.max(0, (head.match(/\(/g) || []).length - (head.match(/\)/g) || []).length));
			open = true;
		}
	}
	const following = masked.slice(lineEnd).split("\n").slice(1);
	let existing = false;
	for (const l of following) {
		if (!l.trim()) continue;
		const leading = l.match(/^[\t ]*/)?.[0] || "";
		if (leading.length > indent.length) continue;
		existing = leading === indent && (close.startsWith("until") ? /^until\b/.test(l.trim()) : /^(end|else|elseif)\b/.test(l.trim()));
		break;
	}
	const prefix = source.slice(0, start);
	const statementEnd = lineStart + masked.slice(lineStart, start).trimEnd().length;
	const updated = addition ? source.slice(0, statementEnd) + addition + source.slice(statementEnd, start) : prefix;
	const insertion = "\n" + (indent + (open ? "    " : ""));
	const suffix = open && !existing ? "\n" + indent + close : "";
	return {
		code: updated + insertion + suffix + source.slice(end),
		caret: updated.length + insertion.length
	};
}
//#endregion
//#region components/ui-icons.tsx
function Svg({ size = 20, className, strokeWidth = 2, title, children, fill = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: fill ? "currentColor" : "none",
		stroke: fill ? "none" : "currentColor",
		strokeWidth,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: "lu-icon" + (className ? " " + className : ""),
		"aria-hidden": title ? void 0 : true,
		role: title ? "img" : void 0,
		focusable: "false",
		children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: title }), children]
	});
}
var make = (paths, fill = false) => function Icon(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		fill,
		children: paths
	});
};
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
var IconMinus = make(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" }));
var IconHash = make(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.5 4L7.5 20M16.5 4l-2 16M4.5 9h16M3.5 15h16" }));
var IconType = make(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 6.5V5h14v1.5M12 5v14M9 19h6" }));
var IconMonitor = make(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
	x: "3",
	y: "4",
	width: "18",
	height: "12",
	rx: "2"
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.5 20h7M12 16v4" })] }));
var IconImage = make(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "3.5",
		y: "4.5",
		width: "17",
		height: "15",
		rx: "2"
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "9",
		cy: "10",
		r: "1.8"
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 17.5l5-5 4 4 2.5-2.5 4.5 4.5" })
] }));
var IconPuzzle = make(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 4.5a2.5 2.5 0 0 1 5 0V7h3.5v4H19a2.5 2.5 0 0 1 0 5h-1.5v3.5H14V17a2.5 2.5 0 0 0-5 0v2.5H5.5V15.5H7a2.5 2.5 0 0 0 0-5H5.5V7H9z" }));
var IconPointer = make(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 3.5l13 7-5.5 1.8L15.5 20l-3 1.3-3.5-6.8L5 18z" }));
var IconButton = make(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
	cx: "12",
	cy: "12",
	r: "8.5"
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
	cx: "12",
	cy: "12",
	r: "3",
	fill: "currentColor"
})] }));
var IconCheckSquare = make(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
	x: "3.5",
	y: "3.5",
	width: "17",
	height: "17",
	rx: "2.5"
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7.5 12.3l3 3 6-6.3" })] }));
var IconLightbulb = make(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 17.5h6M10 20.5h4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3a6 6 0 0 0-3.8 10.6c.6.5 1 1.2 1 2V16h5.6v-.4c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" })] }));
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
import_jsx_runtime.Fragment;
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Box = createLucideIcon("box", [
	["path", {
		d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
		key: "hh9hay"
	}],
	["path", {
		d: "m3.3 7 8.7 5 8.7-5",
		key: "g66t2b"
	}],
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Boxes = createLucideIcon("boxes", [
	["path", {
		d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
		key: "lc1i9w"
	}],
	["path", {
		d: "m7 16.5-4.74-2.85",
		key: "1o9zyk"
	}],
	["path", {
		d: "m7 16.5 5-3",
		key: "va8pkn"
	}],
	["path", {
		d: "M7 16.5v5.17",
		key: "jnp8gn"
	}],
	["path", {
		d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
		key: "8zsnat"
	}],
	["path", {
		d: "m17 16.5-5-3",
		key: "8arw3v"
	}],
	["path", {
		d: "m17 16.5 4.74-2.85",
		key: "8rfmw"
	}],
	["path", {
		d: "M17 16.5v5.17",
		key: "k6z78m"
	}],
	["path", {
		d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
		key: "1xygjf"
	}],
	["path", {
		d: "M12 8 7.26 5.15",
		key: "1vbdud"
	}],
	["path", {
		d: "m12 8 4.74-2.85",
		key: "3rx089"
	}],
	["path", {
		d: "M12 13.5V8",
		key: "1io7kd"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronUp = createLucideIcon("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronsUp = createLucideIcon("chevrons-up", [["path", {
	d: "m17 11-5-5-5 5",
	key: "e8nh98"
}], ["path", {
	d: "m17 18-5-5-5 5",
	key: "2avn1x"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Circle = createLucideIcon("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ClipboardPaste = createLucideIcon("clipboard-paste", [
	["path", {
		d: "M11 14h10",
		key: "1w8e9d"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v1.344",
		key: "1e62lh"
	}],
	["path", {
		d: "m17 18 4-4-4-4",
		key: "z2g111"
	}],
	["path", {
		d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113",
		key: "bjbb7m"
	}],
	["rect", {
		x: "8",
		y: "2",
		width: "8",
		height: "4",
		rx: "1",
		key: "ublpy"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Combine = createLucideIcon("combine", [
	["path", {
		d: "M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",
		key: "1l7d7l"
	}],
	["path", {
		d: "M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",
		key: "9955pe"
	}],
	["path", {
		d: "m7 15 3 3",
		key: "4hkfgk"
	}],
	["path", {
		d: "m7 21 3-3H5a2 2 0 0 1-2-2v-2",
		key: "1xljwe"
	}],
	["rect", {
		x: "14",
		y: "14",
		width: "7",
		height: "7",
		rx: "1",
		key: "1cdgtw"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "7",
		height: "7",
		rx: "1",
		key: "zi3rio"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Copy = createLucideIcon("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Crosshair = createLucideIcon("crosshair", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "22",
		x2: "18",
		y1: "12",
		y2: "12",
		key: "l9bcsi"
	}],
	["line", {
		x1: "6",
		x2: "2",
		y1: "12",
		y2: "12",
		key: "13hhkx"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "6",
		y2: "2",
		key: "10w3f3"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "22",
		y2: "18",
		key: "15g9kq"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Cylinder = createLucideIcon("cylinder", [["ellipse", {
	cx: "12",
	cy: "5",
	rx: "9",
	ry: "3",
	key: "msslwz"
}], ["path", {
	d: "M3 5v14a9 3 0 0 0 18 0V5",
	key: "aqi0yr"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var DoorClosed = createLucideIcon("door-closed", [
	["path", {
		d: "M10 12h.01",
		key: "1kxr2c"
	}],
	["path", {
		d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",
		key: "36qu9e"
	}],
	["path", {
		d: "M2 20h20",
		key: "owomy5"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Download = createLucideIcon("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Ellipsis = createLucideIcon("ellipsis", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "19",
		cy: "12",
		r: "1",
		key: "1wjl8i"
	}],
	["circle", {
		cx: "5",
		cy: "12",
		r: "1",
		key: "1pcz8c"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Feather = createLucideIcon("feather", [
	["path", {
		d: "M14.086 18.412A2 2 0 0112.67 19H5v-7.672a2 2 0 01.586-1.414L11.75 3.75a6 6 0 118.49 8.49z",
		key: "1nq9jb"
	}],
	["path", {
		d: "M16 8 2 22",
		key: "vp34q"
	}],
	["path", {
		d: "M17.488 15H9",
		key: "16yirz"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FileCode = createLucideIcon("file-code", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 12.5 8 15l2 2.5",
		key: "1tg20x"
	}],
	["path", {
		d: "m14 12.5 2 2.5-2 2.5",
		key: "yinavb"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FilePlus = createLucideIcon("file-plus", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M9 15h6",
		key: "cctwl0"
	}],
	["path", {
		d: "M12 18v-6",
		key: "17g6i2"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Flag = createLucideIcon("flag", [["path", {
	d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
	key: "1jaruq"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FolderOpen = createLucideIcon("folder-open", [["path", {
	d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
	key: "usdka0"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FolderTree = createLucideIcon("folder-tree", [
	["path", {
		d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
		key: "hod4my"
	}],
	["path", {
		d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
		key: "w4yl2u"
	}],
	["path", {
		d: "M3 5a2 2 0 0 0 2 2h3",
		key: "f2jnh7"
	}],
	["path", {
		d: "M3 3v13a2 2 0 0 0 2 2h3",
		key: "k8epm1"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Gamepad2 = createLucideIcon("gamepad-2", [
	["line", {
		x1: "6",
		x2: "10",
		y1: "11",
		y2: "11",
		key: "1gktln"
	}],
	["line", {
		x1: "8",
		x2: "8",
		y1: "9",
		y2: "13",
		key: "qnk9ow"
	}],
	["line", {
		x1: "15",
		x2: "15.01",
		y1: "12",
		y2: "12",
		key: "krot7o"
	}],
	["line", {
		x1: "18",
		x2: "18.01",
		y1: "10",
		y2: "10",
		key: "1lcuu1"
	}],
	["path", {
		d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
		key: "mfqc10"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Grid3x3 = createLucideIcon("grid-3x3", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M3 15h18",
		key: "5xshup"
	}],
	["path", {
		d: "M9 3v18",
		key: "fh3hqa"
	}],
	["path", {
		d: "M15 3v18",
		key: "14nvp0"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Group = createLucideIcon("group", [
	["path", {
		d: "M3 7V5c0-1.1.9-2 2-2h2",
		key: "adw53z"
	}],
	["path", {
		d: "M17 3h2c1.1 0 2 .9 2 2v2",
		key: "an4l38"
	}],
	["path", {
		d: "M21 17v2c0 1.1-.9 2-2 2h-2",
		key: "144t0e"
	}],
	["path", {
		d: "M7 21H5c-1.1 0-2-.9-2-2v-2",
		key: "rtnfgi"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "7",
		y: "7",
		rx: "1",
		key: "1eyiv7"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "10",
		y: "12",
		rx: "1",
		key: "1qlmkx"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Keyboard = createLucideIcon("keyboard", [
	["path", {
		d: "M10 8h.01",
		key: "1r9ogq"
	}],
	["path", {
		d: "M12 12h.01",
		key: "1mp3jc"
	}],
	["path", {
		d: "M14 8h.01",
		key: "1primd"
	}],
	["path", {
		d: "M16 12h.01",
		key: "1l6xoz"
	}],
	["path", {
		d: "M18 8h.01",
		key: "emo2bl"
	}],
	["path", {
		d: "M6 8h.01",
		key: "x9i8wu"
	}],
	["path", {
		d: "M7 16h10",
		key: "wp8him"
	}],
	["path", {
		d: "M8 12h.01",
		key: "czm47f"
	}],
	["rect", {
		width: "20",
		height: "16",
		x: "2",
		y: "4",
		rx: "2",
		key: "18n3k1"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Layers = createLucideIcon("layers", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
		key: "zw3jo"
	}],
	["path", {
		d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
		key: "1wduqc"
	}],
	["path", {
		d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
		key: "kqbvx6"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LayoutGrid = createLucideIcon("layout-grid", [
	["rect", {
		width: "7",
		height: "7",
		x: "3",
		y: "3",
		rx: "1",
		key: "1g98yp"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "14",
		y: "3",
		rx: "1",
		key: "6d4xhi"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "14",
		y: "14",
		rx: "1",
		key: "nxv5o0"
	}],
	["rect", {
		width: "7",
		height: "7",
		x: "3",
		y: "14",
		rx: "1",
		key: "1bb6yr"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Link = createLucideIcon("link", [["path", {
	d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
	key: "1cjeqo"
}], ["path", {
	d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
	key: "19qd67"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LogOut = createLucideIcon("log-out", [
	["path", {
		d: "m16 17 5-5-5-5",
		key: "1bji2h"
	}],
	["path", {
		d: "M21 12H9",
		key: "dn1m92"
	}],
	["path", {
		d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
		key: "1uf3rs"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Maximize2 = createLucideIcon("maximize-2", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "m21 3-7 7",
		key: "1l2asr"
	}],
	["path", {
		d: "m3 21 7-7",
		key: "tjx5ai"
	}],
	["path", {
		d: "M9 21H3v-6",
		key: "wtvkvv"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Menu = createLucideIcon("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MousePointer2 = createLucideIcon("mouse-pointer-2", [["path", {
	d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
	key: "edeuup"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Move = createLucideIcon("move", [
	["path", {
		d: "M12 2v20",
		key: "t6zp3m"
	}],
	["path", {
		d: "m15 19-3 3-3-3",
		key: "11eu04"
	}],
	["path", {
		d: "m19 9 3 3-3 3",
		key: "1mg7y2"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}],
	["path", {
		d: "m5 9-3 3 3 3",
		key: "j64kie"
	}],
	["path", {
		d: "m9 5 3-3 3 3",
		key: "l8vdw6"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var PackageOpen = createLucideIcon("package-open", [
	["path", {
		d: "M12 22v-9",
		key: "x3hkom"
	}],
	["path", {
		d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",
		key: "2ntwy6"
	}],
	["path", {
		d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",
		key: "1pmm1c"
	}],
	["path", {
		d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",
		key: "12ttoo"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var PackagePlus = createLucideIcon("package-plus", [
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}],
	["path", {
		d: "M16 17h6",
		key: "1ook5g"
	}],
	["path", {
		d: "M19 14v6",
		key: "1ckrd5"
	}],
	["path", {
		d: "M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955",
		key: "28k6lz"
	}],
	["path", {
		d: "M3.29 7 12 12l8.71-5",
		key: "19ckod"
	}],
	["path", {
		d: "m7.5 4.27 8.997 5.148",
		key: "9yrvtv"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Package = createLucideIcon("package", [
	["path", {
		d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
		key: "1a0edw"
	}],
	["path", {
		d: "M12 22V12",
		key: "d0xqtd"
	}],
	["polyline", {
		points: "3.29 7 12 12 20.71 7",
		key: "ousv84"
	}],
	["path", {
		d: "m7.5 4.27 9 5.15",
		key: "1c824w"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Play = createLucideIcon("play", [["path", {
	d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
	key: "10ikf1"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Plus = createLucideIcon("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Puzzle = createLucideIcon("puzzle", [["path", {
	d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
	key: "w46dr5"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Pyramid = createLucideIcon("pyramid", [["path", {
	d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",
	key: "aenxs0"
}], ["path", {
	d: "M12 2v20",
	key: "t6zp3m"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Redo2 = createLucideIcon("redo-2", [["path", {
	d: "m15 14 5-5-5-5",
	key: "12vg1m"
}], ["path", {
	d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",
	key: "6uklza"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RefreshCw = createLucideIcon("refresh-cw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Rocket = createLucideIcon("rocket", [
	["path", {
		d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
		key: "qeys4"
	}],
	["path", {
		d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
		key: "u4xsad"
	}],
	["path", {
		d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
		key: "676m9"
	}],
	["path", {
		d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",
		key: "92ym6u"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RotateCcw = createLucideIcon("rotate-ccw", [["path", {
	d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
	key: "1357e3"
}], ["path", {
	d: "M3 3v5h5",
	key: "1xhq8a"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Save = createLucideIcon("save", [
	["path", {
		d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
		key: "1c8476"
	}],
	["path", {
		d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
		key: "1ydtos"
	}],
	["path", {
		d: "M7 3v4a1 1 0 0 0 1 1h7",
		key: "t51u73"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Scissors = createLucideIcon("scissors", [
	["circle", {
		cx: "6",
		cy: "6",
		r: "3",
		key: "1lh9wr"
	}],
	["path", {
		d: "M8.12 8.12 12 12",
		key: "1alkpv"
	}],
	["path", {
		d: "M20 4 8.12 15.88",
		key: "xgtan2"
	}],
	["circle", {
		cx: "6",
		cy: "18",
		r: "3",
		key: "fqmcym"
	}],
	["path", {
		d: "M14.8 14.8 20 20",
		key: "ptml3r"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Settings = createLucideIcon("settings", [["path", {
	d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
	key: "1i5ecw"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var SlidersHorizontal = createLucideIcon("sliders-horizontal", [
	["path", {
		d: "M10 5H3",
		key: "1qgfaw"
	}],
	["path", {
		d: "M12 19H3",
		key: "yhmn1j"
	}],
	["path", {
		d: "M14 3v4",
		key: "1sua03"
	}],
	["path", {
		d: "M16 17v4",
		key: "1q0r14"
	}],
	["path", {
		d: "M21 12h-9",
		key: "1o4lsq"
	}],
	["path", {
		d: "M21 19h-5",
		key: "1rlt1p"
	}],
	["path", {
		d: "M21 5h-7",
		key: "1oszz2"
	}],
	["path", {
		d: "M8 10v4",
		key: "tgpxqk"
	}],
	["path", {
		d: "M8 12H3",
		key: "a7s4jb"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Sparkles = createLucideIcon("sparkles", [
	["path", {
		d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
		key: "1s2grr"
	}],
	["path", {
		d: "M20 2v4",
		key: "1rf3ol"
	}],
	["path", {
		d: "M22 4h-4",
		key: "gwowj6"
	}],
	["circle", {
		cx: "4",
		cy: "20",
		r: "2",
		key: "6kqj1y"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Split = createLucideIcon("split", [
	["path", {
		d: "M16 3h5v5",
		key: "1806ms"
	}],
	["path", {
		d: "M8 3H3v5",
		key: "15dfkv"
	}],
	["path", {
		d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",
		key: "1qrqzj"
	}],
	["path", {
		d: "m15 9 6-6",
		key: "ko1vev"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var SquareMinus = createLucideIcon("square-minus", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M8 12h8",
	key: "1wcyev"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var SquareStack = createLucideIcon("square-stack", [
	["path", {
		d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",
		key: "4i38lg"
	}],
	["path", {
		d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",
		key: "mlte4a"
	}],
	["rect", {
		width: "8",
		height: "8",
		x: "14",
		y: "14",
		rx: "2",
		key: "1fa9i4"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Square = createLucideIcon("square", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Terminal = createLucideIcon("terminal", [["path", {
	d: "M12 19h8",
	key: "baeox8"
}], ["path", {
	d: "m4 17 6-6-6-6",
	key: "1yngyt"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TextCursorInput = createLucideIcon("text-cursor-input", [
	["path", {
		d: "M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6",
		key: "1528k5"
	}],
	["path", {
		d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",
		key: "13ksps"
	}],
	["path", {
		d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",
		key: "1n9rhb"
	}],
	["path", {
		d: "M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1",
		key: "1mj8rg"
	}],
	["path", {
		d: "M9 6v12",
		key: "velyjx"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Trash2 = createLucideIcon("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Triangle = createLucideIcon("triangle", [["path", {
	d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
	key: "14u9p9"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Trophy = createLucideIcon("trophy", [
	["path", {
		d: "M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",
		key: "pwuv1l"
	}],
	["path", {
		d: "M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",
		key: "1y54w1"
	}],
	["path", {
		d: "M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",
		key: "e30mpu"
	}],
	["path", {
		d: "M4 22h16",
		key: "57wxv0"
	}],
	["path", {
		d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
		key: "1mhfuq"
	}],
	["path", {
		d: "M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",
		key: "i0yafy"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Undo2 = createLucideIcon("undo-2", [["path", {
	d: "M9 14 4 9l5-5",
	key: "102s5s"
}], ["path", {
	d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
	key: "f3b9sd"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Ungroup = createLucideIcon("ungroup", [["rect", {
	x: "11",
	y: "14",
	width: "10",
	height: "7",
	rx: "2",
	key: "nfm8rk"
}], ["rect", {
	x: "3",
	y: "3",
	width: "10",
	height: "7",
	rx: "2",
	key: "1ljebb"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Upload = createLucideIcon("upload", [
	["path", {
		d: "M12 3v12",
		key: "1x0j5s"
	}],
	["path", {
		d: "m17 8-5-5-5 5",
		key: "7q97r8"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var UserRoundPlus = createLucideIcon("user-round-plus", [
	["path", {
		d: "M2 21a8 8 0 0 1 13.292-6",
		key: "bjp14o"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["path", {
		d: "M19 16v6",
		key: "tddt3s"
	}],
	["path", {
		d: "M22 19h-6",
		key: "vcuq98"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var UserRound = createLucideIcon("user-round", [["circle", {
	cx: "12",
	cy: "8",
	r: "5",
	key: "1hypcn"
}], ["path", {
	d: "M20 21a8 8 0 0 0-16 0",
	key: "rfgkzh"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var User = createLucideIcon("user", [["path", {
	d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
	key: "975kel"
}], ["circle", {
	cx: "12",
	cy: "7",
	r: "4",
	key: "17ys0d"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Users = createLucideIcon("users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["path", {
		d: "M16 3.128a4 4 0 0 1 0 7.744",
		key: "16gr8j"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var WandSparkles = createLucideIcon("wand-sparkles", [
	["path", {
		d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
		key: "ul74o6"
	}],
	["path", {
		d: "m14 7 3 3",
		key: "1r5n42"
	}],
	["path", {
		d: "M5 6v4",
		key: "ilb8ba"
	}],
	["path", {
		d: "M19 14v4",
		key: "blhpug"
	}],
	["path", {
		d: "M10 2v2",
		key: "7u0qdc"
	}],
	["path", {
		d: "M7 8H3",
		key: "zfb6yr"
	}],
	["path", {
		d: "M21 16h-4",
		key: "1cnmox"
	}],
	["path", {
		d: "M11 3H9",
		key: "1obp7u"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region components/LabExplorer.tsx
/** Objetos menos usados: emoji. Os mais usados têm ícone próprio (svgIcons), no estilo do Roblox Studio. */
var icons$1 = {
	IntValue: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconHash, { size: 14 }),
	NumberValue: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconHash, { size: 14 }),
	StringValue: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconType, { size: 14 }),
	BoolValue: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCheckSquare, { size: 14 }),
	PointLight: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconLightbulb, { size: 14 }),
	ScreenGui: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconMonitor, { size: 14 }),
	Frame: "▭",
	TextLabel: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconType, { size: 14 }),
	TextButton: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, { size: 14 }),
	ImageLabel: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconImage, { size: 14 }),
	ImageButton: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconImage, { size: 14 }),
	UICorner: "◜",
	UnionOperation: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPuzzle, { size: 14 }),
	NegateOperation: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconMinus, { size: 14 })
};
var page = (accent, mark) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M3.5 1.5h6l3 3v10h-9z",
		fill: "#e9eef7",
		stroke: "#8fa3c2"
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M9.5 1.5v3h3",
		fill: "none",
		stroke: "#8fa3c2"
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "5",
		y: "7",
		width: "5",
		height: "1",
		fill: accent
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "5",
		y: "9",
		width: "4",
		height: "1",
		fill: accent
	}),
	mark
] });
var svgIcons = {
	Part: (c = "#a3a2a5") => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 1.8 14 5v6.2L8 14.4 2 11.2V5z",
			fill: c
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 8.2 14 5M8 8.2 2 5M8 8.2v6.2",
			stroke: "#00000055",
			fill: "none"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 1.8 14 5 8 8.2 2 5z",
			fill: "#ffffff45"
		})
	] }),
	SpawnLocation: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "1.5",
			y: "10",
			width: "13",
			height: "3.5",
			rx: "1",
			fill: "#7c8696"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M5 10V2.5",
			stroke: "#d9dee7",
			strokeWidth: "1.3"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M5.6 2.5h6l-1.6 2 1.6 2h-6z",
			fill: "#3fbf7f"
		})
	] }),
	Model: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M5 2.2 9 4.3v4L5 10.4 1 8.3v-4z",
			fill: "#8fb6e8"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M11 5.6 15 7.7v4L11 13.8 7 11.7v-4z",
			fill: "#5b8fd6"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M5 2.2 9 4.3 5 6.4 1 4.3z",
			fill: "#ffffff55"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M11 5.6l4 2.1-4 2.1-4-2.1z",
			fill: "#ffffff40"
		})
	] }),
	Folder: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M1.5 4V13h13V5.5H8L6.5 3.5h-5z",
		fill: "#e8b84a"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M1.5 6h13v7h-13z",
		fill: "#f5cd64"
	})] }),
	Script: () => page("#4a8de0", null),
	LocalScript: () => page("#36b37e", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "11.5",
		cy: "12",
		r: "2.6",
		fill: "#36b37e",
		stroke: "#fff",
		strokeWidth: ".8"
	})),
	ModuleScript: () => page("#9b6de5", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "9.2",
		y: "9.7",
		width: "4.6",
		height: "4.6",
		rx: "1",
		fill: "#9b6de5",
		stroke: "#fff",
		strokeWidth: ".8"
	})),
	Workspace: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "8",
		cy: "8",
		r: "6.3",
		fill: "#3d8bfd"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M1.8 8h12.4M8 1.7c-2.6 3.4-2.6 9.2 0 12.6M8 1.7c2.6 3.4 2.6 9.2 0 12.6",
		stroke: "#cfe3ff",
		fill: "none",
		strokeWidth: ".9"
	})] }),
	Players: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "5.6",
			cy: "5.2",
			r: "2.4",
			fill: "#f0b37e"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M1.5 13c.3-3 1.8-4.6 4.1-4.6S9.4 10 9.7 13z",
			fill: "#4a8de0"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "11",
			cy: "5.8",
			r: "2",
			fill: "#e09a63"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8.5 13c.3-2.5 1.2-3.8 2.5-3.8s2.8 1.3 3.1 3.8z",
			fill: "#36b37e"
		})
	] }),
	Lighting: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 1.6a4.4 4.4 0 0 0-2.6 8l.4 1.7h4.4l.4-1.7A4.4 4.4 0 0 0 8 1.6z",
			fill: "#ffd34d"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "5.9",
			y: "12",
			width: "4.2",
			height: "1.4",
			rx: ".5",
			fill: "#9aa4b2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "6.5",
			y: "13.8",
			width: "3",
			height: "1",
			rx: ".4",
			fill: "#9aa4b2"
		})
	] }),
	ReplicatedStorage: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M2 5.5 8 2.5l6 3v6l-6 3-6-3z",
			fill: "#c98b4a"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M2 5.5 8 8.5l6-3M8 8.5v6",
			stroke: "#8a5a2b",
			fill: "none"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M10.5 1.2h3.3v3.3M13.8 1.2l-3 3",
			stroke: "#3d8bfd",
			strokeWidth: "1.2",
			fill: "none"
		})
	] }),
	ServerScriptService: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "8",
			cy: "8",
			r: "3.2",
			fill: "none",
			stroke: "#4a8de0",
			strokeWidth: "2.4",
			strokeDasharray: "2.2 1.6"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "8",
			cy: "8",
			r: "5.6",
			fill: "none",
			stroke: "#4a8de0",
			strokeWidth: "1.6"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "8",
			cy: "8",
			r: "1.4",
			fill: "#4a8de0"
		})
	] }),
	ServerStorage: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "2",
			y: "2",
			width: "12",
			height: "3.6",
			rx: "1",
			fill: "#7c8696"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "2",
			y: "6.2",
			width: "12",
			height: "3.6",
			rx: "1",
			fill: "#6b7586"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "2",
			y: "10.4",
			width: "12",
			height: "3.6",
			rx: "1",
			fill: "#5b6576"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "11.6",
			cy: "3.8",
			r: ".8",
			fill: "#3fbf7f"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "11.6",
			cy: "8",
			r: ".8",
			fill: "#3fbf7f"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "11.6",
			cy: "12.2",
			r: ".8",
			fill: "#3fbf7f"
		})
	] }),
	IntValue: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "1.5",
		y: "3.5",
		width: "13",
		height: "9",
		rx: "2",
		fill: "#3d8bfd"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
		x: "8",
		y: "10.6",
		textAnchor: "middle",
		fontSize: "6.4",
		fontWeight: "700",
		fill: "#fff",
		fontFamily: "system-ui,sans-serif",
		children: "123"
	})] }),
	NumberValue: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "1.5",
		y: "3.5",
		width: "13",
		height: "9",
		rx: "2",
		fill: "#2d6fd6"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
		x: "8",
		y: "10.6",
		textAnchor: "middle",
		fontSize: "6.4",
		fontWeight: "700",
		fill: "#fff",
		fontFamily: "system-ui,sans-serif",
		children: "1.5"
	})] }),
	StringValue: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "1.5",
		y: "3.5",
		width: "13",
		height: "9",
		rx: "2",
		fill: "#36b37e"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
		x: "8",
		y: "10.8",
		textAnchor: "middle",
		fontSize: "7",
		fontWeight: "700",
		fill: "#fff",
		fontFamily: "system-ui,sans-serif",
		children: "Ab"
	})] }),
	BoolValue: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "2",
		y: "2",
		width: "12",
		height: "12",
		rx: "2.5",
		fill: "#9b6de5"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "m4.8 8.2 2.2 2.2 4.4-4.6",
		stroke: "#fff",
		strokeWidth: "1.8",
		fill: "none",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})] }),
	PointLight: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "8",
		cy: "8",
		r: "3.4",
		fill: "#ffd34d"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
		stroke: "#ffd34d",
		strokeWidth: "1.3",
		strokeLinecap: "round",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 1.2v1.8M8 13v1.8M1.2 8H3M13 8h1.8M3.2 3.2l1.3 1.3M11.5 11.5l1.3 1.3M3.2 12.8l1.3-1.3M11.5 4.5l1.3-1.3" })
	})] }),
	ClickDetector: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M6 2.2v7.6l1.9-1.6 1.5 3.6 1.6-.7-1.5-3.5 2.6-.2z",
		fill: "#fff",
		stroke: "#1b2a35",
		strokeWidth: ".9",
		strokeLinejoin: "round"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "6",
		cy: "2.6",
		r: "2",
		fill: "none",
		stroke: "#3d8bfd",
		strokeWidth: ".9"
	})] }),
	StarterPlayer: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "8",
		cy: "4.6",
		r: "2.6",
		fill: "#f0b37e"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M3 14c.4-3.6 2.2-5.4 5-5.4s4.6 1.8 5 5.4z",
		fill: "#3fbf7f"
	})] }),
	ScreenGui: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "1.5",
			y: "2.5",
			width: "13",
			height: "9",
			rx: "1.2",
			fill: "#1b2a35",
			stroke: "#8fa3c2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3",
			y: "4",
			width: "10",
			height: "6",
			fill: "#4a8de0"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M6 14h4M8 11.5V14",
			stroke: "#8fa3c2",
			strokeWidth: "1.2"
		})
	] }),
	Frame: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "2",
		y: "3",
		width: "12",
		height: "10",
		rx: "1",
		fill: "#e9eef7",
		stroke: "#4a8de0",
		strokeWidth: "1.4"
	}) }),
	TextLabel: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "1.5",
		y: "3",
		width: "13",
		height: "10",
		rx: "1",
		fill: "#e9eef7",
		stroke: "#8fa3c2"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M5 5.5h6M8 5.5v5.5",
		stroke: "#1b2a35",
		strokeWidth: "1.6",
		strokeLinecap: "round"
	})] }),
	TextButton: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "1.5",
			y: "4",
			width: "13",
			height: "8",
			rx: "3",
			fill: "#36b37e"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M5.5 6.3h5M8 6.3v3.8",
			stroke: "#fff",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M10.8 9.6v5l1.3-1.1 1 2.3 1-.4-1-2.2 1.7-.1z",
			fill: "#fff",
			stroke: "#1b2a35",
			strokeWidth: ".6"
		})
	] }),
	ImageLabel: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "1.5",
			y: "2.5",
			width: "13",
			height: "11",
			rx: "1",
			fill: "#e9eef7",
			stroke: "#8fa3c2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "5.5",
			cy: "6",
			r: "1.4",
			fill: "#ffd34d"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M2.5 12.5 6.5 8.5l2.5 2.5 2-2 3 3.5z",
			fill: "#3fbf7f"
		})
	] }),
	ImageButton: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "1.5",
			y: "2.5",
			width: "13",
			height: "11",
			rx: "3",
			fill: "#4a8de0"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "5.5",
			cy: "6",
			r: "1.4",
			fill: "#ffd34d"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M2.8 12.2 6.5 8.5l2.5 2.5 2-2 2.6 3.2z",
			fill: "#a8e6c1"
		})
	] }),
	UICorner: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M2.5 13.5V8a5.5 5.5 0 0 1 5.5-5.5h5.5",
		fill: "none",
		stroke: "#4a8de0",
		strokeWidth: "2.2",
		strokeLinecap: "round"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "8",
		cy: "8",
		r: "1.3",
		fill: "#9b6de5"
	})] }),
	UIStroke: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "2.2",
		y: "2.2",
		width: "11.6",
		height: "11.6",
		rx: "2.5",
		fill: "#e9eef7",
		stroke: "#ff8a3d",
		strokeWidth: "2.4"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "5",
		y: "5",
		width: "6",
		height: "6",
		rx: "1",
		fill: "#c9d6ea"
	})] }),
	UIGradient: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
		id: "lxg",
		x1: "0",
		x2: "1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
				offset: "0",
				stopColor: "#ff5fa2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
				offset: ".5",
				stopColor: "#9b6de5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
				offset: "1",
				stopColor: "#3d8bfd"
			})
		]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "1.5",
		y: "3",
		width: "13",
		height: "10",
		rx: "2",
		fill: "url(#lxg)"
	})] }),
	UIListLayout: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "2",
			y: "2",
			width: "12",
			height: "3.2",
			rx: "1",
			fill: "#4a8de0"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "2",
			y: "6.4",
			width: "12",
			height: "3.2",
			rx: "1",
			fill: "#6ea4ec"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "2",
			y: "10.8",
			width: "12",
			height: "3.2",
			rx: "1",
			fill: "#9cc2f4"
		})
	] }),
	UnionOperation: (c = "#a3a2a5") => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M2 6.5h5.5V2H14v7.5H8.5V14H2z",
		fill: c,
		stroke: "#00000066",
		strokeWidth: ".8"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M2 6.5h5.5V2H14v1.6H9.1v4.5H2z",
		fill: "#ffffff40"
	})] }),
	NegateOperation: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "2",
		y: "2",
		width: "12",
		height: "12",
		rx: "1.5",
		fill: "#ff4d6d55",
		stroke: "#ff4d6d",
		strokeWidth: "1.3",
		strokeDasharray: "2 1.3"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M5 8h6",
		stroke: "#ff4d6d",
		strokeWidth: "2",
		strokeLinecap: "round"
	})] }),
	"tool:Unir": () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "1.5",
			y: "5",
			width: "8",
			height: "8",
			rx: "1",
			fill: "#5aa9ff"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "10.5",
			cy: "6",
			r: "4.3",
			fill: "#5aa9ff"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M1.5 5h4.6a4.3 4.3 0 0 1 .3-1",
			stroke: "none"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "10.5",
			cy: "6",
			r: "4.3",
			fill: "none",
			stroke: "#ffffff70",
			strokeWidth: ".8",
			strokeDasharray: "1.5 1.2"
		})
	] }),
	"tool:Negar": () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: "1.5",
		y: "5",
		width: "8",
		height: "8",
		rx: "1",
		fill: "#5aa9ff"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "10.5",
		cy: "6",
		r: "4.3",
		fill: "#ff4d6d66",
		stroke: "#ff4d6d",
		strokeWidth: "1.1",
		strokeDasharray: "1.8 1.1"
	})] }),
	"tool:Separar": () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "1",
			y: "6.5",
			width: "7",
			height: "7",
			rx: "1",
			fill: "#5aa9ff"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "11.5",
			cy: "4.5",
			r: "3.5",
			fill: "#5aa9ff"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8.5 9.5 10.5 7.5",
			stroke: "#e8fb77",
			strokeWidth: "1.4",
			strokeLinecap: "round"
		})
	] }),
	StarterGui: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "1.5",
			y: "2.5",
			width: "13",
			height: "11",
			rx: "1.5",
			fill: "#e9eef7",
			stroke: "#8fa3c2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "1.5",
			y: "2.5",
			width: "13",
			height: "2.6",
			rx: "1",
			fill: "#4a8de0"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "4",
			y: "7.5",
			width: "8",
			height: "3.5",
			rx: "1",
			fill: "#36b37e"
		})
	] })
};
/** Ícone de uma classe do Roblox (também usado pelo Studio Lite). */
function ClassIcon({ cls, color, size = 16 }) {
	if (robloxIconClasses.has(cls)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "roblox-class-icon",
		style: {
			width: size,
			height: size
		},
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			className: "rci-dark",
			src: "./studio/icons/Dark/" + cls + ".png",
			alt: "",
			width: size,
			height: size
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			className: "rci-light",
			src: "./studio/icons/Light/" + cls + ".png",
			alt: "",
			width: size,
			height: size
		})]
	});
	const draw = svgIcons[cls];
	if (draw) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "lx-svg",
		viewBox: "0 0 16 16",
		width: size,
		height: size,
		"aria-hidden": "true",
		children: draw(color)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
		className: "lx-icon",
		"aria-hidden": "true",
		children: icons$1[cls] || (cls === "ClickDetector" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPointer, { size: 14 }) : "◆")
	});
}
//#endregion
//#region components/LuaEditor.tsx
var icons = {
	function: "ƒ",
	method: "ƒ",
	keyword: "K",
	snippet: "{}",
	variable: "x",
	service: "S",
	property: "•",
	event: "ϟ"
};
var ruler = null;
/** Posição do cursor em pixels, usando a largura de um caractere da fonte monoespaçada. */
function caretPoint(input, caret) {
	const style = getComputedStyle(input), before = input.value.slice(0, caret), row = before.split("\n").length - 1, col = before.length - before.lastIndexOf("\n") - 1;
	ruler ??= document.createElement("canvas").getContext("2d");
	if (ruler) ruler.font = style.font;
	const width = ruler?.measureText("M").width || 8.4, height = parseFloat(style.lineHeight) || 24;
	return {
		x: parseFloat(style.paddingLeft) + col * width - input.scrollLeft,
		y: parseFloat(style.paddingTop) + row * height - input.scrollTop,
		height
	};
}
function LuaEditor({ code, onChange, scene }) {
	const paint = (0, import_react.useRef)(null), numbers = (0, import_react.useRef)(null), field = (0, import_react.useRef)(null), closer = (0, import_react.useRef)(-1), caretTo = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		const p = caretTo.current, input = field.current;
		if (!p || !input) return;
		caretTo.current = null;
		input.setSelectionRange(p.at, p.at);
		p.then?.();
	});
	const [open, setOpen] = (0, import_react.useState)(null);
	const hist = (0, import_react.useRef)({
		past: [],
		future: [],
		skip: null,
		prev: code,
		t: 0
	});
	(0, import_react.useLayoutEffect)(() => {
		const h = hist.current;
		if (code === h.prev) return;
		if (code === h.skip) {
			h.skip = null;
			h.prev = code;
			return;
		}
		if (document.activeElement !== field.current) {
			h.past = [];
			h.future = [];
			h.prev = code;
			return;
		}
		let at = 0;
		while (at < code.length && code[at] === h.prev[at]) at++;
		const now = Date.now();
		if (now - h.t > 700 || !h.past.length) {
			h.past.push({
				code: h.prev,
				caret: at
			});
			if (h.past.length > 200) h.past.shift();
		}
		h.future = [];
		h.prev = code;
		h.t = now;
	}, [code]);
	function refresh(input, value) {
		const caret = input.selectionStart;
		if (caret !== input.selectionEnd) return setOpen(null);
		const { items, replace } = suggest(value, caret, scene);
		if (!items.length) return setOpen(null);
		const p = caretPoint(input, caret), area = input.parentElement.getBoundingClientRect(), panel = Math.min(items.length, 5) * 30 + 58;
		const above = p.y + p.height + panel > area.height && p.y > panel;
		setOpen({
			items,
			replace,
			index: 0,
			above,
			top: above ? p.y - 4 : p.y + p.height + 2,
			left: Math.max(6, Math.min(caretPoint(input, caret - replace).x, area.width - 266))
		});
	}
	function accept(s) {
		const input = field.current;
		if (!input || !open) return;
		const caret = input.selectionStart, start = caret - open.replace, indent = code.slice(code.lastIndexOf("\n", start - 1) + 1).match(/^[\t ]*/)?.[0] || "";
		const text = s.insert.replace(/\t/g, "    ").replace(/\n/g, "\n" + indent), mark = text.indexOf("$0"), clean = text.replace("$0", "");
		const next = code.slice(0, start) + clean + code.slice(caret), to = start + (mark < 0 ? clean.length : mark);
		closer.current = mark >= 0 && clean[mark] === ")" ? next.length - to : -1;
		onChange(next);
		setOpen(null);
		input.focus();
		caretTo.current = {
			at: to,
			then: clean.endsWith(".") ? () => refresh(input, next) : void 0
		};
	}
	function keyDown(e) {
		const mod = e.ctrlKey || e.metaKey, k = e.key.toLowerCase();
		if (mod && !e.altKey && (k === "z" || k === "y")) {
			e.preventDefault();
			e.stopPropagation();
			const redo = k === "y" || e.shiftKey;
			const h = hist.current;
			const from = redo ? h.future : h.past, to = redo ? h.past : h.future;
			const step = from.pop();
			if (!step) return;
			to.push({
				code,
				caret: e.currentTarget.selectionStart
			});
			h.skip = step.code;
			h.t = 0;
			caretTo.current = { at: step.caret };
			setOpen(null);
			onChange(step.code);
			return;
		}
		if (e.nativeEvent.isComposing || e.ctrlKey || e.metaKey || e.altKey) return;
		const input = e.currentTarget, start = input.selectionStart, end = input.selectionEnd;
		if (open) {
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				e.preventDefault();
				const step = e.key === "ArrowDown" ? 1 : -1;
				return setOpen({
					...open,
					index: (open.index + step + open.items.length) % open.items.length
				});
			}
			if (e.key === "Enter" || e.key === "Tab") {
				e.preventDefault();
				return accept(open.items[open.index]);
			}
			if (e.key === "Escape") {
				e.preventDefault();
				return setOpen(null);
			}
			if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Home" || e.key === "End") setOpen(null);
		}
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			const edit = enterLua(code, start, end);
			caretTo.current = { at: edit.caret };
			onChange(edit.code);
		}
		if (e.key === "Tab" && !e.shiftKey) {
			e.preventDefault();
			const text = "    ";
			caretTo.current = { at: start + 4 };
			onChange(code.slice(0, start) + text + code.slice(end));
		}
	}
	function change(e) {
		const input = e.currentTarget, type = e.nativeEvent.inputType || "";
		let value = input.value;
		const c = input.selectionStart;
		if (closer.current >= 0 && (e.nativeEvent.data || "").endsWith(")") && value[c] === ")" && value.length - c === closer.current) {
			value = value.slice(0, c - 1) + value.slice(c);
			closer.current = -1;
			caretTo.current = { at: c };
			onChange(value);
			return setOpen(null);
		}
		onChange(value);
		if (/^insert(Text|CompositionText|ReplacementText)?$/.test(type) || type === "") refresh(input, value);
		else setOpen(null);
	}
	const current = open?.items[open.index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lua-editor",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lua-lines",
			ref: numbers,
			"aria-hidden": "true",
			children: code.split("\n").map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: i + 1 }, i))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lua-edit-area",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "lua-paint",
					ref: paint,
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", { children: [tokenizeLua(code).map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "lua-" + t.kind,
						children: t.text
					}, i)), "\n"] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					ref: field,
					id: "code-editor",
					"aria-label": "Código Lua",
					"aria-autocomplete": "list",
					"aria-expanded": !!open,
					"aria-controls": "lua-suggestions",
					value: code,
					onKeyDown: keyDown,
					onChange: change,
					onBlur: () => setOpen(null),
					onClick: () => setOpen(null),
					spellCheck: false,
					autoCapitalize: "off",
					autoCorrect: "off",
					autoComplete: "off",
					wrap: "off",
					maxLength: 12e3,
					onScroll: (e) => {
						setOpen(null);
						if (paint.current) {
							paint.current.scrollTop = e.currentTarget.scrollTop;
							paint.current.scrollLeft = e.currentTarget.scrollLeft;
						}
						if (numbers.current) numbers.current.scrollTop = e.currentTarget.scrollTop;
					}
				}),
				open && current && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: "lua-suggestions",
					className: "lua-suggest" + (open.above ? " above" : ""),
					style: {
						top: open.top,
						left: open.left
					},
					role: "listbox",
					"aria-label": "Sugestões",
					onMouseDown: (e) => e.preventDefault(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: open.items.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						role: "option",
						"aria-selected": i === open.index,
						className: i === open.index ? "on" : "",
						onPointerDown: (e) => e.preventDefault(),
						onClick: () => accept(s),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								className: "k-" + s.kind,
								children: s.cls ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassIcon, { cls: s.cls }) : s.kind === "event" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassIcon, { cls: "Event" }) : icons[s.kind]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.label }),
							s.kind === "event" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								className: "lua-event-label",
								children: "Evento"
							})
						]
					}, s.kind + s.label)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [current.detail, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Enter ou Tab para usar · toque para escolher" })] })]
				})
			]
		})]
	});
}
//#endregion
//#region components/studio/GuiLayer.tsx
/** Interface (GUI) do jogo desenhada por cima da cena 3D: ScreenGui, Frame, TextLabel, TextButton, ImageLabel, ImageButton, UICorner, UIStroke, UIGradient e UIListLayout.
*  Editar: clique seleciona; arrastar move; as alças nos cantos e lados mudam o tamanho. Tudo em escala (fica igual em
*  qualquer tela), com guias que encaixam no centro e nas bordas da tela e dos outros elementos, como no Roblox Studio.
*  Jogar: botões disparam MouseButton1Click/Activated nos scripts. */
/** Imagem enviada pelo aluno (/api/media/…): carrega uma vez (com login ou pelo endereço público do jogo aprovado). */
function MediaImg({ id, style }) {
	const [loaded, setLoaded] = (0, import_react.useState)(null);
	const url = loaded?.id === id ? loaded.url : null;
	(0, import_react.useEffect)(() => {
		let alive = true, release = () => {};
		(isPublicGameMedia() ? acquirePublicImage(id) : loadPrivateImage("/media/" + id).then((url) => ({
			url,
			release: () => {}
		}))).then((lease) => {
			release = lease.release;
			if (alive) setLoaded({
				id,
				url: lease.url
			});
			else release();
		});
		return () => {
			alive = false;
			release();
		};
	}, [id]);
	return url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: url,
		alt: "",
		draggable: false,
		style
	}) : null;
}
var EMPTY_NODES = [];
var ELEMENTS = new Set([
	"Frame",
	"TextLabel",
	"TextButton",
	"ImageLabel",
	"ImageButton"
]);
var FONT_CSS = {
	SourceSans: "'Source Sans 3','Source Sans Pro',system-ui,sans-serif",
	Gotham: "'Montserrat',system-ui,sans-serif",
	FredokaOne: "'Fredoka',system-ui,sans-serif",
	LuckiestGuy: "'Luckiest Guy',system-ui,sans-serif",
	Bangers: "'Bangers',system-ui,sans-serif",
	Roboto: "'Roboto',system-ui,sans-serif",
	Oswald: "'Oswald',system-ui,sans-serif",
	Arial: "Arial,Helvetica,sans-serif"
};
var fontsLoaded = false;
function loadFonts() {
	if (fontsLoaded || typeof document === "undefined") return;
	fontsLoaded = true;
	const l = document.createElement("link");
	l.rel = "stylesheet";
	l.href = "https://fonts.googleapis.com/css2?family=Fredoka:wght@600&family=Luckiest+Guy&family=Bangers&family=Roboto:wght@400;700&family=Oswald:wght@500&family=Montserrat:wght@600&family=Source+Sans+3:wght@400;600&display=swap";
	document.head.appendChild(l);
}
/** Imagem: link da web (http/https) ou arquivo do aparelho (data:). "rbxassetid://" só existe dentro do Roblox. */
var imageSrc = (v) => typeof v === "string" && /^(https?:|data:image\/)/i.test(v.trim()) ? v.trim() : null;
var rgb = (c, a = 1) => Array.isArray(c) ? `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})` : `rgba(255,255,255,${a})`;
/** Canto do UICorner como no Roblox: círculo com raio = escala × o lado MENOR + pixels (no navegador, % deixaria o canto oval). */
var cqLen = (s, o, axis) => `(${(Number(s) || 0) * 100}${axis} + ${Number(o) || 0}px)`;
var cornerCss = (c, size) => `calc(${Number(c[0]) || 0} * min(${cqLen(size[0], size[1], "cqw")}, ${cqLen(size[2], size[3], "cqh")}) + ${Number(c[1]) || 0}px)`;
var ud = (s, o) => `calc(${(Number(s) || 0) * 100}% + ${Number(o) || 0}px)`;
var r3$1 = (n) => Math.round(n * 1e3) / 1e3;
var on = (n) => n && n.props.Enabled !== false ? n : void 0;
/** UIListLayout: os filhos ficam em fila (vertical ou horizontal), na ordem do LayoutOrder. */
function listStyle(l) {
	const p = l.props, vert = p.FillDirection !== "Horizontal";
	const h = p.HorizontalAlignment === "Left" ? "flex-start" : p.HorizontalAlignment === "Right" ? "flex-end" : "center", v = p.VerticalAlignment === "Bottom" ? "flex-end" : p.VerticalAlignment === "Center" ? "center" : "flex-start";
	const pad = p.Padding ?? [0, 0];
	return {
		position: "absolute",
		inset: 0,
		display: "flex",
		flexDirection: vert ? "column" : "row",
		gap: ud(pad[0], pad[1]),
		alignItems: vert ? h : v,
		justifyContent: vert ? v : h,
		pointerEvents: "none"
	};
}
/** Cor do degradê multiplicada pela cor do fundo (como no Roblox). */
function gradientCss(g, bg, alpha) {
	const base = Array.isArray(bg) ? bg : [
		255,
		255,
		255
	];
	const stops = (Array.isArray(g.props.Color) ? g.props.Color : [[
		0,
		255,
		255,
		255
	], [
		1,
		0,
		0,
		0
	]]).map((k) => `rgba(${Math.round(k[1] * base[0] / 255)},${Math.round(k[2] * base[1] / 255)},${Math.round(k[3] * base[2] / 255)},${alpha}) ${Math.round(k[0] * 100)}%`);
	return `linear-gradient(${90 + (Number(g.props.Rotation) || 0)}deg,${stops.join(",")})`;
}
var HANDLES = [
	"nw",
	"n",
	"ne",
	"e",
	"se",
	"s",
	"sw",
	"w"
];
var SNAP = 6;
function GuiLayer({ nodes, root = "StarterGui", selected = [], editing, onSelect, onChange, onPress, place }) {
	(0, import_react.useEffect)(() => {
		if (nodes.some((n) => n.props.Font && n.props.Font !== "Arial")) loadFonts();
	}, [nodes]);
	const drag = (0, import_react.useRef)(null);
	const layer = (0, import_react.useRef)(null);
	const [preview, setPreview] = (0, import_react.useState)(null), [guides, setGuides] = (0, import_react.useState)([]);
	const children = (0, import_react.useMemo)(() => {
		const index = /* @__PURE__ */ new Map();
		for (const n of nodes) {
			const parent = n.parent;
			if (parent === null) continue;
			let list = index.get(parent);
			if (!list) {
				list = [];
				index.set(parent, list);
			}
			list.push(n);
		}
		return index;
	}, [nodes]);
	const kids = (id) => children.get(id) ?? EMPTY_NODES;
	const screens = kids(root).filter((n) => n.cls === "ScreenGui" && n.props.Enabled !== false);
	const worlds = place ? nodes.filter((n) => (n.cls === "BillboardGui" || n.cls === "SurfaceGui") && n.props.Enabled !== false) : [];
	const worldEls = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const worldsRef = (0, import_react.useRef)(worlds);
	worldsRef.current = worlds;
	const placeRef = (0, import_react.useRef)(place);
	placeRef.current = place;
	const hasWorlds = worlds.length > 0;
	(0, import_react.useEffect)(() => {
		if (!hasWorlds) return;
		let raf = 0;
		const step = () => {
			for (const n of worldsRef.current) {
				const el = worldEls.current.get(n.id);
				if (!el) continue;
				const p = placeRef.current?.(n);
				if (!p || !p.visible) {
					el.style.display = "none";
					continue;
				}
				el.style.display = "";
				el.style.zIndex = String(Math.max(1, 1e4 - Math.round(p.z * 10)));
				if (p.kind === "billboard") {
					el.style.width = p.w + "px";
					el.style.height = p.h + "px";
					el.style.transform = "translate(" + (p.x - p.w / 2) + "px," + (p.y - p.h / 2) + "px)";
				} else {
					el.style.width = p.w + "px";
					el.style.height = p.h + "px";
					el.style.transform = p.matrix;
				}
			}
			raf = requestAnimationFrame(step);
		};
		raf = requestAnimationFrame(step);
		return () => cancelAnimationFrame(raf);
	}, [hasWorlds]);
	if (!screens.length && !worlds.length) return null;
	function begin(e, n, h, box) {
		e.stopPropagation();
		if (e.pointerType === "mouse" && e.button !== 0) return;
		const parentEl = box.parentElement;
		const parent = parentEl.getBoundingClientRect();
		const lay = layer.current.getBoundingClientRect();
		const others = [...parentEl.children].filter((c) => c !== box && c.classList.contains("gl-el")).map((c) => c.getBoundingClientRect());
		drag.current = {
			id: n.id,
			h,
			x: e.clientX,
			y: e.clientY,
			pos: [...n.props.Position ?? [
				0,
				0,
				0,
				0
			]],
			size: [...n.props.Size ?? [
				0,
				100,
				0,
				100
			]],
			anchor: n.props.AnchorPoint ?? [0, 0],
			W: Math.max(1, parent.width),
			H: Math.max(1, parent.height),
			parent,
			layer: lay,
			others,
			moved: false
		};
		try {
			e.target.setPointerCapture(e.pointerId);
		} catch {}
	}
	function move(e) {
		const d = drag.current;
		if (!d) return;
		e.stopPropagation();
		const dx = e.clientX - d.x, dy = e.clientY - d.y;
		if (!d.moved && Math.abs(dx) + Math.abs(dy) < 3) return;
		d.moved = true;
		const { W, H, pos, size, anchor } = d;
		let w = size[0] * W + size[1], h = size[2] * H + size[3];
		let left = pos[0] * W + pos[1] - anchor[0] * w, top = pos[2] * H + pos[3] - anchor[1] * h;
		let L = left, T = top, R = left + w, B = top + h;
		if (d.h === "move") {
			L += dx;
			R += dx;
			T += dy;
			B += dy;
		}
		if (d.h.includes("w")) L = Math.min(R - 8, L + dx);
		if (d.h.includes("e")) R = Math.max(L + 8, R + dx);
		if (d.h.includes("n")) T = Math.min(B - 8, T + dy);
		if (d.h.includes("s")) B = Math.max(T + 8, B + dy);
		const xs = [
			{ v: 0 },
			{
				v: W / 2,
				label: "Centro"
			},
			{ v: W }
		], ys = [
			{ v: 0 },
			{
				v: H / 2,
				label: "Centro"
			},
			{ v: H }
		];
		for (const o of d.others) {
			const ol = o.left - d.parent.left, ot = o.top - d.parent.top;
			xs.push({ v: ol }, { v: ol + o.width / 2 }, { v: ol + o.width });
			ys.push({ v: ot }, { v: ot + o.height / 2 }, { v: ot + o.height });
		}
		const g = [];
		const snap = (vals, targets) => {
			let best = null;
			for (const v of vals) for (const t of targets) {
				const dd = t.v - v;
				if (Math.abs(dd) <= SNAP && (!best || Math.abs(dd) < Math.abs(best.d))) best = {
					d: dd,
					t
				};
			}
			return best;
		};
		if (d.h === "move") {
			const sx = snap([
				L,
				(L + R) / 2,
				R
			], xs);
			if (sx) {
				L += sx.d;
				R += sx.d;
				g.push({
					x: sx.t.v,
					label: sx.t.label
				});
			}
			const sy = snap([
				T,
				(T + B) / 2,
				B
			], ys);
			if (sy) {
				T += sy.d;
				B += sy.d;
				g.push({
					y: sy.t.v,
					label: sy.t.label
				});
			}
		} else {
			if (d.h.includes("w")) {
				const s = snap([L], xs);
				if (s) {
					L += s.d;
					g.push({ x: s.t.v });
				}
			}
			if (d.h.includes("e")) {
				const s = snap([R], xs);
				if (s) {
					R += s.d;
					g.push({ x: s.t.v });
				}
			}
			if (d.h.includes("n")) {
				const s = snap([T], ys);
				if (s) {
					T += s.d;
					g.push({ y: s.t.v });
				}
			}
			if (d.h.includes("s")) {
				const s = snap([B], ys);
				if (s) {
					B += s.d;
					g.push({ y: s.t.v });
				}
			}
		}
		let Size, Position;
		if (d.h === "move") {
			const sx = L - left, sy = T - top;
			Size = [...size];
			Position = [
				pos[0] === 0 && pos[1] !== 0 ? 0 : r3$1(pos[0] + sx / W),
				pos[0] === 0 && pos[1] !== 0 ? Math.round(pos[1] + sx) : pos[1],
				pos[2] === 0 && pos[3] !== 0 ? 0 : r3$1(pos[2] + sy / H),
				pos[2] === 0 && pos[3] !== 0 ? Math.round(pos[3] + sy) : pos[3]
			];
		} else {
			const nw = R - L, nh = B - T;
			Size = [
				r3$1((nw - size[1]) / W),
				size[1],
				r3$1((nh - size[3]) / H),
				size[3]
			];
			Position = [
				r3$1((L + anchor[0] * nw - pos[1]) / W),
				pos[1],
				r3$1((T + anchor[1] * nh - pos[3]) / H),
				pos[3]
			];
		}
		d.last = {
			Position,
			Size
		};
		setPreview({
			id: d.id,
			Position,
			Size
		});
		const ox = d.parent.left - d.layer.left, oy = d.parent.top - d.layer.top;
		setGuides(g.map((x) => ({
			x: x.x !== void 0 ? x.x + ox : void 0,
			y: x.y !== void 0 ? x.y + oy : void 0,
			label: x.label
		})));
	}
	function end(e) {
		const d = drag.current;
		if (!d) return;
		e.stopPropagation();
		drag.current = null;
		if (d.moved && d.last) onChange?.(d.id, d.last);
		setPreview(null);
		setGuides([]);
	}
	function inside(id) {
		const list = kids(id).filter((c) => ELEMENTS.has(c.cls));
		const lay = kids(id).find((c) => c.cls === "UIListLayout");
		if (!lay) return list.map((c) => el(c));
		const sorted = [...list].sort((a, b) => (Number(a.props.LayoutOrder) || 0) - (Number(b.props.LayoutOrder) || 0) || (lay.props.SortOrder === "Name" ? a.name.localeCompare(b.name) : 0));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "gl-list",
			style: listStyle(lay),
			children: sorted.map((c) => el(c, true))
		});
	}
	function el(n, listed = false) {
		const p = n.props;
		if (p.Visible === false) return null;
		const stroke = on(kids(n.id).find((c) => c.cls === "UIStroke")), grad = on(kids(n.id).find((c) => c.cls === "UIGradient"));
		const corner = kids(n.id).find((c) => c.cls === "UICorner")?.props.CornerRadius;
		const pv = preview && preview.id === n.id ? preview : null;
		const pos = pv?.Position ?? p.Position ?? [
			0,
			0,
			0,
			0
		], size = pv?.Size ?? p.Size ?? [
			0,
			100,
			0,
			100
		], anchor = p.AnchorPoint ?? [0, 0];
		const st = {
			left: ud(pos[0], pos[1]),
			top: ud(pos[2], pos[3]),
			width: ud(size[0], size[1]),
			height: ud(size[2], size[3]),
			transform: `translate(${-(anchor[0] || 0) * 100}%,${-(anchor[1] || 0) * 100}%) rotate(${Number(p.Rotation) || 0}deg)`,
			zIndex: Number(p.ZIndex) || 1,
			background: rgb(p.BackgroundColor3, 1 - (Number(p.BackgroundTransparency) || 0)),
			border: Number(p.BorderSizePixel) > 0 ? `${Number(p.BorderSizePixel)}px solid #1b2a35` : void 0,
			borderRadius: corner ? cornerCss(corner, size) : void 0,
			overflow: p.ClipsDescendants === true ? "hidden" : "visible"
		};
		if (listed) {
			st.position = "relative";
			st.left = st.top = void 0;
			st.flex = "none";
			st.transform = `rotate(${Number(p.Rotation) || 0}deg)`;
			st.pointerEvents = "auto";
		}
		if (grad) st.background = gradientCss(grad, p.BackgroundColor3, 1 - (Number(p.BackgroundTransparency) || 0));
		const text = n.cls === "TextLabel" || n.cls === "TextButton", img = n.cls === "ImageLabel" || n.cls === "ImageButton", button = n.cls === "TextButton" || n.cls === "ImageButton";
		if (text) Object.assign(st, {
			color: rgb(p.TextColor3),
			fontFamily: FONT_CSS[p.Font] ?? FONT_CSS.SourceSans,
			justifyContent: p.TextXAlignment === "Left" ? "flex-start" : p.TextXAlignment === "Right" ? "flex-end" : "center",
			alignItems: p.TextYAlignment === "Top" ? "flex-start" : p.TextYAlignment === "Bottom" ? "flex-end" : "center",
			textAlign: p.TextXAlignment === "Left" ? "left" : p.TextXAlignment === "Right" ? "right" : "center"
		});
		const label = String(p.Text ?? "");
		if (stroke) {
			const t = Math.max(0, Number(stroke.props.Thickness) || 0), c = rgb(stroke.props.Color, 1 - (Number(stroke.props.Transparency) || 0));
			if (text && stroke.props.ApplyStrokeMode !== "Border") {
				st.WebkitTextStroke = `${t * 2}px ${c}`;
				st.paintOrder = "stroke fill";
			} else st.boxShadow = `0 0 0 ${t}px ${c}`;
		}
		const src = img ? imageSrc(p.Image) : null, mid = img ? mediaIdOf(p.Image) : null;
		const imgStyle = {
			objectFit: p.ScaleType === "Crop" ? "cover" : p.ScaleType === "Stretch" ? "fill" : "contain",
			opacity: 1 - (Number(p.ImageTransparency) || 0),
			borderRadius: "inherit"
		};
		const sel = editing && selected.includes(n.id);
		const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			img && (mid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImg, {
				id: mid,
				style: imgStyle
			}) : src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: "",
				draggable: false,
				style: imgStyle,
				referrerPolicy: "no-referrer"
			}) : p.Image ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
				className: "gl-noimg",
				children: [
					"imagem do Roblox",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"(aparece no Roblox)"
				]
			}) : null),
			text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					fontSize: p.TextScaled ? `min(72cqh, calc(170cqw / ${Math.max(2, label.length)}))` : `${Number(p.TextSize) || 14}px`,
					whiteSpace: p.TextWrapped || p.TextScaled ? "normal" : "pre",
					...grad ? {
						backgroundImage: gradientCss(grad, p.TextColor3, 1),
						backgroundClip: "text",
						WebkitBackgroundClip: "text",
						color: "transparent"
					} : {}
				},
				children: label
			}),
			inside(n.id),
			sel && selected[selected.length - 1] === n.id && HANDLES.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
				className: "gl-handle " + h,
				"aria-hidden": "true",
				onPointerDown: (e) => begin(e, n, h, e.currentTarget.parentElement),
				onPointerMove: move,
				onPointerUp: end,
				onPointerCancel: end
			}, h))
		] });
		const common = {
			className: "gl-el" + (text ? " gl-text" : "") + (button ? " gl-button" : "") + (sel ? " gl-sel" : ""),
			style: st,
			"data-id": n.id
		};
		if (editing) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			...common,
			title: listed ? n.name + " (organizado pela UIListLayout)" : n.name,
			onPointerDown: (e) => {
				if (e.target !== e.currentTarget && e.target.classList.contains("gl-handle")) return;
				e.stopPropagation();
				onSelect?.(n.id, e.ctrlKey || e.shiftKey || e.metaKey);
				if (!listed) begin(e, n, "move", e.currentTarget);
			},
			onPointerMove: move,
			onPointerUp: end,
			onPointerCancel: end,
			children: inner
		}, n.id);
		if (button) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			...common,
			"aria-label": label || n.name,
			onClick: (e) => {
				e.stopPropagation();
				onPress?.(n.id);
			},
			onPointerDown: (e) => {
				e.preventDefault();
				e.stopPropagation();
				if (e.button === 0 || e.button === 2) onPress?.(n.id, e.button === 2 ? "MouseButton2Down" : "MouseButton1Down", e.clientX, e.clientY);
			},
			onPointerUp: (e) => {
				e.stopPropagation();
				if (e.button === 0 || e.button === 2) onPress?.(n.id, e.button === 2 ? "MouseButton2Up" : "MouseButton1Up", e.clientX, e.clientY);
			},
			onPointerEnter: (e) => onPress?.(n.id, "MouseEnter", e.clientX, e.clientY),
			onPointerLeave: (e) => onPress?.(n.id, "MouseLeave", e.clientX, e.clientY),
			onContextMenu: (e) => {
				e.preventDefault();
				e.stopPropagation();
				onPress?.(n.id, "MouseButton2Click");
			},
			children: inner
		}, n.id);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			...common,
			"aria-hidden": !label,
			children: inner
		}, n.id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: layer,
		className: "gl-layer" + (editing ? " editing" : ""),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "gl-worlds",
				children: worlds.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: (el) => {
						if (el) worldEls.current.set(w.id, el);
						else worldEls.current.delete(w.id);
					},
					className: "gl-world " + (w.cls === "SurfaceGui" ? "gl-surface" : "gl-billboard"),
					style: {
						display: "none",
						overflow: w.props.ClipsDescendants ? "hidden" : "visible"
					},
					"aria-label": "Interface " + w.name,
					children: inside(w.id)
				}, w.id))
			}),
			screens.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "gl-screen",
				"aria-label": "Interface " + s.name,
				children: inside(s.id)
			}, s.id)),
			guides.map((g, k) => g.x !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
				className: "gl-guide v",
				style: { left: g.x },
				children: g.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: g.label })
			}, k) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
				className: "gl-guide h",
				style: { top: g.y },
				children: g.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: g.label })
			}, k)),
			preview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "gl-readout",
				children: [
					"Position ",
					`{${preview.Position[0]}, ${preview.Position[1]}},{${preview.Position[2]}, ${preview.Position[3]}}`,
					" · Size ",
					`{${preview.Size[0]}, ${preview.Size[1]}},{${preview.Size[2]}, ${preview.Size[3]}}`
				]
			})
		]
	});
}
/** Reserva a próxima entrada; zero impede nova chamada à API após esgotar o orçamento. */
var nextMpAttempt = (used) => used < 4 ? used + 1 : 0;
/** Espera crescente antes de cada nova tentativa (0 s, 3 s, 6 s, 12 s): nada de laço rápido no Realtime. */
var mpRetryDelay = (attempt) => attempt <= 1 ? 0 : Math.min(12e3, 1500 * 2 ** (attempt - 1));
/** Traduz o erro de entrada (servidor mp-join, Realtime ou WebRTC) para um motivo legível. */
function joinErrorText(e) {
	const msg = e instanceof Error ? e.message : typeof e === "string" ? e : "";
	const status = Number(e?.status) || 0;
	const detail = msg && msg.length <= 160 ? msg : void 0;
	if (status === 401) return {
		text: "Entre com a sua conta de aluno para jogar com outras pessoas. Sem login, dá para jogar sozinho.",
		canRetry: false
	};
	if (status === 409) return {
		text: "Este jogo recebeu uma atualização. Volte aos jogos, atualize o jogo e entre de novo.",
		canRetry: false
	};
	if (status === 404) return {
		text: "Este jogo não está mais publicado, então não abre sala compartilhada.",
		canRetry: false
	};
	if (status === 429) return {
		text: "Foram muitas tentativas seguidas. Aguarde alguns minutos ou jogue sozinho.",
		canRetry: false
	};
	if (status === 503) return {
		text: /pausa|limite/i.test(msg) ? msg : "O multijogador está indisponível no momento. Você ainda pode jogar sozinho.",
		canRetry: !/pausa|limite/i.test(msg)
	};
	if (status === 400 && /desconhecida/i.test(msg)) return {
		text: "O servidor ainda não recebeu a atualização do multijogador. Jogue sozinho por enquanto.",
		detail,
		canRetry: false
	};
	if (status >= 500) return {
		text: "O servidor não respondeu direito. Tente de novo em instantes.",
		detail,
		canRetry: true
	};
	if (/sem internet/i.test(msg)) return {
		text: "Sem internet: o multijogador precisa de conexão. Você ainda pode jogar sozinho.",
		canRetry: true
	};
	if (/salas estão cheias/i.test(msg)) return {
		text: "Todas as salas deste jogo estão cheias agora. Tente daqui a pouco.",
		canRetry: true
	};
	if (/atualização de salas|protocol/i.test(msg)) return {
		text: "O servidor ainda não recebeu a atualização do multijogador. Jogue sozinho por enquanto.",
		canRetry: false
	};
	if (/tempo esgotado|conectar à sala|recusou|conexão fechada|interrompida/i.test(msg)) return {
		text: "Não foi possível falar com o serviço de salas. Confira a internet e tente de novo.",
		detail,
		canRetry: true
	};
	if (/autoridade|sincronizar|bloquear conexões|outra rede/i.test(msg)) return {
		text: "Não conseguimos ligar o seu aparelho ao de quem hospeda a sala. Algumas redes (como a da escola) bloqueiam a conexão direta: tente outra rede ou jogue sozinho.",
		canRetry: true
	};
	if (e instanceof TypeError || /fetch|network|failed to/i.test(msg)) return {
		text: "Sem conexão com o servidor. Confira a internet e tente de novo.",
		canRetry: true
	};
	return {
		text: "Algo deu errado ao entrar na sala.",
		detail,
		canRetry: true
	};
}
/** Falha durante o multijogador: se a partida compartilhada nunca começou, é erro de ENTRADA (não "sala encerrada"). */
function mpFailure(wasReady, error, reason = "error", attempt = 1) {
	if (!wasReady) {
		const j = joinErrorText(error);
		return {
			state: "failed",
			title: "Não foi possível entrar na sala",
			text: j.text,
			...j.detail && j.detail !== j.text ? { detail: j.detail } : {},
			canRetry: j.canRetry && attempt < 4,
			count: 1,
			waiting: 0
		};
	}
	const msg = error instanceof Error ? error.message : String(error || "");
	const canRetry = attempt < 4;
	if (reason === "host") return {
		state: "ended",
		title: "A sala foi encerrada",
		text: canRetry ? "Quem hospedava a partida saiu. Você pode abrir uma sala nova ou jogar sozinho." : "Quem hospedava a partida saiu. As tentativas desta abertura acabaram; você ainda pode jogar sozinho.",
		canRetry,
		count: 1,
		waiting: 0
	};
	if (reason === "limit") return {
		state: "ended",
		title: "A partida terminou",
		text: msg || "A sala chegou ao limite de tempo.",
		canRetry,
		count: 1,
		waiting: 0
	};
	return {
		state: "ended",
		title: "A partida compartilhada parou",
		text: msg || "A conexão com a sala caiu.",
		canRetry,
		count: 1,
		waiting: 0
	};
}
/** Texto curto do indicador ao lado do ☰. */
function mpBadge(mp) {
	if (!mp) return null;
	if (mp.state === "joining") return {
		label: "Conectando…",
		tone: "wait"
	};
	if (mp.state === "on") return {
		label: String(mp.count),
		tone: "ok"
	};
	if (mp.state === "failed") return {
		label: "Sem sala",
		tone: "bad"
	};
	return {
		label: "Sala encerrada",
		tone: "bad"
	};
}
//#endregion
//#region components/studio/GameMenu.tsx
/** Menu do jogo (como o do Roblox): botão com a logo da Level Up e a barrinha (☰ menu, placar e quem está na sala).
*  O menu mostra quem está no servidor e as configurações (gráficos e sensibilidade da câmera).
*  Atalhos: Esc abre/fecha, L sai, R regenera o personagem. */
function GameTopBar({ onMenu, onSettings, onBoard, onReset, boardOn, count, mp }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const k = (e) => {
			if (e.key === "Escape") {
				e.stopPropagation();
				setOpen(false);
			}
		};
		addEventListener("keydown", k, true);
		return () => removeEventListener("keydown", k, true);
	}, [open]);
	const pick = (fn) => () => {
		setOpen(false);
		fn();
	};
	const badge = mpBadge(mp ?? null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gmn-top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "gmn-logo",
				onClick: () => {
					setOpen(false);
					onMenu();
				},
				"aria-label": "Menu do jogo: sair e configurações (Esc)",
				title: "Menu (Esc)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "./brand/emblem-96.png",
					alt: "",
					draggable: false
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gmn-pill",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen((o) => !o),
					"aria-expanded": open,
					"aria-label": open ? "Fechar a lista" : "Abrir a lista",
					title: open ? "Fechar" : "Mais opções",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
				}), mp && badge && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "gmn-mp " + badge.tone,
					onClick: onMenu,
					title: mp.state === "on" ? count + (count === 1 ? " jogador" : " jogadores") + " na sala" : mp.text,
					"aria-label": mp.state === "on" ? count + (count === 1 ? " jogador na sala" : " jogadores na sala") : badge.label,
					children: [badge.tone === "wait" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gmn-spin",
						"aria-hidden": "true"
					}) : badge.tone === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: badge.label })]
				})]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "gmn-drop-shade",
				onClick: () => setOpen(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gmn-drop",
				role: "menu",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "menuitem",
						onClick: pick(onBoard),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { size: 22 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Classificação" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: boardOn ? "Ligada" : "Desligada" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "menuitem",
						onClick: pick(onReset),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 22 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Regenerar" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "menuitem",
						onClick: pick(onSettings),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { size: 22 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Configurações" })]
					})
				]
			})] })
		]
	});
}
function GameMenu({ title, author, players, mp, quality, setQuality, sens, setSens, onLeave, onReset, onClose, startTab = "people" }) {
	const [tab, setTab] = (0, import_react.useState)(startTab);
	(0, import_react.useEffect)(() => {
		const k = (e) => {
			if (e.target?.closest?.("input,textarea")) return;
			const key = e.key.toLowerCase();
			if (key === "l") {
				e.preventDefault();
				onLeave();
			} else if (key === "r") {
				e.preventDefault();
				onReset();
			}
		};
		addEventListener("keydown", k);
		return () => removeEventListener("keydown", k);
	}, [onLeave, onReset]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "gmn-shade",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "gmn",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Menu do jogo",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "gmn-tabs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: tab === "people" ? "on" : "",
							onClick: () => setTab("people"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 18 }), "Pessoas"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: tab === "config" ? "on" : "",
							onClick: () => setTab("config"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { size: 18 }), "Config."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "gmn-x",
							onClick: onClose,
							"aria-label": "Fechar (Esc)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "gmn-body",
					children: tab === "people" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "gmn-game",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
								"por ",
								author,
								mp?.state === "on" ? ` · Sala ${mp.room + 1}` : mp?.state === "joining" ? " · conectando à sala…" : mp?.state === "failed" || mp?.state === "ended" ? " · " + mp.title.toLowerCase() : " · jogando sozinho"
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: ["Neste servidor ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: players.length })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gmn-people",
							children: players.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "gmn-person" + (p.me ? " me" : ""),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "gmn-photo",
										children: p.avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivateImage, {
											src: p.avatar,
											variant: "thumb",
											alt: ""
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
											size: 44,
											strokeWidth: 1.6
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: p.name }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: p.me ? "Você" : p.connecting ? "conectando…" : p.guest ? "Convidado" : "Jogador" })
								]
							}, p.id))
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gmn-config",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Exibição e gráficos" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "gmn-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Qualidade dos gráficos", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Leve deixa o jogo mais rápido em celulares e computadores simples." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "gmn-seg",
									children: [
										"auto",
										"alta",
										"leve"
									].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: quality === q ? "on" : "",
										onClick: () => setQuality(q),
										children: q === "auto" ? "Automático" : q === "alta" ? "Alta" : "Leve"
									}, q))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Câmera" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "gmn-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Sensibilidade da câmera", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Quanto a câmera gira ao arrastar o dedo ou o mouse." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "gmn-slider",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: .2,
										max: 3,
										step: .1,
										value: sens,
										onChange: (e) => setSens(Number(e.target.value)),
										"aria-label": "Sensibilidade da câmera"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: sens.toFixed(1) })]
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gmn-actions",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: onLeave,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "L" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 16 }),
								"Sair"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: onReset,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "R" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 16 }),
								"Regenerar"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "go",
							onClick: onClose,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "Esc" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { size: 16 }),
								"Continuar"
							]
						})
					]
				})
			]
		})
	});
}
/** Aviso do multijogador (no estilo do menu): não entrou na sala, ou a sala/partida acabou depois de jogar junto. */
function MpNotice({ mp, onRetry, onSolo, onLeave }) {
	const canRetry = mp.canRetry;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "gmn-shade mpn-shade",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "gmn mpn " + mp.state,
			role: "alertdialog",
			"aria-modal": "true",
			"aria-labelledby": "mpn-title",
			"aria-describedby": "mpn-text",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mpn-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mpn-icon",
					"aria-hidden": "true",
					children: mp.state === "ended" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoorClosed, { size: 26 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { size: 26 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "mpn-title",
						children: mp.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						id: "mpn-text",
						children: mp.text
					}),
					mp.state === "failed" && mp.detail && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
						className: "mpn-detail",
						children: ["Detalhe: ", mp.detail]
					})
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gmn-actions mpn-actions",
				children: [
					canRetry && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "go",
						onClick: onRetry,
						autoFocus: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { size: 16 }), mp.state === "ended" ? "Abrir sala nova" : "Tentar de novo"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: canRetry ? "" : "go",
						onClick: onSolo,
						autoFocus: !canRetry,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 16 }), "Jogar sozinho"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onLeave,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 16 }), "Voltar aos jogos"]
					})
				]
			})]
		})
	});
}
//#endregion
//#region components/studio/ColorPicker.tsx
/** Seletor de cor como no Roblox Studio: paleta de BrickColors (com o nome de cada cor) e "Mais cores" com RGB e hex. */
/** Paleta do Roblox (BrickColor): nome e cor. */
var BRICK_COLORS = [
	["White", [
		242,
		243,
		243
	]],
	["Institutional white", [
		248,
		248,
		248
	]],
	["Light stone grey", [
		229,
		228,
		223
	]],
	["Mid gray", [
		205,
		205,
		205
	]],
	["Medium stone grey", [
		163,
		162,
		165
	]],
	["Fossil", [
		159,
		161,
		172
	]],
	["Smoky grey", [
		91,
		93,
		105
	]],
	["Dark stone grey", [
		99,
		95,
		98
	]],
	["Black", [
		27,
		42,
		53
	]],
	["Really black", [
		17,
		17,
		17
	]],
	["Sand blue", [
		116,
		134,
		157
	]],
	["Medium blue", [
		110,
		153,
		202
	]],
	["Pastel Blue", [
		128,
		187,
		219
	]],
	["Baby blue", [
		152,
		194,
		219
	]],
	["Electric blue", [
		9,
		137,
		207
	]],
	["Cyan", [
		4,
		175,
		236
	]],
	["Bright blue", [
		13,
		105,
		172
	]],
	["Deep blue", [
		33,
		84,
		185
	]],
	["Really blue", [
		0,
		0,
		255
	]],
	["Navy blue", [
		0,
		32,
		96
	]],
	["Toothpaste", [
		0,
		255,
		255
	]],
	["Teal", [
		18,
		238,
		212
	]],
	["Bright bluish green", [
		0,
		143,
		156
	]],
	["Sea green", [
		52,
		142,
		64
	]],
	["Bright green", [
		75,
		151,
		75
	]],
	["Dark green", [
		40,
		127,
		71
	]],
	["Earth green", [
		39,
		70,
		45
	]],
	["Shamrock", [
		91,
		154,
		76
	]],
	["Medium green", [
		161,
		196,
		140
	]],
	["Br. yellowish green", [
		164,
		189,
		71
	]],
	["Lime green", [
		0,
		255,
		0
	]],
	["Pastel green", [
		204,
		255,
		204
	]],
	["New Yeller", [
		255,
		255,
		0
	]],
	["Bright yellow", [
		245,
		205,
		48
	]],
	["Cool yellow", [
		253,
		234,
		141
	]],
	["Gold", [
		239,
		184,
		56
	]],
	["Deep orange", [
		255,
		176,
		0
	]],
	["Bright orange", [
		218,
		133,
		65
	]],
	["Neon orange", [
		213,
		115,
		61
	]],
	["Light orange", [
		234,
		184,
		146
	]],
	["Persimmon", [
		255,
		89,
		89
	]],
	["Really red", [
		255,
		0,
		0
	]],
	["Bright red", [
		196,
		40,
		28
	]],
	["Crimson", [
		151,
		0,
		0
	]],
	["Maroon", [
		117,
		0,
		0
	]],
	["Hot pink", [
		255,
		0,
		191
	]],
	["Pink", [
		255,
		102,
		204
	]],
	["Carnation pink", [
		255,
		152,
		220
	]],
	["Light reddish violet", [
		232,
		186,
		200
	]],
	["Magenta", [
		170,
		0,
		170
	]],
	["Bright violet", [
		107,
		50,
		124
	]],
	["Royal purple", [
		98,
		37,
		209
	]],
	["Alder", [
		180,
		128,
		255
	]],
	["Lavender", [
		140,
		91,
		159
	]],
	["Pastel brown", [
		255,
		204,
		153
	]],
	["Nougat", [
		204,
		142,
		105
	]],
	["Brick yellow", [
		215,
		197,
		154
	]],
	["Sand red", [
		149,
		121,
		119
	]],
	["Brown", [
		124,
		92,
		70
	]],
	["CGA brown", [
		170,
		85,
		0
	]],
	["Reddish brown", [
		105,
		64,
		40
	]],
	["Burnt Sienna", [
		106,
		57,
		9
	]],
	["Dark taupe", [
		90,
		76,
		66
	]],
	["Dark orange", [
		160,
		95,
		53
	]]
];
var hex = (c) => "#" + c.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
var fromHex = (h) => {
	const m = /^#?([0-9a-f]{6})$/i.exec(h.trim());
	if (!m) return null;
	const n = parseInt(m[1], 16);
	return [
		n >> 16 & 255,
		n >> 8 & 255,
		n & 255
	];
};
var colorName = (c) => BRICK_COLORS.find(([, v]) => v[0] === c[0] && v[1] === c[1] && v[2] === c[2])?.[0];
function ColorPicker({ value, onChange, disabled, label, compact }) {
	const [open, setOpen] = (0, import_react.useState)(false), [pos, setPos] = (0, import_react.useState)({
		left: 0,
		top: 0
	});
	const btn = (0, import_react.useRef)(null), box = (0, import_react.useRef)(null);
	const c = Array.isArray(value) ? value : [
		255,
		255,
		255
	];
	const name = colorName(c);
	const [hx, setHx] = (0, import_react.useState)(hex(c));
	(0, import_react.useEffect)(() => setHx(hex(c)), [
		c[0],
		c[1],
		c[2]
	]);
	(0, import_react.useLayoutEffect)(() => {
		if (!open || !btn.current) return;
		const r = btn.current.getBoundingClientRect();
		const w = 284, h = box.current?.offsetHeight ?? 330;
		setPos({
			left: Math.max(8, Math.min(r.left, innerWidth - w - 8)),
			top: r.bottom + h + 8 < innerHeight ? r.bottom + 4 : Math.max(8, r.top - h - 4)
		});
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const close = (e) => {
			if (!box.current?.contains(e.target) && !btn.current?.contains(e.target)) setOpen(false);
		};
		const key = (e) => {
			if (e.key === "Escape") {
				e.stopPropagation();
				setOpen(false);
				btn.current?.focus();
			}
		};
		addEventListener("pointerdown", close, true);
		addEventListener("keydown", key, true);
		requestAnimationFrame(() => (box.current?.querySelector("[aria-pressed=\"true\"],button"))?.focus());
		return () => {
			removeEventListener("pointerdown", close, true);
			removeEventListener("keydown", key, true);
		};
	}, [open]);
	const pick = (v) => onChange(v.map((n) => Math.max(0, Math.min(255, Math.round(n)))));
	const gridKey = (e) => {
		const list = [...box.current?.querySelectorAll(".cp-sw") ?? []];
		const k = list.indexOf(document.activeElement);
		if (k < 0) return;
		const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : e.key === "ArrowDown" ? 8 : e.key === "ArrowUp" ? -8 : 0;
		if (!d) return;
		e.preventDefault();
		list[Math.max(0, Math.min(list.length - 1, k + d))]?.focus();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "cp" + (compact ? " compact" : ""),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			ref: btn,
			type: "button",
			className: "cp-btn",
			disabled,
			"aria-haspopup": "dialog",
			"aria-expanded": open,
			"aria-label": `${label}: ${name ?? ""} ${c.join(", ")}. Escolher cor`,
			title: name ? `${name} (${c.join(", ")})` : c.join(", "),
			onClick: () => setOpen((o) => !o),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { background: hex(c) } }), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.map((n) => Math.round(n)).join(", ") })]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: box,
			className: "cp-pop",
			role: "dialog",
			"aria-label": "Cor: " + label,
			style: {
				left: pos.left,
				top: pos.top
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
					className: "cp-title",
					children: [label, name && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [" · ", name] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "cp-grid",
					role: "group",
					"aria-label": "Paleta de cores do Roblox",
					onKeyDown: gridKey,
					children: BRICK_COLORS.map(([n, v]) => {
						const on = v[0] === c[0] && v[1] === c[1] && v[2] === c[2];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "cp-sw" + (on ? " on" : ""),
							style: { background: hex(v) },
							title: `${n} (${v.join(", ")})`,
							"aria-label": n,
							"aria-pressed": on,
							onClick: () => {
								pick(v);
								setOpen(false);
								btn.current?.focus();
							}
						}, n);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cp-more",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mais cores" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "cp-wheel",
							title: "Escolher qualquer cor",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "color",
								value: hex(c),
								onChange: (e) => {
									const v = fromHex(e.target.value);
									if (v) pick(v);
								},
								"aria-label": "Escolher qualquer cor"
							})
						}),
						[
							"R",
							"G",
							"B"
						].map((ch, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "cp-ch",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: ch }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: 0,
								max: 255,
								value: Math.round(c[k]),
								onChange: (e) => {
									const n = [...c];
									n[k] = Number(e.target.value) || 0;
									pick(n);
								},
								"aria-label": {
									R: "Vermelho",
									G: "Verde",
									B: "Azul"
								}[ch] + " (0 a 255)"
							})]
						}, ch)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "cp-ch hex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "#" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: hx.replace("#", ""),
								maxLength: 7,
								onChange: (e) => {
									setHx(e.target.value);
									const v = fromHex(e.target.value);
									if (v) pick(v);
								},
								"aria-label": "Código hexadecimal"
							})]
						})
					]
				})
			]
		})]
	});
}
//#endregion
//#region lib/studio/selection.ts
/** Shift percorre só os irmãos do mesmo pai, mantendo a ordem do Explorador. */
function siblingRange(insts, anchor, id) {
	const target = insts.find((i) => i.id === id), start = insts.find((i) => i.id === anchor);
	if (!target || !start || start.parent !== target.parent) return [id];
	const siblings = insts.filter((i) => i.parent === target.parent), a = siblings.findIndex((i) => i.id === anchor), b = siblings.findIndex((i) => i.id === id);
	return siblings.slice(Math.min(a, b), Math.max(a, b) + 1).map((i) => i.id);
}
//#endregion
//#region lib/studio/inbox.ts
/** "Ver no laboratório": a aula manda objetos para o Studio Lite. Ficam guardados no aparelho até o Laboratório abrir
*  e entram no projeto do aluno (sem apagar nada), com ids novos. */
var KEY = "levelup-lab-inbox";
/** Pega (e apaga) o que a aula mandou. Ignora entregas com mais de 30 minutos. */
function takeLabDelivery() {
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return null;
		localStorage.removeItem(KEY);
		const d = JSON.parse(raw);
		if (!d || !Array.isArray(d.insts) || Date.now() - d.at > 30 * 6e4) return null;
		return d;
	} catch {
		return null;
	}
}
/** Coloca os objetos no projeto com ids novos: o que estava num serviço continua nele. Devolve o projeto e as raízes. */
function mergeDelivery(p, d) {
	const map = /* @__PURE__ */ new Map();
	for (const i of d.insts) map.set(i.id, newId());
	const insts = d.insts.map((i) => ({
		...i,
		id: map.get(i.id),
		parent: i.parent && map.has(i.parent) ? map.get(i.parent) : i.parent && isService(i.parent) ? i.parent : "Workspace"
	}));
	const clean = sanitize({
		v: 1,
		name: p.name,
		insts: [...p.insts.filter((i) => isService(i.cls)), ...insts]
	}).insts.filter((i) => !isService(i.cls));
	const ids = new Set(clean.map((i) => i.id));
	const roots = clean.filter((i) => !i.parent || !ids.has(i.parent)).map((i) => i.id);
	return {
		project: {
			...p,
			insts: [...p.insts, ...clean]
		},
		roots
	};
}
//#endregion
//#region web/config.ts
var endpoint = "https://fguqnhjvfvneipaqnoce.supabase.co/functions/v1/academy";
var publicKey = "sb_publishable_UCl41rKzbb90quPWEfyfng_Y4LPvMXn";
//#endregion
//#region lib/studio/alpha-texture.ts
/** Bake map_d into a diffuse PNG, preserving the Three.js green-channel alpha rule.
* Output remains in the diffuse image UV space, so existing geometry UVs stay valid. */
var sample = (image, u, v) => {
	const x = Math.max(0, Math.min(image.width - 1, Math.floor(u * image.width)));
	return (Math.max(0, Math.min(image.height - 1, Math.floor(v * image.height))) * image.width + x) * 4;
};
function bakeAlphaPixels(diffuse, alpha, map, mask, width, height) {
	if ((map?.channel ?? 0) !== mask.channel) throw new Error("A máscara usa um canal UV diferente. Exporte a máscara e a cor no mesmo UV.");
	map?.updateMatrix();
	mask.updateMatrix();
	const inverse = map ? map.matrix.clone().invert() : new Matrix3();
	if (map && Math.abs(map.matrix.determinant()) < 1e-9) throw new Error("Escala UV inválida na textura do personagem.");
	const data = new Uint8ClampedArray(width * height * 4), point = new Vector2();
	for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
		const u = (x + .5) / width, v = (y + .5) / height, index = (y * width + x) * 4;
		if (diffuse) {
			const p = sample(diffuse, u, v);
			data.set(diffuse.data.subarray(p, p + 4), index);
		} else data.set([
			255,
			255,
			255,
			255
		], index);
		point.set(u, map?.flipY === false ? v : 1 - v).applyMatrix3(inverse);
		mask.transformUv(point);
		const p = sample(alpha, point.x, point.y);
		data[index + 3] = Math.round(data[index + 3] * alpha.data[p + 1] / 255);
	}
	return {
		width,
		height,
		data
	};
}
function imagePixels(image) {
	const w = Number(image?.naturalWidth || image?.width), h = Number(image?.naturalHeight || image?.height);
	if (!w || !h) throw new Error("Imagem da máscara ou textura não carregou. Selecione todas as imagens do OBJ.");
	const scale = Math.min(1, 1024 / Math.max(w, h)), canvas = document.createElement("canvas");
	canvas.width = Math.max(1, Math.round(w * scale));
	canvas.height = Math.max(1, Math.round(h * scale));
	const ctx = canvas.getContext("2d", { willReadFrequently: true });
	if (!ctx) throw new Error("Não foi possível combinar a máscara de transparência.");
	if (image.data) {
		const source = document.createElement("canvas");
		source.width = w;
		source.height = h;
		const c = source.getContext("2d");
		const pixels = c.createImageData(w, h);
		pixels.data.set(image.data);
		c.putImageData(pixels, 0, 0);
		ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
		source.width = source.height = 1;
	} else ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	const result = ctx.getImageData(0, 0, canvas.width, canvas.height);
	canvas.width = canvas.height = 1;
	return result;
}
function bakeAlphaTexture(map, mask) {
	const color = map ? imagePixels(map.image) : null, alpha = imagePixels(mask.image);
	const width = color?.width ?? alpha.width, height = color?.height ?? alpha.height;
	const result = bakeAlphaPixels(color, alpha, map, mask, width, height), canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext("2d");
	const pixels = ctx.createImageData(width, height);
	pixels.data.set(result.data);
	ctx.putImageData(pixels, 0, 0);
	const url = canvas.toDataURL("image/png");
	canvas.width = canvas.height = 1;
	return url;
}
//#endregion
//#region lib/studio/import3d.ts
/** Importar modelo 3D (como o Importador 3D do Roblox Studio): .obj (+ .mtl e imagens), .fbx, .glb/.gltf e .stl.
*  Cada material vira uma MeshPart dentro de um Model; a malha e a textura ficam guardadas na própria peça. */
var IMPORT_3D_ACCEPT = ".obj,.mtl,.fbx,.glb,.gltf,.bin,.stl,.png,.jpg,.jpeg,.webp,.bmp,.tga";
var MAX_TRIS = 2e5, MAX_PARTS = 80, TEX_MAX = 1024;
var ext = (n) => n.toLowerCase().split(".").pop() ?? "";
var base = (n) => n.replace(/\\/g, "/").split("/").pop().toLowerCase();
var key = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
/** Imagem da textura em texto (JPEG, ou PNG quando tem transparência), no máximo 1024 px. */
function textureData(img, fullAlpha = false, background) {
	try {
		const w0 = img?.width || img?.videoWidth, h0 = img?.height || img?.videoHeight;
		if (!w0 || !h0) return null;
		const s = Math.min(1, TEX_MAX / Math.max(w0, h0));
		const w = Math.max(1, Math.round(w0 * s)), h = Math.max(1, Math.round(h0 * s));
		const cv = document.createElement("canvas");
		cv.width = w;
		cv.height = h;
		const ctx = cv.getContext("2d");
		if (background) {
			ctx.fillStyle = `rgb(${background.join(",")})`;
			ctx.fillRect(0, 0, w, h);
		}
		if (img.data && !(img instanceof HTMLImageElement) && typeof ImageBitmap !== "undefined" && !(img instanceof ImageBitmap)) {
			const tmp = document.createElement("canvas");
			tmp.width = w0;
			tmp.height = h0;
			const id = new ImageData(new Uint8ClampedArray(img.data.buffer.slice(0)), w0, h0);
			tmp.getContext("2d").putImageData(id, 0, 0);
			ctx.drawImage(tmp, 0, 0, w, h);
		} else ctx.drawImage(img, 0, 0, w, h);
		const px = ctx.getImageData(0, 0, w, h).data;
		let alpha = false;
		for (let k = 3; k < px.length; k += 4) if (px[k] < 250) {
			alpha = true;
			break;
		}
		return alpha ? cv.toDataURL("image/png") : cv.toDataURL("image/jpeg", .86);
	} catch {
		return null;
	}
}
async function loadRoot(files, urls, strict, failures) {
	const main = files.find((f) => [
		"obj",
		"fbx",
		"glb",
		"gltf",
		"stl"
	].includes(ext(f.name)));
	if (!main) throw new Error("Escolha um arquivo .obj, .fbx, .glb, .gltf ou .stl (pode escolher junto o .mtl e as imagens).");
	for (const f of files) {
		const k = base(f.name);
		if (strict && urls.has(k)) throw new Error(`Arquivos com nomes repetidos: ${f.name}.`);
		urls.set(k, URL.createObjectURL(f));
	}
	const manager = new LoadingManager();
	manager.onError = (u) => {
		failures.push(u);
	};
	manager.setURLModifier((u) => {
		if (u.startsWith("data:") || u.startsWith("blob:")) return u;
		const local = urls.get(base(decodeURIComponent(u.split("?")[0])));
		if (local) return local;
		if (strict) throw new Error(`Arquivo vinculado ausente: ${u}. Selecione todas as imagens, .mtl e .bin junto com o modelo.`);
		return u;
	});
	const e = ext(main.name);
	if (e === "stl") {
		const { STLLoader } = await __vitePreload(async () => {
			const { STLLoader } = await import("./lagtest-STLLoader-CuGeDy0n.js");
			return { STLLoader };
		}, __vite__mapDeps([0,1]), import.meta.url);
		const g = new STLLoader(manager).parse(await main.arrayBuffer());
		const mesh = new Mesh(g, new MeshStandardMaterial({ color: g.hasColors ? new Color(1, 1, 1) : new Color(.64, .64, .65) }));
		mesh.name = main.name.replace(/\.[^.]+$/, "");
		mesh.rotation.x = -Math.PI / 2;
		const r = new Group$1();
		r.add(mesh);
		return {
			root: r,
			main,
			flipV: false
		};
	}
	if (e === "obj") {
		const { OBJLoader } = await __vitePreload(async () => {
			const { OBJLoader } = await import("./lagtest-OBJLoader-DjDIIeLc.js");
			return { OBJLoader };
		}, __vite__mapDeps([2,1]), import.meta.url);
		const loader = new OBJLoader(manager);
		const objText = await main.text();
		const libraries = [...objText.matchAll(/^mtllib\s+(.+)$/gm)].map((m) => m[1].trim());
		if (strict) {
			for (const lib of libraries) if (!files.some((f) => base(f.name) === base(lib))) throw new Error(`Material ausente: ${lib}. Selecione o .mtl junto com o modelo.`);
		}
		if (strict && libraries.length > 1) throw new Error("Exporte o OBJ com uma única biblioteca .mtl.");
		const mtl = files.find((f) => ext(f.name) === "mtl" && (!libraries.length || base(f.name) === base(libraries[0])));
		if (mtl) {
			const { MTLLoader } = await __vitePreload(async () => {
				const { MTLLoader } = await import("./lagtest-MTLLoader-dyQHvdmv.js");
				return { MTLLoader };
			}, __vite__mapDeps([3,1]), import.meta.url);
			const mats = new MTLLoader(manager).parse(await mtl.text(), "");
			mats.preload();
			if (/# Generated by Roblox Studio/.test(objText)) for (const [name, m] of Object.entries(mats.materials)) {
				const info = mats.materialsInfo[name];
				if (info.map_kd && info.map_d === info.map_kd) {
					const skin = new Color().fromArray(info.kd ?? [
						1,
						1,
						1
					]).convertLinearToSRGB();
					m.userData.robloxDiffuse = {
						overlay: info.rbx_alphamode !== "transparency",
						background: skin.toArray().map((v) => Math.round(v * 255))
					};
				}
			}
			await Promise.all(Object.values(mats.materials).map((m) => m.map?.image ? Promise.resolve() : new Promise((res) => {
				const t = m.map;
				if (!t) {
					res();
					return;
				}
				let n = 0;
				const wait = () => {
					if (t.image && (t.image.complete || t.image.width) || n++ > 100) res();
					else setTimeout(wait, 50);
				};
				wait();
			})));
			loader.setMaterials(mats);
		}
		return {
			root: loader.parse(await main.text()),
			main,
			flipV: false
		};
	}
	if (e === "fbx") {
		const { FBXLoader } = await __vitePreload(async () => {
			const { FBXLoader } = await import("./lagtest-FBXLoader-CK4qRWGa.js");
			return { FBXLoader };
		}, __vite__mapDeps([4,1]), import.meta.url);
		return {
			root: new FBXLoader(manager).parse(await main.arrayBuffer(), ""),
			main,
			flipV: false
		};
	}
	const { GLTFLoader } = await __vitePreload(async () => {
		const { GLTFLoader } = await import("./lagtest-GLTFLoader-CTSXvt7n.js");
		return { GLTFLoader };
	}, __vite__mapDeps([5,1]), import.meta.url);
	const data = e === "gltf" ? await main.text() : await main.arrayBuffer();
	return {
		root: (await new GLTFLoader(manager).parseAsync(data, "")).scene,
		main,
		flipV: false
	};
}
/** Espera as imagens de textura carregarem (OBJ/FBX carregam depois). */
async function texturesReady(root) {
	const imgs = [];
	root.traverse((o) => {
		const ms = Array.isArray(o.material) ? o.material : [o.material];
		for (const m of ms) for (const texture of [m?.map, m?.alphaMap]) {
			const im = texture?.image;
			if (im instanceof HTMLImageElement && !im.complete) imgs.push(im);
		}
	});
	await Promise.race([Promise.all(imgs.map((im) => new Promise((r) => {
		im.addEventListener("load", r, { once: true });
		im.addEventListener("error", r, { once: true });
	}))), new Promise((r) => setTimeout(r, 8e3))]);
}
async function import3d(files, options = {}) {
	const strict = !!options.character, urls = /* @__PURE__ */ new Map(), failures = [], allocated = /* @__PURE__ */ new Set();
	let loaded;
	try {
		const { root, main } = await loadRoot(files, urls, strict, failures);
		loaded = root;
		await texturesReady(root);
		root.updateMatrixWorld(true);
		if (strict && failures.length) throw new Error("Não foi possível carregar todos os arquivos vinculados. Selecione imagens válidas junto com o modelo.");
		const notes = [];
		const groups = /* @__PURE__ */ new Map();
		let tris = 0;
		root.traverse((o) => {
			if (!o.isMesh || !o.geometry?.attributes?.position) return;
			const mats = Array.isArray(o.material) ? o.material : [o.material];
			let g = o.geometry.clone();
			allocated.add(g);
			if (strict && o.isSkinnedMesh) {
				o.skeleton.update();
				const v = new Vector3();
				for (let i = 0; i < g.attributes.position.count; i++) {
					o.getVertexPosition(i, v);
					g.attributes.position.setXYZ(i, v.x, v.y, v.z);
				}
				g.computeVertexNormals();
			}
			g.applyMatrix4(o.matrixWorld);
			const parts = g.groups.length && mats.length > 1 ? g.groups.map((gr) => ({
				gr,
				mat: mats[gr.materialIndex ?? 0] ?? mats[0]
			})) : [{
				gr: null,
				mat: mats[0]
			}];
			for (const { gr, mat } of parts) {
				let sub = g;
				if (gr) {
					const idx = g.index ? Array.from(g.index.array).slice(gr.start, gr.start + gr.count) : Array.from({ length: gr.count }, (_, k) => gr.start + k);
					sub = g.clone();
					allocated.add(sub);
					sub.setIndex(idx);
					sub.clearGroups();
				}
				const k = (strict ? o.uuid + ":" : "") + (mat?.uuid ?? "none");
				const grp = groups.get(k) ?? {
					mat,
					name: strict ? o.name || o.parent?.name || "Malha" : mat?.name || o.name || "Malha",
					geos: []
				};
				grp.geos.push(sub);
				groups.set(k, grp);
			}
		});
		if (!groups.size) throw new Error("O arquivo não tem nenhuma malha.");
		const prep = (g) => {
			let x = g.index ? g : g.clone();
			allocated.add(x);
			for (const a of Object.keys(x.attributes)) if (![
				"position",
				"normal",
				"uv"
			].includes(a)) x.deleteAttribute(a);
			if (!x.index) {
				const n = x.attributes.position.count;
				x.setIndex(Array.from({ length: n }, (_, k) => k));
			}
			if (!x.attributes.normal) x.computeVertexNormals();
			if (!x.attributes.uv) x.setAttribute("uv", new BufferAttribute(new Float32Array(x.attributes.position.count * 2), 2));
			const idx = x.index.array;
			const map = /* @__PURE__ */ new Map();
			const order = [];
			const ni = new Uint32Array(idx.length);
			for (let k = 0; k < idx.length; k++) {
				const v = idx[k];
				let n = map.get(v);
				if (n === void 0) {
					n = order.length;
					map.set(v, n);
					order.push(v);
				}
				ni[k] = n;
			}
			const out = new BufferGeometry();
			allocated.add(out);
			for (const a of [
				"position",
				"normal",
				"uv"
			]) {
				const at = x.getAttribute(a);
				const sz = at.itemSize;
				const arr = new Float32Array(order.length * sz);
				order.forEach((v, i) => {
					for (let j = 0; j < sz; j++) arr[i * sz + j] = at.getComponent(v, j);
				});
				out.setAttribute(a, new BufferAttribute(arr, sz));
			}
			out.setIndex(new BufferAttribute(ni, 1));
			return out;
		};
		let list = [...groups.values()].map((gr) => {
			const g = mergeGeometries(gr.geos.map(prep), false);
			allocated.add(g);
			tris += (g.index ? g.index.count : g.attributes.position.count) / 3;
			return {
				...gr,
				geo: g
			};
		});
		if (strict && tris > 1e5) throw new Error("O personagem excede 100.000 triângulos. Simplifique o modelo e tente novamente.");
		if (tris > MAX_TRIS) throw new Error(`O modelo tem ${Math.round(tris).toLocaleString("pt-BR")} triângulos. O limite é ${MAX_TRIS.toLocaleString("pt-BR")}: simplifique no Blender (modificador Decimate) e tente de novo.`);
		if (strict && list.length > 127) throw new Error("O personagem excede 127 partes visuais (mais a raiz invisível). Simplifique o modelo e tente novamente.");
		if (!strict && list.length > MAX_PARTS) {
			list.sort((a, b) => b.geo.attributes.position.count - a.geo.attributes.position.count);
			const rest = list.slice(MAX_PARTS - 1);
			const merged = mergeGeometries(rest.map((r) => r.geo), false);
			list = [...list.slice(0, MAX_PARTS - 1), {
				mat: rest[0].mat,
				name: "Resto",
				geos: [],
				geo: merged
			}];
			notes.push(`Muitos materiais: os menores foram juntados em uma peça.`);
		}
		const all = new Box3();
		for (const l of list) {
			l.geo.computeBoundingBox();
			all.union(l.geo.boundingBox);
		}
		const sz = all.getSize(new Vector3());
		const maxDim = Math.max(sz.x, sz.y, sz.z);
		let scaled = null;
		let s = 1;
		if (maxDim > 400 || maxDim < .2) {
			s = 20 / maxDim;
			scaled = +s.toPrecision(3);
		}
		const c = all.getCenter(new Vector3());
		const shift = new Vector3(-c.x, -all.min.y, -c.z);
		const modelName = main.name.replace(/\.[^.]+$/, "").slice(0, 60) || "Modelo";
		if (!Number.isFinite(maxDim) || maxDim <= 0) throw new Error("O modelo não tem dimensões válidas.");
		const textureCache = /* @__PURE__ */ new Map();
		const alphaCache = /* @__PURE__ */ new Map();
		const model = make$1("Model", null, modelName);
		const insts = [model];
		const names = /* @__PURE__ */ new Map();
		for (const l of list) {
			const g = l.geo;
			g.computeBoundingBox();
			const sourceBounds = {
				center: g.boundingBox.getCenter(new Vector3()).toArray(),
				size: g.boundingBox.getSize(new Vector3()).toArray()
			};
			g.translate(shift.x, shift.y, shift.z);
			if (s !== 1) g.scale(s, s, s);
			g.computeBoundingBox();
			const bb = g.boundingBox;
			const size = bb.getSize(new Vector3()), ctr = bb.getCenter(new Vector3());
			const S = [
				Math.max(size.x, .05),
				Math.max(size.y, .05),
				Math.max(size.z, .05)
			];
			g.translate(-ctr.x, -ctr.y, -ctr.z);
			g.scale(1 / S[0], 1 / S[1], 1 / S[2]);
			const mat = l.mat ?? {};
			const map = mat.map;
			if (strict && mat.vertexColors) throw new Error("O material " + l.name + " usa cores por vértice. Incorpore essas cores à textura antes de importar.");
			let uv = g.attributes.uv.array;
			if (map && map.flipY === false) {
				uv = uv.slice();
				for (let k = 1; k < uv.length; k += 2) uv[k] = 1 - uv[k];
			}
			if (strict && map) {
				map.updateMatrix();
				uv = uv.slice();
				const v = new Vector2();
				for (let k = 0; k < uv.length; k += 2) {
					v.set(uv[k], map.flipY === false ? 1 - uv[k + 1] : uv[k + 1]).applyMatrix3(map.matrix);
					uv[k] = v.x;
					uv[k + 1] = map.flipY === false ? 1 - v.y : v.y;
				}
			}
			let cached;
			const roblox = strict ? mat.userData?.robloxDiffuse : void 0;
			if (roblox) {
				const cacheKey = "roblox|" + map?.uuid + "|" + roblox.overlay + "|" + roblox.background.join(",");
				cached = alphaCache.get(cacheKey);
				if (!cached && map?.image) {
					const data = textureData(map.image, true, roblox.overlay ? roblox.background : void 0);
					if (data) {
						cached = {
							data,
							key: key()
						};
						alphaCache.set(cacheKey, cached);
						notes.push("Material Roblox incorporado com alfa do PNG e cores preservadas: " + l.name + ".");
					}
				}
			} else if (strict && mat.alphaMap) {
				const alpha = mat.alphaMap;
				map?.updateMatrix();
				alpha.updateMatrix();
				const cacheKey = [
					map?.uuid ?? "",
					alpha.uuid,
					map?.matrix.elements.join(","),
					alpha.matrix.elements.join(","),
					map?.flipY,
					alpha.flipY,
					alpha.wrapS,
					alpha.wrapT
				].join("|");
				cached = alphaCache.get(cacheKey);
				if (!cached) {
					cached = {
						data: bakeAlphaTexture(map ?? null, alpha),
						key: key()
					};
					alphaCache.set(cacheKey, cached);
					notes.push("Máscara de transparência combinada automaticamente: " + l.name + ".");
				}
			} else {
				cached = map ? textureCache.get(map.image) : void 0;
				if (!cached && map?.image) {
					const data = textureData(map.image, strict);
					if (data) {
						cached = {
							data,
							key: key()
						};
						textureCache.set(map.image, cached);
					}
				}
			}
			const tex = cached?.data ?? null;
			if (strict && map && !tex) throw new Error("Textura ausente ou inválida em " + l.name + ". Selecione todas as imagens vinculadas.");
			const col = strict ? mat.color?.clone().convertLinearToSRGB() : mat.color;
			const rgb = roblox ? [
				255,
				255,
				255
			] : col ? [
				Math.round(col.r * 255),
				Math.round(col.g * 255),
				Math.round(col.b * 255)
			] : [
				163,
				162,
				165
			];
			const md = encodeMesh({
				positions: g.attributes.position.array,
				normals: g.attributes.normal.array,
				uvs: uv,
				indices: Uint32Array.from(g.index.array)
			});
			let nm = String(l.name || "Malha").replace(/[^\p{L}\p{N} _-]/gu, "").trim().slice(0, 40) || "Malha";
			const n = names.get(nm) ?? 0;
			names.set(nm, n + 1);
			if (n) nm += n + 1;
			const size3 = [
				+S[0].toFixed(3),
				+S[1].toFixed(3),
				+S[2].toFixed(3)
			];
			insts.push(make$1("MeshPart", model.id, nm, {
				Position: [
					+ctr.x.toFixed(3),
					+ctr.y.toFixed(3),
					+ctr.z.toFixed(3)
				],
				Size: size3,
				InitialSize: size3,
				Orientation: [
					0,
					0,
					0
				],
				Color: tex && !strict ? [
					255,
					255,
					255
				] : rgb,
				Transparency: Math.max(0, Math.min(1, 1 - (mat.opacity ?? 1))),
				Material: "Plastic",
				Anchored: true,
				MeshId: "",
				TextureID: "",
				Parts: [],
				MeshData: md,
				MeshKey: key(),
				...strict ? {
					CharacterSourceBounds: sourceBounds,
					LocalCharacterBaked: true,
					SurfaceAlphaMode: tex?.startsWith("data:image/png") ? "Transparency" : "Opaque"
				} : {},
				...tex ? {
					TextureData: tex,
					TextureKey: cached.key
				} : {},
				Imported: main.name.slice(0, 80)
			}));
		}
		if ([...groups.values()].some((g) => g.mat?.map && !g.mat.map.image)) notes.push("Alguma textura não foi encontrada: escolha as imagens junto com o modelo.");
		if (ext(main.name) === "obj" && !files.some((f) => ext(f.name) === "mtl")) notes.push("Sem o arquivo .mtl as cores e texturas não vêm: escolha o .obj, o .mtl e as imagens juntos.");
		return {
			insts,
			name: modelName,
			parts: list.length,
			triangles: Math.round(tris),
			scaled,
			notes
		};
	} finally {
		for (const url of urls.values()) URL.revokeObjectURL(url);
		const materials = /* @__PURE__ */ new Set(), textures = /* @__PURE__ */ new Set();
		loaded?.traverse((o) => {
			if (o.geometry) allocated.add(o.geometry);
			for (const m of Array.isArray(o.material) ? o.material : [o.material]) if (m) materials.add(m);
		});
		for (const m of materials) {
			for (const value of Object.values(m)) if (value instanceof Texture) textures.add(value);
			m.dispose();
		}
		for (const t of textures) {
			t.dispose();
			if (typeof ImageBitmap !== "undefined" && t.image instanceof ImageBitmap) t.image.close();
		}
		for (const g of allocated) g.dispose();
	}
}
//#endregion
//#region ../../node_modules/fzstd/esm/index.mjs
var ab = ArrayBuffer, u8 = Uint8Array, u16 = Uint16Array, i16 = Int16Array, i32 = Int32Array;
var slc = function(v, s, e) {
	if (u8.prototype.slice) return u8.prototype.slice.call(v, s, e);
	if (s == null || s < 0) s = 0;
	if (e == null || e > v.length) e = v.length;
	var n = new u8(e - s);
	n.set(v.subarray(s, e));
	return n;
};
var fill = function(v, n, s, e) {
	if (u8.prototype.fill) return u8.prototype.fill.call(v, n, s, e);
	if (s == null || s < 0) s = 0;
	if (e == null || e > v.length) e = v.length;
	for (; s < e; ++s) v[s] = n;
	return v;
};
var cpw = function(v, t, s, e) {
	if (u8.prototype.copyWithin) return u8.prototype.copyWithin.call(v, t, s, e);
	if (s == null || s < 0) s = 0;
	if (e == null || e > v.length) e = v.length;
	while (s < e) v[t++] = v[s++];
};
var ec = [
	"invalid zstd data",
	"window size too large (>2046MB)",
	"invalid block type",
	"FSE accuracy too high",
	"match distance too far back",
	"unexpected EOF"
];
var err = function(ind, msg, nt) {
	var e = new Error(msg || ec[ind]);
	e.code = ind;
	if (Error.captureStackTrace) Error.captureStackTrace(e, err);
	if (!nt) throw e;
	return e;
};
var rb = function(d, b, n) {
	var i = 0, o = 0;
	for (; i < n; ++i) o |= d[b++] << (i << 3);
	return o;
};
var b4 = function(d, b) {
	return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var rzfh = function(dat, w) {
	var n3 = dat[0] | dat[1] << 8 | dat[2] << 16;
	if (n3 == 3126568 && dat[3] == 253) {
		var flg = dat[4];
		var ss = flg >> 5 & 1, cc = flg >> 2 & 1, df = flg & 3, fcf = flg >> 6;
		if (flg & 8) err(0);
		var bt = 6 - ss;
		var db = df == 3 ? 4 : df;
		var di = rb(dat, bt, db);
		bt += db;
		var fsb = fcf ? 1 << fcf : ss;
		var fss = rb(dat, bt, fsb) + (fcf == 1 && 256);
		var ws = fss;
		if (!ss) {
			var wb = 1 << 10 + (dat[5] >> 3);
			ws = wb + (wb >> 3) * (dat[5] & 7);
		}
		if (ws > 2145386496) err(1);
		var buf = new u8((w == 1 ? fss || ws : w ? 0 : ws) + 12);
		buf[0] = 1, buf[4] = 4, buf[8] = 8;
		return {
			b: bt + fsb,
			y: 0,
			l: 0,
			d: di,
			w: w && w != 1 ? w : buf.subarray(12),
			e: ws,
			o: new i32(buf.buffer, 0, 3),
			u: fss,
			c: cc,
			m: Math.min(131072, ws)
		};
	} else if ((n3 >> 4 | dat[3] << 20) == 25481893) return b4(dat, 4) + 8;
	err(0);
};
var msb = function(val) {
	var bits = 0;
	for (; 1 << bits <= val; ++bits);
	return bits - 1;
};
var rfse = function(dat, bt, mal) {
	var tpos = (bt << 3) + 4;
	var al = (dat[bt] & 15) + 5;
	if (al > mal) err(3);
	var sz = 1 << al;
	var probs = sz, sym = -1, re = -1, i = -1, ht = sz;
	var buf = new ab(512 + (sz << 2));
	var freq = new i16(buf, 0, 256);
	var dstate = new u16(buf, 0, 256);
	var nstate = new u16(buf, 512, sz);
	var bb1 = 512 + (sz << 1);
	var syms = new u8(buf, bb1, sz);
	var nbits = new u8(buf, bb1 + sz);
	while (sym < 255 && probs > 0) {
		var bits = msb(probs + 1);
		var cbt = tpos >> 3;
		var msk = (1 << bits + 1) - 1;
		var val = (dat[cbt] | dat[cbt + 1] << 8 | dat[cbt + 2] << 16) >> (tpos & 7) & msk;
		var msk1fb = (1 << bits) - 1;
		var msv = msk - probs - 1;
		var sval = val & msk1fb;
		if (sval < msv) tpos += bits, val = sval;
		else {
			tpos += bits + 1;
			if (val > msk1fb) val -= msv;
		}
		freq[++sym] = --val;
		if (val == -1) {
			probs += val;
			syms[--ht] = sym;
		} else probs -= val;
		if (!val) do {
			var rbt = tpos >> 3;
			re = (dat[rbt] | dat[rbt + 1] << 8) >> (tpos & 7) & 3;
			tpos += 2;
			sym += re;
		} while (re == 3);
	}
	if (sym > 255 || probs) err(0);
	var sympos = 0;
	var sstep = (sz >> 1) + (sz >> 3) + 3;
	var smask = sz - 1;
	for (var s = 0; s <= sym; ++s) {
		var sf = freq[s];
		if (sf < 1) {
			dstate[s] = -sf;
			continue;
		}
		for (i = 0; i < sf; ++i) {
			syms[sympos] = s;
			do
				sympos = sympos + sstep & smask;
			while (sympos >= ht);
		}
	}
	if (sympos) err(0);
	for (i = 0; i < sz; ++i) {
		var ns = dstate[syms[i]]++;
		nstate[i] = (ns << (nbits[i] = al - msb(ns))) - sz;
	}
	return [tpos + 7 >> 3, {
		b: al,
		s: syms,
		n: nbits,
		t: nstate
	}];
};
var rhu = function(dat, bt) {
	var i = 0, wc = -1;
	var buf = new u8(292), hb = dat[bt];
	var hw = buf.subarray(0, 256);
	var rc = buf.subarray(256, 268);
	var ri = new u16(buf.buffer, 268);
	if (hb < 128) {
		var _a = rfse(dat, bt + 1, 6), ebt = _a[0], fdt = _a[1];
		bt += hb;
		var epos = ebt << 3;
		var lb = dat[bt];
		if (!lb) err(0);
		var st1 = 0, st2 = 0, btr1 = fdt.b, btr2 = btr1;
		var fpos = (++bt << 3) - 8 + msb(lb);
		for (;;) {
			fpos -= btr1;
			if (fpos < epos) break;
			var cbt = fpos >> 3;
			st1 += (dat[cbt] | dat[cbt + 1] << 8) >> (fpos & 7) & (1 << btr1) - 1;
			hw[++wc] = fdt.s[st1];
			fpos -= btr2;
			if (fpos < epos) break;
			cbt = fpos >> 3;
			st2 += (dat[cbt] | dat[cbt + 1] << 8) >> (fpos & 7) & (1 << btr2) - 1;
			hw[++wc] = fdt.s[st2];
			btr1 = fdt.n[st1];
			st1 = fdt.t[st1];
			btr2 = fdt.n[st2];
			st2 = fdt.t[st2];
		}
		if (++wc > 255) err(0);
	} else {
		wc = hb - 127;
		for (; i < wc; i += 2) {
			var byte = dat[++bt];
			hw[i] = byte >> 4;
			hw[i + 1] = byte & 15;
		}
		++bt;
	}
	var wes = 0;
	for (i = 0; i < wc; ++i) {
		var wt = hw[i];
		if (wt > 11) err(0);
		wes += wt && 1 << wt - 1;
	}
	var mb = msb(wes) + 1;
	var ts = 1 << mb;
	var rem = ts - wes;
	if (rem & rem - 1) err(0);
	hw[wc++] = msb(rem) + 1;
	for (i = 0; i < wc; ++i) {
		var wt = hw[i];
		++rc[hw[i] = wt && mb + 1 - wt];
	}
	var hbuf = new u8(ts << 1);
	var syms = hbuf.subarray(0, ts), nb = hbuf.subarray(ts);
	ri[mb] = 0;
	for (i = mb; i > 0; --i) {
		var pv = ri[i];
		fill(nb, i, pv, ri[i - 1] = pv + rc[i] * (1 << mb - i));
	}
	if (ri[0] != ts) err(0);
	for (i = 0; i < wc; ++i) {
		var bits = hw[i];
		if (bits) {
			var code = ri[bits];
			fill(syms, i, code, ri[bits] = code + (1 << mb - bits));
		}
	}
	return [bt, {
		n: nb,
		b: mb,
		s: syms
	}];
};
var dllt = rfse(/* @__PURE__ */ new u8([
	81,
	16,
	99,
	140,
	49,
	198,
	24,
	99,
	12,
	33,
	196,
	24,
	99,
	102,
	102,
	134,
	70,
	146,
	4
]), 0, 6)[1];
var dmlt = rfse(/* @__PURE__ */ new u8([
	33,
	20,
	196,
	24,
	99,
	140,
	33,
	132,
	16,
	66,
	8,
	33,
	132,
	16,
	66,
	8,
	33,
	68,
	68,
	68,
	68,
	68,
	68,
	68,
	68,
	36,
	9
]), 0, 6)[1];
var doct = rfse(/* @__PURE__ */ new u8([
	32,
	132,
	16,
	66,
	102,
	70,
	68,
	68,
	68,
	68,
	36,
	73,
	2
]), 0, 5)[1];
var b2bl = function(b, s) {
	var len = b.length, bl = new i32(len);
	for (var i = 0; i < len; ++i) {
		bl[i] = s;
		s += 1 << b[i];
	}
	return bl;
};
var llb = /* @__PURE__ */ new u8((/* @__PURE__ */ new i32([
	0,
	0,
	0,
	0,
	16843009,
	50528770,
	134678020,
	202050057,
	269422093
])).buffer, 0, 36);
var llbl = /* @__PURE__ */ b2bl(llb, 0);
var mlb = /* @__PURE__ */ new u8((/* @__PURE__ */ new i32([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	16843009,
	50528770,
	117769220,
	185207048,
	252579084,
	16
])).buffer, 0, 53);
var mlbl = /* @__PURE__ */ b2bl(mlb, 3);
var dhu = function(dat, out, hu) {
	var len = dat.length, ss = out.length, lb = dat[len - 1], msk = (1 << hu.b) - 1, eb = -hu.b;
	if (!lb) err(0);
	var st = 0, btr = hu.b, pos = (len << 3) - 8 + msb(lb) - btr, i = -1;
	for (; pos > eb && i < ss;) {
		var cbt = pos >> 3;
		var val = (dat[cbt] | dat[cbt + 1] << 8 | dat[cbt + 2] << 16) >> (pos & 7);
		st = (st << btr | val) & msk;
		out[++i] = hu.s[st];
		pos -= btr = hu.n[st];
	}
	if (pos != eb || i + 1 != ss) err(0);
};
var dhu4 = function(dat, out, hu) {
	var bt = 6;
	var sz1 = out.length + 3 >> 2, sz2 = sz1 << 1, sz3 = sz1 + sz2;
	dhu(dat.subarray(bt, bt += dat[0] | dat[1] << 8), out.subarray(0, sz1), hu);
	dhu(dat.subarray(bt, bt += dat[2] | dat[3] << 8), out.subarray(sz1, sz2), hu);
	dhu(dat.subarray(bt, bt += dat[4] | dat[5] << 8), out.subarray(sz2, sz3), hu);
	dhu(dat.subarray(bt), out.subarray(sz3), hu);
};
var rzb = function(dat, st, out) {
	var _a;
	var bt = st.b;
	var b0 = dat[bt], btype = b0 >> 1 & 3;
	st.l = b0 & 1;
	var sz = b0 >> 3 | dat[bt + 1] << 5 | dat[bt + 2] << 13;
	var ebt = (bt += 3) + sz;
	if (btype == 1) {
		if (bt >= dat.length) return;
		st.b = bt + 1;
		if (out) {
			fill(out, dat[bt], st.y, st.y += sz);
			return out;
		}
		return fill(new u8(sz), dat[bt]);
	}
	if (ebt > dat.length) return;
	if (btype == 0) {
		st.b = ebt;
		if (out) {
			out.set(dat.subarray(bt, ebt), st.y);
			st.y += sz;
			return out;
		}
		return slc(dat, bt, ebt);
	}
	if (btype == 2) {
		var b3 = dat[bt], lbt = b3 & 3, sf = b3 >> 2 & 3;
		var lss = b3 >> 4, lcs = 0, s4 = 0;
		if (lbt < 2) if (sf & 1) lss |= dat[++bt] << 4 | (sf & 2 && dat[++bt] << 12);
		else lss = b3 >> 3;
		else {
			s4 = sf;
			if (sf < 2) lss |= (dat[++bt] & 63) << 4, lcs = dat[bt] >> 6 | dat[++bt] << 2;
			else if (sf == 2) lss |= dat[++bt] << 4 | (dat[++bt] & 3) << 12, lcs = dat[bt] >> 2 | dat[++bt] << 6;
			else lss |= dat[++bt] << 4 | (dat[++bt] & 63) << 12, lcs = dat[bt] >> 6 | dat[++bt] << 2 | dat[++bt] << 10;
		}
		++bt;
		var buf = out ? out.subarray(st.y, st.y + st.m) : new u8(st.m);
		var spl = buf.length - lss;
		if (lbt == 0) buf.set(dat.subarray(bt, bt += lss), spl);
		else if (lbt == 1) fill(buf, dat[bt++], spl);
		else {
			var hu = st.h;
			if (lbt == 2) {
				var hud = rhu(dat, bt);
				lcs += bt - (bt = hud[0]);
				st.h = hu = hud[1];
			} else if (!hu) err(0);
			(s4 ? dhu4 : dhu)(dat.subarray(bt, bt += lcs), buf.subarray(spl), hu);
		}
		var ns = dat[bt++];
		if (ns) {
			if (ns == 255) ns = (dat[bt++] | dat[bt++] << 8) + 32512;
			else if (ns > 127) ns = ns - 128 << 8 | dat[bt++];
			var scm = dat[bt++];
			if (scm & 3) err(0);
			var dts = [
				dmlt,
				doct,
				dllt
			];
			for (var i = 2; i > -1; --i) {
				var md = scm >> (i << 1) + 2 & 3;
				if (md == 1) {
					var rbuf = new u8([
						0,
						0,
						dat[bt++]
					]);
					dts[i] = {
						s: rbuf.subarray(2, 3),
						n: rbuf.subarray(0, 1),
						t: new u16(rbuf.buffer, 0, 1),
						b: 0
					};
				} else if (md == 2) _a = rfse(dat, bt, 9 - (i & 1)), bt = _a[0], dts[i] = _a[1];
				else if (md == 3) {
					if (!st.t) err(0);
					dts[i] = st.t[i];
				}
			}
			var _b = st.t = dts, mlt = _b[0], oct = _b[1], llt = _b[2];
			var lb = dat[ebt - 1];
			if (!lb) err(0);
			var spos = (ebt << 3) - 8 + msb(lb) - llt.b, cbt = spos >> 3, oubt = 0;
			var lst = (dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << llt.b) - 1;
			cbt = (spos -= oct.b) >> 3;
			var ost = (dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << oct.b) - 1;
			cbt = (spos -= mlt.b) >> 3;
			var mst = (dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << mlt.b) - 1;
			for (++ns; --ns;) {
				var llc = llt.s[lst];
				var lbtr = llt.n[lst];
				var mlc = mlt.s[mst];
				var mbtr = mlt.n[mst];
				var ofc = oct.s[ost];
				var obtr = oct.n[ost];
				cbt = (spos -= ofc) >> 3;
				var ofp = 1 << ofc;
				var off = ofp + ((dat[cbt] | dat[cbt + 1] << 8 | dat[cbt + 2] << 16 | dat[cbt + 3] << 24) >>> (spos & 7) & ofp - 1);
				cbt = (spos -= mlb[mlc]) >> 3;
				var ml = mlbl[mlc] + ((dat[cbt] | dat[cbt + 1] << 8 | dat[cbt + 2] << 16) >> (spos & 7) & (1 << mlb[mlc]) - 1);
				cbt = (spos -= llb[llc]) >> 3;
				var ll = llbl[llc] + ((dat[cbt] | dat[cbt + 1] << 8 | dat[cbt + 2] << 16) >> (spos & 7) & (1 << llb[llc]) - 1);
				cbt = (spos -= lbtr) >> 3;
				lst = llt.t[lst] + ((dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << lbtr) - 1);
				cbt = (spos -= mbtr) >> 3;
				mst = mlt.t[mst] + ((dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << mbtr) - 1);
				cbt = (spos -= obtr) >> 3;
				ost = oct.t[ost] + ((dat[cbt] | dat[cbt + 1] << 8) >> (spos & 7) & (1 << obtr) - 1);
				if (off > 3) {
					st.o[2] = st.o[1];
					st.o[1] = st.o[0];
					st.o[0] = off -= 3;
				} else {
					var idx = off - (ll != 0);
					if (idx) {
						off = idx == 3 ? st.o[0] - 1 : st.o[idx];
						if (idx > 1) st.o[2] = st.o[1];
						st.o[1] = st.o[0];
						st.o[0] = off;
					} else off = st.o[0];
				}
				for (var i = 0; i < ll; ++i) buf[oubt + i] = buf[spl + i];
				oubt += ll, spl += ll;
				var stin = oubt - off;
				if (stin < 0) {
					var len = -stin;
					var bs = st.e + stin;
					if (len > ml) len = ml;
					for (var i = 0; i < len; ++i) buf[oubt + i] = st.w[bs + i];
					oubt += len, ml -= len, stin = 0;
				}
				for (var i = 0; i < ml; ++i) buf[oubt + i] = buf[stin + i];
				oubt += ml;
			}
			if (oubt != spl) while (spl < buf.length) buf[oubt++] = buf[spl++];
			else oubt = buf.length;
			if (out) st.y += oubt;
			else buf = slc(buf, 0, oubt);
		} else if (out) {
			st.y += lss;
			if (spl) for (var i = 0; i < lss; ++i) buf[i] = buf[spl + i];
		} else if (spl) buf = slc(buf, spl);
		st.b = ebt;
		return buf;
	}
	err(2);
};
var cct = function(bufs, ol) {
	if (bufs.length == 1) return bufs[0];
	var buf = new u8(ol);
	for (var i = 0, b = 0; i < bufs.length; ++i) {
		var chk = bufs[i];
		buf.set(chk, b);
		b += chk.length;
	}
	return buf;
};
/**
* Decompresses Zstandard data
* @param dat The input data
* @param buf The output buffer. If unspecified, the function will allocate
*            exactly enough memory to fit the decompressed data. If your
*            data has multiple frames and you know the output size, specifying
*            it will yield better performance.
* @returns The decompressed data
*/
function decompress(dat, buf) {
	var bufs = [], nb = +!buf;
	var bt = 0, ol = 0;
	for (; dat.length;) {
		var st = rzfh(dat, nb || buf);
		if (typeof st == "object") {
			if (nb) {
				buf = null;
				if (st.w.length == st.u) {
					bufs.push(buf = st.w);
					ol += st.u;
				}
			} else {
				bufs.push(buf);
				st.e = 0;
			}
			for (; !st.l;) {
				var blk = rzb(dat, st, buf);
				if (!blk) err(5);
				if (buf) st.e = st.y;
				else {
					bufs.push(blk);
					ol += blk.length;
					cpw(st.w, 0, blk.length);
					st.w.set(blk, st.w.length - blk.length);
				}
			}
			bt = st.b + st.c * 4;
		} else bt = st;
		dat = dat.subarray(bt);
	}
	return cct(bufs, ol);
}
//#endregion
//#region lib/studio/rbxunion.ts
/** Forma das uniões do Roblox a partir do arquivo .rbxmx/.rbxlx.
*  A malha visual fica nos servidores do Roblox, mas o arquivo traz a colisão ("PhysicalConfigData"):
*  "CSGPHS" + versão + bloco zstd com as cascas convexas. Dentro: n.º de cascas, n.º de pontos, …, caixa (6 floats),
*  um bloco de cabeçalho e depois todos os pontos (x,y,z em float) no espaço da união, casca após casca.
*  Os pontos de cada casca vêm em sequência; a divisão é achada testando onde os pontos deixam de ser todos cantos. */
var MAGIC$1 = [
	67,
	83,
	71,
	80,
	72,
	83
];
var ZSTD = [
	40,
	181,
	47,
	253
];
function b64$1(s) {
	const t = s.replace(/\s+/g, "");
	if (typeof atob === "function") {
		const bin = atob(t);
		const out = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
		return out;
	}
	return new Uint8Array(globalThis.Buffer.from(t, "base64"));
}
var find = (b, sig, from = 0) => {
	for (let i = from; i + sig.length <= b.length; i++) {
		let ok = true;
		for (let k = 0; k < sig.length; k++) if (b[i + k] !== sig[k]) {
			ok = false;
			break;
		}
		if (ok) return i;
	}
	return -1;
};
/** Cascas convexas (cada uma: lista plana x,y,z) no espaço da união, ou null se o formato não for reconhecido. */
function hullsFromPhysics(base64) {
	try {
		const raw = b64$1(base64);
		if (raw.length < 16 || MAGIC$1.some((c, k) => raw[k] !== c)) return null;
		const z = find(raw, ZSTD, 6);
		if (z < 0) return null;
		const d = decompress(raw.subarray(z));
		const v = new DataView(d.buffer, d.byteOffset, d.byteLength);
		if (d.length < 60) return null;
		const n = v.getUint32(0, true), count = v.getUint32(4, true), head = v.getUint32(28, true), bytes = v.getUint32(32, true);
		const start = 60 + head;
		if (!n || !count || n > 4096 || bytes !== count * 12 || start + bytes !== d.length) return null;
		const pts = [];
		for (let k = 0; k < count; k++) {
			const o = start + k * 12;
			pts.push(new Vector3(v.getFloat32(o, true), v.getFloat32(o + 4, true), v.getFloat32(o + 8, true)));
		}
		if (pts.some((p) => !Number.isFinite(p.x + p.y + p.z))) return null;
		return split(pts, n).map((h) => h.flatMap((p) => [
			r4(p.x),
			r4(p.y),
			r4(p.z)
		]));
	} catch {
		return null;
	}
}
var r4 = (n) => Math.round(n * 1e4) / 1e4;
/** Todos os pontos são cantos da casca deles? */
function allCorners(list) {
	if (list.length < 4) return false;
	const h = new ConvexHull().setFromPoints(list);
	const used = /* @__PURE__ */ new Set();
	for (const f of h.faces) {
		let e = f.edge;
		do {
			used.add(e.head().point);
			e = e.next;
		} while (e !== f.edge);
	}
	return used.size === list.length;
}
/** Divide os pontos em cascas seguidas: a mais longa possível a cada vez (busca binária, a regra é monótona). */
function split(pts, n) {
	if (n <= 1) return [pts];
	const out = [];
	let s = 0;
	while (s < pts.length) {
		let lo = Math.min(s + 4, pts.length), hi = pts.length;
		if (!allCorners(pts.slice(s, lo))) {
			out.push(pts.slice(s, Math.max(lo, s + 4)));
			s = Math.max(lo, s + 4);
			continue;
		}
		while (lo < hi) {
			const mid = lo + hi + 1 >> 1;
			if (allCorners(pts.slice(s, mid))) lo = mid;
			else hi = mid - 1;
		}
		out.push(pts.slice(s, lo));
		s = lo;
	}
	return out;
}
//#endregion
//#region lib/studio/rbxbinary.ts
/** Leitor do formato binário do Roblox (.rbxm/.rbxl e o "ChildData2" das uniões, que guarda as peças originais).
*  Converte para a mesma árvore que o leitor de XML usa (Item → Properties → propriedade com o nome),
*  assim o resto da importação é igual para .rbxmx e .rbxm.
*  Formato: cabeçalho "<roblox!" + pedaços (META, SSTR, INST, PROP, PRNT, END), cada um comprimido com LZ4 ou zstd. */
var el = (tag, attrs = {}, text = "", kids = []) => ({
	tag,
	attrs,
	kids,
	text
});
var MAGIC = "<roblox!";
function isBinaryRbx(bytes) {
	if (bytes.length < 16) return false;
	for (let i = 0; i < 8; i++) if (bytes[i] !== MAGIC.charCodeAt(i)) return false;
	return true;
}
function lz4(src, size) {
	const out = new Uint8Array(size);
	let i = 0, o = 0;
	while (i < src.length) {
		const tok = src[i++];
		let lit = tok >> 4;
		if (lit === 15) {
			let b;
			do {
				b = src[i++];
				lit += b;
			} while (b === 255);
		}
		out.set(src.subarray(i, i + lit), o);
		i += lit;
		o += lit;
		if (i >= src.length) break;
		const off = src[i] | src[i + 1] << 8;
		i += 2;
		let len = tok & 15;
		if (len === 15) {
			let b;
			do {
				b = src[i++];
				len += b;
			} while (b === 255);
		}
		len += 4;
		let from = o - off;
		if (off === 0 || from < 0) throw new Error("LZ4 inválido");
		for (let k = 0; k < len; k++) out[o++] = out[from++];
	}
	return out;
}
var Reader = class {
	constructor(b) {
		this.b = b;
		this.i = 0;
		this.v = new DataView(b.buffer, b.byteOffset, b.byteLength);
	}
	u8() {
		return this.b[this.i++];
	}
	u16() {
		const n = this.v.getUint16(this.i, true);
		this.i += 2;
		return n;
	}
	i16() {
		const n = this.v.getInt16(this.i, true);
		this.i += 2;
		return n;
	}
	u32() {
		const n = this.v.getUint32(this.i, true);
		this.i += 4;
		return n;
	}
	f32() {
		const n = this.v.getFloat32(this.i, true);
		this.i += 4;
		return n;
	}
	f64() {
		const n = this.v.getFloat64(this.i, true);
		this.i += 8;
		return n;
	}
	bytes(n) {
		const s = this.b.subarray(this.i, this.i + n);
		this.i += n;
		return s;
	}
	str() {
		return this.bytes(this.u32());
	}
	/** n valores de k bytes guardados "intercalados" (todos os 1.º bytes, depois todos os 2.º…), big-endian */
	inter(n, k) {
		const raw = this.bytes(n * k);
		const out = [];
		for (let a = 0; a < n; a++) {
			const v = [];
			for (let c = 0; c < k; c++) v.push(raw[c * n + a]);
			out.push(v);
		}
		return out;
	}
	u32s(n) {
		return this.inter(n, 4).map((b) => (b[0] << 24 | b[1] << 16 | b[2] << 8 | b[3]) >>> 0);
	}
	i32s(n) {
		return this.u32s(n).map((u) => u >>> 1 ^ -(u & 1));
	}
	f32s(n) {
		const dv = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4));
		return this.u32s(n).map((u) => {
			dv.setUint32(0, (u >>> 1 | u << 31) >>> 0);
			return dv.getFloat32(0);
		});
	}
	refs(n) {
		const d = this.i32s(n);
		let acc = 0;
		return d.map((x) => acc += x);
	}
};
var td = new TextDecoder();
var b64 = (u) => {
	let s = "";
	for (let i = 0; i < u.length; i += 32768) s += String.fromCharCode(...u.subarray(i, i + 32768));
	return btoa(s);
};
var num$1 = (n) => String(Math.round(n * 1e6) / 1e6);
var NORMALS = [
	[
		1,
		0,
		0
	],
	[
		0,
		1,
		0
	],
	[
		0,
		0,
		1
	],
	[
		-1,
		0,
		0
	],
	[
		0,
		-1,
		0
	],
	[
		0,
		0,
		-1
	]
];
/** CFrames "redondos" do Roblox: id = 6 × (eixo do lado direito) + (eixo de cima) + 1 */
function specialRotation(id) {
	const x = NORMALS[Math.floor((id - 1) / 6)], y = NORMALS[(id - 1) % 6];
	if (!x || !y) return [
		1,
		0,
		0,
		0,
		1,
		0,
		0,
		0,
		1
	];
	const z = [
		x[1] * y[2] - x[2] * y[1],
		x[2] * y[0] - x[0] * y[2],
		x[0] * y[1] - x[1] * y[0]
	];
	return [
		x[0],
		y[0],
		z[0],
		x[1],
		y[1],
		z[1],
		x[2],
		y[2],
		z[2]
	];
}
/** Lê o arquivo binário e devolve o nó <roblox> (com Items e SharedStrings), igual ao do XML. */
function parseBinaryRbx(bytes) {
	if (!isBinaryRbx(bytes)) throw new Error("Arquivo binário do Roblox inválido.");
	const h = new Reader(bytes);
	h.i = 14;
	h.u16();
	h.u32();
	h.u32();
	h.i += 8;
	const classes = /* @__PURE__ */ new Map();
	const items = /* @__PURE__ */ new Map();
	const props = /* @__PURE__ */ new Map();
	const parentOf = /* @__PURE__ */ new Map();
	const shared = [];
	let order = [];
	while (h.i + 16 <= bytes.length) {
		const name = td.decode(h.bytes(4));
		const clen = h.u32(), ulen = h.u32();
		h.u32();
		const body = clen === 0 ? h.bytes(ulen) : h.bytes(clen);
		if (name === "END\0") break;
		let data;
		try {
			data = clen === 0 ? body : body[0] === 40 && body[1] === 181 && body[2] === 47 && body[3] === 253 ? decompress(body) : lz4(body, ulen);
		} catch {
			continue;
		}
		const r = new Reader(data);
		try {
			if (name === "SSTR") {
				r.u32();
				const n = r.u32();
				for (let k = 0; k < n; k++) {
					const md5 = r.bytes(16);
					const v = r.str();
					const id = new Uint8Array(16);
					new DataView(id.buffer).setUint32(0, k + 1);
					id.set(md5.subarray(4, 16), 4);
					shared.push({
						key: b64(id),
						value: b64(v)
					});
				}
			} else if (name === "INST") {
				const id = r.u32();
				const cname = td.decode(r.str());
				const service = r.u8() === 1;
				const n = r.u32();
				const ids = r.refs(n);
				classes.set(id, {
					name: cname,
					ids,
					service
				});
				for (const ref of ids) {
					const p = el("Properties");
					const it = el("Item", {
						class: cname,
						referent: "RBX" + ref
					}, "", [p]);
					items.set(ref, it);
					props.set(ref, p);
					order.push(ref);
				}
			} else if (name === "PROP") {
				const c = classes.get(r.u32());
				const pname = td.decode(r.str());
				const type = r.u8();
				if (c) readProp(r, type, pname, c.ids, props, shared);
			} else if (name === "PRNT") {
				r.u8();
				const n = r.u32();
				const kids = r.refs(n), parents = r.refs(n);
				for (let k = 0; k < n; k++) parentOf.set(kids[k], parents[k]);
			}
		} catch {}
	}
	const root = el("roblox", { version: "4" });
	for (const ref of order) {
		const it = items.get(ref);
		const p = parentOf.get(ref);
		((p !== void 0 && p >= 0 ? items.get(p) : void 0) ?? root).kids.push(it);
	}
	if (shared.length) root.kids.push(el("SharedStrings", {}, "", shared.map((s) => el("SharedString", { md5: s.key }, s.value))));
	return root;
}
function readProp(r, type, name, ids, props, shared) {
	const n = ids.length;
	const put = (k, e) => {
		e.attrs.name = name;
		props.get(ids[k])?.kids.push(e);
	};
	const vec = (tag, keys, arrs) => {
		for (let k = 0; k < n; k++) put(k, el(tag, {}, "", keys.map((x, a) => el(x, {}, num$1(arrs[a][k])))));
	};
	switch (type) {
		case 1:
			for (let k = 0; k < n; k++) {
				const raw = r.str();
				const binary = /^(Tags|AttributesSerialize|ChildData|MeshData|PhysicsData|SerializedOverrides|InitialSize|ModelMeshData)$/.test(name);
				const text = binary ? b64(raw) : td.decode(raw);
				put(k, /Id$|ID$|Texture|Image|Content|SoundId|AnimationId/.test(name) && !binary ? el("Content", {}, "", [el("url", {}, text)]) : el(binary ? "BinaryString" : "string", {}, text));
			}
			break;
		case 2:
			for (let k = 0; k < n; k++) put(k, el("bool", {}, r.u8() ? "true" : "false"));
			break;
		case 3: {
			const v = r.i32s(n);
			for (let k = 0; k < n; k++) put(k, el("int", {}, String(v[k])));
			break;
		}
		case 4: {
			const v = r.f32s(n);
			for (let k = 0; k < n; k++) put(k, el("float", {}, num$1(v[k])));
			break;
		}
		case 5:
			for (let k = 0; k < n; k++) put(k, el("double", {}, num$1(r.f64())));
			break;
		case 6: {
			const s = r.f32s(n), o = r.i32s(n);
			for (let k = 0; k < n; k++) put(k, el("UDim", {}, "", [el("S", {}, num$1(s[k])), el("O", {}, String(o[k]))]));
			break;
		}
		case 7: {
			const xs = r.f32s(n), ys = r.f32s(n), xo = r.i32s(n), yo = r.i32s(n);
			for (let k = 0; k < n; k++) put(k, el("UDim2", {}, "", [
				el("XS", {}, num$1(xs[k])),
				el("XO", {}, String(xo[k])),
				el("YS", {}, num$1(ys[k])),
				el("YO", {}, String(yo[k]))
			]));
			break;
		}
		case 11: {
			const v = r.u32s(n);
			for (let k = 0; k < n; k++) put(k, el("int", {}, String(v[k])));
			break;
		}
		case 12:
			vec("Color3", [
				"R",
				"G",
				"B"
			], [
				r.f32s(n),
				r.f32s(n),
				r.f32s(n)
			]);
			break;
		case 13:
			vec("Vector2", ["X", "Y"], [r.f32s(n), r.f32s(n)]);
			break;
		case 14:
			vec("Vector3", [
				"X",
				"Y",
				"Z"
			], [
				r.f32s(n),
				r.f32s(n),
				r.f32s(n)
			]);
			break;
		case 16:
		case 30: {
			if (type === 30) r.u8();
			const rots = [];
			for (let k = 0; k < n; k++) {
				const id = r.u8();
				rots.push(id === 0 ? Array.from({ length: 9 }, () => r.f32()) : specialRotation(id));
			}
			const x = r.f32s(n), y = r.f32s(n), z = r.f32s(n);
			const keys = [
				"R00",
				"R01",
				"R02",
				"R10",
				"R11",
				"R12",
				"R20",
				"R21",
				"R22"
			];
			for (let k = 0; k < n; k++) put(k, el("CoordinateFrame", {}, "", [
				el("X", {}, num$1(x[k])),
				el("Y", {}, num$1(y[k])),
				el("Z", {}, num$1(z[k])),
				...keys.map((q, a) => el(q, {}, num$1(rots[k][a])))
			]));
			break;
		}
		case 18: {
			const v = r.u32s(n);
			for (let k = 0; k < n; k++) put(k, el("token", {}, String(v[k])));
			break;
		}
		case 19: {
			const v = r.refs(n);
			for (let k = 0; k < n; k++) put(k, el("Ref", {}, v[k] < 0 ? "null" : "RBX" + v[k]));
			break;
		}
		case 22:
			for (let k = 0; k < n; k++) {
				const c = r.u32();
				const parts = [];
				for (let q = 0; q < c; q++) {
					const t = r.f32(), R = r.f32(), G = r.f32(), B = r.f32(), e = r.f32();
					parts.push([
						t,
						R,
						G,
						B,
						e
					].map(num$1).join(" "));
				}
				put(k, el("ColorSequence", {}, parts.join(" ") + " "));
			}
			break;
		case 26: {
			const R = r.bytes(n), G = r.bytes(n), B = r.bytes(n);
			for (let k = 0; k < n; k++) put(k, el("Color3uint8", {}, String((255 << 24 | R[k] << 16 | G[k] << 8 | B[k]) >>> 0)));
			break;
		}
		case 28: {
			const v = r.u32s(n);
			for (let k = 0; k < n; k++) {
				const s = shared[v[k]];
				if (s) put(k, el("SharedString", {}, s.key));
			}
			break;
		}
		case 32:
			for (let k = 0; k < n; k++) {
				const fam = td.decode(r.str());
				const w = r.u16();
				const st = r.u8();
				r.str();
				put(k, el("Font", {}, "", [
					el("Family", {}, "", [el("url", {}, fam)]),
					el("Weight", {}, String(w)),
					el("Style", {}, st ? "Italic" : "Normal")
				]));
			}
			break;
		default: break;
	}
}
//#endregion
//#region lib/studio/rbxlx.ts
/** Exporta e importa projetos no formato XML do Roblox (.rbxlx = lugar, .rbxmx = modelo).
*  O arquivo abre no Roblox Studio (Arquivo → Abrir do arquivo) e volta para o Studio Lite. */
/** No arquivo do Roblox, peça negada exportada daqui vem com este começo no nome (lá: selecione e use Negar). */
var NEG_PREFIX = "[Negar] ";
/** União levada como peças (pelo plugin Level Up no Roblox Studio ou exportada daqui): Model com este começo no nome.
*  Ao importar, vira união de novo com as peças e cores originais; no Roblox, o plugin refaz a união. */
var UNION_PREFIX = "[União] ";
/** Models "[União] Nome" → UnionOperation (de dentro para fora, para uniões dentro de uniões). */
function reunite(insts) {
	let p = {
		v: 1,
		name: "x",
		insts
	};
	let count = 0;
	const byId = (id) => id ? p.insts.find((i) => i.id === id) : void 0;
	const depth = (i) => {
		let d = 0;
		let x = i;
		while (x && x.parent && d < 200) {
			x = byId(x.parent);
			d++;
		}
		return d;
	};
	const models = p.insts.filter((i) => i.cls === "Model" && i.name.startsWith("[União] ")).sort((a, b) => depth(b) - depth(a));
	for (const m of models) {
		const kids = p.insts.filter((i) => i.parent === m.id && isPart(i.cls) && i.cls !== "SpawnLocation");
		if (kids.length < 2) continue;
		const r = unite(p, kids.map((k) => k.id));
		if (typeof r === "string") continue;
		const name = m.name.slice(8).trim() || "Union";
		p = {
			...r.project,
			insts: r.project.insts.filter((i) => i.id !== m.id).map((i) => i.id === r.id ? {
				...i,
				name,
				parent: m.parent
			} : i.parent === m.id ? {
				...i,
				parent: r.id
			} : i)
		};
		count++;
	}
	return {
		insts: p.insts,
		count
	};
}
var esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
var num = (n) => String(Math.round(Number(n) * 1e4) / 1e4);
var cdata = (s) => "<![CDATA[" + s.replace(/]]>/g, "]]]]><![CDATA[>") + "]]>";
function color3uint8([r, g, b]) {
	return String((255 << 24 >>> 0) + ((r & 255) << 16) + ((g & 255) << 8) + (b & 255));
}
var FONT_FAMILY = {
	SourceSans: "SourceSansPro",
	Gotham: "GothamSSm",
	FredokaOne: "FredokaOne",
	LuckiestGuy: "LuckiestGuy",
	Bangers: "Bangers",
	Roboto: "Roboto",
	Oswald: "Oswald",
	Arial: "Arial"
};
var FILL = {
	Horizontal: 0,
	Vertical: 1
}, HALIGN = {
	Center: 0,
	Left: 1,
	Right: 2
}, VALIGN = {
	Center: 0,
	Top: 1,
	Bottom: 2
}, SORT = {
	Name: 0,
	Custom: 1,
	LayoutOrder: 2
}, STROKE = {
	Contextual: 0,
	Border: 1
};
var XALIGN = {
	Left: 0,
	Right: 1,
	Center: 2
}, YALIGN = {
	Top: 0,
	Center: 1,
	Bottom: 2
}, SCALE = {
	Stretch: 0,
	Fit: 3,
	Crop: 4
};
var FACE = {
	Right: 0,
	Top: 1,
	Back: 2,
	Left: 3,
	Bottom: 4,
	Front: 5
}, DDT = {
	Viewer: 0,
	Subject: 1,
	None: 2
}, HDT = {
	DisplayWhenDamaged: 0,
	AlwaysOn: 1,
	AlwaysOff: 2
};
var c3 = (name, c) => `<Color3 name="${name}"><R>${num(c[0] / 255)}</R><G>${num(c[1] / 255)}</G><B>${num(c[2] / 255)}</B></Color3>`;
var udim2 = (name, u) => `<UDim2 name="${name}"><XS>${num(u[0])}</XS><XO>${Math.round(u[1])}</XO><YS>${num(u[2])}</YS><YO>${Math.round(u[3])}</YO></UDim2>`;
function guiXml(i) {
	const p = i.props, out = [];
	if (i.cls === "ScreenGui") out.push(`<bool name="Enabled">${p.Enabled !== false}</bool>`, "<bool name=\"ResetOnSpawn\">true</bool>");
	if (i.cls === "BillboardGui") {
		const v3x = (n) => {
			const o = p[n] ?? [
				0,
				0,
				0
			];
			return `<Vector3 name="${n}"><X>${num(o[0])}</X><Y>${num(o[1])}</Y><Z>${num(o[2])}</Z></Vector3>`;
		};
		const so = p.SizeOffset ?? [0, 0];
		out.push(`<bool name="Enabled">${p.Enabled !== false}</bool>`, udim2("Size", p.Size ?? [
			0,
			0,
			0,
			0
		]), `<Vector2 name="SizeOffset"><X>${num(so[0])}</X><Y>${num(so[1])}</Y></Vector2>`, v3x("StudsOffset"), v3x("StudsOffsetWorldSpace"), v3x("ExtentsOffset"), v3x("ExtentsOffsetWorldSpace"), `<bool name="AlwaysOnTop">${!!p.AlwaysOnTop}</bool>`, `<bool name="ClipsDescendants">${!!p.ClipsDescendants}</bool>`, `<float name="MaxDistance">${Number(p.MaxDistance) > 0 ? num(Number(p.MaxDistance)) : "INF"}</float>`, `<float name="LightInfluence">${num(Number(p.LightInfluence ?? 1))}</float>`, `<float name="Brightness">${num(Number(p.Brightness ?? 1))}</float>`);
	}
	if (i.cls === "SurfaceGui") out.push(`<bool name="Enabled">${p.Enabled !== false}</bool>`, `<token name="Face">${FACE[p.Face] ?? 5}</token>`, "<token name=\"SizingMode\">1</token>", `<float name="PixelsPerStud">${num(Number(p.PixelsPerStud) || 50)}</float>`, `<bool name="AlwaysOnTop">${!!p.AlwaysOnTop}</bool>`);
	if (i.cls === "Humanoid") out.push(`<float name="HipHeight">${num(Number(p.HipHeight ?? 2))}</float>`, `<float name="Health_XML">${num(Number(p.Health) || 100)}</float>`, `<float name="MaxHealth">${num(Number(p.MaxHealth) || 100)}</float>`, `<float name="WalkSpeed">${num(Number(p.WalkSpeed) || 16)}</float>`, `<string name="DisplayName">${esc(String(p.DisplayName ?? ""))}</string>`, `<token name="DisplayDistanceType">${DDT[p.DisplayDistanceType] ?? 0}</token>`, `<float name="NameDisplayDistance">${num(Number(p.NameDisplayDistance ?? 100))}</float>`, `<float name="HealthDisplayDistance">${num(Number(p.HealthDisplayDistance ?? 100))}</float>`, `<token name="HealthDisplayType">${HDT[p.HealthDisplayType] ?? 0}</token>`);
	if (i.cls === "UIStroke") out.push(c3("Color", p.Color), `<float name="Thickness">${num(p.Thickness)}</float>`, `<float name="Transparency">${num(p.Transparency)}</float>`, `<token name="ApplyStrokeMode">${STROKE[p.ApplyStrokeMode] ?? 0}</token>`, `<bool name="Enabled">${p.Enabled !== false}</bool>`);
	if (i.cls === "UIGradient") {
		const seq = Array.isArray(p.Color) ? p.Color : [[
			0,
			255,
			255,
			255
		], [
			1,
			0,
			0,
			0
		]];
		out.push(`<ColorSequence name="Color">${seq.map((k) => [
			k[0],
			k[1] / 255,
			k[2] / 255,
			k[3] / 255,
			0
		].map(num).join(" ")).join(" ")} </ColorSequence>`, `<float name="Rotation">${num(p.Rotation)}</float>`, `<bool name="Enabled">${p.Enabled !== false}</bool>`);
	}
	if (i.cls === "UIListLayout") out.push(`<token name="FillDirection">${FILL[p.FillDirection] ?? 1}</token>`, `<UDim name="Padding"><S>${num(p.Padding[0])}</S><O>${Math.round(p.Padding[1])}</O></UDim>`, `<token name="HorizontalAlignment">${HALIGN[p.HorizontalAlignment] ?? 0}</token>`, `<token name="VerticalAlignment">${VALIGN[p.VerticalAlignment] ?? 1}</token>`, `<token name="SortOrder">${SORT[p.SortOrder] ?? 2}</token>`);
	if (i.cls === "UICorner") out.push(`<UDim name="CornerRadius"><S>${num(p.CornerRadius[0])}</S><O>${Math.round(p.CornerRadius[1])}</O></UDim>`);
	if ([
		"Frame",
		"TextLabel",
		"TextButton",
		"ImageLabel",
		"ImageButton"
	].includes(i.cls)) {
		out.push(udim2("Position", p.Position), udim2("Size", p.Size), `<Vector2 name="AnchorPoint"><X>${num(p.AnchorPoint[0])}</X><Y>${num(p.AnchorPoint[1])}</Y></Vector2>`, c3("BackgroundColor3", p.BackgroundColor3), `<float name="BackgroundTransparency">${num(p.BackgroundTransparency)}</float>`, `<int name="BorderSizePixel">${Math.round(p.BorderSizePixel)}</int>`, `<bool name="Visible">${p.Visible !== false}</bool>`, `<bool name="ClipsDescendants">${p.ClipsDescendants === true}</bool>`, `<int name="ZIndex">${Math.round(p.ZIndex)}</int>`, `<int name="LayoutOrder">${Math.round(Number(p.LayoutOrder) || 0)}</int>`, `<float name="Rotation">${num(p.Rotation)}</float>`);
		if (i.cls === "TextLabel" || i.cls === "TextButton") out.push(`<string name="Text">${esc(String(p.Text ?? ""))}</string>`, c3("TextColor3", p.TextColor3), `<float name="TextSize">${num(p.TextSize)}</float>`, `<Font name="FontFace"><Family><url>rbxasset://fonts/families/${FONT_FAMILY[p.Font] ?? "SourceSansPro"}.json</url></Family><Weight>400</Weight><Style>Normal</Style></Font>`, `<bool name="TextScaled">${!!p.TextScaled}</bool>`, `<bool name="TextWrapped">${!!p.TextWrapped}</bool>`, `<token name="TextXAlignment">${XALIGN[p.TextXAlignment] ?? 2}</token>`, `<token name="TextYAlignment">${YALIGN[p.TextYAlignment] ?? 1}</token>`);
		if (i.cls === "ImageLabel" || i.cls === "ImageButton") out.push(`<Content name="Image"><url>${esc(String(p.Image ?? ""))}</url></Content>`, c3("ImageColor3", p.ImageColor3), `<float name="ImageTransparency">${num(p.ImageTransparency)}</float>`, `<token name="ScaleType">${SCALE[p.ScaleType] ?? 3}</token>`);
	}
	return out;
}
function toolGripXml(p) {
	const v = p.GripPos ?? [
		0,
		0,
		0
	], m = rotMatrix(p.GripOrientation ?? [
		0,
		0,
		0
	]);
	return `<CoordinateFrame name="Grip"><X>${num(v[0])}</X><Y>${num(v[1])}</Y><Z>${num(v[2])}</Z>${[
		"R00",
		"R01",
		"R02",
		"R10",
		"R11",
		"R12",
		"R20",
		"R21",
		"R22"
	].map((k, j) => `<${k}>${num(m[j])}</${k}>`).join("")}</CoordinateFrame>`;
}
function propsXml(i) {
	const p = i.props, out = [`<string name="Name">${esc(i.name)}</string>`];
	if (isPart(i.cls)) {
		const [x, y, z] = p.Position, m = rotMatrix(p.Orientation);
		out.push(`<CoordinateFrame name="CFrame"><X>${num(x)}</X><Y>${num(y)}</Y><Z>${num(z)}</Z>${[
			"R00",
			"R01",
			"R02",
			"R10",
			"R11",
			"R12",
			"R20",
			"R21",
			"R22"
		].map((k, j) => `<${k}>${num(m[j])}</${k}>`).join("")}</CoordinateFrame>`, `<bool name="Anchored">${!!p.Anchored}</bool>`, `<bool name="CanCollide">${!!p.CanCollide}</bool>`, `<bool name="CanTouch">${p.CanTouch !== false}</bool>`, `<bool name="Locked">${!!p.Locked}</bool>`, `<Color3uint8 name="Color3uint8">${color3uint8(p.Color)}</Color3uint8>`, `<token name="Material">${MATERIAL_TOKEN[p.Material] ?? 256}</token>`, `<float name="Transparency">${num(p.Transparency)}</float>`, `<float name="Reflectance">${num(p.Reflectance)}</float>`, `<Vector3 name="size"><X>${num(p.Size[0])}</X><Y>${num(p.Size[1])}</Y><Z>${num(p.Size[2])}</Z></Vector3>`, `<token name="TopSurface">0</token>`, `<token name="BottomSurface">0</token>`);
		if (i.cls === "Part" && p.Shape !== "Wedge" && p.Shape !== "CornerWedge") out.push(`<token name="shape">${SHAPE_TOKEN[p.Shape] ?? 1}</token>`);
	}
	if (isScript(i.cls)) {
		out.push(`<ProtectedString name="Source">${cdata(String(p.Source ?? ""))}</ProtectedString>`);
		if (i.cls !== "ModuleScript") out.push(`<bool name="Disabled">${p.Enabled === false}</bool>`);
	}
	if (i.cls === "PointLight") out.push(`<Color3 name="Color"><R>${num(p.Color[0] / 255)}</R><G>${num(p.Color[1] / 255)}</G><B>${num(p.Color[2] / 255)}</B></Color3>`, `<float name="Brightness">${num(p.Brightness)}</float>`, `<float name="Range">${num(p.Range)}</float>`, `<bool name="Enabled">${!!p.Enabled}</bool>`);
	if (i.cls === "ClickDetector") out.push(`<float name="MaxActivationDistance">${num(p.MaxActivationDistance)}</float>`);
	if (i.cls === "IntValue") out.push(`<int64 name="Value">${Math.trunc(Number(p.Value) || 0)}</int64>`);
	if (i.cls === "NumberValue") out.push(`<double name="Value">${num(p.Value)}</double>`);
	if (i.cls === "StringValue") out.push(`<string name="Value">${esc(String(p.Value ?? ""))}</string>`);
	if (i.cls === "BoolValue") out.push(`<bool name="Value">${!!p.Value}</bool>`);
	if (i.cls === "Shirt" || i.cls === "Pants") {
		const key = i.cls === "Shirt" ? "ShirtTemplate" : "PantsTemplate";
		out.push(`<Content name="${key}"><url>${esc(String(p[key] ?? ""))}</url></Content>`, c3("Color3", p.Color3 ?? [
			255,
			255,
			255
		]));
	}
	if (i.cls === "BodyColors") for (const key of BODY_COLOR_PROPS) out.push(c3(key, p[key] ?? [
		163,
		162,
		165
	]));
	if (i.cls === "Lighting") {
		const h = Number(p.ClockTime) || 0, hh = Math.floor(h), mm = Math.round((h - hh) * 60);
		out.push(`<string name="TimeOfDay">${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:00</string>`, `<float name="Brightness">${num(p.Brightness)}</float>`);
	}
	if (i.cls === "Tool") out.push(`<bool name="RequiresHandle">${p.RequiresHandle !== false}</bool>`, `<bool name="Enabled">${p.Enabled !== false}</bool>`, `<bool name="CanBeDropped">${p.CanBeDropped !== false}</bool>`, `<string name="ToolTip">${esc(String(p.ToolTip ?? ""))}</string>`, toolGripXml(p));
	if (i.cls === "WeldConstraint") out.push(`<bool name="Enabled">${p.Enabled !== false}</bool>`);
	if (i.cls === "Workspace") out.push(`<float name="Gravity">${num(p.Gravity)}</float>`);
	out.push(...guiXml(i));
	return out.join("");
}
function toRbxlx(p, rootIds) {
	const shared = /* @__PURE__ */ new Map();
	/** União que veio do Roblox: volta como UnionOperation de verdade (o Roblox Studio busca a forma pelo AssetId). */
	const rbxUnion = (i, name, rb, c, id) => {
		shared.set(rb.md5, rb.phys);
		const size = [
			rb.init[0] * c.s[0],
			rb.init[1] * c.s[1],
			rb.init[2] * c.s[2]
		];
		const fake = {
			...i,
			id,
			name,
			cls: "UnionOperation",
			props: {
				...i.props,
				Position: c.p,
				Orientation: c.o,
				Size: size,
				Color: c.c,
				Material: c.m
			}
		};
		return `<Item class="UnionOperation" referent="${r(id)}"><Properties>${propsXml(fake)}<Vector3 name="InitialSize"><X>${num(rb.init[0])}</X><Y>${num(rb.init[1])}</Y><Z>${num(rb.init[2])}</Z></Vector3><Content name="AssetId"><url>${esc(rb.asset)}</url></Content><SharedString name="PhysicalConfigData">${esc(rb.md5)}</SharedString><bool name="UsePartColor">${rb.usePartColor}</bool><token name="RenderFidelity">0</token></Properties>`;
	};
	let n = 0;
	const ref = /* @__PURE__ */ new Map();
	const r = (id) => {
		if (!ref.has(id)) ref.set(id, "RBX" + (n++).toString(16).toUpperCase().padStart(8, "0"));
		return ref.get(id);
	};
	const kids = (i) => p.insts.filter((c) => c.parent === i.id).map(item).join("");
	const item = (i) => {
		if (i.cls === "UnionOperation" && i.props.Rbx?.child && JSON.stringify(i.props.Parts) === i.props.Rbx.sig) {
			const rb = i.props.Rbx;
			const ini = rb.init;
			const ssx = (name, pair) => {
				if (!pair || !pair[1]) return "";
				shared.set(pair[0], pair[1]);
				return `<SharedString name="${name}">${esc(pair[0])}</SharedString>`;
			};
			return `<Item class="UnionOperation" referent="${r(i.id)}"><Properties>${propsXml(i)}<Vector3 name="InitialSize"><X>${num(ini[0])}</X><Y>${num(ini[1])}</Y><Z>${num(ini[2])}</Z></Vector3><Content name="AssetId"><url>${esc(rb.asset || "")}</url></Content>${ssx("ChildData2", rb.child)}${ssx("MeshData2", rb.mesh)}${ssx("PhysicalConfigData", rb.phys)}<bool name="UsePartColor">${!!rb.upc}</bool><token name="RenderFidelity">0</token></Properties>` + kids(i) + "</Item>";
		}
		if (i.cls === "MeshPart") {
			const ini = i.props.InitialSize ?? i.props.Size;
			const ph = i.props.Rbx?.phys;
			if (ph?.[1]) shared.set(ph[0], ph[1]);
			const surface = i.props.SurfaceAlphaMode || i.props.SurfaceColor ? `<Item class="SurfaceAppearance" referent="${r(newId())}"><Properties><string name="Name">SurfaceAppearance</string><Content name="ColorMap"><url>${esc(String(i.props.TextureID ?? ""))}</url></Content><token name="AlphaMode">${i.props.SurfaceAlphaMode === "Transparency" ? 1 : 0}</token>${Array.isArray(i.props.SurfaceColor) ? c3("Color", i.props.SurfaceColor) : ""}</Properties></Item>` : "";
			return `<Item class="MeshPart" referent="${r(i.id)}"><Properties>${propsXml(i)}<Content name="MeshId"><url>${esc(String(i.props.MeshId ?? ""))}</url></Content><Content name="TextureID"><url>${esc(String(i.props.TextureID ?? ""))}</url></Content><Vector3 name="InitialSize"><X>${num(ini[0])}</X><Y>${num(ini[1])}</Y><Z>${num(ini[2])}</Z></Vector3>${ph?.[1] ? `<SharedString name="PhysicalConfigData">${esc(ph[0])}</SharedString>` : ""}<token name="RenderFidelity">0</token></Properties>` + surface + kids(i) + "</Item>";
		}
		if (i.cls === "UnionOperation") {
			const world = unionChildrenWorld(i);
			const groups = /* @__PURE__ */ new Map();
			for (const c of world) if (c.shape === "Hull" && c.g) {
				const l = groups.get(c.g) ?? [];
				l.push(c);
				groups.set(c.g, l);
			}
			const unions = [...groups.values()].map((l) => ({
				c: l[0],
				rb: l.find((x) => x.rbx)?.rbx
			})).filter((x) => !!x.rb);
			const plain = world.filter((c) => c.shape !== "Hull");
			if (unions.length === 1 && !plain.length) return rbxUnion(i, i.name, unions[0].rb, unions[0].c, i.id) + kids(i) + "</Item>";
			const inner = unions.map((u) => rbxUnion(i, u.c.name || "Union", u.rb, u.c, newId()) + "</Item>").join("");
			const emit = (list) => list.map((c) => {
				if (c.shape === "Union") {
					const wk = nodeKidsWorld(c);
					const rb = wk.find((k) => k.shape === "Hull" && k.rbx)?.rbx;
					if (rb && wk.every((k) => k.shape === "Hull")) return rbxUnion(i, c.name || "Union", rb, wk[0], newId()) + "</Item>";
				}
				if (c.shape === "Union") return `<Item class="Model" referent="${r(newId())}"><Properties><string name="Name">${esc(UNION_PREFIX + (c.name || "Union"))}</string></Properties>${emit(nodeKidsWorld(c))}</Item>`;
				if (c.shape === "Hull") return "";
				const x = {
					id: newId(),
					cls: "Part",
					name: (c.neg ? NEG_PREFIX : "") + (c.name || "Part"),
					parent: i.id,
					props: {
						...defaults("Part"),
						Shape: c.shape,
						Position: c.p,
						Orientation: c.o,
						Size: c.s,
						Color: c.c,
						Material: c.m,
						Anchored: i.props.Anchored,
						CanCollide: i.props.CanCollide,
						Transparency: c.neg ? .5 : i.props.Transparency
					}
				};
				return `<Item class="${c.shape === "Wedge" ? "WedgePart" : c.shape === "CornerWedge" ? "CornerWedgePart" : "Part"}" referent="${r(x.id)}"><Properties>${propsXml(x)}</Properties></Item>`;
			}).join("");
			return `<Item class="Model" referent="${r(i.id)}"><Properties><string name="Name">${esc(UNION_PREFIX + i.name)}</string></Properties>${inner}${emit(plain)}${kids(i)}</Item>`;
		}
		const out = i.cls === "NegateOperation" ? {
			...i,
			cls: "Part",
			name: NEG_PREFIX + i.name
		} : i;
		return `<Item class="${out.cls === "Part" && out.props.Shape === "Wedge" ? "WedgePart" : out.cls === "Part" && out.props.Shape === "CornerWedge" ? "CornerWedgePart" : out.cls}" referent="${r(i.id)}"><Properties>${propsXml(out)}${[
			"Part0",
			"Part1",
			"PrimaryPart",
			"Adornee"
		].filter((k) => typeof out.props[k] === "string").map((k) => `<Ref name="${k}">${r(out.props[k])}</Ref>`).join("")}</Properties>${kids(i)}</Item>`;
	};
	return `<roblox xmlns:xmime="http://www.w3.org/2005/05/xmlmime" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://www.roblox.com/roblox.xsd" version="4">\n<Meta name="ExplicitAutoJoints">true</Meta>\n${(rootIds ? p.insts.filter((i) => rootIds.includes(i.id)) : p.insts.filter((i) => i.parent === null)).map(item).join("\n")}${shared.size ? `\n<SharedStrings>${[...shared].map(([k, v]) => `<SharedString md5="${esc(k)}">${v}</SharedString>`).join("")}</SharedStrings>` : ""}\n</roblox>\n`;
}
var unesc = (s) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&apos;/g, "'").replace(/&#(\d+);/g, (_, d) => String.fromCharCode(+d)).replace(/&amp;/g, "&");
function parseXml(src) {
	const root = {
		tag: "#root",
		attrs: {},
		kids: [],
		text: ""
	};
	const stack = [root];
	let i = 0;
	while (i < src.length) {
		const lt = src.indexOf("<", i);
		if (lt < 0) break;
		if (lt > i) stack[stack.length - 1].text += unesc(src.slice(i, lt));
		if (src.startsWith("<![CDATA[", lt)) {
			const end = src.indexOf("]]>", lt);
			stack[stack.length - 1].text += src.slice(lt + 9, end < 0 ? src.length : end);
			i = end < 0 ? src.length : end + 3;
			continue;
		}
		if (src.startsWith("<!--", lt)) {
			const end = src.indexOf("-->", lt);
			i = end < 0 ? src.length : end + 3;
			continue;
		}
		if (src.startsWith("<?", lt) || src.startsWith("<!", lt)) {
			i = src.indexOf(">", lt) + 1;
			continue;
		}
		const gt = src.indexOf(">", lt);
		if (gt < 0) break;
		const body = src.slice(lt + 1, gt);
		i = gt + 1;
		if (body.startsWith("/")) {
			if (stack.length > 1) stack.pop();
			continue;
		}
		const self = body.endsWith("/");
		const m = /^([\w:.-]+)/.exec(body);
		if (!m) continue;
		const el = {
			tag: m[1],
			attrs: {},
			kids: [],
			text: ""
		};
		for (const a of body.matchAll(/([\w:.-]+)="([^"]*)"/g)) el.attrs[a[1]] = unesc(a[2]);
		stack[stack.length - 1].kids.push(el);
		if (!self) stack.push(el);
	}
	return root;
}
var kid = (e, tag) => e.kids.find((k) => k.tag === tag);
var f = (e, tag) => Number(e && kid(e, tag)?.text) || 0;
var tokenName = (map, v, fallback) => Object.entries(map).find(([, n]) => n === v)?.[0] ?? fallback;
var KNOWN = new Set([
	...SERVICES,
	"Tool",
	"Backpack",
	"WeldConstraint",
	"StarterPlayerScripts",
	"StarterCharacterScripts",
	"BillboardGui",
	"SurfaceGui",
	"Humanoid",
	"Shirt",
	"Pants",
	"BodyColors",
	"Part",
	"SpawnLocation",
	"UnionOperation",
	"NegateOperation",
	"ScreenGui",
	"Frame",
	"TextLabel",
	"TextButton",
	"ImageLabel",
	"ImageButton",
	"UICorner",
	"UIStroke",
	"UIGradient",
	"UIListLayout",
	"Model",
	"Folder",
	"Script",
	"LocalScript",
	"ModuleScript",
	"PointLight",
	"ClickDetector",
	"RemoteEvent",
	"RemoteFunction",
	"BindableEvent",
	"BindableFunction",
	"IntValue",
	"NumberValue",
	"StringValue",
	"BoolValue",
	"MeshPart",
	"WedgePart",
	"CornerWedgePart",
	"TrussPart"
]);
var BODY_BRICK_COLORS = {
	1: [
		242,
		243,
		243
	],
	5: [
		215,
		197,
		154
	],
	9: [
		232,
		186,
		200
	],
	18: [
		204,
		142,
		105
	],
	21: [
		196,
		40,
		28
	],
	23: [
		13,
		105,
		172
	],
	24: [
		245,
		205,
		48
	],
	26: [
		27,
		42,
		53
	],
	102: [
		110,
		153,
		202
	],
	104: [
		107,
		50,
		124
	],
	106: [
		218,
		133,
		65
	],
	1001: [
		248,
		248,
		248
	],
	1003: [
		17,
		17,
		17
	]
};
var fromB64 = (s) => {
	const bin = atob(s.replace(/\s+/g, ""));
	const u = new Uint8Array(bin.length);
	for (let k = 0; k < bin.length; k++) u[k] = bin.charCodeAt(k);
	return u;
};
var sharedOf = (root) => {
	const m = /* @__PURE__ */ new Map();
	for (const ss of root.kids.filter((k) => k.tag === "SharedStrings")) for (const x of ss.kids) if (x.attrs.md5) m.set(x.attrs.md5, x.text.trim());
	return m;
};
var vec3Of = (e) => e ? [
	f(e, "X"),
	f(e, "Y"),
	f(e, "Z")
] : null;
/** Peças originais de uma união (ou de um buraco), no espaço dela. Guardadas pelo próprio Roblox Studio no arquivo. */
function partsFromChildData(b64, depth = 0) {
	if (!b64 || depth > 12) return null;
	let root;
	try {
		const bytes = fromB64(b64);
		if (!isBinaryRbx(bytes)) return null;
		root = parseBinaryRbx(bytes);
	} catch {
		return null;
	}
	const shared = sharedOf(root);
	const out = [];
	for (const it of root.kids.filter((k) => k.tag === "Item")) {
		const props = kid(it, "Properties");
		const get = (n) => props?.kids.find((k) => k.attrs.name === n);
		const cls = it.attrs.class;
		const cf = get("CFrame") ?? get("CoordinateFrame");
		const pos = cf ? [
			f(cf, "X"),
			f(cf, "Y"),
			f(cf, "Z")
		] : [
			0,
			0,
			0
		];
		const o = cf ? orientationFromMatrix([
			"R00",
			"R01",
			"R02",
			"R10",
			"R11",
			"R12",
			"R20",
			"R21",
			"R22"
		].map((k) => kid(cf, k) ? Number(kid(cf, k).text) : k === "R00" || k === "R11" || k === "R22" ? 1 : 0)) : [
			0,
			0,
			0
		];
		const size = vec3Of(get("size") ?? get("Size")) ?? [
			1,
			1,
			1
		];
		const c8 = get("Color3uint8");
		const v = c8 ? Number(c8.text) >>> 0 : 10724005;
		const color = [
			v >> 16 & 255,
			v >> 8 & 255,
			v & 255
		];
		const mat = get("Material");
		const m = mat ? tokenName(MATERIAL_TOKEN, Number(mat.text), "Plastic") : "Plastic";
		const name = get("Name")?.text ?? cls;
		if (cls === "UnionOperation" || cls === "NegateOperation") {
			const init = vec3Of(get("InitialSize")) ?? size;
			const kids = partsFromChildData(shared.get(get("ChildData2")?.text.trim() ?? "") ?? "", depth + 1);
			const neg = cls === "NegateOperation";
			if (!kids?.length) {
				out.push({
					neg,
					shape: "Block",
					name,
					p: pos,
					o,
					s: size,
					c: color,
					m
				});
				continue;
			}
			const only = kids[0];
			if (neg && kids.length === 1 && only.shape !== "Union" && only.shape !== "Hull" && only.p.every((x) => Math.abs(x) < .001) && only.o.every((x) => Math.abs(x) < .001)) {
				out.push({
					...only,
					neg: true,
					name,
					p: pos,
					o,
					s: size
				});
				continue;
			}
			const sc = [
				size[0] / (init[0] || 1),
				size[1] / (init[1] || 1),
				size[2] / (init[2] || 1)
			];
			out.push({
				neg,
				shape: "Union",
				name,
				p: pos,
				o,
				s: sc,
				c: color,
				m,
				kids,
				init,
				upc: get("UsePartColor")?.text.trim() === "true"
			});
			continue;
		}
		const shape = cls === "WedgePart" ? "Wedge" : cls === "CornerWedgePart" ? "CornerWedge" : cls === "Part" ? tokenName(SHAPE_TOKEN, Number(get("shape")?.text ?? 1), "Block") : "Block";
		if ([
			"Part",
			"WedgePart",
			"CornerWedgePart",
			"TrussPart",
			"MeshPart",
			"SpawnLocation",
			"Seat",
			"VehicleSeat"
		].includes(cls)) out.push({
			neg: false,
			shape,
			name,
			p: pos,
			o,
			s: size,
			c: color,
			m
		});
	}
	return out;
}
var CONTAINERS = new Set([
	"Accessory",
	"Accoutrement",
	"Hat",
	"Configuration",
	"Actor",
	"WorldModel",
	"HopperBin",
	"Teams"
]);
/** Lê .rbxlx/.rbxmx. Classes que o Studio Lite não conhece são puladas (e contadas em `skipped`). */
function fromRbxlx(src) {
	let roblox;
	if (typeof src !== "string" && isBinaryRbx(src)) roblox = parseBinaryRbx(src);
	else roblox = parseXml(typeof src === "string" ? src : new TextDecoder().decode(src)).kids.find((k) => k.tag === "roblox");
	if (!roblox) throw new Error("Este arquivo não parece um projeto do Roblox (.rbxl, .rbxlx, .rbxm ou .rbxmx).");
	let fromFile = 0;
	const base = newProject();
	const insts = base.insts.filter((i) => isService(i.cls));
	let skipped = 0, approx = 0, shaped = 0;
	const referenceIds = /* @__PURE__ */ new Map(), pendingRefs = [];
	const shared = /* @__PURE__ */ new Map();
	for (const ss of roblox.kids.filter((k) => k.tag === "SharedStrings")) for (const x of ss.kids) if (x.attrs.md5) shared.set(x.attrs.md5, x.text.trim());
	const walk = (e, parent) => {
		for (const it of e.kids.filter((k) => k.tag === "Item")) {
			let cls = it.attrs.class;
			const props = kid(it, "Properties");
			const get = (name) => props?.kids.find((k) => k.attrs.name === name);
			if (CONTAINERS.has(cls)) cls = "Model";
			else if (!KNOWN.has(cls)) {
				skipped++;
				walk(it, parent);
				continue;
			}
			const wedge = cls === "WedgePart" ? "Wedge" : cls === "CornerWedgePart" ? "CornerWedge" : null;
			if (wedge) cls = "Part";
			else if (cls === "TrussPart") cls = "Part";
			const name = get("Name")?.text ?? cls;
			if (isService(cls)) {
				const s = insts.find((i) => i.id === cls);
				readInto(s, get);
				walk(it, s.id);
				continue;
			}
			const id = newId();
			if (it.attrs.referent) referenceIds.set(it.attrs.referent, id);
			const inst = {
				id,
				cls,
				name: name.slice(0, 100),
				parent: parent ?? "Workspace",
				props: defaults(cls)
			};
			readInto(inst, get);
			for (const key of [
				"Part0",
				"Part1",
				"PrimaryPart",
				"Adornee"
			]) {
				const ref = get(key)?.text.trim();
				if (ref && ref !== "null") pendingRefs.push({
					inst,
					key,
					ref
				});
			}
			if (wedge) inst.props.Shape = wedge;
			if (inst.cls === "Part" && inst.name.startsWith("[Negar] ")) {
				inst.cls = "NegateOperation";
				inst.name = inst.name.slice(8) || "Part";
				inst.props.Transparency = 0;
			}
			if (inst.cls === "NegateOperation") inst.props.Shape = inst.props.Shape ?? "Block";
			if (inst.cls === "UnionOperation") {
				const ck = get("ChildData2")?.text.trim() ?? "";
				const kids = partsFromChildData(shared.get(ck) ?? "");
				const is0 = get("InitialSize");
				const init0 = is0 ? [
					f(is0, "X"),
					f(is0, "Y"),
					f(is0, "Z")
				] : inst.props.Size;
				if (kids?.length && init0.every((n) => n > 0)) {
					const upc = get("UsePartColor")?.text.trim() === "true";
					inst.props.InitialSize = init0;
					inst.props.UsePartColor = upc;
					inst.props.Parts = kids;
					const pk = get("PhysicalConfigData")?.text.trim() ?? "", mk = get("MeshData2")?.text.trim() ?? "";
					const asset = get("AssetId") && (kid(get("AssetId"), "url")?.text ?? get("AssetId").text).trim() || "";
					inst.props.Rbx = {
						asset,
						init: init0,
						upc,
						child: [ck, shared.get(ck) ?? ""],
						mesh: mk ? [mk, shared.get(mk) ?? ""] : null,
						phys: pk ? [pk, shared.get(pk) ?? ""] : null,
						sig: JSON.stringify(kids)
					};
					fromFile++;
					insts.push(inst);
					walk(it, id);
					continue;
				}
			}
			if (inst.cls === "MeshPart") {
				const mid = get("MeshId"), tid = get("TextureID");
				const url = (e) => e ? (kid(e, "url")?.text ?? e.text).trim() : "";
				inst.props.MeshId = url(mid);
				inst.props.TextureID = url(tid);
				const is1 = get("InitialSize");
				const init1 = is1 ? [
					f(is1, "X"),
					f(is1, "Y"),
					f(is1, "Z")
				] : inst.props.Size;
				inst.props.InitialSize = init1;
				const surface = it.kids.find((child) => child.tag === "Item" && child.attrs.class === "SurfaceAppearance");
				if (surface) {
					const properties = kid(surface, "Properties");
					const field = (name) => properties?.kids.find((child) => child.attrs.name === name);
					const map = url(field("ColorMap"));
					if (map) inst.props.TextureID = map;
					const alpha = field("AlphaMode");
					if (alpha) inst.props.SurfaceAlphaMode = Number(alpha.text.trim()) === 1 ? "Transparency" : "Overlay";
					const tint = field("Color");
					if (tint) inst.props.SurfaceColor = [
						f(tint, "R"),
						f(tint, "G"),
						f(tint, "B")
					].map((v) => Math.round(v * 255));
				}
				const pk = get("PhysicalConfigData")?.text.trim() ?? "";
				const phys = shared.get(pk) ?? "";
				const hulls = phys ? hullsFromPhysics(phys) : null;
				inst.props.Parts = hulls?.length && init1.every((n) => n > 0) ? hulls.map((pts) => ({
					neg: false,
					shape: "Hull",
					name: inst.name,
					p: [
						0,
						0,
						0
					],
					o: [
						0,
						0,
						0
					],
					s: [
						1,
						1,
						1
					],
					c: inst.props.Color,
					m: inst.props.Material,
					pts
				})) : [];
				inst.props.Rbx = phys ? { phys: [pk, phys] } : null;
				insts.push(inst);
				walk(it, id);
				continue;
			}
			if (inst.cls === "UnionOperation") {
				const key = get("PhysicalConfigData")?.text.trim() ?? "";
				const phys = shared.get(key) ?? "";
				const hulls = phys ? hullsFromPhysics(phys) : null;
				const is = get("InitialSize");
				const init = is ? [
					f(is, "X"),
					f(is, "Y"),
					f(is, "Z")
				] : inst.props.Size;
				const asset = get("AssetId") && (kid(get("AssetId"), "url")?.text ?? get("AssetId").text).trim() || "";
				if (hulls?.length && init.every((n) => n > 0)) {
					const g = newId();
					const upc = get("UsePartColor")?.text.trim() === "true";
					inst.props.InitialSize = init;
					inst.props.UsePartColor = false;
					shaped++;
					inst.props.Parts = hulls.map((pts, k) => ({
						neg: false,
						shape: "Hull",
						name: inst.name,
						p: [
							0,
							0,
							0
						],
						o: [
							0,
							0,
							0
						],
						s: [
							1,
							1,
							1
						],
						c: inst.props.Color,
						m: inst.props.Material,
						pts,
						g,
						...k === 0 ? { rbx: {
							asset,
							md5: key,
							phys,
							init,
							usePartColor: upc
						} } : {}
					}));
					insts.push(inst);
					walk(it, id);
					continue;
				}
			}
			if (inst.cls === "UnionOperation") {
				const sz = inst.props.Size;
				inst.props.InitialSize = sz;
				inst.props.UsePartColor = true;
				inst.props.Parts = [{
					neg: false,
					shape: "Block",
					name: "Part",
					p: [
						0,
						0,
						0
					],
					o: [
						0,
						0,
						0
					],
					s: sz,
					c: inst.props.Color,
					m: inst.props.Material
				}];
				approx++;
			}
			insts.push(inst);
			walk(it, id);
		}
	};
	function readInto(inst, get) {
		const p = inst.props;
		if (isPart(inst.cls)) {
			const cf = get("CFrame") ?? get("CoordinateFrame");
			if (cf) {
				p.Position = [
					f(cf, "X"),
					f(cf, "Y"),
					f(cf, "Z")
				];
				p.Orientation = orientationFromMatrix([
					"R00",
					"R01",
					"R02",
					"R10",
					"R11",
					"R12",
					"R20",
					"R21",
					"R22"
				].map((k) => kid(cf, k) ? Number(kid(cf, k).text) : k === "R00" || k === "R11" || k === "R22" ? 1 : 0));
			}
			const sz = get("size") ?? get("Size");
			if (sz) p.Size = [
				f(sz, "X"),
				f(sz, "Y"),
				f(sz, "Z")
			];
			const c8 = get("Color3uint8");
			if (c8) {
				const v = Number(c8.text) >>> 0;
				p.Color = [
					v >> 16 & 255,
					v >> 8 & 255,
					v & 255
				];
			}
			const mat = get("Material");
			if (mat) p.Material = tokenName(MATERIAL_TOKEN, Number(mat.text), "Plastic");
			const sh = get("shape") ?? get("Shape");
			if (sh) p.Shape = tokenName(SHAPE_TOKEN, Number(sh.text), "Block");
			for (const k of [
				"Anchored",
				"CanCollide",
				"CanTouch",
				"Locked"
			]) if (get(k)) p[k] = get(k).text.trim() === "true";
			for (const k of ["Transparency", "Reflectance"]) if (get(k)) p[k] = Number(get(k).text) || 0;
		}
		if (isScript(inst.cls)) {
			p.Source = get("Source")?.text ?? "";
			if (get("Disabled")) p.Enabled = get("Disabled").text.trim() !== "true";
			if (get("Enabled")) p.Enabled = get("Enabled").text.trim() === "true";
		}
		if (inst.cls === "PointLight") {
			const c = get("Color");
			if (c) p.Color = [
				f(c, "R"),
				f(c, "G"),
				f(c, "B")
			].map((v) => Math.round(v * 255));
			for (const k of ["Brightness", "Range"]) if (get(k)) p[k] = Number(get(k).text) || 0;
			if (get("Enabled")) p.Enabled = get("Enabled").text.trim() === "true";
		}
		if (inst.cls === "ClickDetector" && get("MaxActivationDistance")) p.MaxActivationDistance = Number(get("MaxActivationDistance").text) || 32;
		if (["IntValue", "NumberValue"].includes(inst.cls) && get("Value")) p.Value = Number(get("Value").text) || 0;
		if (inst.cls === "StringValue" && get("Value")) p.Value = get("Value").text;
		if (inst.cls === "BoolValue" && get("Value")) p.Value = get("Value").text.trim() === "true";
		if (inst.cls === "Lighting") {
			const t = get("TimeOfDay")?.text;
			if (t) {
				const [h, m] = t.split(":").map(Number);
				p.ClockTime = (h || 0) + (m || 0) / 60;
			}
			if (get("Brightness")) p.Brightness = Number(get("Brightness").text) || 2;
		}
		if (inst.cls === "Workspace" && get("Gravity")) p.Gravity = Number(get("Gravity").text) || 196.2;
		const rd3 = (n) => {
			const c = get(n);
			return c ? [
				f(c, "R"),
				f(c, "G"),
				f(c, "B")
			].map((v) => Math.round(v * 255)) : void 0;
		};
		const rdU2 = (n) => {
			const u = get(n);
			return u ? [
				f(u, "XS"),
				f(u, "XO"),
				f(u, "YS"),
				f(u, "YO")
			] : void 0;
		};
		const bool = (n) => get(n) ? get(n).text.trim() === "true" : void 0;
		const numv = (n) => get(n) ? Number(get(n).text) || 0 : void 0;
		const set = (k, v) => {
			if (v !== void 0) p[k] = v;
		};
		if (inst.cls === "Shirt" || inst.cls === "Pants") {
			const key = inst.cls === "Shirt" ? "ShirtTemplate" : "PantsTemplate";
			const template = get(key);
			if (template) p[key] = (kid(template, "url")?.text ?? template.text).trim();
			set("Color3", rd3("Color3"));
		}
		if (inst.cls === "BodyColors") for (const key of BODY_COLOR_PROPS) {
			const modern = rd3(key);
			const legacy = get(key.replace(/3$/, ""));
			const mapped = legacy ? BODY_BRICK_COLORS[Number(legacy.text.trim())] : void 0;
			set(key, modern ?? mapped);
		}
		if (inst.cls === "ScreenGui") set("Enabled", bool("Enabled"));
		if (inst.cls === "BillboardGui") {
			set("Enabled", bool("Enabled"));
			set("Size", rdU2("Size"));
			for (const n of [
				"StudsOffset",
				"StudsOffsetWorldSpace",
				"ExtentsOffset",
				"ExtentsOffsetWorldSpace"
			]) {
				const o = get(n);
				if (o) p[n] = [
					f(o, "X"),
					f(o, "Y"),
					f(o, "Z")
				];
			}
			const so = get("SizeOffset");
			if (so) p.SizeOffset = [f(so, "X"), f(so, "Y")];
			set("AlwaysOnTop", bool("AlwaysOnTop"));
			set("ClipsDescendants", bool("ClipsDescendants"));
			set("LightInfluence", numv("LightInfluence"));
			set("Brightness", numv("Brightness"));
			const md = get("MaxDistance")?.text.trim();
			if (md !== void 0) {
				const d = Number(md);
				p.MaxDistance = !Number.isFinite(d) || d > 1e5 || d <= 0 ? 0 : d;
			}
		}
		if (inst.cls === "SurfaceGui") {
			set("Enabled", bool("Enabled"));
			const fc = numv("Face");
			if (fc !== void 0) p.Face = tokenName(FACE, fc, "Front");
			set("PixelsPerStud", numv("PixelsPerStud"));
			set("AlwaysOnTop", bool("AlwaysOnTop"));
		}
		if (inst.cls === "Tool") {
			for (const key of [
				"RequiresHandle",
				"Enabled",
				"CanBeDropped"
			]) set(key, bool(key));
			set("ToolTip", get("ToolTip")?.text);
			const grip = get("Grip");
			if (grip) {
				p.GripPos = [
					f(grip, "X"),
					f(grip, "Y"),
					f(grip, "Z")
				];
				p.GripOrientation = orientationFromMatrix([
					"R00",
					"R01",
					"R02",
					"R10",
					"R11",
					"R12",
					"R20",
					"R21",
					"R22"
				].map((k) => f(grip, k)));
			}
		}
		if (inst.cls === "WeldConstraint") set("Enabled", bool("Enabled"));
		if (inst.cls === "Humanoid") {
			set("HipHeight", numv("HipHeight"));
			const h = numv("Health_XML") ?? numv("Health");
			if (h !== void 0) p.Health = h;
			set("MaxHealth", numv("MaxHealth"));
			set("WalkSpeed", numv("WalkSpeed"));
			set("DisplayName", get("DisplayName")?.text);
			const dd = numv("DisplayDistanceType");
			if (dd !== void 0) p.DisplayDistanceType = tokenName(DDT, dd, "Viewer");
			set("NameDisplayDistance", numv("NameDisplayDistance"));
			set("HealthDisplayDistance", numv("HealthDisplayDistance"));
			const hd = numv("HealthDisplayType");
			if (hd !== void 0) p.HealthDisplayType = tokenName(HDT, hd, "DisplayWhenDamaged");
		}
		if (inst.cls === "UICorner") {
			const u = get("CornerRadius");
			if (u) p.CornerRadius = [f(u, "S"), f(u, "O")];
		}
		if (inst.cls === "UIStroke") {
			set("Color", rd3("Color"));
			set("Thickness", numv("Thickness"));
			set("Transparency", numv("Transparency"));
			const m = numv("ApplyStrokeMode");
			if (m !== void 0) p.ApplyStrokeMode = tokenName(STROKE, m, "Contextual");
			set("Enabled", bool("Enabled"));
		}
		if (inst.cls === "UIGradient") {
			const cs = get("Color");
			if (cs) {
				const n = cs.text.trim().split(/\s+/).map(Number);
				const keys = [];
				for (let k = 0; k + 3 < n.length; k += 5) keys.push([
					n[k],
					Math.round(n[k + 1] * 255),
					Math.round(n[k + 2] * 255),
					Math.round(n[k + 3] * 255)
				]);
				if (keys.length >= 2) p.Color = keys;
			}
			set("Rotation", numv("Rotation"));
			set("Enabled", bool("Enabled"));
		}
		if (inst.cls === "UIListLayout") {
			const t = (n, m, d) => {
				const v = numv(n);
				if (v !== void 0) p[n] = tokenName(m, v, d);
			};
			t("FillDirection", FILL, "Vertical");
			t("HorizontalAlignment", HALIGN, "Center");
			t("VerticalAlignment", VALIGN, "Top");
			t("SortOrder", SORT, "LayoutOrder");
			const u = get("Padding");
			if (u) p.Padding = [f(u, "S"), f(u, "O")];
		}
		if ([
			"Frame",
			"TextLabel",
			"TextButton",
			"ImageLabel",
			"ImageButton"
		].includes(inst.cls)) {
			set("Position", rdU2("Position"));
			set("Size", rdU2("Size"));
			const a = get("AnchorPoint");
			if (a) p.AnchorPoint = [f(a, "X"), f(a, "Y")];
			set("BackgroundColor3", rd3("BackgroundColor3"));
			set("BackgroundTransparency", numv("BackgroundTransparency"));
			set("BorderSizePixel", numv("BorderSizePixel"));
			set("Visible", bool("Visible"));
			set("ClipsDescendants", bool("ClipsDescendants"));
			set("ZIndex", numv("ZIndex"));
			set("LayoutOrder", numv("LayoutOrder"));
			set("Rotation", numv("Rotation"));
			if (inst.cls === "TextLabel" || inst.cls === "TextButton") {
				set("Text", get("Text")?.text);
				set("TextColor3", rd3("TextColor3"));
				set("TextSize", numv("TextSize"));
				set("TextScaled", bool("TextScaled"));
				set("TextWrapped", bool("TextWrapped"));
				const fam = get("FontFace")?.kids.find((k) => k.tag === "Family");
				const url = fam ? kid(fam, "url")?.text ?? fam.text : "";
				const name = Object.entries(FONT_FAMILY).find(([, v]) => url.includes("/" + v + ".json"))?.[0];
				if (name) p.Font = name;
				const xa = numv("TextXAlignment"), ya = numv("TextYAlignment");
				if (xa !== void 0) p.TextXAlignment = tokenName(XALIGN, xa, "Center");
				if (ya !== void 0) p.TextYAlignment = tokenName(YALIGN, ya, "Center");
			}
			if (inst.cls === "ImageLabel" || inst.cls === "ImageButton") {
				const im = get("Image");
				if (im) p.Image = (kid(im, "url")?.text ?? im.text).trim();
				set("ImageColor3", rd3("ImageColor3"));
				set("ImageTransparency", numv("ImageTransparency"));
				const st = numv("ScaleType");
				if (st !== void 0) p.ScaleType = tokenName(SCALE, st, "Fit");
			}
		}
	}
	walk(roblox, null);
	for (const { inst, key, ref } of pendingRefs) inst.props[key] = referenceIds.get(ref) ?? null;
	const re = reunite(insts);
	return {
		project: sanitize({
			v: 1,
			name: base.name,
			insts: re.insts
		}),
		skipped,
		approx,
		shaped,
		rebuilt: re.count + fromFile
	};
}
/** Modelo do Roblox Studio (.rbxmx) → objetos para colocar no projeto atual (ids novos).
*  `roots` são os objetos de cima (vão para dentro de `parent`); o resto mantém a hierarquia. */
function importModel(xml, parent) {
	const { project, skipped, approx, shaped, rebuilt } = fromRbxlx(xml);
	const services = new Set(project.insts.filter((i) => isService(i.cls)).map((i) => i.id));
	const insts = project.insts.filter((i) => !isService(i.cls)).map((i) => ({
		...i,
		parent: i.parent && services.has(i.parent) ? null : i.parent
	}));
	const roots = insts.filter((i) => i.parent === null).map((i) => i.id);
	for (const i of insts) if (i.parent === null) i.parent = parent;
	return {
		insts,
		roots,
		skipped,
		approx,
		shaped,
		rebuilt
	};
}
/** Coloca as peças de um modelo apoiadas no chão (y=0), com o centro em (x,z). */
function placeModel(insts, [x, , z]) {
	const parts = insts.filter((i) => isPart(i.cls));
	if (!parts.length) return insts;
	let minY = Infinity, minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
	for (const p of parts) {
		const [px, py, pz] = p.props.Position, s = p.props.Size, R = rotMatrix(p.props.Orientation);
		const [hx, hy, hz] = [
			0,
			1,
			2
		].map((r) => [
			0,
			1,
			2
		].reduce((t, k) => t + Math.abs(R[r * 3 + k]) * s[k] / 2, 0));
		minY = Math.min(minY, py - hy);
		minX = Math.min(minX, px - hx);
		maxX = Math.max(maxX, px + hx);
		minZ = Math.min(minZ, pz - hz);
		maxZ = Math.max(maxZ, pz + hz);
	}
	const dx = x - (minX + maxX) / 2, dy = -minY, dz = z - (minZ + maxZ) / 2;
	return insts.map((i) => isPart(i.cls) ? {
		...i,
		props: {
			...i.props,
			Position: [
				i.props.Position[0] + dx,
				i.props.Position[1] + dy,
				i.props.Position[2] + dz
			].map((n) => Math.round(n * 1e3) / 1e3)
		}
	} : i);
}
//#endregion
//#region components/studio/StudioLite.tsx
/** Laboratório (Studio Lite): cena 3D, Explorador, Propriedades editáveis, scripts em abas, Jogar e arquivos .rbxlx. */
var Toolbox = (0, import_react.lazy)(() => __vitePreload(() => import("./lagtest-Toolbox-kuujqAEY.js"), __vite__mapDeps([6,7,8,1,9]), import.meta.url));
var PublishGame = (0, import_react.lazy)(() => __vitePreload(() => import("./lagtest-PublishGame-CmgUgf47.js"), __vite__mapDeps([10,7,8,11,9]), import.meta.url));
var ImportCharacter = (0, import_react.lazy)(() => __vitePreload(() => import("./lagtest-ImportCharacter-CknOy5ys.js"), __vite__mapDeps([12,7,8,1,13]), import.meta.url));
var PluginHelp = (0, import_react.lazy)(() => __vitePreload(() => import("./lagtest-PluginHelp-CJLzA4mN.js"), __vite__mapDeps([14,7,8,13]), import.meta.url));
var INSERTABLE = [
	{
		cls: "Part",
		label: "Bloco"
	},
	{
		cls: "Part",
		label: "Esfera",
		props: {
			Shape: "Ball",
			Size: [
				4,
				4,
				4
			]
		},
		name: "Part"
	},
	{
		cls: "Part",
		label: "Cilindro",
		props: {
			Shape: "Cylinder",
			Size: [
				2,
				4,
				4
			]
		},
		name: "Part"
	},
	{
		cls: "Part",
		label: "Cunha",
		props: {
			Shape: "Wedge",
			Size: [
				4,
				2,
				4
			]
		},
		name: "Wedge"
	},
	{
		cls: "Part",
		label: "Cunha de canto",
		props: {
			Shape: "CornerWedge",
			Size: [
				4,
				2,
				4
			]
		},
		name: "CornerWedge"
	},
	{
		cls: "Tool",
		label: "Tool"
	},
	{
		cls: "WeldConstraint",
		label: "WeldConstraint"
	},
	{
		cls: "SpawnLocation",
		label: "SpawnLocation"
	},
	{
		cls: "MeshPart",
		label: "MeshPart"
	},
	{
		cls: "Model",
		label: "Model"
	},
	{
		cls: "Folder",
		label: "Folder"
	},
	{
		cls: "Script",
		label: "Script"
	},
	{
		cls: "LocalScript",
		label: "LocalScript"
	},
	{
		cls: "ModuleScript",
		label: "ModuleScript"
	},
	{
		cls: "PointLight",
		label: "PointLight"
	},
	{
		cls: "ClickDetector",
		label: "ClickDetector"
	},
	{
		cls: "RemoteEvent",
		label: "RemoteEvent"
	},
	{
		cls: "RemoteFunction",
		label: "RemoteFunction"
	},
	{
		cls: "BindableEvent",
		label: "BindableEvent"
	},
	{
		cls: "BindableFunction",
		label: "BindableFunction"
	},
	{
		cls: "ScreenGui",
		label: "ScreenGui"
	},
	{
		cls: "BillboardGui",
		label: "BillboardGui"
	},
	{
		cls: "SurfaceGui",
		label: "SurfaceGui"
	},
	{
		cls: "Humanoid",
		label: "Humanoid"
	},
	{
		cls: "Frame",
		label: "Frame"
	},
	{
		cls: "TextLabel",
		label: "TextLabel"
	},
	{
		cls: "TextButton",
		label: "TextButton"
	},
	{
		cls: "ImageLabel",
		label: "ImageLabel"
	},
	{
		cls: "ImageButton",
		label: "ImageButton"
	},
	{
		cls: "UICorner",
		label: "UICorner"
	},
	{
		cls: "UIStroke",
		label: "UIStroke"
	},
	{
		cls: "UIGradient",
		label: "UIGradient"
	},
	{
		cls: "UIListLayout",
		label: "UIListLayout"
	},
	{
		cls: "IntValue",
		label: "IntValue"
	},
	{
		cls: "NumberValue",
		label: "NumberValue"
	},
	{
		cls: "StringValue",
		label: "StringValue"
	},
	{
		cls: "BoolValue",
		label: "BoolValue"
	},
	{
		cls: "Shirt",
		label: "Shirt · Camisa"
	},
	{
		cls: "Pants",
		label: "Pants · Calça"
	},
	{
		cls: "BodyColors",
		label: "BodyColors · Cores do corpo"
	}
];
var byCls = (c) => INSERTABLE.find((d) => d.cls === c);
var INSERTABLE_SPAWN = byCls("SpawnLocation"), INSERTABLE_SCRIPT = byCls("Script"), INSERTABLE_LIGHT = byCls("PointLight"), INSERTABLE_CLICK = byCls("ClickDetector");
var SHORTCUTS = [
	["1 / 2 / 3 / 4", "Selecionar · Mover · Escalar · Girar (ou Ctrl + 1 a 4)"],
	["Ctrl + Z / Ctrl + Y", "Desfazer / Refazer"],
	["Ctrl + D", "Duplicar"],
	["Ctrl + R / Ctrl + T", "Girar 90° · Inclinar 90°"],
	["Ctrl + C / X / V", "Copiar · Recortar · Colar"],
	["Ctrl + Shift + G", "Unir as peças selecionadas"],
	["Ctrl + Shift + N", "Negar (o navegador pode usar esse atalho para janela anônima; o botão Negar sempre funciona)"],
	["Ctrl + Shift + U", "Separar a união"],
	["Clicar e segurar / Ctrl + clique", "Selecionar várias peças (no celular: segure o dedo na peça)"],
	["Delete", "Apagar"],
	["F2", "Renomear"],
	["F", "Focar a câmera no objeto"],
	["Ctrl + G / Ctrl + U", "Agrupar em Model / Desagrupar"],
	["Ctrl + L", "Ligar/desligar a grade (encaixe)"],
	["F5 / Shift + F5", "Jogar / Parar"],
	["Ctrl + S", "Salvar no aparelho"],
	["Ctrl + E", "Exportar .rbxlx (Roblox Studio)"],
	["W A S D · Q E", "Voar com a câmera, descer e subir (Shift = devagar) · andar ao jogar"],
	["Botão direito (arrastar)", "Girar a câmera (editar e jogar), como no Roblox Studio"],
	["Botão do meio (arrastar) / rodinha", "Mover a câmera / aproximar onde está o cursor"],
	["Clique rápido com o botão direito / toque longo", "Menu de atalhos"],
	["Espaço", "Pular (jogando)"],
	["I / O · rodinha · pinça", "Aproximar / afastar a câmera (jogando)"],
	["?", "Esta lista"]
];
function useMedia(q) {
	const [on, setOn] = (0, import_react.useState)(() => typeof matchMedia !== "undefined" && matchMedia(q).matches);
	(0, import_react.useEffect)(() => {
		const m = matchMedia(q);
		const f = () => setOn(m.matches);
		f();
		m.addEventListener("change", f);
		return () => m.removeEventListener("change", f);
	}, [q]);
	return on;
}
var r3 = (n) => Math.round(n * 1e3) / 1e3;
/** Campos de vários números (UDim2, UDim, Vector3, Vector2): texto único + partes que abrem embaixo. */
var COMPOSITE = {
	udim2: {
		parts: [
			[
				"X Scale (escala)",
				.05,
				false
			],
			[
				"X Offset (px)",
				1,
				true
			],
			[
				"Y Scale (escala)",
				.05,
				false
			],
			[
				"Y Offset (px)",
				1,
				true
			]
		],
		hint: "{escala, px},{escala, px}. Ex.: {0.5, 0},{0.2, 0}"
	},
	udim: {
		parts: [[
			"Scale (escala)",
			.05,
			false
		], [
			"Offset (px)",
			1,
			true
		]],
		hint: "{escala, px}. Ex.: {0, 8}"
	},
	vec3: {
		parts: [
			[
				"X",
				1,
				false
			],
			[
				"Y",
				1,
				false
			],
			[
				"Z",
				1,
				false
			]
		],
		hint: "três números: X, Y, Z. Ex.: 0, 5, 0"
	},
	vec2: {
		parts: [[
			"X",
			.5,
			false
		], [
			"Y",
			.5,
			false
		]],
		hint: "dois números: X, Y. Ex.: 0.5, 0.5"
	}
};
function compText(kind, v) {
	const u = Array.isArray(v) ? v : [];
	const n = (x) => String(r3(Number(x) || 0));
	if (kind === "udim2") return udimText(u.length === 4 ? u : [
		0,
		0,
		0,
		0
	]);
	if (kind === "udim") return `{${n(u[0])}, ${Math.round(Number(u[1]) || 0)}}`;
	return u.map(n).join(", ");
}
function compParse(kind, t) {
	const n = t.replace(/(\d),(\d)/g, "$1.$2").match(/-?\d*\.?\d+(e-?\d+)?/gi)?.map(Number);
	const c = COMPOSITE[kind];
	if (!n || n.length !== c.parts.length || n.some((x) => !Number.isFinite(x))) return null;
	return n.map((x, k) => c.parts[k][2] ? Math.round(x) : x);
}
var udimText = (u) => `{${r3(u[0])}, ${Math.round(u[1])}},{${r3(u[2])}, ${Math.round(u[3])}}`;
var rgbHex = (c) => "#" + c.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
var autoQ = null;
var autoQualityOnce = () => autoQ ??= autoQuality(typeof matchMedia !== "undefined" && matchMedia("(pointer: coarse)").matches);
/** Ícone de classe do Roblox como ícone da barra (mesmo desenho do Explorador). */
var CI_CACHE = /* @__PURE__ */ new Map();
var CI = (cls) => {
	let c = CI_CACHE.get(cls);
	if (!c) {
		c = ({ size }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassIcon, {
			cls,
			size: size ?? 20
		});
		CI_CACHE.set(cls, c);
	}
	return c;
};
var editable = (el) => el instanceof HTMLElement && (el.isContentEditable || [
	"INPUT",
	"TEXTAREA",
	"SELECT"
].includes(el.tagName));
/** o objeto está dentro de (ou é) uma destas raízes? */
function isUnder(p, id, roots) {
	let x = byId(p, id);
	while (x) {
		if (roots.has(x.id)) return true;
		x = x.parent ? byId(p, x.parent) : void 0;
	}
	return false;
}
/** Vida e placar do jogo, minimalistas como no Roblox: a vida só aparece quando o jogador se machuca;
*  o placar ("Pessoas") é um painel translúcido com a foto do perfil, o nome e as estatísticas. O X esconde (como a tecla Tab). */
function Hud({ info, player, user, hidden: hiddenProp, setHidden: setHiddenProp, others = [] }) {
	const [hiddenOwn, setHiddenOwn] = (0, import_react.useState)(false);
	const hidden = hiddenProp ?? hiddenOwn;
	const setHidden = (v) => {
		const fn = typeof v === "function" ? v : () => v;
		if (setHiddenProp) setHiddenProp(fn);
		else setHiddenOwn(fn);
	};
	(0, import_react.useEffect)(() => {
		const k = (e) => {
			if (e.key === "Tab" && !e.target?.closest?.("input,textarea,[contenteditable]")) {
				e.preventDefault();
				setHidden((h) => !h);
			}
		};
		addEventListener("keydown", k);
		return () => removeEventListener("keydown", k);
	}, []);
	const pct = Math.max(0, Math.min(1, info.maxHealth > 0 ? info.health / info.maxHealth : 0));
	const fmt = (v) => {
		const n = Number(v);
		if (v === "" || !Number.isFinite(n)) return String(v);
		if (Math.abs(n) < 1e4) return n.toLocaleString("pt-BR", { maximumFractionDigits: 1 });
		return new Intl.NumberFormat("pt-BR", {
			notation: "compact",
			maximumFractionDigits: 1
		}).format(n);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sl-hud",
		children: [pct < 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sl-health",
			role: "meter",
			"aria-label": "Vida",
			"aria-valuemin": 0,
			"aria-valuemax": info.maxHealth,
			"aria-valuenow": Math.round(info.health),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: {
				width: pct * 100 + "%",
				background: pct > .5 ? "#3ad15b" : pct > .25 ? "#f5c542" : "#ff4f4f"
			} })
		}), hidden ? setHiddenProp ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "sl-board-show",
			onClick: () => setHidden(false),
			"aria-label": "Mostrar o placar",
			children: "Pessoas"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sl-board",
			role: "table",
			"aria-label": "Placar",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "sl-board-x",
					onClick: () => setHidden(true),
					"aria-label": "Esconder o placar (Tab)",
					title: "Esconder (Tab)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 14 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sl-board-row head",
					role: "row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						role: "columnheader",
						children: "Pessoas"
					}), info.board.map(([k]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						role: "columnheader",
						children: k
					}, k))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sl-board-row",
					role: "row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						role: "cell",
						className: "who",
						children: [user.avatar ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivateImage, {
							variant: "thumb",
							src: user.avatar,
							alt: "",
							className: "sl-board-photo"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
							"aria-hidden": "true",
							children: (player.trim()[0] || "?").toUpperCase()
						}), player]
					}), info.board.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						role: "cell",
						children: fmt(v)
					}, k))]
				}),
				others.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sl-board-row" + (o.connecting ? " wait" : ""),
					role: "row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						role: "cell",
						className: "who",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
							"aria-hidden": "true",
							children: (o.name.trim()[0] || "?").toUpperCase()
						}), o.name]
					}), info.board.map(([k]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						role: "cell",
						children: "–"
					}, k))]
				}, o.id))
			]
		})]
	});
}
function StudioLite({ userId, playerName, avatar = null, onExit, onHome, onLeave, onBoot, onReady, quietBoot = false, playOnly }) {
	(0, import_react.useEffect)(() => protectStudioReload(), []);
	const mobile = useMedia("(pointer: coarse)");
	const [project, setProject] = (0, import_react.useState)(() => newProject());
	const past = (0, import_react.useRef)([]), future = (0, import_react.useRef)([]);
	const [, bump] = (0, import_react.useState)(0);
	const [played, setPlayed] = (0, import_react.useState)(false);
	const [boot, setBoot] = (0, import_react.useState)("on"), [engineOn, setEngineOn] = (0, import_react.useState)(0), [bootStep, setBootStep] = (0, import_react.useState)({
		done: 0,
		total: 0
	});
	const bootSynced = (0, import_react.useRef)(false);
	const [playLoad, setPlayLoad] = (0, import_react.useState)({
		label: "Conectando ao servidor…",
		done: 0,
		total: 4
	});
	const [moving, setMoving] = (0, import_react.useState)(null);
	const [selection, setSelection] = (0, import_react.useState)([]), [tool, setToolState] = (0, import_react.useState)("move"), [snap, setSnap] = (0, import_react.useState)(true), [multi, setMulti] = (0, import_react.useState)(false);
	const selected = selection[selection.length - 1] ?? null;
	const setSelected = (id) => setSelection(id ? [id] : []);
	/** Escolher (ou somar à seleção com Ctrl/Shift ou o botão "Vários"). */
	const altDown = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const k = (e) => {
			altDown.current = e.altKey;
		};
		const off = () => {
			altDown.current = false;
		};
		addEventListener("keydown", k);
		addEventListener("keyup", k);
		addEventListener("blur", off);
		return () => {
			removeEventListener("keydown", k);
			removeEventListener("keyup", k);
			removeEventListener("blur", off);
		};
	}, []);
	/** Model mais de fora que contém a peça (o que o Roblox seleciona ao clicar no 3D). */
	const modelOf = (id) => {
		const p = projectRef.current;
		let x = byId(p, id), top = null;
		while (x && x.parent && !isService(x.cls)) {
			if (x.cls === "Model") top = x.id;
			x = byId(p, x.parent);
		}
		return top ?? id;
	};
	/** Para o 3D: um Model ou Folder selecionado vira as peças dele (contorno, gizmo e arrastar movem tudo junto). */
	const partsFor = (ids) => {
		const p = projectRef.current;
		const out = /* @__PURE__ */ new Set();
		for (const id of ids) {
			const i = byId(p, id);
			if (!i) continue;
			if (isPart(i.cls)) out.add(id);
			else for (const d of descendants(p, id)) {
				const x = byId(p, d);
				if (x && isPart(x.cls)) out.add(d);
			}
		}
		return [...out];
	};
	const selectionAnchor = (0, import_react.useRef)(null);
	const pickSel = (id, additive) => {
		selectionAnchor.current = id;
		setSelection((s) => !id ? additive ? s : [] : additive ? s.includes(id) ? s.filter((x) => x !== id) : [...s, id] : [id]);
	};
	const pickTree = (id, e) => {
		if (e.shiftKey) {
			const range = siblingRange(view.insts, selectionAnchor.current, id);
			setSelection((s) => e.ctrlKey || e.metaKey ? [...new Set([...s, ...range])] : range);
		} else pickSel(id, e.ctrlKey || e.metaKey || multi);
	};
	const [ribbon, setRibbon] = (0, import_react.useState)("inicio"), [ribbonOpen, setRibbonOpen] = (0, import_react.useState)(true);
	const [tabs, setTabs] = (0, import_react.useState)([]), [active, setActive] = (0, import_react.useState)("game");
	const [play, setPlay] = (0, import_react.useState)("stopped"), [output, setOutput] = (0, import_react.useState)([]), [info, setInfo] = (0, import_react.useState)(null);
	const mpPeer = (0, import_react.useRef)(crypto.randomUUID());
	const [mp, setMp] = (0, import_react.useState)(null);
	const mpSolo = (0, import_react.useRef)(false), mpAttempt = (0, import_react.useRef)(0), [mpRestart, setMpRestart] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const m = mpSolo.current ? void 0 : playOnly?.multi;
		if (!m || play !== "playing") return;
		let room = null, session = null, alive = true, failed = false, ready = false, timer = 0, wait = 0;
		const attempt = nextMpAttempt(mpAttempt.current);
		if (!attempt) {
			engine.current?.haltNetwork();
			setMp({
				state: "failed",
				title: "Não foi possível entrar na sala",
				text: "As quatro tentativas desta abertura acabaram. Você ainda pode jogar sozinho.",
				canRetry: false,
				count: 1,
				waiting: 0
			});
			return;
		}
		mpAttempt.current = attempt;
		setMp({
			state: "joining",
			text: attempt > 1 ? `Conectando à sala… (tentativa ${attempt} de 4)` : "Conectando à sala…",
			attempt,
			count: 1,
			waiting: 0
		});
		const stop = (e, reason) => {
			if (failed) return;
			failed = true;
			clearInterval(timer);
			engine.current?.haltNetwork();
			session?.close();
			room?.leave();
			if (alive) setMp(mpFailure(ready, e, reason, attempt));
		};
		(async () => {
			try {
				const delay = mpRetryDelay(attempt);
				if (delay) await new Promise((r) => {
					wait = window.setTimeout(r, delay);
				});
				if (!alive) return;
				if (!navigator.onLine) throw new Error("Sem internet");
				const admission = await api({
					action: "mp-join",
					id: m.gameId,
					version: m.version
				});
				if (!admission.channel || admission.protocol !== 2) throw new Error("O servidor ainda precisa da atualização de salas compartilhadas.");
				const [{ GameRoom }, { GameSession }] = await Promise.all([__vitePreload(() => import("./lagtest-multiplayer-BDHZ6TWq.js"), [], import.meta.url), __vitePreload(() => import("./lagtest-game-session-fa9jEbgX.js"), __vite__mapDeps([15,1]), import.meta.url)]);
				if (!alive || !engine.current) return;
				const r = new GameRoom({
					url: endpoint.replace(/^http/, "ws").replace(/\/functions\/v1\/.*$/, "") + "/realtime/v1/websocket?apikey=" + encodeURIComponent(publicKey) + "&vsn=1.0.0",
					key: publicKey,
					gameId: m.gameId,
					name: m.name,
					build: currentBuild(),
					peer: mpPeer.current,
					channel: admission.channel,
					joinedAt: admission.joinedAt
				});
				room = r;
				r.onState = (id, s) => engine.current?.setRemote(id, r.nameOf(id), s);
				r.onLeave = (id) => engine.current?.setRemote(id, "", null);
				r.onPeers = (list) => {
					if (!alive) return;
					setMpPeers(list.map((p) => ({
						id: p.id,
						name: p.name,
						connected: p.connected
					})));
					setMp((x) => x && (x.state === "on" || x.state === "joining") ? {
						...x,
						count: 1 + list.filter((p) => p.connected).length,
						waiting: list.filter((p) => !p.connected).length
					} : x);
				};
				const shared = new GameSession(engine.current, r, projectRef.current, m.name);
				session = shared;
				shared.onError = (text, reason) => stop(new Error(text), reason);
				r.onNotice = (text) => {
					if (alive) setMp((x) => x && x.state === "on" ? {
						...x,
						text
					} : x);
				};
				shared.onReady = () => {
					if (!alive || failed) return;
					ready = true;
					setMp((x) => ({
						state: "on",
						room: r.room,
						count: x?.count ?? 1,
						waiting: x?.waiting ?? 0,
						text: "Conectado à sala"
					}));
				};
				await r.join();
				if (!alive) {
					shared.close();
					r.leave();
					return;
				}
				if (!failed) {
					setMp((x) => x && x.state === "joining" ? {
						...x,
						room: r.room,
						text: "Sincronizando a sala…"
					} : x);
					timer = window.setInterval(() => {
						const s = engine.current?.localState();
						if (s) r.send(s);
					}, 80);
				}
			} catch (e) {
				if (alive) stop(e);
			}
		})();
		return () => {
			alive = false;
			clearTimeout(wait);
			clearInterval(timer);
			session?.close();
			room?.leave();
			setMpPeers([]);
			engine.current?.clearRemotes();
		};
	}, [play, playOnly?.multi?.gameId]);
	/** Recomeça a partida: de novo na sala (Tentar de novo) ou sem rede (Jogar sozinho). */
	function restartMp(solo) {
		if (!solo && !nextMpAttempt(mpAttempt.current)) return;
		mpSolo.current = solo;
		mpPeer.current = crypto.randomUUID();
		setMenuOpen(false);
		setMp(null);
		setMpRestart(true);
		engine.current?.stop();
	}
	(0, import_react.useEffect)(() => {
		if (mpRestart && play === "stopped") {
			setMpRestart(false);
			startPlay();
		}
	}, [mpRestart, play]);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false), [boardHidden, setBoardHidden] = (0, import_react.useState)(false);
	const [sens, setSens] = (0, import_react.useState)(() => {
		try {
			const v = Number(localStorage.getItem("levelup-camera-sens"));
			return v > 0 ? v : 1;
		} catch {
			return 1;
		}
	});
	(0, import_react.useEffect)(() => {
		engine.current?.setCamSensitivity(sens);
		try {
			localStorage.setItem("levelup-camera-sens", String(sens));
		} catch {}
	}, [sens, play]);
	(0, import_react.useEffect)(() => {
		if (!playOnly) return;
		const k = (e) => {
			if (e.target?.closest?.("input,textarea")) return;
			if (e.key === "Escape") {
				e.preventDefault();
				setMenuOpen((o) => o ? false : "people");
			}
		};
		addEventListener("keydown", k);
		return () => removeEventListener("keydown", k);
	}, [!!playOnly]);
	const [mpPeers, setMpPeers] = (0, import_react.useState)([]);
	const menuPlayers = (0, import_react.useMemo)(() => {
		let guest = 0;
		const isGuest = (n) => !n.trim() || /^visitante$/i.test(n.trim());
		const label = (n) => isGuest(n) ? "Convidado_" + ++guest : n;
		return [{
			id: "me",
			name: label(playerName),
			avatar: isGuest(playerName) ? null : avatar,
			me: true,
			guest: isGuest(playerName)
		}, ...mpPeers.map((p) => ({
			id: p.id,
			name: label(p.name),
			guest: isGuest(p.name),
			connecting: !p.connected
		}))];
	}, [
		playerName,
		avatar,
		mpPeers
	]);
	const leaving = (0, import_react.useRef)(false);
	function leavePlay() {
		if (leaving.current || !playOnly) return;
		leaving.current = true;
		try {
			stopPlay();
		} catch {}
		playOnly.onClose();
	}
	(0, import_react.useEffect)(() => {
		if (play !== "playing" || !mobile) return;
		const h = document.documentElement, b = document.body;
		const old = [
			h.style.overscrollBehavior,
			b.style.overflow,
			b.style.touchAction
		];
		h.style.overscrollBehavior = "none";
		b.style.overflow = "hidden";
		b.style.touchAction = "none";
		h.classList.add("sl-gaming");
		const stop = (e) => {
			if (e.cancelable) e.preventDefault();
		};
		const opts = { passive: false };
		const move = (e) => {
			if (e.target?.closest?.("input,textarea,button,[contenteditable=\"true\"],.sl-output,.sl-chat,.po-bar,.sl-board")) return;
			stop(e);
		};
		document.addEventListener("touchmove", move, opts);
		document.addEventListener("gesturestart", stop, opts);
		document.addEventListener("selectstart", stop);
		document.addEventListener("contextmenu", stop);
		return () => {
			h.style.overscrollBehavior = old[0];
			b.style.overflow = old[1];
			b.style.touchAction = old[2];
			h.classList.remove("sl-gaming");
			document.removeEventListener("touchmove", move, opts);
			document.removeEventListener("gesturestart", stop, opts);
			document.removeEventListener("selectstart", stop);
			document.removeEventListener("contextmenu", stop);
		};
	}, [play, mobile]);
	const [panels, setPanels] = (0, import_react.useState)({
		explorer: true,
		props: true,
		output: true
	}), [drawer, setDrawer] = (0, import_react.useState)(null);
	const [toolbox, setToolbox] = (0, import_react.useState)(null);
	const [pluginHelp, setPluginHelp] = (0, import_react.useState)(false), [insertQ, setInsertQ] = (0, import_react.useState)("");
	const [menu, setMenu] = (0, import_react.useState)(null), [renaming, setRenaming] = (0, import_react.useState)(null), [help, setHelp] = (0, import_react.useState)(false), [toast, setToast] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!menu?.insert) setInsertQ("");
	}, [menu]);
	const [expanded, setExpanded] = (0, import_react.useState)(() => new Set(["Workspace", "ServerScriptService"]));
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	/** Gráficos: "auto" escolhe pelo aparelho; o aluno pode trocar em Exibir. */
	const [gfx, setGfx] = (0, import_react.useState)(() => {
		try {
			const v = localStorage.getItem("levelup-studio-graficos");
			return v === "alta" || v === "leve" ? v : "auto";
		} catch {
			return "auto";
		}
	});
	const quality = gfx === "auto" ? autoQualityOnce() : gfx;
	(0, import_react.useEffect)(() => {
		let crashed = false;
		try {
			crashed = sessionStorage.getItem("levelup-lab-aberto") === "1";
			sessionStorage.setItem("levelup-lab-aberto", "1");
		} catch {}
		if (crashed && gfx !== "leve") {
			setGfx("leve");
			setTimeout(() => say("O aparelho ficou sem memória e reiniciou o app. Ligamos os gráficos leves (dá para mudar em Exibir)."), 800);
		}
		const clean = () => {
			try {
				sessionStorage.removeItem("levelup-lab-aberto");
			} catch {}
		};
		addEventListener("pagehide", clean);
		return () => {
			removeEventListener("pagehide", clean);
			clean();
		};
	}, []);
	const [runGui, setRunGui] = (0, import_react.useState)([]);
	/** Jogando: Explorador e Propriedades mostram o jogo ao vivo (só leitura). */
	const [runTree, setRunTree] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (play === "stopped") setRunTree(null);
	}, [play]);
	const clip = (0, import_react.useRef)(null);
	const viewport = (0, import_react.useRef)(null), engine = (0, import_react.useRef)(null), fileInput = (0, import_react.useRef)(null), root = (0, import_react.useRef)(null);
	const projectRef = (0, import_react.useRef)(project);
	projectRef.current = project;
	const selRef = (0, import_react.useRef)(selected);
	selRef.current = selected;
	const selsRef = (0, import_react.useRef)(selection);
	selsRef.current = selection;
	const multiRef = (0, import_react.useRef)(multi);
	multiRef.current = multi;
	const toolRef = (0, import_react.useRef)(tool);
	toolRef.current = tool;
	const snapRef = (0, import_react.useRef)(snap);
	snapRef.current = snap;
	const say = (0, import_react.useCallback)((t) => {
		setToast(t);
		window.setTimeout(() => setToast((x) => x === t ? "" : x), 2600);
	}, []);
	const commit = (0, import_react.useCallback)((next) => {
		past.current.push(projectRef.current);
		if (past.current.length > 80) past.current.shift();
		future.current = [];
		setProject(next);
		bump((x) => x + 1);
	}, []);
	const undo = () => {
		const p = past.current.pop();
		if (!p) return;
		future.current.push(projectRef.current);
		setProject(p);
		bump((x) => x + 1);
	};
	const redo = () => {
		const n = future.current.pop();
		if (!n) return;
		past.current.push(projectRef.current);
		setProject(n);
		bump((x) => x + 1);
	};
	(0, import_react.useEffect)(() => {
		if (playOnly) {
			setProject(sanitize(playOnly.project));
			setLoaded(true);
			return;
		}
		let alive = true;
		loadCode(userId, "studio").then((t) => {
			if (!alive) return;
			if (t) try {
				setProject(sanitize(JSON.parse(t)));
			} catch {}
			setLoaded(true);
		});
		return () => {
			alive = false;
		};
	}, [userId]);
	(0, import_react.useEffect)(() => {
		if (!loaded || playOnly) return;
		const t = setTimeout(() => saveCode(userId, "studio", JSON.stringify(project)), 700);
		return () => clearTimeout(t);
	}, [
		project,
		loaded,
		userId
	]);
	/** Coloca objetos de fora (aula ou Caixa de ferramentas) no projeto: ids novos, na frente da câmera, selecionados. */
	function receive(label, insts, msg) {
		let { project: next, roots } = mergeDelivery(projectRef.current, {
			label,
			insts,
			at: Date.now()
		});
		const ws = new Set(roots.filter((id) => byId(next, id)?.parent === "Workspace"));
		if (ws.size) {
			const placed = new Map(placeModel(next.insts.filter((i) => ws.has(i.id) || descendants(next, i.id).length >= 0 && isUnder(next, i.id, ws)), engine.current?.spawnPoint() ?? [
				0,
				0,
				0
			]).map((i) => [i.id, i]));
			next = {
				...next,
				insts: next.insts.map((i) => placed.get(i.id) ?? i)
			};
		}
		commit(next);
		setSelected(roots[0] ?? null);
		say(msg);
		window.setTimeout(() => engine.current?.focus(), 400);
	}
	(0, import_react.useEffect)(() => {
		if (!loaded || playOnly) return;
		const d = takeLabDelivery();
		if (!d || !d.insts.length) return;
		receive(d.label, d.insts, `"${d.label}" chegou da aula ✓ Está no Explorador (selecionado). Mexa à vontade: o original da aula não muda.`);
	}, [loaded]);
	(0, import_react.useEffect)(() => {
		const flush = () => {
			if (loaded && !playOnly) saveCode(userId, "studio", JSON.stringify(projectRef.current));
		};
		addEventListener("pagehide", flush);
		return () => {
			removeEventListener("pagehide", flush);
			flush();
		};
	}, [loaded, userId]);
	(0, import_react.useEffect)(() => {
		if (!mobile) return;
		try {
			if (localStorage.getItem("levelup-studio-dica")) return;
			localStorage.setItem("levelup-studio-dica", "1");
		} catch {
			return;
		}
		const t = setTimeout(() => say("Dica: à direita ficam o Explorador (os objetos do jogo) e as Propriedades (cor, tamanho e posição do que você selecionar)."), 900);
		return () => clearTimeout(t);
	}, [mobile]);
	const saveNow = () => {
		saveCode(userId, "studio", JSON.stringify(projectRef.current));
		say("Projeto salvo neste aparelho ✓");
	};
	(0, import_react.useEffect)(() => {
		if (!viewport.current) return;
		const e = new StudioEngine(viewport.current, {
			select: (id, additive) => {
				const pick = id && !altDown.current ? modelOf(id) : id;
				pickSel(pick, additive || multiRef.current);
				if (pick) revealInTree(pick);
			},
			commit: (list) => {
				let p = projectRef.current;
				for (const { id, props } of list) for (const [k, v] of Object.entries(props)) p = setProp(p, id, k, v);
				commit(p);
			},
			output: (lines) => setOutput((o) => [...o, ...lines].slice(-300)),
			play: (s, msg) => {
				setDiagnosticPhase(s, playOnly?.multi ? "multiplayer" : playOnly ? "solo" : "teste-editor");
				if (msg) diagnosticEvent("game-message", msg);
				setPlay(s);
				if (s === "stopped") setInfo(null);
				if (msg) say(msg);
			},
			info: setInfo,
			deleteSelected: () => remove$1(),
			context: (x, y, id) => setMenu({
				x,
				y,
				id
			}),
			held: (id) => {
				const had = selsRef.current.includes(id);
				const n = selsRef.current.length + (had ? -1 : 1);
				const name = byId(projectRef.current, id)?.name ?? "Peça";
				say(had ? `${name} saiu da seleção.` : n > 1 ? `${n} selecionados ✓ Segure em outra peça para somar mais. Para unir: aba Modelo → Unir.` : `${name} selecionado. Segure em outra peça para selecionar várias.`);
			},
			gui: setRunGui,
			...!playOnly ? { tree: (n) => setRunTree(n) } : {},
			loading: (label, done, total) => setPlayLoad({
				label,
				done,
				total
			})
		}, {
			mobile: matchMedia("(pointer: coarse)").matches,
			quality
		});
		const stopDiagnostics = attachGameDiagnostics(e, playOnly?.multi ? "multiplayer" : playOnly ? "solo" : "teste-editor");
		e.setAssetLoader(robloxAsset, onRobloxAsset);
		engine.current = e;
		if (bootSynced.current) e.sync(projectRef.current);
		e.setTool(toolRef.current);
		e.setSnap(snapRef.current);
		e.setMulti(multiRef.current);
		e.select(partsFor(selsRef.current));
		setEngineOn((n) => n + 1);
		return () => {
			stopDiagnostics();
			e.dispose();
			engine.current = null;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		engine.current?.setQuality(quality);
	}, [quality]);
	(0, import_react.useEffect)(() => {
		const e = engine.current;
		if (!loaded || !e || bootSynced.current) return;
		let alive = true;
		e.syncInSteps(projectRef.current, (done, total) => {
			if (alive) {
				onBoot?.(total > 150 ? `Montando a cena 3D (${done} de ${total})…` : "Montando a cena 3D…", done, total);
				setBootStep({
					done,
					total
				});
			}
		}).then(() => {
			if (!alive) return;
			bootSynced.current = true;
			e.sync(projectRef.current);
			e.select(partsFor(selsRef.current));
			setBoot((b) => b === "on" ? "leaving" : b);
			window.setTimeout(() => setBoot("off"), 380);
			onReady?.();
			if (playOnly) window.setTimeout(() => startPlay(), 50);
		});
		return () => {
			alive = false;
		};
	}, [loaded, engineOn]);
	(0, import_react.useEffect)(() => {
		if (bootSynced.current) engine.current?.sync(project);
	}, [project]);
	(0, import_react.useEffect)(() => {
		engine.current?.select(partsFor(selection));
	}, [selection, project]);
	(0, import_react.useEffect)(() => {
		engine.current?.setMulti(multi);
	}, [multi]);
	(0, import_react.useEffect)(() => {
		engine.current?.setSnap(snap);
	}, [snap]);
	(0, import_react.useEffect)(() => {
		try {
			localStorage.setItem("levelup-studio-graficos", gfx);
		} catch {}
	}, [quality, gfx]);
	const setTool = (t) => {
		setToolState(t);
		engine.current?.setTool(t);
	};
	(0, import_react.useEffect)(() => {
		engine.current?.setTool(tool);
	}, []);
	const live = play !== "stopped" && runTree ? {
		...project,
		insts: runTree
	} : null;
	const view = live ?? project;
	const sel = selected ? byId(view, selected) : void 0;
	function revealInTree(id) {
		setExpanded((s) => {
			const n = new Set(s);
			let x = byId(projectRef.current, id);
			while (x?.parent) {
				n.add(x.parent);
				x = byId(projectRef.current, x.parent);
			}
			return n;
		});
	}
	function insert(def, parentHint) {
		const p = projectRef.current;
		const hint = parentHint !== void 0 ? parentHint : selRef.current;
		const h = hint ? byId(p, hint) : void 0;
		let parent = "Workspace";
		if ([
			"Shirt",
			"Pants",
			"BodyColors"
		].includes(def.cls)) {
			const model = h?.cls === "Model" ? h : h?.parent ? byId(p, h.parent) : void 0;
			if (model?.cls !== "Model") {
				say("Selecione o Model do personagem ou uma peça dele para inserir a roupa ou as cores.");
				return;
			}
			const existing = p.insts.find((i) => i.parent === model.id && i.cls === def.cls);
			if (existing) {
				setSelected(existing.id);
				say("Edite as propriedades do " + def.cls + " que já existe neste personagem.");
				return;
			}
			const item = make$1(def.cls, model.id);
			commit({
				...p,
				insts: [...p.insts, item]
			});
			setSelected(item.id);
			return;
		}
		if (def.cls === "ScreenGui" || isGui(def.cls) || isUiComponent(def.cls)) {
			let extra = [];
			if (def.cls === "ScreenGui") parent = "StarterGui";
			else if (isUiComponent(def.cls)) {
				const okList = def.cls === "UIListLayout" && !!h && (h.cls === "ScreenGui" || isWorldGui(h.cls));
				if (!h || !isGui(h.cls) && !okList) {
					say({
						UICorner: "UICorner arredonda os cantos",
						UIStroke: "UIStroke faz um contorno",
						UIGradient: "UIGradient pinta um degradê",
						UIListLayout: "UIListLayout organiza em fila os elementos de dentro"
					}[def.cls] + " de um elemento da interface. Selecione um Frame, botão, texto ou imagem.");
					return;
				}
				const same = p.insts.find((i) => i.parent === h.id && i.cls === def.cls);
				if (same) {
					setSelected(same.id);
					say(`"${h.name}" já tem um ${def.cls}. Mude as propriedades dele.`);
					return;
				}
				parent = h.id;
			} else if (h && (h.cls === "ScreenGui" || isWorldGui(h.cls) || isGui(h.cls))) parent = h.id;
			else {
				const sg = p.insts.find((i) => i.cls === "ScreenGui" && i.parent === "StarterGui");
				if (sg) parent = sg.id;
				else {
					const n = make$1("ScreenGui", "StarterGui", "ScreenGui");
					extra = [n];
					parent = n.id;
				}
			}
			const inFrame = !!h && isGui(h.cls);
			const txt = isText(def.cls), img = isImage(def.cls);
			const size = inFrame ? [
				.8,
				0,
				txt ? .25 : .4,
				0
			] : txt ? [
				.3,
				0,
				.1,
				0
			] : img ? [
				.15,
				0,
				.25,
				0
			] : [
				.3,
				0,
				.3,
				0
			];
			const props = isGui(def.cls) ? {
				Size: size,
				Position: [
					r3((1 - size[0]) / 2),
					0,
					r3((1 - size[2]) / 2),
					0
				],
				AnchorPoint: [0, 0],
				...txt ? { TextScaled: true } : {}
			} : {};
			const inst = make$1(def.cls, parent, def.cls, props);
			commit({
				...p,
				insts: [
					...p.insts,
					...extra,
					inst
				]
			});
			setSelected(inst.id);
			setExpanded((s) => {
				const n = new Set(s);
				n.add("StarterGui");
				n.add(parent);
				return n;
			});
			if (isGui(def.cls)) say(`${def.label} criado no centro, em escala (fica igual em qualquer tela). Arraste para mover e puxe as alças dos cantos para mudar o tamanho; as guias roxas encaixam no centro e nas bordas.`);
			return;
		}
		if (parentHint && h) {
			parent = [
				"Players",
				"Lighting",
				"StarterPlayer"
			].includes(h.cls) && !isScript(def.cls) ? "Workspace" : h.id;
			if (["PointLight", "ClickDetector"].includes(def.cls) && !isPart(h.cls)) parent = "";
		} else if (isScript(def.cls)) parent = h && !isScript(h.cls) && h.cls !== "Workspace" ? h.id : "ServerScriptService";
		else if (["PointLight", "ClickDetector"].includes(def.cls)) parent = h && isPart(h.cls) ? h.id : "";
		else if (def.cls.endsWith("Value")) parent = h && !isScript(h.cls) ? h.id : "Workspace";
		else if (h && (h.cls === "Tool" || h.cls === "StarterPack" || h.cls === "Model" || h.cls === "Folder" || h.cls === "Workspace" || h.cls === "ReplicatedStorage" || h.cls === "ServerStorage")) parent = h.id;
		if (!parent) {
			say(`${def.label} precisa ficar dentro de uma peça. Selecione uma peça primeiro.`);
			return;
		}
		const props = { ...def.props ?? {} };
		if (isPart(def.cls)) {
			const at = engine.current?.spawnPoint() ?? [
				0,
				0,
				0
			];
			const size = props.Size ?? defaults(def.cls).Size;
			props.Position = [
				at[0],
				size[1] / 2,
				at[2]
			];
			props.Anchored = true;
		}
		const inst = make$1(def.cls, parent, def.name ?? def.cls, props);
		commit({
			...p,
			insts: [...p.insts, inst]
		});
		setSelected(inst.id);
		setExpanded((s) => {
			const n = new Set(s);
			let x = parent;
			while (x) {
				n.add(x);
				x = byId(p, x)?.parent ?? null;
			}
			return n;
		});
		if (isScript(def.cls)) openScript(inst.id);
	}
	function remove$1(id) {
		const ids = id ? [id] : selsRef.current;
		if (!ids.length) return;
		const list = ids.map((x) => byId(projectRef.current, x)).filter((i) => !!i);
		if (list.length === 1 && isService(list[0].cls)) {
			say(`${list[0].name} é um serviço e não pode ser apagado.`);
			return;
		}
		const next = remove(projectRef.current, ids);
		commit(next);
		setSelected(null);
		setTabs((t) => t.filter((x) => next.insts.some((i) => i.id === x)));
		if (!next.insts.some((i) => i.id === active)) setActive("game");
	}
	function doUnite() {
		const r = unite(projectRef.current, selsRef.current);
		if (typeof r === "string") {
			say(r);
			return;
		}
		commit(r.project);
		setSelected(r.id);
		setMulti(false);
		say("Peças unidas ✓ Para desfazer a união, use Separar.");
	}
	function doNegate(ids = selsRef.current) {
		const r = negate(projectRef.current, ids);
		if (typeof r === "string") {
			say(r);
			return;
		}
		commit(r);
		say("Peça negada: ela vira um buraco quando você Unir com outra peça.");
	}
	function doSeparate(id = selRef.current) {
		if (!id) return;
		const r = separate(projectRef.current, id);
		if (typeof r === "string") {
			say(r);
			return;
		}
		commit(r.project);
		setSelection(r.ids);
	}
	const imageFile = (0, import_react.useRef)(null);
	/** Imagem do aparelho: reduzida (até 512 px, WebP) para o projeto continuar leve. */
	async function pickImage(file) {
		try {
			if (!file.type.startsWith("image/")) {
				say("Escolha um arquivo de imagem (PNG, JPG, WebP ou GIF).");
				return;
			}
			const url = URL.createObjectURL(file);
			const img = new Image();
			img.src = url;
			await img.decode();
			const k = Math.min(1, 512 / Math.max(img.width, img.height));
			const c = document.createElement("canvas");
			c.width = Math.max(1, Math.round(img.width * k));
			c.height = Math.max(1, Math.round(img.height * k));
			c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
			URL.revokeObjectURL(url);
			let q = .85, data = c.toDataURL("image/webp", q);
			while (data.length > 8e4 && q > .4) {
				q -= .1;
				data = c.toDataURL("image/webp", q);
			}
			if (data.length > 12e4) {
				say("Essa imagem ficou grande demais. Tente uma mais simples.");
				return;
			}
			try {
				const blob = await (await fetch(data)).blob();
				setProp$1("Image", await upload(new File([blob], "icone.webp", { type: "image/webp" })));
				say("Imagem enviada ✓ (512×512). Ela aparece no jogo publicado depois que o professor aprovar.");
				return;
			} catch {}
			setProp$1("Image", data);
			say("Imagem colocada ✓ (sem internet, ela ficou dentro do projeto).");
		} catch {
			say("Não foi possível abrir essa imagem.");
		}
	}
	function paintSelection(key, value) {
		let p = projectRef.current;
		const ids = selsRef.current.filter((id) => {
			const i = byId(p, id);
			return i && isPart(i.cls);
		});
		if (!ids.length) {
			say("Selecione uma ou mais peças primeiro.");
			return;
		}
		for (const id of ids) p = setProp(p, id, key, value);
		commit(p);
	}
	function dup(id = selRef.current) {
		if (!id) return;
		const r = duplicate(projectRef.current, id);
		if (!r) {
			say("Esse objeto não pode ser duplicado.");
			return;
		}
		commit(r.project);
		setSelected(r.id);
	}
	function copy(id = selRef.current, cut = false) {
		if (!id) return;
		const p = projectRef.current;
		const i = byId(p, id);
		if (!i || isService(i.cls)) return;
		clip.current = {
			root: structuredClone(i),
			all: [i, ...descendants(p, id).map((d) => byId(p, d))].map((x) => structuredClone(x))
		};
		if (cut) {
			remove$1(id);
			say("Recortado. Use Colar para colocar em outro lugar.");
		} else say("Copiado ✓");
	}
	function paste(target = selRef.current) {
		const c = clip.current;
		if (!c) {
			say("Nada copiado ainda.");
			return;
		}
		const p = projectRef.current;
		const t = target ? byId(p, target) : void 0;
		const parent = t && (t.cls === "Model" || t.cls === "Folder" || isService(t.cls)) ? t.id : t?.parent ?? c.root.parent ?? "Workspace";
		const map = /* @__PURE__ */ new Map();
		const copies = c.all.map((x) => {
			const n = {
				...structuredClone(x),
				id: newId()
			};
			map.set(x.id, n.id);
			return n;
		});
		for (const n of copies) {
			n.parent = n === copies[0] ? byId(p, parent) ? parent : "Workspace" : map.get(n.parent) ?? n.parent;
			for (const key of [
				"Part0",
				"Part1",
				"PrimaryPart",
				"Adornee"
			]) if (typeof n.props[key] === "string") n.props[key] = map.get(n.props[key]) ?? n.props[key];
		}
		if (isPart(copies[0].cls)) {
			const pos = copies[0].props.Position;
			copies[0].props.Position = [
				pos[0] + 2,
				pos[1],
				pos[2] + 2
			];
		}
		commit({
			...p,
			insts: [...p.insts, ...copies]
		});
		setSelected(copies[0].id);
		revealInTree(copies[0].id);
	}
	/** Agrupar (Ctrl+G): junta TODOS os objetos selecionados num Model, como no Roblox Studio.
	*  O Model fica onde está o último selecionado; objetos que já estão dentro de outro selecionado vão junto com ele. */
	function group(id) {
		let p = projectRef.current;
		const chosen = (id && !selsRef.current.includes(id) ? [id] : selsRef.current).filter((x) => {
			const i = byId(p, x);
			return i && !isService(i.cls);
		});
		if (!chosen.length) return;
		const top = chosen.filter((x) => !chosen.some((o) => o !== x && descendants(p, o).includes(x)));
		const model = make$1("Model", byId(p, top[top.length - 1]).parent, "Model");
		p = {
			...p,
			insts: [...p.insts, model]
		};
		for (const x of top) p = reparent(p, x, model.id);
		commit(p);
		setSelected(model.id);
		revealInTree(top[0]);
		if (top.length > 1) say(top.length + " objetos agrupados em um Model.");
	}
	function ungroup(id = selRef.current) {
		if (!id) return;
		let p = projectRef.current;
		const i = byId(p, id);
		if (!i || i.cls !== "Model" && i.cls !== "Folder") {
			say("Desagrupar funciona em um Model ou Folder.");
			return;
		}
		for (const c of children(p, id)) p = reparent(p, c.id, i.parent);
		commit(remove(p, [id]));
		setSelected(null);
	}
	function rename(id, name) {
		const n = name.trim();
		setRenaming(null);
		if (!n) return;
		commit(setProp(projectRef.current, id, "Name", n));
	}
	function openScript(id) {
		setTabs((t) => t.includes(id) ? t : [...t, id]);
		setActive(id);
		if (mobile) setDrawer(null);
	}
	function closeTab(id) {
		setTabs((t) => t.filter((x) => x !== id));
		if (active === id) setActive("game");
	}
	/** Muda a propriedade em TODOS os selecionados que a têm (como no Roblox Studio), não só no último. */
	function setProp$1(key, value) {
		if (!selected) return;
		let p = projectRef.current;
		const ids = selsRef.current.filter((x) => {
			const i = byId(p, x);
			return i && (x === selected || key === "Name" || key in i.props);
		});
		for (const id of ids) {
			p = setProp(p, id, key, value);
			if (key === "MeshId" && byId(p, id)?.cls === "MeshPart") p = setProp(p, id, "AutoSize", true);
			if (key === "TextureID" && byId(p, id)?.cls === "MeshPart" && byId(p, id)?.props.TextureData) {
				p = setProp(p, id, "TextureData", "");
				p = setProp(p, id, "TextureKey", "");
			}
		}
		commit(p);
	}
	/** Malha ou textura da Roblox chegou (ou falhou). */
	function onRobloxAsset(e) {
		if (e.error) {
			const what = (e.kind === "mesh" ? "Malha " : "Textura ") + e.id;
			const text = /ROBLOX_API_KEY/.test(e.error) ? what + ": o servidor ainda não tem a chave da Roblox, então a MeshPart aparece só com a forma simplificada. O administrador precisa cadastrar a chave ROBLOX_API_KEY." : /internet|fetch|network/i.test(e.error) ? what + ": sem internet. A malha aparece simplificada até a conexão voltar." : what + ": " + e.error;
			say(text);
			setOutput((o) => [...o, {
				kind: "warn",
				text,
				source: "",
				time: (/* @__PURE__ */ new Date()).toLocaleTimeString("pt-BR", {
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit"
				})
			}].slice(-300));
			return;
		}
		if (e.kind !== "mesh" || !e.size) return;
		const size = e.size;
		const idOf = assetIdOf;
		const cur = projectRef.current;
		const waiting = cur.insts.filter((i) => i.cls === "MeshPart" && i.props.AutoSize && idOf(i.props.MeshId) === e.id);
		if (!waiting.length) return;
		let next = cur;
		for (const i of waiting) {
			next = setProp(next, i.id, "Size", size);
			next = setProp(next, i.id, "InitialSize", size);
			next = {
				...next,
				insts: next.insts.map((x) => x.id === i.id ? {
					...x,
					props: Object.fromEntries(Object.entries(x.props).filter(([k]) => k !== "AutoSize"))
				} : x)
			};
		}
		setProject(next);
		say("Malha carregada ✓ A peça ficou do tamanho original (" + size.map((n) => +n.toFixed(2)).join(" × ") + ").");
	}
	(0, import_react.useRef)(null);
	function editSource(id, code) {
		setProject((p) => setProp(p, id, "Source", code));
	}
	function startPlay() {
		if (play !== "stopped") return;
		setPlayLoad({
			label: "Conectando ao servidor…",
			done: 0,
			total: 4
		});
		setActive("game");
		setDrawer(null);
		setOutput((o) => o.slice(-100));
		setMenu(null);
		engine.current?.play(projectRef.current, playerName, (mpSolo.current ? void 0 : playOnly?.multi) ? mpPeer.current : void 0);
	}
	function stopPlay() {
		engine.current?.stop();
	}
	const [publishing, setPublishing] = (0, import_react.useState)(null);
	async function openPublish() {
		let snap = null;
		try {
			snap = engine.current?.viewSnapshot(960, 600) ?? null;
		} catch {}
		let linked = null;
		try {
			linked = await (await __vitePreload(async () => {
				const { currentGame } = await import("./lagtest-lab-projects-BdqARTUN.js");
				return { currentGame };
			}, __vite__mapDeps([16,7,8,1]), import.meta.url)).currentGame(userId);
		} catch {}
		setPublishing({
			snap,
			linked
		});
	}
	function published(id, title) {
		const p = projectRef.current;
		if (p.name !== title) commit({
			...p,
			name: title
		});
		__vitePreload(() => import("./lagtest-lab-projects-BdqARTUN.js").then((m) => m.linkGame(userId, id, title)), __vite__mapDeps([16,7,8,1]), import.meta.url).catch(() => {});
	}
	(0, import_react.useEffect)(() => {
		if (play === "playing") setPlayed(true);
	}, [play]);
	function exportFile() {
		const xml = toRbxlx(projectRef.current);
		const blob = new Blob([xml], { type: "application/xml" });
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = (projectRef.current.name || "Meu jogo").replace(/[\\/:*?"<>|]/g, "") + ".rbxlx";
		a.click();
		setTimeout(() => URL.revokeObjectURL(a.href), 4e3);
		say("Arquivo .rbxlx baixado. Abra no Roblox Studio ou envie para um colega.");
	}
	const modelInput = (0, import_react.useRef)(null), modelTarget = (0, import_react.useRef)(null);
	const model3dInput = (0, import_react.useRef)(null), [import3dHelp, setImport3dHelp] = (0, import_react.useState)(false), [importing, setImporting] = (0, import_react.useState)(false), [characterImport, setCharacterImport] = (0, import_react.useState)(false);
	async function import3dFiles(files) {
		if (!files.length) return;
		setImport3dHelp(false);
		setImporting(true);
		try {
			const { import3d } = await __vitePreload(async () => {
				const { import3d } = await import("./lagtest-import3d-bxlntHp7.js");
				return { import3d };
			}, [], import.meta.url);
			const r = await import3d(files);
			receive(r.name, r.insts, `"${r.name}" importado ✓ ${r.parts} peça${r.parts === 1 ? "" : "s"} · ${r.triangles.toLocaleString("pt-BR")} triângulos${r.scaled ? " · tamanho ajustado para caber no mundo" : ""}${r.notes.length ? " · " + r.notes.join(" ") : ""}`);
			if (r.notes.length) setOutput((o) => [...o, ...r.notes.map((text) => ({
				kind: "warn",
				text: r.name + ": " + text,
				source: "",
				time: (/* @__PURE__ */ new Date()).toLocaleTimeString("pt-BR", {
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit"
				})
			}))].slice(-300));
		} catch (e) {
			say(e instanceof Error ? e.message : "Não foi possível importar esse modelo.");
		} finally {
			setImporting(false);
		}
	}
	const UNION_HELP = (n) => `Importado ✓ ${n === 1 ? "Uma união veio" : `${n} uniões vieram`} como bloco: o Roblox guarda a forma das uniões nos servidores dele, não no arquivo. Para trazer a forma certinha: no Roblox Studio, selecione a união → Separar (Ctrl+Shift+U) e exporte de novo; aqui, selecione as peças e use Unir (aba Modelo).`;
	const SHAPED_HELP = (n, name) => `"${name}" importado, mas ${n === 1 ? "1 união veio" : `${n} uniões vieram`} só com o contorno e numa cor: ${n === 1 ? "ela veio" : "elas vieram"} da Caixa de Ferramentas (Toolbox) e o Roblox não guarda as peças dessas uniões no arquivo. Para ficar IDÊNTICO: no Roblox Studio, selecione a união → Separar (Ctrl+Shift+U), salve de novo e importe aqui. As uniões que você mesmo fez já vêm idênticas.`;
	const MESH_NOTE = (insts) => {
		const n = insts.filter((i) => i.cls === "MeshPart").length;
		return n ? ` ${n === 1 ? "1 MeshPart veio" : `${n} MeshParts vieram`} com a forma de colisão (a malha fica no Roblox e volta igual quando você exportar).` : "";
	};
	const baseName = (f) => f.name.replace(/\.(rbxmx?|rbxlx?|json)$/i, "");
	function download(text, name) {
		const blob = new Blob([text], { type: "application/xml" });
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = name.replace(/[\\/:*?"<>|]/g, "") || "modelo";
		a.click();
		setTimeout(() => URL.revokeObjectURL(a.href), 4e3);
	}
	/** Objeto → modelo .rbxmx (no Roblox Studio: botão direito → "Inserir do arquivo…"). */
	function exportModel(id = selRef.current) {
		if (!id) return;
		const i = byId(projectRef.current, id);
		if (!i || isService(i.cls)) {
			say("Escolha um objeto (peça, Model, Folder ou script) para exportar.");
			return;
		}
		download(toRbxlx(projectRef.current, [id]), i.name + ".rbxmx");
		say(`"${i.name}.rbxmx" baixado. No Roblox Studio: botão direito → Inserir do arquivo…`);
	}
	/** Modelo feito no Roblox Studio (.rbxmx) → entra no projeto atual, sem apagar nada. */
	async function importModelFile(file) {
		try {
			const bytes = new Uint8Array(await file.arrayBuffer());
			const p = projectRef.current;
			const t = modelTarget.current ? byId(p, modelTarget.current) : void 0;
			const parent = t && (t.cls === "Model" || t.cls === "Folder" || t.cls === "Workspace" || t.cls === "ReplicatedStorage" || t.cls === "ServerStorage" || t.cls === "ServerScriptService") ? t.id : "Workspace";
			let { insts, roots, skipped, approx, shaped, rebuilt } = importModel(bytes, parent);
			if (!insts.length) {
				say("Esse arquivo não tem objetos que o Laboratório conheça.");
				return;
			}
			if (parent === "Workspace") insts = placeModel(insts, engine.current?.spawnPoint() ?? [
				0,
				0,
				0
			]);
			commit({
				...p,
				insts: [...p.insts, ...insts]
			});
			setSelected(roots[0]);
			setExpanded((s) => new Set(s).add(parent));
			const left = skipped ? ` (${skipped} objeto(s) que o Laboratório ainda não conhece ficaram de fora)` : "";
			say((rebuilt && !shaped && !approx ? `"${baseName(file)}" importado ✓ ${rebuilt === 1 ? "1 união veio" : `${rebuilt} uniões vieram`} com as peças e cores originais, igual ao Roblox.` : approx ? UNION_HELP(approx) : shaped ? SHAPED_HELP(shaped, baseName(file)) : `Modelo "${baseName(file)}" importado ✓`) + MESH_NOTE(insts) + left);
		} catch (e) {
			say(e instanceof Error ? e.message : "Não foi possível importar o modelo.");
		} finally {
			modelTarget.current = null;
		}
	}
	function pickModel(target = null) {
		modelTarget.current = target;
		modelInput.current?.click();
	}
	async function openFile(file) {
		try {
			let next;
			let skipped = 0;
			let approx = 0, shaped = 0;
			if (/\.json$/i.test(file.name)) next = sanitize(JSON.parse(await file.text()));
			else {
				const r = fromRbxlx(new Uint8Array(await file.arrayBuffer()));
				next = r.project;
				skipped = r.skipped;
				approx = r.approx;
				shaped = r.shaped;
			}
			if (!confirm("Abrir este arquivo troca o projeto atual (dá para voltar com Desfazer). Continuar?")) return;
			next = {
				...next,
				name: baseName(file).slice(0, 80)
			};
			commit(next);
			setSelected(null);
			setTabs([]);
			setActive("game");
			say(approx ? UNION_HELP(approx) : shaped ? SHAPED_HELP(shaped, next.name) : skipped ? `Projeto aberto. ${skipped} objeto(s) que o Laboratório ainda não conhece ficaram de fora.` : "Projeto aberto ✓");
		} catch (e) {
			say(e instanceof Error ? e.message : "Não foi possível abrir o arquivo.");
		}
	}
	function newProject$1() {
		if (!confirm("Começar um projeto novo? O atual pode ser recuperado com Desfazer.")) return;
		commit(newProject());
		setSelected(null);
		setTabs([]);
		setActive("game");
	}
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (characterImport) return;
			if (!root.current?.contains(document.activeElement) && document.activeElement !== document.body) return;
			const k = e.key.toLowerCase(), ctrl = e.ctrlKey || e.metaKey;
			if (e.key === "F5") {
				e.preventDefault();
				e.shiftKey ? stopPlay() : startPlay();
				return;
			}
			if (ctrl && k === "s") {
				e.preventDefault();
				saveNow();
				return;
			}
			if (ctrl && k === "e") {
				e.preventDefault();
				exportFile();
				return;
			}
			if (ctrl && !e.shiftKey && (k === "r" || k === "t")) e.preventDefault();
			if (editable(e.target)) return;
			if (play !== "stopped") return;
			if (ctrl && !e.shiftKey && (k === "r" || k === "t")) {
				const ids = partsFor(selsRef.current);
				if (!ids.length) {
					say("Selecione uma peça para girar.");
					return;
				}
				commit(rotateParts(projectRef.current, ids, k === "r" ? [
					0,
					90,
					0
				] : [
					90,
					0,
					0
				]));
				return;
			}
			if (!e.altKey && !e.shiftKey && [
				"1",
				"2",
				"3",
				"4"
			].includes(k)) {
				e.preventDefault();
				setTool([
					"select",
					"move",
					"scale",
					"rotate"
				][+k - 1]);
				return;
			}
			if (ctrl && k === "z" && !e.shiftKey) {
				e.preventDefault();
				undo();
				return;
			}
			if (ctrl && (k === "y" || k === "z" && e.shiftKey)) {
				e.preventDefault();
				redo();
				return;
			}
			if (ctrl && k === "d") {
				e.preventDefault();
				dup();
				return;
			}
			if (ctrl && k === "c") {
				e.preventDefault();
				copy();
				return;
			}
			if (ctrl && k === "x") {
				e.preventDefault();
				copy(selRef.current, true);
				return;
			}
			if (ctrl && k === "v") {
				e.preventDefault();
				paste();
				return;
			}
			if (ctrl && e.shiftKey && k === "g") {
				e.preventDefault();
				doUnite();
				return;
			}
			if (ctrl && e.shiftKey && k === "n") {
				e.preventDefault();
				doNegate();
				return;
			}
			if (ctrl && e.shiftKey && k === "u") {
				e.preventDefault();
				doSeparate();
				return;
			}
			if (ctrl && k === "g") {
				e.preventDefault();
				group();
				return;
			}
			if (ctrl && k === "u") {
				e.preventDefault();
				ungroup();
				return;
			}
			if (ctrl && k === "l") {
				e.preventDefault();
				setSnap((s) => !s);
				return;
			}
			if (k === "delete") {
				e.preventDefault();
				remove$1();
				return;
			}
			if (e.key === "F2" && selRef.current) {
				e.preventDefault();
				setRenaming(selRef.current);
				return;
			}
			if (e.key === "?") {
				setHelp(true);
				return;
			}
			if (k === "escape") {
				setMenu(null);
				setHelp(false);
			}
		};
		addEventListener("keydown", onKey);
		return () => removeEventListener("keydown", onKey);
	});
	const visible = () => {
		const out = [];
		const walk = (id) => {
			for (const c of children(view, id)) {
				out.push(c);
				if (expanded.has(c.id)) walk(c.id);
			}
		};
		walk(null);
		return out;
	};
	const lastTap = (0, import_react.useRef)({
		id: "",
		at: 0
	});
	/** Segurar uma linha do Explorador = somar à seleção (como clicar e segurar na cena). */
	const rowHold = (0, import_react.useRef)(null);
	const holdStart = (e, id) => {
		if (e.pointerType === "mouse" && e.button !== 0) return;
		const h = {
			t: 0,
			x: e.clientX,
			y: e.clientY,
			fired: false
		};
		h.t = setTimeout(() => {
			h.fired = true;
			const had = selsRef.current.includes(id);
			pickSel(id, true);
			try {
				navigator.vibrate?.(25);
			} catch {}
			say(had ? "Saiu da seleção." : "Somado à seleção ✓ Segure em outro item para somar mais.");
		}, 500);
		rowHold.current = h;
	};
	const holdMove = (e) => {
		const h = rowHold.current;
		if (h && Math.hypot(e.clientX - h.x, e.clientY - h.y) > 8) {
			clearTimeout(h.t);
			rowHold.current = null;
		}
	};
	const holdEnd = () => {
		const h = rowHold.current;
		if (h) clearTimeout(h.t);
	};
	const focusRow = (id) => requestAnimationFrame(() => (root.current?.querySelector(`.sl-row[data-id="${id}"]`))?.focus());
	function treeKey(e, i) {
		if (e.target.tagName === "INPUT") return;
		const list = visible();
		const k = list.findIndex((x) => x.id === i.id);
		const go = (x) => {
			if (!x) return;
			e.preventDefault();
			setSelected(x.id);
			focusRow(x.id);
		};
		if (e.key === "ArrowDown") go(list[k + 1]);
		else if (e.key === "ArrowUp") go(list[k - 1]);
		else if (e.key === "Home") go(list[0]);
		else if (e.key === "End") go(list[list.length - 1]);
		else if (e.key === "ArrowRight") {
			e.preventDefault();
			if (children(view, i.id).length && !expanded.has(i.id)) setExpanded((s) => new Set(s).add(i.id));
			else go(children(view, i.id)[0]);
		} else if (e.key === "ArrowLeft") {
			e.preventDefault();
			if (expanded.has(i.id)) setExpanded((s) => {
				const n = new Set(s);
				n.delete(i.id);
				return n;
			});
			else if (i.parent) go(byId(view, i.parent));
		} else if (e.key === "Enter") {
			e.preventDefault();
			if (isScript(i.cls)) openScript(i.id);
			else if (isPart(i.cls)) {
				setSelected(i.id);
				engine.current?.focus();
			}
		} else if (e.key === "ContextMenu" || e.shiftKey && e.key === "F10") {
			e.preventDefault();
			const r = e.currentTarget.getBoundingClientRect();
			setMenu({
				x: r.left + 20,
				y: r.bottom,
				id: i.id
			});
		} else if (e.key === "Insert" || e.key === "+") {
			e.preventDefault();
			const r = e.currentTarget.getBoundingClientRect();
			setMenu({
				x: r.left + 20,
				y: r.bottom,
				id: i.id,
				insert: true
			});
		}
	}
	/** Pode receber os objetos que estão sendo movidos? (não pode ir para dentro de si mesmo nem de um filho) */
	function canHold(dest) {
		const p = projectRef.current;
		return !!moving && moving.every((x) => x !== dest && !descendants(p, x).includes(dest));
	}
	function moveInto(dest) {
		if (!moving) return;
		let p = projectRef.current;
		const d = byId(p, dest);
		if (!d) return;
		if (!canHold(dest)) {
			say("Não dá para colocar um objeto dentro dele mesmo.");
			return;
		}
		for (const x of moving) p = reparent(p, x, dest);
		if (p !== projectRef.current) {
			commit(p);
			setExpanded((s) => new Set(s).add(dest));
			say(`Movido para dentro de "${d.name}" ✓`);
		}
		setMoving(null);
	}
	function row(i, depth) {
		const kids = children(view, i.id);
		const open = expanded.has(i.id);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			role: "treeitem",
			"aria-label": `${i.name}, ${i.cls}`,
			"aria-level": depth + 1,
			"aria-expanded": kids.length ? open : void 0,
			"aria-selected": selection.includes(i.id),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sl-row" + (selection.includes(i.id) ? " on" : "") + (moving ? moving.includes(i.id) ? " moving" : canHold(i.id) ? " drop-ok" : " drop-no" : ""),
				"data-id": i.id,
				tabIndex: (selected ?? "Workspace") === i.id ? 0 : -1,
				onKeyDown: (e) => treeKey(e, i),
				style: { paddingLeft: 6 + depth * 14 },
				draggable: !isService(i.cls) && !mobile,
				onDragStart: (e) => {
					e.dataTransfer.setData("text/sl-id", i.id);
				},
				onDragOver: (e) => {
					if (e.dataTransfer.types.includes("text/sl-id")) e.preventDefault();
				},
				onDrop: (e) => {
					const id = e.dataTransfer.getData("text/sl-id");
					if (id && id !== i.id) {
						const next = reparent(projectRef.current, id, i.id);
						if (next !== projectRef.current) {
							commit(next);
							setExpanded((s) => new Set(s).add(i.id));
						}
					}
				},
				onPointerDown: (e) => holdStart(e, i.id),
				onPointerMove: holdMove,
				onPointerUp: holdEnd,
				onPointerCancel: holdEnd,
				onClick: (e) => {
					if (rowHold.current?.fired) {
						rowHold.current = null;
						return;
					}
					rowHold.current = null;
					if (moving) {
						moveInto(i.id);
						return;
					}
					const t = lastTap.current;
					const now = performance.now();
					lastTap.current = {
						id: i.id,
						at: now
					};
					pickTree(i.id, e);
					if (mobile && t.id === i.id && now - t.at < 400 && isScript(i.cls)) openScript(i.id);
				},
				onDoubleClick: () => {
					if (isScript(i.cls)) openScript(i.id);
					else if (isPart(i.cls)) engine.current?.focus();
					else setRenaming(i.id);
				},
				onContextMenu: (e) => {
					e.preventDefault();
					if (mobile || rowHold.current?.fired) return;
					if (rowHold.current) {
						clearTimeout(rowHold.current.t);
						rowHold.current = null;
					}
					setSelected(i.id);
					setMenu({
						x: e.clientX,
						y: e.clientY,
						id: i.id
					});
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "sl-twist" + (open ? " open" : ""),
						"aria-label": (open ? "Recolher " : "Mostrar o que tem dentro de ") + i.name,
						title: open ? "Recolher" : `Mostrar o que tem dentro (${kids.length})`,
						style: { visibility: kids.length ? "visible" : "hidden" },
						onClick: (e) => {
							e.stopPropagation();
							setExpanded((s) => {
								const n = new Set(s);
								n.has(i.id) ? n.delete(i.id) : n.add(i.id);
								return n;
							});
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							viewBox: "0 0 12 12",
							width: "12",
							height: "12",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M3.5 1.5 9.5 6l-6 4.5z",
								fill: "currentColor"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassIcon, {
						cls: i.cls,
						color: isPart(i.cls) ? rgbHex(i.props.Color) : void 0
					}),
					renaming === i.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "sl-rename",
						autoFocus: true,
						defaultValue: i.name,
						onBlur: (e) => rename(i.id, e.target.value),
						onKeyDown: (e) => {
							if (e.key === "Enter") rename(i.id, e.target.value);
							if (e.key === "Escape") setRenaming(null);
						},
						onClick: (e) => e.stopPropagation()
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sl-name",
						children: i.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "sl-row-add",
						"aria-label": "Inserir objeto em " + i.name,
						title: "Inserir objeto em " + i.name,
						onClick: (e) => {
							e.stopPropagation();
							setSelected(i.id);
							const r = e.currentTarget.getBoundingClientRect();
							setMenu({
								x: r.left,
								y: r.bottom,
								id: i.id,
								insert: true
							});
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 15 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "sl-row-more",
						"aria-label": "Ações de " + i.name,
						onClick: (e) => {
							e.stopPropagation();
							setSelected(i.id);
							const r = e.currentTarget.getBoundingClientRect();
							setMenu({
								x: r.left,
								y: r.bottom,
								id: i.id
							});
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { size: 15 })
					})
				]
			}), open && kids.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				role: "group",
				style: { "--g": `${(mobile ? 24 : 15) + depth * 14}px` },
				children: kids.map((k) => row(k, depth + 1))
			})]
		}, i.id);
	}
	const explorer = !playOnly && (mobile ? drawer === "explorer" : panels.explorer) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "sl-panel sl-explorer",
		"aria-label": "Explorador",
		children: [
			moving && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sl-moving",
				role: "status",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Toque no objeto de destino para colocar ",
						moving.length > 1 ? `os ${moving.length} objetos` : "o objeto",
						" dentro dele."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => moveInto("Workspace"),
						children: "Tirar para o Workspace"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMoving(null),
						children: "Cancelar"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderTree, { size: 14 }),
				"Explorador",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "sl-icon",
					title: "Inserir objeto",
					"aria-label": "Inserir objeto",
					onClick: (e) => {
						const r = e.currentTarget.getBoundingClientRect();
						setMenu({
							x: r.left,
							y: r.bottom,
							id: selected,
							insert: true
						});
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 15 })
				})
			] }),
			live && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sl-live",
				role: "status",
				children: "● Ao vivo: o jogo como está agora"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "sl-tree",
				role: "tree",
				children: children(view, null).map((i) => row(i, 0))
			})
		]
	});
	const readOnly = play !== "stopped";
	function field(d, v) {
		const id = "slp-" + d.name;
		if (d.kind === "bool") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			type: "checkbox",
			checked: !!v,
			disabled: readOnly,
			onChange: (e) => setProp$1(d.name, e.target.checked)
		});
		if (d.kind === "ref") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			id,
			value: v ?? "",
			disabled: readOnly,
			onChange: (e) => setProp$1(d.name, e.target.value || null),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				children: "Nenhuma"
			}), view.insts.filter((i) => isPart(i.cls)).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: i.id,
				children: fullName(view, i)
			}, i.id))]
		});
		if (d.kind === "enum") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			id,
			value: v,
			disabled: readOnly,
			onChange: (e) => setProp$1(d.name, e.target.value),
			children: d.options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))
		});
		if (d.kind === "color") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorPicker, {
			value: v,
			label: d.name,
			disabled: readOnly,
			onChange: (c) => setProp$1(d.name, c)
		});
		if (d.kind === "colorseq") {
			const seq = Array.isArray(v) ? v : [[
				0,
				255,
				255,
				255
			], [
				1,
				0,
				0,
				0
			]];
			const first = seq[0], last = seq[seq.length - 1];
			const set = (k, c) => {
				const next = seq.map((x) => [...x]);
				next[k === 0 ? 0 : next.length - 1] = [k === 0 ? 0 : 1, ...c];
				setProp$1(d.name, next);
			};
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "sl-seq",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sl-seq-bar",
						style: { background: `linear-gradient(90deg,${seq.map((x) => `rgb(${x[1]},${x[2]},${x[3]}) ${x[0] * 100}%`).join(",")})` }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorPicker, {
						compact: true,
						value: first.slice(1),
						label: "Cor do começo",
						disabled: readOnly,
						onChange: (c) => set(0, c)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorPicker, {
						compact: true,
						value: last.slice(1),
						label: "Cor do fim",
						disabled: readOnly,
						onChange: (c) => set(1, c)
					})
				]
			});
		}
		if (COMPOSITE[d.kind]) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
			value: compText(d.kind, v),
			text: true,
			disabled: readOnly,
			onCommit: (t) => {
				const r = compParse(d.kind, String(t));
				if (r) setProp$1(d.name, d.kind === "vec3" ? r.map((n) => Math.max(d.min ?? -1e6, n)) : r);
				else say("Escreva " + COMPOSITE[d.kind].hint);
			}
		});
		if (d.kind === "image") {
			const src = imageSrc(v);
			const isData = typeof v === "string" && v.startsWith("data:");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "sl-image",
				children: [
					src && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: "",
						referrerPolicy: "no-referrer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
						value: isData ? "(arquivo do aparelho)" : v ?? "",
						text: true,
						disabled: readOnly,
						onCommit: (x) => {
							const t = String(x).trim();
							if (t === "(arquivo do aparelho)") return;
							if (t && !/^(https?:\/\/|rbxassetid:\/\/|rbxasset:\/\/|\/api\/media\/[a-f0-9-]{36}$)/i.test(t)) {
								say("Use um link que comece com https:// (ou rbxassetid://) ou escolha um arquivo.");
								return;
							}
							setProp$1(d.name, t);
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "sl-image-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: readOnly,
							onClick: () => imageFile.current?.click(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 13 }), "Arquivo"]
						}), v && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: readOnly,
							onClick: () => setProp$1(d.name, ""),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 13 }), "Tirar"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
						className: "sl-image-help",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, { size: 11 }), " Cole o link de uma imagem da web (ex.: https://…webp) ou escolha um arquivo."]
					})
				]
			});
		}
		if (d.kind === "number") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
			value: v,
			step: d.step,
			min: d.min,
			max: d.max,
			disabled: readOnly,
			onCommit: (n) => setProp$1(d.name, Math.min(d.max ?? 1e9, Math.max(d.min ?? -1e9, Number(n))))
		});
		if (d.name === "TextureID" && sel?.cls === "MeshPart" && typeof sel.props.TextureData === "string" && sel.props.TextureData) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "sl-image",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: sel.props.TextureData,
					alt: ""
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "(textura importada)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sl-image-actions",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: readOnly,
						onClick: () => {
							setProp$1("TextureID", "");
							say("Textura removida ✓ Agora a Color pinta a malha.");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 13 }), "Remover textura"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
					className: "sl-image-help",
					children: "Com textura, a Color só aparece nas partes transparentes da imagem (igual ao Roblox)."
				})
			]
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
			value: v ?? "",
			text: true,
			disabled: readOnly,
			onCommit: (s) => setProp$1(d.name, String(s))
		});
	}
	const [pfilter, setPfilter] = (0, import_react.useState)(""), [closedGroups, setClosedGroups] = (0, import_react.useState)(() => /* @__PURE__ */ new Set()), [openProps, setOpenProps] = (0, import_react.useState)(() => /* @__PURE__ */ new Set());
	const defs = sel ? PROPS[sel.cls] ?? [] : [];
	const groups = [...new Set(defs.map((d) => d.group))];
	const props = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "sl-panel sl-props",
		"aria-label": "Propriedades",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { size: 14 }),
			"Propriedades",
			sel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: selection.length > 1 ? `${selection.length} selecionados · mudanças valem para todos` : `${sel.cls} "${sel.name}"` })
		] }), !sel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "sl-tip",
			children: "Selecione um objeto na cena ou no Explorador para ver e mudar as propriedades dele."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sl-props-body",
			children: [
				readOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sl-tip",
					children: "Jogando: pare o jogo para editar."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "sl-pfilter",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "search",
						placeholder: "Filtrar propriedades (ex.: Size)",
						value: pfilter,
						onChange: (e) => setPfilter(e.target.value),
						"aria-label": "Filtrar propriedades"
					})
				}),
				!pfilter && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sl-group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Dados" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sl-prop",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "slp-Name",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
								value: sel.name,
								text: true,
								disabled: readOnly || isService(sel.cls),
								onCommit: (s) => rename(sel.id, String(s))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sl-prop",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ClassName" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: sel.cls })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sl-prop",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Parent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: sel.parent ? byId(view, sel.parent)?.name : "game" })]
						})
					]
				}),
				groups.map((g) => {
					const list = defs.filter((d) => d.group === g && (!pfilter || d.name.toLowerCase().includes(pfilter.toLowerCase())));
					if (!list.length) return null;
					const shut = closedGroups.has(g) && !pfilter;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sl-group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "sl-ghead" + (shut ? "" : " open"),
							"aria-expanded": !shut,
							onClick: () => setClosedGroups((c) => {
								const n = new Set(c);
								n.has(g) ? n.delete(g) : n.add(g);
								return n;
							}),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 12 12",
								width: "10",
								height: "10",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M3.5 1.5 9.5 6l-6 4.5z",
									fill: "currentColor"
								})
							}), g]
						}), !shut && list.map((d) => {
							const v = sel.props[d.name];
							const comp = COMPOSITE[d.kind];
							const sub = !!comp && openProps.has(d.name);
							const u = v ?? comp?.parts.map(() => 0) ?? [];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sl-prow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sl-prop",
									children: [comp ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "sl-pname sl-pexp" + (sub ? " open" : ""),
										"aria-expanded": sub,
										onClick: () => setOpenProps((o) => {
											const n = new Set(o);
											n.has(d.name) ? n.delete(d.name) : n.add(d.name);
											return n;
										}),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 12 12",
											width: "9",
											height: "9",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M3.5 1.5 9.5 6l-6 4.5z",
												fill: "currentColor"
											})
										}), d.name]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "sl-pname",
										htmlFor: "slp-" + d.name,
										children: d.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "sl-pval",
										children: field(d, v)
									})]
								}), sub && comp.parts.map(([nm, step, int], k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sl-prop sub",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sl-pname",
										children: nm
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "sl-pval",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
											value: u[k],
											step,
											disabled: readOnly,
											onCommit: (n) => {
												const next = [...u];
												next[k] = int ? Math.round(Number(n)) : Number(n);
												setProp$1(d.name, next);
											}
										})
									})]
								}, nm))]
							}, d.name);
						})]
					}, g);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: imageFile,
					type: "file",
					accept: "image/*",
					hidden: true,
					onChange: (e) => {
						const fl = e.target.files?.[0];
						if (fl) pickImage(fl);
						e.target.value = "";
					}
				}),
				isScript(sel.cls) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "sl-wide",
					onClick: () => openScript(sel.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCode, { size: 15 }), "Abrir script"]
				})
			]
		})]
	});
	const outBox = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const b = outBox.current;
		if (b) b.scrollTop = b.scrollHeight;
	}, [output]);
	const scriptByName = (name) => project.insts.find((i) => isScript(i.cls) && fullName(project, i) === name);
	const out = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "sl-panel sl-output",
		"aria-label": "Saída",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { size: 14 }),
			"Saída",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "sl-icon",
				onClick: () => setOutput([]),
				title: "Limpar a saída",
				children: "Limpar"
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sl-out",
			ref: outBox,
			role: "log",
			"aria-live": "polite",
			children: output.length ? output.map((l, k) => {
				const s = l.source ? scriptByName(l.source) : void 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sl-line " + l.kind,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", { children: l.time }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.text }),
						l.source && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "sl-src",
							disabled: !s,
							onClick: () => s && openScript(s.id),
							children: l.source
						})
					]
				}, k);
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sl-tip",
				children: "O que os scripts mostram com print() e os erros aparecem aqui."
			})
		})]
	});
	const target = menu?.id ? byId(project, menu.id) : void 0;
	const items = menu?.shapes ? [
		{
			label: "Bloco",
			icon: Box,
			run: () => insert(INSERTABLE[0])
		},
		{
			label: "Esfera",
			icon: Circle,
			run: () => insert(INSERTABLE[1])
		},
		{
			label: "Cilindro",
			icon: Cylinder,
			run: () => insert(INSERTABLE[2])
		},
		{
			label: "Cunha",
			icon: Triangle,
			run: () => insert(INSERTABLE[3])
		},
		{
			label: "Cunha de canto",
			icon: Pyramid,
			run: () => insert(INSERTABLE[4])
		}
	] : menu?.insert ? INSERTABLE.filter((d) => !insertQ.trim() || (d.label + " " + d.cls).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(insertQ.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))).map((d) => ({
		label: d.label,
		icon: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassIcon, { cls: d.cls }),
		run: () => insert(d, menu.id)
	})) : target ? [
		...isScript(target.cls) ? [{
			label: "Abrir script",
			icon: FileCode,
			run: () => openScript(target.id)
		}] : [],
		{
			label: "Inserir objeto…",
			icon: Plus,
			run: () => setMenu({
				x: menu.x,
				y: menu.y,
				id: target.id,
				insert: true
			})
		},
		{
			label: "Renomear",
			keys: "F2",
			icon: TextCursorInput,
			run: () => {
				setRenaming(target.id);
				revealInTree(target.id);
				if (mobile) setDrawer("explorer");
			},
			off: isService(target.cls)
		},
		{
			label: "Duplicar",
			keys: "Ctrl+D",
			icon: Copy,
			run: () => dup(target.id),
			off: isService(target.cls)
		},
		{
			label: "Mover para dentro de…",
			icon: FolderTree,
			run: () => {
				const ids = (selsRef.current.includes(target.id) ? selsRef.current : [target.id]).filter((x) => {
					const o = byId(projectRef.current, x);
					return o && !isService(o.cls);
				});
				setMoving(ids);
				if (mobile) setDrawer("explorer");
				say((ids.length > 1 ? ids.length + " objetos" : "\"" + target.name + "\"") + ": agora toque no objeto onde quer colocar.");
			},
			off: isService(target.cls)
		},
		{
			label: "Copiar",
			keys: "Ctrl+C",
			icon: Copy,
			run: () => copy(target.id),
			off: isService(target.cls)
		},
		{
			label: "Recortar",
			keys: "Ctrl+X",
			icon: Scissors,
			run: () => copy(target.id, true),
			off: isService(target.cls)
		},
		{
			label: "Colar",
			keys: "Ctrl+V",
			icon: ClipboardPaste,
			run: () => paste(target.id),
			off: !clip.current
		},
		{
			label: "Agrupar em Model",
			keys: "Ctrl+G",
			icon: Group,
			run: () => group(target.id),
			off: isService(target.cls)
		},
		...selection.length > 1 && selection.includes(target.id) ? [{
			label: `Unir ${selection.length} peças`,
			keys: "Ctrl+Shift+G",
			icon: Combine,
			run: doUnite
		}] : [],
		...target.cls === "Part" || target.cls === "NegateOperation" ? [{
			label: target.cls === "Part" ? "Negar (vira buraco)" : "Desfazer negar",
			keys: "Ctrl+Shift+N",
			icon: SquareMinus,
			run: () => doNegate(selection.includes(target.id) ? selection : [target.id])
		}] : [],
		...target.cls === "UnionOperation" ? [{
			label: "Separar união",
			keys: "Ctrl+Shift+U",
			icon: Split,
			run: () => doSeparate(target.id)
		}] : [],
		...target.cls === "Model" || target.cls === "Folder" ? [{
			label: "Desagrupar",
			keys: "Ctrl+U",
			icon: Ungroup,
			run: () => ungroup(target.id)
		}] : [],
		...isPart(target.cls) ? [{
			label: "Focar câmera",
			keys: "F",
			icon: Crosshair,
			run: () => {
				engine.current?.select(target.id);
				engine.current?.focus();
			}
		}] : [],
		...isService(target.cls) ? [] : [{
			label: "Exportar modelo (.rbxmx)",
			icon: PackageOpen,
			run: () => exportModel(target.id)
		}, {
			label: "Publicar na Toolbox…",
			icon: Package,
			run: () => {
				if (!selection.includes(target.id)) setSelected(target.id);
				setToolbox("publish");
			}
		}],
		...target.cls === "Model" || target.cls === "Folder" || target.cls === "Workspace" || target.cls === "ReplicatedStorage" || target.cls === "ServerStorage" ? [{
			label: "Importar modelo aqui…",
			icon: PackagePlus,
			run: () => pickModel(target.id)
		}] : [],
		{
			label: "Apagar",
			keys: "Delete",
			icon: Trash2,
			run: () => remove$1(target.id),
			danger: true,
			off: isService(target.cls)
		}
	] : [
		{
			label: "Inserir Bloco",
			icon: Box,
			run: () => insert(INSERTABLE[0], null)
		},
		{
			label: "Inserir Esfera",
			icon: Circle,
			run: () => insert(INSERTABLE[1], null)
		},
		{
			label: "Inserir Cilindro",
			icon: Cylinder,
			run: () => insert(INSERTABLE[2], null)
		},
		{
			label: "Novo Script",
			icon: FileCode,
			run: () => insert(INSERTABLE_SCRIPT, null)
		},
		{
			label: "Importar novo personagem…",
			icon: UserRoundPlus,
			run: () => setCharacterImport(true)
		},
		{
			label: "Importar modelo 3D…",
			icon: Boxes,
			run: () => setImport3dHelp(true)
		},
		{
			label: "Importar modelo do Roblox…",
			icon: PackagePlus,
			run: () => pickModel(null)
		},
		{
			label: "Colar",
			keys: "Ctrl+V",
			icon: ClipboardPaste,
			run: () => paste(null),
			off: !clip.current
		},
		{
			label: "Atalhos do teclado",
			keys: "?",
			icon: Keyboard,
			run: () => setHelp(true)
		}
	];
	const menuItems = (0, import_react.useRef)(null), lastFocus = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (menu) {
			lastFocus.current = document.activeElement;
			requestAnimationFrame(() => (menuItems.current?.querySelector("button:not(:disabled)"))?.focus());
		} else lastFocus.current?.focus?.();
	}, [menu]);
	function menuKey(e) {
		const btns = [...menuItems.current?.querySelectorAll("button:not(:disabled)") ?? []];
		const k = btns.indexOf(document.activeElement);
		if (e.key === "ArrowDown" || e.key === "ArrowRight") {
			e.preventDefault();
			btns[(k + 1) % btns.length]?.focus();
		} else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
			e.preventDefault();
			btns[(k - 1 + btns.length) % btns.length]?.focus();
		} else if (e.key === "Escape") {
			e.preventDefault();
			setMenu(null);
		} else if (e.key === "Tab") {
			e.preventDefault();
			btns[(k + (e.shiftKey ? -1 : 1) + btns.length) % btns.length]?.focus();
		}
	}
	const menuEl = menu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sl-menu-shade",
		onClick: () => setMenu(null),
		onContextMenu: (e) => {
			e.preventDefault();
			setMenu(null);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sl-menu" + (mobile ? " sheet" : ""),
			role: "menu",
			"aria-label": target ? `Ações de ${target.name}` : "Atalhos",
			style: mobile ? void 0 : {
				left: Math.min(menu.x, innerWidth - 250),
				top: Math.min(menu.y, innerHeight - Math.min(items.length * 36 + 50, innerHeight - 20))
			},
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [menu.shapes ? "Forma da peça" : menu.insert ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "sl-insert-search",
				autoFocus: true,
				placeholder: "Pesquisar objeto (ex.: Part, Script, Text)",
				"aria-label": "Pesquisar objeto para inserir",
				value: insertQ,
				onChange: (e) => setInsertQ(e.target.value),
				onKeyDown: (e) => {
					if (e.key === "Enter") (menuItems.current?.querySelector("button:not([disabled])"))?.click();
					e.stopPropagation();
				}
			}) : target ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassIcon, { cls: target.cls }), target.name] }) : "Atalhos", mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "sl-icon",
				"aria-label": "Fechar",
				onClick: () => setMenu(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sl-menu-items",
				ref: menuItems,
				onKeyDown: menuKey,
				children: items.map((it) => {
					const I = it.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "menuitem",
						disabled: it.off,
						className: it.danger ? "danger" : "",
						onClick: () => {
							setMenu(null);
							it.run();
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { size: 16 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: it.label }),
							it.keys && !mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: it.keys })
						]
					}, it.label);
				})
			})]
		})
	});
	const stick = (0, import_react.useRef)(null), knobRef = (0, import_react.useRef)(null), jump = (0, import_react.useRef)(false), jumpPointer = (0, import_react.useRef)(null), stickInput = (0, import_react.useRef)([0, 0]);
	const [sideW, setSideW] = (0, import_react.useState)(() => {
		try {
			const v = Number(localStorage.getItem("levelup-studio-side-w"));
			return v >= 220 && v <= 640 ? v : 300;
		} catch {
			return 300;
		}
	});
	const [split, setSplit] = (0, import_react.useState)(() => {
		try {
			const v = Number(localStorage.getItem("levelup-studio-split"));
			return v >= .15 && v <= .85 ? v : .46;
		} catch {
			return .46;
		}
	});
	const [drawerW, setDrawerW] = (0, import_react.useState)(() => {
		try {
			const v = Number(localStorage.getItem("levelup-studio-drawer-w"));
			return v >= 200 && v <= 1200 ? v : 0;
		} catch {
			return 0;
		}
	});
	function dragSize(e, kind) {
		e.preventDefault();
		const el = e.currentTarget;
		try {
			el.setPointerCapture(e.pointerId);
		} catch {}
		const side = el.closest(kind === "drawer" ? ".sl-drawer" : ".sl-side").getBoundingClientRect();
		const host = el.closest(".studio-lite").getBoundingClientRect();
		const move = (ev) => {
			if (kind === "drawer") {
				const w = Math.round(Math.min(host.width * .85, Math.max(200, side.right - ev.clientX)));
				setDrawerW(w);
				try {
					localStorage.setItem("levelup-studio-drawer-w", String(w));
				} catch {}
			} else if (kind === "w") {
				const w = Math.round(Math.min(640, Math.max(220, side.right - ev.clientX)));
				setSideW(w);
				try {
					localStorage.setItem("levelup-studio-side-w", String(w));
				} catch {}
			} else {
				const s = Math.min(.85, Math.max(.15, (ev.clientY - side.top) / side.height));
				setSplit(s);
				try {
					localStorage.setItem("levelup-studio-split", s.toFixed(3));
				} catch {}
			}
		};
		const up = () => {
			el.removeEventListener("pointermove", move);
			el.removeEventListener("pointerup", up);
			el.removeEventListener("pointercancel", up);
			document.body.classList.remove("sl-resizing");
		};
		document.body.classList.add("sl-resizing");
		el.addEventListener("pointermove", move);
		el.addEventListener("pointerup", up);
		el.addEventListener("pointercancel", up);
	}
	const KNOB = 38, [touchIdle, setTouchIdle] = (0, import_react.useState)(false), idleTimer = (0, import_react.useRef)(0);
	const moveKnob = (x, y) => {
		if (knobRef.current) knobRef.current.style.transform = `translate(${x}px,${y}px)`;
	};
	const touching = () => {
		window.clearTimeout(idleTimer.current);
		setTouchIdle(false);
	};
	const released = () => {
		window.clearTimeout(idleTimer.current);
		idleTimer.current = window.setTimeout(() => setTouchIdle(true), 1800);
	};
	(0, import_react.useEffect)(() => {
		if (play === "playing") {
			setTouchIdle(false);
			released();
		}
		return () => window.clearTimeout(idleTimer.current);
	}, [play]);
	const pushInput = (x, z) => {
		if (play === "playing") engine.current?.setInput({
			x,
			z,
			jump: jump.current
		});
		else engine.current?.setFly(x, z);
	};
	const stopStick = (e) => {
		if (stick.current?.id !== e.pointerId) return;
		stick.current = null;
		stickInput.current = [0, 0];
		moveKnob(0, 0);
		pushInput(0, 0);
		if (!jump.current) released();
	};
	const joystick = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sl-stick" + (stick.current ? " on" : "") + (touchIdle ? " idle" : ""),
		"aria-label": "Controle de movimento",
		onPointerDown: (e) => {
			if (stick.current || e.pointerType === "mouse" && e.button !== 0) return;
			e.preventDefault();
			try {
				e.currentTarget.setPointerCapture(e.pointerId);
			} catch {}
			const r = e.currentTarget.getBoundingClientRect();
			stick.current = {
				id: e.pointerId,
				x: r.left + r.width / 2,
				y: r.top + r.height / 2
			};
			touching();
		},
		onPointerMove: (e) => {
			const s = stick.current;
			if (!s || s.id !== e.pointerId) return;
			let dx = (e.clientX - s.x) / 50, dy = (e.clientY - s.y) / 50;
			const l = Math.hypot(dx, dy);
			if (l > 1) {
				dx /= l;
				dy /= l;
			}
			stickInput.current = [dx, dy];
			moveKnob(dx * KNOB, dy * KNOB);
			pushInput(dx, dy);
		},
		onPointerUp: stopStick,
		onPointerCancel: stopStick,
		onLostPointerCapture: stopStick,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { ref: knobRef })
	});
	const stopJump = (e) => {
		if (jumpPointer.current !== e.pointerId) return;
		jumpPointer.current = null;
		jump.current = false;
		pushInput(...stickInput.current);
		if (!stick.current) released();
	};
	const jumpBtn = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "sl-jump" + (touchIdle ? " idle" : ""),
		"aria-label": "Pular",
		onPointerDown: (e) => {
			if (jumpPointer.current !== null || e.pointerType === "mouse" && e.button !== 0) return;
			e.preventDefault();
			try {
				e.currentTarget.setPointerCapture(e.pointerId);
			} catch {}
			jumpPointer.current = e.pointerId;
			touching();
			jump.current = true;
			pushInput(...stickInput.current);
		},
		onPointerUp: stopJump,
		onPointerCancel: stopJump,
		onLostPointerCapture: stopJump,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUp, {
			size: 46,
			strokeWidth: 2.6,
			"aria-hidden": "true"
		})
	});
	const scriptTab = active !== "game" ? byId(project, active) : void 0;
	const scene = (0, import_react.useMemo)(() => {
		if (!scriptTab) return;
		const root = {
			name: "game",
			cls: "DataModel",
			kids: [],
			parent: null
		};
		const nodes = /* @__PURE__ */ new Map();
		for (const i of project.insts) nodes.set(i.id, {
			name: i.name,
			cls: i.cls,
			kids: [],
			parent: null
		});
		for (const i of project.insts) {
			const n = nodes.get(i.id);
			const par = i.parent ? nodes.get(i.parent) : root;
			if (par) {
				n.parent = par;
				par.kids.push(n);
			}
		}
		return {
			root,
			script: nodes.get(scriptTab.id)
		};
	}, [project, scriptTab?.id]);
	const editingOff = play !== "stopped";
	const toolBtn = (t, label, Icon, keys) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
		c: "blue",
		icon: Icon,
		label,
		title: `${label} (${keys})`,
		on: tool === t,
		off: editingOff,
		onClick: () => setTool(t)
	}, t);
	const side = (p) => mobile ? drawer === p : panels[p];
	const togglePanel = (p) => mobile ? setDrawer((d) => d === p ? null : p) : setPanels((s) => ({
		...s,
		[p]: !s[p]
	}));
	const showSide = !mobile && (panels.explorer || panels.props);
	const loader = !quietBoot && boot !== "off" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelUpLoader, {
		title: "Abrindo o Laboratório",
		detail: bootStep.total > 150 ? `Montando a cena 3D (${bootStep.done} de ${bootStep.total})…` : "Montando a cena 3D…",
		leaving: boot === "leaving"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: root,
		className: "studio-lite" + (mobile ? " mobile" : "") + (play !== "stopped" ? " playing" : "") + (playOnly ? " play-only" : ""),
		onContextMenu: (e) => {
			if (e.target.closest(".sl-viewport")) e.preventDefault();
		},
		children: [
			loader,
			playOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameTopBar, {
				onMenu: () => setMenuOpen("people"),
				onSettings: () => setMenuOpen("config"),
				onReset: () => engine.current?.resetCharacter(),
				onBoard: () => setBoardHidden((h) => !h),
				boardOn: !boardHidden,
				count: mp?.state === "on" ? mp.count : 1,
				mp
			}),
			playOnly && menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameMenu, {
				startTab: menuOpen,
				title: playOnly.title,
				author: playOnly.author,
				players: menuPlayers,
				mp,
				quality: gfx,
				setQuality: setGfx,
				sens,
				setSens,
				onLeave: leavePlay,
				onReset: () => {
					engine.current?.resetCharacter();
					setMenuOpen(false);
				},
				onClose: () => setMenuOpen(false)
			}, menuOpen),
			playOnly && play === "playing" && (mp?.state === "failed" || mp?.state === "ended") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MpNotice, {
				mp,
				onRetry: () => restartMp(false),
				onSolo: () => restartMp(true),
				onLeave: leavePlay
			}),
			playOnly && play === "stopped" && played && !mpRestart && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "po-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Fim da partida" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "po-again",
					onClick: () => startPlay(),
					children: "Jogar de novo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: playOnly.onClose,
					children: "Voltar aos jogos"
				})] })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sl-ribbon",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sl-ribbon-top",
						children: [
							onHome && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "sl-exit sl-home-btn",
								onClick: async () => {
									stopPlay();
									const p = projectRef.current;
									let thumb = null;
									try {
										thumb = engine.current?.viewSnapshot(480, 300) ?? null;
									} catch {}
									await saveCode(userId, "studio", JSON.stringify(p));
									onHome({
										name: p.name,
										thumb
									});
								},
								title: "Ver todos os projetos (o atual fica salvo)",
								"aria-label": "Ver todos os projetos. O atual fica salvo.",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Projetos" })]
							}),
							onExit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "sl-exit",
								onClick: () => {
									stopPlay();
									saveCode(userId, "studio", JSON.stringify(projectRef.current));
									if (onLeave) {
										let thumb = null;
										try {
											thumb = engine.current?.viewSnapshot(480, 300) ?? null;
										} catch {}
										onLeave({
											name: projectRef.current.name,
											thumb
										});
									}
									onExit();
								},
								title: "Sair do Laboratório (o projeto fica salvo)",
								"aria-label": "Sair do Laboratório. O projeto fica salvo.",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sair" })]
							}),
							play === "stopped" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "sl-play",
								onClick: startPlay,
								title: "Jogar (F5)",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Jogar" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "sl-play stop",
								onClick: stopPlay,
								title: "Parar (Shift+F5)",
								disabled: play === "loading",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: play === "loading" ? "Carregando…" : "Parar" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sl-rtabs",
								role: "tablist",
								"aria-label": "Abas de ferramentas",
								children: [
									["inicio", "Início"],
									["modelo", "Modelo"],
									["interface", "Interface"],
									["teste", "Teste"],
									["arquivo", "Arquivo"],
									["exibir", "Exibir"]
								].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									role: "tab",
									"aria-selected": ribbon === id,
									className: ribbon === id ? "on" : "",
									onClick: () => {
										setRibbon(id);
										setRibbonOpen(true);
									},
									children: label
								}, id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "sl-ribbon-fold",
								"aria-expanded": ribbonOpen,
								"aria-label": ribbonOpen ? "Recolher a barra de ferramentas" : "Mostrar a barra de ferramentas",
								title: ribbonOpen ? "Recolher a barra" : "Mostrar a barra",
								onClick: () => setRibbonOpen((o) => !o),
								children: ribbonOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 18 })
							})
						]
					}),
					ribbonOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sl-ribbon-body",
						role: "toolbar",
						"aria-label": "Ferramentas: " + {
							inicio: "Início",
							modelo: "Modelo",
							interface: "Interface",
							teste: "Teste",
							arquivo: "Arquivo",
							exibir: "Exibir"
						}[ribbon],
						children: [
							(ribbon === "inicio" || ribbon === "modelo") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RGroup, {
								name: "Ferramentas",
								children: [
									toolBtn("select", "Selecionar", MousePointer2, "1"),
									toolBtn("move", "Mover", Move, "2"),
									toolBtn("scale", "Escalar", Maximize2, "3"),
									toolBtn("rotate", "Girar", RotateCw, "4"),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "teal",
										icon: Grid3x3,
										label: "Grade",
										title: "Encaixe na grade: 1 stud e 15° (Ctrl+L)",
										on: snap,
										off: editingOff,
										onClick: () => setSnap((x) => !x)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "teal",
										icon: SquareStack,
										label: "Vários",
										title: "Selecionar várias peças (ou Ctrl/Shift + clique)",
										on: multi,
										off: editingOff,
										onClick: () => setMulti((x) => !x)
									})
								]
							}),
							ribbon === "inicio" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RGroup, {
								name: "Inserir",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "sl-split",
										role: "group",
										"aria-label": "Peça",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "purple",
											icon: CI("Part"),
											label: "Peça",
											title: "Inserir peça (bloco)",
											off: editingOff,
											onClick: () => insert(INSERTABLE[0])
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "sl-tool sl-split-arrow",
											title: "Escolher a forma da peça",
											"aria-label": "Escolher a forma da peça",
											"aria-haspopup": "menu",
											disabled: editingOff,
											onClick: (e) => {
												const r = e.currentTarget.getBoundingClientRect();
												setMenu({
													x: r.left - 60,
													y: r.bottom,
													id: null,
													shapes: true
												});
											},
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 14 })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "green",
										icon: CI("SpawnLocation"),
										label: "Spawn",
										title: "Inserir SpawnLocation",
										off: editingOff,
										onClick: () => insert(INSERTABLE_SPAWN)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "blue",
										icon: CI("MeshPart"),
										label: "MeshPart",
										title: "Inserir MeshPart (coloque o MeshId do Roblox nas Propriedades)",
										off: editingOff,
										onClick: () => insert(byCls("MeshPart"))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "green",
										icon: CI("Script"),
										label: "Script",
										title: "Novo script",
										off: editingOff,
										onClick: () => insert(INSERTABLE_SCRIPT)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "pink",
										icon: CI("Model"),
										label: "Objeto",
										title: "Inserir outro objeto (Model, Folder, luz, valores…)",
										off: editingOff,
										onClick: (e) => {
											const r = e.currentTarget.getBoundingClientRect();
											setMenu({
												x: r.left,
												y: r.bottom,
												id: selected,
												insert: true
											});
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "blue",
										icon: Package,
										label: "Toolbox",
										title: "Caixa de ferramentas da turma: itens feitos pelos alunos (precisa de internet)",
										off: editingOff,
										onClick: () => setToolbox("list")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "purple",
										icon: UserRoundPlus,
										label: "Personagem",
										title: "Importar novo personagem com malhas e texturas locais",
										off: editingOff || importing,
										onClick: () => setCharacterImport(true)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "teal",
										icon: Boxes,
										label: "Modelo 3D",
										title: "Importar modelo 3D (.obj, .fbx, .glb, .stl)",
										off: editingOff || importing,
										onClick: () => setImport3dHelp(true)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "orange",
										icon: PackagePlus,
										label: "Importar",
										title: "Importar modelo do Roblox Studio (.rbxm ou .rbxmx)",
										off: editingOff,
										onClick: () => pickModel(selRef.current)
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RGroup, {
								name: "Editar",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "gray",
										icon: Undo2,
										label: "Desfazer",
										title: "Desfazer (Ctrl+Z)",
										off: !past.current.length || editingOff,
										onClick: undo
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "gray",
										icon: Redo2,
										label: "Refazer",
										title: "Refazer (Ctrl+Y)",
										off: !future.current.length || editingOff,
										onClick: redo
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "orange",
										icon: Copy,
										label: "Duplicar",
										title: "Duplicar (Ctrl+D)",
										off: !selected || editingOff,
										onClick: () => dup()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "red",
										icon: Trash2,
										label: "Apagar",
										title: "Apagar (Delete)",
										off: !selected || editingOff,
										onClick: () => remove$1()
									})
								]
							})] }),
							ribbon === "modelo" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RGroup, {
									name: "Sólidos",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "yellow",
											icon: CI("tool:Unir"),
											label: "Unir",
											title: "Unir as peças selecionadas (Ctrl+Shift+G)",
											off: selection.length < 2 || editingOff,
											onClick: doUnite
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "red",
											icon: CI("tool:Negar"),
											label: "Negar",
											title: "Negar: a peça vira um buraco ao Unir (Ctrl+Shift+N)",
											off: !selected || editingOff,
											onClick: () => doNegate()
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "teal",
											icon: CI("tool:Separar"),
											label: "Separar",
											title: "Separar a união (Ctrl+Shift+U)",
											off: sel?.cls !== "UnionOperation" || editingOff,
											onClick: () => doSeparate()
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RGroup, {
									name: "Organizar",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "blue",
										icon: Group,
										label: "Agrupar",
										title: "Agrupar em Model (Ctrl+G)",
										off: !selected || editingOff,
										onClick: () => group()
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "blue",
										icon: Ungroup,
										label: "Desagrupar",
										title: "Desagrupar (Ctrl+U)",
										off: !(sel?.cls === "Model" || sel?.cls === "Folder") || editingOff,
										onClick: () => ungroup()
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RGroup, {
									name: "Aparência",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "sl-tool sl-paint" + (editingOff ? " off" : ""),
										"data-c": "pink",
										title: "Cor das peças selecionadas",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorPicker, {
											compact: true,
											value: sel && isPart(sel.cls) ? sel.props.Color : [
												163,
												162,
												165
											],
											label: "Cor das peças selecionadas",
											disabled: editingOff,
											onChange: (c) => paintSelection("Color", c)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cor" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "sl-tool sl-paint" + (editingOff ? " off" : ""),
										"data-c": "orange",
										title: "Material das peças selecionadas",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { size: 20 }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Material" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												"aria-label": "Material das peças selecionadas",
												disabled: editingOff,
												value: sel && isPart(sel.cls) ? sel.props.Material : "",
												onChange: (e) => paintSelection("Material", e.target.value),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													disabled: true,
													children: "—"
												}), MATERIALS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: m }, m))]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RGroup, {
									name: "Efeitos",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "yellow",
										icon: CI("PointLight"),
										label: "Luz",
										title: "Luz (PointLight) dentro da peça selecionada",
										off: editingOff,
										onClick: () => insert(INSERTABLE_LIGHT)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "pink",
										icon: CI("ClickDetector"),
										label: "Clique",
										title: "ClickDetector: a peça pode ser clicada no jogo",
										off: editingOff,
										onClick: () => insert(INSERTABLE_CLICK)
									})]
								})
							] }),
							ribbon === "interface" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RGroup, {
									name: "Tela",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "blue",
										icon: CI("ScreenGui"),
										label: "ScreenGui",
										title: "Nova tela de interface (ScreenGui no StarterGui)",
										off: editingOff,
										onClick: () => insert(INSERTABLE.find((d) => d.cls === "ScreenGui"))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RGroup, {
									name: "Elementos",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "gray",
											icon: CI("Frame"),
											label: "Frame",
											title: "Frame: um quadro (fundo, painel)",
											off: editingOff,
											onClick: () => insert(INSERTABLE.find((d) => d.cls === "Frame"))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "green",
											icon: CI("TextLabel"),
											label: "Texto",
											title: "TextLabel: um texto na tela",
											off: editingOff,
											onClick: () => insert(INSERTABLE.find((d) => d.cls === "TextLabel"))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "orange",
											icon: CI("TextButton"),
											label: "Botão",
											title: "TextButton: botão com texto (MouseButton1Click)",
											off: editingOff,
											onClick: () => insert(INSERTABLE.find((d) => d.cls === "TextButton"))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "purple",
											icon: CI("ImageLabel"),
											label: "Imagem",
											title: "ImageLabel: imagem por link ou arquivo",
											off: editingOff,
											onClick: () => insert(INSERTABLE.find((d) => d.cls === "ImageLabel"))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "pink",
											icon: CI("ImageButton"),
											label: "Botão imagem",
											title: "ImageButton: botão com imagem",
											off: editingOff,
											onClick: () => insert(INSERTABLE.find((d) => d.cls === "ImageButton"))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RGroup, {
									name: "Estilo",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "teal",
											icon: CI("UICorner"),
											label: "Cantos",
											title: "UICorner: arredonda os cantos do elemento selecionado",
											off: editingOff || !sel || !isGui(sel.cls),
											onClick: () => insert(INSERTABLE.find((d) => d.cls === "UICorner"))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "orange",
											icon: CI("UIStroke"),
											label: "Contorno",
											title: "UIStroke: contorno no elemento (ou no texto)",
											off: editingOff || !sel || !isGui(sel.cls),
											onClick: () => insert(INSERTABLE.find((d) => d.cls === "UIStroke"))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "pink",
											icon: CI("UIGradient"),
											label: "Degradê",
											title: "UIGradient: pinta o fundo com um degradê de cores",
											off: editingOff || !sel || !isGui(sel.cls),
											onClick: () => insert(INSERTABLE.find((d) => d.cls === "UIGradient"))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RGroup, {
									name: "Organizar",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "blue",
										icon: CI("UIListLayout"),
										label: "Lista",
										title: "UIListLayout: organiza os elementos de dentro em fila (vertical ou horizontal)",
										off: editingOff || !sel || !(isGui(sel.cls) || sel.cls === "ScreenGui"),
										onClick: () => insert(INSERTABLE.find((d) => d.cls === "UIListLayout"))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "sl-ribbon-tip",
									children: ["Escala vai de 0 a 1 (fração da tela); px é o deslocamento em pixels. Num LocalScript: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "script.Parent.MouseButton1Click:Connect(...)" })]
								})
							] }),
							ribbon === "teste" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RGroup, {
									name: "Jogo",
									children: [play === "stopped" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "green",
										icon: Play,
										label: "Jogar",
										title: "Jogar (F5)",
										onClick: startPlay
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "red",
										icon: Square,
										label: "Parar",
										title: "Parar (Shift+F5)",
										off: play === "loading",
										onClick: stopPlay
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "green",
										icon: Flag,
										label: "Spawn",
										title: "Inserir SpawnLocation (onde o jogador nasce)",
										off: editingOff,
										onClick: () => insert(INSERTABLE_SPAWN)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RGroup, {
									name: "Mensagens",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "gray",
										icon: Terminal,
										label: "Saída",
										title: "Mostrar a Saída (prints e erros)",
										on: side("output"),
										onClick: () => togglePanel("output"),
										dot: output.some((l) => l.kind === "error") && !side("output")
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "sl-ribbon-tip",
									children: mobile ? "Jogando: controle à esquerda para andar, botão à direita para pular, arraste a tela para girar a câmera." : "Jogando: W A S D para andar, Espaço para pular, botão direito arrastado para girar a câmera."
								})
							] }),
							ribbon === "arquivo" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RGroup, {
								name: "Projeto",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "blue",
										icon: Save,
										label: "Salvar",
										title: "Salvar neste aparelho (Ctrl+S)",
										onClick: saveNow
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "purple",
										icon: Rocket,
										label: "Publicar jogo",
										title: "Publicar em Jogos (a turma e quem é de fora jogam depois que o professor aprovar)",
										off: editingOff,
										onClick: openPublish
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "orange",
										icon: FolderOpen,
										label: "Abrir",
										title: "Abrir um jogo .rbxlx",
										off: editingOff,
										onClick: () => fileInput.current?.click()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "gray",
										icon: FilePlus,
										label: "Novo",
										title: "Projeto novo",
										off: editingOff,
										onClick: newProject$1
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RGroup, {
								name: "Roblox Studio",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "purple",
										icon: UserRoundPlus,
										label: "Novo personagem",
										title: "Importar novo personagem com malhas e texturas locais",
										off: editingOff || importing,
										onClick: () => setCharacterImport(true)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "green",
										icon: Download,
										label: "Exportar jogo",
										title: "Exportar o jogo inteiro (.rbxlx) (Ctrl+E)",
										onClick: exportFile
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "purple",
										icon: PackagePlus,
										label: "Importar modelo",
										title: "Importar modelo do Roblox Studio (.rbxm ou .rbxmx)",
										off: editingOff,
										onClick: () => pickModel(selRef.current)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "pink",
										icon: PackageOpen,
										label: "Exportar modelo",
										title: "Exportar o objeto selecionado (.rbxmx)",
										off: !selected,
										onClick: () => exportModel()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "yellow",
										icon: Puzzle,
										label: "Plugin do Roblox",
										title: "Baixar o plugin Level Up para o Roblox Studio (uniões idênticas na ida e na volta)",
										onClick: () => setPluginHelp(true)
									})
								]
							})] }),
							ribbon === "exibir" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RGroup, {
									name: "Janelas",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "blue",
											icon: FolderTree,
											label: "Explorador",
											title: "Explorador: todos os objetos do jogo",
											on: side("explorer"),
											onClick: () => togglePanel("explorer")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "purple",
											icon: SlidersHorizontal,
											label: "Propriedades",
											title: "Propriedades do objeto selecionado",
											on: side("props"),
											onClick: () => togglePanel("props")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "gray",
											icon: Terminal,
											label: "Saída",
											title: "Saída: prints e erros",
											on: side("output"),
											onClick: () => togglePanel("output"),
											dot: output.some((l) => l.kind === "error") && !side("output")
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RGroup, {
									name: "Gráficos" + (gfx === "auto" ? " (automático)" : ""),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "green",
											icon: Sparkles,
											label: "Alta",
											title: "Gráficos em alta: sombras, brilho dos materiais e imagem nítida (aparelhos mais fortes)",
											on: quality === "alta",
											onClick: () => setGfx("alta")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "gray",
											icon: Feather,
											label: "Leve",
											title: "Gráficos leves: mais rápido em celulares simples",
											on: quality === "leve",
											onClick: () => setGfx("leve")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
											c: "blue",
											icon: WandSparkles,
											label: "Auto",
											title: "Escolher sozinho pelo aparelho",
											on: gfx === "auto",
											onClick: () => setGfx("auto")
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RGroup, {
									name: "Ajuda",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RBtn, {
										c: "yellow",
										icon: Keyboard,
										label: "Atalhos",
										title: "Atalhos do teclado (?)",
										onClick: () => setHelp(true)
									})
								})
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: modelInput,
						type: "file",
						accept: ".rbxm,.rbxmx",
						hidden: true,
						onChange: (e) => {
							const f = e.target.files?.[0];
							if (f) importModelFile(f);
							e.target.value = "";
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: model3dInput,
						type: "file",
						accept: IMPORT_3D_ACCEPT,
						multiple: true,
						hidden: true,
						onChange: (e) => {
							const f = [...e.target.files ?? []];
							e.target.value = "";
							import3dFiles(f);
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: fileInput,
						type: "file",
						accept: ".rbxl,.rbxlx,.rbxm,.rbxmx,.json",
						hidden: true,
						onChange: (e) => {
							const f = e.target.files?.[0];
							if (f) openFile(f);
							e.target.value = "";
						}
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sl-docs",
				role: "tablist",
				"aria-label": "Jogo e scripts",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					role: "tab",
					"aria-selected": active === "game",
					className: active === "game" ? "on" : "",
					onClick: () => setActive("game"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gamepad2, { size: 15 }), project.name]
				}), tabs.map((id) => {
					const i = byId(project, id);
					if (!i) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "sl-doc" + (active === id ? " on" : ""),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "tab",
							"aria-selected": active === id,
							onClick: () => setActive(id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassIcon, { cls: i.cls }), i.name]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "sl-close",
							"aria-label": "Fechar " + i.name,
							onClick: () => closeTab(id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 13 })
						})]
					}, id);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sl-body" + (showSide ? "" : " no-side"),
				style: showSide ? { gridTemplateColumns: `minmax(0,1fr) ${sideW}px` } : void 0,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sl-main",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sl-viewport" + (active === "game" ? "" : " hidden"),
								ref: viewport,
								role: "application",
								"aria-label": play === "stopped" ? "Cena 3D do jogo. Clique numa peça para selecionar; use o Explorador para escolher objetos pelo teclado." : "Jogo rodando. Ande com W A S D ou as setas e pule com Espaço.",
								"aria-roledescription": "cena 3D",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuiLayer, {
										nodes: play === "stopped" ? project.insts : runGui,
										selected: selection,
										editing: play === "stopped" && !playOnly,
										onSelect: (id, add) => {
											pickSel(id, add || multi);
											revealInTree(id);
										},
										onChange: (id, v) => {
											let p = projectRef.current;
											p = setProp(p, id, "Position", v.Position);
											p = setProp(p, id, "Size", v.Size);
											commit(p);
										},
										onPress: (id, event, x, y) => engine.current?.guiPress(id, event, x, y),
										place: (n) => engine.current?.worldGuiPlace(n) ?? null
									}),
									play === "stopped" && mobile && selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "sl-fab",
										"aria-label": "Ações do objeto selecionado",
										onClick: (e) => {
											const r = e.currentTarget.getBoundingClientRect();
											setMenu({
												x: r.left,
												y: r.top,
												id: selected
											});
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { size: 20 }), "Ações"]
									}),
									play === "stopped" && mobile && !showSide && joystick,
									play === "stopped" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "sl-hint",
										children: mobile ? "Controle: andar pela cena · 1 dedo: girar · 2 dedos: zoom · toque: selecionar · arraste a peça selecionada para movê-la" : "Clique: selecionar · clique e segure: vários · botão direito arrastado: girar · rodinha: aproximar · WASD/QE: voar · ? atalhos"
									}),
									play !== "stopped" && info && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hud, {
										info,
										player: playOnly ? menuPlayers[0].name : playerName,
										user: { avatar: playOnly ? menuPlayers[0].avatar : avatar },
										...playOnly ? {
											hidden: boardHidden,
											setHidden: setBoardHidden,
											others: menuPlayers.filter((p) => !p.me)
										} : {}
									}),
									play === "playing" && !!info?.tools?.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "sl-toolbelt",
										"aria-label": "Ferramentas",
										children: info.tools.map((i, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											title: i.tip || i.name,
											"aria-pressed": i.equipped,
											onPointerDown: (e) => e.preventDefault(),
											onClick: () => engine.current?.equipTool(i.id),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: n < 9 ? n + 1 : "" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassIcon, { cls: "Tool" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i.name })
											]
										}, i.id))
									}),
									play === "playing" && mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [joystick, jumpBtn] }),
									play === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sl-play-status",
										role: "status",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
												className: "sl-pl-spin",
												"aria-hidden": "true"
											}),
											playLoad.label,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => engine.current?.cancelLoading(),
												children: "Cancelar"
											})
										]
									})
								]
							}),
							scriptTab && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sl-editor code-lab",
								"aria-label": "Script " + scriptTab.name,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuaEditor, {
									scene,
									code: String(scriptTab.props.Source ?? ""),
									onChange: (c) => editSource(scriptTab.id, c)
								}, scriptTab.id)
							}),
							!mobile && panels.output && out
						]
					}),
					showSide && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "sl-side",
						style: panels.explorer && panels.props ? { gridTemplateRows: `minmax(0,${split}fr) 6px minmax(0,${1 - split}fr)` } : void 0,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sl-resize-w",
								role: "separator",
								"aria-orientation": "vertical",
								"aria-label": "Arraste para mudar a largura dos painéis",
								title: "Arraste para mudar a largura",
								onPointerDown: (e) => dragSize(e, "w"),
								onDoubleClick: () => {
									setSideW(300);
									try {
										localStorage.removeItem("levelup-studio-side-w");
									} catch {}
								}
							}),
							panels.explorer && explorer,
							panels.explorer && panels.props && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sl-resize-h",
								role: "separator",
								"aria-orientation": "horizontal",
								"aria-label": "Arraste para mudar a altura do Explorador e das Propriedades",
								title: "Arraste para mudar a altura",
								onPointerDown: (e) => dragSize(e, "split"),
								onDoubleClick: () => {
									setSplit(.46);
									try {
										localStorage.removeItem("levelup-studio-split");
									} catch {}
								}
							}),
							panels.props && props
						]
					}),
					mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "sl-rail",
						"aria-label": "Janelas do Laboratório",
						children: [
							[
								"explorer",
								"Explorador",
								"Todos os objetos do jogo",
								FolderTree
							],
							[
								"props",
								"Propriedades",
								"Cor, tamanho, posição…",
								SlidersHorizontal
							],
							[
								"output",
								"Saída",
								"Mensagens dos scripts",
								Terminal
							]
						].map(([id, label, hint, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "sl-rail-btn" + (drawer === id ? " on" : ""),
							"aria-pressed": drawer === id,
							"aria-label": label + ": " + hint,
							title: hint,
							onClick: () => togglePanel(id),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 22,
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									"aria-hidden": "true",
									children: label
								}),
								id === "output" && output.some((l) => l.kind === "error") && drawer !== "output" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "sl-dot" }),
								id === "props" && sel && drawer !== "props" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
									className: "sl-dot sel",
									"aria-hidden": "true"
								})
							]
						}, id))
					}),
					mobile && drawer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "sl-drawer",
						"aria-label": "Janela lateral",
						style: drawerW ? { width: drawerW } : void 0,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sl-resize-w sl-resize-touch",
								role: "separator",
								"aria-orientation": "vertical",
								"aria-label": "Puxe para mudar a largura da janela",
								onPointerDown: (e) => dragSize(e, "drawer"),
								onDoubleClick: () => {
									setDrawerW(0);
									try {
										localStorage.removeItem("levelup-studio-drawer-w");
									} catch {}
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { "aria-hidden": "true" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "sl-drawer-close",
								"aria-label": "Fechar janela",
								onClick: () => setDrawer(null),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
							}),
							drawer === "explorer" ? explorer : drawer === "props" ? props : out
						]
					})
				]
			}),
			menuEl,
			publishing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublishGame, {
					project,
					snapshot: publishing.snap,
					linked: publishing.linked,
					onPublished: published,
					onClose: () => setPublishing(null),
					say
				})
			}),
			toolbox && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toolbox, {
					project,
					selection,
					publishNow: toolbox === "publish",
					thumbnail: (ids) => engine.current?.thumbnail(partsFor(ids)) ?? null,
					onClose: () => setToolbox(null),
					say,
					onInsert: (name, insts) => {
						setToolbox(null);
						receive(name, insts, `"${name}" veio da Caixa de ferramentas ✓ Está no Explorador (selecionado).`);
					}
				})
			}),
			characterImport && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sl-importing",
					role: "status",
					children: "Abrindo importador de personagens…"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImportCharacter, {
					onClose: () => setCharacterImport(false),
					onImport: (r) => receive(r.name, r.insts, "Personagem importado com malhas e texturas locais ✓ Sem chave da Roblox. Para usar no jogador, mova o Model para ReplicatedStorage e use ApplyCharacterReset.")
				})
			}),
			import3dHelp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sl-menu-shade",
				onClick: () => setImport3dHelp(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sl-help sl-imp3d",
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "imp3d-title",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, { size: 18 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								id: "imp3d-title",
								children: "Importar modelo 3D"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "sl-icon",
								onClick: () => setImport3dHelp(false),
								"aria-label": "Fechar",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "sl-tip",
							children: [
								"Traga modelos feitos no Blender, no Roblox Studio ou baixados da internet. Cada material vira uma ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "MeshPart" }),
								" dentro de um ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Model" }),
								", com a malha e a textura guardadas no seu projeto."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sl-imp3d-formats",
							children: [
								[".obj", "com o .mtl e as imagens"],
								[".fbx", "Blender, Maya"],
								[".glb / .gltf", "texturas já dentro"],
								[".stl", "impressão 3D, sem cor"]
							].map(([f, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: f }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: d })] }, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sl-imp3d-tip",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Do Roblox Studio para cá" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Selecione o objeto (ex.: a árvore) no Roblox Studio." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Botão direito → ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Exportar seleção…" }),
									" e salve."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Aqui, escolha ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "todos os arquivos juntos" }),
									": o .obj, o .mtl e as imagens (.png)."
								] })
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sl-tip",
							children: "Até 200 mil triângulos. Modelos muito grandes ou muito pequenos são ajustados para cerca de 20 studs."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sl-imp3d-actions",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "sl-imp3d-go",
								disabled: importing,
								onClick: () => model3dInput.current?.click(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 16 }), importing ? "Importando…" : "Escolher arquivos"]
							})
						})
					]
				})
			}),
			importing && !import3dHelp && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sl-importing",
				role: "status",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), "Importando modelo 3D…"]
			}),
			help && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sl-menu-shade",
				onClick: () => setHelp(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sl-help",
					role: "dialog",
					"aria-modal": "true",
					"aria-label": "Atalhos do Laboratório",
					onClick: (e) => e.stopPropagation(),
					onKeyDown: (e) => {
						if (e.key === "Escape") setHelp(false);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Keyboard, { size: 18 }),
							"Atalhos do Laboratório",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "sl-icon",
								"aria-label": "Fechar",
								autoFocus: true,
								onClick: () => setHelp(false),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 })
							})
						] }),
						mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sl-tip",
							children: "No celular: toque para selecionar e segure o dedo sobre outra peça para selecionar várias. Os atalhos ficam no botão “Ações” (ou segure o dedo num lugar vazio). Para jogar, use o controle à esquerda e o botão de pulo à direita."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", { children: SHORTCUTS.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: k.split(" / ").map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: p }, i)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: v })] }, k)) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "sl-tip",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Modelos:" }),
								" para trazer algo do Roblox Studio, clique com o botão direito no modelo lá → ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Salvar no arquivo…" }),
								" (pode ser o arquivo normal ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: ".rbxm" }),
								") e use ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Importar" }),
								" aqui. Uniões e MeshParts vêm junto, sem plugin. Para levar daqui, use ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Exportar modelo" }),
								" no menu do objeto e, no Roblox Studio, botão direito → ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Inserir do arquivo…" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "sl-tip",
							children: [
								"Exportar gera um arquivo ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: ".rbxlx" }),
								": no Roblox Studio, use ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Arquivo → Abrir do arquivo" }),
								". Para um colega testar, envie o arquivo e ele usa ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Abrir" }),
								" aqui no Laboratório."
							]
						})
					]
				})
			}),
			pluginHelp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LevelUpLoader, { title: "Abrindo plugins…" }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginHelp, { onClose: () => setPluginHelp(false) })
			}),
			toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sl-toast",
				role: "status",
				children: toast
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "sr-only",
				"aria-live": "polite",
				children: [sel ? `Selecionado: ${sel.name}, ${sel.cls}` : "", play === "playing" ? " Jogo rodando." : ""]
			})
		]
	});
}
/** Grupo da barra (como "Ferramentas", "Inserir"… no Roblox Studio): botões em cima, nome embaixo. */
function RGroup({ name, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sl-rgroup",
		role: "group",
		"aria-label": name,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sl-rgroup-items",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sl-rgroup-name",
			"aria-hidden": "true",
			children: name
		})]
	});
}
/** Botão colorido da barra. c = cor do ícone. */
function RBtn({ icon: Icon, label, title, c, on, off, dot, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "sl-tool" + (on ? " on" : ""),
		"data-c": c,
		"aria-pressed": on === void 0 ? void 0 : on,
		title,
		"aria-label": title,
		disabled: off,
		onClick,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				size: 20,
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }),
			dot && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "sl-dot" })
		]
	});
}
/** Campo que só confirma ao sair dele ou apertar Enter (não cria um "desfazer" a cada tecla). */
function NumInput({ value, onCommit, text = false, step, min, max, disabled }) {
	const [v, setV] = (0, import_react.useState)(String(value));
	const focused = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!focused.current) setV(typeof value === "number" ? String(Math.round(value * 1e3) / 1e3) : String(value));
	}, [value]);
	const done = () => {
		focused.current = false;
		if (text) {
			if (v !== String(value)) onCommit(v);
		} else {
			const n = Number(v);
			if (v.trim() !== "" && !Number.isNaN(n) && n !== value) onCommit(n);
			else setV(String(value));
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: text ? "text" : "number",
		inputMode: text ? void 0 : "decimal",
		value: v,
		step: step ?? "any",
		min,
		max,
		disabled,
		onFocus: () => {
			focused.current = true;
		},
		onChange: (e) => setV(e.target.value),
		onBlur: done,
		onKeyDown: (e) => {
			if (e.key === "Enter") e.target.blur();
			if (e.key === "Escape") {
				setV(String(value));
				focused.current = false;
				e.target.blur();
			}
		}
	});
}
//#endregion
export { Users as a, Trash2 as c, Puzzle as d, StudioLite as default, Package as f, Boxes as g, ChevronDown as h, X as i, Rocket as l, Download as m, IMPORT_3D_ACCEPT as n, UserRoundPlus as o, Ellipsis as p, import3d as r, Upload as s, fromRbxlx as t, RefreshCw as u };
