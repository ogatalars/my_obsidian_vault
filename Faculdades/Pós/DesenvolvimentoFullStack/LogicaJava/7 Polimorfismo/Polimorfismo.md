Polimorfismo é o núcleo da programação orientada a objetos. A maioria das linguagens modernas tem algum conceito de interfaces, funções virtuais e classes. Embora cada linguagem seja diferente em detalhes e possa ter conceitos específicos, a ideia central permanece a mesma. Você define uma classe base com funções virtuais; uma classe derivada pode substituir algumas, todas ou nenhuma dessas funções.

Embora a criação de referência polimórfica em Java seja fácil, o conceito por trás dela tem um impacto mais profundo na programação geral. Nesta aula veremos como o polimorfismo funciona e como podemos trabalhar com sobrecarga e sobrescrita de métodos na linguagem java.

**Objetivos da aula**

-   Compreender o conceito de polimorfismo.
-   Conhecer a implementação de sobrescrita de métodos.
-   Compreender como ocorre a sobrecarga de métodos.
-   Diferenciar a sobrecarga de sobrescrita.

**Resumo**

O polimorfismo é um dos princípios fundamentais do Software Orientado a Objetos. O termo normalmente significa que algo que pode ter várias formas. Na metodologia orientada a objetos, o polimorfismo permite escrever programas que possuem referências de ligação tardias.

Uma referência polimórfica é uma variável que pode se referir a diferentes tipos de objetos em diferentes momentos. Normalmente é compatível com a classe a que se refere. Por exemplo, considere a declaração **_Empregado emp;_**_._

O 'emp' é uma variável de referência que pode se referir a uma instância da classe Empregado. A qualificação da variável de referência para um objeto referido é determinada por sua compatibilidade. Esta pode parecer a única condição confiável, mas isso não é exatamente verdade, especialmente ao implementar o polimorfismo.

A regra é muito rígida, mas o polimorfismo torna-se mais flexível ao incorporar a ideia de ter muitas formas. Isso significa que uma referência polimórfica garante que ela pode se referir a diferentes tipos de objetos em diferentes pontos no tempo, em vez de ficar presa à ideia de uma correspondência exata para compatibilidade.

Portanto, se uma referência puder ser usada para invocar um método em um ponto no tempo, ela poderá ser alterada dinamicamente para apontar para outro objeto e invocar alguns outros métodos na próxima vez. Isso alavanca a flexibilidade ao dar outra dimensão de uso da variável de referência.

Uma variável de referência refere-se a uma instância de uma classe. No caso de hierarquia de herança, um objeto de referência pode apontar para uma instância de qualquer classe na hierarquia, desde que a variável de referência seja declarada como o tipo de classe pai na árvore hierárquica. Isso significa que, em Java, como a classe Object é a classe pai ou superclasse de todas as classes ou, em outras palavras, todas as classes em Java são, de fato, subclasses da classe Object implícita ou explicitamente, uma variável de referência de o tipo Object pode se referir a qualquer instância de classe em Java. Vamos entender melhor com um exemplo da figura 1.

Na figura 1, podemos dizer que a classe cilindro é um círculo, afinal, existe uma relação de herança entre estas classes. Observe que em ambas classes temos um método chamado getArea(), mas qual a diferença entre eles? O objeto do tipo círculo, ao invocar o método getArea(), realizará o cálculo referente a área do círculo. Porém, o objeto do tipo cilindro, ao invocar o método getArea(), realizará o cálculo referente a área do cilindro. Note então que temos o polimorfismo, onde um método pode ter diferentes formas.

**Sobrecarga de método (overloading)**

A Sobrecarga de Métodos é um recurso que permite que uma classe tenha vários métodos com o mesmo nome, mas com número, sequência ou tipo de parâmetros diferentes. Em resumo, vários métodos com o mesmo nome, mas com assinaturas diferentes. Por exemplo, a assinatura do método somar(int a, int b) com dois parâmetros int é diferente da assinatura do método somar(int a, int b, int c) com três parâmetros int.

