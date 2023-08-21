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

Identificamos essa função como recursiva porque dentro de seu escopo há uma chamada para si mesma. Observamos que o primeiro critério é atendido: a função possui um valor de entrada. O segundo critério nessa função é implícito: a chamada recursiva passa como valor a variável numero subtraído 1 (como se tivesse ocorrido uma operação sobre esse valor, alterando o valor a ser passado como entrada para a chamada recursiva). O terceiro critério também é atendido: na chamada recursiva (a chamada da função a si mesma dentro do seu escopo), é passado um valor diferente do recebido (a função recebe um valor armazenado pelo parâmetro numero, e, na chamada recursiva, o argumento é o valor dessa variável subtraído 1). O quarto critério está dentro do bloco if: caso a variável seja 1 ou 0, é retornado um valor, e a função não é mais chamada, encerrando-se assim as chamadas recursivas.

Até aqui, analisamos estruturalmente a função; agora, vamos prosseguir para o entendimento da lógica. Suponhamos que seja passado o valor 3 para essa função. A execução prossegue para o bloco else. Na linha de return, é chamada novamente a mesma função; portanto, só é possível retornar algum valor após concluída a execução dessa chamada. A nova chamada será feita com o valor de numero – 1; logo, com o valor 2. A mesma lógica se repetirá e, na chamada da função, será passado o valor 1. Agora, dentro dessa segunda chamada recursiva, o critério de parada será atingido: o bloco if será executado, retornando o valor 1, que encerra a execução da segunda chamada recursiva. O resultado 1 tem que ser multiplicado pelo valor de numero da chamada recursiva anterior (2). 2 × 1 = 2 – esse valor será o retorno da primeira chamada recursiva, retornando assim para a execução original dessa função. 

Vamos a outro exemplo: o cálculo do n-ésimo termo da sequência de Fibonacci.

public static int fibIterativo(int numero) { int num1 = 1; int num2 = 1; int proxNum = 0; for (int i = 3; i <= numero; i++) { proxNum = num1 + num2; num1 = num2; num2 = proxNum; } return proxNum; }

Nessa função, passado o número do termo desejado na sequência de Fibonacci, inicialmente são definidos os dois primeiros termos com o valor 1. Em seguida, um for começa percorrendo do terceiro termo até o valor do termo desejado. Para cada iteração, o próximo número é determinado como a soma dos dois anteriores; o primeiro número é atualizado com o valor do segundo; e o segundo número é atualizado com o valor da soma. Ao final das iterações, é retornado o último valor calculado.

A solução recursiva é mais resumida, porém tem algumas peculiaridades:

public static int fibRecursivo(int numero1, int numero2, int numeroSequencia) { if (numeroSequencia > 1) return fibRecursivo(numero2, numero1 + numero2, --numeroSequencia); else return numero1; }

Perceba que, em comparação com a solução iterativa, há mais parâmetros de entrada. A proposta é que, a cada chamada recursiva, o valor do termo informado seja subtraído; assim, as chamadas cessarão quando esse valor for 0. Enquanto o valor for maior que 1, uma nova chamada será realizada com os parâmetros atualizados: o que era numero1 passa a ser numero2; o que era numero2 passa a ser a soma de numero1 com numero2; e do número do termo é subtraído 1. Essas chamadas se repetirão até que o número do termo (numeroSequencia) seja 0, executando, assim, o bloco else e atingindo o critério de parada: é retornado o valor de numero1 (termo desejado). Esse valor é retornado, então, para a chamada anterior (dentro de um if), que também retornará o valor para a chamada anterior, e assim sucessivamente, até a chamada inicial.

Com esses exemplos, percebemos que não existe uma estrutura exata para construir uma função recursiva: cada problema pode exigir uma abordagem diferente. Contudo, os seguintes elementos devem estar presentes para que essa função tenha sucesso:

**- Uma chamada recursiva a si mesma com parâmetros sempre diferentes. 
• Um critério de parada para evitar o loop infinito.**