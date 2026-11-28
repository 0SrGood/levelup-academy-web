---
name: levelup-acessorios
description: Modelar e ajustar acessórios vestíveis no Editor de Acessórios do Studio Up, por JSON gratuito ou MCP, protegendo o rig e seus pontos de fixação.
---

# Acessórios vestíveis no Studio Up

Leia o [tutorial completo: modelar, encaixar e finalizar](references/modelar-e-finalizar.md). Para o catálogo, só a modelagem não conclui o item: é obrigatório preparar a malha única, gerar e conferir a textura PNG e validar. O JSON atual não aciona Preparar textura; explique essa etapa no resumo, sem inventar uma operação nem afirmar que publicou um item ainda sem PNG.

Use quando o pedido envolver chapéu, cabelo, máscara, colar, mochila, asas ou outro item preso ao corpo. Leia também levelup-acessorios-otimizacao (metas de triângulos e peças), levelup-modelagem, levelup-detalhamento e levelup-organizacao-otimizacao. O acessório usa Accessory; arma ou instrumento segurado usa Tool e levelup-tools. Não transforme o personagem inteiro numa união.

## Ler o contexto antes de criar

1. Leia `currentAccessory`: `folderId` é a oficina, `rigId` é o boneco de referência e `accessoryId` é o item aberto. Os IDs só podem vir do contexto. Se não houver item, crie uma Accessory na oficina e informe qual ponto do personagem será usado.
2. Localize o Handle (BasePart filho direto da Accessory), o Attachment dentro dele e o Attachment de nome idêntico no corpo. Meça as peças reais: um avatar personalizado pode ter proporções diferentes. Nunca mova, escale, negue nem una as peças do rig de referência.
3. Leia `propertyDefinitions` e a seleção. Planeje silhueta, cores, vista frontal/lateral/traseira e espaço livre para cabeça, braços e animação. Faça o objeto final, não um script que o construirá depois.

## Eixos, tamanho e encaixe

Unidades em studs. Blocos: Size=[largura X,altura Y,profundidade Z]; Position é o centro. Frente do personagem sem rotação é -Z, cima +Y. Orientation em graus, ordem YXZ, com números decimais usando ponto. Cada dimensão precisa ser >=0.05.

Cilindro tem comprimento no X local: para disco horizontal ou haste vertical use Size=[comprimento,diâmetro,diâmetro] e Orientation=[0,0,90]. Ball é esfera, não elipsoide: use dimensões uniformes. Para detalhes alongados, componha seções e recortes coerentes, sem tentar deformar uma Ball.

O encaixe obedece à transformação `corpo * attachmentDoCorpo * inverse(attachmentDoHandle)`. A Position do Attachment é LOCAL ao Handle; não copie coordenadas do mundo para esse campo. Girar esse ponto altera a orientação do acessório vestido. Ajuste primeiro o ponto, depois confira o Handle e a folga contra o corpo. Escala por eixo altera só a peça selecionada; escala uniforme do acessório é uma ação separada.

Pontos disponíveis: HatAttachment e HairAttachment na cabeça; FaceFrontAttachment na frente do rosto, FaceCenterAttachment no centro; NeckAttachment no pescoço; BodyFrontAttachment no peito e BodyBackAttachment nas costas; Left/RightShoulderAttachment nos braços; Left/RightCollarAttachment nos colarinhos; WaistFront/Center/BackAttachment na cintura. O nome no Handle deve ser exatamente igual ao do corpo.

## Receita de modelagem: chapéu com aba e copa vazada

