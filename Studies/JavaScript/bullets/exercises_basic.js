// Reversed array -> Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in array method called .reverse() that does a lot of this work for you, but you’re NOT allowed to use it here!
const reverseArray = (array) => {
    let reverse = []
    for(let i = array.length -1; i >= 0; i--) {
        reverse.push(array[i])
    }
    return reverse
}