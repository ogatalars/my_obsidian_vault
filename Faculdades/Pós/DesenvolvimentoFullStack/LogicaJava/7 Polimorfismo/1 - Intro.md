Poliformismos -> nos permite programar genericamente ao invés de programar especificamente

É possível fazer com que os objetos se comportem de maneira adequada automaticamente

Main.java

class Main {
  public static void main(String[] args) {
    Quadrado q1 = new Quadrado();
    q1.desenhar();
    Circulo c1 = new Circulo();
    c1.desenhar();
  }
}

Circulo.java

class Circulo extends Poligono {
  public void desenhar() {
    System.out.prinln("Desenhanado Circulo");
  }
}

Poligono.java

class Poligono {
  public void desenar(){
    System.out.println("Desenhando Poligono")
  }
}

Quadrado.java

class Quadrado extends Poligono {
  public void desenhar() {
    System.out.prinln("Desenhanado quadrado");
  }
}