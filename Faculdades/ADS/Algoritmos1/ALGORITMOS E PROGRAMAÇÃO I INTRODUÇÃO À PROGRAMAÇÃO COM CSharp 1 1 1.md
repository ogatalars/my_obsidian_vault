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

