package main 

import "fmt"

func mais(a int, b int) int {

    return a + b
}

func main() {
    res := mais(1, 5)
    fmt.Println("1 + 2 = ", res)
    // Go exige retornos explícitos, ou seja, ele não vai retornar automaticamente o valor da última expressão
    a, b := vals()
    fmt.Println(a)
    fmt.Println(b)

    _, c := vals() // Se você quer apenas um subconjunto de valores de retorno, use o identificador em branco _.
    fmt.Println(c)
}


