**Introdução**

As aplicações em Angular podem ser construídas com base em um modelo de desenvolvimento baseado em diretivas, que permitem criar componentes reutilizáveis. Nesse módulo, vamos abordar alguns conceitos básicos importantes para entender o que é um componente Angular e como eles estruturam uma aplicação FrontEnd.

**Objetivos da aula**

O objetivo deste módulo é compreender a organização dos componentes de uma aplicação desenvolvida para web e para isso vamos implementar o início da aplicação FrontEnd com o foco em deixar já compatível com a parte do BackEnd que já foi criada.

**Resumo**

**Obtenção repositório Angular**

Existem algumas maneiras de obter código de um repositório do GitHub:

-   Clone o repositório: essa é a forma mais comum de obter o código de um repositório. O clone pode ser feito utilizando o comando “git clone” via Git Bash com a conexão desejada (HTTPS, SSH ou Git) ou via alguma interface gráfica como o Sourcetree;
-   Download do código: via Github web, no projeto e repositório específico, você pode fazer o download do código como um arquivo zip e salvar no diretório desejado;
-   Outra opção de interface gráfica é o GitHub Desktop: que é o aplicativo oficial do GitHub que permite que você clone, faça o checkout, gerencie e colabore em repositórios diretamente na sua área de trabalho;
-   Git Submodule: esse é mais específico e pouco usado, se o repositório que você deseja obter está incluído como um submodule em outro repositório, você pode usar o comando git submodule para cloná-lo e adicioná-lo como um subdiretório do seu repositório principal.

Para essa aula, utilizamos a versão inicial do repositório da disciplina com alguns arquivos base para começarmos nossa aplicação FrontEnd. Além dessa forma, você pode também criar um novo repositório utilizando o comando “git init” dentro de um diretório e iniciar um novo projeto.

**Construção de Aplicação Angular**

Para iniciar a construção dessa aplicação Angular os arquivos base do projeto citados anteriormente foram a pasta "src/" e alguns arquivos de configuração com a extensão ".json" (angular, package, package-lock, tsconfig.app, tsconfig e tsconfig.spec).

Angular é um framework de desenvolvimento de aplicativos web de código aberto, criado pela Google, que permite a criação de aplicações web dinâmicas, com alta interatividade e facilidade de manutenção. Ele usa HTML, CSS e JavaScript para criar aplicativos web baseados em componentes, com um forte foco na separação de responsabilidades e na reutilização de código. O Angular é baseado em um padrão de arquitetura de software chamado Model-View-Controller (MVC), que ajuda a estruturar o aplicativo e a separar a lógica de negócios da apresentação visual utilizando recursos como vinculação de dados bidirecional, injeção de dependência e diretivas personalizadas, que ajudam a criar aplicativos mais avançados e robustos.

Para instalação do [Angular](https://angular.io/cli), você pode utilizar o comando “npm install -g @angular/cli”. CLI é a sigla para _Command Line Interface_.

Com uma aplicação inicial do Angular, pode-se executar o comando “ng build” que é um comando que compila o projeto em um pacote de distribuição, pronto para ser implantado em um servidor web ou em um serviço de hospedagem. O comando ng build realiza várias tarefas importantes, como a compilação do código TypeScript em JavaScript, a otimização dos arquivos para produção, a criação de um arquivo index.html para carregar o aplicativo e a geração de arquivos de ativos, como imagens e estilos.

Após ter uma aplicação mínima e ter rodado essa complicação, o comando “ng serve” inicia um servidor local para executar o aplicativo Angular em um ambiente de desenvolvimento após compilar o projeto e permite que o aplicativo seja visualizado e testado em um navegador web.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681852756632-NzH3Uhz98h.png)

Para iniciar a aplicação, precisamos gerar os componentes que compõem a aplicação. Os componentes são um dos principais recursos do Angular, que ajudam a criar e organizar o conteúdo da página em blocos reutilizáveis. Um componente Angular é uma combinação de HTML, CSS e TypeScript que define uma parte da interface do usuário. Ele encapsula todo o código necessário para exibir essa parte da interface do usuário, incluindo a lógica de exibição e interação. Os componentes do Angular seguem uma estrutura hierárquica em árvore, o que significa que os componentes podem ser aninhados para criar componentes mais complexos.

Cada componente do Angular possui um ciclo de vida que é gerenciado pelo próprio framework. Esse ciclo de vida inclui etapas como a criação do componente, atualização, destruição e muito mais. Além disso, cada componente do Angular pode se comunicar com outros componentes e serviços dentro da aplicação usando recursos como input e output properties, eventos e injeção de dependência. Em resumo, os componentes do Angular são blocos reutilizáveis de código que encapsulam a lógica de exibição e interação de uma parte da interface do usuário. Eles são uma parte fundamental do framework Angular e são usados para criar aplicativos da web complexos e escaláveis.

Para criar um componente Angular, você precisa ter um projeto Angular e caso não tenha, você pode criar um novo utilizando o comando “ng new nome-do-projeto” no terminal. Caso você já tenha o projeto, navegue até o diretório do projeto e utilize o comando “ng generate component nome-do-componente” para criar uma pasta com o nome do componente e os arquivos do mesmo.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681852792138-Rf9Q78gPLz.png)

O comando “ng generate” é um dos comandos mais úteis e comuns no Angular CLI. Ele é usado para gerar novos arquivos e estruturas de diretórios para componentes, serviços, diretivas, módulos e outros recursos dentro de um projeto Angular. Sua estrutura segue a seguinte sintaxe geral:

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1681852812521-mDCV90xqFv.png)

