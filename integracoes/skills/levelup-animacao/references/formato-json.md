# Arquivo de animação gratuito

Copie rigId, baseFingerprint e fingerprintScope de responseExample. Não invente nem recalcule esses valores. O envelope é:

```json
{"format":"levelup-ai-animation","version":1,"fingerprintScope":"rig-v2","rigId":"COPIAR_DO_CONTEXTO","baseFingerprint":"COPIAR_DO_CONTEXTO","name":"Olhar de saudação","summary":"A cabeça gira suavemente e retorna à pose neutra em um segundo.","data":{"v":1,"rig":"R15","length":1,"loop":false,"priority":"Action","keys":{"Head":[{"t":0,"r":[0,0,0],"e":"Cubic"},{"t":0.5,"r":[0,12,0],"e":"Cubic"},{"t":1,"r":[0,0,0],"e":"Cubic"}]}}}
```

O exemplo exige Head em editableParts e rig R15. Adapte ao tipo e nomes reais. Cada lista em keys contém todos os quadros finais daquela parte: a importação substitui o rascunho inteiro, não mescla automaticamente as listas. Preserve quadros anteriores quando o aluno pedir apenas um ajuste.

Cada quadro: t em segundos; r=[X,Y,Z] em graus locais; p=[X,Y,Z] opcional em studs locais; e conforme animationRules.easing. Tipos de rig R6 ou R15, prioridades Core/Idle/Movement/Action, easings Linear/Constant/Cubic/Elastic/Bounce. Respeite os valores do contexto caso sejam atualizados.

Também se aceita data diretamente como JSON independente com v, rig, length, loop, priority e keys. Isso exige partes compatíveis e passa por revisão, sem vínculo de fingerprint a uma exportação. Prefira o envelope vinculado ao contexto quando ele existir.

Não use posições globais do mapa em p, nem radianos em r. Não retorne frames vazios ou nomes como LeftArm se o rig expõe LeftUpperArm. Não duplique t na mesma parte. Não force ângulos absurdos para atravessar uma limitação.

A verificação rig-v2 confere partes, dimensões e juntas do personagem. Sair/reabrir o laboratório, mudar a câmera, o rascunho, a aparência ou outro objeto do mapa não invalida o arquivo. Alterar a estrutura do rig exige novo contexto. Arquivos antigos sem fingerprintScope podem ser carregados como nova animação após validação das partes, com aviso de revisão das poses. A importação nunca sobrescreve automaticamente animações salvas; o rascunho atual é substituído somente ao confirmar Carregar na linha do tempo.

O nome da animação deve ter até 40 caracteres (animationRules.nameMaxLength). Use título curto, como Corte diagonal; coloque detalhes no summary. Se a IA exceder o limite, o importador encurta o nome e informa na revisão, preservando todos os quadros.
