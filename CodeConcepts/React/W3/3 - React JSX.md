___

## What is JSX?

JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.

___

## Coding JSX

JSX allows us to write HTML elements in JavaScript and place them in the DOM without any `createElement()`  and/or `appendChild()` methods.

JSX converts HTML tags into react elements.

You are not required to use JSX, but JSX makes it easier to write React applications.

Here are two examples. The first uses JSX and the second does not:

### Example 2[Get your own React.js Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

Without JSX:

    const myElement = React.createElement('h1', {}, 'I do not use JSX!');
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myElement);
    

[Run Example »](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_nojsx)

As you can see in the first example, JSX allows us to write HTML directly within the JavaScript code.

JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.

___

___

## Expressions in JSX

With JSX you can write expressions inside curly braces `{ }`.

The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:

___

## Inserting a Large Block of HTML

To write HTML on multiple lines, put the HTML inside parentheses:

___

## One Top Level Element

The HTML code must be wrapped in _ONE_ top level element.

So if you like to write _two_ paragraphs, you must put them inside a parent element, like a `div` element.

JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.

Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.

A fragment looks like an empty HTML tag: `<></>`.

___

## Elements Must be Closed

JSX follows XML rules, and therefore HTML elements must be properly closed.

JSX will throw an error if the HTML is not properly closed.

___

## Attribute class = className

The `class` attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the `class` keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.

Use attribute `className` instead.

JSX solved this by using `className` instead. When JSX is rendered, it translates `className` attributes into `class` attributes.

___

## Conditions - if statements

React supports `if` statements, but not _inside_ JSX.

To be able to use conditional statements in JSX, you should put the `if` statements outside of the JSX, or you could use a ternary expression instead:

#### Option 1:

Write `if` statements outside of the JSX code:

### Example[Get your own React.js Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

Write "Hello" if `x` is less than 10, otherwise "Goodbye":

    const x = 5;
    let text = "Goodbye";
    if (x < 10) {
      text = "Hello";
    }
    
    const myElement = <h1>{text}</h1>;
    

[Run Example »](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_jsx_if)

#### Option 2:

Use ternary expressions instead:

**Note** that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, `{}`.

___

## Test Yourself With Exercises

## Exercise:

Render a <p> element without using JSX.

```
const paragraph = React.createElement(, {}, 'This is a paragraph without using JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(paragraph);

```

[Start the Exercise](https://www.w3schools.com/react/exercise.asp?filename=exercise_jsx1)

___