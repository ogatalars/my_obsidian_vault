**Introdução**

A maioria dos programas (para não se dizer todos) manipulam dados de diferentes tipos, sejam números, texto ou valores booleanos. Todos estes dados ficam armazenados em memória. No código-fonte, nos referenciamos a estas posições de memória através do conceito de variáveis.

Como já é do seu conhecimento, uma variável é um espaço em memória onde armazenamos dados temporários para que, posteriormente, possamos acessá-lo. Se considerarmos a memória como uma rua, cada espaço onde armazenamos os dados são as casas.

Nesta aula, avançaremos nossos estudos para conhecer um tipo de armazenamento de dados em memória um pouco diferente do que foi visto até então. Começaremos a estudar o conceito de vetores e matrizes. Vamos compreender como estas estruturas armazenam e organizam uma coleção de tipos de dados semelhantes.

**Objetivos da aula**

-   Compreender o conceito de estrutura de dados.
-   Reconhecer os tipos de estruturas de dados e suas operações.
-   Compreender o processo iterativo de manipulação de dados.
-   Diferenciar vetores e matrizes.

**Resumo**

Um vetor ou array é uma coleção de um ou mais valores do mesmo tipo. Cada valor é chamado de elemento do array. Os elementos compartilham o mesmo nome de variável, mas cada elemento tem seu próprio número de índice exclusivo (também conhecido como subscrito). Um array pode ser de qualquer tipo, por exemplo: int, float, double (MANZANO, 2016).

Em uma rua, se uma casa representa uma posição de memória onde guardamos um único valor, teremos agora na rua um prédio com n andares, onde temos o térreo (0), o primeiro andar (1), o segundo andar (2), e assim por diante até o andar n-1. Ou seja, se o prédio tiver 10 andares (este é o valor de n), o primeiro será o andar 0 (zero) e o último o andar 9 (nove). Veja a ilustração na figura 2.

![Figura 2 - Rua representando uma memória com variáveis simples e compostas Fonte: Elaborado pelo autor](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1670422569256-AZlr5IV9d4.png "Figura 2 - Rua representando uma memória com variáveis simples e compostas Fonte: Elaborado pelo autor")

Figura 2 - Rua representando uma memória com variáveis simples e compostas Fonte: Elaborado pelo autor

Observe na figura 2 que temos duas variáveis simples, uma é a casa26 e outra é a casa36. Temos também uma variável composta que é chamada predio (sem acento pois é o nome da variável).

Vamos supor que você precisa entregar uma encomenda na casa26. Então, basta você fazer casa26=”encomenda”, ou seja, a variável casa26 recebe um valor que é a encomenda.

Agora, suponha que você precisa entregar uma encomenda no quarto andar do prédio. Bem, não basta apenas falar que a variável predio recebe a encomenda, ou predio=”encomenda”. Você precisa indicar para a variável o andar onde deseja armazenar o valor, sendo assim, você deve fazer: predio\[4\]=”encomenda”. Onde lê-se: variável prédio na posição 4 recebe o valor encomenda.

Agora, considere um caso em que, em um sistema de boletim escolar, a professora precisa guardar quatro notas trimestrais dos alunos Carlos e Bia. Podemos fazer de duas formas:

-   Primeira (menos eficiente): criar quatro variáveis de nota para a Bia e quatro variáveis de nota para o Carlos.
-   Segundo (mais eficiente): criar um vetor de notas para a Bia e outro vetor de notas para o Carlos. Cada vetor pode receber quatro notas no máximo.

Ou seja, para cada aluno podemos inserir os valores de suas respectivas notas. Observe o código a seguir escrito na linguagem Java onde estamos manipulando apenas as notas de Carlos.

