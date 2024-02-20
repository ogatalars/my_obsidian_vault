### 3. Orientação a Objetos em C#

A Orientação a Objetos é um paradigma central em C#, fornecendo uma maneira de estruturar programas para que propriedades e comportamentos sejam agrupados em objetos individuais. Neste tópico, introduziremos os conceitos fundamentais da programação orientada a objetos (POO) em C#, incluindo classes e objetos, propriedades, métodos, encapsulamento, herança e polimorfismo, além de interfaces e classes abstratas.

#### Classes e Objetos

- **Classes**: São os blocos de construção da POO em C#. Uma classe é um modelo ou blueprint a partir do qual objetos são criados. Ela define um tipo de dados, encapsulando dados (atributos) e métodos (comportamentos).
- **Objetos**: São instâncias de classes. Um objeto é criado a partir de uma classe e representa uma entidade concreta dentro do programa.

#### Propriedades, Métodos e Construtores

- **Propriedades**: São características de um objeto, frequentemente acessadas através de métodos `get` e `set`. Em C#, propriedades podem ser implementadas de forma automática ou manual.
- **Métodos**: São funções definidas dentro de uma classe que descrevem as ações ou comportamentos de um objeto.
- **Construtores**: São métodos especiais de uma classe que são chamados quando um objeto dessa classe é criado. Eles podem ser usados para inicializar propriedades ou executar qualquer inicialização necessária antes de usar o objeto.

#### Encapsulamento, Herança e Polimorfismo

- **Encapsulamento**: Refere-se à prática de esconder os detalhes internos de implementação de uma classe e expor apenas os necessários para o uso externo. Isso é alcançado usando modificadores de acesso como `public`, `private`, `protected`.
- **Herança**: Permite que uma classe herde propriedades e métodos de outra classe. Em C#, a herança é especificada pelo uso da palavra-chave `:`.
- **Polimorfismo**: É a capacidade de chamar o mesmo método em diferentes objetos e ter cada um deles respondendo de maneira diferente. Em C#, o polimorfismo pode ser implementado usando `override` e `virtual`, ou através de interfaces.

#### Interfaces e Classes Abstratas

- **Interfaces**: Definem um contrato que as classes podem implementar. Elas consistem apenas em declarações de métodos e propriedades sem implementações. Em C#, uma classe pode implementar várias interfaces.
- **Classes Abstratas**: São classes que não podem ser instanciadas por si mesmas e são destinadas a serem subclasses. Uma classe abstrata pode conter implementações concretas de alguns métodos e/ou declarações de métodos abstratos que devem ser implementados pelas subclasses.

### Exemplo Prático: Definindo uma Classe

Vamos definir uma classe simples `Car` para ilustrar como classes e objetos funcionam em C#:

```csharp
public class Car
{
    // Propriedades
    public string Make { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }

    // Construtor
    public Car(string make, string model, int year)
    {
        Make = make;
        Model = model;
        Year = year;
    }

    // Método
    public void DisplayInfo()
    {
        Console.WriteLine($"Make: {Make}, Model: {Model}, Year: {Year}");
    }
}
```

E para criar e usar um objeto `Car`:

```csharp
Car myCar = new Car("Toyota", "Corolla", 2020);
myCar.DisplayInfo();
```

Este exemplo ilustra a definição de uma classe, a criação de um objeto a partir dessa classe e a chamada de um método desse objeto.

A programação orientada a objetos em C# é um vasto tópico com muitos conceitos interligados. Dominar esses fundamentos abrirá portas para padrões de design avançados, técnicas de programação e a capacidade de construir aplicações complexas e bem estruturadas.

Se houver alguma área específica dentro da orientação a objetos em C# que você gostaria de explorar mais detalhadamente, por favor, me avise!