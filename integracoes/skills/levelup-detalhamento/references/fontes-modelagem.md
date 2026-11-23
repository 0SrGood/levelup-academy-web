# Referências consultadas e adaptação ao Level Up

Revisão: 23/11/2026. Estes links são fontes oficiais do Roblox para conceitos e referências visuais; os tutoriais locais e receitas JSON abaixo adaptam os conceitos às operações realmente disponíveis no Level Up. Não exigir acesso à web da IA gratuita: o texto de cada tutorial e os comandos acompanham o contexto exportado.

- [Solid modeling](https://create.roblox.com/docs/parts/solid-modeling): referência visual de combinar volumes, subtrair e separar. Consultar especialmente Colors and UVs para diferenciar cores de faces e cor única do resultado. No Level Up, usar create/negate/union/separate do contrato; não copiar GeometryService, Intersect, Sweep ou Fragment como se fossem operações locais disponíveis.
- [PartOperation / UsePartColor](https://create.roblox.com/docs/reference/engine/classes/PartOperation#UsePartColor): nome da propriedade para substituir a aparência por uma cor uniforme. A implementação local é conferida em engine.ts; a escolha de Color do cortador é verificada nos testes de CSG locais.
- [Work with parts](https://create.roblox.com/docs/tutorials/curriculums/building/work-with-parts): imagens das primitivas e ferramentas de mover/escalar/girar. É a base para escolher volumes, não o padrão final de qualidade de um asset detalhado.
- [PartType](https://create.roblox.com/docs/reference/engine/enums/PartType): referência de formas; Cylinder orientado pelo X local. O Level Up aplica ainda as regras específicas de escala de Cylinder e Ball descritas no contexto.
- [Parts](https://create.roblox.com/docs/parts): exemplos de composição de formas e modelagem sólida; útil para pensar em volume em vez de desenhar só uma face plana.
- [Materials](https://create.roblox.com/docs/parts/materials): referência de materiais e aparência. O conjunto de materiais e propriedades do Level Up é o de propertyDefinitions; não copiar MaterialVariant ou recursos de Terrain que não estejam no contrato.

## Tutoriais locais incluídos integralmente

1. cores-recortes.md — cores dos negativos, UsePartColor e uniões em etapas.
2. planejar-e-revisar.md — silhueta, seção, função e conferência em três vistas.
3. montanhas-e-rochas.md — planos inclinados, cristas e recortes assimétricos.
4. arvores-organicas.md — ramificações e copa modelada sem blocos em degraus.
5. objetos-urbanos.md — lixeira redonda e luminária com carcaça/abertura.
6. casinha-e-encaixes.md — entrada circular, cavidade, suporte e cobertura.
7. acabamento.md — espada, chanfros, haste circular e acabamento por componente.

As receitas são exemplos de modelagem, não uma promessa de que qualquer IA externa seguirá as instruções. O contexto deve exigir adaptação ao pedido, operações aplicáveis e revisão numérica, sem alegar uma prévia que não ocorreu.
