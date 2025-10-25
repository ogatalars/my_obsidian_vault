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

/*  Write a function subLength() that takes two parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the two characters. If there are less than two or more than two occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0

*/

const subLength = (str, char) => {
    const indices = [];
    for(let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            indices.push(i)
        }
    }
    if(indices.length !==2) {
        return 0;
    }
    return indices[1] - indices[0] + 1;
}

/* 
Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where appropriate.

*/

const groceries = (items) => {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0].item;
  if (items.length === 2) return `${items[0].item} and ${items[1].item}`;
  
  let result = '';
  for (let i = 0; i < items.length; i++) {
    if (i === items.length - 1) {
      result += `and ${items[i].item}`;
    } else if (i === items.length - 2) {
      result += `${items[i].item} `;
    } else {
      result += `${items[i].item}, `;
    }
  }
  return result;
};