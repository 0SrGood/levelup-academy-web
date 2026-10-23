-- Level Up: personagem visual R6/R15 para o Studio Lite.
-- Instale na pasta Plugins do Roblox Studio e reinicie.
-- Selecione um character completo e clique em Preparar personagem.
-- Salve a cópia selecionada em .rbxmx ou .rbxm e importe no Studio Lite.
-- Malhas/texturas continuam sujeitas às permissões de acesso da Roblox.
local Selection = game:GetService("Selection")
local History = game:GetService("ChangeHistoryService")
local toolbar = plugin:CreateToolbar("Level Up")
local button = toolbar:CreateButton("Preparar personagem", "Copia um rig R6/R15 para ApplyCharacterReset no Studio Lite", "rbxasset://textures/StudioToolbox/AssetPreview/more.png")
button.ClickableWhenViewportHidden = true
local r6 = {"HumanoidRootPart","Head","Torso","Left Arm","Right Arm","Left Leg","Right Leg"}
local r15 = {"HumanoidRootPart","Head","UpperTorso","LowerTorso","LeftUpperArm","LeftLowerArm","LeftHand","RightUpperArm","RightLowerArm","RightHand","LeftUpperLeg","LeftLowerLeg","LeftFoot","RightUpperLeg","RightLowerLeg","RightFoot"}
button.Click:Connect(function()
 local copy
 local ok, err = pcall(function()
  local selected = Selection:Get()
  assert(#selected == 1 and selected[1]:IsA("Model"), "Selecione um único Model de personagem completo.")
  local source = selected[1]
  local required = source:FindFirstChild("UpperTorso") and r15 or r6
  local allowed, parts, names = {}, {}, {}
  for _, name in ipairs(required) do
   local part = source:FindFirstChild(name)
   assert(part and part:IsA("BasePart"), "Falta a peça " .. name)
   allowed[name] = true
  end
  for _, obj in ipairs(source:GetDescendants()) do
   if obj:IsA("Shirt") or obj:IsA("Pants") or obj:IsA("ShirtGraphic") or obj:IsA("Decal") or obj:IsA("Texture") or obj:IsA("SpecialMesh") or obj:IsA("SurfaceAppearance") or obj:IsA("WrapLayer") or obj:IsA("WrapTarget") then
    error("Aparência não exportável fielmente: " .. obj.ClassName .. " em " .. obj:GetFullName() .. ". Use peças Part/MeshPart com Color/TextureID; roupas em camadas, decals e SpecialMesh não são suportados.")
   end
   if obj:IsA("BasePart") then
    assert(obj.ClassName == "Part" or obj.ClassName == "MeshPart", "Classe visual não suportada: " .. obj.ClassName)
    assert(allowed[obj.Name] and obj.Parent == source, "Peça extra/acessório sem osso suportado: " .. obj:GetFullName())
    assert(not names[obj.Name], "Peça duplicada: " .. obj.Name)
    names[obj.Name] = true
    table.insert(parts, obj)
   end
  end
  assert(#parts <= 128, "Máximo de 128 peças.")
  copy = Instance.new("Model")
  copy.Name = source.Name .. "_Appearance"
  for _, part in ipairs(parts) do
   local old = part.Archivable
   part.Archivable = true
   local clonedOk, cloned = pcall(function() return part:Clone() end)
   part.Archivable = old
   assert(clonedOk and cloned, "Não foi possível copiar " .. part.Name)
   cloned:ClearAllChildren() -- sem scripts, constraints, animações ou juntas executáveis
   cloned.Anchored = true
   cloned.CanCollide = false
   cloned.CanTouch = false
   cloned.Parent = copy
  end
  copy.PrimaryPart = copy:FindFirstChild("HumanoidRootPart")
  copy.PrimaryPart.Transparency = 1
  History:SetWaypoint("Antes de preparar personagem Level Up")
  copy.Parent = workspace
  Selection:Set({copy})
  History:SetWaypoint("Personagem Level Up preparado")
  print("Level Up: cópia pronta. Salve em .rbxmx/.rbxm; importe no Studio Lite e mova o Model para ReplicatedStorage. Use humanoid:ApplyCharacterReset(modelo). A animação usa os ossos R15 do Studio Lite, sem copiar scripts ou física. MeshId/TextureID precisam estar acessíveis no navegador.")
 end)
 if not ok then if copy then copy:Destroy() end warn("Level Up: " .. tostring(err)) end
end)
