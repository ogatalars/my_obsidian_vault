Iterator -> interface iterator faz parte do framework de collections 
Java nos permite acessar elementos de uma coleção 
Possui uma subinterface Listiterator

A Interface iterator fornece 4 métodos que podem ser usados para realizar várias operações em elementos de coleçõs:
hasNext();
next();
remove();
forEachRemaining();

import java.util.ArrayList;
import java.util.Iterator;


class Main {
  public static void main(String[] args) {
    ArrayList<Integer> numeros = new ArrayList<>(); // lista de numeros
    numeros.add(1);
    numeros.add(4);
    numeros.add(12);

    System.out.println("ArrayList: " + numeros);

    //Criando uma instância de Iterator
    Iterator<Integer> it = numeros.iterator();

    int numero = it.next();
    System.out.println("Elemento :" + numero);

    while(it.hasNext()){
      it.forEachRemaining((value) -> System.out.println(value  + ","))
    }
  }
}