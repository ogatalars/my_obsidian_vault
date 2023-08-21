**Introdução**

Uma API que significa Interface de Programação de Aplicação deve fornecer um serviço para que um ou mais clientes possam usar. O serviço deve fornecer formas de criar, ler, atualizar e deletar recursos que o cliente possui interesse.

Usando a tecnologia Spring podemos criar uma API RESTful de forma simples e rápida, com pouca configuração conseguimos subir uma aplicação totalmente funcional.

**Objetivos da aula**

-   Definir como nossa API deve se comportar.
-   Como criar uma aplicação Spring Boot do zero.
-   Criar a camada Model.
-   Criar a camada Controller.

**Resumo**

**Definindo nossa API**

Inicialmente, nossa API deve expor o recurso Estudante para que possamos realizar as operações de CRUD (criar, ler, atualizar e deletar). Para isso, ela deve expor os endpoints localmente com seus respectivos identificador (URL) e método (verbo HTTP), conforme imagem abaixo:

Figura 1 – Lista de endpoints do recurso Estudante.

![Fonte: O autor](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674667121473-nsp2fexu9S.png "Fonte: O autor")

Fonte: O autor

**Criar aplicação Spring Boot**

Podemos usar o Spring Tools Suite para criar nossa aplicação Spring. Para isto, basta irmos em File >> New >> Spring Starter Project, conforme imagem abaixo:

Figura 2 – Acessar Spring Starter Project.

![Fonte: O autor](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674667149642-YgNgwr9Ll6.png "Fonte: O autor")

Fonte: O autor

Na tela que se abrirá, lembre-se de selecionar o tipo Maven, versão do Java 11 e linguagem Java, como é exibido na imagem abaixo.

Figura 3 – Configurando o novo projeto.

![Fonte: O autor](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674667185560-ioFeIPFuvR.png "Fonte: O autor")

Fonte: O autor

Iremos iniciar nosso projeto com 3 dependências:

-   Lombok: responsável por gerar os códigos boilerplate para nós, como Getter e Setters.
-   Spring Web: principal dependência para podermos desenvolver nossa aplicação. É composta por outras dependências, entre elas Spring MVC, REST e Tomcat como servidor padrão embutido. Ela já possui todas as configurações necessárias para que possamos rodar e testar nossa aplicação localmente, assim como nossa camada Controller.
-   Spring Boot Dev Tools: Permite fazer alterações em nossa aplicação e testar logo em seguida sem precisar parar e rodar a aplicação novamente. Ou seja, ela detecta alterações no código e reinicializa a aplicação automaticamente.

Na Figura-4 podemos ver essas dependências selecionadas. Em seguida, basta clicar em Finish e esperar alguns minutos para que o projeto seja gerado e baixado em nosso computador automaticamente pela ferramenta Spring-initializer.

Figura 4 – Seleção de dependências.

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674667215317-Gu41OKNCUc.png "Fonte: O autor.")

Fonte: O autor.

**Criar a camada Model**

A camada Model do padrão MVC é responsável por conter as regras de negócio da nossa aplicação, assim como as funções e comportamento dos dados. É ela também responsável pelo gerenciamento dos dados, seu armazenamento, modelagem, manipulação e geração. Podemos ver que nossa camada Model ainda possui muita responsabilidade, por isso, iremos dividi-la em 3 partes:

-   Service: responsável por conter a lógica da nossa aplicação. É nela que toda a nossa regra de negócio irá ficar.
-   Entity: modelar os dados.
-   Repository: armazenar, manipular e gerar os dados.

Veja que quebramos nossa camada Model em 3 partes bem distintas e usaremos isso para organizarmos nossa aplicação. Para isso, devemos criar 3 novos packages: service, entity e repository.

**Conhecendo algumas anotações Spring**

Quando utilizamos um framework como o Spring Boot, devemos ter em mente que ele foi feito para se encarregar de certas tarefas para nós. Uma delas é o gerenciamento e criação de instâncias dos objetos. Em outras palavras, quando não queremos nos preocupar como ou quando um objeto deve ser instanciado, devemos dizer ao Spring que ele faça isso para nós. Uma forma de fazer isso é através de anotações.

