  ![How to Use Props in React](https://www.freecodecamp.org/news/content/images/size/w2000/2023/01/all-about-props-in-react-1.png)

When you're first learning React, props are often one of the most difficult topics to understand – especially when it comes to passing props across components. And when you need similar props in more than one component, things can get really tricky.

In this guide, we will start by understanding what props are and what they do. We'll look at the different types of props, and how to use similar props in multiple components.

It is helpful if you [understand React state](https://beta.reactjs.org/learn/state-a-components-memory) before diving into this guide.

## What Are Props in React?

Props stand for properties. They are read-only values that can be passed across components in order to display relevant data in your React apps.

Take an example of a simple JavaScript function. In it, we pass two parameters, a and b, to manipulate them inside the function and return the sum of both parameters.

    function add(a, b) {
    const sum = a + b
        return sum
    }

When we pass a prop to a component, the same thing happens inside the component. We take the props, manipulate them, and return something. See the example below:

    export default function App() {
    return <DummyComponent name="Tooba" a={5} b={2} />
    }
    
    function DummyComponent(props) {
    const sum = props.a + props.b
        
        return (
        <>
            <p>My name is {props.name}</p>
                <p>The sum of the numeric props I received is {sum}</p>
            </>
        )
    }

In the React code above, we have an App component that returns DummyComponent and we have passed three props (properties) to this component: name, a, and b.

In DummyComponent, we receive those props as function parameters and perform a simple addition between a and b. Props are received as an object with properties equal to what we pass into our component.

The props object for our example would look like {name: "Tooba", a: 5, b: 2}. Therefore we need to grab the properties we need just as we do in regular JavaScript objects.

`const sum = props.a + props.b` grabs a and b properties from our props object and stores its sum in the sum variable. Next, we return two <p> tags, one displaying our name prop and the other displaying the sum. The output rendered on the screen looks like this:

![reactss](https://www.freecodecamp.org/news/content/images/2022/12/reactss.png)

Screenshot showing the output rendered ("My name is Tooba / The sum of the numeric props I received is 7.")

And if I console.log the DummyComponent, I get a function having props passed as a parameter exactly as we discussed above. See the code below:

    export default function App() {
    console.log(DummyComponent)
    return <DummyComponent name="Tooba" a={5} b={2} />
    }
    
    function DummyComponent(props) {
    const sum = props.a + props.b
        
        return (
        <>
            <p>My name is {props.name}</p>
                <p>The sum of the numeric props I received is {sum}</p>
            </>
        )
    }

The output rendered on console is:

![Output of the code logging DummyComponent to the console](https://www.freecodecamp.org/news/content/images/2023/01/FunctionalComponent.png)

Output of the code logging DummyComponent to the console

Props are usually passed from a parent component to a child component. A parent component is a component in which you import another component and pass props inside it.

In the example above, App is our parent component. So to pass props into the child component we need to import it in App.js first. Because of this, we imported DummyComponent in App.js and then passed the props we needed inside it `<DummyComponent name="Tooba" a=5 b=2/>`.

But the app is not always the only parent component of all the other components.

Suppose we have another component where we want to maintain some state and use it in another component. In such a situation, the component where we maintain the state to pass it to another component becomes the parent of the latter component and the app component becomes the grandparent.

See the example below to understand what I mean:

    import React from "react"
    
    export default function App() {
    return <DummyComponent name="Tooba" a={5} b={2}>
    }
    
    function DummyComponent(props) {
    const sum = props.a + props.b
        
        return (
        <>
            <p>My name is {props.name}</p>
                <p>The sum of the numeric props I recieved is {sum}</p>
            </>
        )
    }
    
    function Parent() {
      const [isParent, setIsParent] = React.useState(true)
    
      return (
        <>
          <Child isParent={isParent}/>
        </>
      )
    }
    
    function Child(props) {
      return (
        <>
          <h3>{props.isParent 
          ? "I am the child component of Parent.js" 
          : "There might be a bug"}</h3>
        </>
      )
    }
    
    

In the above code, we have added two new components. `Parent.js` is maintaining the `isParent` state. It indicates whether this is a parent component or not. If the state is true, we display "I am the child component of Parent.js" in the Child.js file. Otherwise we display "There might be a bug".

But to actually display this in the browser, we need to import Parent.js in App.js and return it inside the App function. The code is displayed in the browser like this:

![Output displayed on the browser based on the isParent prop passed from the parent to the child component](https://www.freecodecamp.org/news/content/images/2023/01/parent-component.png)

Output displayed on the browser based on the isParent prop passed from the parent to the child component

No matter how big your React app becomes, the child components always need to be imported into the parent component and the parent component in the grandparent component (if it exists).

## What Are PropTypes in React?

There is a library in React called "prop-types" that allows us to avoid errors caused by invalid data type issues.

Suppose you want a variable to be of datatype Number, but when you try to manipulate it mathematically, it throws errors. You might have encountered this problem numerous times in your coding journey.

But with propTypes in React, we can make sure that each prop is of a certain data type and nothing else.

Consider the DummyComponent from the example above:

    import { PropTypes } from "prop-types"
    
    function DummyComponent(props) {
    const sum = props.a + props.b
        
        return (
        <>
            <p>My name is {props.name}</p>
            <p>The sum of the numeric props I recieved is {sum}</p>
            </>
        )
    }
    
    DummyComponent.propTypes = {
    a: PropTypes.number,
        b: PropTypes.number
    }

To use propTypes, we first import it and define `propTypes` with the name equal to our component. propTypes are objects with keys equal to our prop names and values equal to the datatype we want that prop to be.

We can also chain `propTypes` with `isRequired` which throws an error if the required prop is not provided to the component.

    DummyComponent.propTypes = {
    a: PropTypes.number,
        b: PropTypes.number.isRequired
    }

The available data types for propTypes are String, Number, Boolean, Object, Function, and Symbol.

## How to Update Props from a Child Component

Even though props are usually passed down to child components and are read-only data items, we have a way to update a prop from the child component. And it is not as complicated as it might sound. Let's go through it step by step:

1.  Pass `setState` as a prop to child component
2.  Add an event in the child component that triggers the `setState` function

Let's have a look at the code that makes it work:

    function Parent() {
      const [isParent, setIsParent] = React.useState(true)
    
      return (
        <>
          <Child isParent={isParent} 
          changeIsParent={isParent => 
          setIsParent(isParent => !isParent)}/>
        </>
      )
    }
    
    function Child(props) {
      return (
        <>
          <h3>{props.isParent 
          ? "I am the child component of Parent.js" 
          : "There might be a bug"}</h3>
          <button onClick={() => props.changeIsParent()}>Click me</button>
        </>
      )
    }

In the code above, we have passed a prop named `changeIsParent` that updates the `isParent` state using `setIsParent` function.

In the child component, we have added a button and passed an onClick event that runs the `changeIsParent` function on every click. Since `isParent`'s state is continuously changing on every click, the text inside the <h3> tag changes accordingly.

## How to Use the useContext Hook Instead

When you start building bigger React apps, it becomes frustrating to pass props down in the React component hierarchy, especially when components with different parents need the same props. Let's have a look at the diagram below to understand this:

![prop-hierarchy](https://www.freecodecamp.org/news/content/images/2023/01/prop-hierarchy.png)

React app hierarchy sample

Let's suppose the middlemost child component in the diagram needs some props from its parent. We can cater for this need by maintaining a state in its parent component and passing it down to the child as a prop.

But, what if the leftmost parent component needs the same prop? We can define the same state in its parent (grandparent in the diagram) and pass it down to it as a prop.

Still, the right most grandparent component also needs the same prop. We can solve this issue by maintaining the state in the App component and passing it down through its children.

This approach might seem to work. But we need to pass props unnecessarily to each child component whether they need it or not.

The term prop drilling describes this problem of passing data through all the children whether they need it or not. Fortunately, you can use the useContext hook in React to solve this problem by maintaining a state globally and passing it to the components that need it.

Let's understand how to do this with useContext through a step-by-step approach:

1.  Create a Context.js file and create the context in it
2.  Maintain a global state in the newly created Context component
3.  Pass that state as a value to the Context provider
4.  Wrap the App component or the lowest common parent component inside the Context provider
5.  Access the global state through components that need it

Now let's suppose we are building a game in React and need to toggle the user score display in multiple components. For this, we maintain a `showScore` state in the Context.js component like below

    import {useState, createContext} from "react"
    const Context = createContext()
    
    function ContextProvider(props) {
        const [showScore, setShowScore] = useState(false)
    
        function toggleScore() {
            setShowScore(!showScore)
        }
    
        return (
            <Context.Provider value={{showScore, toggleScore}}>
                {props.children}
            </Context.Provider>
        )
    }
    
    export {ContextProvider, Context}

In the first line, we import the state and context from React. In line 2, we create a context named Context. In line 4, we create a function named `ContextProvider`. In line 5, we initiate the `showScore` state and in line 7, we define a function that toggles the `showScore` state. In line 12, this function returns the context provider that lets the children access its state and pass a value to it.

The value can be a single value or an object having multiple values. Since we have a state and a function to pass down the children, we use an object to define our value having both the state and the function that toggles the `showScore` state.

Lastly, we export the `ContextProvider` function and Context as named exports.

You might be wondering, why is our context component receiving props and why are we passing it to our context provider? We will get back to this in a moment – first let's see what our next step would be

To make our context accessible throughout our app, we need to wrap the App component inside the `ContextProvider` component in the `main.js`/ `index.js` file:

    import React from 'react'
    import App from './App'
    import { ContextProvider } from './Context'
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <ContextProvider>
         <App />
      </ContextProvider>
    )

In the code above, we import ContextProvider from the Context component and wrap `<App />` inside it. Every child of the component that's wrapped inside the Context Provider can access the global context. We have passed `<App />` inside `<ContextProvider>` so every child component of our app can access `showScore` and `toggleScore`.

Now that the context is available to be used throughout the app, let's see how we can use it:

    import { Context } from './Context'
    import {useContext} from 'react'
    
    function ScoreDisplay(props) {
    const {showScore} = useContext(Context)
        return (
        {showScore && <h3>Your score is {props.score}</h3>}
        )
    }
    
    function ScoreToggle() {
    const {toggleScore} = useContext(Context)
        return (
        <button onClick={displayScore}>Show Scores</button>
        )
    }
    

See how we just need to import Context from the Context component and access whatever value we need to use in any component.

In the ScoreDisplay component we destructure `showScore` from Context and display the score according to it. In the `ScoreToggle` function, we destructure `toggleScore` and pass it to the onClick event handler.

To recap, we created a separate context component and created a context using the `createContext` hook. Inside the component, we define the states and functions we want to maintain globally and return `Context.Provider` from the Context we created. Then we export the context component and the Context we created using `createContext` hook.

`Context.Provider` takes in a value that can be an object having multiple key-value pairs. We passed both our state and toggle function to the value. We then wrapped the App component inside the `ContextProvider` in the `main.js`/ `index.js` file.

Next, we need to import the Context component and the useContext hook wherever we need the global state and destructure the value object according to our needs.

Now let's get back to the props our context component is receiving. See how in the second code example we are passing `<App />` inside the `<ContextProvider />` component as its child? In React, when we write a component with a corresponding closing tag, all the components passed as their children become its props.

    <Context.Provider value={{showScore, toggleScore}}>
    {props.children}
    </Context.Provider>

So when we pass `props.children` inside `<Context.Provider/>` in the Context.js file, we are basically passing the App component inside it. This makes sure our App component has access to the context and it renders properly.

The Context API helps us totally get rid of the prop drilling problem. But we should avoid using it when the props are needed to be passed through certain levels. The reason is that whenever the context state updates, React re-renders every component that uses the state and it may cause performance issues.

In situations when you want to avoid prop drilling through some levels, the React docs have provided a reasonable solution for that called component composition. You can read more about it [here](https://reactjs.org/docs/composition-vs-inheritance.html).

## Conclusion

Props is short for properties which are read-only data items that are passed through the components to be manipulated and displayed in the browser.

Props are shared down the hierarchy, that is from parent to child components. You can use the propTypes library to specify the data type of each prop in order to avoid data type-related issues.

Though props can only be passed from the parent component to the child component, we have a way to update props from a child component using an event handler that updates a state in the parent component.

To avoid the prop drilling problem, we may use Context API in React which helps us completely get rid of the problem.

Interested in connecting on LinkedIn? Hit me up at [Tooba Jamal](https://www.linkedin.com/in/tooba-jamal/).

___

___

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started](https://www.freecodecamp.org/learn/)