**Introdução**

O Spring Boot é um framework incrível, que disponibiliza uma quantidade enorme de ferramentas para podermos usar em nossos projetos. Ele nos possibilita agendar tarefas, trabalhar com métodos assíncronos e até mesmo criar uma conexão persistente com o cliente, possibilitando que o servidor envie mensagens para o cliente.

O domínio de tais ferramentas é essencial; porém, não saber como usar ou configurar pode trazer dor de cabeça, quando lidamos com projetos reais.

**Objetivos da aula**

-   Aprender como usar Lazy e Eager
-   Usar a propriedade cascade
-   Native Query versos JPQL
-   Agendamento de tarefas e métodos assíncronos
-   WebSocket com Spring Boot

**Resumo**

**Lazy e Eager**

Quando lidamos com relacionamentos entre entidades com o Spring Data JPA, nos deparamos com a propriedade fetch, que faz parte das notações @OneToOne, @OneToMany e @ManyToOne. Essa propriedade serve para dizer ao JPA quando as entidades mapeadas devem ser buscadas no banco de dados.

Por padrão, a propriedade fetch é do tipo Lazy. Por exemplo, digamos que a entidade Estudante possui em seu mapeamento uma lista de Livros. Se não alterarmos o atributo fetch da notação @OneToMany, quando fizermos uma consulta no banco buscando um Estudante pelo Id, o JPA não irá trazer junto com ele a lista de Livros, pois ela está configurada para ser carregada o mais tardar possível (lazy).

Figura 1 – Entidade Livros configurada com fetch Lazy de forma não explícita

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674672633311-dASyiczz3b.png "Fonte: O autor.")

Fonte: O autor.

Por outro lado, se configurarmos o atributo fetch para Eager, sempre que buscarmos um Estudante a lista de Livros virá junto. A grande desvantagem dessa configuração é que podemos ter problemas de performance, quando temos várias entidades correlacionadas. Por isso, seu uso não é recomendado.

Figura 2 – Entidade Livros configurada com fech Eager

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674672660232-AbOUzm9XiZ.png "Fonte: O autor.")

Fonte: O autor.

Porém, ao mudarmos de Lazy para Eager e vice-versa não notamos nenhuma diferença, a princípio. Isso acontece porque o Spring Boot por padrão vem com o padrão transacional chamado Open Session In View (OSIV) habilitado. Em outras palavras, o Spring gerencia para nós todas as sessões que são abertas durante o uso da aplicação. Isso quer dizer que o próprio JPA decide quando ou não uma entidade deve ser carregada e nossa configuração não surte efeito.

Porém, há uma forma de desabilitamos o OSIV, basta usarmos a seguinte configuração no aplication.properties:

spring.jpa.open-in-view = false.

Agora, se configurarmos a entidade Livros dentro de Estudante para fetch Lazy e tentarmos fazer uma requisição buscando estudante por Id, não conseguiremos. Isso acontece porque, ao tentarmos retornar à entidade Estudante para o cliente, o servidor tentará acessar a propriedade Livros, porém ela não foi carregada.

Existem duas formas de usarmos Lazy corretamente, sem precisarmos nos preocupar com performance:

1.  Usar a anotação @Transaction.

A anotação @Transaction é usada para delimitar o escopo de uma transação. Isso quer dizer que, quando anotamos um método com @Transaction, ou o método todo executa com sucesso ou nada é executado. Se algo der errado no meio do caminho, o Spring se encarregará de voltar as alterações.

Analisemos o método buscarEstudantePorId:

Figura 3 – Uso da anotação @Transactional

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674672703911-LWJNxYmtxJ.png "Fonte: O autor.")

Fonte: O autor.

A primeira coisa que notamos é o uso da anotação @Transactional na linha 33, que indica que todo o método faz parte de uma única transação, agora.

Da linha 37 a 40 temos a primeira forma de carregarmos a lista de livros, que é usando a variável livros de alguma forma. Faz sentido fazer o carregamento dos livros dessa forma, se iremos usá-los em alguma operação durante o processo de buscar estudante.

