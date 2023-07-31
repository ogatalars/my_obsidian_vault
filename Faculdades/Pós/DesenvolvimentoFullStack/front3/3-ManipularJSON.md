**Introdução**

JSON é uma das formas mais utilizadas para manipular dados em uma aplicação front-end. Hoje, vamos criar um componente e fazer uma manipulação básica.

Uma REST API é um serviço de back-end que pode ser utilizado para enviar e receber os dados de uma aplicação front-end. Vamos aprender os conceitos e construir um exemplo prático.

**Objetivos da aula**

-   Manipulação de dados JSON.
-    Services.
-    Fake API.
-   REST API.

**Resumo**

Agora, vamos dar início a um processo muito importante em uma aplicação front-end PWA. A manipulação de dados em JSON, segundo a Mozilla, é uma sintaxe para serialização de objetos, matrizes, números, strings, booleanos, e null. Baseia-se na sintaxe Javascript.

Existem várias maneiras de recuperar dados e manipular ,por exemplo, recuperar dados de uma API REST ou acessar um arquivo Json salvo localmente dentro do projeto. A seguir, vamos adicionar uma modelo de dados no formato Json dentro do projeto e vamos listar todos os dados desse objeto em um componente.

Primeiro, adicionamos o arquivo “students.json” na pasta app e vamos usar essa técnica somente para demonstrar como podemos manipular uma lista de estudantes sem ter a necessidade de criar uma backend e recuperar os dados.

Vamos criar um componente denominado “Manipulando Json” e alterar o arquivo manipulando-json.component.ts para recuperar a informação do arquivo.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671814775533-fqR7Ir81zx.png)

No início do arquivo criamos uma interface _Student._ Interface em Typescript é uma maneira simples de criar um objeto, vamos criar um array do objeto Student sendo que parte do Json será feito de forma automática.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671814810060-SZo9WVVhIz.png)

O array Students vai receber o objeto Json que foi importado na segunda linha do arquivo dentro da função OnInit, temos uma função que vai imprimir esse objeto no console do browser.

Agora, vamos para HTML, o mais importante desse código e a parte do \*ngFor=”let student of students”. Isso é uma diretiva do angular que permite percorrer todo array dentro do HTML e tem um mesmo efeito se for em Javascript, porém essa diretiva somente pode ser utilizada no arquivo HTML.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671814850798-A11kChIGY9.png)

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671814871042-QyxoxvNYfI.png)

Através do Node JS é possível criar aplicações de back-end que acessam uma base de dados e criam um REST API. Tudo isso utilizando Javascript ou Typescript.

Conseguimos manipular um arquivo Json, atribuir um array de objetos e percorrer o mesmo no HTML usando a diretiva ngFor. Nesse momento, vamos criar uma FAKE API a partir de um arquivo JSON, porém vamos simular um REST API para construirmos um CRUD simples.

Para mais informações sobre o funcionamento do JSON server, favor entrar no github do projeto [https://github.com/typicode/json-server](https://github.com/typicode/json-server). A seguir, o comando instala o Json server usando NPM. **(Acesso em 04/11/2022)**

npm install -g json-server

Basicamente, criamos uma pasta e adicionamos um arquivo Json com uma lista de usuários e executarmos o comando abaixo:

json-server --watch db.json

Agora, temos uma simulação de uma REST API que vamos utilizar na construção da nossa aplicação. Através de um arquivo JSON salvo na pasta, o sistema Json Server feito em Node JS gera uma REST API com os métodos abaixo, conforme a figura 1 abaixo que demonstra o funcionamento de uma REST API com uma analogia ao CRUD:

![Fonte: https://www.edureka.co/blog/what-is-rest-api/ (Acesso em 04/11/2022)](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671814903328-9Zt9FB3m73.png "Fonte: https://www.edureka.co/blog/what-is-rest-api/ (Acesso em 04/11/2022)")

Para realizamos a comunicação com a nossa REST API, precisaremos criar um arquivo do tipo service através do comando abaixo:

ng g service services/user

No código abaixo vamos perceber que cada função tem uma analogia onde a função addUser utiliza um método POST e espera como resposta um Observable do objeto User. Segundo a documentação do Angular, (referência) o uso de observáveis como uma interface para lidar com uma variedade de operações assíncronas comuns.  O módulo HTTP usa observáveis para lidar com solicitações e respostas AJAX, sendo que HttpClient do Angular retorna observáveis de chamadas de método HTTP, por exemplo, http.get('/api') retorna um observável. As outras funções seguem a mesma lógica getUsers usando o método GET e assim por diante.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671814963754-FCD4oaExJm.png)

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1671814979000-J1TjQYrOKz.png)

**Tópicos avançados**

Acredito que, nesse momento, você já consegue continuar e criar uma aplicação com um contexto diferente. Vamos tentar criar uma FAKE API de produtos para listar na Home e criar um header com links para cadastro dos mesmos.

Existem várias maneiras de se comunicar com um servidor de _back-end_ até mesmo comunicar diretamente ao banco de dados na nuvem, como é o caso do Firebase. O mais importante é termos um conhecimento das tecnologias. Recomendo pesquisar mais a fundo sobre REST API, Graph QL e Firebase. Existem alguns canais no Youtube que você consegue complementar os conteúdos das nossas aulas como da Loiane Groner que aborda Java + Angular.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir:

[https://github.com/FaculdadeDescomplica/pos-advanced-front-end](https://github.com/FaculdadeDescomplica/pos-advanced-front-end)

Referência Bibliográfica

  
Angular Docs. **Angular IO**, Disponível em: < [https://angular.io](https://angular.io/) >. **(Acesso em 04/11/2022)**

Angular Material Docs. **Angular Material**, Disponível em: < [https://material.angular.io](https://material.angular.io/) >. **(Acesso em 04/11/2022)**