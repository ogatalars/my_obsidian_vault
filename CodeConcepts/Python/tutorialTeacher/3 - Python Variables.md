In Python, variable is the name given to a value, so that it becomes easy to refer a value later on. In other words, a variable points to an object. A literal value is assigned to a variable using the `=` operator where the left side should be the name of a variable, and the right side should be a value. The following assigns a name to an integer value.

Now, you can refer 10 using a variable name num, as shown below.

Use the built-in [print()](https://www.tutorialsteacher.com/python/print-function) function to display the value of a variable on the [REPL](https://www.tutorialsteacher.com/python/python-interective-shell).

    >>> print(num) #display value
    10
    >>> print(num * 2) # multiply and display result
    20
    

Variables in Python are objects. Use the [type()](https://www.tutorialsteacher.com/python/type-method) function to get the class name of an object. For example, the following displays the class name of `num` variable.

    >>> type(num)
    <class 'int'>
    

The type of `num` is int. An object of int class contains a integer literal `10`.

All the variables are actually an object of a class depending upon the value.

    >>> greet='Hello World'
    >>> type(greet)
    <class 'string'>
    >>> isPythonGood = True
    >>> type(isPythonGood)
    <class 'bool'>
    

Unlike other programming languages like C# or Java, Python is a dynamically-typed language, which means you don't need to declare a type of a variable. The type will be assigned dynamically based on the assigned value.

    >>> x=100
    >>> type(x)
    <class 'int'>
    
    >>> x='Hello World'
    >>> type(a)
    <class 'string'>
    

Different operations can be performed on variables using various operators based on the type of variables. For example, the `+` operator sums up two int variables, whereas it concatenates two string type variables, as shown below.

    >>> x=5
    >>> y=5
    >>> x+y
    10
    >>> x='Hello '
    >>> y='World'
    >>> x+y
    'Hello World'
    

## Object's Identity

Each object in Python has an id. It is the object's address in memory represented by an integer value. The `id()` function returns the id of the specified object where it is stored, as shown below.

    >>> x=100
    >>> id(x)
    8791062077568
    >>> greet='Hello'
    >>> id(greet)
    4521652332
    

An id will be changed if a variable changed to different value.

    >>> x=100
    >>> id(x)
    879106207
    >>> x='Hello'
    >>> id(x)
    2354658
    

Multiple variables assigned to the same literal value will have the same id, for example:

    >>> x=100
    >>> id(x)
    879106207
    >>> y=x
    >>> id(y)
    879106207
    >>> z=100
    >>> id(z)
    879106207
    

Thus, Python optimize memory usage by not creating separate objects if they point to same value.

## Multiple Variables Assignment

You can declare multiple variables and assign values to each variable in a single statement, as shown below.

In the above example, the first int value `10` will be assigned to the first variable x, the second value to the second variable y, and the third value to the third variable z. Assignment of values to variables must be in the same order in they declared.

You can also declare different types of values to variables in a single statement, as shown below.

    >>> x, y, z = 10, 'Hello', True
    

Assign a value to each individual variable separated by a comma will throw a syntax error, as shown below.

    >>> x = 10, y = 'Hello', z = True
    SyntaxError: can't assign to literal
    

The type of variables depends on the types of assigned value.

    >>> x, y, z = 10, 'Hello', True
    >>> type(x)
    <class 'int'>
    >>> type(y)
    <class 'string'>
    >>> type(z)
    <class 'bool'>
    

## Naming Conventions

Any suitable identifier can be used as a name of a variable, based on the following rules:

1.  The name of the variable should start with either an alphabet letter (lower or upper case) or an underscore (\_), but it cannot start with a digit.
2.  More than one alpha-numeric characters or underscores may follow.
3.  The variable name can consist of alphabet letter(s), number(s) and underscore(s) only. For example, `myVar`, `MyVar`, `_myVar`, `MyVar123` are valid variable names, but `m*var`, `my-var`, `1myVar` are invalid variable names.
4.  Variable names in Python are case sensitive. So, `NAME`, `name`, `nAME`, and `nAmE` are treated as different variable names.
5.  Variable names cannot be a reserved [keywords](https://www.tutorialsteacher.com/python/python-keywords) in Python.