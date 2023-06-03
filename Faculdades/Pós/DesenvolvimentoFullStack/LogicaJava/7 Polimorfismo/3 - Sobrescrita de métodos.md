Se o mesmo método for definido na superclasse e na subclasse, o método da classe da subclasse substituirá o método da superclasse. 

Tanto a superclasse quanto a subclasse devem ter o mesmo nome de método, o mesmo tipo de retorno e a mesma lista de parâmetros.

class Linguagem{
  public void mostrarInformacaoDaLingua(){
    System.out.println("Lingua portuguesa");
  }

  class Java extends Linguagem {
    public void mostrarInformacaoDaLingua(){
      System.out.println("Linguagem Java");
    }
  }

    class Python extends Linguagem {
    public void mostrarInformacaoDaLingua(){
      System.out.println("Linguagem Python");
    }
  }



  
}

class Main {
  public static void main(String[] args) {

    Java j1 = new Java();
    j1.mostrarInformacaoDaLingua();

    Linguagem l1 = new Linguagem();
    l1.mostrarInformacaoDaLingua();
  }
}