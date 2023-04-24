### Estruturas condicionais
No primeiro contato com uma linguagem de programação, um dos primeiros aprendizados é sobre o fluxo de execução de um código. Quando um programa é executado, o código é lido pelo computador linha por linha (de cima para baixo e da esquerda para a direita), exatamente como uma pessoa faz para ler um livro, por exemplo. Cada linha representa uma instrução.

1 double avaliacao1, avaliacao2, media; 
2 avaliacao1 = 10; 
3 avaliacao2 = 5; 
4 media = (avaliacao1 + avaliacao2)/2; 
5 Console.WriteLine(“A média do aluno é {0} “, media);

Desse modo, a sequência de execução desse código será fixa e estruturada sequencialmente da seguinte maneira: • execute a linha 1 – declaração de variáveis; • execute a linha 2 – atribua 10 para a variável avaliacao1; • execute a linha 3 – atribua 5 para a variável avaliacao2; • execute a linha 4 – some os valores das variáveis avaliacao1 e avaliacao2 e, em seguida, divida esses valores por 2. Por fim, atribua o resultado dessa operação para a variável media; • execute a linha 5 – apresente o valor da média para o aluno