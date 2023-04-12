___

## Display Variables

The `WriteLine()` method is often used to display variable values to the console window.

To combine both text and a variable, use the `+` character:

You can also use the `+` character to add a variable to another variable:

### Example

    string firstName = "John ";
    string lastName = "Doe";
    string fullName = firstName + lastName;
    Console.WriteLine(fullName);
    

[Try it Yourself »](https://www.w3schools.com/cs/trycs.php?filename=demo_variables3)

For numeric values, the `+` character works as a mathematical operator (notice that we use `int` (integer) variables here):

### Example

    int x = 5;
    int y = 6;
    Console.WriteLine(x + y); // Print the value of x + y
    

[Try it Yourself »](https://www.w3schools.com/cs/trycs.php?filename=demo_variables4)

From the example above, you can expect:

-   x stores the value 5
-   y stores the value 6
-   Then we use the `WriteLine()` method to display the value of x + y, which is **11**

___