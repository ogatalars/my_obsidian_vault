
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