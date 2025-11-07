/*
Go suporta ponteiros, permitindo passar as referências aos valores e registros dentro de seu programa.

Vamos mostrar como os ponteiros trabalham em contraste aos valores com duas funções: zeroval e zeroptr. zeroval possui um um valor. zeroval irá pegar uma cópia do ival distinta da função de chamada.

zeroptr em contraste possui um parâmetro *int, ou seja, ele leva um ponteiro int. O código *iptr no corpo da função então desreferencia o ponteiro de seu endereço de memória para o valor atual nesse endereço. Atribuir um valor para um ponteiro desreferenciado muda o valor do endereço referenciado.

A sintaxe &i fornece o endereço da memória do i, ou seja, um ponteiro para i.

Ponteiros podem ser impressos também.

zeroval não altera o i no main, mas zeroptr muda pois ele tem uma referência ao endereço da memória para essa variável.
*/

package main

import "fmt"

func zeroval(ival int) {
    ival = 0
}

func zeroptr(iptr * int) {
    *iptr = 0
}

func main() {
    i := 1
    fmt.Println("inicial: ", i)

    zeroval(i)
    fmt.Println("zeroval: ", i)

    zeroptr(&i)
    fmt.Println("zeroptr: ", i)

    fmt.Println("Ponteiro: ", &i)
}