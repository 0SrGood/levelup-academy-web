# Roteiro curto: resposta compatível com o Studio

O mesmo contrato serve a ChatGPT, Gemini, Claude e outros assistentes. Não existe um formato especial por fornecedor. O aluno pode enviar um arquivo ou colar o contexto como texto. Se sua capacidade de ler contexto for limitada, leia primeiro **request**, **assistantGuide**, **responseExample**, **target** e **animationRules**; depois consulte as skills necessárias.

## Faça nesta ordem

1. **Leia o pedido inteiro.** Liste mentalmente ação, lado do corpo, direção, duração e partes proibidas. O pedido atual tem prioridade sobre os movimentos antigos em currentAnimation. Não invente ataque adicional, saque, idle ou retorno se não foi pedido.
2. **Copie a estrutura de responseExample.** Preserve exatamente format, version, rigId, baseFingerprint e fingerprintScope. Esses campos identificam o contrato e o personagem; não invente IDs ou hashes.
3. **Escreva o resultado em data.** Inclua v=1, rig, length, loop, priority e keys. Use nomes exatos de target.editableParts. Use números, não strings; tempos em segundos; r em graus locais XYZ; p opcional em studs locais. Nome com até 40 caracteres, detalhes em summary.
4. **Mude os movimentos para cumprir request.** O exemplo de Head apenas demonstra o formato. currentAnimation contém a animação anterior: não devolver esse envelope nem copiar todos os seus quadros se o pedido exige outra ação.
5. **Confira partes permitidas.** Para “só da cintura/torso para cima, sem LowerTorso e sem pernas”, inclua apenas UpperTorso, cabeça e braços necessários. Não inclua LowerTorso, LeftUpperLeg, RightUpperLeg, LeftLowerLeg, RightLowerLeg, pés nem quadros neutros dessas partes. Ausência da parte em keys mantém seu movimento externo; quadros neutros também são animação e podem interferir na caminhada.
6. **Confira o JSON.** Uma lista de quadros por parte, tempos crescentes e únicos, três números em r/p, duração até o último quadro, prioridades/easings válidos e ao menos um quadro. Não usar NaN, comentários, funções, trailing commas ou reticências no arquivo final.
7. **Entregue um único objeto de resposta.** O arquivo deve começar pelo objeto de responseExample e terminar nele. Não colocar a resposta em files, currentAnimation, animation ou uma lista. Não devolver target, skills, instruções ou o contexto inteiro. Não adicionar texto antes/depois do JSON salvo. Nomeie o arquivo conforme files.response.

## Erros comuns

| Saída incorreta | Como corrigir |
| --- | --- |
| `{ "files": ..., "currentAnimation": { "data": ... } }` | Isso repete o envelope de entrada. Coloque os quadros em **data no objeto levelup-ai-animation** de responseExample. |
| Só uma descrição do movimento | Crie quadros reais em data.keys, além do resumo em summary. |
| Todos os quadros anteriores, inclusive pernas proibidas | Refaça as listas conforme o pedido. Não copiar o rascunho antigo indiscriminadamente. |
| JSON dentro de uma string ou Markdown com explicações | Prefira um arquivo JSON puro e um único objeto. O Studio reconhece alguns envelopes de transporte, mas respostas ambíguas ou inválidas são recusadas. |
| Nome de animação muito longo | Use um título curto. O editor tem limite de 40 caracteres; o importador pode encurtar e avisar sem apagar quadros. |
| IDs ou fingerprint ausentes/inventados | Copiar os valores reais de responseExample, sem recalcular. Um AnimData independente exige revisão de compatibilidade e não oferece a mesma identificação do personagem. |

O importador consegue reconhecer alguns envelopes alternativos e validar o conteúdo. Isso não garante que uma animação respeite o pedido artístico nem que qualquer modelo de IA consiga gerá-la corretamente. Não afirme que foi testada em Jogar se você só produziu JSON. Explique as partes animadas para o aluno conferir na revisão.
