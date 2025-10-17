package main 

import "fmt"

func main(){

    var a [5]int
    // let a = [0 0 0 0 0]
    fmt.Println("emp: ", a)

    a[4] = 100
    fmt.Println("set: ", a ) // [0 0 0 100 0 ]
    fmt.Println("get: ", a[4]) // [100]

    fmt.Println("len: ", len(a)) // [5]
}

//Nós podemos definir um valor em um índice usando a sintaxe matriz[índice] = valor, e pegar o valor com matriz[índice].
// const listaCompras = ["nintendo switch2", "taco de golf", "m&ms"] -> js
// REVER