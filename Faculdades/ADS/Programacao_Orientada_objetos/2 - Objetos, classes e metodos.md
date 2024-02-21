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

Encapsulamento é um dos pilares fundamentais da programação orientada a objetos (POO) e desempenha um papel crucial na maneira como as classes são definidas e como os objetos dessas classes interagem entre si. Encapsulamento é a técnica de ocultar os detalhes internos de implementação de uma classe e expor somente aquilo que é necessário para o mundo exterior, ou seja, outras classes ou objetos. Isso é feito por meio do controle de acesso aos membros de uma classe (campos e métodos) usando modificadores de acesso. Em C#, os principais modificadores de acesso são: `public`, `private`, `protected`, e `internal`.

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
