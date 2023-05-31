**Introdução**

A programação orientada a objetos, também conhecida como POO, é um conceito amplamente utilizado no mundo da programação e quase todas as principais linguagens de programação seguem os princípios de programação orientada a objetos. POO é basicamente um estilo de programação altamente associado aos conceitos de classes e objetos.

Os conceitos de POO nos permitem criar interações específicas entre objetos Java. Eles possibilitam a reutilização de código sem criar riscos de segurança ou prejudicar o desempenho e a legibilidade do código. Existem quatro princípios principais e três princípios secundários da programação Java orientada a objetos, sendo eles a abstração, o encapsulamento, a herança e o polimorfismo. Nesta aula trabalharemos os três primeiros princípios.

**Objetivos da aula**

-   Compreender o conceito de herança.
-   Diferenciar os conceitos de herança e composição.
-   Compreender o que é uma classe abstrata e uma interface.
-   Diferenciar os diferentes tipos de relações entre objetos Java.

**Resumo**

Os quatro princípios da programação orientada a objetos (encapsulamento, abstração, herança e polimorfismo) são recursos que - se usados corretamente - podem nos ajudar a escrever código mais testável, flexível e reutilizável.

**Encapsulamento**

Encapsulamento é uma técnica para restringir um usuário de modificar diretamente os membros de dados ou variáveis de uma classe para manter a integridade dos dados. Como fazemos isso? Restringimos o acesso das variáveis mudando o modificador de acesso para privado e expondo métodos públicos que podemos usar para acessar os dados.

**Abstração**

A abstração é uma extensão do encapsulamento. Trata-se de uma técnica de fornecer apenas os detalhes essenciais ao usuário, ocultando os detalhes desnecessários ou irrelevantes de uma entidade. Isso ajuda a reduzir a complexidade operacional no usuário final.

A abstração nos permite fornecer uma interface simples para um usuário sem solicitar detalhes complexos para executar uma ação. Em palavras mais simples, dando ao usuário a capacidade de dirigir o carro sem a necessidade de entender pequenos detalhes de 'como o motor funciona'.

**Herança**

A herança é um dos aspectos mais importantes da Programação Orientada a Objetos. A chave para entender a herança é que ela fornece reutilização de código. Em vez de escrever o mesmo código repetidamente, podemos simplesmente herdar as propriedades de uma classe na outra. Trata-se de um relacionamento entre uma superclasse (classe generalizada) e uma subclasse (classe especializada), onde a subclasse herda dados e comportamentos da superclasse. Com isso, podemos afirmar que a herança representa a relação “é um”. Observe um exemplo na figura 1.

![Figura 1 – Exemplo de relação de herança Fonte: Elaborado pelo autor.](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1670370915056-nC7WUVwdAv.png "Figura 1 – Exemplo de relação de herança Fonte: Elaborado pelo autor.")

Figura 1 – Exemplo de relação de herança Fonte: Elaborado pelo autor.

Observe pela figura 1 que temos uma superclasse chamada Animal. Nela temos os atributos (características) e métodos (ações) que podem ser representadas em qualquer tipo de animal. Ou seja, qualquer animal tem uma cor e qualquer animal come.

Temos também uma classe chamada Cachorro. Observe que esta classe herda as características da classe animal. A relação é: cachorro herda da classe animal, ou simplesmente, cachorro é um animal. Deste modo, a classe cachorro, além da propriedade cor (herdada da classe animal), também tem a propriedade proprietário, bem como os métodos desta classe. De modo semelhante, a classe Leão também tem seus próprios métodos e atributos, além é claro, dos métodos e atributos da classe Animal.

Quando algumas classes estão intimamente relacionadas, podemos identificar atributos e métodos comuns e adicioná-los a uma superclasse. Depois disso, usamos herança para definir as subclasses e as especializamos com capacidades além daquelas herdadas da superclasse.

**Composição**

Apesar de não ser um dos principais princípios de POO, a composição é definida como uma técnica para implementar um relacionamento entre objetos. A composição em Java é obtida usando variáveis de instância de outros objetos. Por exemplo, uma classe Pessoa pode ter um atributo que é do tipo Trabalho, onde Trabalho é uma outra classe. Neste caso, temos a relação do tipo “tem um”. Um relacionamento “tem um” significa que uma classe tem um relacionamento com outra classe. Por exemplo, a classe A contém a referência da classe B e pode acessar todas as propriedades da classe B. Um corpo tem uma cabeça.

Comparando herança e composição, observe a figura 2 a seguir.

![Figura 2 – Herança e Composição Fonte: Elaborado pelo autor](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1670370948256-tqAGtlJMpE.png "Figura 2 – Herança e Composição Fonte: Elaborado pelo autor")

Figura 2 – Herança e Composição Fonte: Elaborado pelo autor

Observe pela figura 2 que temos três classes. A superclasse é a Veículo, a qual tem como filha a classe Carro, que herda as características da superclasse. Observe que carro é um tipo de veículo, poderíamos ter outros como Moto ou Caminhão. Este tipo de relação é herança.

Por outro lado, temos a classe Motor. Um carro não herda da classe motor, porém, um carro tem um objeto chamado motor. A essa relação temos o conceito de composição.

**Tópicos avançados**

Os quatro princípios da Programação Orientada Objeto norteiam o desenvolvimento de programas em Java. Compreender estes princípios e saber colocá-los na prática é um diferencial para o programador experiente e que realmente sabe como programar nesta linguagem.

O artigo Utilizando linguagens de programação orientadas a objetos para codificar programas adaptativos ilustra um grande exemplo do uso de POO no desenvolvimento de ferramentas utilizando este paradigma. Acesse o artigo em: <[http://lta.poli.usp.br/lta/publicacoes/artigos/2015/cereda-e-jose-neto-2015-utilizando-linguagens-de-programacao-orientadas-a-objetos-para-codificar-programas-adaptativos/at\_download/file](http://lta.poli.usp.br/lta/publicacoes/artigos/2015/cereda-e-jose-neto-2015-utilizando-linguagens-de-programacao-orientadas-a-objetos-para-codificar-programas-adaptativos/at_download/file)\>. **(acesso em 08/11/2022)**

Referência Bibliográfica

MANZANO, J. A. N. G. **Algoritmos: lógica para desenvolvimento de programação de computadores**. 28. ed. São Paulo: Érica, 2016.