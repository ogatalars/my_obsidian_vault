O Java Collections Framework é uma das partes principais da linguagem de programação Java. As coleções são usadas em quase todas as linguagens de programação. A maioria das linguagens de programação suporta vários tipos de coleções como List, Set, Queue, Stack, entre outras.

Java Collections então são as soluções completas para todos os trabalhos de manipulação de dados, como armazenamento de dados, pesquisa, classificação, inserção, exclusão e atualização de dados. Nesta aula você compreenderá como Java Collection trabalha e quais as classes e interfaces fornecidas pelo Framework.

**Objetivos da aula**

-   Compreender o conceito de Java Collection.
-   Conhecer as principais classes do framework.
-   Compreender como utilizar arrays dinâmicos para armazenar dados.
-   Diferenciar os diferentes tipos de estruturas.

**Resumo**

As coleções são como repositórios ou contêineres que agrupam vários itens em uma única unidade. Por exemplo, um pote de chocolates, uma lista de nomes, entre outros tipos de coleções.

Coleções são usadas em todas as linguagens de programação e quando o Java chegou, veio também com poucas classes de coleção – Vector, Stack, Hashtable, Array.

O Java 1.2 forneceu o Collections Framework que é a arquitetura para representar e manipular Collections em java de maneira padrão. Este framework consiste em interfaces, classes de implementação e algoritmos.

As interfaces do Java Collections Framework fornecem o tipo de dados abstrato para representar a coleção.

A interface raiz do Collections Framework é java.util.Collection. Ela está no topo da hierarquia da estrutura Collections e contém alguns métodos importantes como size(), iterator(), add(), remove(), clear() que toda classe Collection deve implementar.

Algumas outras interfaces importantes são java.util.List, java.util.Set, java.util.Queue e java.util.Map. O Map é a única interface que não herda da interface Collection, mas faz parte do framework Collections. Todas as interfaces do framework de coleções estão presentes no pacote java.util.

A estrutura Java Collections fornece classes de implementação para interfaces de coleção principal. Podemos usá-los para criar diferentes tipos de coleções no programa Java.

Algumas classes de coleção importantes são ArrayList, LinkedList, HashMap, TreeMap, HashSet e TreeSet. Essas classes resolvem a maioria de nossas necessidades de programação, mas se precisarmos de alguma classe de coleção especial, podemos estendê-las para criar nossa classe de coleção personalizada.

O Java 1.5 surgiu com classes de coleção seguras para threads que nos permitiram modificar coleções enquanto iterávamos sobre elas. Alguns deles são CopyOnWriteArrayList, ConcurrentHashMap, CopyOnWriteArraySet. Essas classes estão no pacote java.util.concurrent.

Todas as classes de coleção estão presentes no pacote java.util e java.util.concurrent.

Por fim, os algoritmos são métodos úteis para fornecer algumas funcionalidades comuns, como pesquisa e classificação.

Agora que você compreendeu um pouco desta estrutura do framework Collection, vamos estudar algumas classes importantes.

**Interface de lista**

List é uma coleção ordenada e pode conter elementos duplicados. Você pode acessar qualquer elemento de seu índice. List é mais como array com tamanho dinâmico e é um dos tipos de coleção mais usados. LinkedList e ArrayList são classes de implementação da interface List.

A interface de List fornece métodos úteis para adicionar um elemento em um índice específico, remover/substituir o elemento com base no índice e obter uma sublista usando o índice. O código 1 a seguir apresenta um exemplo de manipulação de lista.

<table><tbody><tr><td><p><span><span><span>1</span></span></span></p></td><td><p><span><span><span>List minhaLista = new ArrayList&lt;&gt;();</span></span></span></p></td></tr><tr><td><p><span><span><span>2</span></span></span></p></td><td></td></tr><tr><td><p><span><span><span>3</span></span></span></p></td><td><p><span><span><span>minhaLista.add(0, “0”);</span></span></span></p></td></tr><tr><td><p><span><span><span>4</span></span></span></p></td><td></td></tr><tr><td><p><span><span><span>5</span></span></span></p></td><td><p><span><span><span>minhaLista.add(1, “1”);</span></span></span></p></td></tr><tr><td><p><span><span><span>6</span></span></span></p></td><td></td></tr><tr><td><p><span><span><span>7</span></span></span></p></td><td><p><span><span><span>minhaLista.set(1, “2”);</span></span></span></p></td></tr><tr><td><p><span><span><span>8</span></span></span></p></td><td></td></tr><tr><td><p><span><span><span>9</span></span></span></p></td><td><p><span><span><span>minhaLista.remove(“1”);</span></span></span></p></td></tr></tbody></table>

Código 1 – Exemplo de lista Fonte: Elaborado pelo autor

Neste código 1, declaramos a lista na linha 1. Em seguida, na linha 3 estamos adicionando um elemento ao final da lista. O elemento a ser inserido é o zero. Na linha 5 estamos adicionando o número 1 na posição 1. Observe que o primeiro parâmetro representa o índice onde será inserido o valor. O segundo parâmetro é o valor a ser inserido. Na linha 7 estamos substituindo o valor do índice 1 e inserindo o número 2. Na linha 9 estamos removendo o valor “1”.

**Interface de fila**

Fila ou Queue é uma collection responsável por armazenar vários tipos de elementos que de executar o processamento. Além dos métodos de operações básicas, uma Fila fornece operações adicionais como inserção, extração e inspeção.

