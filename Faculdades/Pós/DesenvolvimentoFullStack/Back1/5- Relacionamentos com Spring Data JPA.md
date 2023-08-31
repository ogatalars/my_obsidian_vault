**Introdução**

A princípio, nós dividimos nossa camada Model em 3 partes. Service, responsável pela lógica de negócio da nossa aplicação, Entity, modelagem de dados e Repository, responsável por armazenar, manipular e gerar dados. Nesta aula, nós iremos ver como configurar a camada Entity.

O Spring Data JPA nos fornece todas as ferramentas necessárias para que possamos criar entidades coesas, complexas e com grande variedade de arranjo entre elas, cobrindo, assim, todos os cenários possíveis que uma aplicação de grande porte possa precisar.

**Objetivos da aula**

-   Configurar uma entidade.
-   Criar o relacionamento OneToOne.
-   Criar o relacionamento OneToMany.
-   Criar o relacionamento ManyToMany.

**Resumo**

**Configurar uma entidade**

Uma entidade no JPA nada mais é do que POJO (Plain Old Java Objects, que quer dizer Velho e Simples Objeto Java), que representam dados que podem ser persistidos no banco de dados. Uma entidade representa uma tabela armazenada em um banco de dados e cada instância de uma entidade representa uma linha na tabela.

Para definirmos uma entidade, basta anotar a classe com a notação @Entity. Essa notação deve ser feita a nível de classe e nós precisamos nos certificar que a entidade possui um construtor sem argumento e uma chave primária.

Cada entidade JPA precisa ter uma chave primária que a torne exclusiva. A notação @ID define uma chave primária. A notação @GeneratedValue fornece uma forma de gerar um identificador que torne a chave primária única. Existem quatro estratégias que podemos usar para gerar os identificadores: AUTO, TABLE, SEQUENCE e IDENTITY. Se usarmos AUTO, o JPA se encarregará de usar qualquer estratégia disponível para gerar o identificador único.

Em muitos casos, o nome da tabela no banco de dados não é o mesmo que o da entidade, por isso temos a notação @Table. Essa notação possui dois parâmetros que podemos usar para especificar o nome da tabela no banco de dados e qual schema essa tabela pertence:

Figura 1 – Entidade Estudante

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674671679781-Cf6klV7zRx.png "Fonte: O autor.")

Fonte: O autor.

Da mesma forma que a notação @Table, podemos usar a notação @Column para especificar mais detalhes sobre determinado campo. Ela possui vários elementos como _name_, _length_, _nullable_ e _unique_.

**Relacionamento OneToOne**

Relacionamentos um para um é quando uma entidade só pode estar associada a uma e somente uma entidade e vice-versa. No nosso exemplo, um estudante só pode ter um endereço. Em termos de banco de dados, esse relacionamento fica da seguinte forma:

Figura 2 – Relacionamento OneToOne.

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674671716661-sEkjQWDlBl.png "Fonte: O autor.")

Fonte: O autor.

Para criarmos esse relacionamento entre Estudante e Endereço, primeiro nós devemos declarar uma classe dentro da outra com as anotações @OneToOne e @JoinColumn. Conforme imagem abaixo:

Figura 3 – Relacionamento entre Estudante e Endereço

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674671742890-tyQeZTe9tX.png "Fonte: O autor.")

Fonte: O autor.

Em relação a notação @JoinColumn, nós precisamos do parâmetro name para indicar qual o nome da coluna na tabela Estudante que irá referenciar ao id da tabela Endereço. O atributo _referencedColumnName_ faz referência ao id que é chave primária da tabela Endereço.

**Relacionamento OneToMany**

Mapeamento um para muitos significa que uma linha em uma tabela está relacionada com várias linhas em outra tabela. No nosso exemplo, um estudante pode ter vários livros, ou seja, um id de estudante pode estar relacionado a vários livros. Do ponto de vista do banco de dados, esse relacionamento pode ser visto da seguinte forma:

Figura 4 – Relacionamento OneToMany

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674671768356-HIl7nrYgAA.png "Fonte: O autor.")

Fonte: O autor.

Do ponto de vista do JPA, podemos escrever nossa classe Estudante da seguinte forma:

Figura 5 – Mapeamento OneToMany entre Estudante e Livros

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674671780537-9rv4YoMPKd.png "Fonte: O autor.")

Fonte: O autor.

Note que a notação @OneToMany nos obriga a declarar o parâmetro mappedBy, que faz referência ao nome da variável do tipo Estudante que fica dentro da classe Livro:

Figura 6 – Mapeamento ManyToOne entre Livro e Estudante

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674671810490-rMAPAbZIM3.png "Fonte: O autor.")

Fonte: O autor.

Se a variável estudante dentro da classe Livro se chamasse book, então deveríamos usar esse nome no parâmetro mappedBy=”book”.

**Relacionamento ManyToMany com @Embeddable**

