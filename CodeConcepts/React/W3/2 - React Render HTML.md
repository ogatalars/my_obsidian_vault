___

React's goal is in many ways to render HTML in a web page.

React renders HTML to the web page by using a function called `ReactDOM.render()`.

___

## The Render Function

The `ReactDOM.render()` function takes two arguments, HTML code and an HTML element.

The purpose of the function is to display the specified HTML code inside the specified HTML element.

But render where?

There is another folder in the root directory of your React project, named "public". In this folder, there is an `index.html` file.

You'll notice a single `<div>` in the body of this file. This is where our React application will be rendered.

### Example[Get your own React.js Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

Display a paragraph inside an element with the id of "root":

    ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

The result is displayed in the `<div id="root">` element:

    <body>
      <div id="root"></div>
    </body>
    

[Run Example »](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_render1)

Note that the element id does not have to be called "root", but this is the standard convention.

___

___

## The HTML Code

The HTML code in this tutorial uses JSX which allows you to write HTML tags inside the JavaScript code:

Do not worry if the syntax is unfamiliar, you will learn more about JSX in the next chapter.

### Example[Get your own React.js Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

Create a variable that contains HTML code and display it in the "root" node:

    const myelement = (
      <table>
        <tr>
          <th>Name</th>
        </tr>
        <tr>
          <td>John</td>
        </tr>
        <tr>
          <td>Elsa</td>
        </tr>
      </table>
    );
    
    ReactDOM.render(myelement, document.getElementById('root'));
    

[Run Example »](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_render2)

___

## The Root Node

The root node is the HTML element where you want to display the result.

It is like a _container_ for content managed by React.

It does NOT have to be a `<div>` element and it does NOT have to have the `id='root'`:

### Example[Get your own React.js Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

The root node can be called whatever you like:

    <body>
    
      <header id="sandy"></header>
    
    </body>
    

Display the result in the `<header id="sandy">` element:

    ReactDOM.render(<p>Hallo</p>, document.getElementById('sandy'));
    

[Run Example »](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_render3)

___