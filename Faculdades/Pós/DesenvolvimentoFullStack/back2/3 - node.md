**Introdução**

Node.js é uma plataforma de desenvolvimento de software que permite aos desenvolvedores criar aplicativos web escaláveis e de alta performance usando a linguagem de programação JavaScript. Nesse módulo, vamos abordar alguns conceitos básicos importantes para entender mais do uso do Node e sua capacidade de modularização.

**Objetivos da aula**

O objetivo desse módulo é conhecer e aprender a usar o NPM, alguns módulos principais da linguagem e também iniciar a aplicação BackEnd com Node.js dessa disciplina.

**Resumo**

**Npm**

O npm é um poderoso gerenciador de pacotes utilizado para administrar bibliotecas e frameworks em uma aplicação. A sigla significa _Node Package Manager_, que em português significa gerenciador de pacotes do Node. O npm faz parte do Node.js.

Essa tecnologia ajuda a organizar e otimizar as dependências de um projeto, além de mantê-las atualizadas. O NPM possui um repositório repleto de ferramentas de código aberto que podem ser utilizadas gratuitamente. Vale ressaltar que qualquer pessoa que queira compartilhar seu código JavaScript pode disponibilizá-lo nesse ambiente. As ferramentas disponíveis no repositório do NPM podem ser instaladas e gerenciadas localmente em uma aplicação. É importante mencionar que quando um pacote é instalado localmente, ele estará disponível apenas no projeto em questão. Para isso, o gerenciador cria um diretório chamado node\_modules e todas as dependências são adicionadas lá. Para verificar a versão do npm no terminal ou Git Bash, basta digitar o comando "npm -v" e pressionar Enter.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681850444823-oaEg0FIY5K.png)

Para iniciar um novo projeto, crie um novo diretório e execute o comando "npm init" dentro dele. Esse comando irá guiá-lo na inserção das informações necessárias no arquivo package.json. Se você não personalizar nenhuma informação solicitada, ele irá usar as informações que aparecem entre parênteses.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681850465369-MJHp5OKv8g.png)

Para adicionar pacotes em um projeto, utilize o comando "npm install NOME\_DO\_PACOTE". Caso queira adicionar pacotes globais, utilize o parâmetro "-g", por exemplo: "npm install NOME\_DO\_PACOTE -g". Também é possível instalar pacotes de outros endereços e existe também outro comando que é o comando "npm i CAMINHO\_DO\_PACOTE". Qualquer um destes, seja com “install” ou “i” irá realizar a instalação do pacote na sua aplicação. Nas próximas aulas, vamos utilizar todas as possibilidades para praticar.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681850502445-Q9dGKfTdBU.png)

De forma simples, todo arquivo que contenha código JS é considerado um módulo no Node.js, contendo variáveis e funções que podem ser exportadas ou não. Existem 3 tipos de módulos no npm:

1.  Módulos **nativos** do JS: são aqueles que fazem parte da especificação da linguagem JavaScript, ou seja, são funcionalidades integradas na linguagem e disponíveis em todos os ambientes que suportam JS, como os navegadores web e o ambiente Node.js.
2.  Módulos **públicos** que estão na biblioteca do Node: são pacotes ou módulos de código fonte aberto, disponibilizados no registro público do npm que podem ser baixados e utilizados livremente em projetos desenvolvidos com o Node.js. Estes oferecem funcionalidades específicas para diferentes necessidades, como gerenciamento de banco de dados, manipulação de imagens, autenticação de usuários, entre outros. Eles são instalados no projeto com o comando "npm install", e são acessados por meio da função "import" no código fonte do projeto. Os módulos públicos do Node.js são atualizados regularmente pelos seus criadores, e são uma forma eficiente de compartilhar código entre desenvolvedores e projetos.
3.  Módulos criados pela aplicação: são módulos personalizados que foram criados pelo(a)  próprio(a) desenvolvedor(a) para serem utilizados em seu projeto. Esses módulos podem conter variáveis, funções e outros recursos que são utilizados em diferentes partes do código fonte. Ao criar um módulo personalizado, pode-se exportar partes do seu código permitindo que outras partes do projeto possam acessá-las e utilizá-las de forma modular. Essa abordagem de modularização é muito útil em projetos grandes e complexos, onde é necessário organizar e compartilhar o código de forma eficiente.

