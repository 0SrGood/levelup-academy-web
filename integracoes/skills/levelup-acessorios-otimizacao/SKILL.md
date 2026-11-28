---
name: levelup-acessorios-otimizacao
description: Modelar acessórios do Studio Up com boa forma e bom desempenho. A engine otimiza os triângulos sozinha; aqui ficam as regras de peças, peças arredondadas, partes escondidas, escala e textura.
---

# Acessórios: forma boa sem se preocupar com triângulos

Use sempre que modelar, corrigir ou revisar um acessório (chapéu, cabelo, óculos, colar, mochila, asas...). Leia junto levelup-acessorios e levelup-acessorios-textura.

## Quem otimiza é a engine

Ao preparar a textura (operação `accessory_texture` ou Textura → Preparar textura), a engine:

- junta todas as peças numa malha só;
- junta os vértices repetidos;
- se passar de 10.000 triângulos, simplifica a malha sozinha.

Por isso, **não piore a forma para economizar triângulos** e não escreva avisos de triângulos no resumo. Use curvas e cantos arredondados quando eles deixam o item mais bonito.

| Item | Limite |
|---|---|
| Triângulos | 10.000 (a engine simplifica acima disso) |
| Peças antes de preparar a textura | 24 |
| Textura PNG (6 vistas) | Normal (célula 256); máximo 2048 px no lado maior |
| Caixa do item | dentro da caixa do ponto (a validação mostra) |

## Peças arredondadas (round_part)

Para não fazer tudo com cantos retos, use `round_part` com `shape`:

| shape | Para que serve |
|---|---|
| cubo-chanfrado, cubo-arredondado, cubo-suave, cubo-quinas | blocos com borda suave (fivelas, caixas, pontes de óculos, botões) |
| cilindro-arredondado, coluna | hastes, alças, pernas de óculos, pinos |
| tubo, tubo-fino | canos, anéis grossos, chaminés de chapéu |
| aro, aro-fino | argolas, brincos, lentes redondas, auréolas |
| moldura (aro quadrado) | armação de óculos quadrada com cantos redondos (achate a altura e gire 90° em X), molduras |
| prisma | orelhas, pontas, bicos, telhadinhos |

As peças arredondadas não entram em union/negate: posicione, gire, escale e solde ao Handle.

## Regras

1. **Silhueta primeiro**: volumes grandes que já lembram o objeto de longe; detalhes depois.
2. **Detalhe muito pequeno vai para a textura** (costuras, logos, listras finas).
3. **Nada escondido**: peça dentro de outra, ou encostada no corpo e que nunca aparece, deve ser apagada.
4. **Simetria**: modele um lado e espelhe.
5. **Handle**: se não faz parte do visual, deixe-o pequeno e com Transparency 1. Peças com Transparency 1 não entram na malha nem na textura.
6. **Cores planejadas**: uma cor base por peça; o degradê e a sombra vêm da textura (levelup-acessorios-textura).
7. **Escala certa**: o item deve caber na caixa do ponto de fixação.

## Ao terminar (escreva no resumo)

- Peças usadas (inclusive as arredondadas) e o que ficou para pintar.
- Que a textura é preparada ao aplicar (accessory_texture) e que o usuário pode pintar por cima.
- Próximos passos: conferir as 6 vistas → Validar → Testar andando → Publicar.
