**Introdução**

A programação orientada a objetos (POO) é um núcleo da programação Java, que é usada para projetar um programa usando classes e objetos. POO também podem ser caracterizados como controle de dados para acesso ao código. Nesta abordagem, os programadores definem o tipo de dados de uma estrutura de dados e as operações que são aplicadas à estrutura de dados.

Nesta aula, vamos aprender sobre os conceitos básicos de POO em java. A programação orientada a objetos é um modelo que fornece diferentes tipos de conceitos, como herança, abstração, polimorfismo, entre outros. Esses conceitos visam implementar entidades do mundo real em programas, e criam métodos de trabalho e variáveis para reutilizá-los sem comprometer a segurança. Muitas das linguagens de programação orientadas a objetos mais utilizadas e significativas incluem Java, C++, C#, JavaScript, Python, Ruby, Perl, Smalltalk etc.

**Objetivos da aula**

-   Compreender o conceito de programação orientada a objetos.
-   Reconhecer os princípios da programação orientada a objetos.
-   Compreender cada um dos princípios e sua aplicação.
-   Diferenciar programação estruturada de programação orientada a objetos.

**Resumo**

A programação orientada a objetos (POO) é definida como um paradigma de programação (e não uma linguagem específica) construído sobre o conceito de objetos, ou seja, um conjunto de dados contidos em campos e código, indicando procedimentos – ao invés do usual baseado em lógica sistema.

A POO organiza um programa em esquemas básicos e reutilizáveis de código chamados de **classes**. Essas classes são então usadas e reutilizadas para criar objetos novos e exclusivos com funções semelhantes.

Linguagens orientadas a objetos, como Java, formularam as regras básicas de como os desenvolvedores geralmente lidam com dados em softwares complexos e aplicativos da web. Mais especificamente, a programação orientada a objetos oferece um modelo de desenvolvimento que permite aos programadores manipular e organizar esses dados como objetos em vez de blocos de código e lógica.

A abordagem de programação orientada a objetos permite então que os desenvolvedores vinculem e manipulem dados usando funções exclusivas. Essas funções abrangem uma variedade de operações, incluindo reutilização de código e designação de variável. Os programadores podem então estabelecer um código de procedimento que rege a acessibilidade dos dados e facilita a adição de novas funcionalidades à medida que os aplicativos e as arquiteturas de software evoluem ao longo do tempo.

A estrutura, ou blocos de construção, da programação orientada a objetos incluem o seguinte (MANZANO, 2016):

**Classes**

Classes são tipos de dados definidos pelo usuário para serem usados como modelo para objetos, contendo atributos e métodos individuais. Pense na classe como sendo uma planta que um arquiteto desenhou. Ela serve como uma orientação de como será a casa, porém, ninguém pode morar em uma planta pois é só um desenho. Uma declaração de classe consiste em:

-   Modificadores de acesso de seus atributos e métodos: Estes podem ser de acesso público, private ou protected.
-   **Nome da classe**: Letra inicial maiúscula.
-   **Corpo**: Corpo cercado por chaves, { }.
-   **Uma palavra-chave** **_class_** é usada para criar uma classe. Uma forma geral simplificada da definição de classe é dada no código 1 a seguir.

![Código 1 – Exemplo de estrutura de uma classe | Fonte: Elaborado pelo autor](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1670877551672-k9bysZFM3m.png "Código 1 – Exemplo de estrutura de uma classe | Fonte: Elaborado pelo autor")

Código 1 – Exemplo de estrutura de uma classe | Fonte: Elaborado pelo autor

**Objetos**

Objetos são os resultados obtidos a partir de uma classe, ou simplesmente **instâncias de uma classe**. Os objetos podem ser de dois tipos: eles podem corresponder a outros objetos do mundo real (objeto carro, casa, bola, entre outros) ou a uma entidade abstrata (objeto emprego, energia, entre outros).

Voltando ao exemplo anterior, se a classe pode ser definida como a planta que um arquiteto projetou, o objeto é o resultado desta planta, ou seja, a casa. Observe que você pode morar em uma casa, pode interagir com os cômodos (entrando e saindo), entre outras ações. A casa possui uma altura, uma cor, um número de quartos, entre outras propriedades.

Esses objetos sempre correspondem a coisas encontradas no mundo real, ou seja, entidades reais. Então, eles também são chamados de entidades de tempo de execução do mundo. Estes são autocontidos, que consistem em métodos e propriedades que tornam os dados úteis. Os objetos podem ser dados físicos e lógicos. Ele contém endereços e ocupa algum espaço na memória. Alguns exemplos de objetos são um cachorro, cadeira, árvore entre outros.

Quando tratamos os animais como objetos, tem estados como cor, nome, raça etc., e comportamentos como comer, abanar o rabo entre outros.

Suponha que temos uma classe chamada MeuLivro, especificamos o nome da classe seguido pelo nome do objeto e usamos a palavra-chave new. Observe o código a seguir.

