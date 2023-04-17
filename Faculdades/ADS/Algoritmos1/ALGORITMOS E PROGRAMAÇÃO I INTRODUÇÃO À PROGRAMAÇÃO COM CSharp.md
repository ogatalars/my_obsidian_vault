### 2 - Introdução aos algoritmos e programação por blocos
### - Introdução e conceitos de algoritmos

O  conceito de algoritmos se trata de uma sequência finita de instruções que visa resolver algum tipo de problema

### Lógica computacional 

Para entender corretamente como construir um algoritmo, primeiramente é necessário compreender a lógica de programação. A lógica é uma parte da filosofia que tem como objetivo estudar e aplicar as leis do raciocínio humanos. Os algoritmos são conjuntos de instruções lógicas que visam resolver um determinado problema. 

Agora, vamos considerar o seguinte exemplo, em que é dada a sequência numérica: 1 1 2 3 5 8 13 ? Como definir qual será o próximo número da sequência? Nesse caso, o próximo valor é o 21. Isso pode ser afirmado em razão do valor atual ser sempre a soma dos dois números anteriores:
• 1 + 1 = 2 
• 1 + 2 = 3 
• 2 + 3 = 5 
• 3 + 5 = 8 
• 5 + 8 = 13 
• 8 + 13 = 21 
Para encontrar o valor da sequência, foi necessário encontrar um padrão lógico e, em seguida, criar uma sequência fixa e finita de instruções

### Características dos algoritmos

1- **Cada passo do algoritmo deve ser uma instrução possível de ser realizada**: considere o exemplo da viagem de Campinas até São Paulo. Existe uma sequência lógica de instruções e todas elas precisam ser executadas, se uma dessas instruções não ocorrer, o algoritmo não será executado corretamente. 

2 - **A ordem de cada uma das instruções deve ser respeitada**: considere o segundo exemplo. Nele, o valor de um número X é obtido somando os dois valores anteriores a ele em uma sequência numérica. Se essa instrução não for obedecida (ou seja, se não somarmos os dois últimos valores para obter o próximo da sequência), o resultado não será conforme o esperado. 

3 - **O algoritmo deve ser finito:** considere ainda o segundo exemplo. O algoritmo pode ser descrito como “para obter um valor X, devemos somar os dois valores imediatamente anteriores”. Então, apesar de ser possível obter uma sequência infinita de valores, o algoritmo é finito em suas instruções. 

Outro exemplo que sintetiza essas três características de um algoritmo é o processo de troca de pneu de um carro (considerando que o estepe está presente e em bom estado): 1. Levantar o carro do lado do pneu que está furado. 2. Desaparafusar cada um dos parafusos da roda. 3. Remover a roda. 4. Deixar a roda no chão. 5. Colocar o estepe no eixo que está sem a roda. 6. Parafusar cada um dos parafusos da roda. 7. Abaixar o carro

### Descrição narrativa de um algoritmo e implementação por blocos

Até aqui pudemos compreender o que é um algoritmo, suas características e a necessidade de lógica para elaborá-lo. No exemplo de algoritmo para troca do pneu de um carro, foram descritas as principais instruções, porém, seria possível detalhar ainda mais, indicando, por exemplo, quantos e qual a ordem dos parafusos a serem desaparafusados. No entanto, como descrever um algoritmo? Existem pelo menos três formas principais para representação de um algoritmo: **descrição narrativa, fluxograma e pseudocódigo.**