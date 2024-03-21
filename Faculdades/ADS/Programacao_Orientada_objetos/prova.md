
Considere o programa abaixo escrito na linguagem C#

public class veiculo{ }

public class carro : veiculo{ }

public class aviao : veiculo{ }

Qual a afirmativa CORRETA ?
	

As classes carro e aviao são superclasses da classe veiculo.

a-A classe veiculo é subclasse da classe aviao.
b-As classes veículo e carro são subclasses da classe maquinas.
**c-A classe veiculo é superclasse das classes carro e aviao. @**
d-A classe aviao é subclasse da classe carro.

2
Na linguagem C#, o polimorfismo refere-se à ligação tardia de uma chamada a uma ou várias implementações diferentes de um método em uma hierarquia de herança. Neste contexto, considere as seguintes classes descritas na Linguagem C#.

a saída desse programa será:
	
a-9
b-5
c-0
d-3
**e-6 @**

3
Assinale a alternativa CORRETA acerca dos conceitos de classes em linguagem C#:
	

a-A forma básica de herança em C# é a extensão simples entre uma superclasse e sua classe derivada. Para tanto, utiliza-se na definição da classe derivada a palavra extends seguida pelo nome da superclasse.	
b-Métodos abstratos de classes abstratas precisam do modificador abstract.
**c-Uma classe abstrata pode ser instanciada, ou seja, existem objetos que podem ser construídos diretamente de sua definição. @**
d-Uma classe pode implementar somente uma interface.
e-Uma interface é uma classe abstrata para a qual todos os métodos são privados e todos os atributos são publicos.

4
Qual das seguintes afirmações descreve corretamente a relação entre classe e objeto na programação orientada a objetos?
	
a-Um objeto é uma definição abstrata que inclui métodos e propriedades, enquanto uma classe é a implementação concreta dessa definição.
b-Uma classe é uma instância de um objeto, servindo como um molde concreto a partir do qual os objetos são criados.
c-Objetos são templates que definem estados e comportamentos, e classes são instâncias desses templates usadas para criar múltiplos objetos com o mesmo estado.
d-Classes e objetos são termos intercambiáveis na programação orientada a objetos e, portanto, têm o mesmo significado e uso.
e-**Uma classe é uma blueprint ou template que define as características e comportamentos (métodos) que os objetos criados a partir dela terão.** @

5
Qual é o modificador de acesso, utilizado na linguagem C#, para definir que manteremos somente uma cópia de determinados atributos na memória, independentemente da quantidade de objetos que forem instanciados?

Ou seja, o programa deve conter apenas uma cópia de cada variável definida com esse modificador em memória, mesmo se tivermos dez objetos instanciados.

Analise as alternativas e marque a que apresente esse modificador de acesso:	

a-public
b-protected
c-default
d-private
**e-static @**

6
Assinale a alternativa inCORRETA acerca dos conceitos envolvidos na sobrecarga de métodos na linguagem C#: 
	

a-As chamadas de método podem ser distinguidas tendo o mesmo nome e tipos de retorno diferentes.
b-Os métodos com o mesmo nome não podem ser declarados na mesma classe.
c-As assinaturas dos métodos quadrado() são exemplos de implementações de métodos estáticos.
**d-A sobrecarga de métodos acontece na herança, quando a subclasse sobrepõe o método original. @**
e-Não podem existir métodos implementados com o mesmo nome.

7.1
Considere a classe abaixo (na linguagem C#), que representa parte da definição de um curso de uma universidade:

public class Curso
{
      private string nome;
      public Curso(string nome)
      {
          this.nome = nome;
       }

       public string GetNome()
       {
          return this.nome;
       }
}
Modifique a classe Curso para que ela consiga armazenar os nomes das disciplinas que compõem o curso, lembre-se que a quantidade de disciplina de um curso pode variar de um curso para outro curso.

public class TestaCurso
{
    public static void Main(string[ ] args)
    {
         Curso c1 = new Curso("Ciência da Computação);
         c1.AddDisciplina("AlgProgII");
         c1.AddDisciplina("SO");
         c1.AddDisciplina("Grafos");

        Console.WriteLine(c1);
    }
}

Além disso a sua modificação deve atender o teste acima, e na execução  do testes temos a seguinte saída:

Curso:Ciencia da Computacao

Disciplinas:[AlgProgII, SO, Grafos]

**Resposta**

using System;
using System.Collections.Generic;

public class Curso
{
    private string nome;
    private List<string> disciplinas = new List<string>();

    public Curso(string nome) => this.nome = nome;

    public void AddDisciplina(string disciplina) => disciplinas.Add(disciplina);

    public override string ToString() => $"Curso: {nome}\n\nDisciplinas: [{string.Join(", ", disciplinas)}]";
}

class TestaCurso
{
    static void Main()
    {
        Curso c1 = new Curso("Ciência da Computação");
        c1.AddDisciplina("AlgProgII");
        c1.AddDisciplina("SO");
        c1.AddDisciplina("Grafos");

        Console.WriteLine(c1);
    }
}


7.b
Considere a classe ponto para representar uma coordenada(x,y), a classe possui o metodo igual(ponto p) que verifica se dois pontos são iguais, o método recebe um parâmetro de forma explícita (ponto p) e outro de forma implicita. public class Ponto { private int x, y; public Ponto(int x, int y) { this.x = x; this.y = y; } public boolean igual(Ponto p) { return this.x == p.x && this.y == p.y; } } A seguir temos a classe Circuito para representar a figura geométrica círculo, note que a classe Circulo foi modelada usando herança, o centro do círculo será uma coordenada (x,y) deifinida na classe pai e raio é um atributo float. public class Circulo extends Ponto { private float raio; public Circulo(int x, int y, float raio) { super(x, y); this.raio = raio; } } A sua tarefa é finalizar a implementação da classe circulo sobrescrevendo o método igual () da classe Ponto para que agora o metodo verifique se dois circulos sao iguais, ou seja, se estão na mesma coordenada (x,y) e se tem o mesmo raio. Nesse exercício não é permitido modificar a classe Ponto para atender as necessidades da classe circulo

RESPOSTA:

public class Circulo extends Ponto {
    private float raio;

    public Circulo(int x, int y, float raio) {
        super(x, y);
        this.raio = raio;
    }

    @Override
    public boolean igual(Ponto p) {
        return p instanceof Circulo && super.igual(p) && this.raio == ((Circulo) p).raio;
    }
}


Treino: 

questão curso -
using System;
using System.Collections.Generic; 

public class Curso {
private string nome;
private List<string> disciplinas = new List<string>();

public Curso(string nome) => this.nome = nome; 

public void AddDisciplina(string disciplina) => disciplinas: {string.Join(",",disciplinas)'}}
}

class TestaCurso {
static void Main() {

Curso c1 = new Curso("ciência da computação");
c1.addDisciplina("algoritmos");
c1.addDisciplina("SO");
c1.addDisciplina("Grafos").
Console.WriteLine(c1)
}
}