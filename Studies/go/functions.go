package main 

import "fmt"

func mais(a int, b int) int {

    return a + b
}

func main() {
    res := mais(1, 5)
    fmt.Println("1 + 2 = ", res)
}

// Go exige retornos explícitos, ou seja, ele não vai retornar automaticamente o valor da última expressão