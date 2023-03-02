TypeScript is an open-source, object-oriented language developed and maintained by Microsoft, licensed under Apache 2 license.

TypeScript extends JavaScript by adding data types, classes, and other object-oriented features with type-checking. It is a typed superset of JavaScript that compiles to plain JavaScript.

Official website: [https://www.typescriptlang.org](https://www.typescriptlang.org//index.html)

Source code: [https://github.com/Microsoft/TypeScript](https://github.com/Microsoft/TypeScript)

## TypeScript Version History

| Version | Released Date |
| --- | --- |
| TypeScript 0.8 | October 2012 |
| TypeScript 0.9 | June 2013 |
| TypeScript 1.0 | October 2014 |
| TypeScript 2.0 | September 2016 |
| TypeScript 3.0 | July 2018 |
| TypeScript 4.0 - latest release | August 2020 |

## Why TypeScript?

[JavaScript](https://www.tutorialsteacher.com/javascript/what-is-javascript) is a dynamic programming language with no type system. JavaScript provides primitive types like [string](https://www.tutorialsteacher.com/javascript/javascript-string), [number](https://www.tutorialsteacher.com/javascript/javascript-number), [object](https://www.tutorialsteacher.com/javascript/javascript-object), etc., but it doesn't check assigned values. [JavaScript variables](https://www.tutorialsteacher.com/javascript/javascript-variable) are declared using the var keyword, and it can point to any value. JavaScript doesn't support classes and other object-oriented features (ECMA2015 supports it). So, without the type system, it is not easy to use JavaScript to build complex applications with large teams working on the same code.

The type system increases the code quality, readability and makes it easy to maintain and refactor codebase. More importantly, errors can be caught at compile time rather than at runtime.

Hence, the reason to use TypeScript is that it catches errors at compile-time, so that you can fix it before you run code. It supports object-oriented programming features like data types, classes, enums, etc., allowing JavaScript to be used at scale.

TypeScript compiles into simple JavaScript. The TypeScript compiler is also implemented in TypeScript and can be used with any browser or JavaScript engines like [Node.js](https://www.tutorialsteacher.com/nodejs). TypeScript needs an ECMAScript 3 or higher compatible environment to compile. This is a condition met by all major browsers and JavaScript engines today.

Some of the most popular JavaScript frameworks like Angular.js and WinJS are written in TypeScript.

## How to use TypeScript?

TypeScript code is written in a file with `.ts` extension and then compiled into JavaScript using the TypeScript compiler. A TypeScript file can be written in any code editor. A TypeScript compiler needs to be installed on your platform. Once installed, the command `tsc <filename>.ts` compiles the TypeScript code into a plain JavaScript file. JavaScript files can then be included in the HTML and run on any browser.

[![](https://www.tutorialsteacher.com/Content/images/typescript/typescript-workflow.png)](https://www.tutorialsteacher.com/Content/images/typescript/typescript-workflow.png)

Compile TypeScript to JavaScript

## TypeScript Features

-   **Cross-Platform:** TypeScript runs on any platform that JavaScript runs on. The TypeScript compiler can be installed on any Operating System such as Windows, macOS, and Linux.
-   **Object-Oriented Language:** TypeScript provides powerful features such as Classes, Interfaces, and Modules. You can write pure object-oriented code for client-side as well as server-side development.
-   **Static type-checking:** TypeScript uses static typing. This is done using type annotations. It helps type checking at compile time. Thus, you can find errors while typing the code without running your script each time. Additionally, using the type inference mechanism, if a variable is declared without a type, it will be inferred based on its value.
-   **Optional Static Typing:** TypeScript static typing is optional, if you prefer to use JavaScript's dynamic typing.
-   **DOM Manipulation:** Like JavaScript, TypeScript can be used to manipulate the DOM.
-   **ES 6 Features:** TypeScript includes most features of planned [ECMAScript](https://www.tutorialsteacher.com/articles/what-is-ecmascript) 2015 (ES 6, 7) such as class, interface, Arrow functions etc.

## TypeScript Advantages

1.  TypeScript is an open-source language with continuous development and maintenance by Microsoft.
2.  TypeScript runs on any browser or JavaScript engine.
3.  TypeScript is similar to JavaScript and uses the same syntax and semantics. All of TypeScript's code finally gets converted into JavaScript. This allows a quicker learning curve for front-end developers currently coding in JavaScript.
4.  TypeScript is also closer in syntax to backend languages like Java and Scala. This helps backend developers write front-end code faster.
5.  TypeScript code can be called from an existing JavaScript code. TypeScript also works with existing JavaScript frameworks and libraries without any issues.
6.  The TypeScript Definition file, with .d.ts extension, provides support for existing JavaScript libraries like Jquery, D3.js, etc. So, TypeScript code can add JavaScript libraries using type definitions to avail the benefits of type-checking, code autocompletion, and documentation in existing dynamically-typed JavaScript libraries.
7.  TypeScript has support for the latest JavaScript features from [ECMAScript](https://www.tutorialsteacher.com/articles/what-is-ecmascript) 2015 . It includes features from ES6 and ES7 that can run in ES5-level JavaScript engines like Node.js. This offers a massive advantage of using features from future JavaScript versions in current JavaScript engines.
8.  TypeScript has easy integration with task runner tools like Grunt and Gulp to automate the workflow.

Want to check how much you know TypeScript?