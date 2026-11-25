# Edição e correção de scripts

O Editor de scripts usa Luau. Código final vai em `Source` de Script, LocalScript ou ModuleScript. Use o contexto de cliente/servidor correto e confira as classes/API deste projeto. Uma sintaxe aceita não prova que a ferramenta existe ou que uma variável recebeu uma instância.

## Quando houver erro

1. Leia o sublinhado e a explicação ao apontar para ele. Vermelho indica erro; amarelo, aviso. Confira especialmente nomes parecidos, como `Players` e `Player`, e variáveis lidas antes de receber valor.
2. O compilador Luau verifica a sintaxe sem executar o código. A análise de nomes e inicialização é básica: não equivale ao analisador completo de tipos/fluxo da Roblox. Interpolação de strings, tipos complexos e referências dinâmicas ainda precisam de revisão humana e teste.
3. Teste em Jogar. Erros de execução aparecem na Saída com fonte/linha quando fornecidas pelo runtime. Clique na fonte para abrir a linha destacada. Cópias de Tools/personagens podem ser associadas ao script original por caminho final inequívoco; se houver ambiguidade, o Studio não escolhe um script arbitrário.
4. `attempt to index nil with 'Equipped'` significa que o valor antes de `.Equipped` é nil. Confira o pai do script, o contexto de execução e a cópia da Tool em Backpack/Character. Corrigir a escrita isoladamente não cria a Tool faltante. Use `WaitForChild` quando a instância realmente deve existir depois e trate ausência quando ela for opcional; não adicionar esperas infinitas para esconder um caminho errado.

## Colagem e histórico

O editor e o contrato da IA aceitam até 200.000 caracteres por script (Source). Colagens que fariam o total ultrapassar o limite são recusadas inteiras e explicadas; nenhum trecho deve ser cortado silenciosamente. Divida sistemas grandes em scripts/ModuleScripts com responsabilidades claras, sem quebrar uma função no meio.

Ctrl+Z desfaz cada evento de digitação/ação; a composição de um caractere por teclado é mantida como unidade. Ctrl+Shift+Z e Ctrl+Y refazem. Colar é uma ação inteira. Trocar entre abas abertas conserva o histórico; fechar o script ou projeto começa um histórico novo. A IA não deve depender do histórico para recuperar algo depois de fechar o projeto: salve antes de alterações grandes.

## Leitura e desempenho

O editor pode recolher funções, condicionais, repetições e tabelas multilinha. Guias de indentação ajudam a ler o escopo e as ocorrências da palavra sob o cursor são destacadas. A faixa ao lado do scroll indica erros/avisos proporcionalmente ao documento e permite navegar até eles. Esses recursos não alteram a execução do script.

A edição renderiza somente as linhas necessárias. O compilador usa o Worker Luau compartilhado, com fila serial, estado temporário descartado e sem executar o texto analisado. Não propor uma segunda VM ou um loop por objeto para mostrar avisos. Testes Node/viewport não substituem Safari/iPhone físico.

Referências: [Script Editor da Roblox](https://create.roblox.com/docs/studio/script-editor), [Output](https://create.roblox.com/docs/studio/output), [CodeMirror](https://codemirror.net/docs/ref/). São referências de comportamento, não uma promessa de paridade completa.
