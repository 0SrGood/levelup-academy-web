# Violão: modelar o volume e depois equipar

## Referência de forma

O corpo tem dois bojos arredondados, cintura reentrante e espessura de caixa acústica. O tampo e o fundo são superfícies amplas, mas a lateral não é uma pilha de caixas. Braço tem escala plana na frente e dorso arredondado; a mão tem topo trabalhado, tarraxas laterais e transição para o braço. Modelar frente, lado e costas, não só a vista frontal.

## Corpo e caixa acústica

1. Use dois cilindros curtos orientados no eixo Z, com diâmetros diferentes e centros deslocados em Y para formar os bojos. Cylinder tem comprimento local X: para apontar a profundidade em Z, use Orientation=[0,90,0]. Não usar Ball achatada: ela continua esférica no Level Up.
2. Una os volumes positivos sobrepostos. Dois negativos cilíndricos laterais retiram parte dos bojos e definem a cintura. Seu diâmetro e centros devem produzir curvas contínuas; negativos grandes demais arrancam o corpo inteiro.
3. Para caixa acústica, remova volumes internos que preservem tampo, fundo e laterais. A abertura circular do tampo deve comunicar com a cavidade, sem um bloco preto tapando o recorte.
4. Declare a cor madeira do corpo nos cortadores. UsePartColor=true uniformiza o componente; o indicador visual de Negar não exige Color vermelha/branca. Não deixar recortes laterais brancos no violão.
5. Faça o tampo claro como camada fina modelada com a mesma silhueta e cintura; abra o furo circular correspondente. O fundo/laterais podem ser de madeira mais escura. Preserve cores por componente.
6. Uma roseta pode ser anel cilíndrico fino com interior negativo; mantenha o recorte vazio, não disco preto sólido. Aro, tampo e corpo devem se alinhar em profundidade.

## Braço, mão e detalhes

7. Use Cylinder no dorso do braço, com escala reta estreita na frente. Isso mantém a face funcional plana sem entregar um braço inteiro quadrado. Faça contato real com o bojo superior.
8. Modele mão com cantos chanfrados por negativos e tarraxas em eixos/botões arredondados, não cubos grandes para todas as ferragens. Evite que o topo fique mais largo que o corpo sem propósito.
9. Ponte e pestana têm seção pequena coerente; trabalhar contorno da ponte com cilindros/recortes. Fretes e cordas podem ser cilindros finos. Todas as dimensões respeitam >=0.05: não escrever cordas de 0.01 que o importador terá de corrigir.
10. Distribua seis cordas com espaçamento compatível com a largura da escala. Se a resolução do motor exige cordas muito grossas nessa escala, informe o compromisso ou aumente moderadamente o instrumento; não prometa escala física exata.
11. Revise comprimento do braço, espessura da caixa e alinhamento da entrada/cordas/ponte nas três vistas. Detalhes não consertam uma silhueta de caixa.
12. Só depois crie Handle na pega, soldas para todos os componentes finais, desancore e coloque a Tool em StarterPack. Teste equipado. A receita violao-tool.json é um protótipo de modelagem e pega, não inclui som nem animação de tocar.
