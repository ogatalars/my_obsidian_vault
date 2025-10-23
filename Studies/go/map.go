// maps são tipos de dados associativos padrões no GO (HASHES OU DICIONARIOS)

// Para criar um map vazio, use o padrão make: make(map[tipo-chave]tipo-val)

package main 

import "fmt"

func main () {
    m := make(map[string]int)

    m["k1"] = 7
    m["k2"] = 13

    fmt.Println("map: ", m)

    v1 := m["k1"]
    fmt.Println("v1: ", v1)

    n := map[string]int{"foo": 1, "bar": 2}


}