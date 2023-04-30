### Estruturas de repetição
Considere o seguinte caso: você deseja somar os três primeiros números inteiros maiores que zero. Bem, isso é simples, basta fazer soma = 1 + 2 + 3. Até certo ponto sim, é simples, porém, e se você for solicitado a somar os mil primeiros números inteiros primos, cujo resultado será usado em um procedimento de segurança, por exemplo, durante a criptografia de um arquivo? Outro caso, considere que seu chefe pediu para você criar um programa que verifique qual o maior número primo existente com o objetivo de usar este primo em uma chave criptográfica. Como você faria? Certamente a opção por realizar todo o procedimento manualmente não é a melhor escolha.

Considere que, por qualquer motivo, uma empresa necessita apresentar na tela os 10 primeiros números positivos. Um exemplo de código pode ser visto a seguir

1 Console.WriteLine(“1”); 
2 Console.WriteLine(“2”); 
3 Console.WriteLine(“3”);  
... 
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

