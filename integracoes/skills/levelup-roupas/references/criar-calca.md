# Calça (Pants) do jeito certo: cintura, pernas e calçado

## Onde a calça fica no template

- **Tronco: só da cintura para baixo.** Nas faces `torso.right`, `torso.front`, `torso.left` e `torso.back`, pinte de **y 146 até y 202** (quadril). De y 74 a 146 deixe transparente: ali aparece a camisa ou a pele. `torso.up` (ombros) NUNCA se pinta numa calça. `torso.down` (virilha) pinta inteiro.
- **Cós/cintura:** faixa de 10–14 px começando em y 146, nas 4 faces do tronco, na mesma altura. Cinto opcional por cima, fivela no centro (x 287–303).
- **Pernas:** as 4 faces de cada perna (y 355–483) + `*.up` (topo da coxa). `right.*` = perna direita (lado esquerdo da imagem).
- **Comprimento:** calça até y 455 (o resto é o calçado); bermuda até y ≈ 410–420 (o resto fica pele); short até y ≈ 385.

## Detalhes que fazem parecer calça de verdade

- Braguilha: stroke vertical no centro da frente (x 295, de y 158 até 200) + curva de costura.
- Bolsos frontais: curva saindo do cós nos cantos da frente; bolsos traseiros: polígonos (pentágono) nas costas, y 162–192.
- Costura lateral: stroke contínuo na face de fora de cada perna (x +4) e na de dentro.
- Joelho (y ≈ 412–420): 2 dobras curvas com alfa; desgaste em jeans (elipse clara com alfa).
- Barra: faixa de 4–6 px um tom mais escura logo acima do calçado.
- Tipos: **jeans** (azul, costura laranja, rebites), **moletom/jogger** (punho canelado no tornozelo, cordão na cintura), **social** (vinco central reto nas faces da frente/costas da perna, cinto fino), **legging/esportiva** (faixa lateral colorida, logo pequeno na coxa), **cargo** (bolsos grandes nas laterais da coxa com aba).

## Calçado SEMPRE (a calça é a única peça que veste os pés)

Pinte de y 455 a 483 nas 4 faces de cada perna e `right.down`/`left.down` (sola). Sem isso o personagem fica descalço.
- **Tênis:** cabedal (cor principal) y 455–476; **sola** branca ou de borracha y 476–483 + `*.down` inteiro na cor da sola; **biqueira** (bico) mais clara na face da frente; **cadarço** = 3–4 strokes em X na frente (x centro da face, y 458–470); **logo/faixa** lateral na face de fora (stroke curvo de 3 px ou polígono); **calcanhar** com reforço na face de trás.
- **Bota:** sobe até y ≈ 430, sola grossa (y 476–483) e cadarço até o topo.
- **Sapato social:** preto/marrom com brilho (stroke `#ffffff40`), sola fina, sem cadarço aparente.
- **Chinelo/sandália:** pele aparece; só a sola e 2 tiras.
- **Meia:** faixa clara de 4–6 px logo acima do calçado quando a calça for curta.

## Checklist da calça

- [ ] Tronco pintado só de y 146 para baixo + `torso.down`; `torso.up` transparente.
- [ ] Cós na mesma altura nas 4 faces.
- [ ] Pernas completas (4 faces + topo) até o calçado.
- [ ] Calçado nos pés de y 455 a 483 + solas nas faces de baixo.
- [ ] Sombras nas laterais, dobras no joelho, costuras, bolsos.
