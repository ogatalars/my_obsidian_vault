___

## Get User Input

You have already learned that `Console.WriteLine()` is used to output (print) values. Now we will use `Console.ReadLine()` to get user input.

In the following example, the user can input his or hers username, which is stored in the variable `userName`. Then we print the value of `userName`:

### Example[Get your own C# Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

    // Type your username and press enter
    Console.WriteLine("Enter username:");
    
    // Create a string variable and get user input from the keyboard and store it in the variable
    string userName = Console.ReadLine();
    
    // Print the value of the variable (userName), which will display the input value
    Console.WriteLine("Username is: " + userName);

[Run example »](https://www.w3schools.com/cs/showjava.asp?filename=demo_user_input)

___

## User Input and Numbers

The `Console.ReadLine()` method returns a `string`. Therefore, you cannot get information from another data type, such as `int`. The following program will cause an error:

### Example

    Console.WriteLine("Enter your age:");
    int age = Console.ReadLine();
    Console.WriteLine("Your age is: " + age);

The error message will be something like this:

`Cannot implicitly convert type 'string' to 'int'`

  

Like the error message says, you cannot implicitly convert type 'string' to 'int'.

Luckily, for you, you just learned from the [previous chapter (Type Casting)](https://www.w3schools.com/cs/cs_type_casting.php), that you can convert any type explicitly, by using one of the `Convert.To` methods:

### Example

    Console.WriteLine("Enter your age:");
    int age = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine("Your age is: " + age);

[Run example »](https://www.w3schools.com/cs/showjava.asp?filename=demo_user_input2)

**Note:** If you enter wrong input (e.g. text in a numerical input), you will get an exception/error message (like System.FormatException: 'Input string was not in a correct format.').

You will learn more about [Exceptions](https://www.w3schools.com/cs/cs_exceptions.php) and how to handle errors in a later chapter.

___

## C# Exercises

___