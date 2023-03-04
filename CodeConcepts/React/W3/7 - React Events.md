___

Just like HTML DOM events, React can perform actions based on user events.

React has the same events as HTML: click, change, mouseover etc.

___

## Adding Events

React events are written in camelCase syntax:

`onClick` instead of `onclick`.

React event handlers are written inside curly braces:

`onClick={shoot}`  instead of `onClick="shoot()"`.

### Example:[Get your own React.js Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

Put the `shoot` function inside the `Football` component:

    function Football() {
      const shoot = () => {
        alert("Great Shot!");
      }
    
      return (
        <button onClick={shoot}>Take the shot!</button>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Football />);
    

[Run Example »](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_events_handler)

___

___

## Passing Arguments

To pass an argument to an event handler, use an arrow function.

### Example:[Get your own React.js Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

Send "Goal!" as a parameter to the `shoot` function, using arrow function:

    function Football() {
      const shoot = (a) => {
        alert(a);
      }
    
      return (
        <button onClick={() => shoot("Goal!")}>Take the shot!</button>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Football />);
    

[Run Example »](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_events_argument)

___

## React Event Object

Event handlers have access to the React event that triggered the function.

In our example the event is the "click" event.

### Example:[Get your own React.js Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

Arrow Function: Sending the event object manually:

    function Football() {
      const shoot = (a, b) => {
        alert(b.type);
        /*
        'b' represents the React event that triggered the function,
        in this case the 'click' event
        */
      }
    
      return (
        <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Football />);
    

[Run Example »](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_events_event)

This will come in handy when we look at [Form](https://www.w3schools.com/react/react_forms.asp) in a later chapter.

___

## Test Yourself With Exercises

## Exercise:

Complete this statement to include a click event handler.

```
<button ={clicked()}>Click Me!</button>

```

[Start the Exercise](https://www.w3schools.com/react/exercise.asp?filename=exercise_events1)

___