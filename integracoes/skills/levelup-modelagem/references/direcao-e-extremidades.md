# Direção dos galhos: conferir pontos, não adivinhar ângulos

Para galhos, troncos, postes e tubos retos, prefira a operação **cylinder_between**. Você informa de onde a peça sai e onde termina; o Studio calcula centro, comprimento e rotação no eixo X local do Cylinder. A peça continua sendo uma Part editável e pode participar de negate/union.

```json
{"op":"cylinder_between","ref":"galho_esquerdo","name":"Galho esquerdo para cima","parent":"Workspace","from":[0,3,0],"to":[-2,5,0],"diameter":0.45,"props":{"Anchored":true,"CanCollide":true,"Color":[104,67,40],"Material":"Wood"}}
```

O galho direito pode usar from=[0,3,0], to=[2,5,0]. **Nos dois lados a ponta sobe de Y=3 para Y=5**. O sinal de X muda porque os lados são opostos; a subida em Y continua positiva. Não copiar o mesmo ângulo Euler para os dois lados.

1. Escolha from dentro do tronco e to dentro da copa. Se o pedido é “galhos para cima”, confira `to.Y > from.Y` antes de gerar o arquivo.
2. Comprimento = distância entre os pontos, centro = (from+to)/2. O vetor é `to-from`, nunca `from-to` por engano.
3. Cylinder cresce no X local. Não usar CFrame.lookAt diretamente como Orientation: lookAt aponta seu -Z, não o X do cilindro.
4. Em cylinder_between, não repetir Position, Size, Shape ou Orientation dentro de props: a direção é calculada pelas extremidades. As outras propriedades, como cor e material, continuam em props.
5. Use refs distintas. Depois, una tronco e galhos conforme a receita de modelagem. Se estiver usando cortadores, planeje também suas extremidades/direções antes de negar.
6. Confira um exemplar antes de repetir. Galho positivo = sólido que fica; cortador negativo = volume removido. Não “corrigir” uma direção invertendo todos os negativos ou todo o Model indiscriminadamente.

Se usar create/update manualmente, transforme **as duas pontas locais** ±[comprimento/2,0,0] pela rotação YXZ e some Position. A ponta externa precisa estar acima da conexão com o tronco e dentro da copa. Um cilindro é simétrico: saber somente que um dos extremos está alto não identifica qual extremo está preso ao tronco.

O Studio não pode inferir intenção artística só pelo nome do objeto. Não inverter automaticamente qualquer galho descendente: árvores choronas e outros objetos podem exigir isso. Expresse a intenção em from/to e confira a geometria antes de unir. Pontos coincidentes ou separados por menos de 0.05 stud são recusados; dimensões positivas abaixo do mínimo seguem a regra de revisão do importador.
