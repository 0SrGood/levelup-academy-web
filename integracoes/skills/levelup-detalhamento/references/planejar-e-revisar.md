# Do pedido ao asset acabado

## Ler a referência antes de contar peças

Descreva o objeto em termos de silhueta, seção e função: a árvore tem tronco cilíndrico e copa irregular; a montanha tem base larga, cristas e planos em várias direções; a lixeira tem boca, parede, tampa e volume interno; uma casinha tem suporte, entrada e cobertura. Uma pirâmide única, um cubo pintado ou um bloco com um furo podem ser apenas o começo do modelo.

Part também é o nome da classe usada nas primitivas: Cylinder e Ball continuam sendo Parts. O problema é entregar blocos sem forma, não o nome da classe. Construa volumes intermediários e aplique CSG real para obter o contorno pedido. Não invente malhas ou métodos indisponíveis.

## Planejamento que deve virar operações

1. Escolha dimensões relativas ao personagem e espaço disponível. Defina a base no chão e calcule centros.
2. Divida em componentes rígidos com materiais/comportamentos coerentes. Identifique o que será positivo, cortador ou peça separada.
3. Defina três níveis de leitura: silhueta à distância; encaixes e aberturas na distância de jogo; acabamento de perto.
4. Para cada recorte, escolha forma, centro, rotação, profundidade e cor das faces. Marque a ordem: create, negate, union, update de acabamento.
5. Faça um exemplar e confira a geometria antes de repetir pelo cenário. Não espalhe 30 cópias do mesmo erro.
6. Retorne todas as operações finais. Não substitua a construção por um script que só vai gerar o asset quando Jogar for iniciado.

## Três vistas e cinco perguntas

Frente: o contorno identifica o objeto? Perfil: a espessura é coerente? Três quartos: há profundidade e volume, em vez de um painel plano?

- Há apoio e contato entre as partes, sem peças flutuantes?
- As aberturas têm borda/espessura e o recorte retirou o volume certo?
- O topo está acima da base, com telhados/cristas na direção correta?
- Cores de positivos, negativos e UsePartColor produzem o acabamento desejado?
- Os componentes continuam editáveis e têm custo proporcional ao detalhe visível?

## O que evitar nos casos relatados

Montanhas vermelhas: revisar Color dos cortadores e a política UsePartColor; revisar também se a forma é só um triângulo repetido.
Árvore como caixa verde: modelar copa com massas sobrepostas, ramificações e recortes de silhueta; variar alturas/volumes.
Objeto numa haste quadrada: conferir se a referência pede seção circular e usar Cylinder no eixo correto; modelar transições.
Lixeira como caixa vazada simples: trabalhar corpo, borda, entrada e tampa; garantir volume interno e dimensões utilizáveis.

O aluno pode pedir estilo low-poly. Low-poly significa planos deliberados e silhueta forte, não ausência de acabamento. Não alegue prévia visual quando houve apenas conferência matemática.