Imagine que cada estudante possa avaliar um curso ou mais (dar like por exemplo). E não somente isso, mas que cada aluno possa dar uma nota para os cursos que ele avaliou. Este tipo de relacionamento pode ser modelado usando o mapeamento ManyToMany, onde vários alunos podem avaliar vários cursos e vários cursos podem ser avaliados por vários alunos. Do ponto de vista do banco de dados, fica assim:

Figura 7 – Relacionamento ManyToMany

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674671847598-xtsxpnDFvq.png "Fonte: O autor.")

Fonte: O autor.

Repare que todo relacionamento ManyToMany necessariamente requer que uma terceira tabela seja criada. Chamamos essa tabela de tabela de conexão.

Do ponto de vista do JPA, nós precisamos criar uma classe que irá conter os Ids estudante\_id e curso\_id, que chamaremos de AvaliacaoCursoKey, que usa a notação @Embeddable.

A notação @Embeddable é para indicar que estamos criando uma chave composta, conforme imagem abaixo:

Figura 8 – AvaliacaoCursoKey

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674671877116-CsJg0IAEPZ.png "Fonte: O autor.")

Fonte: O autor.

Precisamos criar, também, uma classe que usará a classe AvaliacaoCursoKey como chave primária, essa é a terceira tabela de conexão:

Figura 9 – AvaliacaoCurso

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674671894857-MHr1ELYQZj.png "Fonte: O autor.")

Fonte: O autor.

Note que a chave primária usa uma anotação nova, @EmbeddeId. Essa notação só indica que a variável id é uma chave primária composta. A classe ainda conta com duas variáveis que estão fazendo o relacionamento ManyToOne com Estudante e Curso, e uma variável chamada notaDaAvaliacao, que é da própria classe.

A notação @MapsId indica que esses campos são a chave estrangeira de um relacionamento ManyToOne.

Para finalizar o mapeamento, nós precisamos adicionar a classe AvaliacaoCurso nas entidades Estudante e Curso. Veja o exemplo para a classe Curso:

Figura 10 – Mapeamento de AvaliacaoCurso em Curso

![Fonte: O autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1674671928517-bXYHd3gs0a.png "Fonte: O autor.")

Fonte: O autor.

**Como aplicar na prática o que aprendeu**

A nossa entidade Arquivo não está relacionada com nenhuma outra; uma forma de praticarmos o que aprendemos é criar um mapeamento entre arquivo e estudante, onde um arquivo só pode estar associado a um aluno e um aluno pode ter vários arquivos.

**Conteúdo bônus**

**Tópicos avançados**

A notação @GeneratedValue possui quatro estratégias que podemos usar para gerar os identificadores únicos:

1.  GenerationType.AUTO: o JPA usará qualquer estratégia que quiser para gerar os Ids.
2.  GenerationTypeTABLE: o JPA usará uma tabela no banco de dados para armazenar os identificadores. Esta tabela pode ser global ou única para cada tabela. Neste último caso, teríamos uma tabela de id para cada tabela no banco de dados.
3.  GenerationType.SEQUENCE: o JPA usa uma sequência do banco de dados para gerar as chaves primárias. Neste caso, precisamos criar uma sequência única antes de ser usada.
4.  GenerationType.IDENTITY: quando usamos esse gerador, o JPA criará os Ids de forma sequencial para nós.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: [https://github.com/FaculdadeDescomplica/Strategies-BackEnd](https://github.com/FaculdadeDescomplica/Strategies-BackEnd)

Referência Bibliográfica

Plain Old Java Objects. **Wikipedia**, 2022. Disponível em <[https://pt.wikipedia.org/wiki/Plain\_Old\_Java\_Objects](https://pt.wikipedia.org/wiki/Plain_Old_Java_Objects)\>. Acesso em 04 de Janeiro de 2023.

Defining JPA Entities. **Baeldung**, 2022. Disponível em <[https://www.baeldung.com/jpa-entities](https://www.baeldung.com/jpa-entities)\>. Acesso em 04 de Janeiro de 2023.

One-to-One Relationship in JPA. **Baeldung**, 2022. Disponível em <[https://www.baeldung.com/jpa-one-to-one](https://www.baeldung.com/jpa-one-to-one)\>. Acesso em 04 de Janeiro de 2023.

Hibernate One to Many. **Baeldung**, 2022. Disponível em <[https://www.baeldung.com/hibernate-one-to-many](https://www.baeldung.com/hibernate-one-to-many)\>. Acesso em 04 de Janeiro de 2023.

Many-To-Many Relationship in JPA. **Baeldung**, 2022. Disponível em <[https://www.baeldung.com/jpa-many-to-many](https://www.baeldung.com/jpa-many-to-many)\>. Acesso em 04 de Janeiro de 2023.

Entendendo a geração de chaves com JPA. **Alura**, 2022. Disponível em <[https://www.alura.com.br/artigos/entendendo-a-geracao-de-chaves-com-jpa](https://www.alura.com.br/artigos/entendendo-a-geracao-de-chaves-com-jpa)\>. Acesso em 04 de Janeiro de 2023.