import java.util.ArrayList;

class Main {
  public static void main(String[] args) {
    ArrayList<String> bandas = new ArrayList<String>();

    bandas.add("Kiss");
    bandas.add("Beatles");
    bandas.add("Iron Maiden");

    System.out.println(bandas);
    bandas.add(bandas.indexOf("Kiss"), "U2");
    System.out.println(bandas);
    bandas.remove("Kiss");
    System.out.println(bandas);
    bandas.clear(); // remove tudo
  }
}