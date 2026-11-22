---
name: levelup-interfaces
description: Construir e ajustar GUIs de jogos no Studio Level Up com hierarquia, posicionamento e propriedades editáveis.
---

# Interfaces no Studio Level Up

Leia o contexto, classes e propertyDefinitions. Crie interfaces como instâncias ScreenGui, Frame, TextLabel, TextButton e componentes suportados, usando refs para a hierarquia. Não substitua interfaces editáveis por uma imagem ou HTML externo.

UDim2 usa `[escalaX,offsetX,escalaY,offsetY]`; AnchorPoint usa dois números. Position marca o ponto da âncora, e Size define dimensões. Não aplique o mínimo 0.05 de BaseParts a escalas ou offsets de GUI: são tipos diferentes.

Defina âncoras e escalas para caber em celular e computador. Preserve margens, contraste, tamanho legível e área de toque dos botões. UIListLayout pode organizar filhos; confira LayoutOrder, alinhamento e Padding disponíveis no contexto.

Botões devem ter ação compreensível. Para comportamento, crie LocalScript apenas com a permissão de scripts e com APIs disponíveis no simulador. Não altere a interface da plataforma Level Up quando o pedido se refere somente à GUI do jogo.

Devolva operações com resumo da hierarquia e como testar no editor e em Jogar. A permissão Interfaces não libera automaticamente scripts ou publicação online.
