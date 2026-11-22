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

## União e recortes

Use `create` para as peças e refs distintas. `negate` alterna o cortador para negativo. `union` com `ref` novo e `ids` de duas ou mais peças produz uma UnionOperation; pelo menos uma deve ser positiva. O negativo sozinho não recorta nada. Após unir, os IDs de entrada deixam de existir: use o ref da união.

Exemplo de abertura: crie parede e cortador atravessando toda sua espessura, negue o cortador e una os dois. `separate` recupera as peças de uma união local; `refs` opcional identifica cada resultado para operações seguintes.

Part, NegateOperation e UnionOperation locais podem participar da união. MeshPart, SpawnLocation e corpos de rigs articulados não devem entrar nessas operações. Modele acessórios fora do rig antes de conectá-los. Evite união única para o cenário inteiro: mantenha casas, portas, móveis e vegetação editáveis.

Respeite min/max das propriedades. Cada dimensão de peça deve ser >=0.05, inclusive faixas e pinturas. Confira eixo, rotação, escala, centro e contato com o chão antes da entrega. Devolva o arquivo de operações ou uma proposta MCP com resumo e modo de testar; não publique online sem pedido.
