# Tutorial: casinha de pássaro com suporte, entrada e telhado

Consulte casinha-passaros em receitas-avancadas.json. O objetivo é substituir o aspecto de um bloco numa haste por um objeto com entrada, volume interno, apoio e cobertura.

1. Suporte vertical em Cylinder, comprimento 3.5 e diâmetro 0.35, centro Y=1.75. Use rotação Z=90 para ficar em pé.
2. Corpo de madeira de 2.4 x 3 x 2 studs, centro Y=5, apoiado em Y=3.5 no topo da haste. Dois planos negativos inclinados em Z=+25 e -25 graus esculpem o frontão sob a cobertura; a crista do corpo fica em Y=6.42. É um volume positivo de construção, não o acabamento final.
3. Interior: negativo Block menor preserva espessura em volta. Como fica fechado, precisa comunicar com a entrada para ter função visual.
4. Entrada frontal: Cylinder de diâmetro 0.75, comprimento 1.4 no eixo Z. O comprimento é local X; Orientation=[0,90,0] gira esse eixo para Z. Ajuste o sinal para as extremidades desejadas; o cilindro atravessa a face frontal e alcança a cavidade.
5. Negue interior e entrada com a mesma Color da madeira e una ao corpo. UsePartColor=true nesse componente para não deixar a abertura com cor de cortador.
6. Telhado de duas águas: duas placas inclinadas em Z, esquerda positiva e direita negativa. Para comprimento L e ângulo theta, os centros ficam em cx +/- L*cos(theta)/2. Faça a cumeeira encontrar em cima, com beiral fora das paredes.
7. Modele o conjunto de telhado em união própria. A cor da cobertura é independente da madeira do corpo. Acrescente poleiro cilíndrico frontal com contato real abaixo da entrada.
8. Confira o caminho da entrada até a cavidade, o apoio do corpo na haste, os sinais do telhado e a escala em relação ao jogador. A madeira não deve virar uma caixa maciça, e o telhado não deve formar uma calha invertida.
