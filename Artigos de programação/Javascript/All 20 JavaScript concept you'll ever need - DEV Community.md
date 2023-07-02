A Brief History of JavaScript  
JavaScript was born back in 1995 (the dark ages) when Brendan Ike conjured it up in just one week for Netscape browser. It has since evolved through the ECMAScript standard and is now a fully-featured language used for front-end web applications, server-side applications, mobile apps, and even desktop apps! Can you say "world domination"?

Alright, buckle up and get ready to explore the fascinating world of JavaScript in just 2023 words! We'll cover everything from variables to libraries like jQuery, React.js, and AngularJS. And don't worry – we've got plenty of memes and gifs along the way!

![lets do this](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDYyYmUwYzdkMDgzYTEyNWJiYjgyNGRhYmY2MGMyYWY5NDRiOGIzNiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/BpGWitbFZflfSUYuZ9/giphy.gif)

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#1-variables-and-data-types)1\. Variables and Data Types

In JS land, we have three ways to declare a variable: `var`, `let`, or `const`. While `var` is considered old-school (OG), it's best to use either `let` for reassignable variables or `const` for those that should never change.  

    // Here's how you do it:
    let age = 30;
    const name = "John";
    

Enter fullscreen mode Exit fullscreen mode

There are also various data types such as strings (`"hello"`), numbers (`42`), booleans (`true/false`), objects (`{}`) & arrays(`[]`). Don't forget about our special friends - null & undefined! 😄

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#2-operators)2\. Operators

![operators](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmFiYTEzYTE5NzhjNWNmYWY5MmM4YTA2NzQzZGMyMjVmNWJkZWM0MSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/SXx6ayaHyUzJVcXrX6/giphy-downsized.gif)

Operators help us perform operations on our data:  

    // Arithmetic operators
    result = x + y; // Addition (mathletes unite!)
    result = x - y; // Subtraction
    
    // Comparison operators
    x < y;   // Less than (party time with inequality!)
    x === y; // Strict equality (the triple equal sign means business!)
    
    // Logical operators
    (x > 0) && (y > 0);   // AND operator (both conditions must be true)
    (x > 0) || (y < 100); // OR operator (just one condition needs to be true)
    

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#3-control-structures-ifelse-amp-switch-statements)3\. Control Structures: If/Else & Switch Statements

Ever feel indecisive?  

![thinking](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTg5ZWE4NGI2Mjc2NDAwZjExMjRjZjYzYTcxMjg2NTg1OTYyZmY2YSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/kaq6GnxDlJaBq/giphy.gif)

JavaScript has your back with if/else statements!

    if(condition){
        console.log("True!");
    }else{
        console.log("False!");
    }
    

Enter fullscreen mode Exit fullscreen mode

For more complex decision-making,  
we have the `switch` statement:  

    switch(expression){
        case value1:
            // code block
            break;
        default:
            // code block if no cases match
    }
    

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#4-loops-for-amp-while)4\. Loops: For & While

Loops are perfect for when you want to do something repeatedly:  

    //For loop example
    for (let i = 0; i < n; i++) {
      console.log("I love JavaScript!");
    }
    
    //While loop example
    while(condition) {
       console.log("Keep looping until the condition is false");
    }
    

Enter fullscreen mode Exit fullscreen mode

![loop](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGM2YTU1YzQyNTE4MGQ1MGZjNzNiMTgxOTllMDE4ODAwMjg5MjU4NyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/UAafAzqMTDUJ2/giphy.gif)

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#5-functions)5\. Functions

Functions let us organize and reuse our code like a boss:  

    function functionName(parameters) {
        return "Hello " + parameters;
    }
    
    console.log(functionName("World!")); // Output: Hello World!
    

Enter fullscreen mode Exit fullscreen mode

Arrow functions make it even cooler with concise syntax:  

    const sayHi = () => "Hello!";
    console.log(sayHi()); // Output: Hello!
    

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#6-arrays)6\. Arrays

