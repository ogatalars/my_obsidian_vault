### Estruturas condicionais
No primeiro contato com uma linguagem de programação, um dos primeiros aprendizados é sobre o fluxo de execução de um código. Quando um programa é executado, o código é lido pelo computador linha por linha (de cima para baixo e da esquerda para a direita), exatamente como uma pessoa faz para ler um livro, por exemplo. Cada linha representa uma instrução.

1 double avaliacao1, avaliacao2, media; 
2 avaliacao1 = 10; 
3 avaliacao2 = 5; 
4 media = (avaliacao1 + avaliacao2)/2; 
5 Console.WriteLine(“A média do aluno é {0} “, media);

Desse modo, a sequência de execução desse código será fixa e estruturada sequencialmente da seguinte maneira: • execute a linha 1 – declaração de variáveis; • execute a linha 2 – atribua 10 para a variável avaliacao1; • execute a linha 3 – atribua 5 para a variável avaliacao2; • execute a linha 4 – some os valores das variáveis avaliacao1 e avaliacao2 e, em seguida, divida esses valores por 2. Por fim, atribua o resultado dessa operação para a variável media; • execute a linha 5 – apresente o valor da média para o aluno

A lógica de um programa nem sempre será uma sequência linear de instruções a serem executadas em uma dada ordem, podendo inclusive exigir a execução de uma instrução baseada em uma decisão. Por exemplo, voltando ao código anterior, ao executá-lo, a média do aluno será 7,5. Mas o que isso significa? Ele está aprovado? Ele está reprovado? Se aprovado, o quanto sua nota está acima ou abaixo da média?

Observe então que, em algum ponto, o programa pode chegar a uma situação em que precisa tomar uma decisão. Neste caso, do código apresentado, a decisão seria dizer se o aluno está aprovado ou reprovado. Essas decisões que afetam o fluxo do código do programa são conhecidas como estruturas de controle ou estrutura de decisão.

### Programação imperativa: estrutura de controle linear e condicional

Antes de abordar o conceito de estrutura condicional ou estrutura de decisão, torna-se importante definir o conceito de estrutura de controle, que são blocos de construção de programas de computador. São comandos que permitem que um programa literalmente tome decisões, seguindo um caminho ou outro. 

Conforme abordado na introdução deste capítulo, uma estrutura sequencial ou linear é o tipo de código mais comum a ser escrito em qualquer linguagem de programação imperativa, especialmente em se tratando da linguagem C#. 

Entretanto, um programa geralmente não está limitado a uma sequência linear de instruções, pois, durante seu processo, pode bifurcar, repetir o código ou ignorar seções. Estruturas de controle são blocos de código que analisam variáveis e escolhem direções para ir com base em parâmetros dados.

#### Exemplo
1 double avaliacao1, avaliacao2, media; 
2 avaliacao1 = 10; 
3 avaliacao2 = 5;
4 media = (avaliacao1 + avaliacao2)/2; 
5 
6 if(media > 6){ 
7 Console.WriteLine("Aluno Aprovado!"); 
8 } 
9 else{ 
10 Console.WriteLine("Aluno Reprovado!"); 
11 }

O fluxo de execução desse código até a linha 5 já foi apresentada. Agora, vejamos o que acontece quando colocamos uma condicional na linha 6, lembrando sempre que o valor da variável media nesse código é 7,5: • execute a linha 6 – se o valor da média for maior que 6, então execute o conteúdo interno ao if (bloco entre aspas); • execute a linha 7 – mostre a mensagem que o aluno está aprovado. Ótimo, somente isso desta vez. Observe que as linhas 9 e 10 não foram executadas, isso ocorre porque a primeira condição (na linha 6) deu verdadeira e, como não tem como uma condição ser verdadeira e falsa ao mesmo tempo, então será executada a linha 6, em seguida a linha 7 e, por fim, o código se encerra. Logo, para que seja possível executar a instrução da linha 10, será necessário que a expressão da linha 6 seja falsa.

OBS: 
Sempre que você executar um código em C#, todas as instruções apresentadas até aqui, bem como as demais que veremos mais adiante, devem ser inseridas dentro do método public static void Main (string[] args), ou seja, entre as chaves. Esse método indica que essa classe é a classe principal e que o método main será executado primeiro, quando o programa for compilado. Experimente!

