---
name: levelup-organizacao-otimizacao
description: Planejar e revisar o custo de cenários, modelos, scripts e animações no Studio Level Up para manter o jogo organizado e leve.
---

# Organização e otimização

Use junto das skills de criação quando a IA adicionar um cenário, muitos objetos ou comportamento repetido. Leia performanceContext no contexto atual antes de propor adições. Ele mede estrutura e bytes serializados, não FPS nem consumo real de GPU.

## Planejar o custo

- Escolha um orçamento de peças proporcional ao pedido e ao projeto existente. Faça um modelo representativo primeiro e estime a multiplicação antes de espalhar dezenas de cópias. O orçamento de 6000 novas instâncias vale por proposta da IA, não é um limite total do projeto nem garantia de desempenho. Projetos existentes maiores devem permanecer íntegros e editáveis.
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

## Recursos e perfis do motor

Uniões iguais compartilham geometria; operandos editáveis continuam como dados, não como cópias renderizadas. CSG executa em Worker cancelável. Em Jogar, peças estáticas compatíveis podem usar instancing por célula; scripts, Tools e personagens conservam sua identidade. Colisões estáticas usam índice espacial: não substituir colisores detalhados por uma cidade de corpos dinâmicos.

Os perfis Econômico, Equilibrado, Alto e Ultra alteram resolução, limite de apresentações e distância de residência gráfica; Auto usa medições com histerese. Objetos estáticos distantes saem do desenho e buffers de geometria sem usuário próximo podem ser descartados da GPU e reenviados na aproximação. O índice por células evita percorrer todos os objetos distantes. Geometrias, matrizes de lotes e texturas estáticas sem usuário próximo podem liberar seus recursos GPU; a aproximação restaura o desenho em lotes limitados por quadro, com orçamento estimado de bytes. Texturas compartilhadas com personagens, outros objetos fora do streaming, vídeo e render targets são protegidas. Os dados CPU, imagens de origem, scripts, hierarquia e colisores permanecem. Isso não descarrega imagens decodificadas da RAM nem faz streaming de arquivos pela rede. Um recurso maior que o orçamento pode entrar sozinho para não bloquear a fila. Esferas e cilindros primitivos estáticos podem usar menos segmentos quando seu tamanho angular fica pequeno; aproximar ou parar restaura a geometria original. Ultra desabilita esse LOD. Uniões e malhas detalhadas não são simplificadas por esse mecanismo. Não afirmar streaming completo de rede, LOD automático de CSG/MeshPart, física distante desligada nem redução de memória total sem medir. A edição e exportação preservam o detalhe original.

Arquivos de IA só aditivos podem ser aplicados sobre o mapa atual. Para editar itens existentes, o Studio compara campos com uma base local de exportação (até quatro bases, orçamento estimado de 4 MiB e validade de sete dias no armazenamento). Mudanças em outros campos são preservadas; conflito no mesmo campo bloqueia a proposta inteira. A revisão ainda exige que o mapa não mude antes de Aplicar. Não remover o fingerprint nem dizer que já aplicou antes da confirmação do Studio.

## CSG persistido e diagnóstico por forma

O resultado CSG v2 inclui dados de renderização indexados e BVH de colisão pré-processado. Reabrir, iniciar/parar Play, clonar ou mover uma união válida reutiliza os dados; mudar os operandos recalcula a forma. Os arquivos antigos são migrados sob demanda, sem apagar os operandos, sem mudar a versão do projeto v1 e sem criar uma ação no Undo. Cache ausente, corrompido ou de versão diferente tem fallback de reconstrução. O cache CPU aquecido tem orçamento de 16 MiB; os dados salvos na place permanecem disponíveis independentemente dessa retenção temporária.

Conferir contadores de hits em memória, restaurações persistidas, submissões, falhas/cancelamentos e CPU no Worker. Triângulos e regiões vazadas precisam ser conferidos; união única não garante custo baixo. Os controles de física usam a superfície final com BVH, preservando vazios. Não selecionar Box/Hull numa peça vazada se o jogador precisa atravessar a abertura. O motor não cria Parts extras para representar os nós do BVH.

Buffers geométricos, formas compartilhadas e CPU medida não substituem RAM total, FPS em aparelho real ou medição de GPU. Não confundir melhoria de releitura de CSG com melhoria equivalente de FPS do jogo. Não afirmar decomposição convexa dinâmica nativa ou solver de corpo rígido equivalente ao Roblox.
