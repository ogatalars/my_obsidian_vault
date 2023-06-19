**Introdução**

O Cascading Style Sheets (CSS) é uma "folha de estilo" que define como serão exibidos os elementos contidos no código de uma página da internet e sua maior vantagem é efetuar a separação entre o formato e o conteúdo de um documento. Isto torna o HTML mais legível e mantém o documento independente do formato.

Uma folha de estilo contém a definição de estilo para um ou mais documentos. Como o HTML é considerado documento, o CSS pode ser utilizado para formatar a página HTML.

**Objetivos da aula**

-   Descrever as principais propriedades CSS referentes a texto
-   Discutir a formatação de listas para menu em CSS
-   Explicar o conceito de classe em CSS

**Resumo**

**Propriedades para texto**

Com CSS podemos definir propriedades do texto como: tamanho da fonte, cor da fonte, peso da fonte, tipo da fonte, espaçamento entre linhas e espaçamento entre letras.

p {

            text-align: center;

            font-family: Arial, Helvetica, sans-serif;

            font-style: italic;

            font-size: 14px;

            text-shadow: 3px 3px 3px #ababab;

            color: white;

            text-decoration-line: underline;

            font-weight: bold;

            line-height: 90%;

            background-color: green;

}

No exemplo acima, o seletor p vai atribuir aos parágrafos da página: alinhamento do texto ao centro, fonte Arial, tipo de fonte itálica, tamanho da fonte de 14 pixels, sombreamento ao texto, cor cinza, decoração sublinhada, negrito para peso da fonte e altura da linha de 80% do tamanho da fonte e cor de fundo verde.

A propriedade font-family permite que se faça uma lista de prioridades de famílias de fontes e/ou nomes genéricos de famílias a serem utilizadas. O navegador irá utilizar a primeira fonte da lista que for encontrada no computador, ou poderá fazer o download utilizando a informação contida na regra _@font-face_.

A propriedade margin do CSS define a área de margem nos quatro lados do elemento.

**Formatando listas para menu**

Um menu pode ser criado aplicando CSS aos elementos de uma lista não ordenada como a que se segue.

<ul\>

            <li\><a\>Item 1</a\></li\>

            <li\><a\>Item 2</a\></li\>

            <li\><li\>Item 3</a></li\>

</ul\>

Para transformar a lista acima em menu, removemos os marcadores utilizando a propriedade list-style: none; no seletor ul, fazemos os itens li ”flutuarem” para a esquerda com utilizando a propriedade float: left; por fim, adicionamos um espaçamento entre os itens com padding: 10px; e removemos o sobrescrito do link  com text-decoration: none;

ul {

    list-style: none;

}

ul li {

            float: left;

}

ul li a {

    padding: 10px;

            text-decoration: none;

}

**Estilizando tabelas com pseudo-classes**

Com CSS podemos estilizar elementos fazendo uso de pseudo classes. Pseudo classes são palavras-chave adicionadas a seletores que especificam um estado especial do elemento selecionado. A lista de pseudo classes pode ser encontrada na [**documentação para desenvolvedores da Mozilla**](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes)**. No exemplo abaixo utiliza-se uma tabela, atribuindo a cor de fundo** **#e9e9e9** **para as linhas pares e a cor de fundo** **#bdbdbd** **para as linhas ímpares.**

tr:nth-child(even) {

            background: #e9e9e9;

}

tr:nth-child(odd) {

    background: #bdbdbd;

}

**Usando caixas e atribuindo classes e Ids**

**<div****\>** É um elemento de divisão de conteúdo. É um contêiner genérico utilizado para agrupar elementos para fins de estilos (usando classes ou ids). Deve ser utilizada somente quando não tiver outro elemento de semântico (tal como **<****section****\>, <article****\>, <****header****\>, <****footer****\>** **, etc).**

Classes e ids permitem ao CSS e ao Javascript selecionarem e acessarem elementos da página HTML. Classes podem ser atribuídas a vários elementos, já os Ids só podem ser atribuídos a um elemento pois ele é o identificador do elemento. No exemplo a seguir, todas as divs de classe subtítulo receberão cor de fundo vermelho e cor de texto branca. E  o elemento com id título receberá cor de fundo azul claro, cor de texto preta e texto alinhado ao centro.

**<****style****\>**

#titulo **{**

            **background-color: lightblue;**

            **color: black;**

            **text-align: center;**

**}**

.subtitulo **{**

            **background-color: red;**

            **color: white;**

**}**

**<****/style****\>**

**<****h1** **id****\="titulo">****Cidades****<****/h1****\>**

**<****h2** **class****\="subtitulo">****Londres****<****/h2****\>**

**<****h2** **class****\="subtitulo">****Paris****<****/h2****\>**

**<****h2** **class****\="subtitulo">****Tokyo****<****/h2****\>**

**Como aplicar na prática o que aprendeu**

Vamos adicionar à folha de estilo _style.css_ algum código para estilizar o título da página de modo a alinhá-lo ao centro, atribuir o estilo itálico a ele, tamanho de fonte 44px, sombreada, cor branca e negrito utilizando o código a seguir:

p {

 text-align: center;

 font-style: italic;

 font-size: 44px;

 text-shadow: 3px 3px 3px #0f0f0f;

           color: white;

           font-weight: bold;

}

Após inserir este código no arquivo _style.css_, salve, volte ao navegador, atualize a página e veja se mudou e está conforme o esperado.

Agora vamos adicionar estilo à lista que havíamos inserido na página. Vamos remover os marcadores, adicionar um espaçamento entre os itens, deixá-la na horizontal, como um menu, aplicar cor de fundo cinza e cor de texto branco:

ul {

                        list-style: none;

                        padding: 25px 50px 70px 0px;

                        background: gray;

            }

            ul li {

                        float: left;

                        padding: 10px;

                        color: white;                  

            }

Salve, volte ao navegador, atualize a página e veja se mudou e está conforme o esperado.

Vamos agora estilizar a tabela utilizando pseudo classes atribuindo cor de fundo  _gray_ para o cabeçalho, cor de fundo _#e9e9e9_ para as linhas pares e cor de fundo _#bdbdbd_ para as linhas ímpares

thead th {

    background: gray;

    color: white;

}

tr:nth-child(even) {

    background: #e9e9e9;

}

tr:nth-child(odd) {

    background: #bdbdbd;

}

Mais uma vez, salve, volte ao navegador, atualize a página e veja se mudou e está conforme o esperado.

**Dica quente para você não esquecer**

-   Existe uma [lista de fontes “seguras para a web"](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#web_safe_fonts) (fontes que são tão comuns que são consideradas universalmente disponíveis nos computadores). Você pode encontrá-la no site da W3Schools: [https://www.w3schools.com/cssref/css\_websafe\_fonts.asp](https://www.w3schools.com/cssref/css_websafe_fonts.asp)
-   Para a nomenclatura de classes e ids, é considerada boa prática usar nomes que descrevam o propósito semântico do elemento.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: [https://github.com/FaculdadeDescomplica/Practitioner\_FrontEnd.git](https://github.com/FaculdadeDescomplica/Practitioner_FrontEnd.git)

Referência Bibliográfica

**MDN Web Docs**. \[_S. l._\], 20 set. 2022. Disponível em: [https://developer.mozilla.org/pt-BR/docs/Web/CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) Acesso em: 20 set. 2022.

**W3SCHOOLS**. \[_S. l._\], 20 set. 2022. Disponível em: [https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp) Acesso em: 20 set. 2022.