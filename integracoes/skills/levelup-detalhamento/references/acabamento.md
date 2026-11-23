# Acabamento por tipo de objeto

## Espada: lâmina com seção e silhueta

1. Determine arma e estilo: espada reta, sabre curvo ou lâmina larga pedem silhuetas diferentes. Leia as dimensões da mão/rig se ela for usada pelo personagem.
2. Use a receita de ponta recortada de levelup-modelagem como base, não como acabamento final de toda espada. Alongue a silhueta e afile a ponta por cortadores simétricos ou assimétricos conforme a referência.
3. Trabalhe a seção da lâmina: uma lâmina com aresta central pede duas faces inclinadas. Planeje cortadores longos inclinados ao longo do comprimento para chanfrar as bordas sem apagar o núcleo. Num eixo de comprimento Y, os chanfros trabalham a seção X/Z; não girar todos no plano X/Y como se fossem só recortes da ponta. Calcule os cantos transformados e mantenha espessura positiva >=0.05.
4. Sulco central deve ser raso e terminar antes da ponta/guarda. Retire apenas a profundidade desejada com cortador arredondado ou composto. Atravesse a espessura inteira somente para um vazado intencional.
5. Modele a guarda com extremidades afiladas/chanfradas, curvas aproximadas com poucos segmentos conectados ou esferas/cilindros. Evite outra barra quadrada sem tratamento quando a referência pede uma guarda trabalhada.
6. Faça cabo circular: Cylinder com comprimento X local, girado ao eixo do cabo. Use colar na transição com guarda e pomo arredondado/modelado; sulcos de pega podem usar vários cortadores finos >=0.05, sem perfurar o núcleo.
7. Una os grupos rígidos preservando cor e editabilidade. Não suponha que o resultado estático vira Tool: Handle e soldas precisam de configuração própria compatível.
8. Revise de perfil: ponta, afiação e espessura devem continuar legíveis. Não basta uma espada bonita de frente e grossa como uma tábua de lado.

## Poste: haste circular e conexões

1. Haste de 7.4 studs: Cylinder Size=[7.4,0.4,0.4], Orientation=[0,0,90], centro Y=3.7. Uma base com altura 0.3 tem centro Y=0.15.
2. Faça base circular com disco Cylinder vertical, anel/colar de transição e haste; nunca substituir por um prisma quadrado apenas porque é mais fácil.
3. Para curva no suporte, use segmentos cilíndricos tangentes com pequenas sobreposições e juntas arredondadas; una o suporte. Não deixar cilindros que só se encostam por um ponto. O motor não tem extrusão de curva como operação IA; não inventar essa API.
4. Encontre a direção e o centro de cada segmento a partir das extremidades. O comprimento é a distância entre elas e o eixo X local deve apontar de uma para outra. Para rotação geral use a composição YXZ do mapa, sem somar Euler arbitrariamente.
5. Acrescente só ferragens visíveis. Preserve o suporte, carcaça e superfície emissora em componentes coerentes. Faça um exemplar antes de repetir pela rua.

## Luminária: corpo, alojamento e emissão

A receita luminaria-csg.json cria poste circular, suporte, carcaça com quatro cantos chanfrados, um negativo que abre o alojamento inferior, lente circular e PointLight. Não é uma caixa inteira Neon.

1. Modele a forma externa da carcaça. Quatro negativos diagonais removem seus cantos: a forma final deve ter contorno octogonal, não só uma cor diferente.
2. Abra a parte inferior com cortador mais baixo que a tampa superior. Mantenha material positivo em cima e nas paredes, sem destruir a carcaça inteira.
3. Posicione a lente no alojamento, levemente acima da borda inferior para ficar protegida. A lente pode ser disco circular, sem pretender que uma Ball esticada vire vidro elíptico.
4. Separe lente/material Neon do corpo metálico. O emissor local pertence à lente: Neon faz a superfície parecer emissiva, mas não substitui PointLight para iluminar o entorno.
5. Use brilho/alcance proporcionais à cena; confirme as propriedades suportadas. Muitas luminárias visuais não exigem muitas luzes com sombras simultâneas.
6. Confira o encaixe do braço na carcaça e a ausência de cortadores soltos. A receita modela um protótipo na origem; adapte todas as posições juntas para instalar no mapa.

## Árvores: orgânico por composição modelada

1. Escolha espécie/estilo antes de adicionar bolinhas. Evite um cubo verde em um bloco marrom.
2. Tronco circular com ramificações inclinadas e encontros arredondados. Para afunilamento, use seções de diâmetros progressivos com transições; o motor não expõe um cone paramétrico IA.
3. Faça a copa com massas de tamanhos variados e assimetria coerente. Una volumes sobrepostos e use negativos para vazios/lacunas que reforcem a silhueta, não para cortar buracos aleatórios na árvore.
4. Se a intenção for poda geométrica, um cortador de plano pode nivelar a parte inferior. Para árvore natural, preserve irregularidade; não reutilize automaticamente a base plana da receita estilizada.
5. Mantenha copa e tronco editáveis separadamente. Ramos que sustentam a copa devem chegar nela. Faça variações pequenas do exemplar e confira custo antes de povoar o cenário.

## Receita numérica: chanfros longitudinais da espada

Consulte espada-chanfrada em receitas-avancadas.json. Além dos dois negativos da ponta, quatro cortadores percorrem o comprimento Y da lâmina. Para seção original X=1.8 e Z=0.35, cortadores de Size=[0.5,10,0.5], Orientation=[0,45,0], centros X=+/-1.0, Y=6.3 e Z=+/-0.3 retiram os quatro cantos da seção X/Z. A lâmina ganha faces de aresta ao longo do comprimento, em vez de continuar uma tábua retangular.

Declare Color cinza metálica nos seis cortadores. Depois de unir, a etapa da lâmina usa UsePartColor=true e a cor cinza; a união externa da espada mantém false, preservando guarda e cabo de outras cores. Confira que os chanfros não cortam o núcleo, que a ponta continua estreita e que o volume é menor que a lâmina apenas apontada. Escale os cortadores junto com a seção se mudar largura/espessura; não reutilize os mesmos números em qualquer espada.
