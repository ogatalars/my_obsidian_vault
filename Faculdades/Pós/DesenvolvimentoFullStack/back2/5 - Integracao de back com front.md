**Introdução**

Integrar o BackEnd com o FrontEnd é fundamental para desenvolver aplicações web e garantir que todas as funcionalidades estejam operando corretamente. Isso envolve a comunicação entre os servidores que processam a lógica do aplicativo (BackEnd) e a interface do usuário (FrontEnd). Além disso, é essencial utilizar um sistema de versionamento de forma prática.

**Objetivos da aula**

O objetivo desse módulo é compreender a integração de uma aplicação BackEnd com uma aplicação FrontEnd e também fazer o versionamento do código para controlar as mudanças no código fonte e garantir que as atualizações sejam implementadas de forma consistente e organizada.

**Resumo**

**Integração BackEnd, FrontEnd e Express**

Começando do começo, precisamos garantir que o Express vai liberar o acesso de uma aplicação FrontEnd no nosso BackEnd. Para isso vamos instalar o pacote cors do npm que serve basicamente para autorizar as requisições no Backend.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681853730188-B47SvK5XM9.png)

Além disso, é preciso atualizar o index.js para receber o cors, e o novo index ficará assim:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681853761769-9twz77gaMR.png)

Mas o que é esse tal de cors? É um dos maiores problemas e erros infinitos para o time de desenvolvimento! CORS (_Cross-Origin Resource Sharing_) é um mecanismo de segurança usado pelos navegadores web para limitar o acesso a recursos de origens diferentes daquela que a página atualmente exibe. O CORS permite que o servidor especifique quais origens têm permissão para acessar seus recursos. O servidor envia um cabeçalho de resposta _Access-Control-Allow-Origin_ que indica quais domínios podem acessar seus recursos. Isso ajuda a prevenir ataques maliciosos, como o roubo de credenciais de usuários ou a injeção de scripts maliciosos em páginas da web. E geralmente, se você tiver algum erro de segurança no seu projeto, verifique as configurações do cors.

A partir daqui, as implementações essenciais são parte do que vai dar forma a nossa API. E uma API é uma _Application Programming Interface_ que é basicamente uma interface de programação de aplicação. É por ela que você vai ter a compatibilidade das suas rotas e modelos do BackEnd com o FrontEnd.

Além disso, a API define as regras para como o Frontend deve enviar e receber dados do Backend, permitindo que a interface do usuário seja atualizada com informações dinâmicas e personalizadas para cada usuário. Isso significa que o Frontend não precisa ter conhecimento dos detalhes de implementação do Backend, como a estrutura de bancos de dados ou a lógica de negócios, porque o que integra são os controladores com os mapeamentos via URL.

Os módulos de serviço no FrontEnd serão responsáveis por criar a compatibilidade com os arquivos de controladores do BackEnd que fornecem as rotas de acesso. Na aplicação que está sendo construída, este é um exemplo de módulo de serviço no Angular:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1684506945348-x3DWTWig9O.png)

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1684508927020-gWgg49bzm8.png)

No exemplo acima, foi feito mapeamento das rotas e URLs para cada ação CRUD para a entidade Course utilizando a biblioteca Axios para realizar requisições HTTP.   Ele possui métodos para realizar operações HTTP nos verbos GET, PUT, POST e DELETE, que são as ações básicas do CRUD que foram implementadas no BackEnd.

O método get<T>() recebe como parâmetro um objeto do tipo GetOptions que contém uma URL e parâmetros opcionais a serem enviados na requisição. Ele faz uma requisição GET utilizando a instância do Axios e retorna a resposta como um objeto do tipo Promise<T>. Caso ocorra algum erro na requisição, é invocado o método privado normalizeError() que retorna um objeto do tipo ErrorResponse. Os métodos put<T>(), post<T>() e delete<T>() são semelhantes ao método get<T>(), mas realizam requisições utilizando os respectivos verbos HTTP. O serviço utiliza a injeção de dependência do Angular para injetar um ErrorHandler que será utilizado para lidar com erros. Por fim, o serviço utiliza a anotação @Injectable({ providedIn: 'root' }) para informar ao Angular que ele é um serviço raiz e pode ser injetado em toda a aplicação. Neste caso, a mesma estrutura é aplicada a todas as outras entidades, apenas ajustando nos respectivos arquivos e com respectivos nomes.

