## Utilizando Arrays

**Introdução**

Arrays são uma ferramenta poderosa e abrangente no Javascript. São muito intuitivos de usar e permite fazer quase tudo com ele. No entanto, existem diferenças importantes entre arrays em Javascript e outras linguagens convencionais. Conhecê-los ajudará você a liberar seu verdadeiro potencial.

**Objetivos da aula**

-   Demonstrar o emprego, na prática, dos Arrays Javascript nas soluções de problemas

**Resumo**

Quando desenvolvemos uma aplicação, geralmente, temos que manipular os arrays para que possamos por exemplo filtrar seus dados. Dessa forma, o Javascript possui alguns métodos importantes que facilitam a manipulação de array. Nesse material iremos tratar sobre como podemos trabalhar com arrays de forma eficiente e eficaz.

**Reduce**

O método reduce() aplica uma função em um acumulador e cada valor do array (da esquerda para a direita) para reduzi-lo a um único valor. Este método pode ser usado para condensar todos os valores de um array em um único valor. Vejamos o exemplo abaixo:

![Fonte: Autoral](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669398561649-5IbpcSDeVl.png "Fonte: Autoral")

Fonte: Autoral

**Map**

Muitas vezes é necessário gerar um novo array, com base nos valores de um array existente. Isso é possível usando o map. Por exemplo, para gerar um array de comprimentos de strings a partir de um array de strings:

![Fonte: Autoral](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669398617406-AsGTIvZpGP.png "Fonte: Autoral")

Fonte: Autoral

Neste exemplo, uma função anônima é fornecida à função map(), e a função map a chamará para cada elemento na matriz, fornecendo os seguintes parâmetros, nesta ordem:

-   O próprio elemento
-   O índice do elemento (0, 1...)
-   A matriz inteira(Array)

**Filter**

O método filter() aceita uma função de teste e retorna um novo array contendo apenas os elementos do array original que passa no teste fornecido.

![Fonte: Autoral](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669398724006-GwyMaJdkSk.png "Fonte: Autoral")

Fonte: Autoral

A variável odd conteria o seguinte array: \[5,43\].

**For...in**

Podemos iterar em um array de várias formas. Uma boa opção é utilizar o for...in.

![Fonte: Autoral](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669398782315-fUgsD76XTB.png "Fonte: Autoral")

Fonte: Autoral

**For...of**

Uma outra forma de iterar é usando o loop for...of. Essa é a maneira recomendada de iterar sobre os valores de um array:

![Fonte: Autoral](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669398813349-tMEysnEc1l.png "Fonte: Autoral")

Fonte: Autoral

O exemplo a seguir mostra a diferença entre um loop for...of e um loop for...in:

![Fonte: Autoral](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669398848850-KNI5XcBfzr.png "Fonte: Autoral")

Fonte: Autoral

Referência Bibliográfica

FLANAGAN, David. **JavaScript**: O Guia Definitivo. 6ª Ed. Porto Alegre: Bookman, 2013.

FREEMAN, Eric. **Use a cabeça!**: programação JavaScript. 1ª Ed. São Paulo: Alta Books, 2016.