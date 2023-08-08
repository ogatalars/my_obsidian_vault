
#### Preparação do ambiente:  
Essas ferramentas são conhecidas como ambientes de desenvolvimento integrado ou, em inglês, integrated development environments (IDEs). Aqui, adotaremos a linguagem de programação C# (lê-se C sharp) para o desenvolvimento dos códigos; portanto, é preciso escolher um IDE que suporte essa linguagem. Um IDE muito utilizado, e que recomendamos, é o Microsoft Visual Studio – você pode baixar gratuitamente a versão Comunidade (ou Community), que traz todos os recursos necessários para a compilação e execução dos projetos em C# (MICROSOFT, 2022).


#### Declaração e criação de vetores: 
Todo programa faz uso de variáveis, que são posições de memória com um nome e a capacidade de armazenar determinado tipo de valor. Podemos imaginar uma variável como uma gaveta que recebe uma etiqueta chamada “roupas” (o nome da gaveta, por si só, permite supor o que há dentro dela, sem necessidade de abri-la). Essa gaveta servirá para armazenar somente roupas (o tipo de conteúdo) e, dentro dela, será guardada uma quantidade de roupas (o conteúdo, ou seja, o valor da gaveta)

Valor a ser armazenado é o conteúdo da gaveta, ou seja, o que vai ser guardado dentro da variável
Tipo de dado é “roupa”, ou seja, o formato do valor que é armazenado nessa variável.
Nome da variável é “roupas”. Indica com facilidade a que se refere o valor armazenado na gaveta.

DESCRIÇÃO REPRESENTAÇÃO EM C# VALORES POSSÍVEIS DE ARMAZENAR 
Inteiro 
int -2.147.483.648 até 2.147.483.647 
Inteiro long -9.223.372.036.854.775.808 até 9.223.372.036.854.775.807 
Decimal double ±5.0 × 10−324 até ±1.7 × 10308 
Caractere char Unicode UTF-16 (U+0000 até U+FFFF) 
Lógico bool true ou false

### Exemplos:
double altura = 1.80;
int peso = 75; 
bool quitacao_eleitoral = true;

Porém, em algum momento, um programa poderá ter diversas variáveis usadas para a mesma finalidade. Observe, por exemplo, o código a seguir, no qual três variáveis possuem a finalidade de armazenar o valor da nota de diferentes alunos:
double nota_aluno_1 = 8.7;
double nota_aluno_2 = 5.4; 
double nota_aluno_3 = 6.2; 
double media = (nota_aluno_1 + nota_aluno_2 + nota_aluno_3) / 3;

Nesse trecho, deseja-se calcular a média das notas de todos os alunos de uma turma. Para isso, é necessário fazer a declaração de uma nova variável para armazenar cada nota. Nesse exemplo, temos apenas três alunos, mas, pensando em uma sala de aula real, poderia haver muitos mais, o que se refletiria em mais linhas de código. Contudo, podemos observar que todas essas variáveis têm uma relação entre si: elas são utilizadas para armazenar o mesmo tipo de dado e para a mesma finalidade. São dados do tipo double que representam notas, e cada variável corresponde à nota de um aluno diferente. **Em casos assim, podemos agrupar as variáveis semelhantes em uma única estrutura chamada vetor, ou array unidimensional, reduzindo o código e ganhando clareza na relação entre as variáveis.**

Na linguagem C#, temos algumas alternativas para a criação do vetor

### Declaração e atribuição dos valores em uma única instrução
Neste caso, no momento de criação do vetor, já se possuem todos os dados que serão inseridos em todas as suas posições.
tipo_de_dado[ ] nome_do_vetor = { valor_pos_0, valor_pos_1, ... , valor_ultima_pos} ;

**A indicação dos colchetes logo após o tipo de dado indica que essa estrutura é um vetor, e não mais uma única variável.**

Exemplo: double[] notas = {8.7,5.4,6.2};

No código anterior, foi criado um vetor de números racionais (double) chamado notas, de tamanho 3, no qual a primeira posição (índice 0) armazena o valor 8.7, a segunda posição (índice 1) armazena 5.4 e a terceira posição (índice 2) armazena 6.2

nome_do_vetor[índice_desejado] = novo_valor;

notas[1] = 6.4;
notas = {8.7, 6.4, 6.2}

outra_variavel = nome_do_vetor[índice_desejado]

double nota_do_jose = notas[1];
nota_do_jose = 6.4

