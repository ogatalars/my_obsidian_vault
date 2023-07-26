**Introdução**

A primeira versão do Angular foi denominada Angular Js e consistia num framework Javascript. Posteriormente, o Google reformulou o framework utilizando a linguagem de programação Typescript e foi denominado Angular 2.

Angular é um framework com recursos modernos da plataforma da Web para oferecer experiências semelhantes aos aplicativos. Instalação de alto desempenho, offline e sem etapas é uma estrutura de design de aplicativos e plataforma de desenvolvimento para criar aplicativos de página única eficientes e sofisticados.

**Objetivos da aula**

-   Primeiro, aprender a criar projeto em Angular material
-   Organizar as pastas, arquitetura de componente
-   E criação dos primeiros componentes, por exemplo, o header.

**Resumo**

Os aplicativos angulares são um _single page web application_ traduzindo "aplicativo de uma página"; ou seja, quando o estado é alterado, a página não é recarregada. Em vez disso, o Document Object Model (DOM) é modificado para alterar seu conteúdo. Angular implementa isso usando um esquema virtual DOM e um detector de mudança de estado, de modo que, quando o estado do aplicativo é alterado, apenas o DOM é modificado para o mínimo necessário para refletir a mudança.

Agora vamos para a criação do nosso primeiro projeto:

Para isso, é necessário instalar o Node Js. O link abaixo contém as instruções para instalação [https://nodejs.org/en/](https://nodejs.org/en/) **(Acesso em 04/11/2022)**

Teremos que instalar o Angular CLI que consiste num conjunto de comandos, bibliotecas e instruções do Angular. O comando abaixo instala o Angular CLI através do NPM do node.

npm install -g @angular/cli

Agora, já podemos criar nosso primeiro projeto com o comando abaixo.

ng new descomplica

O Angular CLI é, neste momento, uma aplicação Angular básica com apenas um componente.

A imagem abaixo demonstra o projeto criado:

![Figura 1 – Autoria própria](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671750379197-QKHIUxYK64.png "Figura 1 – Autoria própria")

Figura 1 – Autoria própria

Para entender um pouco sobre a arquitetura de componentes temos que pensar que no Angular sempre temos um componente pai denominado app.components.ts. Esse componente tem um arquivo HTML, um arquivo de module que serve para importar as classes de dependência do projeto. Esse componente pai pode ter vários componentes filhos, geralmente, se criar um componente de rotas e dentro desse componente renderizamos nossos componentes que vamos denominar páginas.

A pasta node\_modules contém os códigos das dependências do projeto. Você pode incluir quantas dependências forem necessárias. Normalmente, se usa o NPM para adicionar uma nova dependência.

Nesse projeto, vamos utilizar o modelo de rotas (figura 2) e no decorrer da disciplina adicionar novas rotas ao projeto. Uma rota define o caminho do componente página que deve ser carregado no componente app-routing.module.ts que foi gerado de forma automática pelo projeto. Faremos toda a configuração das rotas do nosso projeto conforme a figura 2 e a figura 3. Posteriormente, vamos aprofundar de forma prática sobre a configuração das rotas.

![Fonte: Autoria própria, 2022.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671750960015-rOy91JUhGp.png "Fonte: Autoria própria, 2022.")


![Fonte: Autoria própria, 2022.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671750979054-pzgr4C40Je.png "Fonte: Autoria própria, 2022.")

Fonte: Autoria própria, 2022.

Agora, vamos para a configuração das pastas, a imagem abaixo demonstra as pastas já criadas. A pasta pages contém os componentes que representam uma página dinâmica no aplicativo. A pasta model contém os objetos e a pasta components contém os componentes filhos que podem ser compartilhados no projeto. Outras pastas serão criadas durante a disciplina.

![Figura 4 – Autoria própria](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671751008733-aMvgzyWn8m.png "Figura 4 – Autoria própria")

Figura 4 – Autoria própria

Vamos criar um componente pai e um filho. A partir desses componentes passar informações entre eles. Utilize o comando abaixo para criar os componentes:

ng g componentes pages/home

ng g componentes componentes/header

Esse será o conteúdo do nosso componente home(pai).

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671751071021-slvEQJL9qN.png)

Vamos passar a informação nome “Professor Bruno Hauck” para o nosso componente filho, incluindo no HTML do componente home o seguinte código.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671751109971-hChhJUl6gT.png)

Dessa maneira, passamos o dado para componente filho.

No nosso componente filho vamos atribuir esse dado a uma variável do tipo input, conforme o código abaixo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671751530502-Clyg3a8sG6.png)

Agora, para mostrar a informação no HTML do componente header utilizamos o código abaixo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671751565650-zJZKTX61tL.png)

No decorrer da disciplina adicionaremos novos códigos para criar um App completo com cadastro, login e listagem, dentre outras funcionalidades.

**Como aplicar na prática o que aprendeu**

Se quiser complementar seus estudos, você pode criar uma nova aplicação em Angular e criar subcomponentes passando informações para o componente filho, organizando o seu projeto e as pastas como desejar.

**Conteúdo bônus**

**Tópicos avançados**

Na página do Angular IO temos dois exercícios de exemplo: _tour of heros_ e um exemplo básico de lista de produtos.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir:

[https://github.com/FaculdadeDescomplica/pos-advanced-front-end](https://github.com/FaculdadeDescomplica/pos-advanced-front-end)

Referência Bibliográfica  
 

Angular Docs. **Angular IO**. Disponível em: < [https://angular.io](https://angular.io/) >. **(Acesso em 04/11/2022)**