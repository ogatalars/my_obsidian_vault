Metodos ou ações ocultas

"Encapsular significa separar o programa em partes, em cápsulas autocontidas, tornando-o mais flexível. 

Dessa forma: 
- Promove-se a reutilização de código e a segurança;
- O programa se torna mais fácil de modificar e de ar manutenção

"

Metodos get e metodos Set


Métodos para trabalharmos com encapsulamento de dados:
- setAtributo(parametro) => Métodos set são conhecidos como métodos modificadores.
- getAtributo() => métodos get são conhecidos como métodos de acesso.

public class Aluno {
 private String nome;
 public void setNome(n) {
 nome = n;
 }
}