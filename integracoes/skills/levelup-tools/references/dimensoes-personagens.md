# Dimensões e eixos para criar Tools

Use studs. As medidas abaixo são as dos **rigs de blocos do construtor do Level Up**, em pose neutra e escala original, sem acessórios. Não são uma garantia para todos os avatares da Roblox, para o avatar visual do jogador nem para personagens importados. O contexto `characterReference.standardRigs` é gerado a partir de `RIGS`, incluindo as medidas de cada parte.

| Referência | R6 do Level Up | R15 do Level Up |
| --- | --- | --- |
| Corpo inteiro, largura × altura × profundidade | 4 × 5 × 1 | 4 × 5.2 × 1.2 |
| Cabeça | 2 × 1 × 1 | 1.2 × 1.2 × 1.2 |
| Torso | 2 × 2 × 1 | UpperTorso: 2 × 1.6 × 1; LowerTorso: 2 × 0.4 × 1 |
| Braço direito | Right Arm: 1 × 2 × 1 | UpperArm: 1 × 0.8 × 1; LowerArm: 1 × 0.8 × 1 |
| Mão direita | Extremidade inferior de Right Arm | RightHand: 1 × 0.4 × 1 |
| Ponto de pega relativo ao centro da HumanoidRootPart | [1.5, -0.85, 0] | [1.5, -0.8, 0] |
| Limites verticais relativos à HumanoidRootPart | -3 até +2 | -3 até +2.2 |

Para colocar esses rigs em um piso de Y=0, o centro da HumanoidRootPart fica em Y=3. Isso descreve o modelo estático do construtor: não substituir HipHeight ou a lógica de spawn do controlador do jogador por essa constante.

## Orientação, sem adivinhar eixos

- Rig sem rotação: **+X é direita, +Y é cima e -Z é frente**. Um rig girado carrega esses eixos locais consigo. Não usar a frente global como se o personagem nunca girasse.
- `Size=[X,Y,Z]` mede largura, altura e profundidade de blocos. Em cilindros, o comprimento está no **X local**: um cabo vertical usa `Size=[comprimento,diâmetro,diâmetro]`, `Orientation=[0,0,90]`.
- `Position` é o centro da peça. As coordenadas da tabela são relativas à HumanoidRootPart, não posições de mundo nem valores para GripPos.
- `Orientation` e `GripOrientation` usam graus com ordem YXZ. Não misturar radianos com graus no arquivo JSON.
- O motor usa `mão × inverso(Grip)`. Com Handle no meio do cabo, comece com `GripPos=[0,0,0]`. Configure a orientação olhando o objeto na palma; não compensar uma origem errada com um grande deslocamento arbitrário.

## Escala da Tool

Uma espada comum para esses rigs pode começar com 3–4 studs totais, lâmina de 2–2.5, cabo de 0.65–0.9, diâmetro de 0.2–0.35 e guarda de 1–1.3. O Handle representa a pega no cabo, mesmo que a união tenha o centro na lâmina. Veja espada-tool.json: sua altura é aproximadamente 3.1 studs, com CSG modelado e ponto de pega separado. Essas proporções podem mudar se o usuário pediu uma arma grande ou outro estilo.

Para um personagem importado ou reescalado:

1. Identifique Humanoid, HumanoidRootPart e a mão/parte final do braço pelo contexto real.
2. Meça as caixas transformadas das partes visíveis; não incluir o cenário, uma Tool já equipada, acessórios enormes ou hitboxes invisíveis no tamanho do corpo.
3. Compare a nova altura à referência correspondente e ajuste **toda a geometria** da Tool, não apenas o Handle. Depois confira separadamente o diâmetro do cabo e o tamanho da palma.
4. Meça a posição e a rotação da mão no rig. Não copiar as coordenadas relativas de R6 para R15 nem a orientação do osso do avatar para uma Part de NPC.
5. Confira de frente/lado/costas na edição e em Jogar: dedos no cabo, guarda fora da mão, lâmina sem atravessar corpo/cabeça/chão e peças acompanhando a animação. Se não houver essas medidas no arquivo, pedir um contexto atualizado em vez de garantir uma pega correta por suposição.
