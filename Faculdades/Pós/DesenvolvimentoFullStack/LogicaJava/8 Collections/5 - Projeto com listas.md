import java.util.ArrayList;

import org.hamcrest.internal.SelfDescribingValue;

class Main {
  public static void main(String[] args) {
    ArrayList<String> linguagens = new ArrayList<>();
    linguagens.add("Java");
    linguagens.add("CSharp");
    linguagens.add("Python");
    linguagens.add("JavaScript");

    System.out.println("ArrayList: " + linguagens);

    String[] arr = new String[linguagens.size()];

    linguagens.toArray(arr);
    System.out.println("Array: ");
    for(String item:arr) {
      System.out.println(item + ",");
    }
    
  }
}