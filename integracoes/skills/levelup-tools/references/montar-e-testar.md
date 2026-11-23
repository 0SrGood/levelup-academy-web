# Montar uma Tool e conferir a pega

1. Leia os serviços e IDs do contexto. Crie Tool com parent="StarterPack", RequiresHandle=true, Enabled=true, ToolTip descritivo e empunhadura inicial.
2. Modele o objeto em escala utilizável pelo jogador. Part simples é aceita para uma tábua, escala do instrumento ou ponte; corpo, curvas, cabo circular, encaixes e detalhes devem ter forma trabalhada conforme a referência.
3. Preserve materiais/comportamentos separados quando necessário. Finalize os negativos e uniões antes das soldas. No corpo uniforme, cor dos cortadores coerente e UsePartColor=true; união externa multicolorida com false.
4. Crie Handle diretamente na Tool, posição da pega, Transparency=1, Anchored=false, CanCollide=false e CanTouch=false. Size >=0.05. Use uma peça existente renomeada apenas quando ela for a pega correta e continuar filha direta.
5. Percorra todas as BaseParts finais descendentes, exceto Handle. Para cada uma, crie WeldConstraint com parent="handle", Part0="handle", Part1=refFinal, Enabled=true. Estar no mesmo Model não solda.
6. As referências são resolvidas pelo importador. Crie Part0/Part1 depois das respectivas peças; não deixar refs consumidas por union. Não use a classe Weld (não está no contrato) como substituta.
7. Desancore todas as peças equipáveis. Mantenha colisão desligada para não prender a ferramenta no chão/jogador. O mapa ao redor permanece intacto.
8. Revise a proposta e importe. Em Jogar, escolha o slot na barra de ferramentas. Para autoequipar, um LocalScript na Tool pode usar o exemplo abaixo, se o usuário pediu isso.
9. Ajuste GripPos/GripOrientation até encaixar a pega; observe frente, lado e costas. A transformação da pega é invertida ao prender à mão; não assumir que o mesmo sinal de deslocamento vale para posição global.
10. Ande, gire, desequipe e equipe novamente. Confira que o corpo e detalhes seguem juntos. Reinicie/renasça e confirme a cópia nova da Backpack. Não adicionar uma segunda cópia a cada quadro.

## Autoequipar a cópia, quando solicitado

LocalScript filho da Tool em StarterPack:

```lua
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local tool = script.Parent
local character = player.Character or player.CharacterAdded:Wait()
local humanoid = character:WaitForChild("Humanoid")
local backpack = player:WaitForChild("Backpack")
if tool.Parent == backpack then
    humanoid:EquipTool(tool)
end
```

O runtime inicia a cópia do script da Tool clonada para Backpack. Não usar game.StarterPack.Violao como argumento para equipar. Se não houver pedido para autoequipar, o slot do inventário basta.

## Ativação opcional

Um script de comportamento pode ligar tool.Equipped, Unequipped, Activated e Deactivated. Não confundir ligar eventos com produzir som ou animação: esses efeitos exigem recursos disponíveis e configurados. Não inventar Sound no JSON do Level Up se não existir em classes/propertyDefinitions.
