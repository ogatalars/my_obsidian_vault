Formato bimendicional, isso é vetores com colunas e linhas (se assemelha a uma planilha excel)

class Main {
  public static void main(String[] args) {
    int valor;
    int[][] dados = new int[3][3]; // 3 linhas e 3 colunas
    // dados[0][0] = 1;
    // dados[0][1] = 2;

    for(int i = 0; i <3; i++)
      for(int j = 0; j< 3; j++) 
        dados[i][j] = j;

     for(int i = 0; i <3; i++)
      for(int j = 0; j< 3; j++)
        System.out.println(dados[i][j]);
    
      
  }
}