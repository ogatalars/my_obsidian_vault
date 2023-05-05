### Programação estruturada

A programação estruturada é um paradigma de programação que visa melhorar a clareza, a qualidade e o tempo de desenvolvimento de um programa de computador, fazendo uso extensivo das construções de fluxo de controle estruturado de seleção (if/else) e de repetição (while e for). A linguagem C# tem mais do que alguns paradigmas de programação com os quais ela se relaciona. Naturalmente, o paradigma de programação mais favorecido entre todos é o orientado a objetos.

Por ser orientado a objetos, o C# permite a criação de aplicativos modulares e códigos reutilizáveis, uma vantagem sobre outras linguagens como Java e C++. Como uma linguagem orientada a objetos, C# torna o desenvolvimento e a manutenção mais fáceis quando o tamanho do projeto aumenta. Ele oferece suporte a todos os quatro recursos orientados a objetos: encapsulamento de dados, herança, interfaces e polimorfismo. 

A programação orientada a objetos sempre foi vantajosa para os programadores, pois lhes permite estruturar programas intuitivamente e com construções do mundo real.

Outra característica de C# é que essa linguagem oferece suporte à programação orientada a componentes por meio de conceitos de propriedades, métodos, eventos e atributos para componentes autocontidos e autodescritivos de funcionalidade para aplicativos robustos e escaláveis. 

Por fim, uma das principais características é o design estruturado e a modularização que, em C#, dividem um problema em partes, usando funções de fácil implementação para resolver problemas significativos. 

#### Conceito 
A programação estruturada é um método de desenvolvimento de software que usa modularização e design estruturado. Isso significa que grandes programas ou scripts são divididos em módulos menores e que cada módulo individual usa código estruturado, isso faz com que as instruções sejam organizadas de uma maneira específica, minimizando erros e interpretações incorretas (FORBELLONE; EBERSPACHER, 2005).

Como o próprio nome sugere, a programação estruturada é feita em uma linguagem de programa do paradigma estruturado como C#, PHP, C, C++, Java e Python.

Um dos conceitos mais importantes de programação é a capacidade de controlar um programa de modo que diferentes linhas de código sejam executadas ou que algumas linhas de código sejam executadas várias vezes. Os mecanismos que nos permitem controlar o fluxo de execução são chamados de estruturas de controle. O fluxograma é um método de documentar (mapear) o fluxo (ou caminhos) que um programa executaria. Existem três categorias principais de estruturas de controle (FEIJÓ; CLUA; SILVA, 2009):

• Estrutura sequencial – é a mais simples. Execute uma instrução,
depois a próxima e a próxima. Basta executá-los em uma determinada sequência ou na ordem listada. A maioria das linhas de
código é assim.
• Estrutura condicional ou de seleção – o código seleciona ou escolhe entre dois ou mais fluxos. A escolha é decidida fazendo-se
algum tipo de pergunta (condição). A resposta determina o caminho (ou quais linhas de código) que será executado. Como exemplo, temos as estruturas if/else.
• Estrutura de repetição ou de iteração – também conhecida como
loop, porque o fluxograma mostra o looping de volta para repetir a tarefa, esse tipo de estrutura permite que algum código (de
uma a várias linhas) seja executado (ou repetido) várias vezes. O
código pode: não ser executado, executado um número fixo de
vezes ou executado indefinidamente até que alguma condição
seja atendida.

**Todas as linguagens de programação de alto nível têm estruturas de controle. Todas as linguagens têm as três categorias de estruturas de controle (sequência, seleção e iteração). A maioria tem a estrutura if/ else e a estrutura while e for**

Outro tipo de estrutura encontrada em diversas linguagens de programação é a **função**, que são partes essenciais de um programa C#, podendo consistir em vários elementos, como o nome da função (que é usado como referência da função), tipos de retorno dos dados, escopo ou corpo da função, parâmetros que são valores não obrigatórios que podem ser passados como argumentos para a função e o especificador de acesso para definir a acessibilidade da função dentro do programa (FORBELLONE; EBERSPACHER, 2005).

Os diferentes tipos de funções que podem ser integrados em um
programa C# são uma combinação de funções (MICROSOFT, [s. d.]):
• com ou sem parâmetros;
• que podem ou não ter os valores de retorno, dependendo do requisito fornecido.
A função é um membro da classe, ou seja, é exatamente o mesmo
que um método; às vezes, os dois termos são usados indistintamente.
Mas existem diferenças básicas entre métodos e funções (citação):
• método vem com um tipo de retorno nulo (void);
• função tem um tipo de retorno como int, string ou float, por
exemplo.

