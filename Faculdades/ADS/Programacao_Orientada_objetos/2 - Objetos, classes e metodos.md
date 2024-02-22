Introdução -> 
Explorar objetos, classes e métodos é essencial para entender a programação orientada a objetos (POO), especialmente em linguagens como C#. Vamos detalhar cada um desses conceitos com exemplos em C# para ilustrá-los.

### Objetos
Objetos são instâncias de classes que representam entidades com estado e comportamento. O estado de um objeto é mantido em seus campos (também conhecidos como atributos), e o comportamento é definido pelos métodos da classe. Os objetos são criados usando o operador `new` seguido pelo construtor da classe.

**Exemplo de Objeto:**
```csharp
Carro meuCarro = new Carro("Ford", 2021);
```
Neste exemplo, `meuCarro` é um objeto da classe `Carro` com estado (`marca = "Ford"` e `ano = 2021`) e comportamento (como os métodos definidos na classe `Carro`).

### Classes
Classes são moldes ou blueprints para criar objetos. Elas definem os estados possíveis (através de campos) e os comportamentos (através de métodos) que os objetos da classe podem ter. Uma classe em C# é declarada usando a palavra-chave `class` seguida pelo nome da classe e um bloco de código que define seus membros (campos, propriedades, métodos, etc.).

**Exemplo de Classe:**
```csharp
public class Carro
{
    private string marca;
    private int ano;

    public Carro(string marca, int ano) // Construtor
    {
        this.marca = marca;
        this.ano = ano;
    }

    public void ExibirInfo() // Método
    {
        Console.WriteLine($"Marca: {marca}, Ano: {ano}");
    }
}
```
Neste exemplo, a classe `Carro` é definida com um construtor para inicializar novos objetos e um método `ExibirInfo` para exibir as informações do carro.

### Métodos
Métodos são funções definidas dentro de uma classe que descrevem as ações ou comportamentos que os objetos da classe podem realizar. Eles podem modificar o estado interno de um objeto (seus campos) ou realizar qualquer outra operação relacionada ao objeto. Métodos são declarados especificando o tipo de retorno, o nome do método e parâmetros entre parênteses.

**Exemplo de Método:**
```csharp
public void ExibirInfo()
{
    Console.WriteLine($"Marca: {marca}, Ano: {ano}");
}
```
Este método, quando chamado em um objeto da classe `Carro`, exibe a marca e o ano do carro no console.

### Usando Classes e Objetos
Para usar classes e objetos, você geralmente seguirá estes passos:
1. Defina uma classe com os estados e comportamentos desejados.
2. Crie uma instância da classe (um objeto) usando o operador `new` e o construtor da classe.
3. Acesse os métodos do objeto para executar ações ou modificar seu estado.

**Exemplo Completo:**
```csharp
using System;

public class Program
{
    public static void Main(string[] args)
    {
        Carro meuCarro = new Carro("Ford", 2021);
        meuCarro.ExibirInfo();
    }
}
```
Este exemplo cria um objeto `meuCarro` da classe `Carro` e chama o método `ExibirInfo` para exibir as informações do carro.

A programação orientada a objetos em C# permite modelar entidades do mundo real de forma intuitiva, facilitando o desenvolvimento e manutenção de sistemas complexos.

### Encapsulamento

Encapsulamento é um dos pilares fundamentais da programação orientada a objetos (POO) e desempenha um papel crucial na maneira como as classes são definidas e como os objetos dessas classes interagem entre si. 
Encapsulamento é a técnica de ocultar os detalhes internos de implementação de uma classe e expor somente aquilo que é necessário para o mundo exterior, ou seja, outras classes ou objetos. Isso é feito por meio do controle de acesso aos membros de uma classe (campos e métodos) usando modificadores de acesso. Em C#, os principais modificadores de acesso são: `public`, `private`, `protected`, e `internal`.

