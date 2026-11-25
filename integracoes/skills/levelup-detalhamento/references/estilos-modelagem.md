# Estilos de modelagem: sair dos blocos

Antes de modelar, escolha **um** estilo e siga as regras dele do começo ao fim. Misturar estilos (ou não ter nenhum) é o que produz "pilha de blocos". Cada estilo abaixo diz: proporção, como fazer a forma com Parts/CSG, paleta e detalhes típicos. Os números servem para objetos de mão (3.5 a 4.5 studs); para cenário, multiplique tudo pelo mesmo fator.

## Como pensar (vale para todos)

1. **Silhueta primeiro.** Olhando só a sombra, dá para saber o que é? Ponta, curva, asas da guarda, pomo: é a silhueta que comunica. Corte a forma (negate + union) antes de pensar em cor.
2. **Forma grande, média, pequena.** 1 volume grande (lâmina), 2–3 médios (guarda, cabo), vários pequenos (anéis, gemas, frisos). Sem os pequenos, parece brinquedo; sem o grande bem cortado, parece bagunça.
3. **3 tons + 1 destaque.** Cada material tem claro/médio/escuro; só um destaque saturado ou Neon (gema, núcleo, runa).
4. **Camadas, não texturas.** Fio, sulco, friso e brilho são peças finas por cima do volume (0.004–0.03 mais grossas que ele). Material (Slate, Neon...) completa a forma; não substitui.
5. **Componentes separados, montagem depois.** Modele cada componente num Model próprio, confira, e só então encaixe nas posições finais.

## Fantasia épica (RPG, "espada de fogo/gelo/trevas")

- Proporção exagerada: lâmina larga (0.45–0.6), guarda grande com asas (1–1.4 de largura), pomo com gema.
- Forma: bordas com entalhes (cortadores a 45° alternando lados = chamas/serrilha), ponta em 2 cortes, asas da guarda inclinadas 15–30° com a ponta cortada.
- Paleta por elemento: fogo 96,20,14 / 214,64,22 / 255,128,32 + Neon 255,222,120; gelo 40,70,110 / 120,180,230 / 200,235,255 + Neon 150,240,255; trevas 25,20,35 / 70,40,110 / 140,90,200 + Neon 190,120,255.
- Detalhes: núcleo Neon no centro da lâmina, veios diagonais (±35–40°), frisos dourados, gema Ball Neon na guarda e no pomo.
- Exemplo completo: `levelup-tools/references/espada-fogo-tool.json`.

## Realista / histórico (katana, espada medieval, machado)

- Proporção fiel: lâmina estreita (largura ≈ 1/10 do comprimento), cabo ≈ 1/3 da lâmina.
- Forma: curva por segmentos (katana) ou lâmina reta afinando; chanfros longitudinais com cortadores girados 45° no eixo Y; ponta por CSG.
- Paleta contida: aço 198,205,214 / 132,139,150 / 104,111,124, dourado envelhecido, couro/tecido escuro.
- Detalhes: fio mais claro, sulco (fuller/bo-hi), colar, anéis, trançado em X.
- Exemplos: `katana-tool.json` + `modelar-katana.md`, `espada-tool.json`.

## Anime / estilizado

- Silhueta muito marcada e assimétrica: lâminas com recortes geométricos, "dentes", aberturas (furos por negate), guardas angulosas.
- Cores chapadas e contrastantes (SmoothPlastic), contorno escuro: uma peça 0.02 maior e mais escura atrás de cada componente faz "linha" de desenho.
- Detalhes: faixas brilhantes Neon nas bordas, emblemas (CornerWedge, Ball achatada).

## Low-poly / cartoon (simuladores, jogos infantis)

- Formas grossas e arredondadas: Cylinder e Ball dominam, poucos detalhes mas bem grandes.
- Proporção "fofinha": cabo curto e grosso, lâmina larga com ponta arredondada (cortadores grandes a 30° e 60°).
- Paleta saturada e alegre, 2 tons por cor (claro em cima, escuro embaixo).
- Detalhes: brilho branco (faixa fina na diagonal), estrelas/corações com CornerWedge.

## Sci-fi / tecnológico

- Painéis: volume principal com recortes retangulares (negate) e linhas de painel (frestas escuras finas).
- Neon em faixas retas (ciano, magenta, verde-limão), metal escuro 40,44,52 e cinza 120,126,138.
- Detalhes: hexágonos (Cylinder de 6? use 3 blocos girados 60°), parafusos (Cylinder curto), cabos (Cylinder fino curvado por segmentos).

## Checklist anti-bloco (responda antes de entregar)

- Tem pelo menos 1 forma que só CSG explicaria (ponta, entalhe, furo, chanfro)?
- Algum componente grande ainda é um bloco liso? Corte ou adicione camada.
- Há 3 tons + 1 destaque? Os pequenos detalhes existem?
- A silhueta lembra o pedido de longe e está na escala certa?
