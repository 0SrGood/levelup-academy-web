---
name: levelup-scripts
description: Criar e ajustar scripts Luau de jogos no Studio Level Up usando as classes e APIs do projeto aberto.
---

# Scripts no Studio Level Up

Leia scripts e hierarquia existentes apenas quando houver acesso permitido. Se o código aparecer oculto por permissões, não o sobrescreva nem tente contornar a restrição. Peça para o usuário liberar Acesso a scripts quando necessário.

Use `create` de Script, LocalScript ou ModuleScript, ou `update` no ID existente; o código fica em `props.Source`. Escolha o contexto certo de execução e referências que existam após a sequência de operações. Para objetos novos, use refs no arquivo e nomes/caminhos coerentes no código Luau.

O Studio simula um subconjunto da API Roblox: confira o código e exemplos disponíveis no projeto. Não invente serviços ou funções que não estejam suportados. Prefira alterações pequenas e confira a Saída ao testar. Dê instruções de teste observáveis; não afirme executar um teste que não realizou.

Quando o pedido for modelar um objeto ou cenário, crie geometria editável usando as operações de modelagem, em vez de entregar somente um script que criará tudo durante Jogar. Use scripts para comportamento, interação e regras.

IDs de animação publicados neste editor pertencem ao mapa. Preserve o código do aluno fora do escopo da mudança. Nunca inclua senhas ou tokens de conta em scripts ou arquivos de resposta.

## Cliente, servidor e Remotes

Antes de criar Script, LocalScript, RemoteEvent ou RemoteFunction, leia [cliente e servidor](references/cliente-servidor.md): onde cada script roda (LocalScript num NPC não roda; use Script), lado certo de FireServer/OnServerEvent, fila do RemoteEvent, LocalPlayer só no cliente e cliques/teclado só em LocalScript. Personagem próprio: Model StarterCharacter em StarterPlayer (Humanoid, HumanoidRootPart e acessórios soldados com WeldConstraint).

## Animações de propriedades

Para movimentos do personagem e AnimationTrack, leia [o guia do Animate](references/animate.md). O jogador R15 já recebe os movimentos padrão em Jogar. Não criar um segundo controlador por Heartbeat; use faixas Action para ações temporárias e preserve o Animate do aluno.

TweenService está disponível: Create, GetValue, TweenInfo, Play/Pause/Cancel/Destroy e Completed. Leia [exemplos e limites reais](references/tweenservice.md) antes de criar movimentos, fades ou transições de GUI. A interpolação inclui UDim/UDim2, vetores, CFrame, cores e números.

## NPCs, direção e velocidade

Para criar NPCs, leia [o tutorial de movimento](references/npcs-movimento.md): MoveTo/MoveToFinished, altura R6/R15, juntas, RootPart, CFrame.LookVector, Velocity e AssemblyLinearVelocity. Ele inclui código executável, testes e os limites atuais. Não invente PathfindingService. Vale no MCP e no arquivo gratuito.

## Ambiente e iluminação

Para Lighting, Atmosphere, Sky e efeitos de tela, leia [o guia completo de iluminação](references/lighting.md): propriedades, exemplos por JSON e Luau, limites do modo Leve/Alta e testes de remoção. As aproximações do navegador e o orçamento do aparelho precisam aparecer na entrega; não prometer equivalência total ao Roblox nem estabilidade física sem medição.

## Consultas de geometria e recortes

Leia [consultas espaciais](references/consultas-espaciais.md) antes de criar detecção de alvo, passagem por portas CSG ou testes de área: Raycast, RaycastParams, OverlapParams, GetPartsInPart, GetTouchingParts e consultas de caixas/raio. CSG processado usa geometria final compartilhada; não gerar várias Parts invisíveis para simular recortes. O guia diferencia precisão real, caixa, envoltória convexa e os limites de MeshPart e filtros.

## Editor e diagnóstico

Leia [edição, colagem e análise](references/editor-scripts.md) ao orientar a correção de código. A análise de sintaxe usa o compilador Luau sem executar a resposta. Os avisos de nomes/inicialização são básicos, não um analisador completo de tipos. Nunca substituir testes em Jogar por uma mensagem de sintaxe válida.
