// Para procurar a localização dentro de um array 

const numeros = [123, 25, 78, 9, 14];

const lessThanFifteen = numeros.findIndex(num => {
    return num < 15
})
