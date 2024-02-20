### 2. Fundamentos de C#

Aprofundar-se nos fundamentos de C# é crucial para construir uma base sólida na linguagem. Aqui, exploraremos os conceitos básicos, como tipos de dados, variáveis, operadores, expressões, e estruturas de controle. Cada um desses tópicos é essencial para entender como construir programas eficientes e eficazes em C#.

#### Tipos de Dados e Variáveis

C# é uma linguagem fortemente tipada, o que significa que você deve declarar o tipo de uma variável antes de usá-la. Aqui estão os tipos de dados mais comuns:

- **Tipos Simples**: Incluem `int` (inteiros), `double` (números de ponto flutuante), `char` (caracteres individuais), `bool` (valores booleanos), e `string` (sequências de caracteres).
- **Declaração de Variáveis**: Para declarar uma variável, especifique o tipo seguido pelo nome da variável. Por exemplo, `int myNumber = 10;`.

#### Operadores e Expressões

Operadores permitem realizar operações matemáticas, lógicas e de comparação. Expressões são combinações de valores, variáveis e operadores que podem ser avaliados para produzir um resultado.

- **Matemáticos**: `+` (adição), `-` (subtração), `*` (multiplicação), `/` (divisão), `%` (resto).
- **Lógicos**: `&&` (e), `||` (ou), `!` (não).
- **Comparação**: `==` (igual a), `!=` (diferente de), `<` (menor que), `>` (maior que), `<=` (menor ou igual a), `>=` (maior ou igual a).

#### Estruturas de Controle

As estruturas de controle direcionam o fluxo de execução do programa. C# oferece várias estruturas para tomada de decisão e repetição.

- **Decisão**: `if`, `else if`, `else`, e `switch` permitem executar diferentes blocos de código com base em condições.
  ```csharp
  if (condition)
  {
      // código a ser executado se a condição for verdadeira
  }
  else
  {
      // código a ser executado se a condição for falsa
  }
  ```
- **Repetição**: `for`, `foreach`, `while`, e `do-while` são usados para executar um bloco de código repetidamente.
  ```csharp
  for(int i = 0; i < 10; i++)
  {
      Console.WriteLine(i);
  }
  ```

#### Trabalhando com Strings e Datas

- **Strings**: São usadas para armazenar texto. C# fornece muitos métodos para manipulação de strings, como `Substring()`, `IndexOf()`, `Replace()`, e mais.
  ```csharp
  string greeting = "Hello, World!";
  Console.WriteLine(greeting.ToUpper()); // Converte para maiúsculas
  ```
- **Datas**: O tipo `DateTime` é usado para trabalhar com datas e horas. Você pode realizar operações como adicionar dias ou comparar datas.
  ```csharp
  DateTime today = DateTime.Now;
  Console.WriteLine(today.AddDays(1)); // Adiciona 1 dia à data atual
  ```

### Exercício Prático

Para solidificar seu entendimento desses fundamentos, tente criar um pequeno programa que utilize variáveis, operadores, estruturas de controle, e manipulação de strings e datas. Por exemplo, um programa que calcule a idade exata de uma pessoa a partir de sua data de nascimento ou um conversor de unidades simples.

Este aprofundamento nos fundamentos de C# é apenas o começo. A prática constante desses conceitos através de exercícios e projetos pequenos ajudará a consolidar seu conhecimento e prepará-lo para conceitos mais avançados.

Caso tenha dúvidas específicas sobre algum desses tópicos ou queira ver exemplos de código adicionais, sinta-se à vontade para perguntar.


Vamos nos aprofundar ainda mais nos fundamentos de C#, focando em detalhes e exemplos práticos para cada conceito chave. Isso irá ajudá-lo a entender melhor como aplicar esses conceitos em situações reais de programação.

#### Tipos de Dados e Variáveis Detalhados

C# suporta vários tipos de dados, que podem ser classificados em duas categorias principais: tipos de valor e tipos de referência.

