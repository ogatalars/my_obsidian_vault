Fundamentos da programação orientada a objetos (POO) é um paradigma de programação baseado no conceito de "objetos", que podem conter dados na forma de campos, também conhecidos como atributos; e código, na forma de procedimentos, conhecidos como métodos. A POO é um método de estruturação de programas que visa facilitar o desenvolvimento e a manutenção de sistemas complexos. Aqui estão os conceitos fundamentais:

### 1. Classe
Uma classe é um modelo ou blueprint a partir do qual os objetos são criados. Ela define um tipo de dados, especificando os atributos e os métodos que caracterizam qualquer objeto desse tipo.

### 2. Objeto
Um objeto é uma instância de uma classe. Quando uma classe é definida, nenhum espaço de memória é alocado até que um objeto seja instanciado a partir da classe. Um objeto tem estado, comportamento e identidade; o estado é representado pelos atributos, o comportamento pelos métodos, e a identidade é uma propriedade única de cada objeto.

### 3. Encapsulamento
Encapsulamento é a técnica de esconder os detalhes internos de uma classe e expor somente o necessário. É alcançado usando modificadores de acesso, que ajudam a proteger os dados de serem acessados diretamente do exterior. Isso ajuda na modularidade e na manutenção do código.

### 4. Herança
Herança permite que uma classe adquira as propriedades e métodos de outra classe. A classe que herda é chamada de subclasse ou classe derivada, e a classe da qual se herda é chamada de superclasse ou classe base. A herança promove a reutilização de código e é um meio de conseguir polimorfismo.

### 5. Polimorfismo
Polimorfismo é a capacidade de um método tratar diferentes tipos de dados através de uma única interface. Significa "muitas formas" e permite que objetos de diferentes classes sejam tratados como objetos de uma classe base comum. Isso pode ser alcançado por meio de sobrecarga de métodos, sobrescrita de métodos ou interfaces.

### 6. Abstração
Abstração é o conceito de esconder a complexidade e mostrar apenas as funcionalidades essenciais do objeto. Em outras palavras, é a capacidade de concentrar-se nos aspectos mais importantes de algo, em vez de se preocupar com os detalhes técnicos.

### 7. Associação, Agregação, e Composição
Estes são conceitos que definem relações entre objetos. A associação estabelece uma relação entre duas classes independentes. A agregação é um tipo especial de associação que representa uma relação "tem-um" ou "parte-de", onde a vida dos objetos envolvidos não depende uns dos outros. A composição é uma forma restrita de agregação onde a vida dos objetos está diretamente ligada.

A programação orientada a objetos ajuda a organizar o software de forma que seja mais fácil de entender, modificar, e manter. Ao utilizar esses conceitos fundamentais, os desenvolvedores podem criar programas que são mais flexíveis, escaláveis e fáceis de debugar.


Em C#, uma classe é uma estrutura que pode conter dados e métodos para trabalhar com esses dados. As classes são usadas para modelar objetos do mundo real ou conceitual, fornecendo os meios para encapsular estado (dados) e comportamento (métodos) em uma única unidade lógica. Uma classe em C# é composta basicamente pelos seguintes elementos:

### 1. Campos (Fields)
São variáveis que armazenam os dados do objeto. Os campos representam o estado de um objeto. Eles podem ter diferentes níveis de acesso (como `private`, `public`, `protected`) que controlam sua visibilidade para outras classes.

### 2. Propriedades (Properties)
As propriedades são membros que fornecem um mecanismo flexível para ler, escrever ou calcular o valor de um campo privado. Propriedades podem ter blocos de `get` e `set` para controlar o acesso ao valor.

### 3. Métodos
Métodos são blocos de código que definem o que um objeto pode fazer. Eles podem realizar operações com os campos da classe ou realizar outras funções relacionadas ao comportamento do objeto.

### 4. Construtores
Construtores são métodos especiais chamados no momento da criação de um objeto. Eles têm o mesmo nome da classe e são usados para inicializar o objeto, configurando um estado inicial ou realizando qualquer configuração necessária antes do uso do objeto.

### 5. Destrutores
Destrutores são métodos que são chamados quando um objeto está prestes a ser destruído. Em C#, os destrutores são usados menos frequentemente devido ao gerenciamento automático de memória pelo Garbage Collector.

### Exemplo de Classe em C#:
Aqui está um exemplo simples de uma classe em C# que ilustra esses conceitos:

```csharp
using System;

public class Carro
{
    // Campos
    private string marca;
    private int ano;

    // Propriedades
    public string Marca
    {
        get { return marca; }
        set { marca = value; }
    }

    public int Ano
    {
        get { return ano; }
        set { ano = value; }
    }

    // Construtor
    public Carro(string marca, int ano)
    {
        this.marca = marca;
        this.ano = ano;
    }

    // Método
    public void ExibirInfo()
    {
        Console.WriteLine($"Marca: {marca}, Ano: {ano}");
    }

    // Destrutor
    ~Carro()
    {
        // Limpeza de recursos, se necessário.
        Console.WriteLine("Destruindo o objeto Carro");
    }
}
```

### Como Usar a Classe:
Para usar a classe `Carro`, você pode criar uma instância dela e chamar seus métodos da seguinte forma:

```csharp
class Program
{
    static void Main(string[] args)
    {
        Carro meuCarro = new Carro("Toyota", 2020);
        meuCarro.ExibirInfo();
    }
}
```

Este exemplo mostra uma classe `Carro` com campos, propriedades, um construtor para inicialização, um método para exibir informações do carro, e um destrutor para limpeza quando o objeto é coletado pelo Garbage Collector.