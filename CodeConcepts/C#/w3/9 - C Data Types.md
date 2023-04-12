___

## C# Data Types

As explained in the variables chapter, a variable in C# must be a specified data type:

### Example[Get your own C# Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

    int myNum = 5;               // Integer (whole number)
    double myDoubleNum = 5.99D;  // Floating point number
    char myLetter = 'D';         // Character
    bool myBool = true;          // Boolean
    string myText = "Hello";     // String
    

[Try it Yourself »](https://www.w3schools.com/cs/trycs.php?filename=demo_data_types)

A data type specifies the size and type of variable values.

It is important to use the correct data type for the corresponding variable; to avoid errors, to save time and memory, but it will also make your code more maintainable and readable. The most common data types are:

| Data Type | Size | Description |
| --- | --- | --- |
| int | 4 bytes | Stores whole numbers from -2,147,483,648 to 2,147,483,647 |
| long | 8 bytes | Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| float | 4 bytes | Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits |
| double | 8 bytes | Stores fractional numbers. Sufficient for storing 15 decimal digits |
| bool | 1 bit | Stores true or false values |
| char | 2 bytes | Stores a single character/letter, surrounded by single quotes |
| string | 2 bytes per character | Stores a sequence of characters, surrounded by double quotes |

___

## Numbers

Number types are divided into two groups:

**Integer types** stores whole numbers, positive or negative (such as 123 or -456), without decimals. Valid types are `int` and `long`. Which type you should use, depends on the numeric value.

**Floating point types** represents numbers with a fractional part, containing one or more decimals. Valid types are `float` and `double`.

Even though there are many numeric types in C#, the most used for numbers are `int` (for whole numbers) and `double` (for floating point numbers). However, we will describe them all as you continue to read.

___

## Integer Types

### Int

The `int` data type can store whole numbers from -2147483648 to 2147483647. In general, and in our tutorial, the `int` data type is the preferred data type when we create variables with a numeric value.

### Long

The `long` data type can store whole numbers from -9223372036854775808 to 9223372036854775807. This is used when `int` is not large enough to store the value. Note that you should end the value with an "L":

___

## Floating Point Types

You should use a floating point type whenever you need a number with a decimal, such as 9.99 or 3.14515.

The `float` and `double` data types can store fractional numbers. Note that you should end the value with an "F" for floats and "D" for doubles:

Use `float` or `double`?

The **precision** of a floating point value indicates how many digits the value can have after the decimal point. The precision of `float` is only six or seven decimal digits, while `double` variables have a precision of about 15 digits. Therefore it is safer to use `double` for most calculations.

### Scientific Numbers

A floating point number can also be a scientific number with an "e" to indicate the power of 10:

### Example

    float f1 = 35e3F;
    double d1 = 12E4D;
    Console.WriteLine(f1);
    Console.WriteLine(d1);
    

[Try it Yourself »](https://www.w3schools.com/cs/trycs.php?filename=demo_type_scientific)

___

___

## Booleans

A boolean data type is declared with the `bool` keyword and can only take the values `true` or `false`:

### Example

    bool isCSharpFun = true;
    bool isFishTasty = false;
    Console.WriteLine(isCSharpFun);   // Outputs True
    Console.WriteLine(isFishTasty);   // Outputs False
    

[Try it Yourself »](https://www.w3schools.com/cs/trycs.php?filename=demo_type_bool)

Boolean values are mostly used for conditional testing, which you will learn more about in a later chapter.

___

## Characters

The `char` data type is used to store a **single** character. The character must be surrounded by single quotes, like 'A' or 'c':

___

## Strings

The `string` data type is used to store a sequence of characters (text). String values must be surrounded by double quotes:

### Example

    string greeting = "Hello World";
    Console.WriteLine(greeting);
    

[Try it Yourself »](https://www.w3schools.com/cs/trycs.php?filename=demo_type_string)

___

## C# Exercises

___