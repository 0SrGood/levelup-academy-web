# Diagnosticar: aparece no Explorador, mas não vai para a mão

| Sintoma | Conferir e corrigir |
| --- | --- |
| Objeto aparece no mapa, mas não no inventário | Tool deve ser classe Tool filha direta de StarterPack para distribuição inicial. Um Model/Tool no Workspace não é automaticamente coletado. |
| Está na mochila, mas não na mão | Selecionar slot ou chamar EquipTool na cópia da Backpack. Não confundir disponível com equipado. |
| EquipTool reclama do Handle | Nome exato Handle, BasePart, filho direto da Tool. Handle dentro de outro Model não é encontrado pelo contrato de pega. |
| Só Handle acompanha a mão | Soldar todas as BaseParts visuais finais. Models organizam, não são ligações rígidas. |
| Soldas aparecem, mas não fixam | Part0/Part1 devem referenciar peças existentes, Enabled=true. Soldas com ref antiga consumida por union precisam ser refeitas usando a união final. |
| Parte do instrumento fica no chão ou prende no cenário | Anchored=false em todas as partes equipáveis e CanCollide=false. Rever tamanho e Grip. |
| União do instrumento desaparece no clone | Conferir a versão atual do Studio Up: o renderizador foi corrigido para preservar a geometria CSG quando StarterPack clona a Tool para Backpack. Reiniciar Jogar depois de atualizar. Não trocar a união por blocos para esconder o defeito; se persistir, registrar o projeto e testar o clone. |
| Tool dentro de NPC continua no chão | Exige Tool filha direta do Model com Humanoid e RightHand/Right Arm; Handle direto e soldas finais válidas. Conferir edição e Jogar. Um Model sem Humanoid não equipa. |
| Mão segura a guarda/lâmina, arma flutua ou parece enorme | Recentrar Handle no meio do cabo, GripPos zero inicialmente, revisar escala do conjunto e inclinação. Ver empunhadura-e-npcs.md e espada-tool.json; não reaproveitar escala de espada de cenário. |
| Vai para a mão, mas fica de cabeça para baixo | Revisar orientação do Handle e GripOrientation em graus; conferir pivô e frente do objeto. Não girar apenas detalhes isolados. |
| Instrumento parece uma placa | Modelar espessura, laterais arredondadas, transições do braço e verso, além do tampo. Ver modelar-violao.md. |

Não é possível concluir pela imagem do Explorador se os WeldConstraints apontam para IDs certos. Leia o contexto/JSON, confira Handle, parent e conexões. Não afirme que as soldas funcionam apenas porque o nome Fixação aparece.