1 <modificadores_de_acesso> <tipo_retorno> <nome_função> (<parâmetros>)
2 {
3 <código_da_função>
4 <retorno>
5 }

Em que temos:
• <modificadores_de_acesso>: são usados para especificar o escopo de acessibilidade de um membro de uma classe ou tipo da
própria classe. Por exemplo, **uma função pública (public)** é acessível a todos sem quaisquer restrições, enquanto em uma função
privada (private), o acesso é limitado à definição de classe. Este
é o tipo de modificador de acesso-padrão se nenhum for especificado formalmente. Os modificadores de acesso permitem que
você defina quem tem ou não acesso a determinados recursos.
• <tipo_retorno>: uma função pode retornar um valor, esse valor
pode ser do tipo inteiro (int), ponto flutuante (float ou double), cadeia de caracteres (string) ou booleano (bool).
• <nome_função>: o nome da função deve começar com uma letra, seguido por outras letras e/ou números, não sendo possível
utilizar caracteres especiais. Por boa prática de programação,
utiliza-se o estilo camel case. Esse estilo de nomenclatura deriva de sua aparência, que pode se assemelhar ao dorso de um
camelo (camel) e é usado em muitas linguagens de programação que não permitem espaços nos nomes das variáveis ou funções. O camel case possibilita a criação de nomes mais exclusivos e com mais significado para o desenvolvedor. Por exemplo:
SomarDoisNumerosPares, ObterOMaiorNumero. Esses nomes
podem ser lidos mais facilmente que somardoisnumerospares e
obteromaiornumero.
• <parâmetros>: os parâmetros são opcionais, sendo valores que
são passados para uma função para que ela os processe.
• <código_da_função>: este é o escopo da função, ou seja, onde
será codificado toda a ação que uma função deve desempenhar.
• <retorno>: por fim, o retorno é responsável por devolver ao fluxo
do código principal algum conteúdo que foi solicitado.

Exemplo:

1 class Program {
2
3 public static void main (string[] args){
4 int areaQuad, areaRet, lado, ladoMenor, ladoMaior, base, altura, areaTri;
5
6 lado = 4;
7 areaQuad = lado * lado;
8
9 ladoMaior = 8;
10 ladoMenor = 5;
11 areaRet = ladoMaior * ladoMenor;
12
13 base = 5;
14 altura = 8;
15 areaTri = (base * altura) / 2;
16 }
17 } 

Observe, na linha 3 deste código, que todo o código escrito até aqui é desenvolvido dentro de uma função principal chamada main. Ou seja, o main é a função principal de execução de todo o código em C#, desse modo, sempre que um programa é carregado, a primeira ação do sistema operacional é invocar a função main.

O código é responsável por realizar três cálculos: área do quadrado, área do retângulo e área do triângulo. No entanto, o código apenas utiliza a função principal. Observe que, na linha 7, é calculada a área do quadrado, realizando uma multiplicação; na linha 11, é calculada a área do retângulo, realizando uma operação de multiplicação; por fim, na linha 15, é calculada a área do triângulo, realizando uma multiplicação. Ou seja, foram realizadas três operações de multiplicação e é aqui que entra o conceito de função

O programador pode declarar a função em qualquer parte do código (exceto dentro de uma outra função ou fora da classe). Além disso, após desenvolver o código da função, o programador pode invocá-la a qualquer momento, em qualquer parte do programa (FEIJÓ; CLUA; SILVA, 2009). Observe, então, que é um recurso útil, principalmente se o objetivo for o reaproveitamento de código

### Funções nativas


O C# também permite que o desenvolvedor utilize as funções nativas das linguagens. Essas funções já estão prontas e podem ser invocadas no código a qualquer momento, o que facilita o processo de desenvolvimento. 

Sempre que é necessário apresentar um conteúdo na tela, é utilizada a função Console.WriteLine(), passando por parâmetro o conteúdo que deve ser impresso. O mesmo ocorre com a função Console.ReadLine. Neste caso, o usuário digita um determinado conteúdo e a função retorna o resultado. Logo, a função para imprimir na tela não possui retorno, e a função de entrada possui retorno.


