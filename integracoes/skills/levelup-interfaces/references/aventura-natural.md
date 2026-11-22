# Aventura natural, diário e coleção

Referência de experiência: Fisch. A proposta associa descoberta, inventário e diário, sem copiar seu HUD ou suas artes.

1. Crie AdventureHUD com Resources, Location, ToolTray, Journal e Collection ocultos. Preserve a paisagem e a área de interação.
2. Use azul-marinho [29,49,63], papel [232,223,196], verde-musgo [91,118,76] e dourado [209,166,80]. Cor de raridade precisa vir acompanhada de nome ou marcador.
3. Mostre localização e recurso principal de forma compacta. Dados secundários aparecem ao abrir diário; não mantenha todos os números visíveis o tempo inteiro.
4. Monte uma bandeja curta de ferramentas com seleção nítida e nome. Se o jogo não possui sistema de ferramenta, não entregue slots como se já equipassem objetos.
5. Faça o diário como painel de papel simples com cabeçalho, categorias e uma área de conteúdo. Use duas colunas apenas quando houver largura; no celular, lista primeiro e detalhes depois.
6. A coleção usa poucas linhas paginadas, cada uma com nome, estado descoberto/não descoberto e dados relevantes. Evite criar uma imagem ou Frame extra para cada detalhe ornamental de página.
7. Para descoberta, mostre uma notificação curta com nome e progresso. Não exiba uma animação de tela inteira para toda ação repetida.
8. Use SourceSans/Gotham para leitura e Oswald em títulos. Borda fina ou duas linhas decorativas sugerem diário sem depender de uma textura pesada de papel.
9. No celular, o diário fica em painel central de largura relativa e ações abaixo dos detalhes. A bandeja de ferramentas não pode bloquear navegação nem interação com a água/cenário.
10. Teste coleção vazia, item desconhecido, nomes longos, troca de ferramenta e reabrir a página anterior. Preserve a seleção do usuário ao voltar de detalhes.

Meta: renderizar a página atual do diário e poucos itens. Não manter centenas de páginas GUI ocultas para uma coleção grande.
