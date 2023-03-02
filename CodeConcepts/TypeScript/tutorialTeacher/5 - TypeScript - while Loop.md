The while loop is another type of loop that checks for a specified condition before beginning to execute the block of statements. The loop runs until the condition value is met.

```
while (condition expression) {
    // code block to be executed
}

```

The condition expression checks for a specified condition before running the block of code.

    let i: number = 2;
    
    while (i < 4) {
        console.log( "Block statement execution no." + i )
        i++;
    }
    

```
Block statement execution no.2
Block statement execution no.3

```

In the above example, we declared a variable `i` with the value 2. The while loop checks for the value of `i` before executing the while block of code. If `i < 4`, then it executes the block. Within the block of code, we have a statement to increment the value of `i` by 1. This means, the while loop runs two times, for `i = 2`, and `i = 3`.

Note that, in the above example, if we hadn't incremented the value of `i` inside the loop, every time the loop condition was checked, `i` would have remained the same, i.e. with the initial value of 2. Since the condition `i < 4` would have always been true, the loop would have run infinite times.

## do..while loop

The do..while loop is similar to the while loop, except that the condition is given at the end of the loop. The do..while loop runs the block of code at least once before checking for the specified condition. For the rest of the iterations, it runs the block of code only if the specified condition is met.

```
do {
// code block to be executed
}
while (condition expression);

```

    let i: number = 2;
    do {
        console.log("Block statement execution no." + i )
        i++;
    } while ( i < 4)
    

```
Block statement execution no.2
Block statement execution no.3

```

In the above example, we have a variable i initialized with value 2. The loop runs the block of code once, prints "Block statement execution no.2" and increments `i` to value 3. The loop then checks for the condition `i < 4`. Since `i` is less than 4, it runs the loop again, this time printing "Block statement execution no.3" and then incrementing the value of `i` to 4. The condition `i < 4` is evaluated again. This time the condition evaluates to false and the do...while loop ends.

Let's check whether the loop runs if the value of `i` is initialized to 4 before the loop begins:

    let i: number = 4;
    do {
        console.log( "Block statement execution no." + i )
        i++;
    } while ( i < 4)
    

```
Block statement execution no.4

```

As you can see in the example above, even though the condition in the do...while loop is `i < 4`, the loop still runs once and prints "Block statement execution no.4". When the condition is evaluated at the end of the block, `i` is 4 and the condition evaluates to false, hence ending the loop!

Want to check how much you know TypeScript?