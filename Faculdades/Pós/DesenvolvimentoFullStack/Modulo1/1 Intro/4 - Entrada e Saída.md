Em java, podemos usar como saída:

System.out.println() // pula linha
System.out.print()
System.out.printf()

A entrada deve ser utilizando a biblioteca util.Scanner.

Exemplo:

`
import java.util.Scanner;

class Main {
  public static void main(String[] args) {

    // String valor = "String, sendo igual o valor de atribuição";
    // System.out.println("Olá Mundo");

    
    // System.out.println(valor.contains("String"));
    // System.out.println(valor.length());

    System.out.println("Informe seu nome: ");
    String palavra;
    Scanner entrada = new Scanner(System.in);
    palavra =  entrada.next();

    System.out.println("Palavra: " + palavra);

    
  }
}`