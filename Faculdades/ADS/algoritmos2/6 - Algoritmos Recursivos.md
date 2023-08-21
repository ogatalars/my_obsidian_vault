A recursividade é muito importante no desenvolvimento de algoritmos, constituindo uma alternativa às implementações iterativas e, por vezes, abrindo novas possibilidades para a solução de problemas. Uma função iterativa é aquela que realiza uma série de repetições de uma mesma operação por meio de uma estrutura de repetição. As funções recursivas também repetem uma operação, mas com outra abordagem.

As funções podem naturalmente chamar outras para apoiar um trecho da lógica. Contudo, as funções recursivas apresentam a característica de chamar a si mesmas em algum ponto de seu algoritmo. Essa característica pode causar estranhamento, levando o iniciante a pensar que tais funções podem gerar um loop infinito. No entanto, para uma função recursiva funcionar, ela precisa ter um critério de parada bem definido, no qual as chamadas sucessivas a si mesma se encerrarão

### Definição de um problema recursivo
Normalmente, são criadas funções ou métodos para resolver um problema específico em um programa. Essa função corresponde a um algoritmo bem definido, que processa um valor de entrada, fornecendo um resultado.

Até aqui, discutimos como abordar esses problemas de forma iterativa, o que envolve diversas instruções sucessivas, normalmente formadas por conjuntos de comandos como if, for e while, que desenvolvem a lógica necessária para tratar o problema. Contudo, muitas vezes esses problemas podem ser tratados de outra forma. Quando um problema tem como característica repetir uma operação, pode-se buscar a construção de uma abordagem recursiva. Essa abordagem é caracterizada por inserir, dentro da função, uma chamada a si mesma. Para ela funcionar, são necessários:
- **Um valor de entrada (parâmetro) para a função.
- **Uma operação sobre esse valor de entrada, para produzir outro valor (às vezes implícito).**
- **Uma chamada para a própria função, passando como argumento um valor distinto ao que** **recebeu (normalmente, o valor resultante da operação anterior).**
**- Um critério de parada, pelo qual a função encerrará as chamadas a si mesma.****
Esses requisitos são necessários para que a função tenha êxito. Sem esses itens bem definidos, a função poderá incorrer em um loop infinito, chamando a si mesma indefinidamente.

public static int fatIterativo(int numero) { int resultado = 1; while (numero >= 1) { resultado = resultado * numero; numero = numero - 1; } return resultado; }

A função recebe um número, para o qual vai calcular o fatorial. O fatorial é a multiplicação de um número por todos os seus antecessores até o valor 1. Dessa forma, um laço será executado enquanto o número for maior ou igual a 1; dentro desse laço, uma variável que armazena o resultado temporário guardará a multiplicação do resultado atual pela variável numero e, em seguida, decrementará o valor do número. Esse loop continuará até o número valer 1

Podemos identificar um padrão nessa solução: a multiplicação constante por um valor que, a cada repetição, vale uma unidade a menos. Também observamos que um critério de parada para a multiplicação é quando esse valor corresponder a 1.

public static int fatRecursivo(int numero) { if (numero == 1 || numero == 0) return 1; else return numero * fatRecursivo(numero - 1); }