- **Tipos de Valor**: Incluem tipos numéricos, `struct`, e `enum`. Eles armazenam diretamente os dados.
  - **Numéricos**: `int` (32 bits), `long` (64 bits), `float` (32 bits, ponto flutuante), `double` (64 bits, ponto flutuante), `decimal` (128 bits, ponto flutuante, precisão alta).
  - **Exemplo**:
    ```csharp
    int age = 30;
    double salary = 45789.58;
    ```
- **Tipos de Referência**: Incluem `string`, arrays, classes, e interfaces. Eles armazenam referências para os dados reais.
  - **Strings**: Sequências de caracteres Unicode imutáveis.
  - **Exemplo**:
    ```csharp
    string name = "Alice";
    ```

#### Operadores e Expressões em Profundidade

- **Operadores de Atribuição Composta**: `+=`, `-=`, `*=`, `/=`, permitem modificar e atribuir um valor a uma variável em uma única operação.
  - **Exemplo**:
    ```csharp
    int x = 10;
    x += 5; // Equivalente a x = x + 5
    ```
- **Operadores Unários**: `++` (incremento), `--` (decremento), utilizados para aumentar ou diminuir um valor de variável em uma unidade.
  - **Exemplo**:
    ```csharp
    int counter = 0;
    counter++;
    ```

#### Estruturas de Controle Expandidas

- **Switch Case com When**: Além do `switch` tradicional, C# suporta o uso de `when` para condições mais específicas dentro de um case.
  - **Exemplo**:
    ```csharp
    int number = 5;
    switch (number)
    {
        case int n when n > 0:
            Console.WriteLine("Positivo");
            break;
        case int n when n < 0:
            Console.WriteLine("Negativo");
            break;
        default:
            Console.WriteLine("Zero");
            break;
    }
    ```
- **Loop `foreach` para Iterar Coleções**: Ideal para percorrer elementos de uma coleção ou array sem a necessidade de um índice.
  - **Exemplo**:
    ```csharp
    string[] fruits = { "Apple", "Banana", "Cherry" };
    foreach (string fruit in fruits)
    {
        Console.WriteLine(fruit);
    }
    ```

#### Trabalhando com Strings e Datas Avançado

- **Interpolação de Strings**: Permite inserir expressões dentro de strings de uma maneira mais legível.
  - **Exemplo**:
    ```csharp
    string name = "Alice";
    int age = 30;
    Console.WriteLine($"Name: {name}, Age: {age}");
    ```
- **Manipulação de Datas**: `DateTime` oferece métodos para adicionar ou subtrair tempo, bem como comparar datas.
  - **Exemplo**:
    ```csharp
    DateTime startDate = new DateTime(2023, 1, 1);
    DateTime endDate = startDate.AddMonths(6);
    Console.WriteLine($"End Date: {endDate.ToShortDateString()}");
    ```

### Exercício Prático Detalhado

Vamos criar um programa que calcule a diferença entre duas datas em dias e exiba uma mensagem personalizada com essa informação. Além disso, ele verificará se o ano da segunda data é bissexto.

```csharp
using System;

class Program
{
    static void Main()
    {
        DateTime startDate = new DateTime(2023, 1, 1);
        DateTime endDate = new DateTime(2024, 1, 1);
        TimeSpan dateDifference = endDate - startDate;

        Console.WriteLine($"Diferença em dias: {dateDifference.Days}");

        bool isLeapYear = DateTime.IsLeapYear(endDate.Year);
        if (isLeapYear)
        {
            Console.WriteLine($"{endDate.Year} é um ano bissexto.");
        }
        else
        {
            Console.WriteLine($"{endDate.Year} não é um ano bissexto.");
        }
    }
}
```

Este exemplo ilustra o uso de tipos de dados, operadores, estruturas de controle e manipulação de datas. Experimente modificar o código para praticar diferentes aspectos dos fundamentos de C#.

Se tiver dúvidas ou quiser explorar mais algum aspecto específico, estou à disposição para ajudar.