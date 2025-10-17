package main 

import "fmt"
import "time"

func main() {
    i := 2
    // j := 5
    fmt.Println("Escreva", j, " como ")
    switch i {
        case 1:
         fmt.Println("um")
        case 2: // case 2 ==> case i == 2
         fmt.Println("dois")
        case 3:
         fmt.Println("três")
    }

    switch time.Now().Weekday() {
        case time.Saturday, time.Sunday:
        fmt.Println("É final de semana")
        default: 
        fmt.Println("É dia de semana")
    }
}