**Módulos para Interação**

Vamos entender os módulos de interação como sendo os principais módulos para trabalhar com arquivos de diferentes formatos. Abaixo apresento 3 módulos importantes: inquirer, fs e path. Para instalar os pacotes, utilize os seguintes comandos, formas diferentes de chegar no mesmo resultado que é a instalação dos pacotes. Lembrando que, os pacotes “fs” e “path” são opcionais para a instalação porque são módulos nativos do JavaScript. E o módulo “inquirer” é público sendo necessário baixá-lo como dependência na sua aplicação.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681850655060-swVaZdOsZH.png)

**Inquirer**

Inquirer é um pacote do npm baseado em prompt (espera) utilizado em projetos Node.js para criar ferramentas de linha de comando (CLI) para tarefas que envolvem interação com o usuário através de perguntas e respostas. A estrutura esperada e básica de um _prompt_ é composta por uma pergunta e a espera de uma resposta parecido com o código abaixo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681850721529-nHW4OjIo6o.png)

Usando o método prompt do módulo inquirer, toda pergunta precisa ter:

-   Um “type” que é o tipo da pergunta que o usuário irá utilizar;
-   Um “name” que é um identificador único e precisa ser auto explicativo para boas práticas de programação;
-   E uma “message” que é a pergunta propriamente dita.

Para outros tipos de pergunta, a mensagem precisa ser diferente, o exemplo visto em aula usa uma pergunta do tipo _‘list’_ e para isso, a mensagem precisa ter uma lista de escolhas, _‘choices’_ como pode ser visto no trecho de código abaixo.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681850768354-vXGhu2yzOu.png)

**FS**

O módulo fs é um dos principais módulos do Node.js, utilizado para trabalhar com o sistema de arquivos do computador. Com ele, é possível realizar diversas operações, como ler, criar, atualizar, deletar e renomear arquivos. O código abaixo disponibiliza o arquivo HTML que é lido no _localhost_ e um exemplo de um arquivo que foi lido utilizando o módulo FS.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681850810299-EcqBpUzLnl.png)

**Path**

O módulo Path do JavaScript é um módulo nativo do Node.js que oferece uma série de métodos para trabalhar com caminhos de arquivos e diretórios de forma consistente em diferentes plataformas (Windows, Linux, macOS, etc.). Ele é principalmente utilizado para manipular caminhos de arquivos e diretórios no Node.js, fornecendo diversas funções úteis para este fim. Alguns dos principais métodos do módulo Path incluem path.basename() que retorna o nome do arquivo de um caminho e path.dirname() que retorna o diretório pai de um caminho. No código abaixo, visualizamos os teste para estes métodos:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681850847947-6biDuTQJag.png)

Consulte a [documentação do módulo](https://nodejs.org/api/path.html) para conhecer outros métodos e praticar.

**Módulos para Requisições**

Como módulos para requisições, vamos conhecer dois principais:

**Http**

O módulo http em Node.js é um módulo interno que fornece uma API para criar servidores HTTP e fazer requisições HTTP. Ele permite que os desenvolvedores criem aplicativos de servidor web que possam receber e responder às solicitações HTTP. Esse módulo é capaz de lidar com diferentes tipos de solicitações HTTP, como GET, POST, PUT, DELETE, etc. Algumas das principais funcionalidades do módulo http são:

-   createServer(): permite criar um servidor HTTP que possa ouvir em uma porta específica e aguardar as solicitações dos clientes. O createServer() recebe uma função de callback que será chamada sempre que o servidor receber uma solicitação HTTP. Dentro desta função, podemos adicionar a lógica para lidar com a solicitação HTTP.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681850972998-mmD5RrVKKH.png)

-   listen(): é usado para iniciar o servidor HTTP e ouvi-lo na porta especificada. Quando o servidor está pronto para ouvir solicitações HTTP, ele chama a função de callback.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681851016829-9zWoty9sBb.png)

