# Do modelo ao acessório pronto para o catálogo

## Antes de modelar

Leia `currentAccessory`: nome, IDs reais, partes, Handle, ponto e corpo de referência. Abra as peças editáveis antes de modificar uma malha já preparada. O botão de IA do editor restaura as peças quando necessário. A textura será preparada novamente depois da nova modelagem.

Meça o corpo real, não uma altura inventada. Frente é -Z do personagem; cima é +Y. Transforme esses eixos se o boneco estiver girado. O ponto é local ao Handle. Preserve Position/Size/Orientation do Handle quando apenas a aparência for solicitada; crie componentes em torno do ponto real e use soldas. Assim, a resposta não tenta desfazer ajustes de encaixe que o usuário fez enquanto a IA trabalhava.

## Receita 1: cartola com copa oca

1. Planeje copa circular, aba, faixa e a abertura interna. Use a receita executável em `responseExample`, cujos IDs e posições vêm do item aberto.
2. Copa: Cylinder Size=[0.8,1.7,1.7], eixo local X orientado para cima, base no topo da cabeça. O centro fica 0.4 stud acima da base.
3. Corte interno: Cylinder Size=[0.8,1.5,1.5], centro 0.3 stud acima da base. Ele ultrapassa o fundo e deixa 0.1 de tampa superior e cerca de 0.1 de parede lateral. Use a cor interna planejada.
4. Negue o corte e una com a copa. Use Color final e UsePartColor=true se a copa for uniforme. A aba é disco horizontal de 0.12 de espessura e 2.4 de diâmetro; a faixa tem 0.13 de altura e diâmetro 1.73. Adapte as medidas à cabeça e ao cabelo reais.
5. Preserve o Handle como raiz e o Attachment. Se a raiz só servir como suporte, Transparency=1; não substitua uma copa modelada por esse suporte invisível. Solde a copa final, a aba e a faixa ao Handle.
6. Confira a copa de cima, lado, frente e por baixo. A abertura precisa ser um recorte real. Não diga que a união ficou leve só por virar um objeto.

## Receita 2: máscara com olhos vazados

1. Use FaceFrontAttachment. Meça largura da cabeça e distância dos olhos. Faça uma concha de volumes arredondados sobrepostos; confira a silhueta lateral antes de detalhar.
2. Esculpa a cavidade que acomoda o rosto com um negativo maior pela parte de trás. Deixe espessura mínima 0.05; normalmente 0.1–0.15 facilita a leitura.
3. Dois cortadores atravessam a concha na altura dos olhos. Use formas inclinadas ou combinações de Cylinder/Wedge para expressão, mantendo as aberturas simétricas. Negar sozinho não abre o olho: aplique a união com a concha positiva.
4. Conserve partes com materiais diferentes separadas quando necessário; modele bordas, sobrancelhas e acabamento sem tampar o vazado. Não pinte preto para fingir um furo que precisa existir.
5. Use cores coerentes nos cortadores, faça soldas com os resultados finais e confira rosto, cabelo e animação. Prepare e revise a textura antes do catálogo.

## Receita 3: mochila trabalhada

1. Use BodyBackAttachment. Meça as costas e a folga dos braços. Crie corpo, bolso, alças e transições; uma caixa única não representa a mochila pronta.
2. Faça o corpo com seções e chanfros: volume principal, cortadores nos cantos e nas transições, negate e union. Primitivas Ball continuam esferas: não dependa de Size não uniforme para criar uma elipse.
3. Faça o bolso com profundidade própria e bordas suaves; zíper e costuras podem ser desenho na textura, sem centenas de pequenas peças. As alças devem contornar os ombros sem se fundir às partes articuladas do rig.
4. Solde cada componente final ao Handle. Teste olhando de frente, costas e lado, e durante caminhada; deixe espaço entre braços, mochila e corpo.

## Finalização obrigatória do catálogo

O catálogo recebe uma malha única com PNG; apenas criar Parts, CSG ou Model não conclui o item.

1. Termine a forma e o encaixe no modo Modelo. Rode Validar e corrija os erros.
2. Abra Textura e clique Preparar textura. O editor gera a cópia em malha única e o PNG com seis vistas e mantém as peças editáveis guardadas.
3. Confira frente, costas, esquerda, direita, cima e baixo. Pinte ou importe o PNG no formato gerado. Não importe o template de camisa como textura de acessório. Não deixe guias ou rótulos na textura final.
4. Acompanhe a prévia 3D: botão direito gira, roda aproxima e dois dedos controlam a câmera no toque. Um dedo/botão esquerdo pinta. Use Desfazer/Refazer para corrigir o desenho.
5. Valide novamente: até 4000 triângulos, preferir 2000; até 24 peças finais antes da preparação, textura até 2048 por dimensão. Respeite também a caixa máxima da categoria em `currentAccessory.limits`.
6. Teste andando, confira os recortes, costuras e cores e só então use Publicar → Catálogo, quando solicitado. A publicação continua sujeita à revisão.

No fluxo JSON atual não existe comando para acionar Preparar textura ou pintar no canvas. Não invente `bake`, `accessory_prepare_texture` nem IDs de textura. Entregue toda a modelagem suportada e explique no resumo os passos 2–6 que o usuário fará no editor. Diga explicitamente “modelagem pronta; falta preparar e conferir o PNG” se essa etapa ainda não aconteceu. Pelo MCP, consulte as ferramentas realmente disponíveis antes de afirmar que preparou a textura.

Para referências de forma, solicite uma foto frontal e lateral ou use as imagens anexadas pelo usuário; descreva os detalhes que consegue identificar, sem inventar o verso. Para proporções e eixos, o contexto do projeto é a referência técnica principal.