### Expressões relacionais e lógicas
Na terminologia da linguagem de programação, uma expressão é um conjunto de valores e funções que são combinados e interpretados pelo compilador para criar um novo valor. Uma maneira de se pensar nisso é que o propósito de uma expressão é criar um valor, o qual poderá gerar alguns possíveis efeitos colaterais (FORBELLONE; EBERSPACHER, 2005). Uma expressão, como no caso a + b * c * d + e, pode ser dividida em expressões menores; de igual modo, expressões menores podem ser combinadas em expressões maiores. Portanto, se tudo é uma expressão, então, tudo também pode ser composto.

Em qualquer linguagem de programação, as estruturas condicionais, também conhecidas como estruturas de decisão ou de controle, são utilizadas para manipular o fluxo de um código. Sem essas estruturas, uma linguagem de programação é basicamente inútil, afinal, não será capaz de tomar decisões inteligentes por conta própria.

Na maioria dos casos, para que seja possível utilizarmos as estruturas de decisão, é necessário que haja uma expressão lógica ou uma expressão de comparação (FORBELLONE; EBERSPACHER, 2005; FEIJÓ; CLUA; SILVA, 2009). Para que essas expressões possam ser desenvolvidas, são necessários operadores especiais, como os apresentados no quadro 1.

#### OPERADOR DE COMPARAÇÃO OPERADOR LÓGICO 
 (maior)> 
 && (e) 
 < (menor)
  || (ou)  
  (maior ou igual)>= 
  ! (negação) 
  <= (menor ou igual) 
  == (igual) 
  != (diferente)

No exemplo simples citado anteriormente, havia variáveis conectadas por operadores aritméticos. Logo, a esse tipo de expressão é dado o nome de expressão aritmética. Uma expressão de comparação ou relacional tem esse nome porque os elementos (variáveis, valores ou outras expressões) são conectados por um operador de comparação ou relacional. De modo semelhante, quando um elemento (variável, valor ou outra expressão) é conectado a outro elemento por um operador lógico, temos uma expressão lógica

EXPRESSÃO RELACIONAL OU DE COMPARAÇÃO EXPRESSÃO LÓGICA 
a < b (true) (a < b) && (d > c) (true) 
d > c (true) (a < b) || (d == c) (false) 
a != d (true) (a == b) || (a < d) (false)
d < a (false) (a > d) || (c > d) || (a < 99) (true) 
c <= a (false) (a > d) && (c > d) || (a < 99) (true) 
c == d (false) (a < c) && (d == a) && (a == 4) (false)

Observe pelo quadro 2 que a saída (ou o resultado) de uma expressão lógica, bem como de uma expressão relacional ou de comparação, sempre será os valores booleanos true (verdadeiro, em verde no quadro) ou false (falso, em vermelho no quadro). Observe que o operador && (e), para que tenha uma saída verdadeira, precisa que todas as expressões ligadas por esse operador também sejam verdadeiras. Por outro lado, ao utilizar um operador || (ou), para que a saída seja verdadeira, basta que qualquer expressão tenha o valor verdadeiro (FEIJÓ; CLUA; SILVA, 2009).

### Condições simples (if) e condições compostas (else if)

Em C#, a instrução if é usada para executar o bloco de código ou conjunto de instruções quando a condição definida é verdadeira (true). Geralmente, a instrução que será executada com base na condição é conhecida como instrução condicional, que nada mais é do que uma expressão lógica ou expressão de comparação (relacional) do tipo booleana (verdadeira ou falsa), a qual também pode ser chamada de condição (FORBELLONE; EBERSPACHER, 2005).

O operador relacional permite que você diga ao computador se deve executar o código dentro do bloco com base na condição ou no conjunto de condições

A instrução if é responsável por avaliar uma instrução entre parênteses. Se a condição for verdadeira (true), o código dentro do corpo do if é executado; se a condição for falsa (false), o código dentro do corpo do if será ignorado

1 int saldo; 
2 saldo = 100; 
3 
4 if(saldo > 0){ 
5 Console.WriteLine(“Seu saldo é positivo”); 
6 }

