### 3 - Variáveis e programação por blocos 

Antes de iniciarmos o estudo sobre alguns conceitos relacionados às linguagens de programação, cabe aqui uma pergunta: qual a linguagem do computador? Para respondê-la, precisamos mergulhar nos conceitos fundamentais da computação: os bits. A arquitetura do computador é composta de circuitos eletrônicos. Esses circuitos operam com sinais binários (0 e 1). A principal razão para essa arquitetura ser binária, e não decimal, deve-se ao fato de ser mais simples e por possuir baixo custo de implementação.

Nos projetos de circuitos computacionais, são usados chips, os quais são compostos de um material semicondutor denominado transistores. Os transistores possuem a propriedade de conduzir energia elétrica apenas quando uma tensão conveniente é empregada em seus terminais. Os transistores são utilizados em um chaveamento como “liga-desliga”, assim, quando está ligado, é representado por 1, e quando está desligado, é representado por 0. O agrupamento de transistores permite outras funções lógicas.

### Programação por blocos 

Antes dos anos 1940, os computadores não eram programados, mas, sim, projetados para desempenhar uma única (e específica) função. Por exemplo, poderíamos projetar um computador para realizar o cálculo de distância entre uma cidade A e uma cidade B. No entanto, se desejássemos mudar a função do computador, adicionando uma terceira cidade para cálculo de distância, era necessário desligá-lo, adicionar algum componente novo ou alterar a máquina fisicamente. Ou seja, era algo ineficaz e pouco produtivo. 

Analisando todo esse cenário, o cientista da computação John von Neumann criou a arquitetura que consiste principalmente em chips de memória capazes de armazenar e processar dados (OLIVEIRA, 2019). Cada chip tem a capacidade de realizar diferentes tarefas, dependendo de como é afetado pela operação executada antes dele. Nessa arquitetura, cada computador teria memória, mecanismos de entrada e saída, um controle central, um local para aritmética central e armazenamento externo. 

Os computadores com arquitetura von Neumann são conhecidos como programas armazenados. Isso significa que o computador não precisa de interruptores externos ou outras influências para funciona**r. Todas as instruções e os dados são armazenados na memória de acesso aleatório (RAM).**

Para ler um documento, é necessário que o programa de leitura processe a requisição (entrada, solicitando que se abra o documento), que o programa procure na memória (disco rígido) o arquivo solicitado, e por fim, que apresente o arquivo na tela (saída). Assim, sempre teremos: entrada, processamento e saída.

Considere a memória do computador como uma rua. Essa rua é muito longa e possui diversas casas, desde a casa 0 até a casa n, em que n é a capacidade máxima da memória RAM do computador. Agora, considere que cada casa comporta apenas uma única pessoa morando nela por vez. Então, podemos dizer que na casa número 6.552 mora uma pessoa chamada José, na casa 4.251 mora a Ana. Pode ser que, em algum momento, outra pessoa entre na casa 6.552, logo, José precisa sair para que essa pessoa possa entrar. O mesmo pode acontecer na casa 4.251: Paula pode entrar na casa e, de modo automático, Ana precisará sair.

Se em algum dia quisermos saber quem mora na casa 6.552, basta irmos até essa casa e perguntar quem está lá. Além disso, enquanto não desocuparmos a casa, os moradores continuarão morando lá, por tempo indeterminado. Na memória do computador é da mesma maneira: temos casas onde armazenamos valores. Podemos armazenar valores por tempo indeterminado, até que o computador ou o programa seja encerrado. Quando isso ocorrer, aquela casa (espaço em memória) será desalocada.

Observe que o morador da casa não é um elemento fixo, ou seja, ele varia de tempo em tempo. Então, podemos dizer que essa casa é uma variável. Em uma variável, podemos colocar diversos tipos de valores, sejam eles textos (sequência de letras), sejam eles números.

**Outra característica de uma variável é que nós podemos dar um nome** a ela e invocá-la por esse nome (FORBELLONE; EBERSPACHER, 2005).