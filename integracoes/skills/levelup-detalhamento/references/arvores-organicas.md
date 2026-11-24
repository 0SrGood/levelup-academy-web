# Tutorial: árvore com copa orgânica e ramificação

Consulte arvore-organica em receitas-avancadas.json; a versão anterior de poda plana continua sendo uma opção para jardinagem geométrica, não a única árvore permitida.

1. Haste principal: Cylinder com comprimento X local; Size=[6,0.8,0.8], Orientation=[0,0,90], centro Y=3. A base toca Y=0.
2. Acrescente ramificações inclinadas com cilindros menores. Faça sobreposição real com o tronco e a copa. Una tronco/galhos em um componente marrom.
3. Componha a copa com três massas esféricas de diâmetros diferentes e centros assimétricos. Ball não estica para uma elipse: cada massa usa Size uniforme.
4. Trabalhe a silhueta com um ou dois cortadores menores nas laterais/inferior. Eles criam reentrâncias, sem perfurar a copa inteira. A cor dos cortadores deve ser a cor verde desejada nas faces do recorte.
5. Una massas e negativos; deixe a copa uniforme com UsePartColor=true. O tronco continua separado. Não una verde e marrom com uma flag uniforme na união externa.
6. Confira que os ramos chegam à copa, que a copa cobre parte das ramificações e que os negativos foram consumidos. Evite árvores formadas apenas por três blocos verdes em degraus.
7. Varie altura, inclinação discreta, posição das massas e distribuição de ramos; preserve coerência da espécie. Não espalhe folhas individuais por toda a árvore sem necessidade de câmera próxima.
8. Para árvore low-poly, use massas facetadas ou planos recortados com propósito. Não confunda low-poly com um cubo verde único. Para raízes e casca próximas à câmera, acrescente detalhes depois de validar o exemplar e seu custo.
