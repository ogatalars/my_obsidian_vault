Here, you will learn the basic syntax of Python 3.

Python statement ends with the token NEWLINE character (carriage return). It means each line in a Python script is a statement. The following Python script contains three statements in three separate lines.

    print('id: ', 1)
    print('First Name: ', 'Steve')
    print('Last Name: ', 'Jobs')
    

Use backslash character `\` to join a statement span over multiple lines, as shown below.

    if 100 > 99 and \
        200 <= 300 and \
        True != False:
            print('Hello World!')
    

Please note that the backslash character spans a single statement in one logical line and multiple physical lines, but not the two different statements in one logical line.

    >>> print('Hello  \
         World!') # a multi-line statement
    Hello World!
    >>> print('Hello') \
        print(' World!') # two statement in one logical line
    SyntaxError: invalid syntax
    

Use the semicolon `;` to separate multiple statements in a single line.

    print('id: ', 1);print('First Name: ', 'Steve');print('Last Name: ', 'Jobs')
    

Expressions in parentheses `()`, square brackets `[ ]`, or curly braces `{ }` can be spread over multiple lines without using backslashes.

    list = [1, 2, 3, 4
            5, 6, 7, 8,
            9, 10, 11, 12]
    

Too old to learn programming? at 30? Or 40 or 50? No. But...

## Indentation in Python

Leading space or tab at the beginning of the line is considered as indentation level of the line, which is used to determine the group of statements. Statements with the same level of indentation considered as a group or block.

For example, functions, classes, or loops in Python contains a block of statements to be executed. Other programming languages such as C# or Java use curly braces `{ }` to denote a block of code. Python uses indentation (a space or a tab) to denote a block of statements.

### Indentation Rules

-   Use the colon **:** to start a block and press Enter.
-   All the lines in a block must use the same indentation, either space or a tab.
-   Python recommends **four spaces** as indentation to make the code more readable. Do not mix space and tab in the same block.
-   A block can have inner blocks with next level indentation.

The following example demonstrates [if elif](https://www.tutorialsteacher.com/python/python-if-elif) blocks:

    if 10 > 5:  # 1st block starts
        print("10 is greater than 5") # 1st block
        print("Now checking 20 > 10") # 1st block
        if 20 > 10: # 1st block
            print("20 is greater than 10") # inner block
    elif: # 2nd block starts
        print("10 is less than 5") # 2nd block
        print("This will never print") # 2nd block
    

The following function contains a block with two statements.

    def SayHello(name):
        print("Hello ", name)
        print("Welcome to Python Tutorials")
    

The following example illustrates the use of indents in Python shell:

[![](https://www.tutorialsteacher.com/Content/images/python/indentation3.png)](https://www.tutorialsteacher.com/Content/images/python/indentation3.png)

Python Block in Shell

As you can see, in the Python shell, the `SayHello()` function block started after `:` and pressing Enter. It then displayed ... to mark the block. Use four space (even a single space is ok) or a tab for indent and then write a statement. To end the block, press Enter two times.

The same function can be written in IDLE or any other GUI-based IDE as shown below, using **Tab** as indentation.

[![](https://www.tutorialsteacher.com/Content/images/python/indentation2.png)](https://www.tutorialsteacher.com/Content/images/python/indentation2.png)

Python Block in IDLE

## Comments in Python

In a Python script, the symbol # indicates the start of a comment line. It is effective till the end of the line in the editor.

    # this is a comment
    print("Hello World")
    print("Welcome to Python Tutorial") #comment after a statement.
    

In Python, there is no provision to write multi-line comments, or a block comment. For multi-line comments, each line should have the `#` symbol at the start.

A triple quoted multi-line string is also treated as a comment if it is not a docstring of the [function](https://www.tutorialsteacher.com/python/python-user-defined-function) or the [class](https://www.tutorialsteacher.com/python/python-class).

    '''
    comment1
    comment2
    comment3
    '''
    

Visit [PEP 8 style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/) for more information.

## Python Naming Convetions

The Python program can contain variables, functions, classes, modules, packages, etc. Identifier is the name given to these programming elements. An identifier should start with either an alphabet letter (lower or upper case) or an underscore (\_). After that, more than one alphabet letter (a-z or A-Z), digits (0-9), or underscores may be used to form an identifier. No other characters are allowed.

-   Identifiers in Python are case sensitive, which means variables named `age` and `Age` are different.
-   Class names should use the TitleCase convention. It should begin with an uppercase alphabet letter e.g. `MyClass`, `Employee`, `Person`.
-   Function names should be in lowercase. Multiple words should be separated by underscores, e.g. `add(num)`, `calculate_tax(amount)`.
-   Variable names in the function should be in lowercase e.g., `x`, `num`, `salary`.
-   Module and package names should be in lowercase e.g., `mymodule`, `tax_calculation`. Use underscores to improve readability.
-   Constant variable names should be in uppercase e.g., `RATE`, `TAX_RATE`.
-   Use of one or two underscore characters when naming the instance attributes of a class.
-   Two leading and trailing underscores are used in Python itself for a special purpose, e.g. \_\_add\_\_, \_\_init\_\_, etc.

Visit [PEP 8 - Prescriptive Naming Conventions](https://www.python.org/dev/peps/pep-0008/#prescriptive-naming-conventions) for more information.

## Display Output

The [print()](https://www.tutorialsteacher.com/python/print-function) serves as an output statement in Python. It echoes the value of any Python expression on the Python shell.

[![Display Output in Python](https://www.tutorialsteacher.com/Content/images/python/print1.gif)](https://www.tutorialsteacher.com/Content/images/python/print1.gif)

Display Output

Multiple values can be displayed by the single `print()` function separated by comma. The following example displays values of `name` and `age` variables using the single `print()` function.

    >>> name="Ram"                
    >>> print(name) # display single variable
    Ram
    >>> age=21                          
    >>> print(name, age)# display multiple variables
    Ram 21
    >>> print("Name:", name, ", Age:",age) # display formatted output
    Name: Ram, Age: 21
    

By default, a single space `' '` acts as a separator between values. However, any other character can be used by providing a `sep` parameter.

## Getting User's Input

The `input()` function is a part of the core library of standard Python distribution. It reads the key strokes as a string object which can be referred to by a variable having a suitable name.

[![Taking User's Input in Python](https://www.tutorialsteacher.com/Content/images/python/input.gif)](https://www.tutorialsteacher.com/Content/images/python/input.gif)

Taking User's Input

Note that the blinking cursor waits for the user's input. The user enters his input and then hits Enter. This will be captured as a string.

In the above example, the `input()` function takes the user's input from the next line, e.g. 'Steve' in this case. `input()` will capture it and assign it to a `name` variable. The `name` variable will display whatever the user has provided as the input.

The `input()` function has an optional string parameter that acts as a prompt for the user.

[![Taking User's Input in Python](https://www.tutorialsteacher.com/Content/images/python/input2.gif)](https://www.tutorialsteacher.com/Content/images/python/input2.gif)

Taking User's Input

The `input()` function always reads the input as a string, even if comprises of digits. The type() function used earlier confirms this behaviour.

    >>> name=input("Enter your name: ")
    Enter your name: Steve                      
    >>> type(name)                     
    <class 'str'>                         
    >>> age=input("Enter your age: ")  
    Enter your age: 21                          
    >>> type(age)                      
    <class 'str'>
        

Visit [input() function](https://www.tutorialsteacher.com/python/input-function) for more information.