Na linha 42 nós temos uma segunda forma de carregar os livros, que é fazendo uso do Hibernate.initialize. Só faz sentido usar essa segunda forma se somente quisermos carregar os livros e mais nada. Porém, não é recomendado usar o Hibernate.initialize; em breve, veremos uma forma melhor de termos o mesmo resultado.

Podemos escolher entre um ou outro método, isso vai depender da necessidade.

1.  Usar a anotação @EntityGraph no repositório.

Uma segunda forma de carregar entidade Lazy é usar a notação @EntityGraph no repositório da nossa entidade. Vejamos um exemplo:

Figura 4 – Anotação @EntityGraph

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674672738346-dOOUQZbb52.png "Fonte: O autor.")

Fonte: O autor.

A notação @EntityGraph é usada para indicar quais itens da nossa entidade devem ser carregados de forma Eager. Com isso, nós temos a vantagem de selecionar somente aquilo que nos interessa ser carregado. Outra vantagem é que podemos criar vários métodos com diferentes atributos sendo buscados de forma Eager.

**Atributo cascade**

Em relacionamento de entidades, muitas vezes a existência de uma entidade só faz sentido se uma outra também existir. Por exemplo, o mapeamento Estudante-Endereço. Sem o Estudante, não faz sentido o Endereço existir por si só. Quando deletamos um Estudante, a entidade Endereço deve ser excluída junto.

Usando o atributo cascade, nós conseguimos fazer isso. Quando executamos alguma ação na entidade pai, o mesmo deve acontecer com as entidades filhas.

Todos os tipos de cascade são representados pelo enum javax.persistence.CascadeType:

-   **ALL**: propaga todas as operações, inclusive as 3 que o Hibernate fornece.
-   **PERSIST**: propaga a operação de persistência da entidade pai para a filha. Quando salvamos um estudante, por exemplo, o endereço será salvo também.
-   **MERGE**: o merge é uma operação que serve para mesclar dois objetos, muito usado para atualizar um objeto que vem de uma requisição com a sua versão que está salva no banco de dados. O cascade MERGE propaga essa operação.
-   **REMOVE**: propaga a operação de deletar as entidades do banco de dados. Se deletarmos um estudante, por exemplo, seu endereço também será deletado, caso o endereço tenha esse tipo de cascade.
-   **REFRESH**: refresh é uma operação que lê os dados do banco de dados e atualiza a entidade sempre que solicitamos. O cascade REFRESH propaga essa operação da entidade pai para a filha.
-   **DETACH**: a operação detach é usada para separar uma entidade do contexto do banco de dados (persistência). Se, por exemplo, buscarmos um estudante pelo id, o objeto retornado faz parte desse contexto. Qualquer operação em cima deste objeto pode acarretar alterações no banco de dados. Para evitar isso, usamos a operação detach.

O Hibernate fornece mais 3 tipos adicionais, que são:

-   **REPLICATE**: a operação replicate é utilizada quando temos mais de uma fonte de dados e queremos que os dados sejam replicados.
-   **SAVE\_UPDATE**: propaga as operações de salvar e atualizar.
-   **LOCK**: a operação é o oposto da detach. Ela serve para colocar um objeto no contexto do banco de dados.

Exemplo de uso da propriedade cascade que pode ser feito com as notações @OneToOne, @OneToMany, @ManyToOne e @ManyToMany:

Figura 5 – Uso do atributo cascade.

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674672771333-ot9gYyA4Qt.png "Fonte: O autor.")

Fonte: O autor.

Note que podemos usar mais de um atributo, como por exemplo na linha 39, onde as operações PERSIST, REMOVE e MERGE serão propagadas da entidade Estudante para a entidade filha Endereço. Já na linha 43, todas as operações serão propagadas de Estudante para Livro.

**Native Query versus JPQL**

Native Query ou consulta nativa é o SQL (Structured Query Language, ou Linguagem de Consulta Estruturada) que a origem de dados usa, no nosso caso MySQL. Isso vai depender da plataforma usada. Já o JPQL (Jakarta Persistence Query Language) é uma linguagem de consulta orientada a objetos independente da plataforma de dados.

Para usarmos uma query nativa no JPA, devemos dizer explicitamente usando o atributo nativeQuery = true dentro da anotação @Query, veja um exemplo onde queremos buscar todos os estudantes que ainda não avaliaram nenhum curso:

