---
name: levelup-modelagem
description: Modelar cenários e objetos no Studio Level Up usando primitivas, cilindros e CSG por MCP ou arquivo de alterações.
---

# Modelagem no Studio Level Up

Use quando o pedido envolver construir ou alterar formas, móveis, prédios, natureza ou cenários no Laboratório. Sempre que possível, modele o objeto solicitado; não entregue apenas animação, uma descrição ou um script que só criará as peças depois.

Leia `levelup_context` no MCP ou o contexto JSON exportado. Consulte operações, propertyDefinitions, geometryRules, permissões e IDs atuais. O arquivo gratuito usa as mesmas operações do MCP, sem executar ferramentas na conversa da IA.

## Cilindros e proporções

- Cylinder tem comprimento no eixo **X local**. `Size=[comprimento,diametro,diametro]`; o motor usa o menor valor entre Y e Z para o diâmetro.
- Tronco vertical de 6 studs: `Shape="Cylinder"`, `Size=[6,1.5,1.5]`, `Orientation=[0,0,90]`.
- Poste vertical de 10 studs: `Size=[10,0.55,0.55]`, `Orientation=[0,0,90]`. Não use `[0.55,10,0.55]` sem rotação: isso produz um cilindro curto e deitado.
- Disco horizontal: `Size=[0.2,6,6]`, `Orientation=[0,0,90]`. O primeiro valor é a espessura, não o diâmetro.
- Position é o centro. Base no chão Y=0 e altura H exige centro em Y=H/2. Copa e luminária devem encontrar o topo do suporte; não deixar peças flutuando.
- Ball permanece esférica; Size não cria um elipsoide. Modele copas com esferas proporcionais ou composição de peças.

## Rotação e verificação espacial antes da entrega

- Orientation=[X,Y,Z] usa **graus**, não radianos. O Studio compõe R=Ry*Rx*Rz (ordem YXZ); para transformar um ponto local, a rotação em Z atua primeiro, depois X e depois Y. Não somar ângulos Euler de rotações arbitrárias como se fosse uma composição correta.
- Diferencie eixo local da forma e eixo do mundo. Rotação +90° em Z leva o eixo local +X para +Y; +90° em X leva +Y para +Z; +90° em Y leva +Z para +X. Teste a direção desejada com um vetor antes de repetir peças pelo cenário.
- Position indica o **centro** da peça. Girar muda a posição de suas extremidades, não o centro por conta própria. Para girar um conjunto ao redor de um ponto C, transforme também as posições: P'=C+R*(P-C). Não gire apenas Orientation de cada placa e espere que a construção continue encaixada.
- Confira limites após a rotação. A altura de um Block inclinado não é simplesmente Size.Y: a extensão vertical depende dos três eixos transformados. Calcule os cantos ou use a caixa transformada antes de assentar a peça no chão ou sobre uma parede.
- Prefira construir um exemplar e conferir suas extremidades antes de replicar casas, troncos, postes, rampas ou telhados. Se a forma tiver um lado alto/baixo, verifique qual lado aponta para dentro da construção.

Checklist geométrico: (1) forma e eixo local corretos; (2) unidades e ordem da rotação; (3) posição do centro e pivô; (4) ponto de apoio sem flutuar ou atravessar demais; (5) extremidades que devem se encontrar realmente coincidentes; (6) topo acima da base e cumeeira acima dos beirais. Corrija inconsistências antes de gerar o arquivo final; não afirme que viu a cena quando verificou apenas números.

## Telhado de duas águas e sinais da rotação

Quando o telhado usa duas placas Block inclinadas ao redor do Z, a metade à esquerda da casa precisa subir em direção ao centro: Orientation.Z positivo (por exemplo +22°). A metade direita usa Z negativo (-22°). O inverso faz uma calha em V, não um telhado convencional com cumeeira alta. Não inverta os sinais automaticamente em qualquer objeto: essa regra depende da posição das duas metades e do eixo usado.

Para placas de comprimento L no X local e ângulo θ, use distância horizontal d=L*cos(θ)/2 entre o centro da casa e o centro de cada placa. Os centros ficam em cx-d e cx+d, na mesma altura yc. Assim as extremidades internas se encontram na cumeeira em y=yc+L*sin(θ)/2; as externas ficam em yc-L*sin(θ)/2. Os cálculos trigonométricos usam radianos; Orientation usa graus.

Confira por transformação dos pontos que a cumeeira está acima dos beirais e que as metades realmente se encontram. Use largura e beiral compatíveis com as paredes e considere a espessura ao assentar o telhado. Se usar Wedge em vez de placas, o Wedge padrão tem base em -Y e parte alta em +Z: derive a rotação antes de posicionar. Não suponha o mesmo eixo de um Cylinder.

## União e recortes

Use `create` para as peças e refs distintas. `negate` alterna o cortador para negativo. `union` com `ref` novo e `ids` de duas ou mais peças produz uma UnionOperation; pelo menos uma deve ser positiva. O negativo sozinho não recorta nada. Após unir, os IDs de entrada deixam de existir: use o ref da união.

Exemplo de abertura: crie parede e cortador atravessando toda sua espessura, negue o cortador e una os dois. `separate` recupera as peças de uma união local; `refs` opcional identifica cada resultado para operações seguintes.

Part, NegateOperation e UnionOperation locais podem participar da união. MeshPart, SpawnLocation e corpos de rigs articulados não devem entrar nessas operações. Modele acessórios fora do rig antes de conectá-los. Evite união única para o cenário inteiro: mantenha casas, portas, móveis e vegetação editáveis.

Respeite min/max das propriedades. Cada dimensão de peça deve ser >=0.05, inclusive faixas e pinturas. Confira eixo, rotação, escala, centro e contato com o chão antes da entrega. Devolva o arquivo de operações ou uma proposta MCP com resumo e modo de testar; não publique online sem pedido.
