Existem problemas de computação comuns a diversos programas cuja resolução exige uma estratégia específica. Alguns deles, por serem muito recorrentes, possuem algoritmos consagrados para resolvê-los. Entre esses problemas, encontra-se o da busca de um elemento em um conjunto linear de dados — ou, mais especificamente, a busca em vetores.

A busca linear representa a abordagem mais simples e objetiva, sem nenhuma estratégia específica, apenas recorrendo ao uso de iterações, pesquisando posição por posição do vetor. A busca binária, por sua vez, apresenta uma estratégia baseada no método de divisão e conquista, no qual, para um caso genérico, o valor pode ser identificado com menos iterações do que pela busca linear.

### Busca Linear
O algoritmo de busca linear (ou sequencial) em um vetor recorre a uma abordagem simples e intuitiva: percorrer todas as posições do vetor, iniciando-se pela primeira, até encontrar o valor procurado. Dessa forma, sua implementação necessita apenas do uso de um for, sendo que, em cada iteração, o valor da posição consultada será comparado com o valor procurado. A seguir, um exemplo de implementação:

int[] dados = { 52, 17, 69, 84, 3, 26, 83, 54, 19, 50 }; 
int valor_procurado = 54; 
bool valor_encontrado = false;

for(int i = 0; i < dados.Length; i++) 
 { if (dados[i]==valor_procurado) { Console.WriteLine("Valor encontrado no índice "+i); valor_encontrado = true; break; } } 
  if (!valor_encontrado) { Console.WriteLine("Valor não encontrado"); }


Nesse código, o vetor dados é percorrido a partir do índice 0. Quando o valor na posição consultada for igual ao valor procurado, uma mensagem será impressa informando que o valor foi encontrado junto com o respectivo valor do índice. Além disso, a variável valor_encontrado passa a valer true, e o comando break encerra as iterações, pois, se o valor já foi encontrado, não é necessário percorrer o restante do vetor. Por fim, após encerrar o for, caso não tenha sido encontrado o valor, uma mensagem é impressa informando que o valor não foi encontrado