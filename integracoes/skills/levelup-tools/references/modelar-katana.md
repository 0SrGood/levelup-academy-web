# Katana e armas de alto nível: como modelar com Parts, CSG e camadas

Use quando o pedido for espada, katana, machado, lança ou outra arma que precisa parecer **feita à mão**, não uma pilha de blocos. A receita executável é [katana-tool.json](katana-tool.json): 136 peças visuais, 3 uniões CSG e uma Tool equipável. Leia este guia antes de copiar, para adaptar com critério.

## O que separa uma arma ruim de uma arma ótima

Uma arma fraca tem: 3 a 6 blocos, uma só cor saturada, lâmina reta sem ponta, guarda retangular, cabo liso e escala errada (maior que o personagem). Uma arma de alto nível tem:

1. **Silhueta legível**: a forma reconhecível de longe (curva da katana, ponta inclinada, disco da guarda).
2. **Proporção real**: na katana, lâmina ≈ 2.5 × o cabo; total ≈ 0.8 da altura do personagem (≈4 studs num rig de 5).
3. **Camadas**: cada parte é várias peças finas sobrepostas, com cores próximas (claro, médio, escuro do mesmo material).
4. **Cortes de verdade**: ponta e furos feitos com negate + union, nunca com uma peça colorida fingindo o recorte.
5. **Pequenos detalhes**: colar (habaki), anéis (seppa), enfeites (menuki), tampa do pomo (kashira).
6. **Paleta contida**: aço (3 tons), metal dourado (2 tons), ferro escuro, e só uma cor de destaque (o trançado).

## Anatomia da katana (nomes usados nas peças)

| Parte | O que é | Como modelar no Studio |
| --- | --- | --- |
| Nagasa (lâmina) | 2.55 studs, levemente curva | 16 segmentos finos, cada um girado pela tangente da curva |
| Sori (curva) | a ponta desvia ~0.12 stud para as costas | linha central `x(s)=k·s²`, `k=sori/L²`; ângulo do segmento `-atan(2·k·s)` |
| Ha (fio) | borda cortante, mais fina | faixa de 0.026 de largura e 0.034 de espessura (o corpo tem 0.075) |
| Hamon | linha clara e ondulada perto do fio | 2 faixas por segmento com larguras alternadas (0.072, 0.084, 0.094, 0.084) |
| Shinogi | aresta que divide a lâmina | faixa de 0.014, cor mais escura, a 1/3 da largura a partir das costas |
| Mune (costas) | dorso grosso | faixa escura de 0.03 no lado +X |
| Bo-hi (sulco) | canal escuro nos primeiros 78% | faixa de 0.044, a cor mais escura do aço |
| Kissaki (ponta) | ponta com o bico do lado das costas | bloco + 2 cortadores inclinados (negate + union) |
| Yokote | linha que separa a ponta | faixa clara transversal de 0.014 |
| Habaki | colar dourado na base da lâmina | bloco 0.31×0.2×0.112 + friso escuro |
| Seppa | arruelas em volta da tsuba | 2 cilindros finos (0.03) dourados |
| Tsuba (guarda) | disco de ferro com 2 furos (hitsu-ana) | cilindro 0.07×0.6 + 2 cortadores; aro dourado em anel |
| Tsuka (cabo) | 1.04 stud, onde fica o Handle | alma clara (samegawa) + 14 faixas cruzadas (ito) |
| Menuki | enfeites sob o trançado | 2 placas douradas, uma de cada lado |
| Fuchi / Kashira | colar do cabo / pomo | blocos baixos; kashira com tampa dourada |

## Técnicas (servem para qualquer arma)

**Curva por segmentos.** Divida o comprimento em N partes (16 é suave; menos de 10 mostra degraus). Para cada segmento, calcule o centro na curva e gire em Z pelo ângulo da tangente. Sobreponha 0.03 de comprimento entre segmentos para não abrir frestas. Use a mesma fórmula para cada faixa da lâmina: posição = centro + `(u·cos φ, u·sin φ, 0)`, onde `u` é o deslocamento da faixa e `φ` o ângulo do segmento.

**Faixas sobrepostas em vez de textura.** Uma faixa mais grossa que o corpo (0.004 a 0.006 a mais) aparece dos dois lados, sem z-fighting. Uma faixa mais fina que o corpo some dentro dele; por isso o fio **substitui** uma tira do corpo (o corpo começa 0.025 depois do fio).

**Ponta por CSG.** Crie o bloco da ponta e um cortador quadrado grande (1.2) cuja face passa por dois pontos: canto das costas no topo e o fio um pouco acima da base. Gire pelo ângulo da reta (`atan2`) e afaste o centro meio cortador na normal. Um segundo cortador, mais raso, arredonda a curva (fukura). Envie `negate` dos cortadores e `union` com o bloco; depois `update` com `UsePartColor=true`.

**Anel por CSG.** Para um aro dourado em volta de um disco escuro: disco dourado maior, menos um cilindro "miolo" quase do mesmo diâmetro. Se o disco tiver furos, recorte o aro com cortadores próprios (os cortadores são consumidos pela primeira union).

**Trançado (ito).** Em cada altura, duas faixas giradas +34° e -34° formam um X; entre os X aparece a alma clara em losangos. Faixas um pouco mais largas e fundas que o cabo (0.3 × 0.19 contra 0.25 × 0.17) envolvem as laterais.

**Cores (RGB).** Aço 198,205,214; costas 132,139,150; sulco 104,111,124; hamon 228,232,237; fio 242,245,248; dourado 206,166,72 e 150,112,40; ferro 44,41,47; samegawa 236,231,218; trançado 92,54,166 (roxo Level Up). Material: Metal no aço e no dourado, SmoothPlastic no hamon e no fio, Fabric no trançado.

## Montar como Tool (segue levelup-tools)

- Tool em StarterPack; Handle invisível no centro da tsuka (origem da receita); GripPos `[0,0,0]`.
- Todas as peças `Anchored=false`, `CanCollide=false`, `CanTouch=false`, cada uma com WeldConstraint até o Handle, criadas **por último** (depois das unions).
- Organize em Models filhos da Tool: Lâmina, Habaki/seppa/tsuba, Tsuka. Models não precisam de solda; as peças dentro deles sim.
- Para outro tamanho de personagem, multiplique **todas** as posições e tamanhos pelo mesmo fator; não estique só a lâmina.

## Variações sem perder qualidade

- **Katana de fogo / temática**: troque só a cor do hamon (ex.: 255,140,40, Material Neon) e do trançado; mantenha o aço nas costas. Não pinte a lâmina inteira de laranja.
- **Wakizashi / tantō**: lâmina 1.6 / 1.0 stud, mesma tsuka encurtada (0.8 / 0.6).
- **Espada europeia**: lâmina reta (k=0), ponta simétrica (2 cortadores espelhados), guarda em barra e pomo em bola; mesmas faixas (fuller no lugar do bo-hi).

## Conferir antes de entregar

1. A silhueta lembra a arma de longe (ponta, curva, guarda)?
2. Há pelo menos 3 tons no aço e um recorte CSG real?
3. Nenhuma peça solta: cada BasePart da Tool tem solda até o Handle?
4. Tamanho total entre 3.5 e 4.5 studs para um rig de 5 studs?
5. Nenhum cortador sobrou visível (todos foram consumidos por union)?
6. Escreva no resumo quantas peças e uniões foram criadas e como equipar (número do slot).
