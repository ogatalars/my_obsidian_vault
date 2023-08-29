Para o desenvolvimento de jogos digitais e softwares em geral, deve-se fazer um planejamento cuidadoso antes de iniciar a codificação. É importante identificar elementos que englobam certas variáveis e funções e modularizá-los em um código à parte. Se em seu jogo houver um dragão, por exemplo, algumas variáveis irão caracterizá-lo, como força e vida, e outras funções determinarão suas ações, como atacar e sofrer dano. Todo esse código pode ser modularizado em um código à parte, que diz respeito somente ao dragão.

A vantagem de modularizar trechos do código é a possibilidade de reduzir a extensão do seu código principal, deixando-o mais legível. A modularização também facilita a localização e a reutilização de todo o código referente ao dragão. Imagine que você queira criar três dragões em seu jogo. Sem modularizar, você teria que replicar mais duas vezes o mesmo código. Isso é uma péssima prática, que induz a erros, dificulta ajustes futuros e aumenta desnecessariamente o tamanho do código. Com o código já modularizado, é muito mais fácil criar três dragões a partir de um mesmo código, como veremos adiante.

Essa modularização envolve uma outra forma de enxergar o código e programar. Em C#, esse paradigma de programação se chama orientação a objetos, e o código separado do código principal é denominado classe. Mas antes de entrarmos nos detalhes da implementação, vamos entender melhor o que é esse código “separado”.


### Definição e utilização de TAD

