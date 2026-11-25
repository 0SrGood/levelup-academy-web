# NPCs: caminhar, orientar e aplicar velocidade

Estas regras valem no MCP e no arquivo gratuito, com qualquer assistente. Use a operação `rig` para criar R6/R15 com Motor6D reais. O Model precisa estar no Workspace, com Humanoid e HumanoidRootPart. O rig novo vem desancorado e apenas a raiz tem CanCollide=true; os membros seguem as juntas. Uma parte conectada ancorada impede a montagem de andar. Para NPC móvel, não aplique a regra de ancorar cenário estático.

## Caminhar até um ponto

Crie este Script dentro do NPC; crie uma Part ancorada chamada Destino no Workspace:

```lua
local npc = script.Parent
local humanoid = npc:WaitForChild("Humanoid")
local destino = workspace:WaitForChild("Destino")
humanoid.WalkSpeed = 8
humanoid:MoveTo(destino.Position)
local chegou = humanoid.MoveToFinished:Wait()
print(chegou and "Chegou ao destino" or "Destino não alcançado")
```

O primeiro argumento é Vector3: use destino.Position ou Vector3.new(x,y,z), nunca a própria Part, uma lista JSON ou CFrame. Use dois-pontos no método. O segundo argumento opcional pode ser uma BasePart cujo deslocamento o destino acompanha. A caminhada respeita WalkSpeed, AutoRotate, colisões, gravidade e a raiz desancorada. MoveToFinished retorna true na chegada e false quando não alcança o alvo em oito segundos. Repetir MoveTo redefine o prazo; não chamar a cada quadro sem necessidade. Model:MoveTo reposiciona o conjunto, não faz o Humanoid caminhar.

O controlador segue em linha reta; não promete PathfindingService nem navegação ao redor de paredes. Um obstáculo pode impedir a chegada. Caminhar não cria automaticamente uma animação: use Animator/AnimationTrack e animações Motor6D editáveis para o ciclo de passos.

## HipHeight: manter os pés no chão

A altura abaixo é a distância do chão ao **centro da HumanoidRootPart**:

- R15: altura = RootPart.Size.Y/2 + Humanoid.HipHeight. Rig padrão: raiz com Size.Y=2, HipHeight=2, altura=3.
- R6: altura = LeftLeg.Size.Y + RootPart.Size.Y/2 + Humanoid.HipHeight. Rig padrão: perna com Size.Y=2, raiz com Size.Y=2, HipHeight=0, altura=3.

Não usar HipHeight=2 indistintamente em R6 e R15. Não fazer cada membro cair sozinho. Preservar Motor6D e Part0/Part1, e verificar a altura real dos pés. O controle de escala de Model aumenta peças, posições, deslocamentos C0/C1 e HipHeight juntos. Se a IA mudar o tamanho pelo JSON usando operações separadas, deve ajustar esses valores explicitamente pelo mesmo fator; modificar só Size distorce o rig.

## Frente e velocidade

```lua
local root = humanoid.RootPart
local frente = root.CFrame.LookVector
humanoid:MoveTo(root.Position + frente * 10)
-- Em uma ação separada, um impulso em studs por segundo:
root.AssemblyLinearVelocity = frente * 20 + Vector3.new(0, 15, 0)
```

LookVector é a direção unitária da frente (-Z local), não uma posição e não uma propriedade direta de Part. RightVector e UpVector são os outros eixos do CFrame. Para orientar: root.CFrame = CFrame.lookAt(root.Position, alvo.Position). AutoRotate pode mudar essa direção durante MoveTo; use false quando precisar controlar a orientação pelo script.

Velocity e AssemblyLinearVelocity recebem Vector3 em studs/s e são aliases no runtime atual. Prefira aplicá-las na raiz de um rig conectado. Uma montagem ancorada não se desloca; a gravidade modifica o componente vertical a cada passo. MoveTo controla a velocidade horizontal durante a caminhada; termine ou substitua a caminhada antes de uma ação de impulso que precise controlar esse eixo. Não criar um loop para reescrever a velocidade a cada quadro sem necessidade.

## Testar antes de entregar

1. R6 e R15 desancorados ficam com os pés apoiados, inclusive após mudar HipHeight.
2. NPC anda até um destino livre e MoveToFinished retorna true; uma raiz ancorada/obstáculo resulta em false após o prazo.
3. O comando de um NPC não move o jogador nem outro NPC.
4. Frente acompanha a orientação, e o impulso move a raiz e os membros juntos.
5. Poucos NPCs inicialmente; medir a carga antes de multiplicar personagens. Usar eventos e remover conexões ao destruir o sistema. Não prometer desempenho no iOS sem testar no aparelho.

Referência primária: [Humanoid — HipHeight e MoveTo](https://create.roblox.com/docs/reference/engine/classes/Humanoid), [CFrame](https://create.roblox.com/docs/reference/engine/datatypes/CFrame), [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart). O Level Up implementa um subconjunto; seguir os limites acima.
