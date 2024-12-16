const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push
strings.push('e'); // 0(1)

//pop
strings.pop();
strings.pop(); // 0(1)

//unshift
strings.unshift('x') // 0(n)

//splice
strings.splice(2, 0, 'alien'); // 0

console.log(strings)