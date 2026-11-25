# Tutoriais de arte para roupa (pense como um criador de clothing profissional)

Um criador profissional nunca começa pintando. Ele decide o conceito, a paleta e onde cada costura passa no corpo; depois trabalha em camadas, do grande para o pequeno, e confere a peça girando o personagem. Siga isto mesmo sem foto de referência.

## 1. Conceito em 1 frase

Antes do JSON, escreva no `name`/plano mental: estilo (esportivo, streetwear, social, uniforme, fantasia, anime), época, material e 1 elemento-assinatura (faixa diagonal, gola contrastante, estampa nas costas). Peça sem assinatura parece genérica.

## 2. Paleta (cores que combinam)

- **Regra 60-30-10**: 60% cor base (tecido), 30% cor secundária (recortes, mangas, calça), 10% destaque (logo, costura, zíper).
- **Tons da mesma cor**: para cada cor faça claro (+12% luz), médio e escuro (−15% luz, um pouco mais saturado). Sombra NÃO é preto puro: é a mesma cor mais escura e levemente puxada para azul/roxo.
- Combinações seguras: roxo #6526d9 + verde #22a55a + branco; azul-marinho #1f2f5c + vermelho #c9333b + branco; preto #1b1c22 + dourado #d4a53a; verde-oliva #556b2f + bege #d9c7a0 + marrom #5b3a24; rosa #ff7eb6 + lilás #b69cff + branco; cinza #3a3f4c + laranja #ff7a1a.
- Complementares (opostos no círculo: roxo × amarelo, azul × laranja, verde × vermelho) dão contraste forte: use só no destaque. Análogas (vizinhas: azul, azul-esverdeado, verde) ficam suaves e elegantes.
- Branco puro só em detalhes; para tecido branco use #f2f3f7 e sombras #d9dce5.
- Máximo de 4–5 cores fortes. Cores da escola/time do aluno vêm primeiro.

## 3. Sombras e volume (o que separa amador de profissional)

Faça numa camada própria "Sombras" com opacidade 0.6–0.9, usando a cor escura com alfa (`#RRGGBBAA`) para funcionar sobre qualquer base.
- **Bordas**: faixas de 6–10 px nas laterais de cada face (`#00000022`) – o corpo é arredondado, as bordas recebem menos luz.
- **Axila e sob a gola**: polígono mais escuro (`#00000035`) no topo das faces internas do braço e logo abaixo da gola.
- **Cintura**: gradiente leve na base do tronco (2–3 faixas empilhadas de alfa 10, 18, 26).
- **Dobras**: strokes curvos de 2–3 px (`#0000002a`) com um brilho paralelo 1 px acima (`#ffffff22`). Onde há dobra: cotovelo (y≈412), cintura, axila, joelho (y≈418), atrás do joelho.
- **Luz**: ombros (`*.up`) e peito um pouco mais claros; uma faixa `#ffffff18` diagonal no peito dá efeito de tecido brilhante (esportivo).
- **Sombra projetada**: sob bolsos, golas, cintos e zíper, um stroke de 2 px escuro logo abaixo da peça. Isso "descola" o detalhe do tecido.

## 4. Costuras e acabamento

- Costura = stroke 1–1.5 px, 3–4 px para dentro da borda, um tom mais escuro (ou contrastante no jeans: #d08a3a).
- Tracejado: strokes de 4 px com 3 px de espaço.
- Barra e punho: faixa de 8–14 px + costura dupla.
- Gola careca: elipse escura no centro de `torso.up` + faixa curva no topo da frente. Gola V: polígono [[263,74],[295,112],[327,74]] + contorno. Colarinho social: 2 triângulos brancos + linha central de botões.
- Botões: elipse 6×6 + ponto escuro; zíper: stroke 3 px + traços curtos a cada 4 px + puxador.

## 5. Tecidos (texturas simples que funcionam)

- **DryFit**: microfuros = elipses 1.5 px `#0000000f` em grade de 8 px (só em faixas, para não estourar o limite de elementos).
- **Jeans**: base azul média, strokes verticais `#ffffff10`, desbotado (elipse `#ffffff14`) na frente da coxa, costura laranja, rebites dourados.
- **Moletom/tricô**: sombras largas e suaves, punho e barra canelados (traços verticais a cada 8 px).
- **Couro**: brilho forte e estreito (`#ffffff30`) + sombras duras.
- **Xadrez/listras**: retângulos finos com alfa 40–60 cruzando; repita na mesma altura em todas as faces.

## 6. Estampa, logo e texto

- Logo no peito esquerdo do personagem (em `torso.front` x 312–350, y 88–120) ou centralizado (x 255–335).
- Número nas costas (40–64 px, centro x 491) com nome acima (14–18 px).
- Texto com contorno: o mesmo texto 1 px deslocado na cor escura, por baixo.
- Referência/logo do aluno: `image` com `source:"ref:ID"`, sempre dentro da face e sem distorcer (mantenha a proporção da foto).

## 7. Calças e calçados

- Calça só da cintura para baixo: tronco de y 146 a 202 (cós em y 146) + `torso.down`; `torso.up` nunca. Passantes a cada ~50 px, bolsos frontais em curva, bolsos traseiros nas costas. Detalhes em criar-calca.md.
- Pernas até o tornozelo; bermuda até y≈410; tênis de y 455 a 483 nas 4 faces + sola em `*.down`.

## 8. Conferência final (faça sempre)

- Gire mentalmente: a faixa da frente continua na lateral e nas costas na MESMA altura?
- Esquerda/direita certas? Logo não espelhado?
- Faces up/down pintadas? Fora das faces transparente?
- Há base, sombra, costura, pelo menos 3 detalhes pequenos e 1 assinatura?