<table><tbody><tr><td><p><span><span><span>1</span></span></span></p></td><td><p><span><span><span>double[] notasCarlos = new double[4];</span></span></span></p></td></tr><tr><td><p><span><span><span>2</span></span></span></p></td><td><p><span><span><span>double media;</span></span></span></p></td></tr><tr><td><p><span><span><span>3</span></span></span></p></td><td></td></tr><tr><td><p><span><span><span>4</span></span></span></p></td><td><p><span><span><span>notasCarlos[0] = 4;</span></span></span></p></td></tr><tr><td><p><span><span><span>5</span></span></span></p></td><td><p><span><span><span>notasCarlos[1] = 8;</span></span></span></p></td></tr><tr><td><p><span><span><span>6</span></span></span></p></td><td><p><span><span><span>notasCarlos[2] = 6;</span></span></span></p></td></tr><tr><td><p><span><span><span>7</span></span></span></p></td><td><p><span><span><span>notasCarlos[3] = 8;</span></span></span></p></td></tr><tr><td><p><span><span><span>8</span></span></span></p></td><td></td></tr><tr><td><p><span><span><span>9</span></span></span></p></td><td><p><span><span><span>media = (notasCarlos[0] + notasCarlos[1] + notasCarlos[2] + notasCarlos[3])/4;</span></span></span></p></td></tr><tr><td><p><span><span><span>10</span></span></span></p></td><td></td></tr><tr><td><p><span><span><span>11</span></span></span></p></td><td><p><span><span><span>System.out.println(“A média de notas do Carlos é: “ + media);</span></span></span></p></td></tr></tbody></table>

Código 1 – Exemplo de declaração e uso de vetores

Fonte: Elaborado pelo autor

Observe que nas linhas 1 e 2 nós criamos duas variáveis. A primeira é uma estrutura composta (vetor) que receberá 4 notas do aluno. Observe que temos entre colchetes o tamanho máximo do vetor. Também declaramos uma variável primitiva ou simples que receberá o resultado do cálculo da média das notas.

O tamanho do nosso vetor é 4 e isso significa que ela é um array com 4 posições. É como se disséssemos que é um prédio de quatro andares, cujo primeiro andar começa em zero e o último andar é o 3.

Em seguida, nas linhas 4, 5, 6 e 7 colocamos os valores em cada uma das posições do array. Em outras palavras, é como se estivéssemos no prédio notasCarlos e, em cada um dos andares deste prédio nós entregássemos uma determinada encomenda, que neste caso é a nota de cada prova.

Também podemos iniciar um vetor indicando diretamente os valores que ele vai receber. Observe com atenção o código 2 a seguir.

<table><tbody><tr><td><p><span><span><span>1</span></span></span></p></td><td><p><span><span><span>double[] notasCarlos = {4, 8, 6, 8}</span></span></span></p></td></tr><tr><td><p><span><span><span>2</span></span></span></p></td><td><p><span><span><span>double media;</span></span></span></p></td></tr><tr><td><p><span><span><span>3</span></span></span></p></td><td></td></tr><tr><td><p><span><span><span>4</span></span></span></p></td><td><p><span><span><span>media = (notasCarlos[0] + notasCarlos[1] + notasCarlos[2] + notasCarlos[3])/4;</span></span></span></p></td></tr><tr><td><p><span><span><span>5</span></span></span></p></td><td></td></tr><tr><td><p><span><span><span>6</span></span></span></p></td><td><p><span><span><span>System.out.println(“A média de notas do Carlos é: “ + media);</span></span></span></p></td></tr></tbody></table>

Código 2 – Declarando um vetor e passando valores

Fonte: Elaborado pelo autor

O código 1 e o código 2 produzem a mesma saída e tem os mesmos valores de entrada, entretanto, observe na linha 1 do código 2 que declaramos a variável notasCarlos e já lhe atribuímos quatro valores.

Agora considere que temos um array com a idade de 10 alunos. As idades são estas do array da figura 2.

![Figura 2 - Array unidimensional ou vetor Fonte: Elaborado pelo autor (2021)](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1670422608697-QK8NKLLDXN.png "Figura 2 - Array unidimensional ou vetor Fonte: Elaborado pelo autor (2021)")

Figura 2 - Array unidimensional ou vetor Fonte: Elaborado pelo autor (2021)

