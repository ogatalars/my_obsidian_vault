Uma exceção é um evento inesperado que ocorre durante a execução do programe  que afeta seu fluxo.

- Throwable -> superclasse de todos os erros e exceções;
- Error -> Representam condições irrecuperáveis;
- Exception -> Podem ser capturadas e tratadas pelo programador; (normalmente é culpa do dev) -> Bloco try e catch;
- RuntimeException -> 
- IOException -> 

import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);

    try{
      System.out.println("Digite um valor: ");
    int numero1 = s.nextInt();

    System.out.println(numero1);
  }
    catch(Exception ex){
      System.out.println("ERRO - valor não é um número");
    }
    } 
    
}