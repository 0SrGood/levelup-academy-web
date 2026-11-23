---
name: levelup-animacao
description: Criar animações R6 e R15 editáveis no Studio Level Up por arquivo JSON gratuito ou MCP, com poses, juntas e quadros reais.
---

# Animação no Studio Level Up

Funciona nos dois fluxos: arquivo gratuito e MCP. Leia o rig e a animação do contexto antes de criar poses. Use os nomes de partes articuladas reais, nunca uma lista inventada de R6/R15.

## Fluxo gratuito no editor

1. O aluno abre o personagem no editor e clica em **IA gratuita**, na barra superior.
2. **Exportar personagem para IA** gera levelup-contexto-animacao.json com juntas, pivôs, rascunho, ferramentas, limites e skills completas.
3. Leia target.editableParts, target.joints, currentAnimation e animationRules. Siga [o formato JSON](references/formato-json.md) e [o planejamento do movimento](references/animar-passo-a-passo.md).
4. Entregue um arquivo baixável **levelup-animacao.json** seguindo responseExample e explique poses, duração e loop. Não substitua por Luau, vídeo ou descrição.
5. O aluno usa **Importar animação JSON**, revisa e clica em **Carregar na linha do tempo**. Os losangos ficam editáveis. Ele confere com Tocar e usa Salvar.

A importação cria uma nova animação não salva, preservando a anterior salva. O rascunho aberto é substituído depois da revisão e pode ser recuperado com Desfazer. Mudanças no personagem ou no rascunho após a exportação exigem novo contexto; alterações em outra parte do mapa não invalidam esse arquivo específico de animação. Um AnimData independente compatível também pode ser importado, com revisão de compatibilidade.

## MCP

Use levelup_context e animation_draft para editar o rascunho aberto, respeitando as permissões. animation salva uma KeyframeSequence no rig. publish=true gera ID local ao mapa, não um asset oficial da Roblox. Não sobrescreva outras animações pelo nome; use o ID correto do contexto. No MCP, leia as referências desta skill por levelup_skills(name="levelup-animacao", reference="references/formato-json.md").

## Regras de poses e ferramentas

r é rotação local da junta em graus, Euler XYZ, de -360 a 360 por eixo. p é deslocamento local em studs, de -50 a 50. Isso difere da Orientation YXZ de peças do mapa. Part1 = Part0 * C0 * Transform * inverse(C1). Preserve Motor6D e pivôs; não mova o corpo inteiro para simular o giro de um braço.

As ferramentas reais são Girar, Mover, adicionar/editar/mover/apagar quadros, copiar pose, easing, duração, loop, prioridade, Tocar, Desfazer e Salvar. O JSON representa seus resultados na linha do tempo. Não afirme ter executado uma prévia se apenas calculou os quadros.

Tempos únicos e crescentes entre 0 e 30 segundos; até 2000 quadros ao todo. A duração nunca termina antes do último quadro. Use os easings e prioridades declarados no contexto. Feche loops com poses inicial/final compatíveis e revise apoio dos pés, limites articulares e colisões visuais.

Não aplique CSG em partes de rig articulado. Se o pedido incluir cenário ou acessório modelado, use também levelup-modelagem e preserve juntas. Confira organização e custo com levelup-organizacao-otimizacao.
