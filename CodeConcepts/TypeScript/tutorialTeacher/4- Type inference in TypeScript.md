TypeScript is a typed language. However, it is not mandatory to specify the type of a variable. TypeScript infers types of variables when there is no explicit information available in the form of type annotations.

Types are inferred by TypeScript compiler when:

-   Variables are initialized
    
-   Default values are set for parameters
    
-   Function return types are determined
    

For example,

`var a = "some text"`

Here, since we are not explicitly defining `a: string` with a type annotation, TypeScript infers the type of the variable based on the value assigned to the variable. The value of a is a string and hence the type of a is inferred as string.

Consider the following example:

    var a = "some text";
    var b = 123;
    a = b; // Compiler Error: Type 'number' is not assignable to type 'string'
    

The above code shows an error because while inferring types, TypeScript inferred the type of variable `a` as string and variable `b` as number. When we try to assign `b` to `a`, the compiler complains saying a number type cannot be assigned to a string type.

## Type inference in complex objects

There may be scenarios where an object may be initialized with multiple types.

For example:

`var arr = [ 10, null, 30, 40 ];`

In the above example, we have an array that has the values 10, null, 30, and, 40 . TypeScript looks for the most common type to infer the type of the object. In this case, it picks the one thats is compatible with all types i.e. number, as well as null.

Consider another example:

`var arr = [0, 1, "test"];`

Here, the array has values of type number as well as type string. In such cases, the TypeScript compiler looks for the most common type to infer the type of the object but does not find any super type that can encompass all the types present in the array. In such cases, the compiler treats the type as a union of all types present in the array. Here, the type would be `(string | number)` which means that the array can hold either string values or number values. This is called [union type](https://www.tutorialsteacher.com/typescript/typescript-union).

Lets try to add a new element to the array:

    var arr = [0, 1, "test"]; 
    arr.push("str") 
    

The compiler accepts the new value since the new value is of type string which is okay.

Now, lets try to add a new type to the array which was not already a part of the array:

    var arr = [0, 1, "test"]; 
    arr.push("str") // OK
    arr.push(true); // Compiler Error: Argument of type 'true' is not assignable to parameter of type 'string | number'
    

The above code will show a compiler error because `boolean` is not a part of union `(string | number)`.

The return type of a function is also inferred by the returning value. For example:

    function sum(a: number, b: number )
    {
        return a + b;    
    }
    var total: number = sum(10,20); // OK
    var str: string = sum(10,20); // Compiler Error 
    

In the above function, return type of the function `sum` is number. So, the result can be stored in a number type variable but not a string type variable.

Thus, type inference is helpful in type-checking when there are no explicit type annotations available.

Want to check how much you know TypeScript?