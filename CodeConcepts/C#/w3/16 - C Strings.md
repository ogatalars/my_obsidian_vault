___

## C# Strings

Strings are used for storing text.

A `string` variable contains a collection of characters surrounded by double quotes:

A string variable can contain many words, if you want:

___

## String Length

A string in C# is actually an object, which contain properties and methods that can perform certain operations on strings. For example, the length of a string can be found with the `Length` property:

### Example

    string txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    Console.WriteLine("The length of the txt string is: " + txt.Length);
    

[Try it Yourself »](https://www.w3schools.com/cs/trycs.php?filename=demo_strings_length)

___

## Other Methods

There are many string methods available, for example `ToUpper()` and `ToLower()`, which returns a copy of the string converted to uppercase or lowercase:

### Example

    string txt = "Hello World";
    Console.WriteLine(txt.ToUpper());   // Outputs "HELLO WORLD"
    Console.WriteLine(txt.ToLower());   // Outputs "hello world"
    

[Try it Yourself »](https://www.w3schools.com/cs/trycs.php?filename=demo_strings_toupper)

___