### Por que Encapsulamento é Importante?
- **Segurança dos Dados**: Encapsulamento ajuda a proteger os dados internos de uma classe contra acesso ou modificação indesejada por partes externas da classe.
- **Simplicidade**: Ao expor apenas o necessário, o encapsulamento torna o uso de classes mais simples e intuitivo para outros desenvolvedores.
- **Flexibilidade e Manutenção**: Encapsulamento permite que os desenvolvedores alterem a implementação interna de uma classe sem afetar os usuários da classe, desde que a interface pública permaneça a mesma. Isso facilita a manutenção e a evolução do código.

### Como Implementar Encapsulamento em C#
Encapsulamento em C# é geralmente alcançado usando a combinação de campos privados e propriedades públicas. Campos privados são usados para armazenar dados, enquanto propriedades públicas expõem esses dados de maneira controlada.

**Exemplo:**

```csharp
public class Pessoa
{
    // Campo privado
    private int idade;

    // Propriedade pública
    public int Idade
    {
        get { return idade; }
        set
        {
            if (value >= 0) // Validação básica para garantir que a idade não seja negativa
            {
                idade = value;
            }
            else
            {
                throw new ArgumentException("A idade não pode ser negativa.");
            }
        }
    }

    // Construtor
    public Pessoa(int idadeInicial)
    {
        Idade = idadeInicial; // Acessa a propriedade, não o campo diretamente
    }
}
```

Neste exemplo, o campo `idade` é privado, o que significa que ele não pode ser acessado diretamente de fora da classe `Pessoa`. Em vez disso, a classe fornece uma propriedade pública `Idade` que permite ler e modificar o valor de `idade`. A lógica dentro do acessador `set` da propriedade `Idade` garante que apenas valores válidos sejam atribuídos a `idade`, protegendo o estado interno do objeto `Pessoa` contra estados inválidos.

### Benefícios do Encapsulamento
- **Controle de Acesso**: O encapsulamento dá ao desenvolvedor controle sobre como os membros de uma classe são acessados e modificados.
- **Validação de Dados**: É possível validar dados antes de aceitá-los, evitando que o objeto entre em um estado inválido.
- **Abstração e Ocultação**: Os detalhes de implementação são escondidos, apresentando uma interface limpa para quem usa a classe.

Em resumo, o encapsulamento não apenas protege os dados dentro de uma classe, mas também define claramente a interface pública dessa classe, tornando os objetos mais seguros e fáceis de usar e manter.


O encapsulamento, como mencionado, é um dos pilares da programação orientada a objetos e serve para controlar o acesso aos membros (campos e métodos) de uma classe. Em C#, o controle de acesso é primordialmente alcançado através de dois modificadores de acesso: `public` e `private`. Esses modificadores determinam como os membros da classe podem ser acessados e modificados, proporcionando uma camada de segurança e ajudando a manter a integridade dos dados de um objeto.

### Public
O modificador de acesso `public` torna membros de uma classe acessíveis de qualquer outra parte do código. Isso significa que qualquer outra classe pode ler ou modificar esses membros (dependendo se são campos, propriedades, ou métodos). Utilizar o modificador `public` é útil quando você quer permitir acesso livre a um determinado membro, o que é comum para métodos que você deseja que sejam chamados de fora da classe ou propriedades que devem ser acessíveis externamente.

**Exemplo de uso do `public`:**
```csharp
public class ContaBancaria
{
    public double Saldo { get; private set; } // Propriedade pública, mas só pode ser setada dentro da classe

    public ContaBancaria(double saldoInicial)
    {
        Saldo = saldoInicial;
    }

    public void Depositar(double valor)
    {
        if (valor > 0)
        {
            Saldo += valor;
        }
    }
}
```
Neste exemplo, `Saldo` é uma propriedade pública, o que significa que qualquer código fora da classe `ContaBancaria` pode acessá-la. No entanto, o `set` é privado, restringindo a modificação do saldo diretamente, forçando o uso do método `Depositar` para alterações.

### Private
O modificador de acesso `private` restringe o acesso ao membro somente à classe em que ele é declarado. Isso é fundamental para ocultar a representação interna dos dados de uma classe do mundo exterior, permitindo que a classe mantenha o controle total sobre como esses dados são manipulados. Membros privados são a base do encapsulamento, permitindo que os desenvolvedores criem uma interface pública clara para suas classes enquanto mantêm os detalhes de implementação escondidos.

