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
