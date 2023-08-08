O conceito de matrizes expande a definição de vetores. Enquanto os vetores funcionam como uma “lista” unidimensional de diversas posições, “uma ao lado da outra”, para armazenar diversos valores, as matrizes funcionam como uma “tabela”, permitindo armazenar os valores em diversas posições distribuídas por suas linhas e colunas. Por isso, recebem a definição de bidimensionais. Essa estrutura auxilia na representação de problemas que dependem da disposição bidimensional dos dados. Exemplos disso são as coordenadas de diferentes elementos em um mapa e as posições de peças em um tabuleiro. Podemos até mesmo representar uma imagem por meio de uma matriz na qual cada posição guarda um valor que representa a cor de um pixel.

### Declaração e criação de matrizes
Como já visto, vetores são estruturas que permitem armazenar diversos valores em cada posição, sendo todos eles de um mesmo tipo. Uma representação do vetor é uma sequência de espaços, um ao lado do outro, em que cada um é uma posição a armazenar um valor. Por essa representação sequencial, começando no índice 0 e terminando no índice que corresponde ao tamanho do vetor – 1, podemos nos referir ao vetor como uma estrutura de dados linear ou uma estrutura de dados unidimensional. Também é comum o termo array unidimensional.

Embora o vetor auxilie muito no agrupamento de valores que possuem alguma relação entre si, em alguns casos é necessária a representação de valores em mais de uma dimensão. Para isso, é preciso utilizar uma estrutura de dados bidimensional, ou array bidimensional, também conhecida simplesmente por matriz.

Em um vetor, basta um valor para identificar cada posição, pois, conforme discutido, ele é uma estrutura de dimensão única. Como a matriz possui duas dimensões, são necessários dois valores para indicar cada posição: um para a linha e outro para a coluna. A matriz também começa pelo índice 0 e, por isso, sua primeira posição é indicada por (0,0), sendo o primeiro valor o índice da linha e o segundo valor o índice da coluna. A forma de declaração de uma matriz segue as mesmas regras da forma de criação de um vetor, como já visto. O único detalhe a atentar é que, agora, em vez de haver somente a abertura e o fechamento de colchetes, deve-se colocar uma vírgula no meio desse par de colchetes para indicar que se trata de uma estrutura de duas dimensões (matriz).

Para criar uma matriz com diversos valores, deve-se indicar uma vírgula no meio do par de colchetes ( [,] ) e, na atribuição do conjunto de valores, criar diversas linhas com valores. Conforme foi feito para o vetor, uma linha com valores está entre chaves, e os valores estão separados por vírgula. Para a matriz, diversas dessas linhas devem ser criadas (conforme a quantidade de linhas da matriz) e separadas por vírgula, e todas devem estar entre outro par de chaves. Observe o exemplo a seguir:

double[,] notas = { { 8.7, 5.4, 6.2 }, { 3.8, 2.7, 8.5 }, { 9.1, 0.9, 4.2 }, { 7.1, 1.8, 8.8 } }; 
nessa representação, podemos visualizar facilmente que se trata de uma matriz 4 x 3 (4 linhas x 3 colunas).

No exemplo a seguir, a nota na linha de índice zero e coluna de índice 1 (valor de 5.4) receberá o valor de 6.4:

notas[0,1] = 6.4;

A seguir, o valor da última linha e última coluna (8.8) será copiado para outra variável: