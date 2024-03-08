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