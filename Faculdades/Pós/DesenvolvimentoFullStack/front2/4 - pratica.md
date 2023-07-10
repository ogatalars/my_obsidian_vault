**Introdução**

Operadores são símbolos utilizados para atuar sobre valores. Com eles podemos fazer operações matemáticas, utilizar em estrutura de decisão e fazer atribuição de valores. Conhecer operadores faz parte da jornada de um desenvolvedor para atuar com qualquer linguagem de programação. Neste material, vamos ver os conceitos e as práticas de uso de operadores.

**Objetivos da aula**

-   Demonstrar o emprego, na prática, dos operadores Javascript nas soluções de problemas

**Resumo**

## **Operadores aritméticos**

Os operadores aritméticos são usados para desenvolver operações matemáticas. Veja abaixo alguns exemplos de uso de operadores aritméticos.

Se quisermos fazer uma operação de soma podemos usar operador de adição representado com o sinal de +. Imagine o seguinte:

x = 5

y = 5

z = x + y

z terá o resultado de 10.

Podemos fazer isso com outros operadores aritméticos como subtração - , multiplicação \*, divisão / e resto %. A maioria das pessoas está acostumada com esses operadores. Porém, vamos fazer mais um exemplo. Imagine que você queira saber se um determinado número é divisível por 2. Podemos fazer da seguinte forma.

x = 10

y = 2

z = x % y

Se o resultado dez for 0 isso indica que o número que está em x é divisível por 2. 

**Operadores de comparação**

Operadores de comparação, como o próprio nome diz, permitem comparar dois ou mais valores. São usados frequentemente dentro de instruções condicionais, como em comandos if.

Podemos entender que o operador de comparação == pode ser utilizado da seguinte forma:

X == Y

Utilizamos esse operador a maior parte do tempo para tomada de decisão. Nesse caso, se x for igual a y o retorno será true. 

Agora, olha que interessante, se usarmos o operador ===. Isso indica que um valor deve ser idêntico ao outro para o resultado ser true. O que quer dizer isso? 

Imagine o seguinte:

x = “5”

y = 5

x === y 

nesse caso dará falso. Porque o 5 do x, na verdade, é uma string e o 5 do y é um number. Dessa forma, eles não são idênticos. Idênticos seria se x e y fossem 5 como number.

**Operadores de lógicos**

Os operadores lógicos aceitam os valores lógicos true e false (verdadeiro e falso) como operandos e retornam valores lógicos como resultado. 

Esse operador é muito utilizado em combinação com o operador de comparação. Vejamos o exemplo abaixo:

X = 10

Y = 5

(x < 11 && y > 2)

Nessa expressão estamos verificando se o x é menor que 11 e também o y é maior que 2 então o resultado é verdadeiro. Repare que **as duas condições** precisam ser verdadeiras para que o resultado final seja verdadeiro. Agora, se uma das duas for falsa, o resultado final será falso.

Também temos a situação abaixo:

a = 20

b = 50

(a > 30 || b < 60)

Repare que a primeira expressão a é maior que 20 é falsa. Porém, a segunda expressão b é menor que 60 é verdadeira. Ou seja, se uma das duas for verdadeira, o resultado final será verdadeiro.

Referência Bibliográfica

Duckett J. **JavaScript de alto impacto** **.** Alta Books 2015.

Castro R. **JavaScript: guia prático.** Alta Books 2019.

Freeman Eric. **Use a cabeça! JavaScript.** Alta Books 2015.