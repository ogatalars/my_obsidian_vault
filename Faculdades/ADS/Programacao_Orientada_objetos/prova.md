Para modificar a classe `Curso` de modo que ela possa armazenar os nomes das disciplinas e atender ao teste fornecido, precisaremos adicionar uma lista ou coleção para manter as disciplinas. No C#, podemos utilizar uma `List<string>` para armazenar os nomes das disciplinas. Além disso, implementaremos o método `addDisciplina` para adicionar disciplinas à lista e sobrescreveremos o método `ToString` para produzir a saída desejada.

Aqui está a classe `Curso` modificada:

```csharp
using System;
using System.Collections.Generic;

public class Curso {
    private string nome;
    private List<string> disciplinas;

    public Curso(string nome) {
        this.nome = nome;
        this.disciplinas = new List<string>();
    }

    public void AddDisciplina(string disciplina) {
        disciplinas.Add(disciplina);
    }

    public string GetNome() {
        return this.nome;
    }

    public override string ToString() {
        return $"Curso: {this.nome}\nDisciplinas: [{string.Join(", ", disciplinas)}]";
    }
}

public class TestaCurso {
    public static void Main(string[] args) {
        Curso cl = new Curso("Ciencia da Computacao");
        cl.AddDisciplina("AlgProgII");
        cl.AddDisciplina("SO");
        cl.AddDisciplina("Grafos");
        Console.WriteLine(cl);
    }
}
```

Explicação do código:

- A classe `Curso` agora possui uma propriedade `disciplinas`, que é uma lista de strings usada para armazenar os nomes das disciplinas.
- O construtor `Curso(string nome)` inicializa o nome do curso e a lista de disciplinas.
- O método `AddDisciplina(string disciplina)` adiciona uma nova disciplina à lista `disciplinas`.
- O método `ToString()` foi sobrescrito para retornar uma string formatada contendo o nome do curso e a lista de disciplinas, atendendo ao formato de saída esperado no teste.
- Na classe `TestaCurso`, criamos uma instância de `Curso`, adicionamos três disciplinas e imprimimos a representação do objeto, que mostrará o nome do curso e as disciplinas adicionadas.

Quando o método `Main` da classe `TestaCurso` é executado, ele produzirá a saída conforme especificado no teste.