# Mapa do template 585 x 559 (Shirt e Pants usam o MESMO mapa)

Escala: 64 pixels = 1 stud. O tronco clássico tem 2 x 2 x 1 studs, cada braço/perna 1 x 2 x 1, a cabeça 2 x 1 x 1.

## Faces (x, y = canto superior esquerdo; w x h)

| id | o que é | x | y | w x h |
|---|---|---|---|---|
| torso.up | topo do tronco: ombros e gola vista de cima | 231 | 8 | 128 x 64 |
| torso.right | lado DIREITO do personagem | 165 | 74 | 64 x 128 |
| torso.front | FRENTE do tronco (peito, barriga) | 231 | 74 | 128 x 128 |
| torso.left | lado ESQUERDO do personagem | 361 | 74 | 64 x 128 |
| torso.back | COSTAS | 427 | 74 | 128 x 128 |
| torso.down | base do tronco (entre as pernas) | 231 | 204 | 128 x 64 |
| right.up | topo do braço/perna direita | 217 | 289 | 64 x 64 |
| right.left | lado de dentro (encosta no tronco) | 19 | 355 | 64 x 128 |
| right.back | costas do membro direito | 85 | 355 | 64 x 128 |
| right.right | lado de fora | 151 | 355 | 64 x 128 |
| right.front | frente do membro direito | 217 | 355 | 64 x 128 |
| right.down | ponta: mão / sola do pé direito | 217 | 485 | 64 x 64 |
| left.up | topo do braço/perna esquerda | 308 | 289 | 64 x 64 |
| left.front | frente do membro esquerdo | 308 | 355 | 64 x 128 |
| left.left | lado de fora | 374 | 355 | 64 x 128 |
| left.back | costas do membro esquerdo | 440 | 355 | 64 x 128 |
| left.right | lado de dentro (encosta no tronco) | 506 | 355 | 64 x 128 |
| left.down | ponta: mão / sola do pé esquerdo | 308 | 485 | 64 x 64 |

Shirt: tronco + braços. Pants: tronco (cintura/quadril) + pernas, nas mesmas faces. Onde as duas pintam o tronco, a Shirt fica por cima; deixe a Shirt transparente embaixo se quiser mostrar o cinto da calça.

## Como as faces se encostam (para as costuras continuarem)

- Fileira do tronco, da esquerda para a direita: direita → frente → esquerda → costas, e a borda direita das costas volta para a borda esquerda de `torso.right`. Uma faixa horizontal em y=150 deve existir nas quatro faces na mesma altura.
- `torso.up`: a borda de BAIXO encosta no topo da frente; a de cima encosta no topo das costas. A gola fica no centro (x 263–327) e desce para a frente.
- `torso.down`: a borda de cima encosta na base da frente.
- Membro direito (x 19–281): dentro → costas → fora → frente, e a frente volta para "dentro". Membro esquerdo (x 308–570): frente → fora → costas → dentro.
- `*.up` fica acima da frente do membro; `*.down` abaixo da frente.
- Alturas: y=355 é o ombro/quadril, y=483 é o punho/tornozelo. Uma barra de manga curta termina em ~y 400–420 (o resto fica sem tinta = pele). Punho de manga longa: y 470–483. Tênis: y 455–483 nas quatro faces da perna + `*.down` como sola.

## Partes do corpo e o que fica onde

- Peito/logotipo: `torso.front` x 255–335, y 90–135. Botões e zíper: linha central x=295.
- Barriga/barra da camisa: `torso.front` y 185–202 (continua nas laterais e costas na mesma altura).
- Cintura/cinto da calça: y 146–158 das quatro faces do tronco. A calça pinta o tronco só de y 146 para baixo (quadril) e `torso.down`; acima disso e em `torso.up` fica transparente (camisa ou pele).
- Bolsos da calça: frente y 160–195, nos cantos; bolsos traseiros nas costas y 162–192.
- Ombro e manga: começam em `*.up` e no topo das faces do braço (y 355).
- Cotovelo ≈ y 410–420; joelho ≈ y 410–425 (dobras e remendos).
- No R15 as mesmas faces são esticadas sobre UpperTorso/LowerTorso e sobre braço, antebraço e mão (ou coxa, canela e pé): a parte de baixo de cada membro cai na mão/pé. Confira na Prévia 3D.
- A cabeça e o rosto NÃO fazem parte da roupa: o rosto é um Decal na Head e a cor da pele vem de BodyColors. Gola alta/capuz só podem ir até o topo do tronco (`torso.up`).

## Lados (o erro mais comum)

A imagem é vista de frente para o personagem. Por isso o lado ESQUERDO do personagem (`torso.left`, `left.*`) fica à DIREITA da frente na imagem. Um bolso "no peito esquerdo" vai em `torso.front` perto de x 320–350; o braço da braçadeira de capitão (braço esquerdo) é `left.*`.
