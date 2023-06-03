Em uma classe Java, podemos criar métodos com o mesmo nome se diferirem em parâmetros. 

Exemplo:

void soma() {...}
void soma(int a){...}
float soma(double a, double b){...}
float soma(int a, float b){...}

Podemos ter um conjunto de métodos com o mesmo nome que realiazam o mesmo tipo de operação sobre argumentos diferentes 


class Desenho {
  public void mostrar() {
    for(int i = 0; i< 10; i++){
      System.out.println("*");
    }
  } // sem parametro 

  public void mostrar(char simb){
    for(int i = 0; i< 10; i++){
      System.out.println(simb);
    }
  }

  public void mostrar(char simb, int n){
    for(int i = 0; i< n; i++){
      System.out.println(simb);
    }
    
  }
}


class Main {
  public static void main(String[] args) {
    Desenho d1 = new Desenho();

    d1.mostrar();
    d1.mostrar('#');
    d1.mostrar('$', 3);
  }
}