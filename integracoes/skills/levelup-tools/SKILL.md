---
name: levelup-tools
description: Criar Tools realmente equipáveis no Studio Level Up por JSON gratuito ou MCP, com Handle, StarterPack, soldas, empunhadura e testes de uso; inclui violão modelado.
---

# Tools equipáveis no Studio Level Up

Use quando o objeto precisar ir para a mão do jogador, entrar na mochila ou funcionar como ferramenta. Um Model chamado Tool, um objeto bonito no Workspace e um Handle solto não são uma Tool funcional. Use junto de levelup-modelagem e levelup-detalhamento para não sacrificar o formato do objeto.

## Hierarquia mínima que funciona

- Crie uma instância de classe Tool, filha direta de StarterPack, para recebê-la na mochila ao iniciar Jogar/renascer. StarterPack já existe: não criar outro serviço. Tool filha direta de um NPC Model com Humanoid e RightHand (R15) ou Right Arm (R6), no Workspace, equipa no NPC; também aceita Humanoid:EquipTool. Tool solta no Workspace ou em Model sem Humanoid não entra automaticamente na mochila; o Level Up não deve ser tratado como se tivesse coleta automática por toque pronta.
- Handle deve ser uma BasePart chamada exatamente Handle e filha direta da Tool. Não colocar o Handle dentro de um Model/Folder. Pode ser uma Part invisível que represente o ponto de pega. RequiresHandle=false permite ferramentas sem pega, mas não coloca o violão na mão sozinho.
- Todas as peças visuais finais, inclusive UnionOperation e peças dentro de Models, precisam de ligação rígida até o Handle por WeldConstraint Enabled=true. Part0 e Part1 usam IDs/refs reais de BaseParts; nunca nomes de Models nem strings de caminho.
- Modele primeiro; faça union/negate; crie as soldas por último com as referências finais. union consome as peças antigas: soldas apontadas para essas referências não ficam válidas por intenção.
- Handle e peças visuais da Tool ficam Anchored=false e CanCollide=false. Para enfeites pequenos também CanTouch=false. Não invente Massless no JSON se a propriedade não estiver no contrato. Cenários estáticos continuam ancorados; isso não se aplica às peças equipáveis.
- Nome, Enabled=true, ToolTip e CanBeDropped são propriedades suportadas. TextureId configura o ícone do slot: vazio mostra apenas o nome; preenchido mostra apenas a imagem, mantendo o nome acessível e no tooltip. Use URL de imagem ou mídia carregada suportada pelo editor. JSON usa GripPos e GripOrientation; o editor não aceita um objeto CFrame como props.Grip. GripOrientation usa graus YXZ; em scripts Luau, Tool.Grip aceita CFrame suportado pelo runtime.

**Armas com qualidade alta (katana, espadas, machados):** leia primeiro [modelar katana e armas de alto nível](references/modelar-katana.md) e use a [receita da katana](references/katana-tool.json) (realista) ou a [espada de fogo](references/espada-fogo-tool.json) (fantasia, montada por etapas) como padrão de detalhe: curva por segmentos, faixas de aço em 3 tons, ponta por CSG, guarda com recortes e cabo trançado. Uma arma com menos de 30 peças, sem recorte CSG ou com uma cor só não atende ao pedido de uma arma bonita.

Para espadas e objetos que ficam longe da palma, leia [escala, pega e NPCs](references/empunhadura-e-npcs.md) e a [receita de espada equipável](references/espada-tool.json). A receita de espada de cenário em detalhamento é maior: não copiar sua escala diretamente para uma mão.

Leia [montar e testar](references/montar-e-testar.md), [diagnóstico](references/diagnostico.md) e a [receita executável de violão](references/violao-tool.json). Para a forma do instrumento, leia [modelar o violão](references/modelar-violao.md) antes de copiar comandos.

**Orientação na mão:** o Studio Up segura como o Roblox: ao equipar, o braço direito vai para a frente e a ferramenta sai da mão. Monte em pé (cabo embaixo, lâmina/cabeça em +Y, gume para -Z), Handle com Orientation [0,0,0] e GripOrientation [25,0,12]. Armas de fogo e varinhas apontam o cano para -Z. Detalhes e autocorreção em `levelup-modelagem/references/orientacao-de-objetos.md`.

Leia também [dimensões e eixos dos personagens](references/dimensoes-personagens.md) antes de dimensionar uma Tool. O contexto inclui characterReference com as medidas extraídas dos rigs reais do construtor; para personagens importados, medir as peças do projeto.

## Empunhadura e teste real

O ponto de pega é o Handle, não o centro do Model nem o centro geométrico de uma união. Em espadas, o Handle invisível fica no meio do cabo, abaixo da guarda. Comece com GripPos=[0,0,0] quando o Handle já está na pega; não use coordenadas de mundo em GripPos. Dimensione o cabo para a palma e a arma para o personagem antes de soldar. Posicione o Handle perto da região que a mão deve segurar e conserve as posições relativas nas soldas. O motor coloca o Handle na mão direita com o inverso de Grip; ajuste GripPos/GripOrientation em pequenos passos, revendo a ferramenta na mão. Não compensar um ponto de pega errado esticando o objeto.

Em Jogar, a Tool de StarterPack é clonada para a Backpack. O jogador toca no slot da ferramenta ou tecla seu número para equipar. Estar na mochila não significa estar equipada. Para autoequipar quando explicitamente desejado, use Humanoid:EquipTool na cópia da Backpack, não no template de StarterPack; siga o exemplo do tutorial.

Verifique: aparece no inventário; equipa; Handle e todos os componentes acompanham a mão ao caminhar/girar; não ficam peças no chão; desequipa; volta ao renascer. Confira a Saída. Relate o que foi testado de fato; não chame uma Tool estática de funcional sem conferir o fluxo.

## Limites e entrega

Tool.Activated/Deactivated e Equipped/Unequipped existem no runtime; ativar não cria efeitos por si só. Não prometer som de violão sem uma classe/API de áudio suportada no contrato. Não adicionar loops por peça nem scripts de geração futura no lugar da geometria.

A receita é modelo editável e Tool de inventário, não asset oficial da Roblox. No gratuito, leia os tutoriais completos incluídos em skills[].references e entregue levelup-alteracoes.json com o fingerprint atual. No MCP, consulte levelup_skills por nome/referência e proponha os mesmos comandos. Não exigir MCP pago para criar, soldar ou importar a Tool por JSON.

Se o contexto fornecer files.response, use esse nome ao entregar o JSON. Ele identifica projeto, conteúdo e data; os nomes genéricos acima servem apenas como exemplo do formato.

Soldas adicionais à LeftHand/RightHand do jogador padrão R15 acompanham os ossos visuais no motor. A Tool duplicada deve permanecer desancorada e ter soldas válidas; teste caminhando e girando, não só parado. As referências enviadas ao Luau acompanham o passo de sincronização física (20 Hz); não prometer sincronização de mão remota não testada.
