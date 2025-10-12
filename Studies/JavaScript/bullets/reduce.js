// O metodo reduce retorna um valor unico iterando por elementos de uma array , mas reduzindo o array


const numbers = [1, 45, 6, 10, 4];

const somaNumeros = numbers.reduce((acumulador, valorCorrent) => {
    return acumulador + valorCorrent
})