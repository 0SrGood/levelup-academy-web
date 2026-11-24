# Orientação de objetos: para onde cada coisa aponta

Antes de entregar, confira a direção de **todo** objeto que tem frente, ponta ou lado certo. Não chute ângulos: escolha o eixo, faça a conta com um vetor e corrija.

## 1. Os eixos do Studio Up (iguais aos do Roblox)

| Direção | Eixo | Observação |
|---|---|---|
| Frente | **-Z** | É o `LookVector`. Personagens, NPCs, carros, cadeiras e placas olham para -Z. |
| Trás | +Z | Encosto da cadeira, porta-malas, parte alta da WedgePart. |
| Direita | +X | `RightVector`. |
| Cima | +Y | `UpVector`. |

- `Orientation=[X,Y,Z]` em graus, ordem YXZ. Para virar um objeto inteiro para outro lado, gire **só em Y**: `[0,180,0]` olha para +Z, `[0,90,0]` olha para -X, `[0,-90,0]` olha para +X.
- Para um conjunto (Model), gire em volta de um pivô: cada peça muda Position (`P'=C+R*(P-C)`) **e** Orientation. Girar só a Orientation de cada peça desmonta o objeto.

## 2. Formas com eixo próprio

| Forma | Eixo que conta | Como deixar certo |
|---|---|---|
| Cylinder | comprimento no **X local** | Em pé: `Size=[altura,d,d]`, `Orientation=[0,0,90]`. Deitado para a frente: `Orientation=[0,90,0]`. Entre dois pontos: `cylinder_between`. |
| WedgePart | alta atrás (+Z), rampa virada para a frente (-Z) | Rampa que sobe para a frente: `Orientation=[0,180,0]`. |
| CornerWedgePart | bico em cima no canto (+X,+Z) | Gire em Y de 90 em 90 até o bico ficar no canto certo. |
| SurfaceGui / Decal | `Face="Front"` = lado -Z da peça | Placa virada para quem chega pela frente: Face Front e a peça com frente para o jogador. |

## 3. Objetos com frente (cenário)

- **Cadeira, banco, sofá, trono**: assento no meio, encosto em +Z (atrás), pernas embaixo. Quem senta olha para -Z.
- **Mesa com cadeiras**: cada cadeira olha para o centro da mesa, com o encosto do lado de fora. Cadeira em +Z da mesa: `[0,0,0]`; em -Z: `[0,180,0]`; em +X: `[0,90,0]`; em -X: `[0,-90,0]`. Regra: `Orientation.Y=θ` faz a frente apontar para `(-sen θ, 0, -cos θ)`.
- **Carro, nave, barco**: frente (faróis, bico) em -Z, rodas com o eixo do Cylinder em X (`Orientation=[0,0,0]` e `Size=[largura,d,d]`).
- **Porta**: dobradiça num lado (X), abre girando em Y em volta da dobradiça, não do centro.
- **Placa, quadro, tela, TV**: frente em -Z, texto na Face Front.
- **NPC e estátua**: rosto em -Z. Para olhar o jogador que vem de +Z: `Orientation=[0,180,0]`.
- **Lâmpada, poste, tocha de parede**: haste em pé (+Y); a luz/chama fica na ponta de cima.
- **Seta, placa de direção**: a ponta aponta para onde o caminho segue; confira o sinal (+X ou -X) com um vetor.

## 4. Objetos de mão (Tool): como o Roblox segura

O Studio Up segura igual ao Roblox: ao equipar, o **braço direito vai para a frente** (animação toolnone) e a ferramenta sai da mão. Por isso:

1. Monte a ferramenta **em pé**: cabo embaixo, a parte que trabalha (lâmina, cabeça do martelo, chama da tocha, picareta) subindo em **+Y**.
2. O **Handle** fica no meio do cabo, sem rotação (`Orientation=[0,0,0]`). Quem gira são as peças visuais.
3. `GripPos=[0,0,0]` e `GripOrientation=[25,0,12]`: a lâmina fica em pé e levemente inclinada para a frente, como no Roblox. Não use Grip para consertar uma arma montada deitada.
4. Gume, ponta de lança, cabeça de machado e de martelo viram para a **frente (-Z)**. Guarda (cruzeta) atravessada em X.
5. Arma de fogo e varinha: cano/ponta ao longo de **-Z** (para a frente), com Handle na empunhadura; nesse caso a peça comprida fica em Z, não em Y.

## 5. Autocorreção antes de entregar (faça sempre)

Para cada objeto com frente ou ponta:

1. Escreva no `plan`: "frente = -Z", "ponta = +Y" etc.
2. Calcule as duas extremidades da peça principal: `Position ± R*(meio comprimento no eixo local)`. Confira se a ponta certa está do lado certo.
3. Se a ponta ou a frente estiver invertida, corrija **o conjunto inteiro** girando no pivô (passo 1), não peça por peça.
4. Se o Studio devolver uma revisão dizendo "arma deitada", "lâmina para o chão", "Handle girado" ou "objeto de costas", leia o motivo, corrija só o que ele aponta e mande o arquivo inteiro de novo.

Erros mais comuns:

- Usar `CFrame.lookAt` como Orientation de um Cylinder: lookAt aponta o -Z, mas o cilindro cresce em X.
- Copiar o mesmo ângulo para os dois lados de algo simétrico (galhos, cadeiras em volta da mesa): os lados opostos têm sinais opostos.
- Girar o Handle para "arrumar" a arma: o Handle gira a ferramenta inteira; deixe-o `[0,0,0]`.
- Somar ângulos de duas rotações como se fosse uma rotação só.
