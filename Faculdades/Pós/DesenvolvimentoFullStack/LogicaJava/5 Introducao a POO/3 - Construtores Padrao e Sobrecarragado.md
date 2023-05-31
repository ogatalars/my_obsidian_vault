Construtor é um método carregado quando o objeto é criado. 
Possui o mesmo NOME que a CLASSE
Não retornam valores

Podem ser: 
- Sem parametros;
- Parametrizados;
- Sobrecarregados.

Arquivo Cao.Java

public class Cao {
  String nome;
  String Cor;
  int idade;
  double peso;

  public Cao() {
    cor = "Amarelo";
  }

  public Cao(String nome, int idade) {
    this.nome = nome;
    this.idade = idade;
    
  }


public void Anda(){
  System.out.println("Estou andando..." + cor);
 }

  public void DadosCao() {
    System.out.println(nome + " " + idade);
  }
}

Arquivo Main.java

class Main {
  public static void main(String[] args) {
     Cao cachorro = new Cao();
     cachorro.Anda();

    Cao dog = new Cao("Lulu", 12);
    dog.DadosCao();
    
  }
}