Em java, a interface List é uma coleção ordenada que nos permite armazenar e acessar elementos sequencialmente;

Composta por métodos da interface collection 
Collection é a interface raiz da estrutura de coleções java


class Main {
  public static void main(String[] args) {
    ArrayList<String> estados = new ArrayList<>();

    estados.add("São Paulo");
    estados.add("Ceará");
    estados.add("Rio de Janeiro");
    estados.remove("Ceará");
  }
}