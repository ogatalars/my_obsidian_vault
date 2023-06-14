## Entendendo sobre estilos

**Introdução**

O CCS, é o acrônimo de Cascading Style Sheets, cuja tradução para português significa Folhas de estilo em cascata. É uma linguagem usada para formatar a apresentação de uma página em HTML no navegador. Os padrões desta linguagem são definidos pelo W3C, mesmo consórcio que define os padrões para a linguagem HTML.

**Objetivos da aula**

-   Definir o conceito de CSS
-   Discutir a estrutura básica do CSS
-   Identificar forma de implementar CSS

**Resumo**

**O que é o CSS e como é sua sintaxe**

O CCS, é o acrônimo de _Cascading Style Sheets,_ cuja tradução para português significa Folhas de estilo em cascata. É uma linguagem usada para formatar a apresentação de uma página em HTML no navegador. Os padrões desta linguagem são definidos pelo W3C, mesmo consórcio que define os padrões para a linguagem HTML.

O CSS foi criado em 1996 para remover da página HTML o estilo, que antes era atribuído por tags como _<font>_ que eram um pesadelo para desenvolvedores pois se aplicavam a cada elemento HTML. Para resolver esse problema, o _World Wide Web Consortium_ (W3C) criou o CSS, que economiza muito trabalho controlando o layout de várias páginas da web de uma só vez. O CSS atualmente está em sua terceira versão.

A linguagem CSS é utilizada para definir propriedades de elementos HTML como cores, fontes, tamanhos de texto, espaçamento entre  elementos, posicionamento dos elementos, definir imagens de fundo ou cores de fundo e variações de exibição para diferentes dispositivos e tamanhos de tela. A palavra cascata significa que um estilo aplicado a um elemento pai também se aplicará a todos os elementos filhos dentro do pai.

A sintaxe do CSS compõe-se de um seletor, abertura de chaves, declaração de propriedade e valor para esta, como no exemplo a seguir, onde atribui-se ao seletor p a fonte verdana e o tamanho de 20px.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669414216183-GYa6VBwZ9A.png)

-   O seletor aponta para o elemento HTML que se deseja estilizar.
-   O bloco de declaração contém uma ou mais declarações separadas por ponto e vírgula.
-   Cada declaração inclui um nome de propriedade CSS e um valor, separados por dois pontos.
-   Os blocos de declaração são cercados por chaves.

**Formas de adicionar CSS ao documento HTML**

-   Existem três formas de adicionar CSS à uma página HTML:
-   Inline (em linha): Um estilo embutido usado para aplicar um estilo único para um único elemento. Deve se adicionar o atributo style ao elemento que ser quer alterar e dentro dele, definir as propriedades, como no exemplo a seguir

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669414285333-awZz26oy2z.png)

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669414297022-DIC2JNRNUS.png)

-   Internal (interno): O código CSS é definido na própria página HTML, dentro do elemento <style\>, dentro da seção <head\>. Exemplo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669414394129-GQSHLinK8t.png)

-   External (externo): Um arquivo externo à página HTML que deve ser incluído via elemento <link\>, dentro da seção <head\>. no cabeçalho da página. Com uma folha de estilo externa, você pode alterar a aparência de um site inteiro alterando apenas um arquivo!  Exemplo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669414589401-uJz4GVMYZM.png)

**Como aplicar na prática o que aprendeu**

-   Vamos incluir em nosso projeto um arquivo externo de CSS.
-   Para isso, vamos criar uma nova pasta dentro de nosso projeto chamada _css_: Clique com o botão direito na pasta de seu projeto no _VS Code_ e em seguida em _New folder._ Em seguida, dê o nome _css_ para a pasta criada.
-   Agora vamos criar um arquivo .css dentro da pasta: Clique com o botão direito sobre a pasta css criada e em seguida em _New file_. Dê o nome para o novo arquivo de _style.css._
-   Abra o arquivo _index.html_ e adicione dentro da <head> a inclusão do arquivo css com o seguinte código:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669414638235-s4PJzkk0gL.png)

-   Agora abra o arquivo style.css e vamos adicionar algum código nele. Vamos colorir o fundo da página de de cinza, adicionando o código

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669414703128-qpk6vxE3HE.png)

-   Agora vamos adicionar um espaçamento entre as seções com o seguinte trecho de código:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1669414737514-pYKUdoXubM.png)

**Dica quente para você não esquecer**

-   Você pode usar o **_W3C_** [**_CSS Validation Service_**](https://jigsaw.w3.org/css-validator/) para verificar se o seu CSS é válido. Essa é uma ferramenta indispensável para depuração: [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: [https://github.com/FaculdadeDescomplica/Practitioner\_FrontEnd.git](https://github.com/FaculdadeDescomplica/Practitioner_FrontEnd.git)

Referência Bibliográfica

DEVELOPER. **CSS**. Disponível em: [https://developer.mozilla.org/pt-BR/docs/Web/CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) Acesso em: 20 set. 2022.

W3Schools is Powered by W3. **CSS Tutorial**. Disponível em: [https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp) Acesso em: 20 set. 2022.