# Simulador colorido e botões táteis

Referência de gênero: coleção, progressão e roubo/defesa de base, como Steal a Brainrot. Proposta original; não copiar arte, marcas, personagens ou layout exato.

1. Crie SimHUD com TopResources, SideActions, BottomActions, ShopPanel e Toast. ShopPanel começa Visible=false; não cubra o centro usado para jogar.
2. Use base azul-escura [22,31,54], ação azul [0,132,255], progresso verde [0,180,98], destaque amarelo [255,195,34] e erro vermelho [235,55,78]. A mesma ação conserva a cor nas telas seguintes.
3. Monte uma faixa compacta de recursos no topo, com símbolo, nome da moeda e valor. Separe moedas diferentes em grupos; número grande não substitui a legenda.
4. Faça até quatro ações laterais: Loja, Coleção, Melhorias e Configurações. Use fonte FredokaOne no título e Gotham nos valores; contorno escuro fino ajuda sobre o cenário.
5. Construa cada botão com sombra sólida de 3 px, superfície colorida e rótulo curto. A receita JSON mostra como fazer isso sem uma imagem de botão pronta.
6. Na loja, monte duas ou três linhas de poucos itens. Cada item contém imagem/símbolo, nome, benefício e preço. Use paginação; não crie 200 cartas escondidas na abertura.
7. Mostre saldo insuficiente com texto e botão desativado visualmente. Recompensa recebida gera uma mensagem curta; evite uma explosão de partículas de GUI contínua.
8. Conecte abertura/fechamento e seleção com LocalScript se permitido. A compra deve chamar um sistema real existente; não simule gasto como se fosse uma transação concluída.
9. No celular, mantenha no máximo três a cinco ações visíveis conforme a largura; deixe loja e coleção como painéis por página. Evite a região do joystick e salto.
10. Revise se a moeda é legível sobre fundo claro e escuro, se o botão responde ao toque e se a loja fecha sem bloquear o movimento.

Meta inicial: HUD com cerca de 20–35 objetos GUI e loja carregada com poucos itens por página. Não animação de brilho em cada objeto; reduza sombra a um Frame por botão importante.
