Welcome to Part 2 of “The Complete Guide to Becoming a Web Developer.” In this part, we dive into one of the most critical components of web development: JavaScript. This powerful scripting language brings interactivity to your web pages and forms the backbone of modern web applications.

If you want a refresher or the beginning of the story, you should start with part one

In “JavaScript 101: Basics and Modern JS Syntax,” we’ll explore foundational concepts such as variables, data types, and [functions](https://nerdleveltech.com/javascript-functions-why-theyre-essential-to-understand-easy-guide-part2/), as well as modern ES6 features.

## Table of Contents

-   [Basics of JS Syntax](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#basics-of-js-syntax)
    -   [What is JavaScript?](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#what-is-java-script)
    -   [Getting Started with JavaScript](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#getting-started-with-java-script)
    -   [Variables](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#variables)
        -   [var](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#var)
        -   [let](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#let)
    -   [Constants](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#constants)
        -   [const](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#const)
-   [Data Types and Structures](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#data-types-and-structures)
    -   [Data Types in JavaScript](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#data-types-in-java-script)
        -   [Number](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#number)
        -   [String](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#string)
        -   [Boolean](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#boolean)
        -   [Null and Undefined](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#null-and-undefined)
    -   [Data Structures: Objects and Arrays](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#data-structures-objects-and-arrays)
        -   [Objects](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#objects)
            -   [Destructuring Objects](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#destructuring-objects)
        -   [Arrays](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#arrays)
            -   [Manipulating an Array](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#manipulating-an-array)
            -   [The Spread Operator and Rest Parameters](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#the-spread-operator-and-rest-parameters)
-   [Functions](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#functions)
    -   [Function Parameters and Arguments](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#function-parameters-and-arguments)
        -   [Return Values](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#return-values)
    -   [Types of Functions in JavaScript](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#types-of-functions-in-java-script)
        -   [Function Declarations](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#function-declarations)
        -   [Function Expressions](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#function-expressions)
        -   [Arrow Functions](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#arrow-functions)
        -   [Object Methods](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#object-methods)
    -   [The “this” Keyword](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#the-this-keyword)
-   [ECMAScript](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#ecma-script)
    -   [Promises and Async/Await](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#promises-and-async-await)
-   [Conclusion:](https://nerdleveltech.com/the-complete-guide-to-becoming-a-web-developer-part-2/#conclusion)

## Basics of JS Syntax

Welcome to JavaScript, the backbone of modern web development! Let’s get started by understanding its fundamentals and exploring the modern syntax it offers. Don’t worry if you’re a beginner or new to coding – we’ll start from the very basics.

### What is JavaScript?

JavaScript is a high-level, interpreted programming language that is a cornerstone of the web. It adds interactivity to your website and allows you to create rich web applications. If HTML is the skeleton of a website and CSS its clothes, JavaScript is the brains behind the operation, giving life to everything!

### Getting Started with JavaScript

You don’t need anything fancy to write JavaScript. You can start writing JavaScript right in your web browser’s developer console. To open it, right-click on any webpage, select ‘Inspect’, and then click on ‘Console’. Try typing the following line:

    console.log("Hello, World!");
    

Congratulations! You’ve written your first line of JavaScript.

### Variables

Variables in JavaScript are containers for data. They can hold numbers, text (strings), and even complex data structures like objects and arrays. Here’s how you create a variable:

    let greeting = "Hello, World!";
    

Here, `greeting` is a variable that holds the string “Hello, World!”. You can use `var` instead of `let` to declare a variable, but `let` is preferred in modern JavaScript because it has block-scope.

In JavaScript, you declare a variable with one of three keywords: `var`, `let`, or `const`. These three keywords handle scope differently and have different rules for use.

#### var

`var` is the oldest way to declare variables. It is function-scoped, meaning a variable declared inside a function with `var` is only available within that function. However, `var` doesn’t have block scope. This means if a variable is declared inside a block, like an `if` statement or a `for` loop, it’s actually available outside of that block.

Here’s an example:

    function sayHello() {
      var greeting = "Hello, World!";
      console.log(greeting);  // outputs: Hello, World!
    }
    
    sayHello();
    console.log(greeting);  // ReferenceError: greeting is not defined
    

Here, `greeting` is only available inside the `sayHello` function.

    if (true) {
      var name = "Alice";
    }
    
    console.log(name);  // outputs: Alice
    

Even though `name` is declared inside the `if` block, it’s available outside the block because `var` doesn’t have block scope.

#### let

`let` is a newer way to declare variables, introduced in ES6 (also known as ES2015). Unlike `var`, `let` is block-scoped. This means a variable declared with `let` is only available within the block where it’s declared.

    if (true) {
      let name = "Alice";
    }
    
    console.log(name);  // ReferenceError: name is not defined
    

Here, `name` is not available outside the `if` block because `let` has block scope.

### Constants

If you have a value that won’t change throughout your program, you can declare it as a constant:

    const pi = 3.14159;
    

#### const

`const` is another way to declare variables, also introduced in ES6. `const` is block-scoped like `let`, but it has an extra rule: you can’t reassign a `const` variable. Once you assign a value to a `const` variable, you can’t change that value.

    const pi = 3.14159;
    pi = 3.14;  // TypeError: Assignment to constant variable.
    

In this example, `secondsInMinute` and `minutesInHour` are constants. Because we’ve used `const` for these variables, we can be sure that their values will never change elsewhere in the code.

However, it’s important to note that `const` in JavaScript isn’t quite the same as constants in some other languages. In JavaScript, `const` only means that the variable itself cannot be reassigned. If the variable is an object or array, the contents of the object or array can still be changed:

    const person = {
      name: "Alice",
      age: 25
    };
    
    person.age = 26;  // This is fine
    person = { name: "Bob", age: 30 };  // TypeError: Assignment to constant variable.
    

In this example, changing the `age` property of the `person` object is allowed, even though `person` is a `const`. However, trying to assign a new object to `person` results in an error.

You’re saying “I have a constant identifier `person` which points to an object in memory.” This is what you can’t change: `person` will always point to that particular object. You cannot make `person` point to a different object or a different type of data.

But `const` doesn’t make the actual object itself immutable. The object `person` refers to is still fully modifiable: you can change its properties, add new properties, delete properties, etc.

Declaring a constant can help make your code easier to understand because you know that wherever that constant is used, it always represents the same value. You can use it in such as:

    const secondsInMinute = 60;
    const minutesInHour = 60;
    const secondsInHour = secondsInMinute * minutesInHour;
    

## Data Types and Structures

### Data Types in JavaScript

In JavaScript, we primarily deal with a few key data types: `Number`, `String`, `Boolean`, `Object`, `Null`, and `Undefined`.

#### Number

The `Number` type is used for any numeric type, whether it’s an integer or a floating-point number.

    let integer = 10;
    let floatingPoint = 3.14159;
    

#### String

A `String` is a sequence of characters used to represent text. You can declare strings using single quotes, double quotes, or backticks.

    let singleQuoted = 'Hello, World!';
    let doubleQuoted = "Hello, World!";
    let backticks = `Hello, World!`;
    

#### Boolean

A `Boolean` can be one of two values: `true` or `false`. It’s typically used for conditions and comparisons.

    let isHappy = true;
    let isSad = false;
    

#### Null and Undefined

`Null` and `Undefined` are two distinct types in JavaScript, each with a single value. `Null` is an assignment value that means no value or no object. It’s intentionally nothing. `Undefined` means a variable has been declared but has not yet been assigned a value.

    let nothing = null;
    let somethingUndefined;
    console.log(somethingUndefined); // Outputs: undefined
    

### Data Structures: Objects and Arrays

JavaScript offers complex data structures like `Objects` and `Arrays`.

#### Objects

Objects in JavaScript are collections of key-value pairs. They provide a way to group related data and functions together.

    let person = {
      name: "Alice",
      age: 25,
      greet: function() {
        console.log(`Hello, my name is ${this.name}`);
      }
    };
    
    person.greet(); // Outputs: Hello, my name is Alice
    

You can access properties of an object using dot notation, as shown above, or bracket notation (`person['name']`).

##### Destructuring Objects

Destructuring is a convenient way of extracting multiple values from data stored in objects and arrays.

    let person = {
      name: "Alice",
      age: 25
    };
    
    let { name, age } = person;
    
    console.log(name); // Outputs: Alice
    console.log(age); // Outputs: 25
    

#### Arrays

Arrays are used to store multiple values in a single variable. You can access elements of an array using their index (starting from 0).

    let colors = ['red', 'green', 'blue'];
    
    console.log(colors[0]); // Outputs: red
    

##### Manipulating an Array

There are several built-in methods to manipulate arrays, such as `push` (add element to the end), `pop` (remove element from the end), `shift` (remove element from the beginning), `unshift` (add element to the beginning), and more.

    let colors = ['red', 'green', 'blue'];
    colors.push('yellow');
    
    console.log(colors); // Outputs: ['red', 'green', 'blue', 'yellow']
    

##### The Spread Operator and Rest Parameters

The spread operator (`...`) allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

    let colors1 = ['red', 'green', 'blue'];
    let colors2 = [...colors1, 'yellow'];
    
    console.log(colors2); // Outputs: ['red', 'green', 'blue', 'yellow']
    

Similarly, rest parameters are used in function definitions, allowing you to represent an indefinite number of arguments as an array.

    function sum(...numbers) {
      return numbers.reduce((a, b) => a + b);
    }
    
    console.log(sum(1, 2, 3, 4, 5)); // Outputs: 15
    

These are the fundamental building blocks of JavaScript.

In the next section, we’ll go over Functions, and further expand your JavaScript toolbox.

## Functions

In JavaScript, functions are blocks of code designed to perform a particular task. They are executed when they’re invoked (called). A JavaScript function is defined with the `function` keyword, followed by a name, and a pair of parentheses `()`.

    function greet() {
      console.log("Hello, World!");
    }
    
    greet();  // Outputs: Hello, World!
    

### Function Parameters and Arguments

Functions can take parameters, which are values you supply to the function so that the function can do something utilizing those values. These values are called arguments.

    function greet(name) {
      console.log(`Hello, ${name}!`);
    }
    
    greet("Alice");  // Outputs: Hello, Alice!
    

#### Return Values

Functions can also return values. This is a way for a function to output a result that can be used in your code.

    function add(a, b) {
      return a + b;
    }
    
    let sum = add(1, 2);
    console.log(sum);  // Outputs: 3
    

### Types of Functions in JavaScript

In JavaScript, we have different ways to declare a function: function declarations, function expressions, arrow functions, and methods within objects.

#### Function Declarations

Function declarations are the standard function in JavaScript. They’re declared with the `function` keyword, followed by the name of the function.

    function greet() {
      console.log("Hello, World!");
    }
    

#### Function Expressions

Function expressions are functions that are assigned to a variable. They can be named or anonymous.

    let greet = function() {
      console.log("Hello, World!");
    }
    

#### Arrow Functions

Arrow functions were introduced in ES6 as a more concise syntax for writing function expressions. They are especially useful for short, simple functions, and they work well with higher-order functions that take other functions as arguments.

    let greet = () => {
      console.log("Hello, World!");
    }
    

#### Object Methods

Functions that are part of JavaScript objects are called methods.

    let person = {
      name: "Alice",
      greet: function() {
        console.log(`Hello, my name is ${this.name}`);
      }
    };
    
    person.greet();  // Outputs: Hello, my name is Alice
    

Here, the `greet` method uses the `this` keyword to refer to the `person` object. In this case, `this` allows the `greet` method to access other properties of the `person` object.

### The “this” Keyword

The JavaScript `this` keyword is used in methods to refer to the object that the method belongs to. The value of `this` depends on how a function is called. It’s a complex topic, but here are the basics.

In a method, `this` refers to the owner object:

    let person = {
      name: "Alice",
      greet: function() {
        console.log(`Hello, my name is ${this.name}`);
      }
    };
    
    person.greet();  // Outputs: Hello, my name is Alice
    

In a regular function (not a method or arrow function), `this` refers to the global object (`window` in a browser, `global` in Node.js):

    function greet() {
      console.log(this);  // Outputs: the global object
    }
    
    greet();
    

In an event handler, `this` refers to the element that received the event:

    button.addEventListener('click', function() {
      console.log(this);  // Outputs: the element that was clicked
    });
    

It’s worth noting that arrow functions don’t have their own `this`. In arrow functions, `this` refers to the `this` of the enclosing lexical context.

**P.S.** Functions and `this` keyword are crucial steps in your JavaScript journey.

## ECMAScript

We discussed the Let and Const, Arrow Functions, Template Literals, Rest Parameters, and Spread Operator. Please go over the above topics to get more insights or if you want more details you better give this article [(ECMAScript ES6+: A Comprehensive Guide to Modern JavaScript)](https://nerdleveltech.com/ecmascript-es6-a-comprehensive-guide-to-modern-javascript/) a read.

Meanwhile, let’s touch on the promises and the Async/Await next.

### Promises and Async/Await

Promises and async/await make dealing with asynchronous code more manageable. A Promise is an object representing the eventual completion or failure of an asynchronous operation. The async/await syntax provides a more readable and cleaner way to work with promises.

    async function fetchUser() {
      try {
        let response = await fetch('https://api.github.com/users/octocat');
        let data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    fetchUser();
    

These are just some of the features introduced in ES6 and beyond. Each of these features makes JavaScript more powerful and easier to use, and understanding them is key to mastering modern JavaScript.

**P.S.** When you’re ready to read more about Promises and Async / Await and get more insights with great details, you can head to this article: [Understand the Asynchronous JavaScript: Callbacks, Promises, and Async/Await](https://nerdleveltech.com/understand-the-asynchronous-javascript-callbacks-promises-and-async-await/)

## Conclusion:

We’ve reached the end of “JavaScript 101: Basics and Modern JS Syntax”, a significant milestone on our journey to mastering web development. In this segment, we’ve thoroughly explored the fundamental aspects of JavaScript, and we’ve familiarized ourselves with modern JS syntax. We now have a good understanding of variables, data types, functions, and ES6 features, all of which are essential tools in a developer’s toolbox.

However, the journey doesn’t end here. As we continue to dive deeper into JavaScript, we’ll unlock even more of its potential to create engaging, interactive web experiences.

Next up, we’re going to bring life to static web pages and bridge the gap between front-end and back-end. In our upcoming articles, “Interacting with the DOM” and “Asynchronous JavaScript, AJAX, JSON, and APIs: A Practical Guide,” we’ll explore how JavaScript interacts with the web page’s Document Object Model (DOM), making the page dynamic and interactive.

We’ll also dive into asynchronous JavaScript, where we’ll learn to deal with operations that take time to complete without blocking the rest of our code. We’ll explore AJAX (Asynchronous JavaScript And XML), learn how to work with JSON data and understand how APIs work.

Get ready to level up your JavaScript skills and bring your web development knowledge to new heights. Stay tuned!