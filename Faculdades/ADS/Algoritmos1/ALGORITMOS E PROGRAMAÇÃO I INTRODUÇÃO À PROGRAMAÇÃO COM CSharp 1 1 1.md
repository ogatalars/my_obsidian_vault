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