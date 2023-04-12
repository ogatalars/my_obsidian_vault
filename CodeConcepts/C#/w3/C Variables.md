___

## C# Variables

Variables are containers for storing data values.

In C#, there are different **types** of variables (defined with different keywords), for example:

-   `int` - stores integers (whole numbers), without decimals, such as 123 or -123
-   `double` - stores floating point numbers, with decimals, such as 19.99 or -19.99
-   `char` - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes
-   `string` - stores text, such as "Hello World". String values are surrounded by double quotes
-   `bool` - stores values with two states: true or false

___

## Declaring (Creating) Variables

To create a variable, you must specify the type and assign it a value:

Where _type_ is a C# type (such as `int` or `string`), and _variableName_ is the name of the variable (such as **x** or **name**). The **equal sign** is used to assign values to the variable.

To create a variable that should store text, look at the following example:

### Example

Create a variable called **name** of type `string` and assign it the value "**John**":

    string name = "John";
    Console.WriteLine(name);
    

[Try it Yourself »](https://www.w3schools.com/cs/trycs.php?filename=demo_variables)

To create a variable that should store a number, look at the following example:

### Example

Create a variable called **myNum** of type `int` and assign it the value **15**:

    int myNum = 15;
    Console.WriteLine(myNum);
    

[Try it Yourself »](https://www.w3schools.com/cs/trycs.php?filename=demo_variables_int)

You can also declare a variable without assigning the value, and assign the value later:

Note that if you assign a new value to an existing variable, it will overwrite the previous value:

### Example

Change the value of `myNum` to 20:

    int myNum = 15;
    myNum = 20; // myNum is now 20
    Console.WriteLine(myNum);

[Try it Yourself »](https://www.w3schools.com/cs/trycs.php?filename=demo_variables_override)

___

## Other Types

A demonstration of how to declare variables of other types:

### Example

    int myNum = 5;
    double myDoubleNum = 5.99D;
    char myLetter = 'D';
    bool myBool = true;
    string myText = "Hello";
    

You will learn more about [data types](https://www.w3schools.com/cs/cs_data_types.php) in a later chapter.

___