As filas possuem a característica principal de ordenar os elementos que estão nela de maneira conhecida como FIFO (first-in-first-out, ou simplesmente, o primeiro que entra é o primeiro a sair). Porém, nem todas as filas realizam este tipo de operação, cabe uma exceção que são as filas de prioridades, as quais ordenam os elementos de acordo com um comparador fornecido ou a ordenação natural dos elementos.

Qualquer que seja a ordenação usada, o início de uma fila é o elemento que será removido por uma chamada do método de remoção. Logo, se um elemento de uma fila é removido do início, todos os novos elementos de uma fila FIFO são inseridos no final da fila.

**Interface de Mapa (Map)**

Java Map é um objeto responsável por mapear chaves para valores. Neste caso, um mapa não pode conter chaves duplicadas, o que geraria uma perda de consistência nos dados armazenados, sendo assim, cada chave pode ser mapeada para no máximo um valor (DEITEL, 2010).

A linguagem Java contém três implementações de mapas de uso geral: HashMap, TreeMap e LinkedHashMap.

As operações básicas de Map são put, get, containsKey, containsValue, size e isEmpty (FORBELLONE, 2005).

O framework Java Collections vem com muitas classes de implementação para as interfaces. As implementações mais comuns são ArrayList, HashMap e HashSet. Java 1.5 inclui implementações simultâneas; por exemplo, ConcurrentHashMap e CopyOnWriteArrayList. Normalmente, as classes Collection não são seguras para threads e seu iterador é rápido contra falhas.

**Classe HashSet**

Java HashSet é a implementação básica da interface Set que é apoiada por um HashMap. Ele não garante a ordem de iteração do conjunto e permite o elemento nulo.

Para operações básicas como add, remove, contains e size, o desempenho de tempo oferecido por essa classe é do tipo constante.

**Classe TreeSet**

A ordenação dos elementos pode ocorrer de dois modos: usando sua ordenação natural ou utilizando um comparator, o qual é fornecido no momento da criação do conjunto de dados, dependendo exclusivamente de qual construtor que foi utilizado.

O tempo para operações básicas de add, remove, contains e size é de um custo log(n), ou seja, um comportamento um pouco pior se comparado ao hashset.

Por fim, a interface Set é definida em termos da operação equals, mas uma instância TreeSet executa todas as comparações de elementos usando seu método compareTo (ou compare), portanto, dois elementos que são considerados iguais por este método são, do ponto de vista do conjunto, iguais (FORBELLONE, 2005) (DEITEL, 2010).

**Classe ArrayList**

A classe Arraylist implementa a interface List e é baseada em uma estrutura de dados Array. É amplamente utilizado devido à funcionalidade e flexibilidade que oferece. ArrayList em Java, é uma implementação de matriz redimensionável da interface de lista (List). Ele implementa todas as operações de lista opcionais e permite todos os elementos, incluindo null. A maioria dos desenvolvedores escolhe Arraylist em vez de Array, pois é uma alternativa muito boa de arrays java tradicionais (DEITEL, 2010).

A principal diferença entre array e arraylist é que arraylist pode crescer e diminuir dinamicamente enquanto um array não pode.

Um array tem um comprimento fixo, portanto, se estiver cheia, você não poderá adicionar mais elementos a ela. Da mesma forma, se o número de elementos for removido de ArrayList, o consumo de memória permanecerá o mesmo, pois não diminuirá (DEITEL, 2010).

Por outro lado, ArrayList pode crescer e diminuir dinamicamente após a adição e remoção de elementos. A classe ArrayList tem vários métodos úteis que podem facilitar nossa tarefa.

**Classe PriorityQueue**

Fila ou Queue processa seus elementos na ordem FIFO, mas às vezes queremos que os elementos sejam processados com base em sua prioridade. Podemos usar PriorityQueue neste caso e precisamos fornecer uma implementação do Comparator enquanto instanciamos o PriorityQueue. PriorityQueue não permite valores nulos e é ilimitado.

Como você pode observar, Collection em Java é um framework que armazena e manipula um grupo de objetos. Trata-se de uma hierarquia de interfaces e classes que facilita o gerenciamento de um grupo de objetos. O framework Java Collection fornece muitas interfaces (List, Queue, Deque, Set) e classes (ArrayList, Vector, LinkedList, PriorityQueue, HashSet, LinkedHashSet, TreeSet). ArrayList é bom para pesquisar um elemento específico usando o índice de matriz. ArrayLists são dinâmicos, o que é vantajoso em relação aos arrays.

**Tópicos avançados**

Java Frameworks podem ser definidos como os corpos ou esqueletos de código pré-escrito aos quais você tem permissão para adicionar seu próprio código para resolver um problema específico de domínio. Você pode usar um framework fazendo chamadas para seus métodos, herança ou fornecendo callbacks, listeners, entre outros.

Devido aos frameworks, você não precisa fazer muita codificação para seu aplicativo. Pode ser bom ou ruim dependendo da sua situação. Os frameworks em Java têm a mesma sintaxe e podem trabalhar com conceitos, termos e paradigmas semelhantes. Com a ajuda do framework, podemos focar na lógica de negócios do nosso aplicativo, não na escrita de funcionalidades básicas como uma conexão de banco de dados ou tratamento de exceções.

Referência Bibliográfica

DEITEL, H., DEITEL, P. **Java: Como Programar**, 8a. Edição. Pearson, 2010.

FORBELLONE, A. L. V.; EBERSPACHER, H. F. **Lógica de programação: a construção de algoritmos e estruturas de dados.** São Paulo: Prentice Hall, 2005.

MANZANO, J. A. N. G. **Algoritmos: lógica para desenvolvimento de programação de computadores.** 28. ed. São Paulo: Érica, 2016.