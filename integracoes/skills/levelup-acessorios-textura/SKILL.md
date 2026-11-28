---
name: levelup-acessorios-textura
description: Gerar a textura de acessórios do Studio Up no estilo low poly da Level Up - cores saturadas, degradê mais claro em cima e mais escuro embaixo, com sombra - usando a operação accessory_texture.
---

# Textura de acessórios: degradê saturado com sombra

Use sempre que criar ou refazer um acessório. A textura é o último passo da resposta.

## O estilo

Como os modelos low poly de árvore e montanha: cada peça tem uma cor forte; **em cima ela fica mais clara e mais saturada, embaixo mais escura**. As faces viradas para cima e para a frente recebem luz; as viradas para baixo ficam na sombra. Nada de cinza sem graça: escolha cores vivas.

## A operação

Última operação da resposta, com o Editor de Acessórios aberto:

```json
{"op":"accessory_texture","style":"gradiente","size":256,
 "parts":[{"id":"armacao","top":[70,170,255],"bottom":[20,60,150]},
          {"id":"lente","top":[200,240,255],"bottom":[90,150,210]}]}
```

- `style`: `"gradiente"` (padrão, degradê com sombra) ou `"liso"` (só a cor da peça).
- `size`: 128 (leve), 256 (normal) ou 512 (detalhado).
- `parts` (opcional): o topo e a base do degradê de cada peça (id ou ref). Sem `parts`, a engine calcula o degradê a partir da `Color` da peça (topo mais claro e saturado, base cerca de 40% mais escura).

## Como escolher as cores

| Peça | top (em cima) | bottom (embaixo) |
|---|---|---|
| Folhas, gorro verde | [150, 225, 110] | [45, 120, 55] |
| Madeira, couro | [215, 160, 110] | [120, 70, 45] |
| Azul (lente, armação) | [90, 180, 255] | [25, 70, 160] |
| Rosa, lilás | [255, 160, 215] | [170, 60, 140] |
| Pedra, metal | [190, 195, 215] | [95, 100, 125] |
| Preto (armação) | [85, 88, 100] | [25, 26, 32] |

Regras:

1. O topo é sempre mais claro que a base, da mesma cor (mesmo matiz).
2. Satura: evite cinza puro, a não ser em metal e pedra.
3. Peças vizinhas precisam de contraste (armação escura e lente clara; faixa colorida em chapéu escuro).
4. Detalhe pequeno (listra, botão, logo) é pintado pelo usuário depois, por cima do degradê.

## O que a engine faz

- Junta as peças numa malha só, simplifica se precisar e cria o PNG das 6 vistas (frente, direita, costas, esquerda, cima e baixo).
- Pedaços que ficariam um atrás do outro (a lente atrás da armação, a haste atrás da lente) ganham um lugar próprio no PNG, para a cor de um não pintar o outro.
- Guarda as peças editáveis na Oficina.

## No resumo

Diga quais cores usou em cada peça e que o usuário pode pintar por cima na aba Textura (3D ou PNG).
