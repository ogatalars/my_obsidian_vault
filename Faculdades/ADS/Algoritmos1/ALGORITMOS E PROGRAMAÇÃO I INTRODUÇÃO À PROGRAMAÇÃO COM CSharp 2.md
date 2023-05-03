### Estruturas de repetição
Considere o seguinte caso: você deseja somar os três primeiros números inteiros maiores que zero. Bem, isso é simples, basta fazer soma = 1 + 2 + 3. Até certo ponto sim, é simples, porém, e se você for solicitado a somar os mil primeiros números inteiros primos, cujo resultado será usado em um procedimento de segurança, por exemplo, durante a criptografia de um arquivo? Outro caso, considere que seu chefe pediu para você criar um programa que verifique qual o maior número primo existente com o objetivo de usar este primo em uma chave criptográfica. Como você faria? Certamente a opção por realizar todo o procedimento manualmente não é a melhor escolha.

Considere que, por qualquer motivo, uma empresa necessita apresentar na tela os 10 primeiros números positivos. Um exemplo de código pode ser visto a seguir

1 Console.WriteLine(“1”); 
2 Console.WriteLine(“2”); 
3 Console.WriteLine(“3”);  
... 
9 Console.WriteLine(“9”); 
10 Console.WriteLine(“10”);

Observe neste código que, para apresentar os 10 primeiros números positivos é necessário realizarmos a instrução Console.WriteLine dez vezes. Agora, considere que a empresa necessita de apresentar os 100 primeiros números positivos. A escrita do código seria mais complexa, afinal, são necessárias 100 linhas de código para realizar algo simples.

O papel de uma estrutura de repetição é iterar um determinado trecho do código (uma ou mais instruções) enquanto uma dada condição for verdadeira (SILVA; FEIJÓ; CLUA, 2009). Neste caso, o mesmo código apresentado anteriormente pode ser reduzido em poucas linhas, independente se a empresa desejar mostrar os 5 primeiros números ou os 1000 primeiros números.

Enquanto uma dada condição for verdadeira (condição de corrida), o conteúdo de seu bloco (aquele que está entre chaves) será executado. A condição de corrida pode ser uma relação simples de comparação ou uma expressão com diversos operadores relacionais e lógicos (FORBELLONE, 2005)

contador = 1
2 
3 while (contador <= 10) 
4 { 
5 Console.WriteLine(“Valor do contador é ” + contador); 
6 contador = contador + 1; 
7 } 
8 Console.WriteLine(“fim”)

Observe que este código 2 inicializa uma variável antes de entrar no laço de repetição (linha 1). A condição de corrida é a comparação contador <= 10, onde lê-se: enquanto o contador for menor ou igual a 10, faça o que está dentro da estrutura while. Deste modo, será apresentado o valor da variável contador (linha 5) e, em seguida, é somado mais 1 no valor atual da variável contador, a esta ação de somar mais 1 nós chamamos de incremento. Na linha 6 lê-se: a variável contador recebe o conteúdo da variável contador e soma 1.

*O papel de uma estrutura de repetição é iterar um determinado trecho do código (uma ou mais instruções) enquanto uma dada condição for verdadeira (SILVA; FEIJÓ; CLUA, 2009)*. Neste caso, o mesmo código apresentado anteriormente pode ser reduzido em poucas linhas, independente se a empresa desejar mostrar os 5 primeiros números ou os 1000 primeiros números.

Enquanto uma dada condição for verdadeira (condição de corrida), o conteúdo de seu bloco (aquele que está entre chaves) será executado. A condição de corrida pode ser uma relação simples de comparação ou uma expressão com diversos operadores relacionais e lógicos (FORBELLONE, 2005).

1 contador = 1
2 
3 while (contador <= 10) 
4 { 5 Console.WriteLine(“Valor do contador é ” + contador); 
6 contador = contador + 1; 
7 } 
8 Console.WriteLine(“fim”);

