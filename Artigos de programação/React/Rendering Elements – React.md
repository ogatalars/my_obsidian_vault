Elements are the smallest building blocks of React apps.

An element describes what you want to see on the screen:

```
const element = <h1>Hello, world</h1>;
```

Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

> **Note:**
> 
> One might confuse elements with a more widely known concept of “components”. We will introduce components in the [next section](https://reactjs.org/docs/components-and-props.html). Elements are what components are “made of”, and we encourage you to read this section before jumping ahead.

## [](https://reactjs.org/docs/hello-world.html#rendering-an-element-into-the-dom)Rendering an Element into the DOM

Let’s say there is a `<div>` somewhere in your HTML file:

We call this a “root” DOM node because everything inside it will be managed by React DOM.

Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

To render a React element, first pass the DOM element to [`ReactDOM.createRoot()`](https://reactjs.org/docs/react-dom-client.html#createroot), then pass the React element to `root.render()`:

```
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element = <h1>Hello, world</h1>;
root.render(element);
```

**[Try it on CodePen](https://codepen.io/gaearon/pen/ZpvBNJ?editors=1010)**

It displays “Hello, world” on the page.

## [](https://reactjs.org/docs/hello-world.html#updating-the-rendered-element)Updating the Rendered Element

React elements are [immutable](https://en.wikipedia.org/wiki/Immutable_object). Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

With our knowledge so far, the only way to update the UI is to create a new element, and pass it to `root.render()`.

Consider this ticking clock example:

```
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);}

setInterval(tick, 1000);
```

**[Try it on CodePen](https://codepen.io/gaearon/pen/gwoJZk?editors=1010)**

It calls [`root.render()`](https://reactjs.org/docs/react-dom.html#render) every second from a [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) callback.

> **Note:**
> 
> In practice, most React apps only call `root.render()` once. In the next sections we will learn how such code gets encapsulated into [stateful components](https://reactjs.org/docs/state-and-lifecycle.html).
> 
> We recommend that you don’t skip topics because they build on each other.

## [](https://reactjs.org/docs/hello-world.html#react-only-updates-whats-necessary)React Only Updates What’s Necessary

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

You can verify by inspecting the [last example](https://codepen.io/gaearon/pen/gwoJZk?editors=1010) with the browser tools:

![DOM inspector showing granular updates](https://reactjs.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif)

Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM.

In our experience, thinking about how the UI should look at any given moment, rather than how to change it over time, eliminates a whole class of bugs.