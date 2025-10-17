package main 

import "fmt"

func main() {

    i := 1
    for i <= 3 {
        fmt.Println(i) // print primeiro o valor 1,ai depois soma mais e vira o valor 2 e ai depois valor 3 
        i = i + 1
    }

    for j := 0; j < 3; j++ { // JS
        fmt.Println(j) // 0, 1, 2
    }

    for i := range 3 { // Python. Range leia-se entre o valor de i e o valor escrito DEPOIS da palavra range
        fmt.Println('range', i)
    }

    for { 
        fmt.Println('loop') //? looping infinito?
        break
    }

    for n:= range 6 { // Python. Quando não se fala que é nada, entende-se que é zero. 
        if n%2 == 0 {
            continue
        }
        fmt.Println(n)
    }
}