Observe que este código 2 inicializa uma variável antes de entrar no laço de repetição (linha 1). A condição de corrida é a comparação contador <= 10, onde lê-se: enquanto o contador for menor ou igual a 10, faça o que está dentro da estrutura while. Deste modo, será apresentado o valor da variável contador (linha 5) e, em seguida, é somado mais 1 no valor atual da variável contador, a esta ação de somar mais 1 nós chamamos de incremento. Na linha 6 lê-se: a variável contador recebe o conteúdo da variável contador e soma 1.

Observe também que o conteúdo interno do while está afastado para a direita, ou seja, está indentado. Além disso, existe uma chave abrindo na linha 4 e fechando na linha 7, delimitando o bloco (escopo) do código. Por fim, note que a instrução da linha 8 só será impressa na tela após o laço de repetição concluir a execução. Mas, e se a variável contador na linha 1 inicia-se em 11? Neste caso, 11 é menor ou igual a 10? Não, então as linhas 5 e 6 não seriam executadas e o fluxo do código continuaria na linha 8. Este código 2 trará a mesma saída que o código 1, ou seja, mostra na tela os valores de 1 até 10. Porém existe uma diferença fundamental. No código 1, se o programador desejar mostrar na tela os valores de 1 até 1000, ele precisa adicionar outras 990 linhas de código. Por outro lado, no código 2, basta modificar a linha 3 e fazer com que a condição de corrida passe a ser contador <= 1000, onde lê-se: enquanto a variável contador for menor do que mil, faça o que está dentro da estrutura while.

Até aqui o laço o while foi apresentado como uma estrutura de controla um bloco de código, repetindo-o em um dado intervalo. Porém, existe uma outra aplicação. Considere o caso em que temos um menu com 4 opções. A opção 1 é para cadastrar um aluno no sistema, a opção 2 é para listar os alunos do sistema, a opção 3 é para excluir um aluno do sistema e a opção 4 é para sair do sistema. Logo, enquanto o usuário escolher as opções 1, 2 ou 3, o sistema continua em um loop. Porém, ao escolher a opção 4, o loop será encerrado. O código a seguir ilustra este programa.

1 int opcao;
2 Console.WriteLine(“Digite: “);
3 Console.WriteLine(“1 - Cadastrar | 2 - Listar | 3 - Excluir | 4 - Sair”);
4 opcao = int.Parse(Console.ReadLine());
5
6 while(opcao != 4)
7 {
8 Console.WriteLine(“Digite: “);
9 Console.WriteLine(“1 - Cadastrar | 2 - Listar | 3 - Excluir | 4 - Sair”);
10 opcao = int.Parse(Console.ReadLine());
11 } 

Observe no código 3 que não foi necessário utilizar uma instrução
de incremento, afinal, este laço de repetição não está programado para
executar em um intervalo de valores como foi no código 2. Agora, enquanto o usuário digitar um valor diferente de 4, o laço while será executado. Acompanhe a análise do código:
• Linha 1: declaração de uma variável do tipo inteira chamada opcao (esta variável também poderia ser do tipo string!);
• Linhas 2 e 3: o usuário é informado sobre o que deve ser feito,
neste caso, são apresentadas as opções;
• Linha 4: o usuário informa uma opção digitando um número pela
entrada padrão (teclado). A função int.Parse é responsável por
converter o conteúdo digitado no teclado (que é do tipo texto)
para o tipo inteiro;
• Linha 6: na linha 6 temos a condição de corrida, onde lê-se: enquanto o valor da variável opcao for diferente do número quatro, faça.
• Linhas 8, 9 e 10: estas três linhas estão dentro do laço while e
somente serão executadas quando o valor da variável opcao for
diferente de quatro.

**Toda estrutura de repetição necessita de ter uma condição de corrida, caso contrário, aquele trecho de código ficará em execução em um loop infinito**