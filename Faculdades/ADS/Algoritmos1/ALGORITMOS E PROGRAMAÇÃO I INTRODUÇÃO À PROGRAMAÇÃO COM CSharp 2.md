### Estruturas de repetição
Considere o seguinte caso: você deseja somar os três primeiros números inteiros maiores que zero. Bem, isso é simples, basta fazer soma = 1 + 2 + 3. Até certo ponto sim, é simples, porém, e se você for solicitado a somar os mil primeiros números inteiros primos, cujo resultado será usado em um procedimento de segurança, por exemplo, durante a criptografia de um arquivo? Outro caso, considere que seu chefe pediu para você criar um programa que verifique qual o maior número primo existente com o objetivo de usar este primo em uma chave criptográfica. Como você faria? Certamente a opção por realizar todo o procedimento manualmente não é a melhor escolha.

Considere que, por qualquer motivo, uma empresa necessita apresentar na tela os 10 primeiros números positivos. Um exemplo de código pode ser visto a seguir
Console.WriteLine(“1”); 
2 Console.WriteLine(“2”); 
3 Console.WriteLine(“3”); 
... 
... 
9 Console.WriteLine(“9”); 
10 Console.WriteLine(“10”);