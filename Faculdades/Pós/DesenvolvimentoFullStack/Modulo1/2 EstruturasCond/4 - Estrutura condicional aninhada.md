São condições atrás de condições;

classic Main {
   public static void main (String[] args ) {
      int nota = 6;

		  if(nota >= 5) {
		  System.out.println("Aprovado");
		  
		  } else if(nota>3 && nota <5) {
		  System.out.println("Exame");
		}
		else {
		System.out.println("Reprovado")}
     }
}

class Main {
  public static void main(String[] args) {
    int nota = 6;
    if(nota >= 5) {
      System.out.println("Aprovado");
    } else if(nota >= 3 || nota < 5) {
      System.out.println("exame");
    } else {
      System.out.println("Reprovado");
    }
  }
}