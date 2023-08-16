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

Essa é a abordagem mais simples para percorrer um vetor em busca de um valor, pois consulta todas as posições até encontrá-lo. Na melhor das hipóteses (melhor caso), em que o valor procurado está na primeira posição, a busca se encerra mais rapidamente; na pior das hipóteses (pior caso), em que o valor procurado está na última posição, todas as posições do vetor devem ser consultadas até encontrá-lo. Se essa busca for realizada em um vetor que tem os valores aleatoriamente distribuídos em suas posições, podemos dizer que, na média (caso médio), será necessária uma quantidade de consultas equivalente à metade do tamanho do vetor

### Busca binária
A busca binária apresenta uma nova estratégia de busca de um valor em um vetor. Trata-se de um algoritmo que representa um aperfeiçoamento em relação à busca linear, de forma que, para um caso médio, menos posições são consultadas para encontrar o valor procurado. Contudo, há uma importante condição para que esse algoritmo funcione: todos os valores precisam estar ordenados no vetor.

A lógica de implementação segue o método de divisão e conquista: separar um problema maior em pequenas partes, de modo a resolver cada uma delas, juntando suas soluções para resolver o problema como um todo. No caso da busca binária, essa estratégia consiste em dividir o vetor em duas partes e olhar para o meio: caso o valor do meio seja menor que o valor procurado, é analisada a segunda parte do vetor, repetindo-se a estratégia de dividi-lo em duas partes. Caso o valor do meio seja maior que o valor procurado, é analisada a primeira parte do vetor, repetindo-se a estratégia. Quando o valor do meio for igual ao valor procurado, a busca será encerrada.

A implementação da busca binária é apresentada a seguir:

int[] dados = { 3, 17, 19, 26, 50, 52, 54, 69, 83, 84 };
int valor_procurado = 54; bool valor_encontrado = false; 
int inicio = 0;
int fim = dados.Length-1; 
int meio;

do { meio = inicio + (fim - inicio) / 2; if (dados[meio] == valor_procurado) { Console.WriteLine("Valor encontrado no índice " + meio); valor_encontrado = true; break; } else if (dados[meio] > valor_procurado) { fim = meio - 1; } else { inicio = meio + 1; } } while (inicio<=fim); if (!valor_encontrado) { Console.WriteLine("Valor não encontrado"); }

Primeiramente, observe que o vetor contém os mesmos valores do exemplo criado para a busca linear, porém todos eles estão agora ordenados no vetor. Portanto, caso deseje aplicar uma busca binária em um vetor não ordenado, é necessário primeiro aplicar um algoritmo de ordenação.

**Diferentemente da busca linear, na busca binária o vetor precisa estar com todos os seus elementos ordenados de forma crescente.**

Para a aplicação desse algoritmo, são utilizadas três variáveis: uma para indicar o índice de início do trecho do vetor analisado, uma para indicar o fim e outra para indicar o meio (caso haja um valor par de índices, o índice central é arredondado para o menor valor). Um laço inicia calculando o índice da posição do meio. 

Primeiro, é verificado se o valor nessa posição é o buscado. Caso seja o valor buscado, uma mensagem de confirmação é impressa, o valor da variável que indica que o valor foi encontrado recebe true e o laço é encerrado com o comando break. Caso o valor nessa posição central seja maior que o valor procurado, a posição final do vetor passa para o índice anterior ao verificado.

Dessa forma, na próxima iteração, será verificada a primeira parte do vetor atual, reduzindo assim o escopo de busca ou, ainda, dividindo o problema (de encontrar um valor em um vetor) em uma parte menor. Caso o vetor não esteja ordenado, é inválido presumir que, se o valor na posição central for maior do que o valor procurado, este estará na primeira parte do vetor. Por fim, caso o valor procurado seja maior que o valor na posição do meio, a posição inicial passa para o índice imediatamente posterior ao da posição do meio; assim, na próxima iteração, é verificada a segunda parte do vetor. 

O laço fará com que essa abordagem se repita, dividindo (divisão) o vetor em duas partes, sucessivamente (por isso o nome busca binária), até encontrar ou não o valor procurado (conquista). 

