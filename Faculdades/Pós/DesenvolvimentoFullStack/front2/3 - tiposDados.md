**Introdução**

JavaScript é uma das linguagens mais importantes hoje. Está disponível em quase todos os dispositivos, sejam smartphones, televisores ou, graças ao NodeJS, agora também na área de servidores.

JavaScript é uma plataforma criada pela Netscape que permite a programação orientada a objetos. Ele permite a criação de aplicativos e documentos que podem ser executados na Internet. Também oferece opções para interagir em páginas web e para ler, escrever ou alterá-los. Além disso, possui operadores poderosos para dar mais dinamismo aos nossos códigos.

**Objetivos da aula**

-   Definir os tipos de dados e de variáveis em Javascript
-   Demonstrar os principais operadores da linguagem Javascript.
-   Explicar como trabalhar variáveis e operadores em uma rotina Javascript.

**Resumo**

**Operadores**

Operadores são caracteres ou cadeias de caracteres que ligam dois objetos e processam para ter um resultado. Existem vários grupos de operadores:

**Operadores aritméticos**

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669306555746-ggd4zP0tda.png)

Exemplo:

a = 5 + 4; // a é 9 

b = a-3; // b é 9-3, então 6 

c = a \* b; // c é 9 vezes 6, então 54 

d = c / 4,5; // d é 54 divide 4,5, então 12 

e = d% 5; // e é o resto de 12 dividido por 5, então 2 (5 + 5 + 2) 

**Operadores de string**

Os operadores de string só podem ser usados com strings (texto). O +operador junta duas strings. Ao contrário, o +=operador é usado para anexar uma string a uma existente. Exemplo:

Op.     Descrição                                   

+        Une duas strings                        

\+ =     Acrescenta outro a uma string    

Exemplo:

a = 'ABC'; 

b = 'DEF'; 

c = 'GHI'; 

d = a + b; 

// d é 'ABC' mais 'DEF', então 'ABCDEF' 

e = 'ABC' + b; 

// e é 'ABCDEF' 

f = e; 

f + = c; 

// c, ou seja, 'GHI', é anexado a f. 

// obtemos f com 'ABCDEFGHI' 

**Operadores lógicos**

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669306616586-UZCgQYI409.png)

Operadores lógicos são usados para formular condições. Uma condição sempre consiste em dois lados que se baseiam na igualdade ou na desigualdade. Pode ser true ou false. Exemplo:

a = 3; b = 5; 

if (a == b) {/\*...\*/} 

// se a é igual a b, a afirmação é verdadeira 

if (a! = b) {/\*...\*/} 

// se a não é igual para b, a afirmação é verdadeira 

se (a == 3 && b! = 4) {/\*...\*/} 

// se a é 3 AND b não é 4, então verdadeiro 

se (a == 4 || b = 5) {/\*...\*/} 

// se a for 4 OU b for 5, verdadeiro 

se (a <5) {/\*...\*/} 

// se a for menor que 5, verdade

**Operadores de atribuição**

Operadores de atribuição são usados para indicar valores. 

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669306725828-IM62BSBZPP.png)

Exemplo:

a = 3; 

a + = 4; // = 7 

a - = 3; // = 4 

a \* = 5; // = 20 

a / = 4; // = 5 

**Dica quente para você não esquecer** 

-   [Aprenda um pouco mais sobre operadores de atribuição](http://www.macoratti.net/18/09/js_dif1.htm)
-   [Conheça mais sobre operadores lógicos](https://www.javascriptprogressivo.net/2018/08/And-Or-Not-Operador-Logico-JavaScript.html)

Referência Bibliográfica

Duckett J. **JavaScript de alto impacto** . Alta Books 2015.

Castro R. **JavaScript:** guia prático. Alta Books 2019.

Freeman Eric. **Use a cabeça!** JavaScript. Alta Books 2015.