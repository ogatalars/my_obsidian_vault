A classe TreeSet do framework collections de Java fornece a funcionalidade de uma estrutura de dados em árvore. 

Podemos acessar, remover e inserir elementos.

import java.util.TreeSet

class Main {
  public static void main(String[] args) {

    TreeSet<Integer> numeros = new TreeSet<>();
    numeros.add(6);
    numeros.add(3);
    numeros.add(2);

    boolean result = numeros.remove(6); //retorna true or false

    numeros.removeAll(); // remove tudo
    

    
  }
}