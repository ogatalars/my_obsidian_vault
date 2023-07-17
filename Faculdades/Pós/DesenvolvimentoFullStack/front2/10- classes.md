## Classes

**Introdução**

As classes foram introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos protótipos. Não utiliza um novo modelo de herança de orientação a objetos em JavaScript. São formas mais simplificadas de criar objetos e lidar com herança.

**Objetivos da aula**

-   Definir os conceitos de classes e objetos.
-   Reconhecer classe e objetos na linguagem Javascript
-   Demonstrar a implementação de classes e objetos na linguagem Javascript.

**Resumo**

**Declaração de classe**

A declaração de classe cria uma classe com um determinado nome usando herança baseada em **protótipo**.

![Fonte: Autoral](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669401502108-pCbYDEFR56.png "Fonte: Autoral")

Fonte: Autoral

**Definição de Classes**

**Class Expression**

A **class expression** é uma maneira de definir uma classe no ECMAScript 2015. Semelhante às expressões de função, as expressões de classe podem ser nomeadas ou não. Se nomeado, o nome da classe é local apenas para o corpo da classe.

![Fonte: Autoral](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669401537150-loJpOUupyC.png "Fonte: Autoral")

Fonte: Autoral

**Sintaxe**

![Fonte: Autoral](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669401559136-KIInh4KK4W.png "Fonte: Autoral")

Fonte: Autoral

**Descrição**

Uma expressão de classe tem uma sintaxe semelhante a uma declaração de classe (instrução). Tal como acontece com as instruções de classe, o corpo de uma expressão de classe é executado no modo estrito.

Existem várias diferenças entre expressões de classe e instruções de classe, no entanto:

-   As expressões de classe podem omitir o nome da classe ("identificador de ligação"), o que não é possível com instruções de classe.
-   Expressões de classe permitem que você redefina (declare novamente) classes sem lançar um SyntaxError. Este não é o caso com declarações de classe.

O método do construtor é opcional. As classes geradas com expressões de classe sempre responderão a typeof com o valor "função".

**Exemplos**

**Uma expressão de classe simples**

Esta é apenas uma expressão de classe anônima simples à qual você pode se referir usando a variável Foo.

![Fonte: Autoral](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669401606397-ntaPO0zMoB.png "Fonte: Autoral")

Fonte: Autoral

**Expressões de classe nomeada**

Se quiser fazer referência à classe atual dentro do corpo da classe, você pode criar uma expressão de classe nomeada. O nome só é visível dentro do escopo da própria expressão de classe.

![Fonte: Autoral](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669401646135-2RvAEhuU8k.png "Fonte: Autoral")

Fonte: Autoral

Referência Bibliográfica

FLANAGAN, David. **JavaScript**: O Guia Definitivo. 6ª Ed. Porto Alegre: Bookman, 2013.

FREEMAN, Eric. **Use a cabeça!**: programação JavaScript. 1ª Ed. São Paulo: Alta Books, 2016.