The switch statement is used to check for multiple values and executes sets of statements for each of those values. A switch statement has one block of code corresponding to each value and can have any number of such blocks. When the match to a value is found, the corresponding block of code is executed.

```
switch(expression) { 
   case constant-expression1: { 
      //statements; 
      break; 
   } 
   case constant_expression2: { 
      //statements; 
      break; 
   } 
   default: { 
      //statements; 
      break; 
   } 
} 

```

The following rules are applied on the switch statement:

1.  The switch statement can include constant or variable expression which can return a value of any data type.
2.  There can be any number of case statements within a switch. The case can include a constant or an expression.
3.  We must use break keyword at the end of each case block to stop the execution of the case block.
4.  The return type of the switch expression and case expression must match.
5.  The default block is optional.

Consider the following example.

    let day : number = 4;
    
    switch (day) {
        case 0:
            console.log("It is a Sunday.");
            break;
        case 1:
            console.log("It is a Monday.");
            break;
        case 2:
            console.log("It is a Tuesday.");
            break;
        case 3:
            console.log("It is a Wednesday.");
            break;
        case 4:
            console.log("It is a Thursday.");
            break;
        case 5:
            console.log("It is a Friday.");
            break;
        case 6:
            console.log("It is a Saturday.");
            break;
        default:
            console.log("No such day exists!");
            break;
    }
    

In the above example, we have a variable, day, of the type number. This variable has been initialized with a value of 4. This value corresponds to a day of the week. A switch statement checks the value passed to it and executes the block of code corresponding to that value. This results in the code block for value 4 being executed, giving the result, 'It is a Thursday.'

The switch statement can also include an expression as shown below.

    let x = 10, y = 5;
    
    switch (x-y) {
        case 0:
            console.log("Result: 0");
            break;
        case 5:
            console.log("Result: 5");
            break;
        case 10:
            console.log("Result: 10");
            break;
    }
    

Want to check how much you know TypeScript?

___