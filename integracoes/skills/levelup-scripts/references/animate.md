# Animate e ações do personagem

O jogador local R15 recebe, somente em Jogar, um LocalScript Animate com clipes locais de parado, caminhar, correr, saltar, cair e escalar. Não duplica esses dados no mapa salvo. O controlador reage aos eventos do Humanoid; não cria um loop JavaScript por membro. Se existir LocalScript chamado Animate diretamente em StarterCharacterScripts, ele ganha precedência (inclusive desabilitado).

NPCs e rigs R6 não recebem esse controlador R15 automaticamente. Para eles, criar animações compatíveis com as juntas reais do contexto e tocar no Animator do respectivo Humanoid. MoveTo não cria um ciclo de caminhada para NPCs.

## Ação temporária com retorno aos movimentos padrão

Publique a animação no editor e use seu ID local ao mapa. O exemplo pressupõe uma Animation chamada Golpe em ReplicatedStorage > Animacoes. Coloque o LocalScript em StarterCharacterScripts para recriar a referência ao personagem quando ele renascer.

```lua
local humanoid = script.Parent:WaitForChild("Humanoid")
local animator = humanoid:WaitForChild("Animator")
local animacao = game:GetService("ReplicatedStorage")
    :WaitForChild("Animacoes"):WaitForChild("Golpe")
local faixa = animator:LoadAnimation(animacao)
faixa.Priority = Enum.AnimationPriority.Action
faixa.Looped = false
faixa:Play(0.1, 1, 1)
-- Stop(0.15) também permite interromper com saída suave.
```

Core é a prioridade mais baixa, apesar do valor numérico 1000 do enum. A ordem visual é Core, Idle, Movement, Action, Action2, Action3, Action4. Defina Priority antes de Play. Faixas da mesma prioridade misturam seus pesos; as mais altas cobrem as mais baixas nos ossos animados. Play aceita fadeTime, weight, speed; AdjustWeight(peso, fadeTime) muda o peso gradualmente, e AdjustSpeed altera a velocidade. WeightCurrent e WeightTarget podem ser lidos. TimePosition é atualizado para leitura; escrever nele ainda não reposiciona a faixa no motor visual.

O Animate padrão não impede a pose de segurar Tool. Uma ação de script com peso positivo pode assumir o controle do braço. Preserve os Motor6D e os scripts existentes do aluno. Não substituir o controlador inteiro para fazer um golpe.

## Limites e verificação

- Não há download automático de animações pelo ID da Roblox: somente os clipes locais incluídos e os publicados no mapa contêm poses. O pacote padrão não inclui danças, natação ou emotes do catálogo. Para acrescentá-los, criar/publicar dados compatíveis.
- KeyframeReached e GetMarkerReachedSignal ainda não notificam marcadores. Não depender deles para dano ou lógica da partida. DidLoop e Stopped existem; Ended sinaliza o término natural, não o fim exato de um fade visual.
- Limite visual de 24 faixas e 16 rigs simultâneos. Reutilize as faixas; não criar Animation/LoadAnimation a cada quadro. Pare e destrua ações que não serão reutilizadas.
- Testar parado → caminhar → correr → saltar → cair → pousar; equipar Tool, tocar/parar ação, morrer e renascer. Conferir a Saída e o retorno da mão à pose normal. A disponibilidade do clipe Climb não cria mecânica de escalada onde ela não existe.
- O motor encerra conexões, tarefas e faixas do antigo StarterCharacterScripts ao renascer. Ao sair de Jogar, o estado Luau é destruído. Testes Node não substituem medições no iPhone físico.

As mesmas regras valem para MCP e arquivos gratuitos; use os nomes, IDs e permissões presentes no contexto exportado.
