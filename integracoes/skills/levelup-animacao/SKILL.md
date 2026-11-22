---
name: levelup-animacao
description: Criar e editar animações R6 e R15 no editor do Studio Level Up, preservando juntas e quadros ainda não salvos.
---

# Animação no Studio Level Up

Leia o contexto atual e identifique o rig, partes articuladas reais e animação aberta. Trabalhe no rascunho usando `animation_draft` quando o usuário quiser editar o que está aberto; não substitua sem necessidade a animação por outra salva.

`data.keys` usa os nomes das partes articuladas presentes no rig. Cada quadro tem tempo `t`, rotação `r` em graus, deslocamento opcional `p` e easing aceito pelo contexto. Tempos únicos e crescentes, de 0 a 30 segundos; respeite MAX_KEYS do contrato. A duração não pode terminar antes do último quadro; a reprodução vai até o último keyframe.

Construa poses neutra, antecipação, ação e retorno quando o movimento pedir isso. Loop precisa de transição coerente entre fim e início. Não aplique CSG a partes do personagem articulado. Modele cenários e acessórios com a skill de modelagem quando forem parte do pedido, preservando Motor6D.

`animation` salva uma KeyframeSequence no rig. `publish=true` gera ou reutiliza um ID **local ao mapa**; não cria um asset oficial na Roblox. Informe essa distinção quando entregar um ID. Não sobrescreva outras animações pelo nome; use o ID correto do contexto.

Devolva proposta ou arquivo com explicação dos quadros alterados, duração, loop e como conferir a prévia. Respeite as permissões de animação da sessão MCP.