O algoritmo de busca binária apresenta uma estratégia própria e comparativamente mais complexa do que o algoritmo de busca linear. Ao comparar os exemplos de ambos os algoritmos, temos que, pelo algoritmo de busca linear, foram realizadas oito verificações até encontrar o valor procurado (pois este se localiza na oitava posição do vetor), enquanto, pela busca binária, foram necessárias apenas quatro verificações. Mesmo se o vetor utilizado pela busca linear fosse ordenado, seriam necessárias 7 verificações para encontrar o valor 54.

**Com essa observação, intuímos que o algoritmo de busca binária é melhor (mais eficiente) do que o algoritmo de busca linear**


### Conceitos de análise de algoritmos

Em computação, é comum que haja diferentes estratégias para resolver um mesmo problema, ou seja, diferentes algoritmos para realizar uma mesma tarefa. Embora esses algoritmos tenham que alcançar o mesmo resultado, a fim de cumprir a tarefa a que se propõem, a forma como a executarão será diferente e, em consequência, um algoritmo poderá ser mais eficiente do que o outro. Vimos até aqui dois algoritmos de busca que resolvem o mesmo problema de encontrar um elemento em um vetor. No entanto, devido às suas estratégias (implementações) diferentes, um pode ser mais eficiente do que o outro. 

O conceito de eficiência pode variar, mas normalmente se refere a um algoritmo de execução mais rápida ou com menor utilização de recursos (memória). Em nosso caso, estamos analisando a eficiência em relação à quantidade de passos (ou verificações) que os algoritmos têm que executar até cumprir seu objetivo. Na prática, isso se refletirá no tempo de execução dos algoritmos. É comum analisarmos um algoritmo sob o pior caso, ou seja, a quantidade máxima de verificações necessárias. Contudo, essa análise tem que ser feita em função de uma entrada. Um algoritmo de busca atua sobre uma quantidade de elementos; portanto, seu tempo de execução varia conforme a quantidade de elementos que ele precisa analisar. Assim, podemos fazer uma projeção de quantas verificações serão necessárias (no pior caso) em função de cada possível entrada (nesse caso, uma quantidade de elementos).

Para o algoritmo de busca linear, o pior caso é quando o elemento buscado se encontra na última posição do vetor. Então, o algoritmo precisa percorrer todas as posições até encontrá-lo. Assim, se o vetor possui 10 elementos, são necessárias 10 verificações; se possui 25 elementos, 25 verificações. De forma mais genérica, se o vetor possui n elementos, são necessárias n verificações.

Para expressar essa análise do algoritmo, visando a uma maior formalidade, utiliza-se uma notação. A notação O, também chamada de grande O, indica o limite assintótico superior da função, que basicamente representa a quantidade máxima de execuções do algoritmo. No caso do algoritmo de busca linear, já identificamos que, dada uma entrada com n elementos, serão executadas, no pior caso, n verificações.

f(n) = n

O(f(n))

O(n)

**A notação “O(n)” deve ser lida como “Ó de n”.**

*Essa notação indica que, dado um valor de entrada, a quantidade de verificações executadas pelo algoritmo será, no máximo, igual ao valor apontado pela função (indicado pela notação). Ela define uma maneira de expressar a taxa de crescimento dos passos realizados pelo algoritmo conforme o aumento da entrada.*

Para a busca linear, O(n) indica que o algoritmo pode executar até n passos para uma entrada de tamanho n.

Agora, analisemos o algoritmo da busca binária: para um vetor com 4 elementos, são executadas, no máximo, 2 verificações até encontrar o elemento procurado; para um vetor com 8 elementos, são executadas, no máximo, 3 verificações; para um vetor com 16 elementos, 4 verificações. Perceba que a taxa de crescimento (saída da função) é menor do que seu valor de entrada; logo, ela cresce mais devagar do que a função linear que representa o algoritmo da busca linear. Esse crescimento, em que a saída aumenta uma unidade somente quando se dobra o valor da entrada, é expresso pela função do logaritmo na base 2. 

De forma análoga ao processo indicado para a busca linear, podemos apontar que a complexidade da busca binária é assim expressa na notação O: O(log2 n)