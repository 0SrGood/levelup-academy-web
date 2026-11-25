# Cliente, servidor e Remotes

O Studio Level Up segue as regras do Roblox. No Laboratório, servidor e cliente rodam no mesmo aparelho. Mesmo assim, cada script tem um lado.

## Onde cada script roda

- **Script (servidor):** roda no Workspace (inclusive dentro de NPCs e de Tools largadas no chão), no ServerScriptService e na StarterGui.
- **LocalScript (cliente):** roda em StarterPlayerScripts, StarterCharacterScripts, StarterGui, ReplicatedFirst, dentro de uma Tool do jogador e no StarterCharacter.
- **Não rodam:**
  - LocalScript num NPC do Workspace. NPC não tem cliente; use um Script para os outros jogadores verem.
  - LocalScript no ServerScriptService ou no ReplicatedStorage.
  - Script no ReplicatedStorage, no ServerStorage ou em StarterPlayerScripts.
  - A Saída explica com um aviso.
- **ModuleScript:** roda só quando alguém chama `require`, no lado de quem chamou.

## Animate num NPC

Use **Script** dentro do Model do NPC. Personagem > Animate, com o NPC selecionado, coloca o Animate como Script e as animações no AnimSaves do rig. Para o jogador, o Animate é LocalScript em StarterCharacterScripts (ou dentro do StarterCharacter).

## RemoteEvent

- No **LocalScript**: `remote:FireServer(...)` envia; `remote.OnClientEvent:Connect(function(...) end)` recebe.
- No **Script**: `remote.OnServerEvent:Connect(function(player, ...) end)` recebe (o primeiro argumento é sempre o jogador); `remote:FireClient(player, ...)` e `remote:FireAllClients(...)` enviam.
- Usar do lado errado dá erro com a explicação. Exemplos: `OnServerEvent` num LocalScript, `FireServer` num Script.
- Um evento que chega antes de alguém ouvir fica na fila e é entregue no primeiro `Connect` ou `Wait`, como no Roblox.

## RemoteFunction

- No **Script**: `remote.OnServerInvoke = function(player, ...) return ... end`. No **LocalScript**: `local r = remote:InvokeServer(...)` espera a resposta.
- `OnClientInvoke` / `InvokeClient` existem, mas evite-os: se o cliente não responder, o servidor fica esperando.
- Definir o callback do lado errado dá erro.

## BindableEvent e BindableFunction

Servem para conversa dentro do mesmo lado: `Fire` com `Event`, e `Invoke` com `OnInvoke`.

## Só no cliente

- **`Players.LocalPlayer`:** é `nil` num Script; a Saída avisa. No servidor, use `Players.PlayerAdded` ou o `player` que chega no RemoteEvent.
- **Entrada do jogador:** cliques na interface (`Activated`, `MouseButton1Click`, `MouseEnter`...), `UserInputService` e `ContextActionService` **não disparam em Script**. Conecte num LocalScript e avise o servidor com `FireServer`.
- **Exceções, que funcionam no servidor:** `ClickDetector.MouseClick`, `ProximityPrompt.Triggered` e `Tool.Activated`.
- **`RunService:IsServer()` e `IsClient()`:** respondem conforme o lado do script.

## Segurança (como no Roblox)

- O servidor decide: pontos, dano, dinheiro e inventário mudam num Script.
- O LocalScript só pede, por RemoteEvent. No servidor, confira os argumentos que chegam: tipo, limites e distância.
- Nunca confie num valor de preço, dano ou pontos enviado pelo cliente.
