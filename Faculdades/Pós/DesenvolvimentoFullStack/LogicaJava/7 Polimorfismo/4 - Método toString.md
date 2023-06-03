O método toString() converte o objeto em uma string e a retorna

A sintaxe é objeto.toString(), onde o o toString não aceita parâmetros 

todas as classes e arrays podem implementar o método toString();

import org.junit.runner.manipulation.Sorter;

class Main {
  public static void main(String[] args) { 

    String primeira = "Java";
    String segunda = "Csharp";
    String terceira = new String("Python");
    String quarto = new String("JavaScript");

    System.out.println(primeira.toUpperCase());
    System.out.println(segunda);
    System.out.println(terceira.length());

    boolean result = primeira.equals(segunda);
    System.out.println(result);
  }
}