-   request(): permite que o desenvolvedor faça requisições HTTP a outros servidores. Ele cria uma instância de solicitação HTTP e permite que o desenvolvedor personalize vários aspectos da solicitação, como o método HTTP, o cabeçalho HTTP e o corpo da solicitação. No exemplo abaixo, estamos fazendo uma solicitação HTTP GET para o servidor www.exemplo.com, no caminho /. O http.request() recebe um objeto de opções que especifica o hostname, a porta, o caminho e o método HTTP da solicitação. Em seguida, a função de callback é chamada quando a resposta HTTP é recebida. Nela, podemos acessar o código de status da resposta e os dados da resposta. Por fim, chamamos o método req.end() para finalizar a solicitação.
-   on(): o método req.on('error') é usado para lidar com erros de solicitação HTTP.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681851098516-YPICpSt9Ky.png)

Em resumo, o módulo http é um componente crucial para a criação de aplicativos de servidor web em Node.js, permitindo que servidores e requisições HTTP sejam criadas, gerenciadas e personalizadas.

**Url**

O módulo url em Node.js é usado para analisar e manipular URLs. Ele basicamente divide um endereço da web em partes legíveis. No código abaixo, feito em aula, nós subimos um servidor, acessamos pelo navegador via _localhost_ e temos 2 possíveis respostas de acordo com o tratamento da URL: carregar uma página HTML específica (sendo duas opções que fizemos) ou carregar um erro HTTP caso a URL não receba o parâmetro do arquivo.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681851137604-ShWjZA1gqu.png)

**Aplicação com Express**

O Express.js é a estrutura de back-end mais popular para o Node.js e faz parte do extenso ecossistema do JavaScript. Ele foi criado para desenvolver aplicativos da Web híbridos de página única e de várias páginas de forma rápida e fácil, e também se tornou o padrão para o desenvolvimento de aplicativos de back-end com o Node.js. Ele é altamente flexível e permite a criação de aplicativos web, desde pequenos e simples até grandes e complexos.

E vamos utilizar o Express para facilitar a criação da nossa aplicação BackEnd, ele será responsável pelo principal roteamento das páginas. A primeira parte para toda implementação JavaScript é trazer as dependências do projeto, nesse caso o Express foi instalado utilizando o comando na pasta da aplicação.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681851178835-duVmJYzCBN.png)

A aplicação dessa disciplina terá uma organização em pacotes lembrando a estrutura _model-view-controller_, com os pacotes: _models_ (para modelos das entidades), _routes_ (para controladores de cada entidade e rotas do Express), _repositories_ (para buscar as entidades no banco de dados), _services_ (para integrar o controlador com o repositório e aplicar regras de negócio caso necessário) e o “index.js” como arquivo principal da estrutura BackEnd. Abaixo temos o exemplo do início do arquivo “index.js”, que é um exemplo básico de um servidor web usando o Express.js com o módulo Body-parser. As dependências necessárias são o "express" que é o próprio framework, enquanto "body-parser" é um middleware usado para analisar e manipular dados enviados pelo cliente em formato JSON ou URL-encoded. Em seguida, o código cria uma instância do aplicativo Express e define os middlewares necessários usando o método "use". "json()" é um middleware que analisa o corpo da solicitação como JSON e "urlencoded()" é um middleware que analisa o corpo da solicitação como dados codificados em URL. O código define um endpoint raiz usando o método "use()" e passando a variável "router" que importa rotas do arquivo "routes.js".

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681851212359-c3O1lIH14w.png)

Vamos iniciar a construção da aplicação que será integrada ao FrontEnd nas próximas aulas. Esse é o diagrama de entidade-relacionamento da aplicação BackEnd que iremos construir já na aula de CRUD e já é legal você conhecer as entidades e seus atributos.

Figura 1.

![Elaborado pelo autor, em 2023.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681851253360-7suBdpTDly.png "Elaborado pelo autor, em 2023.")

Elaborado pelo autor, em 2023.

Após acrescentar o express no arquivo principal do projeto, é necessário criar o arquivo routes.js que foi importado. Esse arquivo contém as rotas definidas para o aplicativo Express. E como podemos ver no código abaixo, a estrutura básica traz a dependência do “express”, a criação da constante de roteamento “router” e a dependência dos serviços da aplicação.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681851367108-OF8sRylYbf.png)