Arrays store multiple values in one variable - talk about efficient!  

    let fruits = ["apple", "banana", "grape"];
    fruits.push("strawberry");     // adds an element to the end of array.
    console.log(fruits.length);     // prints length of array.
    console.log(fruits.join(", ")); // combines all elements into a single string separated by commas.
    

Enter fullscreen mode Exit fullscreen mode

![array-cat](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2E1NjM1YzJhYjYzYTY1ZjdjZDkwNDM3MzI3NGFlNWFhYWEzYzQwOCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/kabjgjsiqjF4s/giphy-downsized.gif)

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#7-objects)7\. Objects

Objects help us group related data and methods together.  

    const person = {
      name: "John",
      age: 25,
      greet() {
        console.log(`Hi, I'm ${this.name}!`);
      },
    };
    
    console.log(person.age); // Output: 25
    person.greet();          // Output: Hi, I'm John!
    

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#8-dom-manipulation)8\. DOM Manipulation

The Document Object Model (DOM) lets us interact with HTML elements like a pro:  

    document.querySelector("h1").innerHTML = "Hello World!";
    

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#9-events-amp-event-listeners)9\. Events & Event Listeners

Make your website interactive with event listeners:  

    document.querySelector("button").addEventListener("click", () => {
        alert("Button clicked!");
    });
    

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#10-callbacks)10\. Callbacks

A callback function is a function that's passed as an argument to another function and executed later.  

    function myCallback(data) {
        console.log(`Received data: ${data}`);
    }
    
    function fetchData(callbackFn) {
        setTimeout(() => { callbackFn('Here is the data!') }, 2000);
    }
    
    fetchData(myCallback);
    

Enter fullscreen mode Exit fullscreen mode

