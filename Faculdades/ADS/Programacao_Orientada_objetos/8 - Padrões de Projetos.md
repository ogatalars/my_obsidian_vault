Os padrões de projeto (design patterns) são soluções típicas e reutilizáveis para problemas comuns em design de software. Eles são como templates que podem ser aplicados para resolver problemas de design em diferentes situações. Esses padrões ajudam a tornar o código mais flexível, reutilizável e manutenível. São divididos em três categorias principais, cada uma abordando diferentes aspectos do design de software:

1. **Padrões Criacionais:** Esses padrões focam em mecanismos de criação de objetos, procurando tornar os sistemas independentes de como os objetos são criados, compostos e representados. Exemplos incluem:
   - **Singleton:** Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a essa instância.
   - **Factory Method:** Define uma interface para criar um objeto, mas deixa que subclasses decidam qual classe instanciar.
   - **Abstract Factory:** Oferece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.
   - **Builder:** Permite a construção de um objeto complexo passo a passo e permite que o mesmo processo de construção crie representações diferentes.
   - **Prototype:** Permite copiar objetos existentes sem fazer o código depender de suas classes.

2. **Padrões Estruturais:** Esses padrões lidam com a composição de classes ou objetos. Eles ajudam a garantir que se as estruturas mudam, a funcionalidade não é afetada. Exemplos incluem:
   - **Adapter (ou Wrapper):** Permite que a interface de uma classe seja usada como outra interface.
   - **Decorator:** Permite adicionar novas funcionalidades a um objeto dinamicamente, sem alterar a estrutura da classe.
   - **Facade:** Fornece uma interface unificada para um conjunto de interfaces em um subsistema, definindo uma interface de nível mais alto que torna o subsistema mais fácil de ser usado.
   - **Composite:** Permite que clientes tratem objetos individuais e composições de objetos uniformemente.
   - **Proxy:** Fornece um substituto ou marcador de localização para outro objeto para controlar o acesso a ele.

3. **Padrões Comportamentais:** Esses padrões estão preocupados com algoritmos e a atribuição de responsabilidades entre objetos. Eles não descrevem apenas padrões de objetos ou de classes, mas também os padrões de comunicação entre eles. Exemplos incluem:
   - **Observer:** Define uma dependência um-para-muitos entre objetos de modo que, quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.
   - **Strategy:** Permite que o algoritmo de um objeto seja selecionado em tempo de execução.
   - **Command:** Transforma um pedido em um objeto independente que contém toda a informação sobre o pedido.
   - **State:** Permite que um objeto altere seu comportamento quando o seu estado interno muda.
   - **Template Method:** Define o esqueleto de um algoritmo em uma operação, adiando alguns passos para subclasses.

Entender e aplicar padrões de projeto pode melhorar significativamente a qualidade do software, tornando-o mais modular, reutilizável e fácil de manter e estender.


**Gangue dos 4**
A "Gangue dos Quatro" (GoF) se refere aos autores do livro "Design Patterns: Elements of Reusable Object-Oriented Software", uma obra que se tornou referência no estudo de padrões de design em programação orientada a objetos. Os autores, Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides, catalogaram 23 padrões de design, que são frequentemente citados e utilizados na engenharia de software. Esses padrões estão divididos em três categorias: criacionais, estruturais e comportamentais.

### Padrões Criacionais

1. **Abstract Factory**: Fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.
2. **Builder**: Separa a construção de um objeto complexo da sua representação, permitindo o mesmo processo de construção para criar diferentes representações.
3. **Factory Method**: Define uma interface para criar um objeto, mas permite que as classes derivadas alterem o tipo de objetos que serão criados.
4. **Prototype**: Especifica os tipos de objetos a serem criados usando uma instância-protótipo e cria novos objetos pela cópia desse protótipo.
5. **Singleton**: Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a ela.

### Padrões Estruturais

6. **Adapter (Wrapper)**: Permite que interfaces incompatíveis colaborem. Ele envolve uma classe existente com uma nova interface.
7. **Bridge**: Desacopla uma abstração da sua implementação, permitindo que as duas variem independentemente.
8. **Composite**: Permite que clientes tratem de maneira uniforme objetos individuais e composições de objetos.
9. **Decorator**: Adiciona responsabilidades adicionais a um objeto dinamicamente.
10. **Facade**: Fornece uma interface unificada para um conjunto de interfaces em um subsistema. Define uma interface de nível mais alto que torna o subsistema mais fácil de ser usado.
11. **Flyweight**: Usa compartilhamento para suportar grandes quantidades de objetos de granulação fina de forma eficiente.
12. **Proxy**: Fornece um substituto ou marcador de posição para outro objeto para controlar o acesso a ele.

### Padrões Comportamentais

13. **Chain of Responsibility**: Passa uma solicitação ao longo de uma cadeia de potenciais manipuladores até que um deles trate a solicitação.
14. **Command**: Transforma uma solicitação em um objeto autônomo, contendo toda a informação sobre a solicitação.
15. **Interpreter**: Define uma representação gramatical para uma linguagem e um interpretador que usa a representação para interpretar sentenças na linguagem.
16. **Iterator**: Fornece uma maneira de acessar sequencialmente os elementos de um objeto agregado sem expor sua representação subjacente.
17. **Mediator**: Define um objeto que encapsula como um conjunto de objetos interage. O Mediator promove o acoplamento fraco ao evitar que os objetos se refiram explicitamente uns aos outros.
18. **Memento**: Sem violar o encapsulamento, captura e externaliza um estado interno de um objeto para que o objeto possa ser restaurado para esse estado mais tarde.
19. **Observer**: Define uma dependência de um-para-muitos entre objetos, de modo que, quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.
20. **State**: Permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecerá ter mudado sua classe.
21. **Strategy**: Define uma família de algoritmos, encapsula cada um deles e os torna intercambiáveis. A estratégia permite que o algoritmo varie independentemente dos clientes que o utilizam.
22. **Template Method**: Define o esqueleto de um algoritmo em uma operação, adiando alguns passos para subclasses.
23. **Visitor**: Permite definir uma nova operação sem mudar as classes dos elementos sobre os quais opera.

Esses padrões são fundamentais no desenvolvimento de software, especialmente quando se busca criar designs robustos, reutilizáveis e manuteníveis. Eles não são soluções prontas para problemas, mas sim diretrizes que ajudam a estruturar soluções adaptáveis a diferentes contextos.****