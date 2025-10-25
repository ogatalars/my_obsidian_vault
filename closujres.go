/*

Go suporta funções anônimas, que podem formar closures. Funções anônimas são úteis quando você deseja definir uma função em linha sem ter que nomeá-lo.


Essa função intSeq retorna outra função, que definimos anônimamente no corpo do intSeq. A função retornada se fecha sobre a variável i para formar o closure.


Chamamos intSeq, atribuindo o resultado (a função) para o nextInt. Esse valor de função captura seu próprio valor i, que será atualizado cada vez que chamamos o nextInt

*/

package main 

import "fmt"

func intSeq() func() int {
    i := 0
    return func() int{
        i += 1
        return i
    }
}

func main() {
    nextInt := intSeq()

    fmt.Println(nextInt())
    fmt.Println(nextInt())
    fmt.Println(nextInt())

    newInts := intSeq()
    fmt.Println(newInts())


}