![callback-gif](https://i.giphy.com/media/QBd2kLB5qDmysEXre9/giphy-downsized.gif)

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#11-promises)11\. Promises

Promises help us handle asynchronous code more elegantly:  

    const myPromise = new Promise((resolve, reject) => {
       setTimeout(() => { resolve('Yay! Data received.'); }, 2000);
    });
    
    myPromise.then(console.log).catch(console.error);
    

Enter fullscreen mode Exit fullscreen mode

![promise](https://i.giphy.com/media/2pBwxXtbIIhQJFp1OV/giphy.gif)

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#12-es6-syntax-features-letconst-arrow-functions-etc)12 .ES6 Syntax Features (let,const, arrow functions etc.)

JavaScript keeps getting cooler with ES6 features:

-   `let` and `const` for declaring variables.
-   Arrow functions for concise syntax.
-   Template literals for easier string interpolation.

Check out this swaggy example:  

    const myFunction = (a, b) => `${a} plus ${b} equals ${a + b}`;
    console.log(myFunction(1, 2)); // Output: "1 plus 2 equals 3"
    

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#13-functional-programming-paradigm-basics)13\. Functional Programming Paradigm Basics

JavaScript supports functional programming with first-class functions and higher-order functions.  

    const add = (x, y) => x + y;
    const multiply = (x, y) => x * y;
    
    // Higher-order function that takes a function as an argument
    function calculate(operationFn, x, y) {
        return operationFn(x,y);
    }
    
    console.log(calculate(add, 4 ,5));      // Output: 9
    console.log(calculate(multiply, 4 ,5)); // Output: 20 
    

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#14-closures)14\. Closures

Closures help us access variables from outer functions even after they've finished running:  

    function makeAdder(x){
        return function(y){
            return x + y;
        }
    }
    const add10 = makeAdder(10);
    console.log(add10(5)); //Output :15 because it remembers the value of `x` which is `10`
    

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#15-classes-amp-prototypes-in-javascript)15\. Classes & Prototypes in JavaScript

Class-based inheritance helps you create objects sharing certain properties:  

    class Animal {
       constructor(name) {
         this.name = name;
       }
    
       speak() {
         console.log(`${this.name} makes a noise.`);
       }
    }
    
    class Dog extends Animal {
       speak() {
         console.log(`${this.name} barks.`);
       }
    }
    
    let doggie = new Dog("Charlie");
    doggie.speak();                 //Output: Charlie barks.
    

Enter fullscreen mode Exit fullscreen mode

![dog-gif](https://i.giphy.com/media/RQSuZfuylVNAY/giphy.gif)

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#16-error-handling-with-trycatch-in-js)16\. Error Handling with Try…Catch in JS

Keep calm and handle errors like a pro:  

    try {
        // Code that might throw an error
    } catch (error) {
        console.error(`Oops! ${error.message}`);
    }
    

Enter fullscreen mode Exit fullscreen mode

![catch](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWVhYjYzOWIzZmE1M2Y4ZjQwODYxZDhiODQ4YmU2MGZjYTI5NmY5ZCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3o7ZesJdQccI0sO3fy/giphy-downsized.gif)

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#17-ajax-calls-with-xmlhttprequest-or-fetch-api)17\. Ajax Calls with XMLHttpRequest or Fetch API

Call APIs and fetch data like it's nobody's business:  

    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(`Error: ${error}`));
    

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#18-asynchronous-programming-paradigm-using-settimeout-setinterval-methods-etc)18\. Asynchronous Programming Paradigm using setTimeout(), setInterval() methods etc.

JavaScript can perform tasks asynchronously, too!  

    setTimeout(() => { console.log("Hello after 2 seconds!") }, 2000); // Waits for two seconds before running the function
    
    setInterval(() => {console.log("I'll keep saying this every second.")},1000); // Repeats the function every second.
    

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#19-local-storage-session-storage-of-browser-to-store-data-temporarily-between-page-refreshes-or-even-sessions)19\. Local storage / Session Storage of browser to store data temporarily between page refreshes or even sessions.

![storage](https://i.giphy.com/media/N35rW3vRNeaDC/giphy-downsized.gif)

Store your key-value pairs as easy as pie:  

    localStorage.setItem('name', 'John');
    const name = localStorage.getItem('name');
    console.log(name);                // Output: John
    
    sessionStorage.setItem('age', '25');
    const age = sessionStorage.getItem('age');
    console.log(age);                 // Output: 25
    

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/aradwan20/the-complete-guide-to-becoming-a-web-developer-part-3-401k#20-javascript-libraries-jquery-reactjs-angularjs)20\. JavaScript Libraries (jQuery, React.js, AngularJS)

Libraries help you code faster and more efficiently:

-   jQuery simplifies DOM manipulation & event handling.
-   React.js helps build user interfaces with reusable components.
-   AngularJS provides a complete framework for building dynamic web applications.

That's a wrap! You've just survived JavaScript in 2023 words! Don't forget to follow me on Twitter [@johnrushx](https://twitter.com/johnrushx) for even more laughs and coding tips!

![celebration-gif](https://i.giphy.com/media/Is1O1TWV0LEJi/giphy.gif)

___

If you didn't like this article, probably you won't like my other articles:

[21 Mind-Blowing Web Features You Probably Haven't Heard Of](https://dev.to/johnrushx/21-mind-blowing-web-features-you-probably-havent-heard-of-2b77)

[20 databases to pick in 2023 - simplified](https://dev.to/johnrushx/20-databases-to-pick-in-2023-simplified-1n0n)

[SQL, NoSql, and 5 DB types you'll never need](https://dev.to/johnrushx/sql-nosql-and-5-db-types-youll-never-need-3h85)

[I built a todo app using 9 different languages  
](https://dev.to/johnrushx/i-built-a-todo-list-using-9-different-languages-51f7)

[I built the same app 6 times! Which JS Framework is best?  
](https://dev.to/johnrushx/i-built-the-same-app-6-times-which-js-framework-is-best-2iff)