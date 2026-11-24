# FPS competitivo e leitura rápida

Referência de experiência: RIVALS. A montagem abaixo é uma proposta original orientada a mira, placar, munição e estado de rodada.

1. Crie CompetitiveHUD com Scoreboard, RoundState, Crosshair, Ammo, Health e MatchMenu oculto. Não cubra o centro com cartões de informação.
2. Use grafite [20,24,32], texto claro [240,244,250], azul [48,139,238] e vermelho [231,65,80] para equipes opostas. Amarelo [245,190,44] marca rodada decisiva ou aviso, não toda a HUD.
3. Construa placar compacto no topo central com nome curto de cada equipe, pontuação e tempo. Defina uma largura relativa com limites práticos e teste nomes longos.
4. Monte a mira com dois ou quatro Frames pequenos em torno de AnchorPoint=[0.5,0.5], Position=[0.5,0,0.5,0]. Os Frames têm tamanhos em pixels; não criar um retículo gigante por Scale.
5. Mostre munição atual/reserva e nome da arma em um grupo próprio. Falta de munição usa número e texto Recarregar, além de cor.
6. Vida e habilidades devem ser legíveis sem exigir que o jogador leia uma descrição longa. Use Gotham/Oswald com números fortes e separação visual clara.
7. O estado de rodada aparece por mensagem curta: Preparação, Em jogo, Vitória/Derrota. Não use um popup que permaneça sobre a mira depois de começar a rodada.
8. Conecte placar, munição e temporizador ao estado real. Não use vários loops locais para contar o mesmo tempo, e não considere o cronômetro pausado se o sistema continua avançando.
9. No celular, ajuste mira e ações de toque à câmera e aos controles já disponíveis. Munição e recarga não devem disputar o mesmo alvo de toque do salto ou disparo.
10. Teste resolução baixa, nomes compridos, empate, munição zero, respawn e abrir/fechar menu. A mira não deve interceptar cliques: use elementos decorativos sem botão por cima da cena.

Meta: poucos objetos fixos no HUD e atualizações por mudança de estado. Evite animação, gradiente e sombra em cada número do placar.
