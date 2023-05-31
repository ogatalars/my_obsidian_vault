Estrutura/sintaxe de programação  que permite ao computador impor certas propriedades em um objeto (classe)

Considere uma classe chamada Veículo com as subclasses Carro, Moto e Caminhão 
- Cada uma destas classes podem ter quantos métodos forem necessários
- Cada classe pode ter qualquer tipo de método 
- Mas todas as classes devem ter, obrigatoriamente, uma ação de ligar o motor 
- O "como" cada motor é iniciado, ficará para ser implementado direto em suas classes


Conta.java

interface Conta {
  void depositar(double valor);
  void sacar(double valor);
  double getSaldo();
  
}

Poupanca.java

public class Poupanca implements Conta {
  private double saldo;

  public void depositar(double valor) {
    this.saldo  += valor;
  }
  public void getSaldo() {
    return this.saldo;
  }

  public void sacar(double valor) {
    this.saldo -= valor;
  }
}

Main.java

class Main {
  public static void main(String[] args) {
    Conta cp = new Poupanca;
    cp.depositar(732);
    cp.sacar(10);
    cp.getSaldo();
  }
}