# Fazenda aconchegante e recursos naturais

Referência de experiência: Grow a Garden. A proposta usa leitura de recursos, plantio e loja; a paleta e montagem abaixo são próprias.

1. Crie FarmHUD com Resources no topo, SeedTray embaixo e SeedShop oculto. Deixe a plantação visível e clicável no centro.
2. Use creme [245,236,208], terra [91,65,43], verde-folha [74,132,69] e amarelo de colheita [246,188,64]. Erros usam vermelho queimado [188,68,55], não apenas outra tonalidade de verde.
3. Monte moedas e espaço de inventário em uma faixa pequena com fundo creme. Texto marrom escuro; fonte Gotham ou SourceSans para dados e FredokaOne somente no título.
4. Faça a bandeja com quatro sementes por página, cada uma com nome curto, quantidade e indicação de seleção. Não dependa de uma cor diferente para mostrar a semente equipada: acrescente contorno e texto Equipado.
5. Separe Plantar, Colher e Vender como ações do jogo. Só mostre a ação disponível no contexto real; um botão Colher não deve afirmar que há colheita pronta sem informação do sistema.
6. Construa a loja com linhas de produto e preço, categoria e duas ações claras: selecionar e fechar. Use UICorner discreto e UIStroke marrom de 1 px para parecer placa, sem textura pesada obrigatória.
7. Se houver tempo de crescimento, mostre estado Plantado/Pronto e uma barra vinculada aos dados. Evite atualizar um rótulo por planta a cada frame.
8. Crie mensagem vazia Sem sementes e alternativa Abrir loja. Para estoque esgotado, mantenha o preço visível e explique a indisponibilidade.
9. No celular, use bandeja acima dos controles de movimento, com sementes paginadas e loja em painel central de largura relativa. Não deixe o painel cobrir a confirmação de venda.
10. Confira plantio, seleção, estoque zero, nomes longos e retorno ao cenário. Um toque deve selecionar; não exigir hover.

Meta: poucos indicadores globais e uma única loja reutilizada. Placas sobre cada planta só quando necessárias; evite uma GUI completa em toda árvore do mapa.
