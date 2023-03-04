___

Using `memo` will cause React to skip rendering a component if its props have not changed.

This can improve performance.

This section uses React Hooks. See the [React Hooks](https://www.w3schools.com/react/react_hooks.asp) section for more information on Hooks.

___

## Problem

In this example, the `Todos` component re-renders even when the todos have not changed.

### Example:[Get your own React.js Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

`index.js`:

    import { useState } from "react";
    import ReactDOM from "react-dom/client";
    import Todos from "./Todos";
    
    const App = () => {
      const [count, setCount] = useState(0);
      const [todos, setTodos] = useState(["todo 1", "todo 2"]);
    
      const increment = () => {
        setCount((c) => c + 1);
      };
    
      return (
        <>
          <Todos todos={todos} />
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
          </div>
        </>
      );
    };
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
    

`Todos.js`:

    const Todos = ({ todos }) => {
      console.log("child render");
      return (
        <>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
        </>
      );
    };
    
    export default Todos;
    

[Run Example »](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_memo1)

When you click the increment button, the `Todos` component re-renders.

If this component was complex, it could cause performance issues.

___

___

## Solution

To fix this, we can use `memo`.

Use `memo`to keep the `Todos` component from needlessly re-rendering.

Wrap the `Todos` component export in `memo`:

### Example:[Get your own React.js Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

`index.js`:

    import { useState } from "react";
    import ReactDOM from "react-dom/client";
    import Todos from "./Todos";
    
    const App = () => {
      const [count, setCount] = useState(0);
      const [todos, setTodos] = useState(["todo 1", "todo 2"]);
    
      const increment = () => {
        setCount((c) => c + 1);
      };
    
      return (
        <>
          <Todos todos={todos} />
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
          </div>
        </>
      );
    };
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
    

`Todos.js`:

    import { memo } from "react";
    
    const Todos = ({ todos }) => {
      console.log("child render");
      return (
        <>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
        </>
      );
    };
    
    export default memo(Todos);
    

[Run Example »](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_memo2)

Now the `Todos` component only re-renders when the `todos` that are passed to it through props are updated.

___