Na figura 2 nós temos os índices ilustrados pelos valores de 0 a 9. Considere o índice como sendo o andar do prédio ou, em outras palavras, como sendo a posição do valor (da idade) no vetor.

As idades estão contidas em cada uma das posições, por exemplo, na posição 2 do vetor idade temos o valor 14; na posição 7 do vetor idade temos o valor 15, e assim por diante.

Como podemos fazer para mostrar na tela todos estes valores? Temos duas possibilidades.

-   Mandar imprimir posição por posição utilizando o comando de saída do Java. Esta não é a melhor ideia, afinal, se o vetor tiver mil posições, teremos mil instruções de entrada e saída, o que gera um enorme trabalho.
-   Outra possibilidade é utilizar uma estrutura de repetição, a qual irá iterar ou percorrer o vetor e apresentar os dados contidos em cada índice.

Observe com atenção o código 3 a seguir, nele temos a primeira possibilidade de apresentar os dados do vetor.

<table><tbody><tr><td><p><span><span><span>...</span></span></span></p></td><td><p><span><span><span>...</span></span></span></p></td></tr><tr><td><p><span><span><span>3</span></span></span></p></td><td><p><span><span><span>&nbsp;&nbsp;&nbsp; System.out.println(“Idade “, idade[0]);</span></span></span></p></td></tr><tr><td><p><span><span><span>4</span></span></span></p></td><td><p><span><span><span>&nbsp;&nbsp;&nbsp; System.out.println(“Idade “, idade[1]);</span></span></span></p></td></tr><tr><td><p><span><span><span>5</span></span></span></p></td><td><p><span><span><span>&nbsp;&nbsp;&nbsp; System.out.println(“Idade “, idade[2]);</span></span></span></p></td></tr><tr><td><p><span><span><span>6</span></span></span></p></td><td><p><span><span><span>&nbsp;&nbsp;&nbsp; System.out.println(“Idade “, idade[3]);</span></span></span></p></td></tr><tr><td><p><span><span><span>7</span></span></span></p></td><td><p><span><span><span>&nbsp;&nbsp;&nbsp; System.out.println(“Idade “, idade[4]);</span></span></span></p></td></tr><tr><td><p><span><span><span>...</span></span></span></p></td><td><p><span><span><span>&nbsp;&nbsp;&nbsp; ...</span></span></span></p></td></tr></tbody></table>

Código 3 – Apresentando os dados sequencialmente na tela

Fonte: Elaborado pelo autor

Neste código nos preocupamos apenas em mostrar a saída, vamos considerar que o vetor já tenha sido criado e iniciado. Observe que para mostrarmos os 10 valores do vetor, executamos o comando System.out.println com cada uma das posições do vetor, começando a partir da posição zero até a posição nove. Apesar de funcionar, não é a melhor forma de percorrermos um vetor, afinal como dito antes, imagine se este vetor tivesse 1000 ou 10 mil posições. Teríamos que fazer 1000 ou 10 mil instruções de saída? Não.

Observe que em todas as vezes que pedimos para mostrar na tela os valores do vetor a única coisa que mudou foi o número de índice, o restante continuou do mesmo modo. Poderíamos então utilizar uma estrutura de repetição como o for para percorrer este vetor. Observe o código 4 a seguir.

<table><tbody><tr><td><p><span><span><span>1</span></span></span></p></td><td><p><span><span><span>&nbsp;&nbsp;&nbsp; int idade[] = {16,18,14,19,22,20,16,15,17,19};</span></span></span></p></td></tr><tr><td><p><span><span><span>2</span></span></span></p></td><td></td></tr><tr><td><p><span><span><span>3</span></span></span></p></td><td><p><span><span><span>&nbsp;&nbsp;&nbsp; for(int <strong>i</strong> = 0; <strong>i</strong> &lt; 10; <strong>i</strong>++){</span></span></span></p></td></tr><tr><td><p><span><span><span>4</span></span></span></p></td><td><p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; System.out.println(“Idade: ” + idade[<strong>i</strong>]);</span></span></span></p></td></tr><tr><td><p><span><span><span>5</span></span></span></p></td><td><p><span><span><span>&nbsp;&nbsp;&nbsp; }</span></span></span></p></td></tr></tbody></table>

