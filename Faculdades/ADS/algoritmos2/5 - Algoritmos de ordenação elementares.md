Problemas de ordenação são comuns no desenvolvimento de softwares. Um programa pode gerar ou receber diversos dados ao longo do tempo, precisando constantemente fazer uma consulta em busca de alguns desses. Para facilitar a tarefa da consulta, manter esse conjunto de dados ordenado é uma abordagem comum. Por isso, existe uma série de algoritmos de ordenação, alguns mais simples, como veremos adiante, e outros mais complexos, mas com eficiência superior. Além da importância desses algoritmos para a finalidade a que se propõem, esse tema de estudo é interessante por introduzir o leitor na análise e compreensão de algoritmos mais elaborados, de modo a amadurecer seu raciocínio e sua percepção ao abordar um problema, convertendo-o em um algoritmo e usando as estruturas básicas de programação que já conhece.

Veremos como um mesmo problema – neste caso, o de ordenação – pode ser abordado de diferentes formas: a ordenação pelo método bolha procura posicionar os maiores elementos ao final do vetor; a ordenação por seleção troca um elemento na parte inicial pelo menor elemento que há no restante do vetor a cada iteração; e a ordenação por inserção busca os menores elementos no restante do vetor para posicioná-los ordenadamente no início.

### Ordenação pelo método bolha
A ordenação pelo método bolha, por vezes chamada apenas de ordenação bolha ou, ainda, bubble sort, é um dos métodos mais simples e intuitivos para ordenar elementos em uma lista ou vetor. A lógica empregada neste método é representada pelo seguinte pseudocódigo:

para i = 1 até n faça para j = 0 até n – 2 faça se vetor[ j ] > vetor[ j + 1] então trocar(vetor[ j ], vetor[ j + 1]) fim-se fim-para fim-para

A estratégia consiste em comparar um elemento do vetor com o próximo, iniciando da primeira posição e chegando até a penúltima. Se o próximo elemento for menor, ambos trocarão de posição. O algoritmo repetirá a mesma verificação para todas as próximas posições. Assim, em uma passada pelo vetor (n operações), o maior elemento será alocado na última posição. Essa ação corresponde ao laço interno. Porém é necessário repeti-la n vezes para posicionar corretamente todos os elementos do vetor. Essa ação corresponde ao laço externo.

Como é possível observar, repetir n operações n vezes corresponde a um total de n² operações. Assim, a complexidade desse algoritmo é O(n2 ). No entanto, é possível otimizar dois aspectos: 1. Uma passada pelo vetor sem nenhuma ocorrência de alteração de posição dos elementos indica que ele já está ordenado e, portanto, não é mais necessário repetir essas passadas até um total de n, podendo-se encerrar o algoritmo. 2. Cada passada não precisa percorrer todo o vetor, pois, garantidamente, os últimos elementos estão ordenados; assim, a cada passada, é necessário ir até o elemento anterior ao último ordenado na passada anterior.


A seguir, a implementação, incluindo as duas otimizações apontadas:
int[] vetor = { 99, 82, 50, 67, 90, 20, 71, 8, 21, 18 }; bool mudou = true;//1a otimização int ultimo = vetor.Length-1;//2a otimização int ultimo_temp = vetor.Length-1; while (mudou) { int pos = 0; mudou = false; int temp = 0; while(pos vetor[pos+1]) { temp = vetor[pos]; // vetor[pos] = vetor[pos+1]; // troca vetor[pos + 1] = temp; // mudou = true; ultimo_temp = pos; } pos++; } ultimo = ultimo_temp; }


Nesse código, é criado um exemplo de vetor desordenado. A variável mudou será utilizada para indicar que houve uma troca de elementos em alguma passada pelo vetor (implementando a primeira otimização), e a variável ultimo armazenará a posição do último elemento posicionado pela passada anterior (implementando a segunda otimização). O algoritmo será executado (repete-se a passada) enquanto a variável mudou for true, ou seja, se na passada anterior tiver ocorrido uma troca de posições. A cada nova passada, começa-se pela posição inicial (pos = 0), e mudou inicia como false. Um novo laço controla o avanço da passada enquanto a posição verificada for menor que a última posição organizada do vetor. Caso o elemento da posição atualmente verificada seja maior do que o da próxima posição, ambos os valores são trocados (utilizando a variável temp como auxiliar na troca). Além disso, a variável mudou passa a receber valor verdadeiro, indicando que haverá uma nova passada ao final da atual, e a variável ultimo_temp receberá momentaneamente o valor da posição atual onde houve troca (caso ocorra uma nova troca nessa mesma passada, essa variável é atualizada). Ao final dessa passada, a variável ultimo receberá o valor armazenado em ultimo_temp, e, assim, a quantidade de passadas a serem executadas pelo laço em sua verificação (pos

Exemplo de Bubble Sort:

using System;

class BubbleSortExample
{
    static void Main(string[] args)
    {
        int[] array = { 64, 34, 25, 12, 22, 11, 90 };

        Console.WriteLine("Original array:");
        PrintArray(array);

        BubbleSort(array);

        Console.WriteLine("\nSorted array:");
        PrintArray(array);
    }

    static void BubbleSort(int[] arr)
    {
        int n = arr.Length;
        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - i - 1; j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    static void PrintArray(int[] arr)
    {
        foreach (var item in arr)
        {
            Console.Write(item + " ");
        }
        Console.WriteLine();
    }
}

### Ordenação por seleção
A ordenação por seleção, ou selection sort, é outro método elementar de ordenação. Sua proposta é bem simples e de fácil implementação. O algoritmo procurará o menor elemento a partir da posição inicial (0) e o trocará com o da posição 0. Em seguida, buscará o menor elemento a partir da posição 1 e o trocará com o da posição 1 – repetindo o processo até ordenar todo o vetor.

O pseudocódigo desse algoritmo está expresso a seguir:
para i = 0 até n-1 faça minimo := i para j = i+1 até n faça se vetor[j] < vetor[minimo] então minimo := j fim-se fim-para temp := vetor[i] vetor[i] := vetor[minimo] vetor[minimo] := temp fim-para