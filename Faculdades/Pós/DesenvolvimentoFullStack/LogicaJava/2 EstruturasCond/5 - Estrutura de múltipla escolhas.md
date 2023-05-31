Switch, são várias opções;
Usado em menu;


import java.util.Scanner;

class Main {
  public static void main(Strings[] args) {
    Scanner entrada = new Scanner(System.in);
 System.out.println("Escolha uma opção:  ");
 System.out.println("1 - Cadastra aluno ");
 System.out.println("2 - Cadastrar notas ");
 System.out.println("3 - Listar alunos e notas ");

 int numero = entrada.nextInt();

switch(numero) {
 case 1: 
      System.out.println("Vamos cadastrar aluno");
 break;
 case 2:
     System.out.println("Vamos cadastrar notas");
 break;
 case 3:
    System.out.println("Listar alunos");
 break;
 default: 
    System.out.println("O número é inválido");
  }
  }
}