Código 4 – Utilizando estrutura de repetição para percorrer o vetor

Fonte: Elaborado pelo autor.

Observe no código que, na linha 1, declaramos o vetor idade e inicializamos os seus 10 valores conforme a figura 2 indicou. Em seguida, na linha 3 criamos uma estrutura de repetição for com uma variável i começando em zero (afinal, zero é a primeira posição do vetor) e que a condição de parada é enquanto i for menor do que 10 (que é o tamanho total do vetor).

Na linha 4, observe que, ao invés de colocarmos o número do índice entre colchetes, nós colocamos a variável i. Deste modo, quando a variável i valer 0, vamos imprimir o valor da posição zero do vetor idade; quando a variável i valer 1, vamos imprimir o valor da posição um do vetor idade; quando a variável i valer 2, vamos imprimir o valor da posição dois do vetor idade; e assim por diante até a variável i valor 9 (afinal, 10 não é menor do que 10, então o laço de repetição não executa a linha 4).

Deste modo, conseguimos percorrer todo o nosso array e mostrar estes dados na tela para o usuário.

Quando trabalhamos com vetores, temos uma única dimensão, ou seja, uma única linha. Em Java, podemos declarar um vetor de inteiros de tamanho int vetor\[0\]\[10\] ou int vetor\[10\], ambos geram a mesma saída, que é o vetor da figura 2 com as idades dos alunos. Agora, ao invés de utilizarmos uma única linha, utilizaremos mais. Observe uma matriz 3x3 (três por três) como a apresentada na figura 3 a seguir.

![Figura 3 – Uma estrutura de dados do tipo matriz ou array multidimensional Fonte: Elaborado pelo autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1670422656837-2SVzm4tdVi.png "Figura 3 – Uma estrutura de dados do tipo matriz ou array multidimensional Fonte: Elaborado pelo autor.")

Figura 3 – Uma estrutura de dados do tipo matriz ou array multidimensional Fonte: Elaborado pelo autor.

Observe na figura 3 que temos uma matriz com 3 linhas e cada linha possui 3 colunas. Por exemplo, na primeira linha (com índice 0) nós temos as colunas 1, 2 e 3; na segunda linha (com índice 1), temos os valores 5, 6 e 7; na terceira linha (com índice 2), temos os valores 8, 9, 0.

Resumidamente, podemos dizer que um vetor (ou array) é uma variável que pode receber 2 ou mais valores do mesmo tipo de dados. Por outro lado, uma matriz é um vetor de um vetor.

**Tópicos avançados**

Vetores e matrizes são conceitos simples, mas essenciais na programação Java. Um vetor ou matriz refere-se a uma estrutura de dados que contém elementos homogêneos. Isso significa que todos os elementos são do mesmo tipo de dados.

Existem quatro características principais de um vetor:

-   Alocação dinâmica: Em um array (como o ArrayList, por exemplo), a memória é criada dinamicamente, o que reduz a quantidade de armazenamento necessária para o código.
-   Alocação estática (ocupa local contíguo): Os elementos nos vetores e matrizes são armazenados em posições adjacentes (como visto nesta aula). Isso torna mais fácil para o usuário encontrar as localizações de seus elementos.
-   Elementos armazenados em um único nome: Todos os elementos são armazenados em um único nome. Este nome é usado sempre que usamos um vetor.

Você pode compreender mais sobre vetores acessando a documentação oficial do Java presente em <[https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)\>. **(acesso em 08/11/2022)**

Referência Bibliográfica

FORBELLONE, A. L. V.; EBERSPACHER, H. F. **Lógica de programação: a construção de algoritmos e estruturas de dados**. São Paulo: Prentice Hall, 2005.

MANZANO, J. A. N. G. **Algoritmos: lógica para desenvolvimento de programação de computadores**. 28. ed. São Paulo: Érica, 2016.