Outras etapas da construção dessa integração, são ajustar as ações de roteamento no componente de formulário de cada entidade no FrontEnd. O construtor do form.component.ts de cada entidade precisa ter o roteamento e também a validação de qual método HTTP ele está validando que está acontecendo, nesse caso, com os parâmetros “params.id !== undefined && params.id !== null”.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681853948636-xKtyovjJgW.png)

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681853959395-zaKdf6MRnj.png)

Este código é uma classe TypeScript que possui um construtor e um método assíncrono chamado "onSubmit". O construtor recebe três parâmetros: "route", "router" e "courseService". Esses três parâmetros são objetos injetados por meio de dependência que serão usados dentro da classe. O método "onSubmit" é assíncrono e verifica se o formulário é válido.

Dentro do construtor, há um bloco de código que cria uma assinatura para o evento "queryParams" do objeto "route". Esse evento é disparado sempre que houver uma mudança na consulta da URL atual. O método "subscribe" é usado para se inscrever nesse evento e executar um código sempre que ele for disparado. O código que é executado verifica se há um parâmetro "id" na consulta da URL e, em caso positivo, faz uma chamada assíncrona ao método "get" do objeto "courseService" para obter um curso com o ID correspondente. Esse curso é armazenado em uma variável chamada "course" e, em seguida, é atribuído a outra variável chamada "model". Caso contrário, a variável "model" é inicializada como um objeto vazio. No método "onSubmit" o teste é se o formulário for válido, ele verifica se a variável "model" possui um ID. Se houver um ID, o método "put" do objeto "courseService" é usado para atualizar o curso correspondente no backend. Caso contrário, o ID é excluído da variável "model" e o método "post" do objeto "courseService" é usado para adicionar um novo curso no backend. Após a conclusão da operação, o método "navigate" do objeto "router" é chamado para navegar para a página "/courses".

Essa mesma estrutura deve ser implementada e utilizada nas outras entidades, a aplicação e essa estrutura do form.component.ts é o que cria a integração e funcionamento correto do CRUD do BackEnd em conjunto com o serviço de rotas.

Neste projeto, também utilizamos a biblioteca Axios, similar a biblioteca nativa Node.js, http, que é utilizado do lado do BackEnd. Axios é uma biblioteca para fazer requisições HTTP para servidores. Ele permite que você faça solicitações HTTP para um servidor e receba uma resposta. Com ela, você pode fazer solicitações GET, POST, PUT, DELETE e outras solicitações HTTP. Utilizamos essa biblioteca porque sua principal vantagem é a simplicidade e facilidade de aprendizado e uso. Para utilizar Axios, você precisa instalá-lo através do NPM como mostrado abaixo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681925831185-Kk7O1RUpeL.png)

Em seguida, importá-lo em seu projeto, como todas as outras que utilizamos em aula, como é demonstrado num pedaço de código abaixo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681925996778-fHwMJeLdKy.png)

Esta é apenas uma breve explicação, existem muitos outros recursos e opções disponíveis na biblioteca como, por exemplo, lidar com autenticação, configurar cabeçalhos personalizados, cancelar solicitações e muito mais. Lembre-se de estudar a documentação para conseguir fazer outras configurações/implementações no projeto.

Outro detalhe sobre a implementação e integração do BackEnd e do FrontEnd é a utilização de funções assíncronas. Para isso, nossa referência é a biblioteca Promise que representa exatamente isso: a conclusão de uma operação assíncrona e anexar um retorno de chamada que é invocado quando essa “promessa” é resolvida (seja com sucesso ou com algum erro). Essa também é uma das bibliotecas mais utilizadas e necessárias para um bom desenvolvimento de uma aplicação Web. Essa biblioteca é nativa do Node.js e não é necessária a instalação, apenas a atualização dos pacotes/dependência rodando o comando “npm install”. A utilização acontece nas implementações dos métodos de HTTP, como utilizamos na implementação da aplicação dessa disciplina, e você pode ver o trecho de código abaixo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681926028270-bcsGNUZJ13.png)

**Versionamento do Código**

A forma mais simples de fazer o versionamento de código com o Git é usar o fluxo de trabalho básico, que envolve os seguintes passos:

-   Inicializar um repositório Git no diretório do projeto com o comando “git init” (inicializa um novo repositório Git no diretório do projeto).
-   Adicionar os arquivos ao repositório Git com o comando “git add” (adiciona os arquivos ao repositório Git, para que o Git possa monitorar as mudanças neles).
-   Confirmar as mudanças com o comando “git commit” (confirma as mudanças no repositório Git).