Observe o que ocorre a partir da linha 4 do código: • Linha 4 – primeiramente, é realizada a operação relacional que verifica se o valor da variável saldo é maior que zero. O resultado dessa operação é true (verdadeiro). Logo, como a condição (que é esta expressão) é verdadeira, será executada a linha 5. • Linha 5 – imprime na tela a mensagem, informando que o saldo é positivo. Observe a sintaxe da instrução if do código apresentado, as instruções dentro da condição if serão executadas somente quando a condição ou a expressão relacional retornar verdadeiro, caso contrário, as instruções dentro da condição if serão ignoradas para a execução.

Ainda sobre o código anterior, observe que o usuário somente será informado sobre o saldo quando este for positivo. Mas e quando o saldo for negativo? Em nosso código, não há tratamento para o caso do saldo ser menor que zero. Para tanto, adicionaremos uma instrução opcional else para o nosso if. A instrução if/else possui comportamento semelhante ao if, porém, temos uma cláusula opcional que é o else

O código a seguir representa o uso do if/else, aplicado ao código anterior para informar ao usuário se o saldo está positivo ou negativo.

1 int saldo; 
2 saldo = -100; 
3 
4 if(saldo < 0){ 
5 Console.WriteLine(“Seu saldo é positivo”); 
6 }
7 else{ 
8 Console.WriteLine(“Seu saldo é negativo”); 
9 }

Observe agora no código que, se o valor do saldo na linha 2 for maior que zero, nosso código executará apenas as linhas 4 e 5. Por outro lado, se o valor do saldo for menor que zero, nosso código executará apenas as linhas 4 e 8. Mas e a linha 7? Ela não é executada? Por que executou a linha 4? Vamos por partes.

Assim que o fluxo do código sai da linha 2, temos: • Linha 4 – o programa verifica se o valor da variável saldo é menor que zero. Neste caso específico, saldo tem o valor –100 (menos cem), logo, é menor que zero, então a expressão é falsa. Lembre-se que a única possibilidade de executar o conteúdo interno do if é se a expressão for verdadeira. Logo, se o valor do saldo não é maior que zero, então execute o conteúdo da linha 8. • Linha 8: imprime na tela que o valor do saldo é negativo

Observe, então, que a linha 7 não é executada. Isso ocorre pois o else (senão) é uma instrução complementar. Por exemplo, se estiver chovendo, leve o guarda-chuva, senão, não leve; se você tiver dinheiro, iremos à festa, senão, ficaremos em casa. Observe que o else é um complemento para quando a condição no if for falsa.

O nosso programa anterior ainda não acabou. Se fizermos um teste, observaremos que o nosso programa reconhece quando o saldo é maior que zero (saldo positivo) ou quando é menor que zero (saldo negativo). Mas e quando o saldo for igual a zero? Não estamos considerando ainda esse caso. Para tanto, podemos adicionar uma condição if a mais.

Um exemplo de código pode ser observado a seguir

1 int saldo; 
2 saldo = -100; 
3 
4 if(saldo > 0){ 
5 Console.WriteLine(“Seu saldo é positivo”); 
6 } 
7 else if (saldo < 0){ 
8 Console.WriteLine(“Seu saldo é negativo”); 
9 } 
10 else{ 
11 Console.WriteLine(“Seu saldo está zerado”); 
12 }

Observe que estamos declarando a variável saldo e atribuindo para ela o valor –100 (menos cem). O código segue o seguinte fluxo:
Na linha 4 – ocorre uma expressão relacional, a qual compara se o valor do saldo é maior que zero. Neste caso, não, o valor de saldo não é maior que zero. Lê-se: “se o valor do saldo for maior do que zero, faça”. Logo, o fluxo do código é direcionado para a linha 7.
Na linha 7 – lê-se: “senão, se o valor do saldo for menor do que zero, faça”. Neste caso, o valor do saldo é menor do que zero, logo, o fluxo do código é direcionado para a linha 8.
Na linha 8 – imprime na tela que o saldo é negativo
Se o valor da variável saldo fosse igual a zero, seriam executadas as operações das linhas 4 e 7 apenas, bem como apresentado o conteúdo da linha 11.