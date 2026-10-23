-- Level Up: exportador visual R6/R15 v4 para Studio Lite.
-- Cria uma cópia; nunca remove componentes do personagem original.
-- Salve a cópia em .rbxmx/.rbxm. Texturas/malhas precisam de acesso no navegador.
local Selection = game:GetService("Selection")
local History = game:GetService("ChangeHistoryService")
local Assets = game:GetService("AssetService")
local toolbar = plugin:CreateToolbar("Level Up")
local button = toolbar:CreateButton("Preparar personagem", "Prepara corpo e acessórios rígidos R6/R15 para Studio Lite", "rbxasset://textures/StudioToolbox/AssetPreview/more.png")
button.ClickableWhenViewportHidden = true
local r6 = {"HumanoidRootPart","Head","Torso","Left Arm","Right Arm","Left Leg","Right Leg"}
local r15 = {"HumanoidRootPart","Head","UpperTorso","LowerTorso","LeftUpperArm","LeftLowerArm","LeftHand","RightUpperArm","RightLowerArm","RightHand","LeftUpperLeg","LeftLowerLeg","LeftFoot","RightUpperLeg","RightLowerLeg","RightFoot"}
local exportButton = toolbar:CreateButton("Exportar personagem local", "Exporta OBJ e identificação RBXM para importar automaticamente no Studio Lite", "rbxasset://textures/StudioToolbox/AssetPreview/more.png")
exportButton.ClickableWhenViewportHidden = true
local busy = false
local function prepare(exportLocal)
 if busy then return end
 busy = true
 local copy
 local allocated = {}
 local function keep(part) table.insert(allocated, part) return part end
 local ok, err = pcall(function()
  local selected = Selection:Get()
  assert(#selected == 1, "Selecione um personagem completo ou uma peça dele.")
  local source = selected[1]
  while source and not (source:IsA("Model") and source:FindFirstChild("HumanoidRootPart")) do source = source.Parent end
  assert(source and source ~= workspace, "Selecione um Model de personagem completo (R6/R15).")
  local required = source:FindFirstChild("UpperTorso") and r15 or r6
  local bodies, notes, count = {}, {}, 0
  local function note(text) notes[text] = (notes[text] or 0) + 1 end
  for _, name in ipairs(required) do
   local part = source:FindFirstChild(name)
   assert(part and part:IsA("BasePart"), "Falta a peça " .. name)
   bodies[name] = part
  end
  copy = Instance.new("Model")
  copy.Name = source.Name .. "_Appearance"
  local function visual(part, name)
   assert(count < 128, "Máximo de 128 peças visuais. Reduza os acessórios.")
   local cloned
   -- FileMesh usa o tamanho nativo da malha multiplicado por Scale, não o Size do Part.
   local special = part:FindFirstChildWhichIsA("SpecialMesh")
   if special and special.MeshType == Enum.MeshType.FileMesh and special.MeshId ~= "" then
    local made, result = pcall(function() return Assets:CreateMeshPartAsync(Content.fromUri(special.MeshId), {CollisionFidelity = Enum.CollisionFidelity.Box}) end)
    if made and result then
     cloned = keep(result)
     cloned.Size = Vector3.new(math.max(0.01, cloned.Size.X * math.abs(special.Scale.X)), math.max(0.01, cloned.Size.Y * math.abs(special.Scale.Y)), math.max(0.01, cloned.Size.Z * math.abs(special.Scale.Z)))
     cloned.TextureID = special.TextureId
    else
     note("SpecialMesh sem permissão de conversão: substituído por forma simples")
    end
   end
   if not cloned then
    if part.ClassName == "Part" or part.ClassName == "MeshPart" then
     local old = part.Archivable
     part.Archivable = true
     local worked, result = pcall(function() return part:Clone() end)
     part.Archivable = old
     assert(worked and result, "Não foi possível copiar " .. part.Name)
     cloned = keep(result)
    else
     cloned = keep(Instance.new("Part"))
     cloned.Size = part.Size
     note("Peça " .. part.ClassName .. ": substituída por bloco")
    end
    if special and cloned:IsA("Part") then
     if special.MeshType == Enum.MeshType.Sphere or special.MeshType == Enum.MeshType.Head then
      cloned.Shape = Enum.PartType.Ball
     elseif special.MeshType == Enum.MeshType.Cylinder then
      cloned.Shape = Enum.PartType.Cylinder
     end
     if special.MeshType ~= Enum.MeshType.FileMesh then
      cloned.Size = Vector3.new(math.max(0.01, part.Size.X * math.abs(special.Scale.X)), math.max(0.01, part.Size.Y * math.abs(special.Scale.Y)), math.max(0.01, part.Size.Z * math.abs(special.Scale.Z)))
      note("SpecialMesh primitivo: forma aproximada")
     end
    end
   end
   -- Preserve PBR e ossos estáticos da cabeça: TextureID não equivale a SurfaceAppearance.
   local function clean(parent)
    for _, child in ipairs(parent:GetChildren()) do
     if child:IsA("SurfaceAppearance") then
      child:ClearAllChildren()
     elseif child:IsA("Bone") then clean(child)
     else child:Destroy() end
    end
   end
   clean(cloned) -- sem scripts, juntas, gaiolas ou controladores executáveis
   cloned.Name = name
   cloned.CFrame = part.CFrame * CFrame.new(special and special.Offset or Vector3.zero)
   cloned.Color = part.Color
   cloned.Material = part.Material
   cloned.Transparency = part.Transparency
   cloned.Reflectance = part.Reflectance
   local surface = part:FindFirstChildWhichIsA("SurfaceAppearance")
   if surface and cloned:IsA("MeshPart") then
    note("SurfaceAppearance preservado; Studio Lite usa cor principal e transparência")
   end
   if special then
    local v = special.VertexColor
    cloned.Color = Color3.new(part.Color.R * v.X, part.Color.G * v.Y, part.Color.B * v.Z)
   end
   cloned.Anchored = true
   cloned.CanCollide = false
   cloned.CanTouch = false
   cloned.CanQuery = false
   if name == "HumanoidRootPart" then cloned.Transparency = 1 end
   count += 1
   assert(count <= 128, "Máximo de 128 peças visuais. Reduza os acessórios.")
   cloned.Parent = copy
  end
  for _, name in ipairs(required) do visual(bodies[name], name) end
  local accessoryIndex = 0
  for _, obj in ipairs(source:GetChildren()) do
   -- Humanoid conserva a composição das roupas na prévia do próprio Roblox Studio.
   if obj:IsA("Shirt") or obj:IsA("Pants") or obj:IsA("BodyColors") or obj:IsA("Humanoid") then
    local old = obj.Archivable
    obj.Archivable = true
    local clonedOk, cloned = pcall(function() return obj:Clone() end)
    obj.Archivable = old
    assert(clonedOk and cloned, "Não foi possível preservar " .. obj.ClassName)
    keep(cloned)
    cloned:ClearAllChildren()
    cloned.Parent = copy
   end
   if obj:IsA("Accessory") or obj:IsA("Hat") then
    if obj:FindFirstChildWhichIsA("WrapLayer", true) then
     note("Roupa em camadas removida: deformação não suportada")
    else
     local handle = obj:FindFirstChild("Handle")
     local bone
     if handle and handle:IsA("BasePart") then
      -- Weld conserva o ponto real de fixação, inclusive acessórios sem Attachment.
      for _, joint in ipairs(handle:GetDescendants()) do
       if joint:IsA("JointInstance") or joint:IsA("WeldConstraint") then
        local other = joint.Part0 == handle and joint.Part1 or joint.Part1 == handle and joint.Part0
        if other and bodies[other.Name] == other and other.Name ~= "HumanoidRootPart" then bone = other.Name break end
       end
      end
      if not bone then
       for _, att in ipairs(handle:GetChildren()) do
        if att:IsA("Attachment") then
         for _, name in ipairs(required) do
          if name ~= "HumanoidRootPart" and bodies[name]:FindFirstChild(att.Name) then bone = name break end
         end
        end
        if bone then break end
       end
      end
     end
     if bone then
      for _, part in ipairs(obj:GetDescendants()) do
       if part:IsA("BasePart") then
        accessoryIndex += 1
        visual(part, "LUAccessory_" .. bone .. "_" .. accessoryIndex)
       end
      end
     else note("Acessório sem fixação reconhecida removido") end
    end
   end
  end
  for _, obj in ipairs(source:GetDescendants()) do
   if obj:IsA("ShirtGraphic") then note("ShirtGraphic removido: use Shirt para a estampa clássica")
   elseif obj:IsA("Decal") or obj:IsA("Texture") then note("Decal/Texture removido: sem equivalente na aparência")
   elseif obj:IsA("WrapTarget") then note("WrapTarget removido: gaiola desnecessária no Studio Lite")
   elseif obj:IsA("FaceControls") then note("Animação facial removida: cabeça permanece estática") end
  end
  copy.PrimaryPart = copy:FindFirstChild("HumanoidRootPart")
  History:SetWaypoint("Antes de preparar personagem Level Up")
  copy.Parent = workspace
  Selection:Set({copy})
  History:SetWaypoint("Personagem Level Up preparado")
  print("Level Up v4: cópia pronta com " .. count .. " peças. Salve em .rbxmx/.rbxm, importe no Studio Lite e mova o Model para ReplicatedStorage. Use humanoid:ApplyCharacterReset(modelo).")
  for message, total in pairs(notes) do warn("Level Up: " .. message .. " (" .. total .. "). Original preservado.") end
  print("Level Up: malhas e texturas privadas ainda dependem das permissões da Roblox; não são desbloqueadas pelo plugin.")
  if exportLocal then
   print("Level Up: etapa 1/2 — salve o OBJ e mantenha o MTL e todas as imagens geradas.")
   PluginManager():ExportSelection(copy.Name .. ".obj")
   Selection:Set({copy})
   print("Level Up: etapa 2/2 — salve também o RBXM de identificação. Ele permite reconhecer corpo e acessórios sem escolhas manuais.")
   local saved = plugin:PromptSaveSelectionAsync(copy.Name .. "_identificacao.rbxm")
   if saved then
    print("Level Up: agora selecione juntos no Studio Lite o OBJ, MTL, todas as imagens e este RBXM. O RBXM identifica as peças; o OBJ guarda o visual.")
   else
    warn("Level Up: identificação não foi salva. Exporte novamente e conclua as duas etapas para não precisar identificar peças manualmente.")
   end
  end
 end)
 if not ok then
  for _, part in ipairs(allocated) do part:Destroy() end
  if copy then copy:Destroy() end
  warn("Level Up: " .. tostring(err))
 end
 busy = false
end
button.Click:Connect(function() prepare(false) end)
exportButton.Click:Connect(function() prepare(true) end)
