# Planejar e animar

1. Identifique o movimento, duração, repetição e partes necessárias. Leia Motor6D C0/C1 e apoio do personagem.
2. Prepare uma pose neutra no tempo zero para as partes animadas. Preserve o que não foi pedido para alterar.
3. Divida a ação em antecipação, ação, sustentação e retorno. Distribua os tempos; não use só dois extremos em todo movimento.
4. Rotacione a junta local correta com amplitudes moderadas. Em R15 distribua o gesto entre ombro, cotovelo e punho; em R6 use os membros disponíveis, sem inventar antebraço.
5. Para aceno de 2 s: neutra 0; levantar braço 0.4; alternar punho/antebraço em 0.7, 1.0, 1.3, 1.6; baixar e retornar 2.0. Ajuste os sinais aos eixos C0/C1, não suponha que um sinal serve em todos os rigs.
6. Para caminhada: contato esquerdo 0; descida 0.15; passagem 0.3; contato direito 0.5; repetir espelhado até 1.0. Coordene braço oposto à perna, flexão de joelho, apoio e pequena oscilação vertical do tronco. Feche o ciclo sem salto.
7. Para idle: movimento leve de tronco/cabeça de 0 a 2 s, retorno contínuo e pouca amplitude. Não mova todo o rig para simular respiração.
8. Use Cubic para suavidade; Linear para cadência uniforme; Constant para poses deliberadamente marcadas. Bounce/Elastic só quando combinarem com a ação.
9. Confira números, tempos, nomes, limite de chaves e continuidade. A reprodução termina no último keyframe: inclua um quadro final na duração desejada, não apenas altere length.
10. Entregue JSON carregável e resumo. Oriente o aluno a Tocar, ajustar as poses no editor e Salvar; informe o que foi verificado numericamente e o que ainda depende de prévia visual.
