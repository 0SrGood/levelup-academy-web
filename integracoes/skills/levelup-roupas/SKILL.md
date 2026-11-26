---
name: levelup-roupas
description: Criar Shirt e Pants clássicas (585x559) no Editor de Roupa do Studio Level Up por JSON gratuito ou MCP, com mapa de faces, medidas do corpo, camadas, sombras, referências e exemplos completos.
---

# Roupas clássicas (Shirt e Pants) no Studio Level Up

Use quando o aluno pedir camisa, calça, farda, uniforme, jaqueta, vestido, moletom ou qualquer roupa 2D do personagem. A roupa é uma imagem de 585 x 559 pixels com fundo transparente, dividida em faces que embrulham o corpo como uma caixa de papel. Antes de desenhar, leia [o mapa do template](references/mapa-template.md); para deixar bonita, siga [os tutoriais de arte](references/design-roupas.md) (paleta, sombras, dobras, costuras, tecidos); com foto do aluno, use [da referência para o template](references/referencia-para-template.md); para **calça**, siga [calça e calçado](references/criar-calca.md) (cintura em y 146, sempre com tênis/calçado); copie o padrão de [exemplos completos](references/exemplos-roupas.json).

## Pense como um criador de clothing profissional

1. Conceito em 1 frase + 1 elemento-assinatura. 2. Paleta 60-30-10 com 3 tons por cor. 3. Mapa: onde cada costura/faixa passa em TODAS as faces. 4. Camadas do grande para o pequeno. 5. Sombra e luz sempre (nunca cor chapada). 6. Detalhes pequenos (costura, etiqueta, botão, rebite). 7. Conferir girando o personagem. Funciona mesmo sem referência: use os tutoriais.

## Ferramentas do Editor de Roupa (o aluno usa as mesmas)

Selecionar (V: mover, redimensionar pelos cantos, girar imagem, alinhar na face com guias inteligentes), Pincel (B), Borracha (E), Balde (G: face ou todas as faces), Formas (U: retângulo, elipse, linha, triângulo, cheio ou contorno), Texto (T), Conta-gotas (I), Mão (H), Zoom (Z), camadas com opacidade, histórico, guias, prévia 3D R15/R6, imagens e fotos de referência. Tudo que a IA entrega vira item editável: o aluno pode mover e ajustar depois, então organize em camadas com nomes claros (Base, Recortes, Costuras, Sombras, Estampa, Textura).

## Como responder

- Responda SOMENTE com um JSON `{"format":"levelup-clothing-design","version":1,"data":{...}}`. Pelo MCP, use o comando `{"op":"clothing_draft","data":{...}}` (o Editor de Roupa precisa estar aberto).
- `data` = `{v:1, kind:"Shirt"|"Pants", name, layers:[...], references:[]}`. O Studio repõe as referências do aluno sozinho; não copie base64.
- Cada camada: `{id, name, visible:true, opacity:0..1, items:[...]}`. Até 24 camadas, 2000 elementos e 50 mil pontos no total.
- Elementos (coordenadas em pixels, origem no canto superior esquerdo):
  - `rect {x,y,w,h,color}` e `ellipse {x,y,w,h,color}` (x,y = canto superior esquerdo da caixa).
  - `polygon {points:[[x,y],...],color}` (3 pontos ou mais): golas em V, bolsos, recortes, faixas diagonais.
  - `stroke {points:[[x,y],...],width,color}`: costuras, zíper, cadarço, dobras, contornos. `erase:true` apaga.
  - `text {x,y,text,size,color}`: nome, número, marca. `size` em pixels (mínimo legível: 12).
  - `image {source:"ref:ID",x,y,w,h}`: usa uma foto de referência anexada pelo aluno (o ID vem em currentClothing.references).
- Cores `#RRGGBB` ou `#RRGGBBAA` (o AA dá transparência: ótimo para sombras e dobras).
- Tudo fora das faces é cortado automaticamente e não aparece. Pode usar um retângulo grande para pintar uma fileira inteira de faces de uma vez.
- Partes sem tinta ficam transparentes e mostram a pele/cor do corpo (BodyColors). Manga curta = pintar só a parte de cima das faces do braço.

## Roteiro (faça nesta ordem, cada etapa numa camada)

1. **Base**: cor do tecido em todas as faces que a roupa cobre (torso; braços ou pernas). Decida manga curta/longa, comprimento da calça.
2. **Volume**: laterais e costas 6–12% mais escuras que a frente; gradiente com faixas `#000000` de alfa 10–20 nas bordas; nunca uma cor chapada única.
3. **Recortes e peças**: gola, punhos, barra, bolsos, cinto, painéis laterais, capuz, zíper, botões. Gola e ombro continuam na face `torso.up`.
4. **Costuras e dobras**: strokes finos (1–2 px) um tom mais escuro ou mais claro; dobras curvas nos cotovelos/joelhos e na cintura, com alfa baixo.
5. **Marca e texto**: logo/peito na frente (centro x 295, y 100–130), número grande nas costas (centro x 491), nome acima do número.
6. **Textura do tecido** (opcional): trama em pontos ou listras muito finas com alfa 8–15 (DryFit, jeans, tricô).
7. **Conferir**: as costuras batem de uma face para a vizinha? Frente e costas combinam? Nenhum texto cortado na borda? Faces de cima/baixo pintadas?

## Erros que deixam a roupa feia

- Desenhar fora das faces ou atravessar o vão entre faces esperando que continue: cada face é um lado separado do corpo.
- Logo invertido ou na face errada (lembre: `torso.left` é o lado ESQUERDO do personagem, à direita da frente na imagem).
- Esquecer `torso.up` (ombros), `torso.down`, as faces de cima/baixo dos braços e pernas: aparecem buracos de pele.
- Pintar o fundo todo de branco/preto opaco: o template precisa continuar transparente fora das faces.
- Texto miúdo (< 12 px) ou encostado na borda: some no jogo.
- Só retângulos chapados sem sombra, costura e detalhes: parece "caixa".
- Inventar que viu a foto de referência sem tê-la aberto. Se não conseguir ver a imagem, diga e peça para anexar no chat.

## Testar

A prévia 3D ao lado do desenho mostra a roupa no R15 e no R6 (gire, aproxime). Depois de Aplicar, o aluno usa "Testar no selecionado" ou "Publicar roupa": publicar cria um ID local (mesma numeração das animações, sem repetir) em ServerStorage > Clothes, e Shirt.ShirtTemplate / Pants.PantsTemplate aceitam esse ID.
