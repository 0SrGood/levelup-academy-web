# Base técnica para todos os estilos

Estas receitas são construções originais adaptadas ao Studio Level Up. Os jogos citados indicam famílias de experiência; não são medidas ou reproduções oficiais de seus HUDs.

## Montagem comum

1. Leia o contexto e as permissões. Descubra ScreenGuis já presentes para não sobrepor duas interfaces que fazem a mesma função.
2. Crie um ScreenGui em StarterGui e nomeie-o pela função. Crie Frames separados para HUD, menus e mensagens. Use refs únicas em todas as operações do arquivo.
3. Reserve margens iniciais de 16 px e espaço para controles do jogo. O movimento e o salto do celular precisam continuar acessíveis. Evite fixar tudo nos quatro extremos sem conferir a área útil.
4. UDim2 é `[scaleX,offsetX,scaleY,offsetY]`: centro com `Position=[0.5,0,0.5,0]`, `AnchorPoint=[0.5,0.5]`; painel com `Size=[0.9,0,0.7,0]` ocupa uma fração da área, sem presumir que o aparelho tem 1920 px. HUD no topo pode usar `Size=[1,-32,0,48]`, `Position=[0,16,0,16]`.
5. Separe hierarquia: fundo, conteúdo, texto e feedback. BackgroundTransparency=1 deixa o fundo invisível; 0 deixa opaco. ZIndex maior deve cobrir o menor. BorderSizePixel=0 evita a borda padrão quando houver UIStroke próprio.
6. Escolha uma fonte suportada: SourceSans, Gotham, FredokaOne, LuckiestGuy, Bangers, Roboto, Oswald ou Arial. Não invente FontFace ou fontes externas. Use TextSize legível e TextWrapped para rótulos longos; não dependa só de TextScaled para consertar qualquer tamanho.
7. Um botão tátil pode ter dois Frames: sombra deslocada 3 px abaixo e TextButton acima. O estado pressionado move o botão 2 px e reduz a sombra, em vez de aumentar brilho. UICorner com CornerRadius=[0,6] arredonda pouco; não aplique arredondamento a tudo.
8. UIStroke recebe Color RGB, Thickness e Transparency. UIGradient recebe Color como `[[0,r,g,b],[1,r,g,b]]` e Rotation. Tempos crescem de 0 a 1, inclusive os extremos; use dois pontos quando bastarem. Não use CSS, sombras externas, BlurEffect ou propriedades ausentes no contrato.
9. Para listas, use UIListLayout com FillDirection, Padding=[0,8] e alinhamento disponíveis no contexto. UIGridLayout, ScrollingFrame, UIPadding, UIScale e constraints não estão no catálogo atual: para coleções, faça poucas linhas de Frames e paginação por painéis. Não prometa rolagem nativa ausente.
10. Use ImageLabel/ImageButton somente com assets existentes e aprovados. Sem ícone disponível, componha um pequeno símbolo legível com Frames ou texto curto; não invente IDs de imagens nem copie logo de outro jogo.

## Estados e interação

- Construa normal, selecionado, pressionado, indisponível e feedback. Além da cor, use texto ou símbolo para deixar o estado claro.
- TextButton.AutoButtonColor pode dar feedback básico; ligar/desligar menus e efeitos exige LocalScript quando permitido. Sem permissão de scripts, entregue uma prévia visual e diga quais ações ainda não estão conectadas.
- Nomeie painéis e procure-os por nomes/caminhos reais no LocalScript. Use `MouseButton1Click` para abrir/fechar; altere Visible em vez de recriar dezenas de instâncias a cada clique. Evite um loop por botão.
- Campos de moedas, vida ou cronômetro devem vir do sistema do jogo; não entregue um contador fictício como se estivesse conectado.
- Preveja vazio, texto longo, saldo insuficiente, carregamento e erro. Não invente compra Robux ou resgate de código funcional sem backend disponível.

## Conferência em três formatos

Confira um celular estreito (aprox. 390×844), um celular deitado (844×390) e um notebook (1366×768). Esses valores são cenários de teste, não prova de teste realizado. Controles de toque importantes devem ter alvo próximo de 44 px ou maior, com espaço entre eles. Reduza quantidade visível e use páginas no celular em vez de comprimir oito botões numa linha.

Teste abrir, fechar, selecionar, pressionar, texto longo, valores zero e navegação repetida. Informe o que realmente testou. Reduza decoração e instâncias antes de sacrificar legibilidade. Os orçamentos dos tutoriais são metas iniciais ajustáveis, não promessa de FPS.

## Contorno proporcional

UIStroke.StrokeSizingMode aceita FixedSize (Thickness em pixels) e ScaledSize. Em ScaledSize na borda, Thickness é uma fração do menor lado do elemento; no texto Contextual, é fração do tamanho da fonte. Use Thickness=0.02 para uma borda de 2% do lado menor, ou 0.05 para texto com 5% da fonte. O valor 2 usado no modo fixo não equivale a 2 pixels no modo proporcional: passaria a uma fração 2, grande demais. Escolha explicitamente a espessura ao trocar modo. A propriedade funciona no editor, runtime Luau e importação/exportação Roblox.

Referências oficiais: https://create.roblox.com/docs/reference/engine/enums/StrokeSizingMode e https://create.roblox.com/docs/ui/appearance-modifiers. As instruções acima estão incluídas no contexto gratuito, sem exigir navegação externa.
