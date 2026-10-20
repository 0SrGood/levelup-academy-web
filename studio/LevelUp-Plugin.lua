--[[
  Plugin Level Up para o Roblox Studio
  Leva modelos para o Studio Lite (Laboratório da Level Up) sem perder nada, e traz de volta.

  Como instalar (uma vez só):
    1. No Roblox Studio, abra a aba "Plugins" e clique em "Plugins Folder" (Pasta de plugins).
    2. Coloque este arquivo (LevelUp-Plugin.lua) nessa pasta.
    3. Feche e abra o Roblox Studio. Vai aparecer a barra "Level Up" na aba Plugins.

  Botões:
    • Preparar para o Level Up: selecione o modelo e clique. O plugin faz uma CÓPIA dele, separa todas as uniões
      (inclusive uniões dentro de uniões) em peças com as cores originais e guarda cada união numa pasta
      "[União] Nome". Depois clique com o botão direito na cópia → "Salvar no arquivo..." → tipo .rbxmx.
      No Laboratório, use Importar: as uniões voltam a ser uniões, idênticas.
    • Refazer uniões: depois de inserir aqui um modelo exportado do Laboratório, selecione e clique.
      Cada pasta "[União] Nome" vira uma união de verdade de novo (e peças "[Negar] ..." viram buracos).
]]

local Selection = game:GetService("Selection")
local History = game:GetService("ChangeHistoryService")

local UNIAO = "[União] "
local NEGAR = "[Negar] "

local toolbar = plugin:CreateToolbar("Level Up")
local btnPreparar = toolbar:CreateButton("Preparar para o Level Up",
	"Copia a seleção separando as uniões (com as cores originais) para importar no Laboratório da Level Up",
	"rbxasset://textures/StudioToolbox/AssetPreview/more.png")
local btnRefazer = toolbar:CreateButton("Refazer uniões",
	"Transforma as pastas \"[União] Nome\" em uniões de verdade",
	"rbxasset://textures/StudioToolbox/AssetPreview/more.png")
btnPreparar.ClickableWhenViewportHidden = true
btnRefazer.ClickableWhenViewportHidden = true

local function aviso(msg)
	print("[Level Up] " .. msg)
end

-- Uniões mais "de dentro" primeiro? Não: separar a de fora devolve as de dentro, que entram na fila de novo.
local function separarTudo(raiz)
	local feitas = 0
	local seguranca = 0
	while seguranca < 5000 do
		seguranca += 1
		local uniao
		for _, d in ipairs(raiz:GetDescendants()) do
			if d:IsA("UnionOperation") and not d:GetAttribute("LevelUpPulada") then uniao = d break end
		end
		if not uniao then break end

		local pasta = Instance.new("Model")
		pasta.Name = UNIAO .. uniao.Name
		pasta.Parent = uniao.Parent
		local corDaUniao = uniao.UsePartColor and uniao.Color or nil
		-- scripts, luzes, sons... saem da união antes de separar (senão somem com ela)
		local filhos = {}
		for _, f in ipairs(uniao:GetChildren()) do
			if not f:IsA("BasePart") then table.insert(filhos, f) f.Parent = pasta end
		end
		local ok, pecas = pcall(function() return plugin:Separate({ uniao }) end)
		if not ok or not pecas or #pecas == 0 then
			for _, f in ipairs(filhos) do f.Parent = uniao end
			pasta:Destroy()
			-- não deu para separar (união sem as peças originais): fica como está e sai da fila
			uniao:SetAttribute("LevelUpPulada", true)
			aviso("Não consegui separar '" .. uniao.Name .. "': " .. tostring(pecas))
			continue
		end
		for _, p in ipairs(pecas) do
			p.Parent = pasta
			if corDaUniao and p:IsA("BasePart") then p.Color = corDaUniao end
		end
		feitas += 1
	end
	return feitas
end

btnPreparar.Click:Connect(function()
	local sel = Selection:Get()
	if #sel == 0 then aviso("Selecione um modelo (ou peças) primeiro.") return end
	local rec = History:TryBeginRecording("Level Up: preparar")
	local copia = Instance.new("Model")
	copia.Name = (#sel == 1 and sel[1].Name or "Modelo") .. " (Level Up)"
	for _, obj in ipairs(sel) do
		local ok, c = pcall(function() return obj:Clone() end)
		if ok and c then c.Parent = copia end
	end
	copia.Parent = workspace
	local n = separarTudo(copia)
	if rec then History:FinishRecording(rec, Enum.FinishRecordingOperation.Commit) end
	Selection:Set({ copia })
	aviso(("Pronto! %d união(ões) separada(s) em '%s'. Agora: botão direito na cópia → Salvar no arquivo... → .rbxmx, e importe no Laboratório. (O original não foi mexido.)"):format(n, copia.Name))
end)

local function refazer(raiz)
	-- pastas mais fundas primeiro (uniões dentro de uniões)
	local pastas = {}
	local alvo = { raiz }
	for _, d in ipairs(raiz:GetDescendants()) do table.insert(alvo, d) end
	for _, d in ipairs(alvo) do
		if d:IsA("Model") and string.sub(d.Name, 1, #UNIAO) == UNIAO then table.insert(pastas, d) end
	end
	local function fundura(x) local n = 0 while x and x ~= game do n += 1 x = x.Parent end return n end
	table.sort(pastas, function(a, b) return fundura(a) > fundura(b) end)
	local feitas = 0
	for _, pasta in ipairs(pastas) do
		local pecas = {}
		for _, p in ipairs(pasta:GetChildren()) do
			if p:IsA("BasePart") then
				if p:IsA("Part") and string.sub(p.Name, 1, #NEGAR) == NEGAR then
					local ok, neg = pcall(function() return plugin:Negate({ p }) end)
					if ok and neg and neg[1] then neg[1].Name = string.sub(p.Name, #NEGAR + 1) table.insert(pecas, neg[1]) end
				else
					table.insert(pecas, p)
				end
			end
		end
		if #pecas >= 2 then
			local ok, uniao = pcall(function() return plugin:Union(pecas) end)
			if ok and uniao then
				uniao.Name = string.sub(pasta.Name, #UNIAO + 1)
				uniao.UsePartColor = false
				for _, f in ipairs(pasta:GetChildren()) do
					if f ~= uniao and not f:IsA("BasePart") then f.Parent = uniao end
				end
				uniao.Parent = pasta.Parent
				pasta:Destroy()
				feitas += 1
			else
				aviso("Não consegui unir '" .. pasta.Name .. "': " .. tostring(uniao))
			end
		end
	end
	return feitas
end

btnRefazer.Click:Connect(function()
	local sel = Selection:Get()
	if #sel == 0 then sel = { workspace } end
	local rec = History:TryBeginRecording("Level Up: refazer uniões")
	local total = 0
	for _, obj in ipairs(sel) do total += refazer(obj) end
	if rec then History:FinishRecording(rec, Enum.FinishRecordingOperation.Commit) end
	aviso(("%d união(ões) refeita(s)."):format(total))
end)
