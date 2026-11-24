# Tutoriais: lixeira, poste e luminária

## Lixeira redonda modelada

Consulte lixeira-redonda em receitas-avancadas.json.

1. O corpo é um Cylinder vertical de 2.8 studs de altura e diâmetro 1.8. Centro em Y=1.4 e Orientation.Z=90.
2. Um Cylinder menor, diâmetro 1.45, começa acima do fundo e ultrapassa o topo: negativo cria o interior oco sem apagar a base. Calcule seus extremos antes de unir.
3. Uma abertura lateral Block atravessa a parede superior, mas preserva uma borda em volta. Faça os dois negativos com a cor do corpo, não vermelho de depuração.
4. Aplique negate e union. UsePartColor=true deixa exterior e faces do recorte uniformes; se o pedido quiser o interior mais escuro, use política de face explícita conforme cores-recortes.md.
5. A tampa é um disco cilíndrico separado com encaixe e ligeiro beiral. A estrutura termina com corpo vazado e tampa, não um cubo com quadrado preto desenhado.
6. Confira fundo, espessura das paredes, altura da abertura, posição da tampa e apoio no chão. Não inserir um cilindro preto sólido no interior que obstrua o espaço recém-escavado.

## Poste com luminária

Consulte luminaria-csg.json e acabamento.md.

1. Base em disco, haste e colar em cilindros. Oriente o comprimento X para o eixo Y do mundo. O comprimento não pertence ao Size.Y de um Cylinder sem rotação.
2. Para braço reto, cilindro no eixo X. Para braço curvo, poucos segmentos inclinados com sobreposição e junções arredondadas; unir o suporte mantém uma peça rígida editável.
3. Modele carcaça com cantos chanfrados por quatro negativos e um alojamento inferior por um quinto negativo. Todos recebem a cor de corte planejada.
4. UsePartColor=true apenas na carcaça metálica. Mantenha lente e emissão separadas: cor de face não é vidro nem uma luz real.
5. PointLight pertence à lente e usa propriedades do contexto. Não invente Shadows no JSON se propertyDefinitions não o disponibiliza. Muitas luminárias decorativas podem compartilhar uma iluminação de cena mais econômica.
6. Verifique a união do suporte com a carcaça, o encaixe da lente e a ausência de cor de cortador indesejada nos chanfros.

## Variação de mobiliário

Para banco, use assento/encosto com contornos, bordas e suportes coerentes; Parts retangulares podem ser componentes, mas trabalhe cantos e apoios se a referência pedir. Para placa, poste circular e chapa com espessura são adequados. Não force CSG sem efeito geométrico; aplique recortes quando mudarem de fato a forma.
