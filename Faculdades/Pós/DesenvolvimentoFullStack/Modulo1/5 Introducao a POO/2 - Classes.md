A partir da classe, podemos gerar um objeto.

Uma classe define o formato dos objetos.  Os objetos atribuem valor aos atributos de uma classe. 
Um objeto também é chamado de instância de uma classe.

"Uma classe se assemelha a uma planta arquitetônica enquanto o objeto a uma construção"


**Aqui temos uma classe, arquivo com nome Cao.java**

public class Cao {
  String nome;
  String cor;
  int idade;
  double peso;


  public void Anda() {
    System.out.println("Estou andando "); // **Metodo sempre é uma ação**
  }
}

**Lá no arquivo Main.java**

class Main {
  public static void main(String[] args) {
    Cao cachorro = new Cao(); // invocação da nossa classe
    cachorro.nome = "Snoopy";
    cachorro.idade = 4;
    cachorro.Anda();

    
  }
}