### Declaração do vetor com o tamanho definido para posteriormente receber os valores
Nesta abordagem, primeiramente é declarado o vetor e posteriormente são atribuídos os valores de cada posição. Esse procedimento é bastante comum em um programa interativo, no qual o usuário insere o valor de cada uma das posições, não cabendo ao programador definir esses valores diretamente no código. O método também é muito utilizado quando os dados são obtidos em um momento posterior à criação do vetor.

tipo_de_dado[ ] nome_do_vetor = new tipo_de_dado[tamanho_do_vetor]

double[] notas = new double[3];

Perceba que, nesse caso, o número **3 representa o tamanho do vetor**. Assim, está sendo criado um vetor de três posições, começando no índice 0 e terminando no índice 2. É preciso atenção para repetir o mesmo tipo de dado nos dois lados do operador de atribuição.

### Declaração do vetor sem predefinição do tamanho
Dessa forma, primeiramente declara-se o vetor, depois define-se o tamanho do vetor e, por fim, o valor de cada posição. Esse método é utilizado quando o programador sabe que será necessário um vetor (pois o programa lidará com uma sequência de dados do mesmo tipo), mas não sabe qual será a quantidade, ou seja, qual deverá ser o tamanho do vetor.

O método divide a declaração do vetor em duas partes. Na primeira, define-se apenas o nome do vetor:

tipo_de_dado[ ] nome_do_vetor;

Na segunda, após a definição do tamanho do vetor, é concluída sua criação:

nome_do_vetor = new tipo_de_dado[tamanho_do_vetor];
double[] notas; notas = new double[3];

Contudo, é mais comum que a declaração do vetor não seja concluída com um número explícito. Usualmente, após a declaração parcial do vetor, uma variável recebe um valor que indica qual deve ser o tamanho do vetor. Essa variável é, então, utilizada para finalizar a declaração do vetor, como no exemplo a seguir:

double[] notas; 
int tamanho_vetor = valor_digitado_pelo_usuario; 
notas = new double[tamanho_vetor];


Resumo: Uma variável representa um único valor; portanto, seu nome tende a ser apresentado no singular. Um vetor, por outro lado, representa um conjunto de valores; por isso, seu nome costuma ser apresentado no plural.

Importante: Podemos nos referir a cada espaço de armazenamento em um vetor como “posição”, indicando o primeiro espaço como 1 (primeira posição) e o último espaço com o valor do tamanho do vetor. Porém, em código, precisamos utilizar o “índice”, que conceitualmente tem a mesma finalidade de indicar um espaço específico do vetor. O primeiro espaço, no entanto, é representado pelo valor 0 (índice zero), e o último índice corresponde ao tamanho do vetor – 1.

Console.WriteLine("Defina quantos alunos há na turma:"); int tamanho = int.Parse(Console.ReadLine()); double[] notas = new double[tamanho]; //Armazenando as notas for (int i = 0; i < notas.Length; i++) { Console.WriteLine("Digite a nota do aluno " + (i + 1) + ":"); notas[i] = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture); }

double soma = 0; for (int i = 0; i < notas.Length; i++) { Console.WriteLine("Nota do aluno " + (i + 1) + ": "+notas[i]); soma += notas[i]; } double media = soma / notas.Length; Console.WriteLine("Média das notas na turma é: "+media);

### Utilização de funções com vetores 
Vetores podem ser manipulados como outras variáveis e, inclusive, utilizados como argumentos e retornos de funções. No exemplo a seguir, há uma demonstração do uso de função com um vetor como parâmetro. Nesse caso, um vetor contendo as notas dos alunos será passado como argumento de uma função responsável por calcular a média e retornar esse valor, que será então armazenado e impresso em tela.

double[] notas = { 8.7, 5.4, 6.2 }; 
double media = calcularMedia(notas); 
Console.WriteLine("A média da turma é: "+media);

Perceba que o nome do vetor foi usado como argumento da função chamada calcularMedia, como se faria com um tipo de dado primitivo.


A seguir, o código da função calcularMedia, que pode ser criada na classe principal, abaixo do método main:

static double calcularMedia(double[] notas) 
{ 
double soma = 0; for (int i = 0; i < notas.Length; i++) 
soma += notas[i]; 
return soma / notas.Length; 
}

Perceba que o nome do vetor foi usado como argumento da função chamada calcularMedia, como se faria com um tipo de dado primitivo.

A seguir, o código da função calcularMedia, que pode ser criada na classe principal, abaixo do método main