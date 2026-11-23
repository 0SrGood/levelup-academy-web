# Árvore: tronco e copa modelados

Objetivo: uma árvore estilizada com tronco ramificado e copa composta, não apenas um cilindro e uma esfera independentes. Consulte `arvore-csg` em receitas.json.

1. Crie um Model de árvore. Planeje duas formas finais: tronco/galhos e copa. Essa separação permite trocar cor ou ajustar o tamanho sem separar toda a árvore.
2. Crie o tronco vertical com Cylinder, Size=[5.2,0.65,0.65], Orientation=[0,0,90], centro=[0,2.6,0]. O eixo comprido é X local; não coloque a altura em Size.Y.
3. Acrescente dois galhos curtos usando cilindros mais finos, inclinados para lados opostos. As extremidades internas precisam entrar no tronco, e as externas na copa.
4. Use `union` para compor o tronco ramificado. Não confundir essa operação com apenas renomear ou agrupar os três cilindros.
5. Crie três volumes Ball de tamanhos diferentes e posições sobrepostas para a copa. Ball é sempre esférica; não tente obter um elipsoide aumentando somente Size.Y.
6. Para uma copa aparada de estilo low poly, crie um cortador Block abaixo da linha de poda, largo o bastante para atravessar a copa inteira. Na receita, o topo do cortador fica em Y=4.7.
7. Use `negate` no cortador e depois `union` nas três copas positivas e no cortador. O corte inferior deve ser visível na geometria final; o negativo não deve permanecer como objeto solto.
8. Mantenha as duas UnionOperations dentro do Model: tronco e copa. O tronco entra um pouco na copa, evitando um vão.
9. Confira base no chão, silhueta, galhos encaixados e ausência de cortadores soltos. Se o estilo pedido não tiver copa aparada, componha a copa sem esse corte; não invente um negativo sem finalidade.
10. Só depois replique a árvore no cenário. Varie escala e inclinação com moderação, evite detalhar folha por folha e acompanhe folhas CSG/complexidade. Uma união pode ser cara mesmo aparecendo como uma única instância.

Essa é uma modelagem estilizada, não uma malha orgânica esculpida. Não afirmar criar um MeshPart quando só foram usados sólidos CSG. O exemplo fica na origem; posicione todos os seus volumes coerentemente quando adaptar ao mapa.

Cor de acabamento: os negativos da receita têm a cor do componente que recortam. As uniões uniformes recebem update com UsePartColor=true e Color final. Numa união externa com vários componentes de cores diferentes, mantenha UsePartColor=false para preservar a paleta.
