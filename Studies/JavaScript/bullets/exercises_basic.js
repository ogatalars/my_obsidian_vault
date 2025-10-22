// 1 - Reversed array -> Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

//There’s a built-in array method called .reverse() that does a lot of this work for you, but you’re NOT allowed to use it here!
const reverseArray = (array) => {
    let reverse = []
    for(let i = array.length -1; i >= 0; i--) {
        reverse.push(array[i])
    }
    return reverse
}

/* greetAliens() Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”
*/ 

const greetAliens = (arr) => {
    for(let i = 0; i <= arr.length; i++) {
        console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`)
    }
}

/* 
Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

You can test your function when you’re ready by passing in the years array or by making your own array of years!
*/ 

const sortYears = (arr) => {
    return arr.sort((a,b) => b - a)
}