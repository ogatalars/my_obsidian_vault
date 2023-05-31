Enquanto atributo define as características de uma classe, os métodos definem o comportamento dela. 

São exemplos de comportamento:
- Realizar alguma atividade dentro da própria classe;
- modificar o valor de algum atributo;
- obter o valor de algum atributo;
- ativar métodos em outros objetos;

Cao.java
public class Cao {
  private int idade;

  public void setIdade(int i) {
    idade = i;
  }

  public int getIdade(){
    return idade;
  }
  public void Andar(){
    System.out.println("Estou andando.. ")
  }


  public boolean VerificarIdade() {
    if(idade > 10) {
      return true;
    }
    else {
      return false;
    }
  }
}

Main.java
class Main {
  public static void main(String[] args) {
    Cao cachorro = new Cao();
    cachorro.setIdade(5);
    if(cachorro.VerificaIdade()) {
      System.out.println("Ele é idoso");
    } 
    else {
      System.out.println("Ele é novinho");
    }
  }
}