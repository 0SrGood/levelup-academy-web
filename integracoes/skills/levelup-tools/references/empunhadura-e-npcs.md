# Pega, escala e equipamentos em NPCs

## Primeiro a mão; depois a arma

Uma espada de cenário e uma espada de mão têm escalas diferentes. Para um personagem padrão de aproximadamente 5–6 studs, um ponto de partida é uma espada total de 3–4 studs, lâmina de 2–2.5, cabo de 0.65–0.9 e diâmetro de 0.2–0.35; guarda próxima de 1–1.3. Isso é referência de proporção, não limite universal: espadas grandes podem ser intencionais. Ajuste ao rig real. Não escalar apenas o Handle para tentar diminuir a arma.

1. Planeje o cabo e a posição da palma antes de finalizar a geometria. Use cilindro com comprimento no X local, Size=[comprimento,diâmetro,diâmetro] e Orientation=[0,0,90] para cabo ao longo de Y.
2. Modele a lâmina com ponta e chanfros, guarda e pomo; finalize CSG antes de soldar. A receita espada-tool.json aplica os recortes reais e preserva cores distintas de metal e cabo.
3. Coloque uma Part invisível chamada Handle **no centro da região do cabo que os dedos seguram**, filha direta de Tool. O centro da união da arma inteira normalmente fica na lâmina: usá-lo como pega afasta a arma da mão.
4. Se o Handle está orientado como o objeto e já representa a pega, comece com GripPos=[0,0,0]. Não colocar a posição global da Tool em GripPos. Soldas preservam o deslocamento entre a pega e a geometria.
5. Só então refine GripOrientation. O motor usa `mão × inverso(Grip)`, portanto alterar Grip tem efeito inverso sobre a arma. Um primeiro exemplo de espada inclinada para frente e um pouco para fora é GripOrientation=[25,0,12]. É uma referência, não uma rotação obrigatória para martelos, instrumentos ou rigs personalizados.
6. Confira três vistas: palma envolvendo o **cabo**, guarda acima dos dedos, lâmina fora do torso e ponta sem atravessar cabeça/chão. A peça não deve flutuar ao lado da mão. Mantenha Anchored=false, CanCollide=false e soldas válidas em todas as peças finais.
7. Ande, gire, equipe/desequipe e teste uma pose animada. Não considerar aprovado por apenas aparecer um slot no inventário. Se não foi possível executar Jogar, informe essa limitação.

O Handle do jogador usa a mão direita do avatar, com eixos calibrados para esse esqueleto. Em NPC R15 usa RightHand; em R6 usa a extremidade inferior de Right Arm. Não soldar manualmente o Handle ao braço: o encaixe da Tool faz essa ligação. As soldas da Tool unem seus próprios componentes ao Handle.

## NPC no editor e em Jogar

Para colocar uma espada em um NPC existente:

- Use o ID real do Model do NPC como parent da Tool, como **filha direta**. Ele precisa estar no Workspace e conter Humanoid e RightHand ou Right Arm como filhos diretos. Não usar um serviço novo nem colocar a Tool dentro do Humanoid.
- Reutilize ou clone uma Tool completa: Handle direto, geometria final, referências de WeldConstraint remapeadas para a cópia. Mover apenas a lâmina ou um Model com nome Tool não equipa.
- No editor, o encaixe é uma prévia que não destrói as coordenadas de modelagem. Grip e o ponto de pega controlam o resultado. Peças sem soldas não são automaticamente grudadas: conserte as conexões.
- Em Jogar, uma Tool filha direta do NPC é equipada nesse NPC. Os equipamentos dele não aparecem no inventário do jogador.

Em um Script, se a Tool ainda está no Workspace e o usuário pediu equipar por código:

```lua
local npc = workspace:WaitForChild("Guarda") -- nome real do NPC
local humanoid = npc:WaitForChild("Humanoid")
local tool = workspace:WaitForChild("Espada de treino")
humanoid:EquipTool(tool)
```

`Humanoid:UnequipTools()` do NPC devolve suas Tools ao Workspace no Level Up, pois NPC não possui a Backpack do jogador. Para guardar/remover um equipamento de outra forma, mude Parent explicitamente. No jogador, UnequipTools devolve à própria Backpack.

Conferir: item aparece na mão na edição; em Jogar acompanha deslocamento e rotação do NPC e sua animação; nenhuma parte cai; não entra na mochila do aluno; trocar/remover Tool libera a mão. Não inventar sons, dano ou animação de ataque ao entregar somente a modelagem.
