Uma instância da classe existente é usada como componente de outra classe

Dizemos então que o relacionamento de Composição define um relacionamento do tipo 'tem um'

"Bicicleta tem uma roda";
"Caminhão tem um motorista";
"Pedido tem um item"

Main.java
class Main {
  public static void main(String[] args) {
   Pedido p = new Pedido();
  }
}
Itens.java
public class Itens {
  public Itens() {
    
  }
}
Pedido.java