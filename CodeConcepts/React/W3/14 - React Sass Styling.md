___

## What is Sass

Sass is a CSS pre-processor.

Sass files are executed on the server and sends CSS to the browser.

You can learn more about Sass in our [Sass Tutorial](https://www.w3schools.com/sass/default.php).

___

## Can I use Sass?

If you use the `create-react-app` in your project, you can easily install and use Sass in your React projects.

Install Sass by running this command in your terminal:

Now you are ready to include Sass files in your project!

___

## Create a Sass file

Create a Sass file the same way as you create CSS files, but Sass files have the file extension `.scss`

In Sass files you can use variables and other Sass functions:

Import the Sass file the same way as you imported a CSS file:

### Example[Get your own React.js Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

index.js:

    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './my-sass.scss';
    
    const Header = () => {
      return (
        <>
          <h1>Hello Style!</h1>
          <p>Add a little style!.</p>
        </>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Header />);
    

[Run Example »](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_sass)

___