Para que esse roteamento funcione corretamente, é necessário também que seja criado cada serviço, cada repositório e cada controlador de cada entidade. Você pode consultar cada arquivo no repositório [Github.com: FaculdadeDescomplica/Intermediary-BackEnd](https://github.com/FaculdadeDescomplica/Intermediary-BackEnd) e também em aula.

**Adição de Sequelize**

O Sequelize é um ORM (_Object Relational Mapping_) moderno para TypeScript e Node.js, utilizado para realizar mapeamento objeto relacional em bancos de dados como Oracle, Postgres, MySQL, MariaDB, SQLite, SQL Server, entre outros. Ele oferece suporte a transações sólidas, relações, carregamento rápido e lento, replicação de leitura e diversas outras funcionalidades. O ORM é uma técnica que permite a integração entre programas orientados a objetos e bancos de dados relacionais, criando uma "ponte" entre eles. Para utilizar o Sequelize em um projeto, é necessário acrescentar a dependência através do comando "npm install sequelize".

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681851436332-cTc3NWjBEH.png)

Para utilizar o Sequelize em uma aplicação JavaScript, são necessárias algumas configurações iniciais. Também é necessário instalar o driver do banco de dados utilizando o npm, por exemplo, para usar o Sequelize com o PostgreSQL deve-se instalar o pacote pg. Depois disso e antes de começar a atualizar a aplicação com os modelos, é necessário configurar a conexão do banco de dados. Nesse caso, vamos utilizar um pacote na nossa estrutura que vai se chamar utils e dentro dessa pasta, você terá o arquivo database.js, que pode ser visto abaixo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681851498358-WgIu02wylX.png)

Além disso, é necessário fazer com que todo modelo de entidade da aplicação. Definir os modelos de entidade significa criar os arquivos como Course.js (veja código abaixo) na pasta models para definir os atributos que você deseja representar no seu banco de dados. Esses arquivos devem importar a dependência do sequelize vindo do seu arquivo de configuração e deve importar o DataTypes para possibilitar o uso de características de banco de dados. O exemplo abaixo é aplicável para todas as outras entidades da aplicação.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681851526179-cfwhWk2BY5.png)

Nesse caso, também será necessário utilizar um modelo de **associação** destes modelos ao invés de novas tabelas de relacionamento, para atender o modelo de entidade-relacionamento que vimos anteriormente. Então, dentro do pacote _models_ teremos o arquivo Associations.js como abaixo.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681851580078-pa2QqoCGQs.png)

Esse código define as associações entre as classes User, Course, Teacher e Evaluation que são as entidades da aplicação. A primeira parte do código importa as classes relevantes (User, Course, Teacher e Evaluation) de seus respectivos arquivos JavaScript. Em seguida, há uma função chamada associations = (), que é responsável por definir as associações entre as classes. Dentro desta função, são usados métodos das classes do Sequelize:

-   O método hasMany() define que "um curso tem muitos professores", isso significa que cada instância da classe Course pode ter várias instâncias da classe Teacher associadas a ela. O mesmo se aplica para o usuário, onde o método hasMany() também define que "um usuário tem muitas avaliações". E também o mesmo para determinar que "um curso tem muitas avaliações".

Por fim, a função associations é encapsulada em um objeto chamado factory e exportada como um módulo padrão usando a palavra-chave export default. Isso permite que o módulo seja importado em outros arquivos JavaScript.

Além disso, é necessário ajustar o arquivo de entrada na aplicação, o _index.js_, para utilizar as associações e o sequelize, ficando como demonstração abaixo:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681851885482-FhmVRrdYJk.png)

**Criação de CRUD**

CRUD é um acrônimo que representa as operações básicas que podem ser realizadas em um banco de dados: Create (Criar), Retrieve (Recuperar), Update (Atualizar) e Delete (Excluir). O objetivo do CRUD é fornecer uma interface para que os usuários possam executar essas operações em um banco de dados de forma fácil e intuitiva. Essas operações são essenciais para a gestão de dados em aplicações e sistemas, permitindo que os usuários possam criar, ler, atualizar e deletar dados armazenados no banco de dados. As ações básicas de CRUD podem ser aplicadas em toda aplicação.

