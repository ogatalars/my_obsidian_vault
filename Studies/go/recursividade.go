// Go suporta funções recursivas -> NÂO USE RECURSVIDADE O GO 
// Essa função facct chama a si mesma até atingir o caso de facct(0)

package main 

import "fmt"

func fact(n int) int {
    if n == 0 {
        return 1
    }
    return n * fact(n-1)
}

func main() {
    fmt.Println(7)
}