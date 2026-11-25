---
name: levelup-modelagem
description: Modelar cenários e objetos no Studio Level Up usando primitivas, cilindros e CSG por MCP ou arquivo de alterações.
---

# Modelagem no Studio Level Up

## Modelar por etapas (obrigatório para objetos, armas e ferramentas)

Nunca entregue uma pilha de blocos. Pense em cada etapa e escreva o campo `plan` na resposta:

1. **Estilo e silhueta**: escolha um estilo em `levelup-detalhamento/references/estilos-modelagem.md` e descreva o que torna o objeto reconhecível de longe.
2. **Componentes**: divida o objeto (ex.: lâmina, guarda, cabo, pomo, detalhes). Cada um com medidas, 3 tons de cor, material e os cortes de que precisa.
3. **Cada componente sozinho, em um Model próprio**: volume positivo → cortadores (ponta, chanfro, entalhe, furo, curva) → `negate` → `union` → camadas de detalhe (faixas, frisos, anéis, gemas). A etapa de corte não é opcional.
4. **Montagem**: coloque cada componente na posição final, encostado no vizinho, na escala certa.
5. **Função**: objeto de mão vira Tool (levelup-tools): Handle, peças soltas da física e soldadas ao Handle por último.
6. **Revisão**: confira contra `craftBrief.qualityBar` do contexto. Armas: 28+ peças, 4+ cortadores, 2+ unions, 5+ cores, 2+ formas além de Block.

Exemplos completos por etapas: `levelup-tools/references/espada-fogo-tool.json` (fantasia) e `katana-tool.json` (realista).

Use quando o pedido envolver construir ou alterar formas, móveis, prédios, natureza ou cenários no Studio Up. Sempre que possível, modele o objeto solicitado; não entregue apenas animação, uma descrição ou um script que só criará as peças depois.

## Preferência do projeto: construir o formato, não apenas agrupar blocos

Use Parts simples para estruturas básicas: paredes, pisos, lajes, bases e suportes retangulares sem trabalho de forma. Para objetos como **espadas, árvores, ferramentas e elementos decorativos**, entregue modelagem do formato com primitivas e CSG quando compatível. Colocar várias Parts num Model, mudar seus nomes ou trocar cores não conta por si só como modelagem de formato.

Parts são a matéria-prima temporária da operação: crie volumes positivos e cortadores, aplique `negate` nos cortadores e `union` nos grupos apropriados. O resultado deve apresentar a silhueta, recortes e encaixes pedidos, e não ficar só nas peças de construção iniciais. Não invente uma classe MeshPart sem dados de malha nem apenas afirme ter usado união: envie as operações reais no JSON/MCP.

Antes de responder a pedidos de espada ou árvore, leia o passo a passo e a receita correspondente:

- [Espada com ponta recortada por negativos](references/espada-csg.md).
- [Árvore com tronco ramificado e copa modelada](references/arvore-csg.md).
- [Receitas executáveis de ambos os objetos](references/receitas.json).

No arquivo gratuito, as referências completas estão em `skills[].references`. No MCP, use `levelup_skills` com name="levelup-modelagem" e reference="references/espada-csg.md" ou a referência desejada. Os mesmos comandos funcionam nos dois fluxos.

Use poucas operações que tenham efeito real: negativos para remover volume; união para compor a forma. Preserve os grandes grupos editáveis, como tronco e copa separados. Não faça uma união única da cidade inteira. Não aplique CSG em juntas de rigs, SpawnLocation ou MeshParts incompatíveis; esses casos têm restrições reais e não devem ser contornados.

Leia `levelup_context` no MCP ou o contexto JSON exportado. Consulte operações, propertyDefinitions, geometryRules, permissões e IDs atuais. O arquivo gratuito usa as mesmas operações do MCP, sem executar ferramentas na conversa da IA.

## Cilindros e proporções

