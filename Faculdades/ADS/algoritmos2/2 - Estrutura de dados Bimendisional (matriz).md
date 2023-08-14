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

double nota_do_antonio = notas[3, 2];

Para declarar uma matriz, basta indicar o tamanho das duas dimensões: primeiro, a quantidade de linhas; depois, a quantidade de colunas dentro dos colchetes.

double[,] notas = new double[4,3];

Por fim, pode-se realizar a declaração da matriz sem um tamanho predefinido e informá-lo posteriormente. Em código, a criação do vetor pode ser feita assim:

double[] notas; 
notas = new double[3];

Para criar a matriz, a abordagem equivalente é:
double[,] notas; notas = new double[4,3];

Para finalizar, esses arrays demonstrados são denominados retangulares, pois possuem o mesmo número de colunas para todas as linhas. Já nos arrays irregulares, cada linha pode ter uma quantidade diferente de colunas (DEITEL, 2003).


int[,] campo = new int[10,10];//matriz com posições dos elementos do campo 
int[,] jogo = new int[10, 10];//matriz que registra ações do jogador 

int qtdLinhas = campo.GetLength(0); 
int qtdColunas = campo.GetLength(1); 

for (int l = 0; l < qtdLinhas; l++) { for (int c = 0; c < qtdColunas; c++) { campo[l, c] = 0; jogo[l, c] = -1; } } 

//Posicionamento aleatório da bandeira 
Random gerador = new Random();
int linha = gerador.Next(qtdLinhas); 
int coluna = gerador.Next(qtdColunas); campo[linha, coluna] = 2; 

//Posicionamento aleatório das bombas 
int bombasPosicionadas = 0; 
do { linha = gerador.Next(qtdLinhas); coluna = gerador.Next(qtdColunas); 
if (campo[linha,coluna]==0) { campo[linha, coluna] = 1; bombasPosicionadas++; } } while (bombasPosicionadas<5);

Duas matrizes são utilizadas nessa implementação: a matriz campo é usada para registrar o posicionamento das bombas (pelo número 1), da bandeira (pelo número 2) e das posições vazias (pelo número 0); a matriz jogo inicia com –1 em todos os campos e é utilizada para a visualização do jogador. Conforme o jogador indica posições, elas são preenchidas com 0, até a indicação de uma posição com uma bomba ou a bandeira. A variável qtdLinhas armazena o tamanho da matriz na primeira dimensão (número de linhas), e a variável qtdColunas, na segunda dimensão (número de colunas).

Em seguida, a matriz campo é percorrida para ter todas as suas posições inicializadas com 0, enquanto a matriz jogo é inicializada com –1. Observe que esse preenchimento é feito com a utilização de duas estruturas for, uma dentro da outra. Esta é a forma padrão de percorrer uma matriz: enquanto o for externo alterna entre as linhas, o for interno alterna entre as colunas.

Depois de preenchidas as duas matrizes, são gerados dois números aleatórios: um de linha (entre 0 e qtdLinhas – 1) e outro de coluna (entre 0 e qtdColunas – 1). Esses números são usados como índices para posicionar a bandeira (número 2) na matriz campo.

Por fim, são geradas cinco bombas (número 1) para serem posicionadas no campo. Um contador registra quantas bombas já foram criadas. Novamente, são gerados números aleatórios de linha e coluna, mas desta vez é feita uma verificação para garantir que não haja outra bomba ou bandeira na mesma posição. Se a posição estiver vazia (número 0), a bomba será posicionada.

Tendo sido preparado o campo do jogo, o próximo passo é criar a interface de interação do usuário.

bool fimJogo = false; do { for (int l = 0; l < qtdLinhas; l++) { for (int c = 0; c < qtdColunas; c++) { Console.Write(string.Format("{0} ", jogo[l, c])); } Console.Write(Environment.NewLine + Environment.NewLine); } Console.Write("Selecione uma linha [1-10]: "); linha = Convert.ToInt32(Console.ReadLine()) -1; Console.Write("Selecione uma coluna [1-10]: "); coluna = Convert.ToInt32(Console.ReadLine()) -1; switch (campo[linha, coluna]) { case 0: jogo[linha, coluna] = 0; Console.Write("Continue tentando.\n\n"); break; case 1: jogo[linha, coluna] = 1; Console.Write("BOOOM. Você perdeu.\n\n"); fimJogo = true; break; default: jogo[linha, coluna] = 2; Console.Write("Parabéns. Você ganhou!\n\n"); fimJogo = true; break; } } while (!fimJogo);

A variável booleana fimJogo indica quando o usuário venceu ou perdeu a partida, encerrando a interação. A interação ocorre dentro de uma estrutura de repetição do-while. Inicialmente, uma estrutura de dois for é utilizada para percorrer a matriz jogo, imprimindo todos os seus valores. São impressas exatamente na disposição da matriz 10 linhas e 10 colunas. Os valores –1 indicam posições ocultas, e os valores 0 indicam posições que o usuário escolheu e que estavam vazias. Em seguida, o usuário digita um valor de linha e um valor de coluna entre 1 e 10. Então, é realizado um teste na posição indicada, mas na matriz campo. Se nessa posição o valor for 0, a matriz jogo, nessa mesma posição, receberá o valor 0, e o laço se repetirá para o jogador continuar tentando. Se o valor for 1, o que indica a presença de bomba, será mostrada a mensagem de que o jogador perdeu, e a variável fimJogo receberá o valor true, fazendo com que o laço se encerre. Se o valor for 2, será exibida a mensagem de sucesso, e o laço também se encerrará