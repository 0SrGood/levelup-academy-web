# RPG/anime com barras e habilidades

Referência de experiência: Blox Fruits. Releitura para combate, progressão e missões; não copiar ícones ou efeitos do jogo.

1. Crie RPGHUD com Status, QuestTracker, SkillTray, MenuButton e Inventory oculto. Reserve o centro para combate.
2. Use base [24,27,36], texto [240,239,232], vida verde [48,181,103], energia azul [48,137,235] e experiência dourada [235,179,54]. Vermelho significa dano ou falha.
3. Monte duas barras em Frames separados: fundo neutro, preenchimento com Size proporcional e texto Vida atual/máxima. A receita inclui uma barra com valor de exemplo; ligue ao Humanoid real antes de chamar de funcional.
4. Mostre nível e experiência em um grupo menor. Não faça todos os números terem o mesmo destaque da vida.
5. Use Oswald ou Bangers nos títulos curtos e Gotham no texto. Contornos finos e cantos pequenos mantêm o painel definido sem imitar papel/metal por dezenas de peças de GUI.
6. Construa até quatro habilidades por página. Cada uma precisa de nome, tecla quando houver teclado e estado disponível/em recarga. No celular, substitua a tecla por alvo de toque legível.
7. Faça o rastreador de missão com título, objetivo e progresso em três linhas. Objetivos longos quebram linha; missões extras ficam no menu.
8. Inventário usa categorias e poucas linhas paginadas. Selecione um item para abrir detalhes, em vez de mostrar todos os detalhes simultaneamente.
9. Conecte vida e energia a eventos reais; recarga usa tempo do sistema, não vários loops por ícone. Mantenha o botão de habilidades fora das áreas do joystick/salto.
10. Teste vida zero, valor máximo, missão longa, habilidade bloqueada e fechar inventário durante o movimento. Não deixe uma animação cosmética impedir a ação.

Meta: um controlador do HUD, barras e textos atualizados quando mudam, sem renderizar o inventário inteiro por frame.
