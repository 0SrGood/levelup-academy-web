# Lighting no Level Up Studio

Use este guia no MCP e no arquivo gratuito. O contexto inclui classes, propertyDefinitions e scriptCapabilities.Lighting. Não confundir o navegador Level Up com o renderizador completo do Roblox. Lighting já é um serviço; altere o ID Lighting existente, não crie um segundo serviço. As classes de ambiente são filhas diretas dele.

## Planejar antes de aplicar

1. Leia as propriedades existentes e preserve efeitos fora do pedido. Para mudar um efeito já existente, update no ID; não crie outro com o mesmo nome a cada pedido.
2. Comece pela hora, Ambient/OutdoorAmbient, Brightness e exposição. Só depois adicione atmosfera e efeitos que ajudem a cena. Não transforme um pedido de iluminação em centenas de PointLights.
3. Planeje um efeito habilitado por classe. O Level Up considera o primeiro habilitado de cada classe em Lighting. O Roblox pode compor vários efeitos; o Level Up limita para controlar custo.
4. Teste em Editar e Jogar; altere Enabled, remova o efeito e confira que o resultado volta ao estado anterior. Teste Leve e Alta. Não force Alta por script, não reinicie a página para recuperar FPS e não prometa desempenho de um iPhone/PC que não mediu.

## Propriedades reais do serviço

| Propriedade | Tipo / intervalo Level Up | Uso |
| --- | --- | --- |
| Ambient, OutdoorAmbient | Color3 [r,g,b], 0..255 | Cor da luz ambiente. |
| Brightness | 0..10 | Intensidade da luz direta; zero é válido. |
| ColorShift_Top, ColorShift_Bottom | Color3 | Ajuste da cor da iluminação superior/inferior. |
| EnvironmentDiffuseScale, EnvironmentSpecularScale | 0..1 | Intensidade ambiental difusa/reflexos, respeitando o material e a qualidade disponíveis. |
| GlobalShadows | boolean | Sombras globais; modo Leve pode desativá-las. |
| ShadowSoftness | 0..1 | Suavidade das sombras. |
| LightingStyle | Soft ou Realistic | Intenção visual; nunca aumenta o orçamento do aparelho. Enum.LightingStyle.Realistic.Value=0, Soft.Value=1. |
| PrioritizeLightingQuality | boolean | Preferência preservada no projeto, limitada pela qualidade local. Não é uma garantia de qualidade/FPS. |
| ClockTime | 0..24, horas | 14.5 significa 14:30. O dia dá a volta em 24. |
| TimeOfDay | HH:MM:SS | Sincronizado com ClockTime; usar ponto em números decimais. |
| GeographicLatitude | -90..90, graus | Direção do percurso solar, sem alterar a hora. |
| ExposureCompensation | -5..5 | Exposição multiplicada por 2^valor; 1 dobra, -1 reduz à metade. Não confundir com Brightness. |
| FogColor, FogStart, FogEnd | Color3; distâncias 0..100000 | Névoa legada. Com Atmosphere, a atmosfera toma prioridade. Manter FogEnd maior que FogStart. |

## Filhos de Lighting

Atmosphere tem Density 0..1, Offset -1..1, Color/Decay Color3, Glare/Haze 0..10. A renderização é uma aproximação visual leve: não prometer a mesma dispersão física do Roblox. Ajuste Density/Haze gradualmente para preservar visibilidade; não usar valores extremos por padrão.

Sky define céu e corpos celestes: CelestialBodiesShown, SunAngularSize/MoonAngularSize 0..60 graus, StarCount 0..5000 e SkyboxOrientation [x,y,z] em graus YXZ. SkyboxBk/Dn/Ft/Lf/Rt/Up são as seis faces; SunTextureId e MoonTextureId definem imagens. Campos de asset são preservados em arquivos; confira os limites de carregamento descritos pelo contexto/renderer antes de prometer equivalência visual com um céu importado do Roblox. Não embuta seis imagens enormes; use imagens pequenas e compartilhadas. CelestialBodiesShown=false oculta sol, lua e estrelas.

Todos PostEffects têm Enabled. Eles só atuam quando filhos de Lighting; Camera não é objeto editável do projeto nesta versão. BloomEffect tem Intensity 0..10, Size 0..56 e Threshold 0..10 (o limiar pode superar 1 para HDR). ColorCorrectionEffect tem Brightness/Contrast/Saturation -1..1 e TintColor Color3. A correção deve afetar a cena 3D, não o texto da interface.