Figura 6 – Query Nativa

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674672799990-dok2gCV3tW.png "Fonte: O autor.")

Fonte: O autor.

A mesma consulta pode ser feita usando JPQL, que usa uma estrutura de consulta parecida com MySQL, porém, ao invés de usarmos os nomes das tabelas estudante e avalicacao\_curso com o schema api, usamos os nomes das classes e somente isto. Veja um exemplo da mesma consulta com JPQL:

Figura 7 – JPQL.

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674672913251-8HAi2xAF4N.png "Fonte: O autor.")

Fonte: O autor.

Devemos prestar atenção em escrever os nomes das classes exatamente como eles são, por exemplo: “estudante” com “e” minúsculo não irá funcionar, mas sim “Estudante”. Além disso, não precisamos dizer qual coluna faz ligação com outra, pois o mapeamento da chave primária com a chave estrangeira já é feito, dentro da classe.

Uma terceira forma de escrever a mesma consulta é usando a Query Lookup Strategies, que é a habilidade de construir consultas através dos nomes dos métodos:

Figura 8 – Query com o nome do método.

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674672940094-ZQbO6iCr85.png "Fonte: O autor.")

Fonte: O autor.

A regra para criar consultas com o nome do método é sempre começar com _findBy_, seguido do nome da variável (sempre usando camel-case) mais a condição: _Is_, _IsNull_, _OrderBy_, _In_, _Like_, etc. A lista é grande, mas você pode conferir vários exemplos na própria documentação do Spring em: <[https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods)\>. 

Veja mais alguns exemplos extraído da documentação listada acima:

Figura 9 – Consultas com nome de métodos.

![Fonte: Documentação Spring. Disponível em: <https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods>. Acessado em 11 jan. 2023](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674672985461-jckg2zo4W3.png "Fonte: Documentação Spring. Disponível em: <https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods>. Acessado em 11 jan. 2023")

Caso o método receba mais de um parâmetro, devemos passar na ordem em que aparecem no nome do método:

Figura 10: Consulta com nome de métodos e parâmetros.

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674673036247-rwXIja7iHS.png "Fonte: O autor.")

Fonte: O autor.

**Como agendar uma tarefa com @Scheduled**

A notação @Scheduled pode ser usada para configurar e agendar tarefas. Ela só pode ser aplicada em métodos e existem apenas duas regras para usarmos essa anotação:

1.  O método deve ter um retorno do tipo void. Caso contrário o retorno é ignorado.
2.  O método não deve receber nenhum parâmetro.

Veja um exemplo abaixo:

Figura 6 – Uso da anotação @Scheduled

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674673074741-ZGlYNX0IxI.png "Fonte: O autor.")

Fonte: O autor.

Para habilitarmos essa notação, devemos usar a notação @EnableScheduling em uma classe de configuração. Podemos fazer isso na nossa classe principal mesmo:

Figura 7 – Habilitando agendamento de tarefas com @EnableScheduling

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674673096690-ocWftBFpsH.png "Fonte: O autor.")

Fonte: O autor.

Podemos agendar uma tarefa em qualquer período usando o atributo cron:

Figura 8 – Usando o atributo cron em @Scheduled.

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674673122589-QSyiCVXa9A.png "Fonte: O autor.")

Fonte: O autor.

Podemos ver que somos obrigados a usar todos os seis itens de configuração, mas quando não queremos especificar um deles usamos o asterisco para ignorar.

**Métodos assíncronos**

Em processamentos síncronos, uma tarefa ou linha de código só é executada quando a anterior termina, ou seja, tudo acontece em uma mesma Thread (processamento).

Com o advento de processadores com vários núcleos, se quisermos, uma tarefa pode ser executada em paralelo a outra, ou seja, em Threads diferentes. Isso é muito útil, se precisarmos executar uma tarefa que demora muito tempo para ser finalizada. Imagine que nosso servidor tenha um endpoint, cujo serviço interno demora 5 minutos para ser finalizado. Não é bom que o cliente fique esperando esse tempo todo por uma resposta, ele pode pensar que deu algum erro no servidor. Se colocarmos essa tarefa para ser executada de forma assíncrona, podemos devolver uma resposta para o cliente dizendo que a requisição dele está sendo processada.

