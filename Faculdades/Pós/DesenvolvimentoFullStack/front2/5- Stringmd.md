## String

**Introdução**

Uma das características mais fundamentais de uma linguagem de programação é o conjunto de tipos de dados que ela suporta. Esses são os tipos de valores que podem ser representados e manipulados em uma linguagem de programação.

**Objetivos da aula**

-   Definir o conceito de String na linguagem Javascript.
-   Demonstrar os principais métodos referentes a String em Javascript.

**Resumo**

JavaScript permite que você trabalhe com três tipos de **dados primitivos**:

-   **Números**, exemplo 123, 120,50 etc.
-   **Strings** de texto, exemplo "Esta string de texto" etc.
-   **Booleanos**, exemplo verdadeiro ou falso.

JavaScript também define dois tipos de dados triviais, **null** (nulo) e **undefined** (indefinido), cada um dos quais define apenas um único valor. Além desses tipos de dados primitivos, o JavaScript oferece suporte a um tipo de dado composto conhecido como **objeto**.

**Observação:** JavaScript não faz distinção entre valores inteiros e valores de ponto flutuante. Todos os números em JavaScript são representados como valores de ponto flutuante. JavaScript representa números usando o formato de ponto flutuante de 64 bits definido pelo padrão IEEE 754.

**Variáveis em JavaScript**

Como muitas outras linguagens de programação, JavaScript tem variáveis. As variáveis podem ser consideradas contêineres nomeados. Você pode colocar dados nesses contêineres e, em seguida, referir-se aos dados simplesmente nomeando o contêiner.

Antes de usar uma variável em um programa JavaScript, você **pode declará-la**. As variáveis são declaradas com a palavra-chave **var** da seguinte maneira:

var nome;

var sobrenome = “Silva”

Você também pode declarar várias variáveis com a mesma palavra-chave **var** da seguinte maneira:

Var nome, sobrenome;

O armazenamento de um valor em uma variável é chamado de **inicialização** de variável. Você pode fazer a inicialização da variável no momento da criação da variável ou posteriormente, quando precisar dessa variável. Por exemplo, você pode criar uma variável chamada “salario” e atribuir o valor 7.000,50 a ela mais tarde. Para outra variável, você pode atribuir um valor no momento da inicialização da seguinte maneira:

Var salario;

Var Nome = “Luis”

Salario = 3000

**Nota** - Use a palavra-chave **var** apenas para declaração ou inicialização, uma vez durante a vida de qualquer nome de variável em um documento. Você não deve declarar novamente a mesma variável duas vezes.

JavaScript é uma linguagem **não tipada**. Isso significa que uma variável JavaScript pode conter um valor de qualquer tipo de dados. Ao contrário de muitas outras linguagens, você não precisa dizer ao JavaScript durante a declaração da variável que tipo de valor a variável manterá. O tipo de valor de uma variável pode mudar durante a execução de um programa e o JavaScript cuida disso automaticamente.

**Nomes de variáveis JavaScript**

Ao nomear suas variáveis em JavaScript, mantenha as seguintes regras em mente.

-   Não usar nenhuma das palavras-chave reservadas de JavaScript como um nome de variável. Por exemplo, os nomes das variáveis break ou boolean não são válidos.
-   Os nomes das variáveis JavaScript não devem começar com um numeral (0-9). Eles devem começar com uma letra ou um caractere de sublinhado. Por exemplo, 123test é um nome de variável inválido, mas \_123test é válido.
-   Os nomes das variáveis JavaScript diferenciam maiúsculas de minúsculas. Por exemplo, Nome e nome são duas variáveis diferentes.

**String**

O JavaScript é bastante poderoso no manuseio de strings (textos, caracteres), fornecendo ao programador total flexibilidade, disponibilizando funções que podem auxiliar no desenvolvimento.

-   Uma das opções é usar o length para retornar o tamanho da string (números de caracteres)

var curso = “Javascript”

console.log(curso.length) //retorna 10

-   Outra opção é usar o charAt que retorna o caractere da posição especificada (inicia em 0).

var curso = “Javascript”

console.log(curso.charAt(2) //retorna v

-   Um dos mais usados é o indexOf que retorna o número da posição onde começa a primeira "string".

var curso = “Javascript top”

curso.indexOf("top")); //Resultado: 11

-   Outro que podemos usar é a substring que retorna o conteúdo da string que corresponde ao intervalo especificado. Começa no caractere posicionado em index1 e termina em index2 substring(index1, index2)

var curso = “Javascript”

curso.substring(0,4); //Resultado: Java

-   Outro muito legal é o TOUPPERCASE() que passa o conteúdo da string para letra maiúscula (Caixa Alta)

var curso = “Javascript”

curso.toUpperCase(); //Resultado: JAVASCRIPT

-   O TOLOWERCASE() passa o conteúdo da string para letra minúscula (Caixa Baixa).

var curso = “Javascript”

curso.toLowerCase() //Resultado: javascript

-   Outro que usamos bastante no nosso dia a dia de desenvolvedor é o replace. Ele substitui um valor por outro.

var curso = “Javascript”

curso.replace("JavaScript","Java"))//Resultado: Java

Referência Bibliográfica

FLANAGAN, David. **JavaScript:** O Guia Definitivo. 6ª Ed. Porto Alegre: Bookman, 2013.

FREEMAN, Eric. **Use a cabeça!:** programação JavaScript. 1ª Ed. São Paulo: Alta Books, 2016.