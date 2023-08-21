**Introdução**

MVC é uma sigla para Model-View-Controller e se refere a um padrão de projeto de software. Ele tem como objetivo aumentar o reuso de código e possibilitar a separação de responsabilidades. Cada uma delas, o Model, o View e o Controller, são responsáveis por tarefas específicas.

Atualmente, é difícil imaginar uma aplicação que não precise se comunicar com outras aplicações. Mesmo um jogo eletrônico, por vezes, é preciso buscar dados de atualização no servidor, ou, até mesmo, dados do usuário. Diante deste cenário, faz-se necessário o uso de padrões. API RESTful é um padrão que foi desenvolvido para que aplicações Webs possam se comunicar de forma consistente e segura.

**Objetivos da aula**

-   Conhecer as principais ferramentas usadas durante o curso
-   Conhecer o padrão de projeto MVC
-   Introdução a API RESTful
-   Conhecer os métodos Post, Get, Put e Delete

**Resumo**

**Introdução a IDE e principais ferramentas usadas**

IDE do inglês Integrated Development Environment ou Ambiente de Desenvolvimento Integrado é um software usado para criar aplicações que combina várias ferramentas em uma única interface gráfica de usuário (GUI).

Geralmente, uma IDE consiste em um Editor de código fonte, um Debugger e Automação de compilação. Elas servem principalmente para criar aplicações de forma bastante rápida, uma vez que ela integra diversas ferramentas em um único lugar. Além disso, elas também fornecem funcionalidades e utilitários que ajudam o desenvolvedor a solucionar problemas e evitá-los.

