package main 

import "fmt"

func main() {
    s := make([]string, 3)
    fmt.Println("emp: ", s)
    // Ao contrário das matrizes, os slices são digitados apenas pelos elementos que eles contêm (não o número de elementos). Para criar um slice vazio com tamanho diferente de zero, use o padrão make. Aqui nós fizemos um slice de uma string de tamanho 3 (inicialmente com valor zero).
    s[0] = "a"
    s[1] = "b"
    s[2] = "c"

    fmt.Println("set: ", s)
    fmt.Println("get: ", s[2])
    fmt.Println("len: ", len(s))

    s = append(s, "d")



}