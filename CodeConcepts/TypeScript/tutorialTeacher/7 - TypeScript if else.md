An if statement can include one or more expressions which return boolean. If the boolean expression evaluates to true, a set of statements is then executed.

    if (true) 
    {
        console.log('This will always executed.');
    }
    
    if (false) {
        console.log('This will never executed.');
    }    
    

The following example includes multiple boolean expressions in the if condition.

    let x: number = 10, y = 20;
    
    if (x < y) 
    {
        console.log('x is less than y');
    } 
    

In the above example, the if condition expression `x < y` is evaluated to true and so it executes the statement within the curly { } brackets.

## if else Condition

An if else condition includes two blocks - if block and an else block. If the `if` condition evaluates to true, then the `if` block is executed. Otherwies, the `else` block is executed.

    let let x: number = 10, y = 20;
    
    if (x > y) 
    {
        console.log('x is greater than y.');
    } 
    else
    {
        console.log('x is less than or equal to y.'); //This will be executed
    }
    

In the above example, the else block will be executed. Remember: else cannot include any condition and it must follow `if` or `else if` conditions.

### else if

The else if statement can be used after the if statement.

    let x: number = 10, y = 20;
    
    if (x > y) 
    {
        console.log('x is greater than y.');
    } 
    else if (x < y)
    {
        console.log('x is less than y.'); //This will be executed
    }
    else if (x == y) 
    {
        console.log('x is equal to y');
    }
    

## Ternary operator

A ternary operator is denoted by '?' and is used as a short cut for an if..else statement. It checks for a boolean condition and executes one of the two statements, depending on the result of the boolean condition.

```
Boolean expression? First statement : second statement

```

    let x: number = 10, y = 20;
    
    x > y? console.log('x is greater than y.'): console.log('x is less than or equal to y.')
    

```
x is less than or equal to y.

```

In the above example, condition `x > y` is turned out be to false, so the second statement will be executed.

Want to check how much you know TypeScript?