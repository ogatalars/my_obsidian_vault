Diferentes classes podem se relacionar entre si, criando/compondo novos tipos de objetos. 
Quando falamos de herança estamos falando de reutilização de código. 

- Uma nova classe é criada absorvendo atributos de uma classe já existente.
- Chamaremos de SUBCLASSE a classe que herda da classe pai, e chamaremos de SUPERCLASSE a classe que vai gerar uma classe filha;

Dizemos então que o relacionamento de Herença define um relacionamento do tipo "é um"
Mountain bike **é uma** bicicleta; 
moto **é um** veículo 
caminhão **é um** veículo

Main.java
class Main {
  public static void main(String[] args) {
   Pessoa p = new Pessoa();
    p.nome = "Ogata"

    Vendedor v = new Vendendor();
    v.nome = "Láis";
    v.comissao = 123.3;
  }
}

Pessoa.java
class Pessoa {
  String nome;
  String rg;
}

Vendendor.java
class Vendendor extends Pessoa{
  double comissao;
}