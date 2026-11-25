# Roleplay limpo e menus funcionais

Referência de experiência: Brookhaven. O objetivo é deixar a cidade e o avatar visíveis enquanto menus dão acesso a atividades.

1. Crie RoleplayHUD com QuickActions, ContextPanel, Notice e Settings oculto. Não coloque um painel permanente no meio da tela.
2. Use superfícies claras [235,239,244] ou grafite [36,41,49], azul [60,144,225] para seleção e vermelho [216,68,76] para sair/remover. Escolha um tema coerente, não alterne claro/escuro em cada botão.
3. Monte uma coluna curta de ações como Casa, Veículos, Mochila e Emotes. Cada botão usa símbolo simples e legenda; mostre subopções só ao abrir a função.
4. Use Gotham/Roboto, texto de 16–20 px e títulos moderados. Remova bordas decorativas que não ajudam a localizar a ação.
5. Construa uma janela reutilizável com título à esquerda e X à direita. O conteúdo interno muda conforme o menu; evite abrir três janelas cobrindo umas às outras.
6. Para veículos/casas, use listas ou poucas miniaturas por página, com detalhes e ação selecionada. Não invente assets de veículo ou compra real quando o mapa não oferece esses sistemas.
7. Estado selecionado combina fundo cinza, ícone colorido e texto; confirmação de remover usa ação vermelha e uma frase específica sobre o que será afetado.
8. Monte feedback discreto no topo: Veículo selecionado ou Item indisponível. Não transforme toda seleção em um popup de tela inteira.
9. No celular, use painel inferior por função, botões com alvo de toque e categorias por páginas. Preserve o espaço do personagem e controles de movimento.
10. Teste alternância rápida entre menus, fechar pelo X e retorno ao jogo. Abrir uma segunda função deve fechar ou substituir a primeira de modo previsível.

Meta: reutilizar um painel e uma coleção pequena de botões. Organização em Frames não equivale a duplicar interfaces inteiras para cada opção.
