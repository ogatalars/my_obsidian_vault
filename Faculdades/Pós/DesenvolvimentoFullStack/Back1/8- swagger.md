**Introdução**

Todo processo de documentação é entediante, levando muitos desenvolvedores a negligenciá-lo. Pensando nisso, foi criado o projeto OpenAPI: uma especificação que visa padronizar as documentações de API RESTfuls de forma simples e automática.

**Objetivos da aula**

-   Importância de documentar uma API
-   Framework Swagger
-   Principais pontos ao documentar um API

**Resumo**

**Importância de documentar uma API**

Todo desenvolvedor passa mais tempo lendo, e tentando entender o que outros fizeram, do que codificando. Todo usuário de uma API RESTful deve ser capaz de usá-la sem perder horas lendo um manual. Por isso, a documentação é importante em todo projeto. Isso demonstra um nível de maturidade por parte de nossa API.

Seguir um padrão na hora de documentá-la também é muito importante. Imagine precisar usar APIs de terceiros e, para cada uma, nos deparássemos com uma documentação diferente? Por esse e outros motivos, temos um projeto open source chamado OpenAPI, que serve para documentarmos as APIs RESTful de forma simples e padronizada.

**OpenAPI com Swagger**

A especificação OpenAPI define uma descrição de APIs independente de linguagem de programação e permite que tanto humanos, como computadores sejam capazes de descobrir e entender os recursos de um serviço sem exigir acesso ao código-fonte, documentação adicional ou inspeção de tráfego de rede. Quando documentamos corretamente nossa API usando essa especificação, um consumidor pode entender e interagir com o serviço remoto com o mínimo de esforço possível.

Swagger é um conjunto de ferramentas que usamos para implementar as especificações da OpenAPI. Entre as várias ferramentas disponíveis, algumas são:

-   Swagger Core: Bibliotecas em Java para gerar e ler definições Swagger.
-   Swagger Codegen: Ferramenta de linha de comando usada para gerar arquivos de especificação da nossa documentação.
-   Swagger UI: Interface gráfica para explorarmos a documentação gerada pelo Swagger.
-   Swagger-Socket: Expõe e invoca definições de APIs para WebSockets.

Porém, gerar os arquivos que descrevem a API, de forma a atender todos os requisitos do OpenAPI, pode ser algo maçante e desanimador. Por isso, existem bibliotecas do Java que nos ajudam, tornando esse processo mais simples.

**Dependências necessárias**

Precisamos adicionar 3 dependências em nossa aplicação para começarmos a documentá-la, são elas:

-   Springfox-swagger2: Fornece as principais ferramentas.
-   Springfox-boot-starter: Juntamente com springfox-swagger2, fornece as ferramentas básicas para podermos documentar nossa API.
-   Springfox-swagger-ui: Fornece uma interface de usuário para explorarmos a documentação da API via browser.

Figura 1 – Dependências necessárias

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674673643375-XYh6Lr4qKX.png "Fonte: O autor.")

Fonte: O autor.

Para que os arquivos de especificação OpenAPI sejam criados, precisamos criar uma classe de configuração anotada com @Configuration do Spring com um bean Docket, que é responsável por habilitar as configurações globais do Swagger.

Figura 2 – Bean Docket

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674673676023-4FejwVONbc.png "Fonte: O autor.")

Fonte: O autor.

No método **apiInfo** definimos os dados básicos de nossa API, como descrição, contato, licença, termos de uso, etc. Nos métodos **api** e **path** definimos os critérios no qual o Swagger deve seguir para encontrar automaticamente todos os endpoints definidos na aplicação.

Agora, basta executarmos nossa aplicação e acessarmos o endereço localhost:8080/swagger-ui/ que teremos acesso a nossa documentação gerada de forma automática.

Figura 3 – Documentação gerada pelo Swagger.

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674673708440-KvztX9DWsU.png "Fonte: O autor.")

Fonte: O autor.

**Principais pontos ao documentar uma API**

Sempre que documentamos uma API, devemos levar em consideração os consumidores dela, pois são eles que deverão usá-la sem ter acesso ao código-fonte. Por isso, devemos deixar bem claro os nomes dos métodos, sua funcionalidade, os parâmetros que cada request recebe, o retorno esperado, etc.

O Swagger disponibiliza algumas anotações e parâmetros que podemos usar para ajustar cada endpoint, são eles:

Figura 4 – Documentando endpoint Buscar Estudante por Id.

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674673753034-J9fXOOrEzC.png "Fonte: O autor.")

Fonte: O autor.

-   Parâmetro _produces_: usado para indicar o formato do tipo de resposta que nosso endpoint retorna, se é json, xml etc.
-   @ApiOperation: Título do nosso endpoint com uma nota caso queira adicionar uma.
-   @ApiResponses: Retornos que esse endpoint deve retornar caso a requisição não tenha sucesso será HTTP 200.

Resultado

Figura 5 – Resultado endpoint buscar estudante por ID.

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674673782750-Wuh2GwQCaH.png "Fonte: O autor.")

Fonte: O autor.

**Como aplicar na prática o que aprendeu**

Uma boa dica é seguir o exemplo apresentado no endpoint “Buscar estudante pelo ID” e documentar todos os endpoints da API.

**Conteúdo bônus**

**Tópicos avançados**

Não foi abordado aqui a anotação @ApiModelProperty, que é usada para descrever cada variável do nosso modelo de dados. Nós podemos usá-la para dar uma descrição do atributo de um objeto usando o parâmetro _notes_ e um exemplo desse atributo com o parâmetro _exemple_. Para os dados de um Estudante, poderíamos fazer da seguinte forma:

Figura 6 – Descrevendo os parâmetros de um model com @ApiModelProperty.

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674674680641-X55I70Wl3Y.png "Fonte: O autor.")

Fonte: O autor.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: [https://github.com/FaculdadeDescomplica/Strategies-BackEnd](https://github.com/FaculdadeDescomplica/Strategies-BackEnd)

Referência Bibliográfica

API Development for Everyone. **Swagger**, 2022. Disponível em <[https://swagger.io](https://swagger.io/)\>. Acesso em 26/01/2023

The OpenAPI Specification. **Github**, 2022. Disponível em <[https://github.com/OAI/OpenAPI-Specification](https://github.com/OAI/OpenAPI-Specification)\>. Acesso em 26/01/2023

Documentando uma API Spring Boot com Swagger. **TreinaWeb**, 2019. Disponível em <[https://www.treinaweb.com.br/blog/documentando-uma-api-spring-boot-com-o-swagger](https://www.treinaweb.com.br/blog/documentando-uma-api-spring-boot-com-o-swagger)\>. Acesso em 26/01/2023