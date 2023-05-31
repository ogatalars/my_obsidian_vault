class Main {
  public static void main(String[] args) {
    int[][] matriz = {{9, 8, 7}, {5, 3, 2}, {6, 6, 7}};

    int[] maiorLinha = new int[3];
    int[] menorColuna = new int[3];

    for (int i = 0; i < 3; i++) {
      maiorLinha[i] = 0;
    }

    for (int i = 0; i < 3; i++) {
      menorColuna[i] = 10;
    }

    // Maior elemento em cada linha
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        if (matriz[i][j] > maiorLinha[i])
          maiorLinha[i] = matriz[i][j];
      }
    }

    // Menor elemento em cada coluna
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        if (matriz[j][i] < menorColuna[i])
          menorColuna[i] = matriz[j][i];
      }
    }

    // Printing the results
    System.out.println("Maiores elementos em cada linha:");
    for (int i = 0; i < 3; i++) {
      System.out.println("Linha " + i + ": " + maiorLinha[i]);
    }

    System.out.println("Menores elementos em cada coluna:");
    for (int i = 0; i < 3; i++) {
      System.out.println("Coluna " + i + ": " + menorColuna[i]);
    }
  }
}
