---
name: levelup-detalhamento
description: Refinar a forma de objetos no Studio Level Up com silhuetas trabalhadas, chanfros, curvas, encaixes e recortes CSG, evitando espadas, postes e luminárias genéricos feitos de blocos.
---

# Detalhamento de objetos no Studio Level Up

Use em objetos construídos/modelados quando o pedido exigir acabamento, identidade ou formas reconhecíveis: espadas, postes, luminárias, árvores, móveis e acessórios. Para paredes e pisos sem detalhes específicos, Parts simples continuam adequadas. Esta skill complementa levelup-modelagem; não altera a interface da plataforma.

## Qualidade de forma antes de entregar

Modele a silhueta e a seção do objeto, não apenas seu contêiner. Uma espada precisa de lâmina afilada, ponta coerente, guarda com forma, cabo cilíndrico e transições entre essas partes; um poste precisa de haste circular, base e encaixes; uma luminária precisa de carcaça, alojamento e superfície emissora. Um retângulo pintado não substitui essas formas. Respeite um estilo deliberadamente quadrado quando ele for pedido ou fizer parte da referência; evite blocos genéricos por conveniência.

Part é volume de construção, não uma proibição de material: use Cylinder, Ball e Wedge onde correspondam à forma; esculpa a forma por union e negate quando o contorno, o vazado ou o encaixe pedir. Pode usar vários cortadores necessários. Não reduzir tudo a dois blocos para cumprir um orçamento arbitrário. Não considerar que mover Parts para um Model produz modelagem.

Leia [receitas de acabamento](references/acabamento.md) para espada, poste, luminária e árvore. Para uma luminária executável com cantos chanfrados, alojamento negativo e luz real, consulte [receita JSON](references/luminaria-csg.json). Adapte escala/posição a partir do contexto e consulte propertyDefinitions antes de mudar propriedades.

## Cores e percurso dos tutoriais

Antes de qualquer CSG colorido, leia [cores dos recortes](references/cores-recortes.md). Faces abertas por negativos podem herdar a Color do cortador: não usar cortadores vermelhos por hábito. Para componente uniforme, iguale as cores e use UsePartColor=true na união resultante; para cores intencionais, mantenha false e planeje cada face. Não apagar a paleta de uma espada/árvore inteira com uma flag uniforme externa.

Para evitar assets simplificados, siga [planejar e revisar](references/planejar-e-revisar.md) e escolha o tutorial:

- [Montanhas e rochas](references/montanhas-e-rochas.md): cristas e planos com volume, sem pirâmides vermelhas repetidas.
- [Árvores orgânicas](references/arvores-organicas.md): tronco/galhos circulares e copa com reentrâncias.
- [Objetos urbanos](references/objetos-urbanos.md): lixeira redonda, poste e luminária.
- [Casinha e encaixes](references/casinha-e-encaixes.md): entrada circular, cavidade e telhado.
- [Receitas avançadas executáveis](references/receitas-avancadas.json): comandos completos para os quatro casos, com política de cor explícita.
- [Fontes e referências visuais oficiais](references/fontes-modelagem.md): conceitos do Roblox adaptados ao contrato local.

As referências textuais e JSON acompanham integralmente o contexto gratuito. A IA deve ler o tutorial correspondente, aplicar os comandos adaptados e fazer a revisão; não devolver apenas links nem copiar uma receita sem considerar escala, apoio e estilo do pedido.

## Como decidir e executar

- Defina uso, estilo e distância de observação. Separe detalhe de silhueta, detalhe funcional e decoração pequena. Preserve a identidade vista de frente, perfil e três quartos.
- Faça a forma principal com proporções e seção corretas. Acrescente afilamentos, curvas compostas, chanfros, bordas, sulcos e encaixes onde forem visíveis e fizerem sentido.
- Planeje cada cortador pelo volume que deve remover. Ele atravessa toda a região do recorte; uma subtração superficial pode criar um sulco, uma atravessante cria um vazado. Confira sua rotação por transformação dos pontos e compare limites antes/depois.
- Aplique negate nos cortadores e union com os positivos do grupo. O arquivo final precisa executar as operações reais. Cortadores negados soltos não são o acabamento; agrupar sem CSG não é aplicar o recorte.
- Una por componente rígido coerente: lâmina/guarda/cabo ou haste/carcaça/lente. Mantenha vidro, partes móveis, pivôs e materiais com comportamento distinto separados quando necessário. Não una rigs ou uma cidade inteira.
- Verifique que não há pontas invertidas, lâmina grossa como uma caixa, hastes quadradas, tampas sem espessura, peças flutuantes ou negativos sobrando. Confira contato entre base, haste, suporte e carcaça. Não invente MeshPart, bevel modifier ou curva de Bézier como operações disponíveis.

## Detalhe com custo controlado, sem sacrificar a forma

Use os recortes que o resultado pede, inclusive vários negativos. Prefira uma união do componente com seus cortadores a uma longa cadeia de uniões que não muda a intenção. Evite duplicar cortadores idênticos e não acrescente detalhes invisíveis para inflar complexidade. Não há uma quantidade fixa de negativos que defina qualidade.

O motor Level Up calcula a superfície CSG e mantém a geometria em cache por união enquanto suas peças internas não mudam. Isso evita recalcular uma união intacta em cada atualização. O projeto preserva operandos para permitir Separar e editar; uma UnionOperation não significa uma única primitiva nem custo zero. Não afirmar equivalência de simplificação com o Roblox: o motor atual não oferece um decimador automático com garantia de preservar detalhes.

Consulte levelup-organizacao-otimizacao para contagem de folhas/profundidade CSG, instâncias, luzes e bytes. Faça um exemplar representativo e revise geometria/custo antes de replicar. Uma união é uma decisão de forma, não uma promessa de FPS. Se a engine limitar o detalhe solicitado, informe a limitação concreta e preserve a intenção visual; não alegue que uniões serão automaticamente otimizadas sem evidência.

## Objetos equipáveis

Para instrumentos e acessórios que precisam ir à mão, consulte também levelup-tools e modelar-violao.md. Modelagem concluída não substitui Handle, StarterPack, soldas finais e teste de equipar. O violão precisa de corpo curvo, caixa, cintura e dorso arredondado, além de detalhes frontais.

## Entrega nos dois fluxos

No gratuito, leia esta skill e suas referências dentro de skills[] do contexto e retorne levelup-alteracoes.json. No MCP, leia levelup_skills com name="levelup-detalhamento" e reference da receita; envie a proposta e aguarde a aplicação. Use refs novas, IDs reais, até 500 operações por proposta e dimensões >=0.05. Os cilindros usam comprimento X local; uma haste vertical usa Size=[altura,diâmetro,diâmetro] e Orientation=[0,0,90]. Ball é esférica, não um elipsoide.

Descreva as formas e recortes criados, os grupos editáveis preservados e como conferir de perto e à distância. Diferencie revisão numérica de teste visual; não alegue ter visto a cena sem acesso à prévia.

Se o contexto fornecer files.response, use esse nome ao entregar o JSON. Ele identifica projeto, conteúdo e data; os nomes genéricos acima servem apenas como exemplo do formato.

## Estilos

Antes de detalhar, escolha um estilo em [estilos de modelagem](references/estilos-modelagem.md) (fantasia, realista, anime, low-poly, sci-fi) e siga proporção, cortes, paleta e detalhes dele. O checklist anti-bloco no fim do guia vale para qualquer objeto.
