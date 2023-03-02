TypeScript supports the following for loops:

1.  for loop
2.  for..of loop
3.  for..in loop

## for Loop

The for loop is used to execute a block of code a given number of times, which is specified by a condition.

```
for (first expression; second expression; third expression ) {
    // statements to be executed repeatedly
}

```

Here, the first expression is executed before the loop starts. The second expression is the condition for the loop to execute. And the third expression is executed after the execution of every code block.

    for (let i = 0; i < 3; i++) {
      console.log ("Block statement execution no." + i);
    }
    

```
Block statement execution no.0
Block statement execution no.1
Block statement execution no.2

```

In the above example, the first statement `let i = 0` declares and initializes a variable. The second conditional statement `i < 3` checks whether the value of `i` is less than 3 or not, and if it is then it executes the code block. The third statement `i++` increases the value of `i` by 1. Thus, the above loop will execute the block three times, until the value of `i` becomes 3.

## for...of Loop

TypeScript includes the **for...of** loop to iterate and access elements of an array, list, or tuple collection. The for...of loop returns elements from a collection e.g. array, list or tuple, and so, there is no need to use the traditional for loop shown above.

    let arr = [10, 20, 30, 40];
    
    for (var val of arr) {
      console.log(val); // prints values: 10, 20, 30, 40
    }
    

The for...of loop can also return a character from a string value.

    let str = "Hello World";
    
    for (var char of str) {
      console.log(char); // prints chars: H e l l o  W o r l d
    }
    

## for...in Loop

Another form of the for loop is `for...in`. This can be used with an array, list, or tuple. The for...in loop iterates through a list or collection and returns an index on each iteration.

    let arr = [10, 20, 30, 40];
    
    for (var index in arr) {
      console.log(index); // prints indexes: 0, 1, 2, 3
    
      console.log(arr[index]); // prints elements: 10, 20, 30, 40
    }
    

You can also use `let` instead of `var`. The difference is that the variable declared using `let` will not be accessible out of the for..in loop, as shown below.

    let arr = [10, 20, 30, 40];
    
    for (var index1 in arr) {
      console.log(index1); // prints indexes: 0, 1, 2, 3
    }
    console.log(index1); //OK, prints 3 
    
    for (let index2 in arr) {
      console.log(index2); // prints elements: 0, 1, 2, 3
    }
    console.log(index2); //Compiler Error: Cannot find index2
    
    

Want to check how much you know TypeScript?