Esse é o resumo do resumo, e pode-se usar também o plugin do VS Code para ter uma visão gráfica além do Sourcetree. O que você precisa ter em mente é que o versionamento de código precisa ser eficiente: com um fluxo de trabalho definido e boas mensagens de commit - que são mensagens curtas e auto explicativas.

Esse é um fluxo de trabalho básico e simples, mas é importante lembrar que o Git oferece muitos recursos avançados de versionamento de código, como ramificações (branches), mesclagem (merging), revisões (revisions), tags (tags), entre outros. À medida que o projeto cresce, é recomendável usar esses recursos para gerenciar de forma mais eficiente as alterações no código. E vamos aprender mais nas próximas aulas.

**Como aplicar na prática o que aprendeu**

Nesse momento, para aplicar na prática o que você aprendeu é muito importante que você replique o código criado em aula para conseguir validar o seu entendimento e, principalmente, iniciar a construção da sua aplicação.

Essa disciplina tem um repositório no Github que será utilizado para toda a parte prática: [FaculdadeDescomplica/Intermediary-BackEnd](https://github.com/FaculdadeDescomplica/Intermediary-BackEnd).

**Conteúdo bônus**

**Tópicos avançados**

Caso você queira aprofundar seus estudos, recomendo pesquisar projetos para iniciantes que fazem uma integração de BackEnd com FrontEnd para ter um portfólio que vai além do CRUD. Algumas sugestões são: calculadora, relógio analógico, lista de tarefas, que são variações de CRUD com ações mais simples. Caso queira tentar algo um pouco mais avançado, pode conectar sua aplicação com serviços de APIs públicas como do Google Maps ou clonar sites como Spotify ou Netflix. Espero que você busque ideias e comece a criar um portfólio bem legal!

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: 

[https://github.com/FaculdadeDescomplica/Intermediary-BackEnd](https://github.com/FaculdadeDescomplica/Intermediary-BackEnd)

Referência Bibliográfica

COELHO, Letícia. **10 Projetos back-end Para Implementar E Ter Um Portfólio Que Vai Além Do CRUD**. Artigo no Linkedin, 2022. Disponível em: <[https://www.linkedin.com/pulse/10-projetos-back-end-para-implementar-e-ter-um-portf%C3%B3lio-coelho/?originalSubdomain=pt](https://www.linkedin.com/pulse/10-projetos-back-end-para-implementar-e-ter-um-portf%C3%B3lio-coelho/?originalSubdomain=pt)\>. Acesso em: 28 mar. 2023.

NETO, Henrique. **Entenda as Diferenças Entre front-end, back-end E API**. Olivas, 2022. Disponível em: <[https://www.olivas.digital/blog/desenvolvimento/entenda-as-diferencas-entre-front-end-back-end-e-api](https://www.olivas.digital/blog/desenvolvimento/entenda-as-diferencas-entre-front-end-back-end-e-api/)[/](https://www.olivas.digital/blog/desenvolvimento/entenda-as-diferencas-entre-front-end-back-end-e-api/)\>. Acesso em: 04 abr. 2023.

ROSA, Daniel. **5 Projetos De Programação Que Você Deve Incluir Em Seu Portfólio De front-end**. FreeCodeCamp, 2022. Disponível em: <[https://www.freecodecamp.org/portuguese/news/5-projetos-de-programacao-que-voce-deve-incluir-em-seu-portfolio-de-front-end/](https://www.freecodecamp.org/portuguese/news/5-projetos-de-programacao-que-voce-deve-incluir-em-seu-portfolio-de-front-end/)\>. Acesso em: 28 mar. 2023.

SAMPAIO, Julio. **Criando Aplicações Web Com AngularJS E Node.JS**. DevMedia, 2017. Disponível em: <[https://www.devmedia.com.br/criando-aplicacoes-web-com-angularjs-node-e-concise-css/36777](https://www.devmedia.com.br/criando-aplicacoes-web-com-angularjs-node-e-concise-css/36777)\>. Acesso em: 28 mar. 2023.

SANTOS, Robson Dos. **20 Ideias De Projetos Para Desenvolvedores**. Brasil Code, 2022. Disponível em: <[https://www.brasilcode.com.br/20-ideias-de-projetos-para-desenvolvedores/](https://www.brasilcode.com.br/20-ideias-de-projetos-para-desenvolvedores/)\>. Acesso em: 28 mar. 2023.

SOUTO, Mario. **O Que É Front-end E back-end? | Alura Cursos Online**. Alura, 2023. Disponível em: <[https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end](https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end)\>.