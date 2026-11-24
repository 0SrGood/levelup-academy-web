# Da foto de referência para o template 585 x 559

O aluno pode anexar até 6 fotos (camisa real, uniforme da escola, camisa de time, desenho). Elas aparecem em `currentClothing.references` com `id` e `name`; o arquivo baixado traz a imagem em base64, e no chat o aluno anexa as mesmas fotos.

## Como um profissional converte a foto

1. **Olhe de verdade.** Se não conseguir abrir a imagem, use o **retrato em texto** que o Studio manda junto (`references[].colors` + `references[].grid`, grade 16×16 da foto: letra = cor, `.` = fundo). Sem foto e sem retrato, diga isso e peça a imagem no chat. Nunca invente detalhes.
   - Como ler a grade: a camisa da foto aparece como letras; linhas horizontais de outra letra = faixas (a altura da linha na grade ÷ 16 dá a altura relativa no torso); letras escuras no topo central = gola; letras na ponta das mangas = punhos; um grupo pequeno de letra diferente no peito = emblema.
2. **Liste o que vê**, de cima para baixo: gola (tipo, cor), ombros, mangas (comprimento, punho, faixas), peito (logo, posição), recortes laterais, barra, costas (número, nome, desenho). Anote as cores em #RRGGBB.
3. **Mapeie cada elemento numa face**: peito → `torso.front`; costas → `torso.back`; ombro → `*.up` + topo das faces do braço; laterais → `torso.left/right`; mangas → faces dos braços. Se a foto mostra só a frente, crie costas coerentes (mesma base, faixas na mesma altura, número/nome se for camisa de time).
4. **Redesenhe em vetor** (rect, polygon, stroke, text) em vez de colar a foto inteira: fica nítido e editável. Use `image` com `ref:ID` só para logos/estampas que precisam ficar idênticos, recortados dentro da face e com a proporção original.
5. **Adapte a escala**: a face da frente tem 128×128 px (2×2 studs). Um logo de peito de verdade ocupa ~1/4 da largura: 28–40 px.
6. **Simplifique**: rugas da foto viram 2–3 dobras desenhadas; texturas complexas viram padrão simples repetido.
7. **Confira** com a checklist dos tutoriais e descreva no `name` o que foi feito.

## Erros vistos em testes reais (não repita)

- **Faixa sumida:** a foto tinha vermelho, preto, vermelho e a IA desenhou só o vermelho. Conte as linhas da grade de cima para baixo e reproduza CADA faixa, na ordem e com a altura proporcional.
- **Faixas do peito nas mangas:** a IA copiou as listras do tronco para os braços. Na manga, pinte só o que a foto mostra na manga (punho, barra). Tronco e manga são lidos separadamente.
- **Emblema virou bolinha:** estrela é `polygon` com 10 pontas alternando raio grande e pequeno; escudo, raio e coração também são polígonos. Respeite a cor do `spots`/grade e o tamanho (28–40 px no peito).
- **Fundo da foto como tecido:** o "." da grade é o fundo da foto, não a roupa: nunca pinte essa cor.
- **Resposta com texto em volta:** responda só com o JSON (o Studio até aceita "Aqui está:" antes, mas texto no meio quebra).

## Usando a referência só como estilo

Se o aluno disser "parecida com esta", copie paleta, tipo de gola, assinatura e proporções, mas crie a arte original (não reproduza marcas registradas de terceiros sem o aluno pedir; prefira o nome/logo da escola ou do time do aluno).