Onde <type> é o tipo de recurso que você deseja gerar (por exemplo, component, service, module, directive, entre outros), <name> é o nome que você deseja dar ao seu novo recurso e \[options\] são as opções adicionais que você pode passar para personalizar a geração do seu recurso.

Como citado anteriormente, esse comando criará uma nova pasta chamada “meu-componente” dentro do diretório src/app e gerará vários arquivos, incluindo um arquivo TypeScript para a lógica do componente, um arquivo HTML para o template do componente e um arquivo CSS para estilos do componente. O comando ng generate também suporta várias opções adicionais, como --skip-tests para pular a geração de arquivos de teste, --module para especificar o módulo que deve ser importado automaticamente pelo seu novo recurso e muito mais.

A partir deste ponto, iremos trabalhar com cada arquivo de cada componente da aplicação e para ter compatibilidade com o BackEnd da aplicação, precisamos gerar componentes para cada entidade.

Com cada componente de entidade criado, o próximo passo é abrir cada arquivo:

-   O arquivo nome-do-componente.component.ts terá a lógica do seu componente que inclui a definição de propriedades e métodos, bem como a lógica de exibição e interação do seu componente;
-   O arquivo nome-do-componente.component.html terá o código HTML que define a aparência do seu componente.

Se necessário, adicione estilos ao seu componente abrindo o arquivo nome-do-componente.component.css.

Nessa aplicação, vamos utilizar os arquivos “list.html” e “form.html” que são arquivos usados para componentes que exibem uma lista de itens e um formulário para adicionar ou editar esses itens. Estes nomes são apenas convenções de nomenclatura comuns para esses tipos de componentes. Você pode nomear seus arquivos e componentes de qualquer maneira que fizer sentido para sua aplicação. O importante é manter uma estrutura organizada e consistente para o código da sua aplicação.  Geralmente, aplicações padrão em Angular não utilizam estes arquivos, mas como estamos construindo uma estrutura básica de CRUD para ter compatibilidade com o BackEnd, vamos utilizar e será a forma mais simples de aplicar o conhecimento.

Depois de personalizar cada componente, precisamos pensar no roteamento das telas. O módulo de roteamento, do inglês _routing module_, é uma ferramenta essencial para criar aplicativos com navegação e rotas de URL complexas. Ele permite que você defina facilmente as rotas e direcione o usuário para o componente correto com base na rota acessada. Ele também pode ser gerado via terminal e é um recurso que permite navegar entre diferentes componentes. Cada componente tem um módulo de roteamento e você pode definir rotas para qualquer caminho de URL e associá-las a um componente específico. Além disso, você também pode definir rotas com parâmetros e usar esses parâmetros para exibir diferentes dados em um mesmo componente.

O módulo de roteamento é geralmente criado quando você usa o Angular CLI para criar um novo projeto. Ele é criado com o nome **app-routing.module.ts** e está localizado na pasta “src/app”.

**Como aplicar na prática o que aprendeu**

Nesse momento, para aplicar na prática o que você aprendeu é muito importante que você replique o código criado em aula para conseguir validar o seu entendimento e, principalmente, iniciar a construção da sua aplicação.

Para estudar mais sobre o assunto e pesquisar mais sobre, recomendo utilizar o site oficial da documentação do Git, o Atlassian e o [W3 Schools](https://www.w3schools.com/).

Essa disciplina tem um repositório no Github que será utilizado para toda a parte prática: [FaculdadeDescomplica/Intermediary-BackEnd](https://github.com/FaculdadeDescomplica/Intermediary-BackEnd).

**Conteúdo bônus**

**Tópicos avançados**

Caso você queira aprofundar seus estudos, recomendo fortemente a conhecer a coleção de livros ‘Use a Cabeça’, que são livros instrutivos introdutórios a muitos tópicos, publicados pela [O'Reilly Media](https://www.oreilly.com/). Essa série de livros tem várias tecnologias e ferramentas e enfatizam uma combinação de quebra-cabeças, piadas com um _design_ e _layout_ não padronizados. São super famosos para quem precisa de ajuda para imergir num tópico específico como programação. Originalmente, a série de livros cobria programação e engenharia de software, mas agora está se expandindo para outros tópicos em ciências, matemática e negócios, devido ao sucesso. A série foi criada por Bert Bates e Kathy Sierra, e começou com Use a Cabeça Java em 2003. Espero que você goste!

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: 

[https://github.com/FaculdadeDescomplica/Intermediary-BackEnd](https://github.com/FaculdadeDescomplica/Intermediary-BackEnd)

Referência Bibliográfica

CARVALHO, Marlon. **Angular CLI: Como Criar E Executar Um Projeto Em Angular**. DevMedia, 2017. Disponível em: <[https://www.devmedia.com.br/angular-cli-como-criar-e-executar-um-projeto-angular/38246](https://www.devmedia.com.br/angular-cli-como-criar-e-executar-um-projeto-angular/38246)\>. Acesso em: 27 mar. 2023.

NEGRÃO, Leonardo. **Como Começar Com Angular**. Alura, 2021. Disponível em: <[https://www.alura.com.br/artigos/como-comecar-com-angular](https://www.alura.com.br/artigos/como-comecar-com-angular)\>. Acesso em: 31 mar. 2023.

SAMPAIO, Julio. **Criando Aplicações Web Com AngularJS E Node.JS**. DevMedia, 2016. Disponível em: <[https://www.devmedia.com.br/criando-aplicacoes-web-com-angularjs-node-e-concise-css/36777](https://www.devmedia.com.br/criando-aplicacoes-web-com-angularjs-node-e-concise-css/36777)\>. Acesso em: 04 abr. 2023.