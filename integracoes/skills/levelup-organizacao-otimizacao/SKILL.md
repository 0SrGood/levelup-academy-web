---
name: levelup-organizacao-otimizacao
description: Planejar e revisar o custo de cenários, modelos, scripts e animações no Studio Level Up para manter o jogo organizado e leve.
---

# Organização e otimização

Use junto das skills de criação quando a IA adicionar um cenário, muitos objetos ou comportamento repetido. Leia performanceContext no contexto atual antes de propor adições. Ele mede estrutura e bytes serializados, não FPS nem consumo real de GPU.

## Planejar o custo

- Escolha um orçamento de peças proporcional ao pedido e ao projeto existente. Faça um modelo representativo primeiro e estime a multiplicação antes de espalhar dezenas de cópias. Não use o limite de 6000 instâncias como meta de qualidade ou garantia de desempenho.
- Prefira silhuetas e formas legíveis com poucas primitivas. Uma árvore simples pode usar um tronco e poucas copas; evite folhas individuais, microdetalhes e fileiras excessivas de faixas que pouco aparecem no jogo.
- CSG serve a formas e recortes úteis. Uma união pode ter centenas de formas internas mesmo contando como uma única instância. Não una uma cidade inteira, não crie negativos ocultos sem função e evite cadeias profundas de uniões. Compare o total de folhas CSG antes e depois.
- Não adicione luz a cada detalhe. Use poucas luzes locais onde fizer diferença; evite muitas superfícies transparentes sobrepostas e sombras caras em pequenos enfeites.
- Não embuta cópias de malhas, texturas ou grandes dados em strings quando um asset já existente atende ao pedido. Preserve referências e recursos do projeto.

## Física, scripts e animações

- Peças estáticas do cenário devem ficar Anchored=true. CanCollide e CanTouch devem refletir a função: enfeites pequenos geralmente não precisam de colisão ou toque; pisos, paredes e obstáculos precisam de colisão coerente.
- Prefira um controlador por sistema a um loop por objeto. Use eventos e intervalos adequados; evite ciclos sem espera, buscas completas de Workspace por quadro e conexões repetidas que nunca são removidas.
- Use os keyframes necessários para o movimento, sem duplicar a mesma pose a cada quadro. Não faça scripts recriarem geometria estática continuamente.

## Hierarquia e entrega

O objetivo é criar jogos completos e detalhados. Não reduzir pedidos a jogos pequenos nem remover detalhes úteis como primeira resposta a um gargalo. Usar as métricas para escolher recursos compartilhados, lotes, regiões, LOD e processamento assíncrono; não prometer capacidade ilimitada ou ausência de travamentos sem medir o cenário e o aparelho.

Agrupe partes de cada casa, poste ou árvore em Models com nomes claros. Separe cenário, objetos interativos, personagens e interface por função. Preserve o que já existe e não duplique um cenário inteiro para corrigir um detalhe. Model/Folder organiza, mas sozinho não reduz custo de renderização.

Antes de entregar, revise quantidade de instâncias e partes, corpos dinâmicos, luzes, folhas e profundidade de CSG, scripts e bytes serializados. Explique as escolhas de otimização no resumo sem prometer FPS não medidos. Para projetos grandes, entregue etapas úteis e testáveis, começando por uma base leve; acrescente detalhes após conferir a navegação e Jogar.

## NPCs e aparelhos com pouca memória

NPC móvel é uma montagem desancorada conectada por Motor6D, não cenário estático nem partes com loops de física separados. O runtime mantém um controlador por rig e reaproveita a lista de membros até a hierarquia mudar. Criar poucos NPCs e medir antes de multiplicar. Usar MoveToFinished para sequenciar destinos; não gerar Heartbeat por membro, IA de perseguição sem espera, texturas grandes duplicadas ou recarga de página para recuperar uma queda de FPS. Limpar conexões, tweens e faixas que não são mais usados. Testes automatizados de memória não substituem teste real no Safari/iOS.

## Lighting e pós-processamento

Comece por hora, cores e exposição, com poucas luzes. Um efeito habilitado por classe; não criar duplicatas ou alternar Enabled por quadro. No Leve/celular não há cadeia de pós-processamento: preserve parâmetros e respeite qualidade local. Shadows/reflexos/efeitos não devem ser forçados por PrioritizeLightingQuality. Os limites e exemplos estão em levelup-scripts/references/lighting.md, incluídos no contexto completo e no contexto enxuto de iluminação. Não afirmar ausência de recarga no iPhone com base em testes Node ou contagens de objetos.

## Recursos compartilhados e uniões

CSG agora é calculado por um Worker serial e cancelável. O resultado é uma geometria final; os operandos ficam como dados editáveis, não como milhares de objetos renderizados ocultos. Cópias com a mesma geometria CSG compartilham o resultado e só liberam o recurso quando não houver usuários. Alterar a forma invalida aquele resultado. Não recriar a mesma união a cada equipar, quadro ou movimento. O limite de tempo de uma operação protege a interface; não é um limite do tamanho do jogo.

No modo Jogar, peças estáticas opacas com geometria/material compatíveis são agrupadas internamente em lotes por células. Continuam objetos independentes para scripts, colisão, hierarquia e exportação. Uma alteração por script retira a peça do lote; Stop devolve a edição normal. Não agrupar manualmente NPCs/Tools em uniões para tentar obter esse efeito.

Conferir Exibir → Monitor: draw calls/triângulos do último passe, geometrias, texturas, uniões versus formas compartilhadas, objetos em lotes e memória do Luau. CPU de envio não mede GPU; memória linear WASM não é RAM total. Ainda não há streaming completo de recursos distantes: não afirmar que uma região é descarregada só porque ficou fora da câmera.
