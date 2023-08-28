O MergeSort e o QuickSort empregam o princípio da divisão e conquista para dividir o vetor original em partes menores e, assim, facilitar a ordenação em partes localizadas. Cada parte dessa divisão executa uma nova chamada ao mesmo método de ordenação, e por isso ocorre a recursão. O algoritmo MergeSort realiza duas chamadas recursivas (dividindo o vetor em duas partes) e, em seguida, faz uma intercalação (ordenação dos elementos dessas duas partes). Já o QuickSort inicia com um particionamento (procurando um ponto de divisão chamado "pivô", elemento considerado ordenado em definitivo no vetor), que será utilizado para dividir o vetor em duas partes e, em seguida, realiza duas chamadas recursivas para cada uma das partes. São estratégias parecidas, mas que têm suas peculiaridades, as quais conferiremos em detalhes adiante.

### MergeSort – execução e análise de complexidade

O algoritmo de ordenação MergeSort se baseia na estratégia de divisão e conquista. Nessa estratégia, um problema maior é dividido em partes menores, mais fáceis de ser solucionadas, e a junção de todas essas soluções leva à solução do problema maior (original). Para a ordenação, a estratégia é dividir o vetor sucessivamente pela metade até a menor divisão possível (um elemento em cada parte), sendo este o caso mais simples de ser ordenado.

Porém, mais um recurso deve ser empregado nesse algoritmo: a recursão. Ao obter a menor solução, é necessário retornar esse resultado para a divisão anterior, onde ele será unido com o resultado da outra parte da divisão (essa é uma característica da recursão). Portanto, esse algoritmo se baseia em duas chamadas recursivas: uma para a primeira metade e outra para a segunda metade do vetor. Cada chamada, por sua vez, iniciará outras duas chamadas para as metades do vetor que recebeu, e assim sucessivamente, até alcançar a menor divisão possível e conseguir ordenar dois elementos (caso base). A partir desse ponto, os resultados começarão a retornar para a chamada original.

