# TweenService no Level Up Studio

O serviço já existe no runtime. Use `game:GetService("TweenService")`; não criar TweenService com Instance.new nem adicionar um serviço ao Explorador. Funciona em Script para objetos do mundo e em LocalScript para GUI. O contexto inclui `scriptCapabilities.TweenService`.

## Movimento, cor e transparência

```lua
local TweenService = game:GetService("TweenService")
local porta = workspace:WaitForChild("Porta") -- peça existente, não Model
porta.Anchored = true
local tween = TweenService:Create(
    porta,
    TweenInfo.new(1, Enum.EasingStyle.Quad, Enum.EasingDirection.Out),
    {Position = porta.Position + Vector3.new(0, 5, 0), Transparency = 0.5}
)
tween:Play()
tween.Completed:Connect(function(estado)
    if estado == Enum.PlaybackState.Completed then
        print("Porta chegou ao destino")
    end
end)
```

`Create` prepara; `Play` inicia. `Pause` mantém a posição e interrompe a passagem do tempo; `Play` continua. `Cancel` encerra sem voltar automaticamente à pose inicial. `Destroy` encerra e descarta a tween. Completed recebe Completed ou Cancelled; não confundir os dois. Outra tween nas mesmas propriedades cancela a anterior; prefira uma tween por conjunto de propriedades.

## Interface e UDim

```lua
local TweenService = game:GetService("TweenService")
local painel = script.Parent -- Frame existente
local tween = TweenService:Create(painel, TweenInfo.new(0.3), {
    Position = UDim2.new(0.5, 0, 0.5, 0),
    BackgroundTransparency = 0.2
})
tween:Play()
local canto = painel:FindFirstChildOfClass("UICorner")
if canto then
    TweenService:Create(canto, TweenInfo.new(0.3), {
        CornerRadius = UDim.new(0.15, 8)
    }):Play()
end
```

Tipos suportados: number, Vector3, Color3, CFrame, UDim2, UDim, Vector2; boolean/EnumItem mudam no fim, sem valor intermediário. Propriedades precisam existir e o tipo do destino deve corresponder ao atual. Não passar strings em lugar de vetores/cores. Não animar propriedades de uma classe que não as possui, como Model.Position.

## Tempo e easing

`TweenInfo.new(tempo, estilo, direção, repetições, reverte, atraso)`. Defaults: 1 segundo, Quad, Out, 0 repetições, false, 0 atraso. Tempo/atraso finitos e não negativos; repetições inteiras, negativas para loop infinito. `reverte=true` volta ao início. Pause também suspende o atraso.

Estilos: Linear, Sine, Quad, Cubic, Quart, Quint, Exponential, Circular, Back, Bounce, Elastic. Direções: In, Out, InOut. `TweenService:GetValue(alpha, estilo, direção)` calcula o easing para alpha limitado a 0..1. Não inventar métodos: **SmoothDamp ainda não está implementado no Level Up**.

Teste com Jogar e confira posição/cor intermediárias, destino, pausa, cancelamento e Completed. Para mover várias peças sem deformar um modelo, use um pivô/assembléia suportado ou mova as peças em conjunto; não escalar posições arbitrariamente. Para poses de personagem, prefira o editor de animações/Motor6D. Não criar loops por peça para reproduzir uma tween que o serviço já resolve.

Referências da API original: [TweenService](https://create.roblox.com/docs/reference/engine/classes/TweenService), [TweenInfo](https://create.roblox.com/docs/reference/engine/datatypes/TweenInfo). O Level Up implementa o subconjunto descrito acima, não toda a engine Roblox.