As ações do CRUD precisam ter ações iniciadas nas rotas dos controladores, que chamam as ações dos serviços e, por fim, estes chamam os repositórios para retornar às entidades do banco de dados.

O controlador de cada entidade definirá um conjunto de rotas (_endpoints_) que serão expostos na aplicação para que os clientes possam enviar requisições HTTP e receber respostas HTTP correspondentes. As rotas definidas para um CRUD básico são:

-   O método HTTP POST com rota /addCourse será possível CRIAR um novo curso.
-   O método HTTP GET com rota /getAllCourses será possível RECUPERAR a lista de todos os cursos cadastrados.
-   O método HTTP GET com rota /course/:id será possível RECUPERAR um curso com um ID específico.
-   O método HTTP PUT com rota /updateCourse/:id será possível ATUALIZAR um curso específico.
-   O método HTTP DELETE com rota /deleteCourse/:id será possível DELETAR um curso específico.

Todas as outras entidades deverão ter a mesma estrutura, sendo alterada apenas o nome e modelo de cada arquivo de serviço. Além disso, para cada rota criada, o método chamado é do arquivo de serviço com os parâmetros necessários (por exemplo, o envio do ID quando aplicável). Quando enviado para o serviço, o serviço terá uma estrutura que, para cada ação, irá acionar o repositório. E o repositório irá realizar a ação no banco de dados e retornar o objeto esperado como resposta para o cliente em formato JSON. Para cada entidade, te convido a verificar este fluxo: controlador > serviço > repositório, no projeto da disciplina.

**Como aplicar na prática o que aprendeu**

Nesse momento, para aplicar na prática o que você aprendeu é muito importante que você replique o código criado em aula para conseguir validar o seu entendimento e, principalmente, iniciar a construção da sua aplicação.

**Conteúdo bônus**

**Tópicos avançados**

Caso você queira aprofundar em outros exemplos, recomendo visitar Github e buscar projetos que utilizam o Node.js + Express + Sequelize. Para isso é preciso desenvolver a habilidade de leitura do código e também a capacidade de buscar os conceitos presentes no mesmo. Recomendo este [Exemplo de Projeto Node.js com Express, Sequelize e Postgres](https://github.com/jesielviana/nodejs-express-sequelize), que é bem completo e parecido com a estrutura que você está começando a estudar. Para buscar conceitos sobre o código recomendo o caminho: buscar as dependências, buscar os métodos que são utilizados e tentar rodar a aplicação.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: 

[https://github.com/FaculdadeDescomplica/Intermediary-BackEnd](https://github.com/FaculdadeDescomplica/Intermediary-BackEnd)

Referência Bibliográfica

DE SOUZA, Ivan. **Saiba o que é NPM (Node Package Manager) e como instalar**. Rockcontent, 2020. Disponível em: <[https://rockcontent.com/br/blog/npm/](https://rockcontent.com/br/blog/npm/)\>. Acesso em: 27 mar. 2023.

SILVA, Gisele. **O Que É CRUD?** Coodesh, 2021. Disponível em: <[https://coodesh.com/blog/dicionario/o-que-e-crud](https://coodesh.com/blog/dicionario/o-que-e-crud)/>. Acesso em: 27 mar. 2023.

VINCENT ABBA, Ihechikara. **What is an ORM – The Meaning of Object Relational Mapping Database Tools**. Freecodecamp, 2022. Disponível em: <[https://www.freecodecamp.org/news/what-is-an-orm-the-meaning-of-object-relational-mapping-database-tools](https://www.freecodecamp.org/news/what-is-an-orm-the-meaning-of-object-relational-mapping-database-tools)\>. Acesso em: 30 mar. 2023.

WILMOT, Mat. **How to Use Inquirer.js**.          JavaScript in Plain English no Medium, 2020. Disponível em: <[https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f](https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f)\>. Acesso em: 27 mar. 2023.