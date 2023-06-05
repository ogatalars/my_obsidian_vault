A classe LinkedList do framework collections do Java fornece a funcionalidade de estrutura de dados de lista vinculada

Cada elemento em uma lista encadeada é conhecido como um nó. É composto por 3 campos:
prev, next, dado


import java.util.LinkedList

class Main {
  public static void main(String[] args) {
    LinkedList<String> animais = new LinkedList<>();

    animais.add("Dog");
    animais.add("Cavalo");
    animais.add("Lobo");

    animais.add(1, "Gato");

    
  }
}