**Exemplo de uso do `private`:**
```csharp
public class Pessoa
{
    private int idade; // Campo privado

    public int Idade
    {
        get { return idade; }
        set
        {
            if (value >= 0)
            {
                idade = value;
            }
            else
            {
                throw new ArgumentException("A idade não pode ser negativa.");
            }
        }
    }
}
```
Neste exemplo, o campo `idade` é privado, o que significa que ele só pode ser acessado e modificado por métodos dentro da classe `Pessoa`. Isso protege o campo `idade` de ser modificado diretamente de maneira imprópria por código externo à classe.

### Conclusão
O uso adequado dos modificadores de acesso `public` e `private` é fundamental para a prática do encapsulamento em programação orientada a objetos. Ao escolher cuidadosamente quais membros de uma classe devem ser públicos ou privados, os desenvolvedores podem proteger a integridade dos dados de um objeto e expor uma interface segura e fácil de usar para suas classes. Encapsulamento fortalece a segurança do código, facilita a manutenção, e promove a reusabilidade do software.

A definição de classes e a inicialização de objetos por meio de construtores são conceitos fundamentais na programação orientada a objetos (POO), especialmente em linguagens como C#. Esses conceitos permitem aos desenvolvedores moldar o software de maneira modular, encapsulada e reutilizável. Vamos detalhar esses aspectos, focando na inicialização com construtores.

### Definição de Classes
Uma classe em C# é uma estrutura que combina estado (campos) e ações (métodos) em uma única unidade lógica. Ela serve como um blueprint a partir do qual os objetos são criados. Uma classe define os tipos de dados que ela contém e todos os métodos que operam nesses dados. 

**Sintaxe básica de uma classe em C#:**
```csharp
public class NomeDaClasse
{
    // Campos, propriedades, métodos, eventos...
}
```

### Campos e Propriedades
- **Campos** são variáveis que são declaradas diretamente na classe. Eles armazenam os dados que os objetos da classe vão manipular.
- **Propriedades** oferecem um mecanismo para ler, escrever ou computar os valores dos campos privados e podem incluir lógica adicional.

### Métodos
Métodos definem o comportamento dos objetos da classe. Eles podem modificar o estado interno do objeto ou realizar operações que estão relacionadas à responsabilidade da classe.

### Construtores
Construtores são métodos especiais da classe que são chamados automaticamente quando um objeto dessa classe é criado. Eles geralmente têm o mesmo nome da classe e não possuem tipo de retorno. O objetivo principal de um construtor é inicializar o objeto recém-criado para um estado válido.

**Características dos construtores:**
- **Inicialização de Campos**: Os construtores permitem que você estabeleça valores iniciais para os campos do objeto.
- **Execução de Código de Setup**: Além de inicializar campos, construtores também podem executar qualquer código de setup necessário para o objeto antes de ser usado.
- **Sobrecarga de Construtores**: C# suporta a sobrecarga de construtores, permitindo que uma classe tenha mais de um construtor, cada um com diferentes parâmetros.

**Exemplo de Classe com Construtor:**
```csharp
public class Carro
{
    public string Marca { get; set; }
    public int Ano { get; set; }

    // Construtor
    public Carro(string marca, int ano)
    {
        Marca = marca;
        Ano = ano;
    }

    // Método
    public void ExibirInfo()
    {
        Console.WriteLine($"Marca: {Marca}, Ano: {Ano}");
    }
}
```

### Uso de Construtores
Para criar um novo objeto `Carro`, você utilizaria o construtor da seguinte forma:
```csharp
Carro meuCarro = new Carro("Toyota", 2020);
meuCarro.ExibirInfo();
```

Neste exemplo, o construtor `Carro(string marca, int ano)` é chamado com os valores "Toyota" e 2020 para inicializar o novo objeto `meuCarro`.

Ainda sobre métodos:

