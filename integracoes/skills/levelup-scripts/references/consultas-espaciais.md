# Consultas espaciais — MCP e arquivo gratuito

As consultas estão disponíveis em scripts Luau nos dois fluxos. Elas não fazem modelagem: crie o cenário editável com as operações do editor e use scripts para detectar alvos/áreas. Não substitua aberturas CSG por partes invisíveis ou colliders retangulares.

## Primeiro escolha a pergunta certa

- `workspace:Raycast(origem, direcao, parametros)`: primeira superfície atingida. A magnitude de `direcao` é a distância máxima, não precisa normalizá-la. Retorna nil ou resultado com Instance, Position, Normal, Distance e Material.
- `workspace:GetPartsInPart(sonda, parametros)`: volumes realmente sobrepostos à geometria da sonda e dos alvos. Uma sonda dentro da abertura de uma parede CSG não deve encontrar aquela parede.
- `part:GetTouchingParts()`: peças que tocam a geometria atual; CanTouch precisa estar habilitado nas duas peças neste runtime.
- `GetPartBoundsInBox(CFrame, Size, parametros)` e `GetPartBoundsInRadius(Vector3, raio, parametros)`: consultas de CAIXAS envolventes. Uma caixa pode cobrir a porta vazia de uma união. Não use Bounds como prova de que existe superfície nesse ponto.

## Raycast passo a passo

1. Obtenha a origem da peça existente, por exemplo HumanoidRootPart.
2. Use `root.CFrame.LookVector * distancia` para olhar para a frente (-Z local).
3. Exclua o personagem para não atingir seu próprio corpo.
4. Teste nil antes de acessar o resultado.
5. Use eventos ou intervalos razoáveis; não crie um loop por decoração.

```lua
local personagem = script.Parent
local root = personagem:WaitForChild("HumanoidRootPart")
local filtro = RaycastParams.new()
filtro.FilterType = Enum.RaycastFilterType.Exclude
filtro.FilterDescendantsInstances = {personagem}

local resultado = workspace:Raycast(root.Position, root.CFrame.LookVector * 30, filtro)
if resultado then
    print(resultado.Instance.Name, resultado.Distance, resultado.Position)
end
```

`FilterType.Include` aceita somente os objetos da lista e seus descendentes. `AddToFilter(objeto)` ou `AddToFilter({objeto1, objeto2})` adiciona referências. Não use nomes como se fossem instâncias.

Também existem IncludeInstances e ExcludeInstances; ExcludeInstances sempre exclui. Preserve uma lista simples para alunos iniciantes, sem combinar filtros desnecessariamente.

## Sonda e limite de resultados

```lua
local sonda = workspace:WaitForChild("Sonda") -- Part já criada pelo editor
local filtro = OverlapParams.new()
filtro.FilterDescendantsInstances = {sonda}
filtro.FilterType = Enum.RaycastFilterType.Exclude
filtro.MaxParts = 10 -- 0 consulta todos os resultados disponíveis

for _, alvo in ipairs(workspace:GetPartsInPart(sonda, filtro)) do
    print("Sobreposição real:", alvo.Name)
end
```

A sonda precisa estar dentro de Workspace. Ela pode ser Anchored e CanCollide=false; não precisa empurrar o jogador para fazer uma consulta. Resultados não têm ordem garantida.

## CanQuery, CanCollide e CanTouch

- Consultas padrão respeitam CanQuery. Uma peça com CanQuery=false não aparece nelas.
- `filtro.RespectCanCollide=true` usa CanCollide no lugar de CanQuery para decidir se uma peça entra na consulta.
- CanTouch controla eventos de toque e GetTouchingParts neste runtime. Desativá-lo não remove a peça de Raycast se CanQuery continuar true.
- Uma peça transparente pode continuar participando da física e das consultas conforme essas propriedades. Transparência não equivale a desativar lógica.

## CollisionFidelity e uniões

O Studio gera um asset CSG final indexado com BVH. A VM recebe posições, índices e aceleração em binário uma vez ao iniciar o jogo, por geometria única; clones compartilham a referência. Não escrever CSGMesh, CSGMeshKey ou LevelUpSolidKey em scripts/JSON: são campos internos derivados.

- Default e PreciseConvexDecomposition consultam a superfície final no Studio Up, preservando os recortes. O nome da opção é compatível, mas isso não significa que o motor implementa a decomposição convexa nativa do Roblox.
- Hull usa a envoltória convexa e pode fechar portas/buracos. Escolha PreciseConvexDecomposition para uma parede com passagem.
- Box usa a caixa envolvente de propósito e pode bloquear a passagem. Não é uma opção de precisão.

Mover, rotacionar ou redimensionar a união não precisa recalcular a booleana; as consultas aplicam a transformação ao asset imutável. Reparentar para ServerStorage/ReplicatedStorage retira o objeto da cena consultável. Clone preserva a referência geométrica e Destroy elimina a instância da consulta.

## Primitivas e orientação

Ball e Cylinder usam a malha primitiva do próprio renderizador. Ball usa o menor componente de Size como diâmetro. Cylinder usa X como comprimento e o menor Y/Z como diâmetro. Um cilindro vertical usa `Size=[altura,diametro,diametro]` e `Orientation=[0,0,90]` no JSON. Não ensinar cilindro com comprimento em Y sem rotacioná-lo.

## Limites reais

- MeshPart sem CSG usa sua caixa declarada nas consultas da VM, não os triângulos de um avatar deformado. Não prometer precisão de malha importada nesse caso.
- Part com Shape Ball, Cylinder, Wedge e CornerWedge usa a forma real: um raio sobre a rampa de uma cunha para na rampa (Normal inclinada), e o espaço acima dela fica livre.
- Sem CollisionGroups personalizados. CollisionGroup diferente de Default gera aviso de recurso não suportado, não um resultado silenciosamente incorreto.
- Tolerance deve ser zero. Não há Terrain/Water, Blockcast, Spherecast nem Shapecast.
- Consultas rodam sobre o DataModel do lado onde o script executa. Não tratá-las como acesso automático à física de outro servidor.
- Nenhum teste Node comprova FPS, memória total ou estabilidade de iPhone físico.

## Teste observável obrigatório

1. Crie uma parede com abertura real usando um negativo e uma UnionOperation.
2. Mire pela abertura: Raycast não deve atingir a parede; ao mirar a lateral deve atingir.
3. Ponha uma sonda pequena no vão e depois dentro da lateral sólida. GetPartsInPart deve distinguir os dois casos.
4. Repita com a união rotacionada, redimensionada e clonada.
5. Alterne Box, Hull e PreciseConvexDecomposition para conferir o comportamento esperado de cada opção.
6. Teste CanQuery, CanCollide, CanTouch, armazenamento fora de Workspace e Destroy.
7. Teste em Jogar e confira a Saída. Não afirmar execução desses testes sem realizá-los.

Referências primárias de comportamento: [WorldRoot](https://create.roblox.com/docs/reference/engine/classes/WorldRoot), [RaycastParams](https://create.roblox.com/docs/reference/engine/datatypes/RaycastParams), [OverlapParams](https://create.roblox.com/docs/reference/engine/datatypes/OverlapParams), [CollisionFidelity](https://create.roblox.com/docs/reference/engine/enums/CollisionFidelity). São referência para a API; os limites específicos acima são os do Studio Up.
