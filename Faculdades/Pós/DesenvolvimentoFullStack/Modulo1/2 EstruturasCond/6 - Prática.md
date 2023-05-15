import java.util.Scanner;
import java.util.Random;

class Main {
  public static void main(String[] args) {
    Random gerador = new Random();
    int numeroAleatorio = gerador.nextInt(100);

    Scanner entrada = new Scanner(System.in);
    System.out.println("Adivinhe o número que estou pensando: ");
    int numero = entrada.nextInt();

    if(numero == numeroAleatorio) {
      System.out.println("Parabéeeens, acertou o número" + numeroAleatorio);
      else {
      System.out.println("Você errou!, eu pensei no " + numeroAleatorio)
      };
    }
  }
}