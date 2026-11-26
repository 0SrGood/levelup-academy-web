---
name: levelup-animacao
description: Criar animações R6 e R15 editáveis no Studio Level Up por arquivo JSON gratuito ou MCP, com poses, juntas e quadros reais.
---

# Animação no Studio Level Up

Funciona nos dois fluxos: arquivo gratuito e MCP. Leia o rig e a animação do contexto antes de criar poses. Use os nomes de partes articuladas reais, nunca uma lista inventada de R6/R15.

## Fluxo gratuito no editor

1. O aluno abre o personagem no editor e clica em **IA gratuita**, na barra superior.
2. **Copiar para IA** ou **Baixar arquivo** entrega um contexto identificado por projeto e data com juntas, pivôs, rascunho, ferramentas, limites e skills completas.
3. Leia target.editableParts, target.joints, currentAnimation e animationRules. Siga [o formato JSON](references/formato-json.md) e [o planejamento do movimento](references/animar-passo-a-passo.md).
4. Entregue um arquivo baixável **levelup-animacao.json** seguindo responseExample e explique poses, duração e loop. Não substitua por Luau, vídeo ou descrição.
5. O aluno usa **Importar animação JSON**, revisa e clica em **Carregar na linha do tempo**. Os losangos ficam editáveis. Ele confere com Tocar e usa Salvar.

A importação cria uma nova animação não salva, preservando a anterior salva. O rascunho aberto é substituído depois da revisão e pode ser recuperado com Desfazer. Mudanças na estrutura do personagem (partes, dimensões e juntas) exigem novo contexto; reabrir o editor ou mudar o rascunho não invalida o arquivo. alterações em outra parte do mapa não invalidam esse arquivo específico de animação. Um AnimData independente compatível também pode ser importado, com revisão de compatibilidade.

## Contrato para qualquer assistente

ChatGPT, Gemini, Claude e outros assistentes usam o mesmo JSON, sem APIs particulares. Siga assistantGuide e responseExample, que aparecem antes das referências longas no contexto. Leia [o roteiro curto de entrega](references/entrega-qualquer-assistente.md) antes de responder. O importador reconhece alguns envelopes alternativos, mas isso não é motivo para devolver o contexto antigo ou ignorar as restrições do pedido.

## MCP

Use levelup_context e animation_draft para editar o rascunho aberto, respeitando as permissões. animation salva uma KeyframeSequence no rig. publish=true gera ID local ao mapa, não um asset oficial da Roblox. Não sobrescreva outras animações pelo nome; use o ID correto do contexto. No MCP, leia as referências desta skill por levelup_skills(name="levelup-animacao", reference="references/formato-json.md").

## Regras de poses e ferramentas

r é rotação local da junta em graus, Euler XYZ, de -360 a 360 por eixo. p é deslocamento local em studs, de -50 a 50. Isso difere da Orientation YXZ de peças do mapa. Part1 = Part0 * C0 * Transform * inverse(C1). Preserve Motor6D e pivôs; não mova o corpo inteiro para simular o giro de um braço.

As ferramentas reais são Girar, Mover, adicionar/editar/mover/apagar quadros, copiar pose, easing, duração, loop, prioridade, Tocar, Desfazer e Salvar. O JSON representa seus resultados na linha do tempo. Não afirme ter executado uma prévia se apenas calculou os quadros.

Tempos únicos e crescentes entre 0 e 30 segundos; até 2000 quadros ao todo. A duração nunca termina antes do último quadro. Use os easings e prioridades declarados no contexto. Feche loops com poses inicial/final compatíveis e revise apoio dos pés, limites articulares e colisões visuais.

Não aplique CSG em partes de rig articulado. Se o pedido incluir cenário ou acessório modelado, use também levelup-modelagem e preserve juntas. Confira organização e custo com levelup-organizacao-otimizacao.

Se o contexto fornecer files.response, use esse nome ao entregar o JSON. Ele identifica projeto, conteúdo e data; os nomes genéricos acima servem apenas como exemplo do formato.

## Rigs em jogo

O jogador local R15 tem Animate padrão em Jogar: parado, caminhada/corrida, salto, queda e escalada com dados locais na prioridade Core. Para golpes e outras ações, publicar no mapa e tocar uma faixa Action com fade; ao parar, Core volta a aparecer. Um LocalScript chamado Animate em StarterCharacterScripts substitui o padrão. NPCs/R6 não ganham esse controlador R15 automaticamente. AdjustWeight e as prioridades são descritos em levelup-scripts/references/animate.md, disponível nos contextos MCP e gratuito. Não prometer reprodução de IDs arbitrários do catálogo Roblox nem marcadores de quadros.

O rig novo tem Motor6D, peças desancoradas e colisão apenas na HumanoidRootPart. Ao criar NPC móvel, preservar as juntas e consultar levelup-scripts/references/npcs-movimento.md para MoveTo, HipHeight, LookVector e Velocity. R6 usa HipHeight=0; R15 padrão usa 2. Uma animação de passos não substitui o controlador de movimento, e MoveTo não cria automaticamente uma animação.


Novas animações publicadas são organizadas em ServerStorage > Animations; roupas em ServerStorage > Clothes. Não renomear nem mover automaticamente pastas de projetos antigos: seus scripts podem depender dos caminhos existentes. Para LocalScript, criar Animation com o ID publicado; não aguardar ServerStorage no cliente Roblox.