O Spring Tools Suite (STS) é uma ferramenta Spring usada exclusivamente para o desenvolvimento de aplicações baseadas em Spring. Ela pode ser usada com o Eclipse, Visual Studio Code ou Theia IDE. No próprio site do Spring, na aba tools, nós encontramos uma versão open source do STS já configurado no Eclipse, basta somente baixar e instalar < [https://spring.io/tools](https://spring.io/tools) >.

Lombok é uma ferramenta Java muito utilizada em ambientes profissionais cujo foco é aumentar a produtividade e redução de código boilerplate (códigos repetidos em vários lugares com pouca ou nenhuma variação). Lombok faz o uso de anotações que durante a compilação do código são transformadas em código Java. É uma ferramenta simples de instalar e fácil de usar. As principais anotações são:

@Data: usado para gerar os métodos Getters e Setters.

@Getter: usado para gerar somente o método Getter.

@Setter: usado para gerar somente o método Setter.

@AllArgsConstructor: cria um construtor da classe com todos os argumentos.

@NoArgsConstructor: cria um construtor sem nenhum argumento.

@Slf4j: cria uma variável private static final chamada log que pode ser acessada por toda a classe.

@Builder: cria uma API para sua classe, o que possibilita a instanciação de novos objetos dessa classe de forma simples e legível, evitando o uso da palavra reservada new.

Para baixar o Lombok, acesse a página de download <[https://projectlombok.org/download](https://projectlombok.org/download)\>. 

Postman é uma plataforma de API para criar e usar APIs. Ele possibilita uma interface simples e completa para testarmos nossa aplicação. Ele é muito usado em ambientes profissionais para fazer integração, automação de testes e criação de APIs. Para baixar basta acessar a página de download <[https://www.postman.com/downloads/](https://www.postman.com/downloads/)\>. 

**Introdução ao padrão MVC**

Padrão de projeto são soluções conhecidas e que já tenham sido testadas com sucesso para problemas comuns em projeto de software. Padrão de projeto descreve um conjunto composto por um contexto, um problema e uma solução. Ele não descreve qualquer solução, mas uma que já tenha sido utilizada com sucesso, em mais de um contexto. Ele também não descreve soluções novas, mas soluções consolidadas. Ele deve mostrar a estrutura da solução, sua dinâmica, consequências positivas e negativas.

O padrão MVC surgiu em um contexto em que as aplicações GUI estavam se tornando cada vez mais populares e da necessidade (problema) de organizar o código. A solução foi separar a aplicação em camadas bem distintas, cada uma com uma responsabilidade bem definida.

A camada Model é responsável pela parte lógica da aplicação, é nela onde se encontram todas as regras de negócio da nossa aplicação assim como as funções e comportamento dos dados. Em outras palavras, ela é o coração da aplicação. Ela é responsável pelo gerenciamento dos dados, assim como seu armazenamento, modelagem, manipulação e geração de dados.

A camada View é responsável pela apresentação dos dados ao usuário, pode ser em forma de formulário, tabela, gráfico etc. Ela também provoca a interação com o usuário, quer seja por um botão ou algum outro componente.

A camada Controller é quem comanda a visão e o modelo, para que estes sejam alterados apropriadamente conforme a interação do usuário. Sua principal responsabilidade é gerenciar o fluxo da aplicação, enviando os comandos para o Model e entregando o resultado para a View.

**Introdução a API RESTful**

API RESTful é uma interface onde dois ou mais sistemas fazem uso para trocar informação. O termo API se refere a interface de programação de aplicação e é usado para definir regras de como as aplicações deverão se comunicar. RESTful é um termo usado para os serviços da Web que implementam a arquitetura REST.

Representational state transfer (REST) ou transferência de estado representacional é uma arquitetura de software que determina como uma API deve funcionar. REST é uma arquitetura de alta performance, confiável e escalável. A principais características dessa arquitetura são:

-   Interface uniforme: os dados que trafegam seguem um padrão uniforme.
-   Ausência de estado: toda requisição deve ser completada, independente de todas as solicitações anteriores. O cliente pode solicitar recursos em qualquer ordem e o resultado de uma solicitação não interfere na outra.
-   Sistema em camadas: um serviço pode ser usado para se conectar a outros serviços, ou até mesmo como um serviço intermediário, gerando assim um sistema com muitas camadas, onde um serviço A faz uso do serviço B que faz uso do serviço C e assim por diante.
-   Armazenamento: essa arquitetura possibilita o armazenamento de determinadas informações em cache, melhorando o tempo de resposta do servidor.
-   Código sob demanda: o servidor pode modificar ou personalizar a interface do usuário, como por exemplo um usuário administrador ter acesso a uma tela que os demais não têm. Essa informação se o usuário é administrador ou não vem do servidor.

Podemos criar um API usando qualquer arquitetura, mas quando o fazemos usando REST, chamamos de API REST. Os serviços da Web que implementam a arquitetura REST são chamados de Web RESTful e o termo API RESTful é utilizado para fazer referência a APIs da Web RESTful.

Mas afinal de contas, como as APIs RESTful funcionam?

Elas funcionam basicamente como um navegador da internet, onde o cliente busca por uma url que existe e ao tentar acessar aquela url o cliente na verdade está fazendo uma requisição no servidor, que por sua vez envia uma resposta para o cliente no formato de html. Ou seja, estamos falando de requisição e resposta e as APIs RESTful funcionam seguindo os 4 passos a seguir:

1.  O cliente envia uma solicitação ao servidor, seguindo a documentação da API.
2.  O servidor verifica que se o cliente tem as permissões necessárias para acessar tal recurso.
3.  O servidor processa a solicitação internamente feita pelo cliente.
4.  O servidor retorna a resposta para o cliente. A resposta contém as informações solicitadas pelo cliente e indica se a solicitação foi bem-sucedida ou não.

Toda solicitação a API RESTful deve conter pelo menos dois componentes principais:

-   Identificador de recurso exclusivo: este componente nada mais é que a url do recurso. É mais conhecido como endpoint, ou seja, o caminho que devemos fazer a requisição para acessar determinado recurso.
-   Método: API RESTful geralmente são implementadas usando métodos HTTP (Protocolo de Transferência de Hipertexto).

**Principais métodos HTTP**

-   GET: O método Get é usado para buscar recursos no servidor localizados na url especificada.
-   POST: Os clientes usam Post para enviar dados ao servidor. Devemos neste caso passar a representação dos dados que queremos enviar para o servidor junto com a requisição.
-   PUT: Método usado para atualizar recursos no servidor.
-   DELETE: Usado para remover recursos no servidor.

**Como aplicar na prática o que aprendeu**

A editora norte-americana Marvel possui uma API RESTful gratuita, que podemos acessar para testar algumas requisições que ela disponibiliza. Podemos acessar tal API no seguinte link <[https://developer.marvel.com/docs](https://developer.marvel.com/docs)\>. 

Para podermos usá-la, devemos nos cadastrar na plataforma, um processo que é bem simples e leva menos de um minuto. Após o cadastro, temos acesso a diversos endpoints, sendo que todos eles usam o método GET. Isso indica que nós só podemos buscar recursos no servidor, jamais adicionar, alterar ou excluir.

Uma vez cadastrado, basta acessarmos a documentação disponibilizada e buscar os recursos disponíveis, clicando no botão Try it out!. Lembre-se de que determinados recursos requerem parâmetros obrigatórios.

**Conteúdo bônus**

**Tópicos avançados**

Padrões de projetos é um assunto vasto, que exige de todo desenvolvedor de software um estudo constante. Eles existem para resolver problemas já conhecidos e todo grande projeto faz uso. Caso você queira saber mais, podemos encontrar os principais padrões de projetos, com exemplos no site refactoring <[https://refactoring.guru/pt-br/design-patterns](https://refactoring.guru/pt-br/design-patterns)\>. 

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: [https://github.com/FaculdadeDescomplica/Strategies-BackEnd](https://github.com/FaculdadeDescomplica/Strategies-BackEnd)

Referência Bibliográfica

IDE - Ambiente de Desenvolvimento Integrado. **RedHat**, 2019. Disponível em <[https://www.redhat.com/pt-br/topics/middleware/what-is-ide](https://www.redhat.com/pt-br/topics/middleware/what-is-ide)\>. Acesso em: 23 de Dezembro de 2022.

Eduardo Guerra. **Design Patterns com Java: Projeto orientado a objetos guiado por padrões**. Casa do Código, 2012.

Padrões de Projeto. **Refactoring**, 2022. Disponível em <[https://refactoring.guru/pt-br/design-patterns](https://refactoring.guru/pt-br/design-patterns)\>. Acesso em: 23 de Dezembro de 2022.

MVC. **Wikipedia**, 2022. Disponível em <[https://pt.wikipedia.org/wiki/MVC](https://pt.wikipedia.org/wiki/MVC)\>. Acesso em: 23 de Dezembro de 2022.

O que é a API RESTful? **AWS**, 2022. Disponível em <[https://aws.amazon.com/pt/what-is/restful-api/](https://aws.amazon.com/pt/what-is/restful-api/)\>. Acesso em: 23 de Dezembro de 2022.