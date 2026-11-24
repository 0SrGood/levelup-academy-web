# Terror minimalista e inventário discreto

Referência de experiência: DOORS. A receita prioriza atmosfera e leitura sob pressão; não replica seus elementos visuais.

1. Crie HorrorHUD com Objective, ItemSlots, InteractionPrompt, Warning e Pause oculto. Deixe a maior parte da cena sem GUI.
2. Use carvão [23,22,21], bege claro [226,216,193], marrom [89,65,49] e vermelho discreto [184,61,52] para perigo. Evite fundo preto opaco sobre toda a cena enquanto o usuário joga.
3. Coloque um objetivo curto no topo com bom contraste e poucas palavras. Informação secundária aparece por tempo limitado, sem piscar continuamente.
4. Monte três a cinco slots de item, com símbolo, nome curto e quantidade. O item equipado recebe contorno; estado vazio permanece compreensível.
5. Prompt de interação informa a ação: Abrir porta, Pegar chave, Usar item. Tecla é complemento no computador; no celular precisa haver botão de toque.
6. Use fonte SourceSans/Gotham ou Oswald para títulos. Um estilo atmosférico não justifica texto excessivamente fino ou pequeno.
7. Construa menu de pausa em painel central, com Continuar, Configurações e Sair bem separados. Uma moldura simples basta; não empilhe transparências para imitar desfoque não suportado.
8. Feedback de perigo combina ícone/texto e um acento vermelho. Não criar flashes intensos, ruído animado em toda a tela ou tremor permanente como padrão do estilo.
9. No celular, mantenha inventário e interação afastados do joystick/salto. Dê margem a textos que crescerem em português.
10. Teste cena escura e clara, nenhum item, inventário cheio, interação indisponível e pausa. Não esconda comandos essenciais apenas para tornar o HUD mais cinematográfico.

Meta: até poucos indicadores permanentes e um controlador orientado a eventos; sem centenas de Frames para efeitos de ruído.