![](https://paperx-dex-assets.s3.sa-east-1.amazonaws.com/images/1670362973301-Z6YzxKd9oT.png)

Observe que no código 2 temos um atributo na linha 2 que é a variável x. Na linha 4 estamos instanciando ou criando um objeto. A sequência é: nome da classe, nome do objeto, sinal de igual, a palavra-chave new seguida pelo nome da classe. Por fim, na linha 5 estamos falando para o objeto livro mostrar o valor de seu atributo x. Utilizamos o ponto para ser mais específico nesta chamada.

**Construtores e Métodos**

Um construtor é um tipo específico de sub-rotina chamado para criar um objeto. Ele configura o novo objeto para uso e frequentemente aceita argumentos do construtor para configurar as variáveis de membro necessárias. Em POO, um método é um procedimento conectado a uma mensagem e a um objeto. Os dados de estado e comportamento de um objeto compõem sua interface, que descreve como qualquer um de seus numerosos clientes pode usá-lo. Um método é uma atividade de objeto parametrizada pelo cliente. Os métodos são ações que um objeto pode executar ou ações que podem ser aplicadas a este objeto. No exemplo do objeto casa, você pode entrar ou sair dela, pode morar nela, pode alugá-la ou vendê-la.

**Atributos**

Atributos são definidos na declaração de uma classe e representam uma propriedade ou característica de um objeto. Todos os dados do objeto são armazenados em atributos. Ainda considerando o exemplo anterior, uma casa pode ter a cor azul, pode ter quatro quartos, dois banheiros e apenas um andar. Observe que estas são características ou propriedades da casa.

**Encapsulamento**

Encapsulamento é o processo de agrupar funções e dados em uma única entidade. Para acessar esses membros de dados, o escopo da função de membro deve ser definido como “público”, enquanto o escopo dos membros de dados deve ser definido como “privado”. De acordo com essa teoria, um item contém todas as informações importantes; apenas um pequeno subconjunto é disponibilizado para o mundo exterior. Cada objeto tem uma classe privada que contém sua implementação e estado

Em Java, a designação de classe instrui o ambiente Java Virtual Machine (JVM) a construir um objeto. Usando uma única definição de classe, um programador pode construir vários objetos em um programa de software. Isso permite um desenvolvimento paralelo mais rápido, reutilização de classe modular e um maior grau de manutenção.

**Modificadores de acesso**

No código 2 utilizamos a palavra-chave public, este é conhecido como modificador de acesso. Dentre eles, temos:

-   **Private**: Podemos acessar o modificador privado apenas dentro da mesma classe e não de fora da classe.
-   **Default**: Podemos acessar o modificador padrão apenas dentro do mesmo pacote e não fora do pacote. E também, se não especificarmos nenhum modificador de acesso, ele o considerará automaticamente como default.
-   **Protected**: Podemos acessar o modificador protected dentro do mesmo pacote e também de fora do pacote com a ajuda da classe filha. Se não fizermos a classe filha, não podemos acessá-la de fora do pacote. Portanto, a herança é uma obrigação para acessá-la de fora do pacote.
-   **Public**: Podemos acessar o modificador público de qualquer lugar. Podemos acessar modificadores públicos de dentro da classe, bem como de fora da classe e também dentro do pacote e fora do pacote.

Os modificadores de acesso acompanham as classes, os métodos e também os atributos.

Resumidamente, uma classe é a definição de um objeto, ou seja, como será o objeto. O objeto é um fruto gerado a partir da classe. O objeto está para uma classe, assim como um bolo está para uma forma ou uma casa está para uma planta. Os métodos são as ações executadas por este objeto e os atributos são as características ou propriedades deste objeto.

**Tópicos avançados**

A programação orientada a objetos (POO), muitas vezes é tido como um paradigma assustador, afinal, ele quebra o padrão de desenvolvimento imperativo onde uma instrução é executada após a outra em uma sequência de passos.

Em POO, não existe uma sequência fixa de instruções. Muitas vezes um objeto pode ser invocado, criado ou destruído em tempo de execução ou de implementação. Esta característica de POO muitas vezes faz com que estudantes e programadores já experientes tenham receio de mergulhar por este campo.

Pensando nisso, torna-se recomendado que você possa se aprofundar neste poderoso paradigma, para tanto, acesse o documento “Programação orientada a objetos: uma abordagem em Java” para se aprofundar nos conceitos fundamentais do paradigma. Acesse em: <[https://www.dca.fee.unicamp.br/cursos/PooJava/Aulas/poojava.pdf](https://www.dca.fee.unicamp.br/cursos/PooJava/Aulas/poojava.pdf)\>. **(acesso em 08/11/2022)**

Referência Bibliográfica

FORBELLONE, A. L. V.; EBERSPACHER, H. F. **Lógica de programação: a construção de algoritmos e estruturas de dados**. São Paulo: Prentice Hall, 2005.

MANZANO, J. A. N. G. **Algoritmos: lógica para desenvolvimento de programação de computadores**. 28. ed. São Paulo: Érica, 2016.