1. Use a cabeça real como referência, sem editá-la. Crie uma Accessory com AccessoryType=Hat e um Handle que represente a copa. Comece com cinza [163,162,165] enquanto ajusta a forma; depois aplique a paleta solicitada.
2. Copa circular: cilindro de comprimento 0.8 e diâmetro 1.7, orientado [0,0,90]. Baseie a posição no topo da cabeça. Aumente a folga se o cabelo exigir.
3. Abra a copa por baixo com um cilindro cortador menor, da MESMA cor planejada para a superfície interna. Ele precisa intersectar a copa e ultrapassar o fundo. Faça negate no cortador e union com o volume positivo. O cortador isolado não abre um buraco.
4. Aba: disco de comprimento 0.12 e diâmetro 2.4, na base da copa. Faça um recorte central se a cabeça atravessar a aba. Adicione uma faixa estreita com cor deliberada. Confira o contorno circular nas três vistas; não use um bloco como substituto da copa.
5. Se a união consumir o Handle, renomeie o resultado como Handle e mantenha-o filho direto da Accessory. Recrie o Attachment no resultado, preservando seu frame de encaixe. Reconstrua soldas somente após o CSG: cada peça final deve estar ligada ao Handle, sem referências a cortadores consumidos.
6. Peças finais: Anchored=false, CanCollide=false, CanTouch=false. O editor ajusta o acessório vestido e suas soldas; valide o resultado antes de publicar no projeto. Catálogo público exige pedido explícito e aprovação própria.

Para uma máscara, modele a concha com volumes sobrepostos, recorte olhos e espaço do rosto e use FaceFrontAttachment. Para uma mochila, modele a seção com cantos trabalhados, bolsos e alças, mantendo BodyBackAttachment e folga dos braços. Para asas, crie penas/seções afiladas com Wedge e CSG, confira a simetria por reflexão e fixe no BodyBackAttachment; não una as asas ao torso.

## Cores, textura e custo

Recortes podem herdar a cor do negativo. Não use vermelho de depuração. Componente uniforme: Color final e UsePartColor=true; união multicolorida: false preservando as cores das faces. Só unir objetos não garante menos triângulos ou menor memória.

No editor, Prepare a textura converte a cópia de publicação numa malha com PNG. Modele e confira o encaixe antes dessa etapa. O PNG tem seis vistas; mantenha as ilhas alinhadas e não pinte guias na textura final. PNG transparente deixa partes da malha transparentes, não recorta geometria. Não invente textura, asset ID ou dados de malha. O editor importa imagens e permite pintar no 3D ou PNG; botão direito orbita, roda aproxima e dois dedos fazem o gesto de câmera. Ctrl+Z/Ctrl+Shift+Z desfazem/refazem pintura ou modelagem conforme a aba.

Limites atuais de publicação: 4000 triângulos, preferir até 2000, até 24 peças finais; texturas simples 512, médias 1024, máximo 2048. Confira também os limites reais do contexto. Não crie peças invisíveis em duplicidade nem loops por peça. Detalhe precisa melhorar a silhueta ou leitura; não multiplique peças apenas para atingir uma contagem.

## Entrega por arquivo gratuito e MCP

Ambos usam o mesmo contrato de operações: create, update, negate, union, intersect, subtract, separate e reparent, conforme `operations` do contexto. O gratuito recebe todas estas instruções, não apenas um link. Não invente uma operação accessory, bake ou publish quando ela não existir no contrato. Para mudar uma peça existente, por exemplo, use `{"op":"update","id":"ID_REAL_DA_PECA","props":{"Size":[1.7,0.8,1.7]}}` somente se ela for um bloco; para um cilindro vertical, as dimensões equivalentes são [0.8,1.7,1.7]. Substitua o marcador por ID real antes de entregar. O envelope, base do projeto e nome do arquivo seguem o exemplo da exportação atual; não gere o projeto inteiro.

Ao criar uma peça, use parent=accessoryId, ref próprio, vetores numéricos completos e dimensões válidas. WeldConstraint usa Part0=Handle e Part1=peça final com Enabled=true. Se criar uma Accessory nova, crie também seu Handle e o Attachment da categoria. Não remova o item atual para esconder um erro de encaixe.

Antes de responder: verificar IDs e referências, nome/parent do Handle, nome e frame do Attachment, rig intacto, soldas com IDs finais, tamanhos >=0.05, negativos consumidos, cores dos recortes, silhueta e orçamento. Explicar como vestir, andar, girar e testar o item. Não dizer que executou ou mediu algo quando só gerou JSON.