- Cylinder tem comprimento no eixo **X local**. `Size=[comprimento,diametro,diametro]`; o motor usa o menor valor entre Y e Z para o diâmetro.
- Tronco vertical de 6 studs: `Shape="Cylinder"`, `Size=[6,1.5,1.5]`, `Orientation=[0,0,90]`.
- Poste vertical de 10 studs: `Size=[10,0.55,0.55]`, `Orientation=[0,0,90]`. Não use `[0.55,10,0.55]` sem rotação: isso produz um cilindro curto e deitado.
- Disco horizontal: `Size=[0.2,6,6]`, `Orientation=[0,0,90]`. O primeiro valor é a espessura, não o diâmetro.
- Position é o centro. Base no chão Y=0 e altura H exige centro em Y=H/2. Copa e luminária devem encontrar o topo do suporte; não deixar peças flutuando.
- Ball permanece esférica; Size não cria um elipsoide. Modele copas com esferas proporcionais ou composição de peças.

## Orientação: frente, ponta e lado certo (obrigatório)

Antes de entregar qualquer objeto com frente ou ponta (cadeira, carro, placa, NPC, arma, ferramenta, seta, rampa), leia [orientação de objetos](references/orientacao-de-objetos.md) e faça a autocorreção: frente = -Z (LookVector), cima = +Y, direita = +X; ferramentas de mão em pé (+Y) com o Handle sem rotação; gire conjuntos inteiros no pivô. Escreva no `plan` para onde a frente e a ponta apontam e confira com as extremidades calculadas.

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

## Cores do CSG

As novas faces de uma subtração podem herdar a Color do cortador. Não usar vermelho de depuração nos negativos: declare a cor desejada para os recortes. Para componentes uniformes, use update da união com UsePartColor=true e Color final; para manter várias cores, deixe false e planeje as cores de todos os volumes. Uma flag uniforme na união externa apaga diferenças entre lâmina, guarda e cabo ou entre tronco e copa. Leia cores-recortes.md da skill levelup-detalhamento, incluída integralmente no arquivo gratuito.

## União e recortes

Use `create` para as peças e refs distintas. `negate` alterna o cortador para negativo. `union` com `ref` novo e `ids` de duas ou mais peças produz uma UnionOperation; pelo menos uma deve ser positiva. O negativo sozinho não recorta nada. Após unir, os IDs de entrada deixam de existir: use o ref da união.

Exemplo de abertura: crie parede e cortador atravessando toda sua espessura, negue o cortador e una os dois. `separate` recupera as peças de uma união local; `refs` opcional identifica cada resultado para operações seguintes.

Part, NegateOperation e UnionOperation locais podem participar da união. MeshPart, SpawnLocation e corpos de rigs articulados não devem entrar nessas operações. Modele acessórios fora do rig antes de conectá-los. Evite união única para o cenário inteiro: mantenha casas, portas, móveis e vegetação editáveis.

Respeite min/max das propriedades. Cada dimensão de peça deve ser >=0.05, inclusive faixas e pinturas. Confira eixo, rotação, escala, centro e contato com o chão antes da entrega. Devolva o arquivo de operações ou uma proposta MCP com resumo e modo de testar; não publique online sem pedido.

## Armas

Para katana, espadas e outras armas de mão, siga levelup-tools: o guia `modelar-katana.md` ensina curva por segmentos, faixas sobrepostas, ponta e anéis por CSG, e a receita `katana-tool.json` mostra o nível de detalhe esperado.

Para galhos, troncos e tubos, leia [direção e extremidades](references/direcao-e-extremidades.md). Prefira cylinder_between para calcular automaticamente a rotação a partir de from/to; galhos para cima exigem to.Y > from.Y nos dois lados.

## Escala de conjuntos

Na ferramenta Escala, Models crescem proporcionalmente pelo mesmo fator, preservando formato, rotações e distâncias entre peças. Juntas C0/C1 e HipHeight acompanham a escala de um rig. Ao editar via JSON/MCP com updates individuais, calcular esse mesmo fator para Size, Position em torno do pivô e deslocamentos das juntas; não esticar só um eixo de cada peça de um objeto modelado.
