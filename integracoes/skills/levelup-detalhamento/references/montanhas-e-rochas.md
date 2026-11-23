# Tutorial: montanhas e rochas com planos coerentes

Consulte montanha-facetada em receitas-avancadas.json. O protótipo usa um corpo Block, cortes inclinados e um recorte lateral para produzir uma crista assimétrica; não é um triângulo gigante pintado de vermelho.

1. Comece com volume de 12 x 10 x 10 studs, centro=[0,5,0], base Y=0. Escolha Slate e uma cor de rocha.
2. O cortador esquerdo inclinado em +35 graus Z remove o volume acima de um plano que sobe para o centro; o direito em -30 graus remove o outro lado. Os centros são derivados dos planos e da meia-altura do cortador, não posicionados por tentativa aleatória.
3. Use mais dois planos no eixo X para quebrar a simetria frente/trás e dar volume em três quartos. Inclinações e alturas diferentes evitam um cone/pirâmide perfeitamente regular.
4. Use um negativo lateral menor para criar uma quebra localizada. Não atravesse o corpo inteiro nem apague sua base de apoio.
5. Os cortadores devem ter a mesma Color do corpo quando as novas faces precisam continuar cinzas. Negue todos e una com o positivo; depois UsePartColor=true nesse componente.
6. Confira que a base permanece larga, há planos em direções distintas, o volume final é menor que o bloco inicial e o ponto alto continua acima da base. Um corte não deve consumir a montanha inteira.
7. Para neve, modele uma capa própria alinhada aos planos superiores; mantenha-a separada ou use uma união externa com cores de faces intencionais. Não pinte toda a montanha de branco por uma flag global.
8. Para rochas pequenas, adapte escala uniforme, inclinação e número de planos conforme a câmera. Para montanhas repetidas, varie escala/rotação e o desenho de algumas cristas; não replique dezenas de sólidos excessivamente detalhados ao fundo.

## Plano de corte: cálculo reutilizável

Um Block cortador tem plano inferior local em Y=-H/2. Para um plano com rotação Z=theta e altura desejada h no ponto x=0, escolha centro local de referência [0,h,0] e desloque o centro do cortador H/2 na direção normal rotacionada: [-sin(theta)*H/2, h+cos(theta)*H/2, 0]. Assim a face inferior passa por [0,h,0]. A peça deve ser larga o bastante para cobrir a região a cortar.

Para rotação X=phi, a normal é [0,cos(phi),sin(phi)], logo o deslocamento é [0,cos(phi)*H/2,sin(phi)*H/2]. Trigonometria usa radianos; Orientation usa graus. Os cortes só definem a superfície onde encontram o positivo.