Para habilitarmos o processamento assíncrono no Spring Boot, basta usarmos a anotação @EnableAsync em uma classe de configuração, por exemplo: nossa classe principal:

Figura 9 – Habilitando método assíncrono

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674673160497-VuOgFzHWGc.png "Fonte: O autor.")

Fonte: O autor.

Agora podemos usar a anotação @Async em um método que queremos que seja executado de forma assíncrona. Mas para isso devemos seguir duas regras:

1.  O método deve ser público
2.  Chamar o método da própria classe dele não irá funcionar. Uma classe de fora deve fazer isso.

Vejamos o exemplo:

Figura 10 – Método assíncrono

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674673209293-Xx636jjTrW.png "Fonte: O autor.")

Fonte: O autor.

**WebSocket**

WebSocket é uma tecnologia onde o cliente pode se conectar com o servidor de forma contínua e receber respostas dele de acordo com eventos. Um exemplo clássico de uso de WebSocket são aplicativos de mensagem instantânea, onde o cliente não fica o tempo todo fazendo uma requisição no servidor em busca de novas mensagens, porque o servidor envia para o cliente quando uma nova surgir.

WebSocket usa o conceito de eventos que pode ser entendido como canal de comunicação. Nós devemos criar esses eventos no servidor e cada cliente se conecta em um evento que esteja interessado. Assim, o servidor envia uma mensagem em um evento e todos que estão inscritos naquele evento recebem a mesma mensagem. Isso é chamado de broadcast.

**Conteúdo bônus**

**Tópicos avançados**

Todos os tópicos abordados nesta aula requerem bastante prática. Sugiro que ele seja revisado com o auxílio do material listado ao longo dos tópicos e na bibliografia.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: [https://github.com/FaculdadeDescomplica/Strategies-BackEnd](https://github.com/FaculdadeDescomplica/Strategies-BackEnd)

Referência Bibliográfica

Hibernate: save, persist, update, merge, saveOrUpdate. **Baeldung**, 2022. Disponível em <[https://www.baeldung.com/hibernate-save-persist-update-merge-saveorupdate](https://www.baeldung.com/hibernate-save-persist-update-merge-saveorupdate)\>. Acesso em 04 de Janeiro de 2023.

A Guide to Spring’s Open Session In View. **Baeldung**, 2021. Disponível em <[https://www.baeldung.com/spring-open-session-in-view](https://www.baeldung.com/spring-open-session-in-view)\>. Acesso em 04 de Janeiro de 2023.

Eager/Lazy Loading In Hibernate. **Baeldung**, 2021. Disponível em <[https://www.baeldung.com/hibernate-lazy-eager-loading](https://www.baeldung.com/hibernate-lazy-eager-loading)\>. Acesso em 04 de Janeiro de 2023.

Overview of JPA/Hibernate Cascade Types. **Baeldung**, 2021. Disponível em <[https://www.baeldung.com/jpa-cascade-types](https://www.baeldung.com/jpa-cascade-types)\>. Acesso em 04 de Janeiro de 2023.

The @Scheduled Annotation in Spring. **Baeldung**, 2022. Disponível em <[https://www.baeldung.com/spring-scheduled-tasks](https://www.baeldung.com/spring-scheduled-tasks)\>. Acesso em 04 de Janeiro de 2023.

Query Methods. **Spring.io**, 2022. Disponível em <[https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods)\>. Acesso em 04 de Janeiro de 2023.

How To Do @Async in Spring. **Baeldung**, 2022. Disponível em <[https://www.baeldung.com/spring-async](https://www.baeldung.com/spring-async)\>. Acesso em 04 de Janeiro de 2023.

WebSockets. **Mozilla**, 2022. Disponível em <[https://developer.mozilla.org/pt-BR/docs/Web/API/WebSockets\_API](https://developer.mozilla.org/pt-BR/docs/Web/API/WebSockets_API)\>. Acesso em 04 de Janeiro de 2023.

How it works. **Socket.io,** 2022. Disponível em <[https://socket.io/docs/v4/how-it-works/](https://socket.io/docs/v4/how-it-works/)\>. Acesso em 04 de Janeiro de 2023.