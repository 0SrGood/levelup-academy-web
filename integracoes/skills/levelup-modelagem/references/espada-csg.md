# Espada: modelar a lâmina com negativos

Objetivo: criar uma espada com ponta trabalhada, guarda, empunhadura e pomo, em vez de apresentar uma pilha de blocos. Consulte a entrada `espada-csg` em receitas.json. O exemplo é um modelo estático, não uma Tool já equipada.

1. Crie um Model para organizar o objeto. Ele é apenas o contêiner; a modelagem ocorrerá nas operações seguintes.
2. Crie o volume positivo da lâmina: Block, Size=[1.8,7,0.35], centro=[0,6.3,0]. A base fica em Y=2.8 e a ponta planejada em Y=9.8.
3. A ponta requer remover os dois cantos superiores. Crie dois cortadores Block de Size=[4,4,1], atravessando toda a espessura da lâmina. Não use cortador mais fino que a peça.
4. O cortador esquerdo usa Orientation.Z=+45° e centro=[-sqrt(2),9.8+sqrt(2),0]. O direito usa -45° e centro simétrico no X. As faces internas se encontram na ponta; conferir por transformação dos planos, sem inverter os sinais.
5. Envie `{op:"negate",ids:[refEsquerdo,refDireito]}`. Isso cria negativos; ainda não são recortes visíveis na lâmina.
6. Envie `{op:"union",ref:"lamina",ids:[refPositivo,refEsquerdo,refDireito],name:"Lâmina com ponta modelada"}`. Os três objetos de entrada são consumidos. A nova referência `lamina` é a forma recortada.
7. Faça a guarda transversal, empunhadura cilíndrica e pomo. Empunhadura vertical: Size=[2.4,0.5,0.5], Orientation=[0,0,90]. Verifique contato entre as partes, sem peças flutuantes.
8. Una lâmina, guarda, empunhadura e pomo na versão estática. Mantenha materiais/cores legíveis e confira que há ao menos um sólido positivo.
9. Verifique a geometria final: lâmina longa e fina, ponta estreita em cima, guarda mais larga que a empunhadura, recortes efetivamente aplicados e nenhum cortador solto.
10. Para uma espada equipável, adapte o resultado a uma Tool com Handle e soldas suportadas; não prometa funcionamento de Tool para o exemplo estático. Pode manter grupos de forma separados quando a editabilidade do pedido exigir.

A receita é construída na origem para servir de protótipo. Para posicioná-la em outro ponto, desloque todas as posições de volumes e cortadores pelo mesmo vetor antes de executar a união. Não aplique Position ao Model: ele não é uma BasePart.

Cor de acabamento: os negativos da receita têm a cor do componente que recortam. As uniões uniformes recebem update com UsePartColor=true e Color final. Numa união externa com vários componentes de cores diferentes, mantenha UsePartColor=false para preservar a paleta.
