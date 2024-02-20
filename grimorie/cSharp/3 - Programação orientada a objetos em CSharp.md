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

Vamos explorar mais a fundo cada conceito de orientação a objetos em C#, detalhando-os com exemplos para facilitar a compreensão.

### Classes e Objetos Detalhados

**Classes** são projetadas para representar entidades ou conceitos do mundo real, com suas propriedades (atributos) e comportamentos (métodos). Uma classe é como um molde que define a estrutura e os comportamentos dos objetos criados a partir dela.

**Objetos** são instâncias de classes. Cada objeto tem seu próprio conjunto de valores para as propriedades da classe e pode executar os comportamentos definidos na classe.

- **Exemplo de Classe e Objeto**:
  ```csharp
  public class Person
  {
      // Propriedades
      public string Name { get; set; }
      public int Age { get; set; }

      // Construtor
      public Person(string name, int age)
      {
          Name = name;
          Age = age;
      }

      // Método
      public void IntroduceYourself()
      {
          Console.WriteLine($"Hi, I'm {Name} and I'm {Age} years old.");
      }
  }

  // Criando e usando um objeto Person
  Person person1 = new Person("Alice", 30);
  person1.IntroduceYourself();
  ```

### Propriedades, Métodos e Construtores

**Propriedades** permitem acessar e modificar os valores de dados de uma classe. Em C#, as propriedades podem ser automáticas, com `get` e `set` implícitos, ou podem ser implementadas manualmente com lógica adicional.

**Métodos** definem as ações ou comportamentos que os objetos da classe podem realizar. Eles podem ter parâmetros e podem retornar valores.

**Construtores** são métodos especiais chamados no momento da criação de um objeto. Eles geralmente inicializam as propriedades do objeto.

- **Exemplo com Propriedade Manual**:
  ```csharp
  private int _age;
  public int Age
  {
      get { return _age; }
      set
      {
          if (value >= 0) // Simples validação
              _age = value;
      }
  }
  ```

### Encapsulamento, Herança e Polimorfismo

**Encapsulamento** protege os dados dentro de uma classe, permitindo que apenas operações seguras sejam realizadas sobre eles. Isso é feito usando modificadores de acesso (`public`, `private`, `protected`).

**Herança** permite que uma classe herde propriedades e métodos de outra classe. A classe base é a classe da qual as propriedades e métodos são herdados, e a classe derivada é a classe que herda essas propriedades e métodos.

- **Exemplo de Herança**:
  ```csharp
  public class Animal
  {
      public void Eat()
      {
          Console.WriteLine("Eating...");
      }
  }

  public class Dog : Animal // Herança
  {
      public void Bark()
      {
          Console.WriteLine("Barking...");
      }
  }
  ```

**Polimorfismo** permite que objetos de diferentes classes sejam tratados como objetos de uma classe base, mas quando um método é chamado, a versão da classe derivada é executada.

- **Exemplo de Polimorfismo**:
  ```csharp
  public class Animal
  {
      public virtual void MakeSound()
      {
          Console.WriteLine("Some sound");
      }
  }

  public class Cat : Animal
  {
      public override void MakeSound()
      {
          Console.WriteLine("Meow");
      }
  }
  ```

### Interfaces e Classes Abstratas

**Interfaces** definem um contrato que as classes podem implementar. Uma interface pode declarar métodos e propriedades, mas não pode fornecer implementações. Classes que implementam uma interface devem implementar todos os seus métodos.

- **Exemplo de Interface**:
  ```csharp
  public interface IMovable
  {
      void Move();
  }

  public class Car : IMovable
  {
      public void Move()
      {
          Console.WriteLine("Car is moving");
      }
  }
  ```

**Classes Abstratas** são classes que não podem ser instanciadas e são projetadas para serem subclasses. Elas podem conter implementações de alguns métodos e declarações abstratas de outros.

- **Exemplo de Classe Abstrata**:
  ```csharp
  public abstract class Shape
  {
      public abstract void Draw(); // Método abstrato
  }

  public class Circle : Shape
  {
      public override void Draw()
      {
          Console.WriteLine("Drawing a circle");
      }
  }
  ```

Cada um desses conceitos desempenha um papel crucial na construção de aplicações robustas e bem organizadas em C#. A prática e a exploração desses conceitos através de exemplos e projetos reais ajudarão a solidificar seu entendimento e habilidade em programação orientada a objetos com C#.