DepthOfFieldEffect tem FocusDistance/InFocusRadius em studs (0..100000) e NearIntensity/FarIntensity 0..1. Profundidade de campo é desfoque dependente da distância; não substituir por blur global e chamar de equivalente. Padrão Level Up começa com intensidades zero. SunRaysEffect tem Intensity/Spread 0..1. Os raios são uma aproximação de tela e não uma simulação volumétrica completa.

## Qualidade, limites e segurança

Modo Leve e dispositivos móveis não criam alvos de pós-processamento. Efeitos ficam preservados no projeto para computadores na qualidade Alta. Iluminação/atmosfera usam a versão simplificada. Sky/Atmosphere e efeitos não são idênticos ao motor Roblox. Sombras, reflexos e efeitos dependem da qualidade selecionada; PrioritizeLightingQuality não contorna o modo local.

Na Alta compatível, o motor reutiliza uma cadeia limitada e reduz a resolução dos efeitos. Não criar scripts que alternem Enabled a cada quadro: isso pode obrigar a reconstruir recursos. Para ciclo de dia/noite use um controlador com task.wait(0.2) ou mais; não uma conexão por parte/luz. Preserve a legibilidade do jogo e dos textos.

## Exemplo por arquivo gratuito / MCP

Adapte baseFingerprint e summary do formato de resposta exportado. commands:

```json
[
 {"op":"update","id":"Lighting","props":{"ClockTime":17.25,"Brightness":2,"Ambient":[65,60,80],"OutdoorAmbient":[110,95,115],"ExposureCompensation":0.1,"GlobalShadows":true}},
 {"op":"create","ref":"ar","cls":"Atmosphere","name":"Atmosfera do entardecer","parent":"Lighting","props":{"Density":0.2,"Offset":0.15,"Color":[220,205,190],"Decay":[120,110,150],"Haze":0.8,"Glare":0.1}},
 {"op":"create","ref":"cor","cls":"ColorCorrectionEffect","name":"Cor suave","parent":"Lighting","props":{"Enabled":true,"Brightness":0,"Contrast":0.05,"Saturation":0.08,"TintColor":[255,245,235]}}
]
```

O aluno deve conferir a mudança de hora e atmosfera no Leve; ColorCorrection só atua na qualidade compatível com pós-processamento. Reutilize o ID se esses objetos já existem. Para recusar custos, prefira remover/desabilitar um efeito ou escolher valores menores em vez de esconder limitações.

## Exemplo Luau: ajustar sem recriar

```lua
local L = game:GetService("Lighting")
L.TimeOfDay = "16:30:00"
L.Ambient = Color3.fromRGB(65, 65, 80)
L.ExposureCompensation = 0.15
local atmosphere = L:FindFirstChildOfClass("Atmosphere")
if not atmosphere then
    atmosphere = Instance.new("Atmosphere")
    atmosphere.Parent = L
end
atmosphere.Density = 0.2
atmosphere.Haze = 0.5
-- Só se o pedido precisa de ciclo de horário:
-- while true do
--     L.ClockTime = (L.ClockTime + 0.02) % 24
--     task.wait(0.5)
-- end
```

Não inventar Lighting:GetSunDirection, LightingChanged, SetMinutesAfterMidnight ou Camera se não constarem em scriptCapabilities. Changed e GetPropertyChangedSignal existentes podem observar propriedades. Primeiro confirme criação, roundtrip XML/JSON, scripts e remoção; testes Node não medem GPU ou memória física do Safari.

## Referências primárias

- https://create.roblox.com/docs/environment/lighting
- https://create.roblox.com/docs/reference/engine/classes/Atmosphere
- https://create.roblox.com/docs/reference/engine/classes/Sky
- https://create.roblox.com/docs/environment/post-processing-effects
- https://create.roblox.com/docs/reference/engine/enums/LightingStyle

### Orçamento do céu e pós-processamento

Skyboxes e imagens de sol/lua personalizadas carregam somente em Alta no computador. São no máximo oito imagens retidas, reduzidas para 512×512, com até 8 MB por arquivo de origem. Trocas cancelam carregamentos anteriores; bitmaps e texturas saem ao rebaixar a qualidade ou fechar. Leve/celular mantém a hora e atmosfera simplificadas.

Pós-processamento exige EXT_color_buffer_float; sem ela o motor conserva o caminho simples. Os alvos são DPR 1, no máximo 1024×768/786432 pixels. DOF diferencia NearIntensity/FarIntensity e respeita InFocusRadius; SunRays permanece uma aproximação por amostras da imagem. Nenhum desses limites garante FPS de aparelho físico não testado.
