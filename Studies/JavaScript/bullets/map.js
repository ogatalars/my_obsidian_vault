// Map é chamado em uma array. Pega um argumento de uma callback e retorna um NOVO ARRAY

const numbers = [1, 2, 3, 4, 5]; 
const bigNumbers = numbers.map(numero => {
    return numero * 100
})
/*
.map() works in a similar manner to 
.forEach()
Preview: Docs Loops over a given array, passing each item in the array into the callback function provided.
— the major difference is that .map() returns a new array.
*/

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animais => {
    return animais[0];
})