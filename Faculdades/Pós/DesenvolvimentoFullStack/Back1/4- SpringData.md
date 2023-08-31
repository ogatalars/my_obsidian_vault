**Introdução**

O Spring Data JPA é um framework com o objetivo de criar e gerenciar a camada de persistência de dados. Ele se encarrega de fazer a conexão e implementa as interfaces referentes aos nossos repositórios com diversas funcionalidades como CRUD, ordenação das consultas e paginação de registros.

**Objetivos da aula**

-   Configurar o Spring Data JPA
-   Instalar o MySQL e um administrador de banco de dados
-   Métodos do JpaRepository
-   Paginação

**Resumo**

**Configurando o Spring Data JPA**

Para configurarmos o Spring Data JPA na nossa aplicação, é bem simples: basta adicionar sua dependência em nosso arquivo pom.xml, como segue na imagem abaixo:

Figura 1 – Dependência do Spring Data JPA

![Fonte: O autor](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674670235871-XqAoFAf8BK.png "Fonte: O autor")

Fonte: O autor

Como o Spring Data JPA é responsável pela persistência dos dados, não faz sentido o adicionarmos sem termos um banco de dados. Por isso, nosso próximo passo é instalar e configurar o banco de dados MySQL juntamente com sua dependência no pom.xml.

**Configurando o banco de dados**

O primeiro passo é baixar o instalador do MySQL diretamente do site <[https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)\>. 

Em seguida, podemos instalar o gerenciador de banco de dados e testar a nossa conexão. Para isto, vamos instalar o DBeaver, uma ferramenta open source que se que pode ser baixada no seguinte link <[https://dbeaver.io/download/](https://dbeaver.io/download/)\>. 

Agora podemos adicionar a dependência do MySQL em nosso projeto no arquivo pom.xml:

Figura 2 – Dependência do MySQL

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674670308011-IH5brwgWQV.png "Fonte: O autor.")

Fonte: O autor.

Porém, somente adicionar a dependência não é suficiente, precisamos dizer à nossa aplicação Spring como ela deve se conectar ao nosso banco de dados. Por isso, devemos inserir algumas variáveis de ambiente no nosso arquivo application.properties:

Figura 3 – Configuração de conexão ao MySQL

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674670339415-KFJGy42UM4.png "Fonte: O autor.")

Fonte: O autor.

A variável spring.datasource.url possui a seguinte sintaxe:

jdbc:mysql://endereço\_banco\_dados/nome\_do\_schema?param\_1&param\_2

Onde:

-   endereço\_banco\_dados: o endereço do nosso banco de dados;
-   nome\_do\_schema: o nome do schema onde nossas tabelas ficaram dentro do banco de dados;
-   param\_1 e param\_2: parâmetros que podemos passar ao conectarmos ao banco de dados. Lembre-se que eles devem ser separados por &. Exemplos:
    -   createDatabaseIfNotExist=true: cria o schema que passamos no parâmetro acima casa não exista;
    -   serverTimezone=UTC: configura o fuso horário que o banco de dados deve usar ao lidar com valores de data e hora.

**Conhecendo o Spring Data JPA**

O objetivo do Spring Data JPA é a redução significativa de código repetitivos necessários para implementar camadas de acesso a dados para o armazenamento.

A interface central na abstração do repositório Spring Data é o Repository. Essa interface atua como um marcador para capturar os tipos com os quais trabalha. Todas as classes de repositório estendem Repository (CrudRepository, PagingAndSortingRepository e JpaRepository). Por exemplo, ao criarmos um repositório para a classe Estudante que possui o id do tipo Long, devemos passar a classe Estudante e o tipo do id que é Long como parâmetros. Veja o exemplo abaixo que estende JpaRepository:

Figura 4 – JpaRepository

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674670397696-BaPANk4B54.png "Fonte: O autor.")

Fonte: O autor.

A grande vantagem de usarmos JpaRepository é que ela estende CrudRepository e PagingAndSortingRepository, herdando, assim, as funcionalidades de ambas.

