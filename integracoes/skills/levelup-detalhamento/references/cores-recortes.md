# Cores de faces e negativos: evitar montanhas vermelhas

## O que o Level Up realmente faz

O CSG preserva a cor de cada face de origem. Ao subtrair um sólido, as faces dele que delimitam o recorte podem aparecer no resultado com a Color do cortador. Um cortador vermelho pode deixar faces vermelhas na montanha, na lixeira ou no chanfro de uma espada. Isso não é automaticamente uma falha de geometria.

Não confunda a Color RGB armazenada com o indicador visual rosa/vermelho e transparente do modo Negar. O indicador serve para enxergar o negativo no editor; não é uma instrução para atribuir Color=[255,0,0] a todo cortador. No JSON, declare uma cor coerente antes de negate.

## Duas estratégias suportadas

**Componente uniforme:** use a mesma Color no positivo e nos negativos; após union, envie update da referência resultante com UsePartColor=true e Color desejada. Isso faz a superfície inteira desse componente usar uma cor. Exemplo: uma rocha cinza, carcaça de lixeira verde ou lâmina metálica cinza.

**Cores de faces intencionais:** mantenha UsePartColor=false e defina Color de cada volume, inclusive cortadores. A cor do cortador deve ser a que se deseja nas paredes internas/chanfros, e não uma cor de depuração. Exemplo: abertura com interior deliberadamente mais escuro.

```json
[
 {"op":"create","ref":"corpo","cls":"Part","parent":"Workspace","name":"Rocha","props":{"Size":[6,4,5],"Position":[0,2,0],"Color":[115,119,126],"Material":"Slate","Anchored":true}},
 {"op":"create","ref":"corte","cls":"Part","parent":"Workspace","name":"Cortador da rocha","props":{"Size":[8,3,8],"Position":[2,4.2,0],"Orientation":[0,0,25],"Color":[115,119,126],"Anchored":true}},
 {"op":"negate","ids":["corte"]},
 {"op":"union","ref":"rocha","ids":["corpo","corte"],"name":"Rocha recortada"},
 {"op":"update","id":"rocha","props":{"UsePartColor":true,"Color":[115,119,126]}}
]
```

O trecho ensina o formato e a política de cor; a receita de montanha faz a silhueta completa. Use a baseFingerprint do contexto ao montar o envelope levelup-ai-changes.

## União dentro de união

Trate a cor por componente. Numa espada, deixe lâmina uniforme cinza, guarda dourada e cabo marrom; depois una os componentes mantendo UsePartColor=false na união externa. Pintar a união externa de cinza com UsePartColor=true apagaria a diferenciação visual. No Level Up, a flag da etapa interna é preservada ao unir novamente.

Uma união tem um Material de superfície para o componente renderizado; cores diferentes não equivalem a vários materiais físicos/ópticos independentes. Mantenha vidro/lente separados da carcaça metálica. Transparência, emissão e partes móveis diferentes também justificam componentes separados.

## Corrigir uma união já existente

1. Identifique o ID e a finalidade da união no contexto atual. Não pinte todas as uniões do mapa sem examinar o pedido.
2. Se toda a montanha deveria ser cinza, uma atualização de UsePartColor=true e Color cinza pode corrigir a aparência sem reconstruir a forma.
3. Se houver neve, vegetação ou detalhes de outra cor na mesma união, mantenha a união externa multicolorida e corrija só os componentes/cortadores relevantes. Use separate para recuperar etapas editáveis quando necessário, e confira as referências novas.
4. Se a silhueta também estiver errada, corrigir cor não é suficiente: refaça o recorte apropriado, preserve posição e reveja em três vistas.
5. Liste o que foi realmente corrigido. Não prometa que essa skill alterou automaticamente um arquivo antigo já gerado.

## Antes de entregar

Para cada union, registre: cor externa desejada, cor das novas faces, uniformidade ou multicolorido, flags das etapas internas e cor final. Revise todos os negativos. Vermelho vivo só quando for parte do design pedido, nunca por padrão de ferramenta.