static void Main(string[] args) { int[] vetor = { 5, 3, 1, 9, 7, 2, 4, 5, 8, 3 }; merge(vetor,0,vetor.Length-1); for (int i=0; i

hamando o método recursivo merge (informando o vetor a ser ordenado e o início e o final da parte a ser ordenada, que, inicialmente, é o vetor todo). O for, ao final, imprimirá os valores ordenados:

public static void merge(int[] vetor, int inicio, int fim) { int meio; if (inicio < fim) { meio = (inicio + fim) / 2; merge(vetor,inicio,meio); merge(vetor,meio+1,fim); intercalar(vetor,inicio,fim,meio); } }

O método merge, como descrito anteriormente, realiza outras duas chamadas a si mesmo. A primeira é realizada para a primeira metade do vetor recebido, e a segunda, para a segunda metade. Após as duas chamadas, é chamado o método intercalar, que organizará os elementos das suas partes. Quando o início for igual ao fim do vetor, ou seja, quando houver só um elemento da metade, não serão mais realizadas chamadas recursivas:

public static void intercalar(int[] vetor, int inicio, int fim, int meio)
{ int[] vetor_aux = new int[vetor.Length]; int inicio_vetor1 = inicio; int inicio_vetor2 = meio + 1; int pos_livre = inicio; 
while (inicio_vetor1 <= meio && inicio_vetor2 <= fim)
{ if (vetor[inicio_vetor1] <= vetor[inicio_vetor2]) { vetor_aux[pos_livre] = vetor[inicio_vetor1]; inicio_vetor1++; } 
else { vetor_aux[pos_livre] = vetor[inicio_vetor2]; inicio_vetor2++; } pos_livre++; } //se ainda existem números no final do primeiro vetor que //não foram intercalados 
for (int i=inicio_vetor1; i<=meio; i++) { vetor_aux[pos_livre] = vetor[i]; pos_livre++; } 
//se ainda existem números no final do segundo vetor que 
//não foram intercalados 
for (int i = inicio_vetor2; i <= fim; i++) { vetor_aux[pos_livre] = vetor[i]; pos_livre++; }
//substitui os valores ordenados do "vetor_aux" para o 
//"vetor" 
for (int i = inicio; i <= fim; i++) vetor[i] = vetor_aux[i]; }

Para armazenar os resultados temporários da ordenação, o método intercalar utiliza um vetor auxiliar de tamanho equivalente ao vetor a ser organizado. A implementação desse método deve ser muito bem analisada, pois ele pode onerar mais o sistema se for executado para um conjunto de dados muito grande e com pouca memória disponível. Dentro do laço while, as duas metades do vetor são varridas e comparadas posição a posição, e, conforme identificados os menores elementos, estes são copiados no vetor auxiliar. Perceba que esse laço se encerra quando terminar a verificação de uma ou outra metade. Por isso, os dois próximos for servem para verificar se há elementos que não foram verificados em alguma das metades e, assim, devidamente copiados ao final do vetor auxiliar. Então, o último for copia as posições organizadas no vetor auxiliar de volta para o vetor original.

Quanto à eficiência do MergeSort, podemos observar que o tempo de trabalho executado corresponde à equação: T(n) = 2 × T(n/2) + n Em que: n é a quantidade de elementos a serem ordenados; T(n/2) se refere ao trabalho de execução das chamadas recursivas, que correspondem à ordenação das metades do vetor (por isso a multiplicação por 2); e n é o tempo para criar os subproblemas (novas divisões). Logo, a complexidade final corresponde a uma soma dessa equação, **sucessivamente dividida pela metade (SZWARCFITER; MARKENZON, 2010). A complexidade final é representada a seguir: O(n log n)**

### Quick Sort
De modo semelhante ao MergeSort, o algoritmo de ordenação QuickSort também se baseia na estratégia de divisão e conquista e na recursão. Porém, primeiramente, é executado um método para definir o ponto do vetor em que ocorrerá a divisão (chamado de "pivô"). Para relembrar: no MergeSort essa divisão ocorre sempre no meio, porém o pivô nem sempre será no meio do vetor. Definido o pivô, ocorrem duas chamadas recursivas: uma para a metade anterior e outra para a metade posterior do pivô.

Uma característica interessante desse algoritmo é que, ao definir um pivô, esse elemento já está, em definitivo, posicionado no vetor. Ou seja, todos os elementos à sua esquerda serão menores ou iguais a si, e os elementos à direita, maiores. A estratégia consiste em, dado um conjunto de elementos, iniciar o pivô como sendo o primeiro elemento (há outras estratégias de definição do pivô, mas adotaremos esta), o primeiro elemento como sendo a variável esq e o último elemento como dir. Enquanto o elemento esq for menor ou igual ao pivô, este terá seu valor atualizado com o elemento à direita; enquanto o elemento dir for maior que o pivô, este terá seu valor atualizado com o elemento à esquerda. Quando ambos pararem de alterar seus valores, o valor de esq será trocado com o de dir, mas suas posições no vetor serão mantidas. Então, esse ciclo se repetirá até que o valor de dir seja menor ou igual a esq. Quando isso ocorrer, o valor de dir será trocado com o do pivô, e a posição em que se encontra dir será um novo pivô, que encadeará uma nova divisão, com duas novas chamadas recursivas. Esse processo será repetido até que ocorram divisões com um elemento, caso base para encerrar a recursão

static void Main(string[] args) 
{ int[] vetor = { 5, 3, 1, 9, 7, 2, 4, 5, 8, 3 }; 
quick(vetor, 0, vetor.Length - 1);
for (int i=0; i <vetor.Length; i++)
Console.Write(vetor[i]+" ");
}

No método main, de modo semelhante ao MergeSort, inicie criando um vetor não ordenado, chamando o método recursivo quick (informando o vetor a ser ordenado, e o início e o final da parte a ser ordenada, que, inicialmente, é o vetor todo). O for, ao final, imprimirá os valores ordenados.

static public void quick(int[] vetor, int inicio, int fim) 
{ if (inicio < fim) 
{ int pivo = particionar(vetor, inicio, fim); 
quick(vetor, inicio, pivo - 1);
quick(vetor, pivo + 1, fim); } }

O método quick inicia chamando o método particionar. Este método define um novo pivô no trecho do vetor informado, que será usado como ponto de divisão para as duas chamadas recursivas que ocorrem logo em seguida. A primeira chamada recursiva é realizada para os elementos à esquerda do vetor, e a segunda chamada recursiva, para os elementos à direita. 

Quando há somente um elemento em uma das partes — ou nos casos em que o pivô fica na primeira ou na última posição e, portanto, uma das metades não possui elemento algum —, é atingido o critério de parada (o índice do início do vetor não é menor do que o índice do fim), e não são executadas mais chamadas recursivas para essa parte do vetor:


static public int particionar(int[] vetor, int inicio, int fim) { int esq = inicio; int dir = fim; int pivo = vetor[inicio]; while (esq < dir) { while (esq<=fim && vetor[esq] <= pivo) { esq++; } while (dir>=0 && vetor[dir] > pivo) { dir--; } if(esq < dir) { int aux = vetor[esq]; vetor[esq] = vetor[dir]; vetor[dir] = aux; } } vetor[inicio] = vetor[dir]; vetor[dir] = pivo; return dir; }


Vamos considerar que você tem uma pilha de cartas fora de ordem, e você quer organizá-las em ordem crescente. Aqui está como o QuickSort funciona:

1. **Escolha um Pivô:** Primeiro, você escolhe uma carta da pilha para ser o "pivô". Imagine que você pega uma carta ao acaso. Vamos chamar essa carta de "Pivô".
    
2. **Divida as Cartas:** Agora você divide as outras cartas em duas pilhas: uma com cartas menores que o Pivô e outra com cartas maiores. Isso significa que você está separando as cartas em dois grupos, uma à esquerda e outra à direita.
    
3. **Organize as Pilhas:** Agora, você aplica o QuickSort às duas pilhas separadamente. Ou seja, você repete o processo para cada grupo de cartas menores e maiores. Você escolhe um novo Pivô para cada pilha e repete os passos 2 e 3.
    
4. **Junte Tudo:** Depois de aplicar o QuickSort às pilhas menores e maiores, você junta tudo de volta em uma única pilha. As cartas menores estarão à esquerda do Pivô, e as cartas maiores à direita.
    
5. **Você Terminou:** Agora, todas as cartas à esquerda do Pivô são menores e as à direita são maiores. Sua pilha inteira está organizada!
    

Aqui está um exemplo simples em código C# para entender melhor:

using System;

class Program
{
    static void QuickSort(int[] array, int left, int right)
    {
        if (left < right)
        {
            int pivotIndex = Partition(array, left, right);
            QuickSort(array, left, pivotIndex - 1);
            QuickSort(array, pivotIndex + 1, right);
        }
    }

    static int Partition(int[] array, int left, int right)
    {
        int pivot = array[right];
        int i = left - 1;

        for (int j = left; j < right; j++)
        {
            if (array[j] < pivot)
            {
                i++;
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

        int temp2 = array[i + 1];
        array[i + 1] = array[right];
        array[right] = temp2;

        return i + 1;
    }

    static void Main(string[] args)
    {
        int[] array = { 4, 2, 8, 5, 1, 3, 7, 6 };
        
        QuickSort(array, 0, array.Length - 1);
        
        foreach (var num in array)
        {
            Console.Write(num + " ");
        }
    }
}
