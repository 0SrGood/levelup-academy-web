--[[
  Plugin Level Up para o Roblox Studio — modelos v2
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

-- Buraco (NegateOperation): volta a ser a peça original, com a forma certa (bloco, cilindro, esfera, cunha),
-- marcada "[Negar] ". Se o buraco era uma união inteira, cada peça dela vira um buraco (dá o mesmo resultado).
local function soPecas(obj, lista)
	if obj:IsA("UnionOperation") or obj:IsA("NegateOperation") then
		local ok, r = pcall(function() return plugin:Separate({ obj }) end)
		if ok and r then for _, x in ipairs(r) do soPecas(x, lista) end end
	elseif obj:IsA("BasePart") then
		table.insert(lista, obj)
	end
	return lista
end
local function virarBuraco(neg, pasta)
	local lista = soPecas(neg, {})
	for _, p in ipairs(lista) do
		p.Parent = pasta
		if string.sub(p.Name, 1, #NEGAR) ~= NEGAR then p.Name = NEGAR .. p.Name end
	end
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
			if p:IsA("NegateOperation") then virarBuraco(p, pasta) end
		end
		feitas += 1
	end
	return feitas
end

local function preparar()
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
end
btnPreparar.Click:Connect(preparar)

-- Reconstrução transacional: os operandos só são removidos depois do CSG terminar.
local function refazer(raiz)
 local geometry=game:GetService("GeometryService")
 local pastas={} local alvo={raiz}
 for _,d in ipairs(raiz:GetDescendants()) do table.insert(alvo,d) end
 for _,d in ipairs(alvo) do if d:IsA("Model") and string.sub(d.Name,1,#UNIAO)==UNIAO then table.insert(pastas,d) end end
 local function depth(x) local n=0 while x and x~=game do n+=1 x=x.Parent end return n end
 table.sort(pastas,function(a,b) return depth(a)>depth(b) end)
 local feitas=0
 for _,pasta in ipairs(pastas) do
  local positive,negative={},{}
  for _,p in ipairs(pasta:GetChildren()) do
   if p:IsA("BasePart") then
    if string.sub(p.Name,1,#NEGAR)==NEGAR or p:IsA("NegateOperation") then table.insert(negative,p) else table.insert(positive,p) end
   end
  end
  if #positive==0 then aviso("Sem volume positivo em "..pasta.Name) continue end
  local result
  local ok,err=pcall(function()
   local metadata=pasta:FindFirstChild("LevelUpCSGSettings")
   local settings=metadata and metadata:IsA("StringValue") and game:GetService("HttpService"):JSONDecode(metadata.Value) or {}
   local options={SplitApart=false,CollisionFidelity=Enum.CollisionFidelity.Default,RenderFidelity=Enum.RenderFidelity.Automatic}
   if settings.CollisionFidelity then local fidelity=Enum.CollisionFidelity[settings.CollisionFidelity] if fidelity then options.CollisionFidelity=fidelity end end
   if #positive==1 then result=positive[1]:Clone() else local rest={} for j=2,#positive do table.insert(rest,positive[j]) end if settings.CSGOperation=="Intersect" then result=geometry:IntersectAsync(positive[1],rest,options)[1] else result=geometry:UnionAsync(positive[1],rest,options)[1] end end
   if not result then error("A união não produziu um volume") end
   if #negative>0 then local cut=geometry:SubtractAsync(result,negative,options)[1] if not cut then error("Os cortes removeram todo o volume") end result:Destroy() result=cut end
   local metadata=pasta:FindFirstChild("LevelUpCSGSettings")
   local settings=metadata and metadata:IsA("StringValue") and game:GetService("HttpService"):JSONDecode(metadata.Value) or {}
   local source=positive[1]
   result.Name=string.sub(pasta.Name,#UNIAO+1)
   if settings.Anchored==nil then result.Anchored=source.Anchored else result.Anchored=settings.Anchored end
   if settings.CanCollide==nil then result.CanCollide=source.CanCollide else result.CanCollide=settings.CanCollide end
   if settings.CanTouch==nil then result.CanTouch=source.CanTouch else result.CanTouch=settings.CanTouch end
   if settings.CanQuery~=nil then result.CanQuery=settings.CanQuery end
   result.Transparency=settings.Transparency or source.Transparency
   result.Reflectance=settings.Reflectance or source.Reflectance
   if result:IsA("PartOperation") then result.UsePartColor=settings.UsePartColor==true end
   if settings.Color and settings.UsePartColor then result.Color=Color3.fromRGB(table.unpack(settings.Color)) end
   -- Só agora efetivar a substituição. Scripts/luzes ficam no resultado; metadados técnicos são consumidos.
   for _,child in ipairs(pasta:GetChildren()) do if not child:IsA("BasePart") and child~=metadata then child.Parent=result end end
   result.Parent=pasta.Parent pasta:Destroy() feitas+=1
  end)
  if not ok then if result then result:Destroy() end aviso("Não consegui reconstruir '"..pasta.Name.."'. As peças foram preservadas: "..tostring(err)) end
  task.wait()
 end
 return feitas
end

local function refazerSelecao()
	local sel = Selection:Get()
	if #sel == 0 then sel = { workspace } end
	local rec = History:TryBeginRecording("Level Up: refazer uniões")
	local total = 0
	for _, obj in ipairs(sel) do total += refazer(obj) end
	if rec then History:FinishRecording(rec, Enum.FinishRecordingOperation.Commit) end
	aviso(("%d união(ões) refeita(s)."):format(total))
end
btnRefazer.Click:Connect(refazerSelecao)