Este é um dos recursos de programação orientada a objetos mais populares em java, existem vários casos em que precisamos de mais de um método com o mesmo nome. Por exemplo, digamos que estamos escrevendo um programa java para encontrar a soma dos números de entrada, logo, precisamos de diferentes formas do método somar com base nas entradas do usuário, como somar(int, int), somar(float, float), somar(int, float), entre outros.

Para sobrecarregar um método, a lista de parâmetros dos métodos deve diferir em um destes:

-   Número de parâmetros. Por exemplo:

somar(int, int)

somar(int, int, int)  

-   Tipo de dados dos parâmetros. Por exemplo:

somar(int, int)

somar(int, float) 

-   Sequência de tipos de dados de parâmetros. Por exemplo:

somar(int, float)

somar(float, int)

Lista de argumentos e lista de parâmetros são iguais, mas são usadas em contextos diferentes, quando declaramos um método, os parâmetros são chamados de lista de parâmetros, enquanto chamamos o método o argumento que passamos são chamados de lista de argumentos.

**Sobrescrita de método(overriding)**

Declarar um método na subclasse que já está presente na classe pai é conhecido como sobrescrita ou substituição de método. A sobrescrita é feita para que uma classe filha possa dar sua própria implementação a um método que já é fornecido pela classe pai. Neste caso, o método na classe pai é chamado de método de sobrescrita e o método na classe filha é chamado de método de substituição (DEITEL, 2010).

Vamos dar um exemplo simples para entender isso. Temos duas classes: uma subclasse chamada Filho e uma superclasse chamada Pai. A classe Filho estende a classe Pai. Ambas as classes têm um método comum void comer(). A classe Filho está dando sua própria implementação ao método comer() ou, em outras palavras, está substituindo o método comer().

O objetivo da sobrescrita de método é claro aqui. A classe filho quer dar sua própria implementação para que, quando chamar esse método, imprima Filho está comendo em vez de Pai está comendo.

Essa relação de sobrescrita foi observada na figura 1, onde temos um método para calcular a área do círculo e a área do cilindro.

A principal vantagem da sobrescrita de método é que a classe pode fornecer sua própria implementação específica para um método herdado sem mesmo modificar o código da classe pai.

Isso é útil quando uma classe tem várias classes filhas, portanto, se uma classe filha precisar usar o método da classe pai, ela poderá usá-lo e as outras classes que desejam ter uma implementação diferente podem usar o recurso de sobrescrita para fazer alterações sem tocar no código da classe pai.

**Tópicos avançados**

Qual é a diferença entre sobrecarga de método e sobrescrita de método em Java? Esta é uma pergunta muito valiosa, muito importante e repetidamente feita em qualquer entrevista técnica sobre Java. O entrevistador sempre espera duas a três diferenças da sua resposta. Então, vamos começar com uma definição básica.

**Quanto a definição**

Quando uma classe tem _mais de um método com o mesmo nome_, mas _com parâmetros diferentes_, ela é chamada de **sobrecarga** de método em Java (DEITEL, 2010).

Quando o método da superclasse é substituído na subclasse para fornecer uma implementação mais específica, ele é chamado de **sobrescrita** de método em Java (DEITEL, 2010).

**Quanto ao tipo de argumento**

Quando uma classe tem mais de um método com o mesmo nome, mas com parâmetros diferentes, ela é chamada de **sobrecarga** de método em Java (DEITEL, 2010).

Quando o método da superclasse é substituído na subclasse para fornecer uma implementação mais específica, ele é chamado de **sobrescrita** de método em Java (DEITEL, 2010).

**Quanto a assinatura do método**

A assinatura do método **sobrecarregado** deve ser diferente.

A assinatura do método de **sobrescrita** deve ser a mesma.

Aqui foram apresentadas as diferenças básicas, porém, essenciais para qualquer entrevista de emprego ou trabalho no dia a dia como programador.

Referência Bibliográfica

DEITEL, H., DEITEL, P. **Java: Como Programar**, 8a. Edição. Pearson, 2010.

FORBELLONE, A. L. V.; EBERSPACHER, H. F. **Lógica de programação: a construção de algoritmos e estruturas de dados.** São Paulo: Prentice Hall, 2005.

MANZANO, J. A. N. G. **Algoritmos: lógica para desenvolvimento de programação de computadores**. 28. ed. São Paulo: Érica, 2016.