A notação @Repository é uma especialização da anotação @Component, que é uma notação de propósito geral. Por ser uma anotação mais específica, é usada para indicar que a classe fornece o mecanismo para armazenamento, recuperação, atualização, exclusão e operações de pesquisa em objetos. Ela se aproxima muito do padrão de projeto DAO, onde as classes DAO são responsáveis por fornecer operações CRUD nas tabelas do banco de dados.

**Principais métodos do JpaRepository**

Ao criarmos um repositório, uma série de métodos são automaticamente disponibilizados para que possamos realizar operações com os nossos objetos. Os principais são:

-   save: usado para persistir uma entidade no banco de dados. Só libera a alteração no banco de dados no final da transação.
-   saveAll: usado para persistir várias entidades no banco de dados.
-   saveAndFlush: persiste uma entidade no banco de dados e já libera as alterações de forma imediata.
-   findAll: usado para buscar todas as entidades.
-   findAllById: mesmo que o anterior, porém recebe como parâmetro uma lista de ids.
-   findById: buscar uma entidade pelo id, recebe o id como parâmetro.
-   existsById: verifica se uma entidade existe ou não pelo id. Retorna true ou false dependendo do resultado.
-   delete: deleta uma entidade no banco de dados, recebe como parâmetro um objeto.
-   deleteAll: deleta todas as entidades ao mesmo tempo.
-   deleteById: deleta uma entidade pelo id dela.

**Paginação**

Paginação com Spring Data JPA é muito simples, basta usarmos o método findAll e passar como parâmetro um objeto do tipo PageRequest. Essa classe recebe como parâmetro a página e a quantidade de itens que queremos por página. Podemos passar ainda um terceiro parâmetro que é o Sort, usado para ordenar os itens.

Figura 5 – Paginação

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674670434030-WdxtleTc5N.png "Fonte: O autor.")

Fonte: O autor.

**Como aplicar na prática o que aprendeu**

A melhor forma de aprender é praticar. Por isso, pegue a classe Arquivo que está sendo usada somente para enviar informações de um arquivo que foi feito upload e configure-a para ser salva no banco de dados em uma tabela chamada arquivo. Em seguida, crie um endpoint que busque todos os arquivos salvos.

**Conteúdo bônus**

**Tópicos avançados**

Em muitas aplicações reais, além de nós precisarmos buscar os recursos paginados e ordenados, também precisamos buscá-los filtrados por um ou mais critérios. Usando somente a implementação JpaRepository nós não conseguimos fazer isso de forma simples, precisando muitas vezes recorrer a query nativas e de alta complexidade.

Pensando nisso, o Spring criou uma interface chamada JpaSpecificationExecutor, onde o principal objetivo é facilitar a criação de queries complexas de forma simples. Para saber mais dê uma olhada neste tutorial que o Spring preparou para nós: < [https://spring.io/blog/2011/04/26/advanced-spring-data-jpa-specifications-and-querydsl/](https://spring.io/blog/2011/04/26/advanced-spring-data-jpa-specifications-and-querydsl/)\>.

Para saber mais sobre as diferenças entre os métodos save() e saveAndFlush, acesse <[https://www.baeldung.com/spring-data-jpa-save-saveandflush](https://www.baeldung.com/spring-data-jpa-save-saveandflush)\>. 

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: [https://github.com/FaculdadeDescomplica/Strategies-BackEnd](https://github.com/FaculdadeDescomplica/Strategies-BackEnd)

Referência Bibliográfica

Spring Data JPA. **Spring,** 2022. Disponível em < [https://spring.io/projects/spring-data-jpa](https://spring.io/projects/spring-data-jpa)\>. Acesso em 04 de Janeiro de 2023.

Difference Between save() and saveAndFlush() in Spring Data JPA. **Baeldung**, 2022. Disponível em < [https://www.baeldung.com/spring-data-jpa-save-saveandflush](https://www.baeldung.com/spring-data-jpa-save-saveandflush)\>. Acesso em 04 de Janeiro de 2023.

O que é Spring Data JPA. **Treinaweb**, 2022. Disponível em <[https://www.treinaweb.com.br/blog/iniciando-com-spring-data-jpa](https://www.treinaweb.com.br/blog/iniciando-com-spring-data-jpa)\>. Acesso em: 11/01/2023.