---
name: levelup-interfaces
description: Criar GUIs de jogos no Studio Level Up com oito estilos inspirados em experiências populares do Roblox, receitas práticas, responsividade e componentes editáveis.
---

# Interfaces no Studio Level Up

Leia o contexto, classes e propertyDefinitions. Crie GUIs editáveis com ScreenGui, Frame, TextLabel, TextButton e componentes suportados. Preserve o mapa e interfaces existentes fora do pedido. Não substitua a interface por uma imagem ou HTML externo.

## Escolher o estilo antes de construir

Se o usuário indicou um estilo, siga-o. Caso contrário, escolha pela função do jogo e explique brevemente a escolha. As referências abaixo foram pesquisadas em 22/11/2026; são releituras originais dos gêneros, não cópias de HUDs nem um ranking em tempo real. Consulte [pesquisa e fontes](references/fontes.md) para atualizar as referências.

| Estilo | Referências de experiência | Tutorial |
| --- | --- | --- |
| Simulador colorido, botões táteis | Steal a Brainrot e simuladores de coleção | [Passo a passo](references/simulador-colorido.md) |
| Fazenda aconchegante e recursos | Grow a Garden | [Passo a passo](references/fazenda-cozy.md) |
| RPG/anime com barras e habilidades | Blox Fruits | [Passo a passo](references/rpg-anime.md) |
| Roleplay limpo e menus funcionais | Brookhaven | [Passo a passo](references/roleplay-limpo.md) |
| Moda/editorial com foco no avatar | Dress to Impress | [Passo a passo](references/moda-editorial.md) |
| Terror minimalista e inventário | DOORS | [Passo a passo](references/terror-minimalista.md) |
| FPS competitivo e informação rápida | RIVALS | [Passo a passo](references/fps-competitivo.md) |
| Aventura natural e diário | Fisch | [Passo a passo](references/aventura-natural.md) |

Leia [base técnica e estados](references/base-tecnica.md) e o tutorial escolhido. Use [receitas executáveis](references/receitas.json) como exemplos de operações reais, adaptando nomes, texto e hierarquia ao projeto. No arquivo de contexto gratuito, o conteúdo dessas referências está em `skills[].references`, com path e content. No MCP, chame `levelup_skills` com name="levelup-interfaces" e reference="references/nome-do-guia.md". Não é necessário acesso à internet para ler os tutoriais empacotados.

Cada tutorial define paleta, composição, tipografia, hierarquia, passos de montagem, estados, adaptação ao celular, orçamento estrutural e checklist. Não misture as oito paletas na mesma interface. Não altere a interface da plataforma Level Up para imitar a GUI do jogo.

UDim2 usa `[escalaX,offsetX,escalaY,offsetY]`; AnchorPoint usa dois números. Position marca o ponto da âncora, e Size define dimensões. Não aplique o mínimo 0.05 de BaseParts a escalas ou offsets de GUI: são tipos diferentes.

Defina âncoras e escalas para caber em celular e computador. Preserve margens, contraste, tamanho legível e área de toque dos botões. UIListLayout pode organizar filhos; confira LayoutOrder, alinhamento e Padding disponíveis no contexto.

Botões devem ter ação compreensível. Para comportamento, crie LocalScript apenas com a permissão de scripts e com APIs disponíveis no simulador. Não altere a interface da plataforma Level Up quando o pedido se refere somente à GUI do jogo.

Devolva operações com resumo do estilo, hierarquia e como testar no editor e em Jogar. Não entregue botões que só parecem funcionar: use um LocalScript permitido ou informe que é uma prévia visual. A permissão Interfaces não libera automaticamente scripts ou publicação online.

Contornos e FontFace seguem o contrato de [base técnica](references/base-tecnica.md): pontos decimais, primeiro UIStroke por modo, Style/Weight e famílias locais compatíveis.
