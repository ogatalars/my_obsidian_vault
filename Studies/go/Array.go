package main 

import "fmt"

func main(){

    var a [5]int
    fmt.Println("emp: ", a)

    a[4] = 100
    fmt.Println("set: ", a )
    fmt.Printlln("get: ", a[4])
}

//Nós podemos definir um valor em um índice usando a sintaxe matriz[índice] = valor, e pegar o valor com matriz[índice].