Anotações não se limitam apenas ao gerenciamento de instância de objetos, mas servem também para configurar diversos aspectos da nossa aplicação. Elas são um ótimo recurso para configurarmos nossa aplicação de forma simples e produtiva. Dentre tantas anotações, segue algumas e sua respectiva funcionalidade:

-   @Ben: todo e qualquer objeto gerenciado pelo Spring Boot.
-   @Configuration: faz parte da estrutura principal do Spring. Indica que a classe possui métodos de definição @Ben. Nos permite usar injeção de dependência.
-   @SpringBootApplication: é uma anotação de configuração que é composta por outras anotações como @Configuration, @EnableAutoConfiguration e @ComponentScan. Ela existe para poupar o desenvolvedor de ter que fazer uma série de configurações na aplicação. É responsável por podemos criar uma aplicação totalmente funcional com pouca ou nenhuma configuração adicional.
-   @Component: anotação genérica para indicar qualquer componente gerenciado pelo Spring.
-   @Service: indicar que uma classe pertence a camada de serviço. Onde iremos colocar todas as nossas regras de negócio.
-   @RestController: possibilita o desenvolvimento dos serviços RESTful. Permite retornar uma representação de um objeto da aplicação ao invés de uma View.

**Criar a camada Controller**

Essa é a camada que é responsável por gerenciar o fluxo das requisições que chegam em nossa API. É nela onde iremos configurar os nossos endpoints. Podemos dizer que ela é a porta de entrada para a nossa aplicação. Toda e qualquer requisição deverá passar por essa camada, que por sua vez também é responsável por retornar a resposta apropriada para todas as requisições.

Para isso, devemos criar um package chamado controller e dentro deste package ficará todas as nossas classes de controller. Cada classe deve ser anotada com @RestController. Além desta anotação, temos uma anotação para cada verbo HTTP:

-   @GetMapping: representa o método GET.
-   @PostMapping: representa o método POST.
-   @PutMapping: representa o método PUT.
-   @DeleteMapping: representa o método DELETE.

**Conteúdo bônus**

**Tópicos avançados**

Não foi mencionada a anotação @Autowired que é usada para fazer injeção de dependência pois seu uso não é aconselhado. Na figura abaixo é mostrado as duas formas de fazer injeção de dependências no Spring Boot.

Figura 5 – Injeção de dependência no Spring Boot

![Fonte: O autor](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674667246847-ohrxwgVshX.png "Fonte: O autor")

Fonte: O autor

Veja que usar o @Autowired é muito mais simples e gera menos código, porém citarei aqui três de suas desvantagens e porque você deve usar o método construtor da classe ao invés do @Autowired.

-   Por ser simples de usar, perdemos o controle da quantidade de injeções que fazemos dentro de uma classe. Com isso a classe passa a ter muito mais responsabilidade do que deveria.
-   Aumenta a dificuldade para realizar testes unitários, pois ao tentarmos inicializar uma classe não conseguiremos inicializar também suas dependências anotadas com @Autowired. A única maneira de fazer isso é por meio de API de reflexão, o que quebra completamente o encapsulamento.
-   O código gerado é menos seguro se comparado com uma simples chamada de construtor.

Caso você queira saber mais sobre injeção de dependência, recomendo a leitura do artigo feito por Martin Fowler em <[https://martinfowler.com/articles/injection.html](https://martinfowler.com/articles/injection.html)\>. 

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: [https://github.com/FaculdadeDescomplica/Strategies-BackEnd](https://github.com/FaculdadeDescomplica/Strategies-BackEnd)

Referência Bibliográfica

O que é API . AWS, 2022. Disponível em <[https://aws.amazon.com/pt/what-is/api/](https://aws.amazon.com/pt/what-is/api/)\>. Acesso em 23 de Dezembro de 2022.

Building REST services with Spring. Spring.io, 2022. Disponível em < [https://spring.io/guides/tutorials/rest/](https://spring.io/guides/tutorials/rest/)\>. Acesso em 23 de Dezembro de 2022.