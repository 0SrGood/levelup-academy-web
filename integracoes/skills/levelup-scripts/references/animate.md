# Animate e ações do personagem

O jogador local R15 recebe, somente em Jogar, um LocalScript Animate com clipes locais de parado, caminhar, correr, saltar, cair e escalar. Não duplica esses dados no mapa salvo. O controlador reage aos eventos do Humanoid; não cria um loop JavaScript por membro. Se existir LocalScript chamado Animate diretamente em StarterCharacterScripts, ele ganha precedência (inclusive desabilitado).

NPCs e rigs R6 não recebem esse controlador R15 automaticamente. Para um NPC R15, selecione o rig e use Personagem > Animate: o Animate entra como **Script** dentro do NPC. LocalScript num NPC não roda, porque o NPC não tem cliente, como no Roblox. Com o Animate como Script, o MoveTo do NPC toca andar e correr. Para R6, criar animações compatíveis com as juntas reais e tocar no Animator do Humanoid.

## Ação temporária com retorno aos movimentos padrão

Publique a animação no editor e use seu ID local ao mapa. Novas publicações ficam em ServerStorage > Animations. No cliente, crie a referência Animation pelo ID publicado; ServerStorage não é replicado ao cliente no Roblox. Projetos antigos continuam com suas pastas e referências originais. Coloque o LocalScript em StarterCharacterScripts para recriar a referência ao personagem quando ele renascer.

```lua
local humanoid = script.Parent:WaitForChild("Humanoid")
local animator = humanoid:WaitForChild("Animator")
local animacao = Instance.new("Animation")
animacao.AnimationId = "rbxassetid://00000001" -- substitua pelo ID publicado
local faixa = animator:LoadAnimation(animacao)
faixa.Priority = Enum.AnimationPriority.Action
faixa.Looped = false
faixa:Play(0.1, 1, 1)
-- Stop(0.15) também permite interromper com saída suave.
```

Core é a prioridade mais baixa, apesar do valor numérico 1000 do enum. A ordem visual é Core, Idle, Movement, Action, Action2, Action3, Action4. Defina Priority antes de Play. Faixas da mesma prioridade misturam seus pesos; as mais altas cobrem as mais baixas nos ossos animados. Play aceita fadeTime, weight, speed; AdjustWeight(peso, fadeTime) muda o peso gradualmente, e AdjustSpeed altera a velocidade. WeightCurrent e WeightTarget podem ser lidos. TimePosition é atualizado para leitura; escrever nele ainda não reposiciona a faixa no motor visual.

O Animate padrão não impede a pose de segurar Tool. Uma ação de script com peso positivo pode assumir o controle do braço. Preserve os Motor6D e os scripts existentes do aluno. Não substituir o controlador inteiro para fazer um golpe.

## Escalada (como no Roblox)

- O personagem escala **TrussPart** (seção 2x2, inserida em Modelo > Treliça) e **escadas de degraus**. Na coluna rente à frente do personagem é preciso haver peça, depois espaço vazio de até 2,6 studs, depois outra peça (degraus, grade). Poste, parede, lateral de escada e peças contínuas não são escaláveis.
- Andar de frente para ela entra no estado `Enum.HumanoidStateType.Climbing`: sobe a 70% da WalkSpeed, para trás desce, parado fica preso, pular solta e afasta da parede. No topo, o personagem sobe na peça.
- `Humanoid.Climbing` recebe a velocidade vertical (negativa ao descer); o Animate toca a animação climb com essa velocidade. `Humanoid.Running` só dispara no chão.
- Uma parede lisa (Part alta) não é escalável, como no Roblox.

## Editar as animações de movimento

- Personagem > **Animate**: coloca o LocalScript Animate em StarterCharacterScripts (como copiar o Animate do personagem no Roblox) e, com um rig R15 selecionado, as animações Walk, Run, Idle, Jump, Fall e Climb no AnimSaves do rig.
- Para trocar uma: abrir no Editor de animação, editar, publicar e colar o novo ID em Animate > (walk, run, idle, jump, fall, climb) > Animation > AnimationId. Os IDs LUP originais continuam funcionando.

## Limites e verificação

- Não há download automático de animações pelo ID da Roblox: somente os clipes locais incluídos e os publicados no mapa contêm poses. O pacote padrão não inclui danças, natação ou emotes do catálogo. Para acrescentá-los, criar/publicar dados compatíveis.
- KeyframeReached e GetMarkerReachedSignal ainda não notificam marcadores. Não depender deles para dano ou lógica da partida. DidLoop e Stopped existem; Ended sinaliza o término natural, não o fim exato de um fade visual.
- Limite visual de 24 faixas e 16 rigs simultâneos. Reutilize as faixas; não criar Animation/LoadAnimation a cada quadro. Pare e destrua ações que não serão reutilizadas.
- Testar parado → caminhar → correr → saltar → cair → pousar; equipar Tool, tocar/parar ação, morrer e renascer. Conferir a Saída e o retorno da mão à pose normal. Para escalar, use TrussPart ou escada de degraus (veja abaixo).
- O motor encerra conexões, tarefas e faixas do antigo StarterCharacterScripts ao renascer. Ao sair de Jogar, o estado Luau é destruído. Testes Node não substituem medições no iPhone físico.

As mesmas regras valem para MCP e arquivos gratuitos; use os nomes, IDs e permissões presentes no contexto exportado.


Escalar exige TrussPart ou degraus horizontais próximos; postes, paredes lisas e plataformas isoladas não são escadas. Não usar detalhes de um poste como justificativa para escalada.
