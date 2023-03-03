___

Props are arguments passed into React components.

Props are passed to components via HTML attributes.

`props` stands for properties.

___

## React Props

React Props are like function arguments in JavaScript _and_ attributes in HTML.

To send props into a component, use the same syntax as HTML attributes:

The component receives the argument as a `props` object:

___

___

## Pass Data

Props are also how you pass data from one component to another, as parameters.

### Example[Get your own React.js Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

Send the "brand" property from the Garage component to the Car component:

    function Car(props) {
      return <h2>I am a { props.brand }!</h2>;
    }
    
    function Garage() {
      return (
        <>
          <h1>Who lives in my garage?</h1>
          <Car brand="Ford" />
        </>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Garage />);
    

[Run Example »](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_props_pass)

If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets:

### Example[Get your own React.js Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

Create a variable named `carName` and send it to the `Car` component:

    function Car(props) {
      return <h2>I am a { props.brand }!</h2>;
    }
    
    function Garage() {
      const carName = "Ford";
      return (
        <>
          <h1>Who lives in my garage?</h1>
          <Car brand={ carName } />
        </>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Garage />);
    

[Run Example »](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_props_pass2)

Or if it was an object:

### Example[Get your own React.js Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

Create an object named `carInfo` and send it to the `Car` component:

    function Car(props) {
      return <h2>I am a { props.brand.model }!</h2>;
    }
    
    function Garage() {
      const carInfo = { name: "Ford", model: "Mustang" };
      return (
        <>
          <h1>Who lives in my garage?</h1>
          <Car brand={ carInfo } />
        </>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Garage />);
    

[Run Example »](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_props_pass3)

**Note:** React Props are read-only! You will get an error if you try to change their value.

___

___