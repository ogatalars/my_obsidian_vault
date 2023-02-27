React has consistently been ranked among the top web frameworks and is widely used to build various applications. In fact, according to Stack Overflow’s [2020 developer survey](https://insights.stackoverflow.com/survey/2020#most-popular-technologies), it’s ranked at number 2 out of all web frameworks, just behind jQuery!

React is a JavaScript library with a declarative and component-based approach for building user interfaces. React has exploded in popularity because its simple and declarative API produces highly-performant applications — and that momentum only continues to grow.

In this guide, we break down the important React interview questions to know into three groups:

-   [Basic React Interview Questions](https://arc.dev/developer-blog/reactjs-interview-questions/#basic)
-   [Intermediate React Interview Questions](https://arc.dev/developer-blog/reactjs-interview-questions/#intermediate)
-   [Advanced React Interview Questions](https://arc.dev/developer-blog/reactjs-interview-questions/#advanced)

But, we don’t just give you the technical answer — you can head to any React tutorial or React learning website for those. Rather, on top of the standard technical answer, we give you the reasoning behind the question: _why is the interviewer asking me this? What do they want to know by asking me this question? How can my interview answer best respond to their question?_

And, at the end of the article (as well as a few places throughout), we’ll link you to some other helpful interview advice and job hunting guides.

Let’s get started!

_Arc is the **radically different remote job search platform for developers** where companies apply to you. We’ll feature you to great global startups and tech companies hiring remotely so you can **[land a great remote job](https://arc.dev/join-arc?utm_source=arc-blog&utm_medium=cta&utm_campaign=general)** in 14 days._

_✔️ Rather than applying to job after job, have companies apply to you  
✔️ Save time by batching your interviews in 14 days  
✔️ High-quality opportunities only: both companies and developers are vetted  
✔️ Receive personal coaching and advice to maximize your offers  
✔️ Permanent remote jobs, freelancing roles, and contract openings available  
✔️ Completely free of cost for developers!_

_Arc makes it easier than ever for software developers and engineers to find great remote jobs. **[Sign up today and get started!](https://arc.dev/join-arc?utm_source=arc-blog&utm_medium=cta&utm_campaign=general)**_

## Basic React Interview Questions

The following set of questions should test the candidate’s basic knowledge of React and some of its core features.

### 1\. How to create components in React?

_Components form the fundamental building blocks of a React application. The candidate should be able to explain the two approaches to creating a component in React along with their differences and applications._

React provides two ways to create a component – function components and class components.

1.  **Function Components** is the simplest way to create a component. It uses pure JavaScript functions that accept props and returns a React element.

    function Welcome({ message }) {
      return <h1>{`Hello, ${message}`}</h1>
    }

2.  **Class Components**, on the other hand, uses ES6 class to define a component. The same function component can be rewritten as the following class component:

    class Welcome extends React.Component {
      render() {
        return <h1>{`Hello, ${this.props.message}`}</h1>
      }
    }

### 2\. What are **props** in React?

_Props are one of the most basic ways of passing data between components in React. The candidate should be able to explain what props are and how they’re used to communicate between different components. Don’t forget to provide a couple of examples to demonstrate its usage in a real application._

When building an application, you often end up building a component tree with a hierarchy of components. Oftentimes, you will need to pass data between the components as you go down the tree. These are where props come into play.

**Props** are the component’s inputs. They can be in the form of a single value or an object containing a set of values that are passed from a parent component to a child component.

The snippet below shows how a prop is passed from the parent:

    <Welcome name={'Hello'}>

The props can then be accessed via the child component’s `props` property:

    // for function components
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    
    // for class components
    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }

**Read More**: [Programming Project Ideas: 22+ Top Side Projects for Software Engineers](https://arc.dev/developer-blog/programming-project-ideas/)

### 3\. What are **states** in React?

_A likely follow-up to the previous question, still in the realm of managing data inside a component. Understanding the concept of state in React is vital to being able to use components effectively. As the candidate, be sure to explain what states are and how they are used in a React component._

**State** is an object that contains information local to the component that may change over the lifetime of the component.

The snippet below shows a state object containing the property `message` which is then rendered in the `h1` tag.

    class Welcome extends React.Component {
      constructor(props) {
        super(props)
    
        this.state = {
          message: 'Welcome to React'
        }
      }
    
      render() {
        return (
          <div>
            <h1>{this.state.message}</h1>
          </div>
        )
      }
    }

### 4\. What is **context** in React?

_Context is a data-sharing mechanism in React. An interviewer might ask this question to gauge the candidate’s knowledge of how components can pass and share data. The candidate should be able to explain what context is and their ideal use cases._

**Context** is an alternate way to pass data through the component tree without passing props manually at every level. Context is designed to share data that is considered “global” within a tree of components.

For example, if you have a component tree with the following structure:

    Component A
        |
    Component B
        |
    Component C
        |
    Component D

Passing data from component A to component D using props would require the data to be passed from A to B to C and finally to D. Context provides a way to share values like these between components to avoid the above scenario.

A common use case of context is application theming, language, and user information which are accessed from various parts of the application. The example below shows how user information is set and accessed by different components in the application.

    // Create a context for the current user (with '' as the default).
    const UserContext = React.createContext('');
    
    class App extends React.Component {
      render() {
        // Use a Provider to pass the current user to the tree below.
        // Any component can read it, no matter how deep it is.
        // In this example, we're passing 'Mike' as the current value.
        return (
          <UserContext.Provider value='Mike'>
            <Toolbar />
          </UserContext.Provider>
        );
      }
    }
    
    // A component in the middle doesn't have to
    // pass the user information down explicitly.
    function Toolbar() {
      return (
        <div>
          <Greeting />
        </div>
      );
    }
    
    class Greeting extends React.Component {
      // Assign a contextType to read the current user context.
      // React will find the closest theme Provider above and use its value.
      static contextType = UserContext;
      render() {
        return <h1>{this.context}</h1>; // will display "Mike" in an h1 tag
      }
    }

**Read More**: [What Remote Software Developers Earning $100K+ Do Differently \[Report\]](https://arc.dev/developer-blog/what-remote-developers-earning-100k-do-differently/)

### 5\. How do you conditionally render components?

_Conditionally rendering a component is a common requirement in most applications. For example, a component might need to be rendered only if a certain set of data is available in your application’s state. You, as the candidate should explain the different approaches available and how to use them._

JSX doesn’t render `false` or `undefined`. This behavior lets us use conditional short-circuiting to render parts of your component using the `&&` notation.

For example, a component that only displays the `p` tag when the name property exists can be written as:

    function Welcome(props) {
      return (
        <div>
          {props.name && <p>{props.name}</p>}
        </div>
      );
    }

A ternary operator can also be used to create an if-else condition. Using the same example above, we could add a fallback string that displays “Name not available” when `name` is undefined.

    function Welcome(props) {
      return (
        <div>
          {props.name ?
            <p>{props.name}</p>}
            : <p>Name not available</p>
        </div>
      );
    }

___

**Check out our entire set of software development interview questions to choose and practice those which fit your job search situation best:**

-   [JavaScript Interview Questions](https://arc.dev/developer-blog/javascript-interview-questions/)
-   [Machine Learning Interview Questions](https://arc.dev/developer-blog/machine-learning-interview-questions/)
-   [MongoDB Interview Questions](https://arc.dev/developer-blog/mongodb-interview-questions/)
-   [TypeScript Interview Questions](https://arc.dev/developer-blog/typescript-interview-questions/)
-   [Selenium Interview Questions](https://arc.dev/developer-blog/selenium-interview-questions/)
-   [Spring Interview Questions](https://arc.dev/developer-blog/spring-interview-questions/)
-   [Data Engineer Interview Questions](https://arc.dev/developer-blog/data-engineer-interview-questions/)
-   [React Interview Questions](https://arc.dev/developer-blog/reactjs-interview-questions/)
-   [Data Analyst Interview Questions](https://arc.dev/developer-blog/data-analyst-interview-questions/)
-   [Vue Interview Questions](https://arc.dev/developer-blog/vue-interview-questions/)

-   [SQL Interview Questions](https://arc.dev/developer-blog/sql-interview-questions/)
-   [DevOps Interview Questions](https://arc.dev/developer-blog/devops-interview-questions/)
-   [Engineering Manager Interview Questions](https://arc.dev/developer-blog/engineering-manager-interview-questions/)
-   [Java Interview Questions](https://arc.dev/developer-blog/java-interview-questions/)
-   [PHP Interview Questions](https://arc.dev/developer-blog/php-interview-questions/)
-   [Ruby on Rails Interview Questions](https://arc.dev/developer-blog/ruby-on-rails-interview-questions/)
-   [Angular Interview Questions](https://arc.dev/developer-blog/angular-interview-questions/)
-   [Android Interview Questions](https://arc.dev/developer-blog/android-interview-questions/)
-   [Data Warehouse Interview Questions](https://arc.dev/developer-blog/data-warehouse-interview-questions/)

Also, learn the **[non-technical interview questions](https://arc.dev/developer-blog/non-technical-common-interview-questions/)** commonly asked in the first round by HR recruiters and the **[questions to ask your interviewer](https://arc.dev/developer-blog/questions-to-ask-at-an-interview/)**!

_Arc is the **radically different remote job search platform for developers** where companies apply to you. We’ll feature you to great global startups and tech companies hiring remotely so you can **[land a great remote job](https://arc.dev/join-arc?utm_source=arc-blog&utm_medium=cta&utm_campaign=general)** in 14 days. We make it easier than ever for software developers and engineers to find great remote jobs. **[Sign up today and get started](https://arc.dev/join-arc?utm_source=arc-blog&utm_medium=cta&utm_campaign=general)**_.

___

### 6\. How to bind methods or event handlers in JSX callbacks?

_Handling events are a common requirement when building applications. These events could be DOM events such as clicks or custom events that a component emits. A candidate should be able to explain how events work along with the various ways to listen to the emitted events._

React provides three approaches to listen to emitted events:

1.  **Callback with arrow functions** – Bind the event to an arrow function that calls the desired function.

    class Greeting extends React.Component {
      handleClick() {
        console.log('Clicked');
      }
    
      render() {
        return <button onClick={() => this.handleClick()}>Click Me</button>;
      }
    }

2.  **Bind in constructor** – Event handlers defined as class methods in React aren’t bound by default. We could manually bind them in the constructor to allow them to be called from the template.

    class Greeting extends React.Component {
      constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        console.log('Clicked');
      }
    
      render() {
        return <button onClick={this.handleClick}>Click Me</button>;
      }
    }

1.  **Public class fields syntax** – We can avoid the manual binding of the method defining the method using the arrow function. Arrow functions don’t have their own `this` keyword causing the `this` keyword to be bound lexically.

    class Greeting extends React.Component {
      handleClick = () => {
        console.log('Clicked');
      }
    
      render() {
        return <button onClick={this.handleClick}>Click Me</button>;
      }
    }

### 7\. What is a **`SyntheticEvent`** in React?

`_SyntheticEvent` provides a convenient abstraction over browser events. This abstraction streamlines the interaction with browser events from our React application. An interviewer might ask this question to gain insight into the candidate’s level of understanding of events and how they work in React.\_

**`SyntheticEvent`** is a cross-browser wrapper around the browser’s native event. It has the same API as its browser’s native counterpart, including methods like `stopPropagation()` and `preventDefault()`. However, unlike the browser’s native events, `SyntheticEvent` works identically across all browsers.

**Read More**: [8 Questions to Ask Recruiters Before Committing to the Dev Hiring Process](https://arc.dev/developer-blog/questions-to-ask-recruiters/)

### 8\. How to conditionally apply class attributes?

_Similar to hiding and displaying an element, sometimes, we also need to conditionally apply styling to our element. Typically syles are applied via classes instead of directly setting it on the element. An interviewer might ask this question to understand the candidate’s familiarity with using conditionals in React and how they can be applied to class attributes._

React lets you include conditionals such as `&&` and ternary operators to conditionally display parts of your component. The same concept can be applied to classNames.

The snippet below uses a ternary operator to add the `disabled` class when the `disabled` prop is true and the `default` class if it’s false.

    <div className={'btn-panel ' + (this.props.disabled ? 'disabled' : 'default')}>

### 9\. What are **refs** in React?

_Sometimes accessing the DOM directly is required. Understanding the recommended approach to accessing the DOM could save you from unexpected behaviors in your application. The candidate should be able to explain the purpose of refs, how refs are used, along with when they should be used._

**Refs** provide a way to access DOM nodes or React elements created in the render method.

Refs act as an escape hatch to the regular React dataflow of passing props down a component tree. They are used to update the child component (including both React components and DOM elements) without passing in new props.

The following snippet shows how refs are used to set the focus on the `input` element when a button is clicked.

    class CustomTextInput extends React.Component {
      constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
      }
    
      focusTextInput() {
        // Access the textInput using "current"
        // and set the focus using the input's DOM API
        this.textInput.current.focus();
      }
    
      render() {
        return (
          <div>
            <input
              type="text"
              ref={this.textInput} />
            <input
              type="button"
              value="Focus"
              onClick={this.focusTextInput}
            />
          </div>
        );
      }
    }

A few use cases for refs include:

-   managing focus and text selection
-   triggering imperative animations
-   integrating with third-party DOM libraries

### 10\. What are the four stages a React component goes through?

Or, asked another way: _What happens during the lifecycle of a React component?_

One of the most valuable parts of React is its component lifecycle — so understanding exactly how components function over time is instrumental in building a maintainable application.

Each React component has its own lifecycle. Each stage of the lifecycle invokes a series of methods allowing us to perform specific tasks at a specific stage of the component’s lifecycle. Understanding the different stages within a component’s lifecycle enables us to use them effectively. The candidate should be able to iterate what the four stages are and what happens in each stage.

**A React Component goes through the following four stages:**

1.  Initialization – the component is constructed with the given props and default state
2.  Mounting – rendering the JSX returned by the render method
3.  Updating – when the state of a component is updated and the application is repainted
4.  Unmounting – the final stage of the component lifecycle where the component is removed from the DOM

**Read More**: [How to be Productive at Home as a Remote Developer: 33+ Expert Tips](https://arc.dev/developer-blog/how-to-be-productive-at-home-working-remotely/)

### 11\. What is React? How is it different from other JS frameworks?

Although this sounds like a relatively simple question, it’s really asking the candidate to state an informed opinion about React, as well as any competing alternatives. In short, this question is designed to test a candidate’s knowledge about the JavaScript ecosystem at large while also pressing for specifics on what makes React unique.

Let’s look at each part of the answer separately.

**What is React?**

React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications.

The key point in this answer is that React’s core purpose is to build UI components; it is often referred to as just the “V” (View) in an “MVC” architecture. Therefore it has no opinions on the other pieces of your technology stack and can be seamlessly integrated into any application.

**How is React different?**

The answer to this question will likely vary depending on the candidate’s personal experiences. The important thing is to listen for real-life examples provided and opinions on whether or not the candidate prefers React and why.

Because React is a small library focused on building UI components, it is necessarily different than a lot of other JavaScript frameworks.

For example, AngularJS (1.x) approaches building an application by extending HTML markup and injecting various constructs (e.g. Directives, Controllers, Services) at runtime. As a result, AngularJS is very opinionated about the greater architecture of your application — these abstractions are certainly useful in some cases, but in many situations, they come at the cost of flexibility.

By contrast, React focuses exclusively on the creation of components, and has few (if any) opinions about an application’s architecture. This allows a developer an incredible amount of flexibility in choosing the architecture they deem “best” — though it also places the responsibility of choosing (or building) those parts on the developer.

“_I recently migrated an application originally written in Angular to React, and one of the things I loved most was…_“

By comparing and contrasting React with another library, not only can candidates demonstrate a deep understanding of React to the interviewier, but also position themself as a potentially strong candidate.

Be prepared to answer some follow-up questions as well, such as:

-   Under what circumstances would you choose React over another technology? For example, _React vs Angular_ or _React vs Vue_.
-   If React only focuses on a small part of building UI components, can you explain some pitfalls one might encounter when developing a large application?
-   If you were rewriting an Angular application in React, how much code could you expect to re-use?

**Read More**: [How to List Programming Languages (& Other Technologies) on a Resume](https://arc.dev/developer-blog/how-to-list-programming-languages-on-a-resume/)

### 12\. What can you tell me about JSX?

When Facebook first released React to the world, they also introduced a new dialect of JavaScript called JSX that embeds raw HTML templates inside JavaScript code. JSX code by itself cannot be read by the browser; it must be transpiled into traditional JavaScript using tools like Babel and webpack.

While many developers understandably have initial knee-jerk reactions against it, JSX (in tandem with ES2015) has become the defacto method of defining React components.

Asking questions about JSX tests whether or not the candidate can state an informed opinion towards JSX and defend it based on personal experience. Let’s cover some of the basic talking points.

**Key Talking Points**

Developers do not have to use JSX (and ES2015) to write an application in React. Having said that, many React developers prefer to use JSX as its syntax is far more declarative and reduces overall code complexity. Facebook certainly encourages it in all of their documentation!

Adopting JSX allows the developer to simultaneously adopt ES2015 — giving immediate access to some wonderful syntactic sugar.

ES2015 introduced a variety of new features to JavaScript that makes writing large applications far easier than ever before: classes, block scoping via let, and the new spread operator are just a small portion of the additions.

    import AnotherClass from './AnotherClass';
    
    class MyComponent extends React.Component {
      render() {
        let props = this.props;
    
        return (
          <div className="my-component">
            <AnotherClass {...props} />
          </div>
        );
      }
    }

But while ES2015 is becoming more and more widespread, it still is far from widely supported by the major browsers — so tools like Babel or webpack are needed to convert everything into legacy ES5 code.

Candidates that have built a React application using JSX and ES2015 can speak about some specific pros or cons encountered, such as:

_Although it took me some time to get used to the JSX and ES2015 syntax, I discovered how much I really enjoyed using it. Specifically, I’m a big fan of…_

_On the other hand, I could do without the hassle of configuring webpack and Babel. Our team ran into issues with…_

The React docs on JSX Gotchas may be good to know/review.

### 13\. What are stateless components?

If React components are essentially state machines that generate UI markup, then what are stateless components?

Stateless components (a flavor of “reusable” components) are nothing more than pure functions that render DOM-based solely on the properties provided to them.

    const StatelessCmp = props => {
      return (
        <div className="my-stateless-component">
          {props.name}: {props.birthday}
        </div>
      );
    };
    
    // ---
    ReactDOM.render(
      <StatelessCmp name="Art" birthday="10/01/1980" />,
      document.getElementById('main')
    );

This component has no need for any internal state — let alone a constructor or lifecycle handlers. The component’s output is purely a function of the properties provided to it.

**Read More**: [15+ Most Popular Programming Languages & Technologies to Know](https://arc.dev/developer-blog/popular-programming-languages-technologies/)

### More Beginner React Interview Questions to Practice

Before we wrap this section up, here are a few other React beginner interview questions you might be asked at your upcoming interview.

-   When should you use a class component over a function component?
-   What are the differences between stateless and stateful components?
-   What are the differences between controlled and uncontrolled components?
-   How to apply validation on props in React?
-   How to listen to state changes?
-   How do you lift state up in React?
-   How to set the focus of an input element on page load?
-   What are forward refs?
-   What is the difference between HTML and React event handling?
-   What are the lifecycle methods in React?

[![level up your remote career as a software developer with Arc](https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/03/Frame-15-1024x341.png)](https://arc.dev/join-arc?utm_source=arc-blog&utm_medium=cta&utm_campaign=general)

Arc is a radically different remote job search platform where companies apply to you. We feature developers directly to tech companies and startups and help you land a remote job in 14 days.  
[**Sign up here**](https://arc.dev/join-arc?utm_source=arc-blog&utm_medium=cta&utm_campaign=general).

The following set of questions should test a candidate’s mid-level knowledge of React and some of its core features.

### 1\. How to create elements in a loop in React?

_Applications usually involve displaying a dynamic set of components based on an array or object. The candidate should be able to explain what a `v-for` directive is along with their applications._

React lets us use JavaScript’s `map` function to loop through an array or object – rendering the returned template for each entry.

The following code shows how the `items` array is used to generate a set of `ItemComponent`:

    <div>
      { items.map(item => 
          <ItemComponent key={item.id} item={item}/>
      )}
    </div>

**Read More**: [Key Analytical Skills for Developers (& How to Continually Improve Them)](https://arc.dev/developer-blog/analytical-skills/)

### 2\. How do you update the state object in React?

_Keeping your views and your logic in sync is an important aspect of every application. This is equivalent to updating the state object and making sure the component is updated accordingly. The candidate should be able to explain the recommended approach when working with the state object and how to avoid the component from getting out of sync with the state._

React provides utility functions to manage your component’s local state. The `setState` function is the recommended approach to update the state object as React does the heavy lifting for you.

The `setState` function merges the new object with the current state. The updated state then triggers a component re-render automatically, ensuring that your views are always up-to-date with the latest state changes in your component.

The following example shows how the user object is updated using the `setState` function:

    class Profile extends React.Component {
      constructor() {
        super();
    
        this.state = {
          name: 'Mike'
        };
      }
    
      updateName() {
        this.setState({
          name: 'Bob'
        });
      }
    
      render() {
        return (
          <div>
           <h1>{this.state.name}</h1>
          </div>
        );
      }
    }

### 3\. What are **Higher-order components**?

_Higher-order components (HOC) is a pattern derived from React’s compositional nature. The interviewer might ask this question to better understand the candidate’s familiarity with React’s component system. As the candidate, you should be able to explain what HOCs are conceptually and also what problem it solves._

HOC is a function that accepts a component and returns a new component. These components are also referred to as **pure components** as they accept dynamic child component but doesn’t modify or copy any of the child components.

Use cases of HOCs include:

-   Code reuse and logic abstraction
-   State abstraction and manipulation
-   Props manipulation
-   Render hijacking

**Read More**: [Software Developer vs Engineer vs Programmer (& More Related Titles)](https://arc.dev/developer-blog/software-developer-vs-engineer-vs-programmer/)

### 4\. What is the purpose of the **`useMemo`** hook?

_Optimization of processes is a necessity as applications grow and begins to perform heavier tasks. Memoization is an optimization technique that helps speed up expensive function calls using cached results. Understanding optimization techniques is important to keep your code fast and efficient. The candidate should be able to explain what memoization is and also how to use React’s `useMemo` hook to optimize your application._

**Memoization** is an optimization technique that speeds up your code by storing the results of expensive function calls and reusing the stored result when the same input occurs again.

Functional components use the `useMemo` hook to memoize expensive functions. As a result, these functions are only called when the input changes instead of on every render.

The following code shows a memoized function using the `useMemo` hook. `useMemo` will only recompute the memoized value when one of the dependencies (`a` or `b`) has changed.

    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

### 5\. What are **Render Props**?

_Understanding different techniques to share code between components helps in making an informed decision on the best approach to use. The candidate should have a basic understanding of what render props are along with their ideal use cases._

Render prop is a technique to share code between components by passing a function (the function should return an element) as the component’s props. The component with the render prop can then use the element from the passed-in function in its `render` function to compose a new component.

The code below shows how a function is passed in as a prop to the `DataProvider` component:

    <DataProvider render={data => (
      <h1>Hello {data.target}</h1>
    )}/>

**Read More**: [How to Write a Software Engineer Cover Letter w/ Sample Template & Tips](https://arc.dev/developer-blog/software-engineer-cover-letter/)

### 6\. Are you familiar with Flux?

Flux is an architectural pattern that enforces unidirectional data flow — its core purpose is to control derived data so that multiple components can interact with that data without risking pollution.

The Flux pattern is generic; it’s not specific to React applications, nor is it required to build a React app. However, Flux is commonly used by React developers because React components are declarative — the rendered UI (View) is simply a function of state (Store data).

Flux is relatively simple in concept, but in a technical interview, it’s important that the developer demonstrates a deep understanding of its implementation. Let’s cover of the important few discussion points.

**Description of Flux**

In the Flux pattern, the Store is the central authority for all data; any mutations to the data must occur within the store. Changes to the Store data are subsequently broadcast to subscribing Views via events. Views then update themselves based on the new state of received data.

To request changes to any Store data, Actions may be fired. These Actions are controlled by a central Dispatcher; Actions may not occur simultaneously, ensuring that a Store only mutates data once per Action.

The strict unidirectional flow of this Flux pattern enforces data stability, reducing data-related runtime errors throughout an application.

**Flux vs MVC**

Traditional MVC patterns have worked well for separating the concerns of data (Model), UI (View) and logic (Controller) — but many web developers have discovered limitations with that approach as applications grow in size. Specifically, MVC architectures frequently encounter two main problems:

-   **Poorly defined data flow:** The cascading updates which occur across views often lead to a tangled web of events which is difficult to debug.
-   **Lack of data integrity:** Model data can be mutated from anywhere, yielding unpredictable results across the UI.

With the Flux pattern complex UIs no longer suffer from cascading updates; any given React component will be able to reconstruct its state based on the data provided by the store. The flux pattern also enforces data integrity by restricting direct access to the shared data.

During a technical interview, one should discuss the differences between the Flux and MVC design patterns within the context of a specific example:

_For example, imagine we have a “master/detail” UI in which the user can select a record from a list (master view) and edit it using an auto-populated form (detail view)._

_With an MVC architecture, the data contained within the Model is shared between both the master and detail Views. Each of these views might have its own Controller delegating updates between the Model and the View. At any point the data contained within the Model might be updated — and it’s difficult to know where exactly that change occurred. Did it happen in one of the Views sharing that Model, or in one of the Controllers? Because the Model’s data can be mutated by any actor in the application, the risk of data pollution in complex UIs is greater than we’d like._

_With a Flux architecture, the Store data is similarly shared between multiple Views. However this data can’t be directly mutated — all of the requests to update the data must pass through the Action > Dispatcher chain first, eliminating the risk of random data pollution. When updates are made to the data, it’s now much easier to locate the code requesting those changes._

**Difference with AngularJS (1.x)**

UI components in AngularJS typically rely on some internal `$scope` to store their data. This data can be directly mutated from within the UI component or anything given access to `$scope` — a risky situation for any part of the component or greater application which relies on that data.

By contrast, the Flux pattern encourages the use of immutable data. Because the store is the central authority on all data, any mutations to that data must occur within the store. The risk of data pollution is greatly reduced.

**Testing**

One of the most valuable aspects of applications built on Flux is that their components become incredibly easy to test. Developers can recreate and test the state of any React component by simply updating the store — direct interactions with the UI (with tools like Selenium) are no longer necessary in many cases.

**Popular Flux Libraries**

While Flux is a general pattern for enforcing data flow through an application, there exist many implementations from which to choose. There are nuances between each implementation, as well as specific pros and cons to consider. The candidate should provide examples of real-world experience with using Flux.

### More React Intermediate Interview Questions to Practice

Before we wrap this section up, here are a few other React intermediate interview questions you might be asked at your upcoming interview.

-   What are pure components?
-   What is the difference between `setState` and `replaceState` methods?
-   How do you update the state with values that depend on the current state?
-   How do you force a component to re-render without calling `setState`?
-   How do you set dynamic key names in the state object?
-   How to re-render the view when the viewport size changes?
-   What is the purpose of the `useEffect` hook?
-   What is the purpose of the `useRefs` hook?
-   Does React Hook work with static typing?
-   How do you build a custom hook?

And one last intermediate React question asked at interviews:

**“Explain this code.”**

Technical interviews may also include a time when the developer is asked to look at (and probably write) some code. Be sure you’re ready for these!

**Read More**: [Interpersonal Skills: What Developers Need to Know (& How to Improve)](https://arc.dev/developer-blog/interpersonal-skills/)

Arc is a radically different remote job search platform where companies apply to you. We feature developers directly to tech companies and startups and help you land a remote job in 14 days.  
[**Sign up here!**](https://arc.dev/join-arc?utm_source=arc-blog&utm_medium=cta&utm_campaign=general)

## Advanced React Interview Questions

The following set of questions should test the candidate’s advanced knowledge of React and some of its widely used features.

### 1\. What are portals in React?

_Most applications contain modals, toasts, and other elements that require escaping the default DOM hierarchy. Portals provide a convenient way to render components in a separate DOM node. The candidate should be able to explain how portals work and their ideal use cases._

**Portal** is React’s recommended way to render children components into a DOM node that exists outside the DOM hierarchy of the parent component.

A portal is created by calling `ReactDom`‘s `createPortal` function.

    ReactDOM.createPortal(content, containerElement);

The `createPortal` function accepts two parameters:

-   `content` – a valid renderable React element
-   `containerElement` – a valid DOM element to append the content

**Read More**: [Problem-Solving Skills for Software Developers: Why & How to Improve](https://arc.dev/developer-blog/problem-solving-skills/)

### 2\. What are **error boundaries**?

_A JavaScript error in one part of the app shouldn’t break the entire app. Error boundary is React’s solution to this common problem. The candidate should be able to explain what an error boundary is and to use it to handle errors in your application._

**Error boundaries** are React components that catch JavaScript errors anywhere in its child component tree. The Error boundary component can then log those errors and display fallback UI instead of crashing the entire component tree. You can think of error boundaries as a catch block for components.

The snippet below shows a simple `ErrorBoundary` component that displays a fallback `h1` and logs the error.

    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
      }
    
      render() {
        if (this.state.hasError) {
          // fallback UI
          return <h1>Something went wrong.</h1>;
        }
    
        return this.props.children; 
      }
    }

The `ErrorBoundary` component can then be used to catch all errors in the `Child` component as follows:

    <ErrorBoundary>
      <Child />
    </ErrorBoundary>

### 3\. What is React **`Profiler`** and what is it used for?

_Optimizations are a key part of every application. Knowing which tools to use can be a huge productivity boost. This is a more advanced question that an interview might ask to understand the candidate’s ability to diagnose and optimize a React application._

React **`Profiler`** is a means to measure the cost of rendering in a React application. The purpose of this component is to help developers identify parts of the application that are slow and may benefit from further optimizations.

The `Profiler` can be added anywhere in the component tree to measure its rendering cost. For example, the code below shows how the `Profiler` component is used to measure the rendering cost of the `Navigation` component and its descendants:

    render(
      <App>
        <Profiler id="Navigation" onRender={callback}>
          <Navigation {...props} />
        </Profiler>
        <Main {...props} />
      </App>
    );

**Read More**: [8 Best Resume Builders & CV Makers for Software Developers](https://arc.dev/developer-blog/best-resume-builders/)

### 4\. What is **`StrictMode`** in React?

_Catching potential problems is a huge benefit when building applications. React has a built-in component to help developers do just that. An interviewer might ask the candidate this question to better understand the depth of their knowledge of more advanced React components. The candidate should be able to explain what the component does, its usage, and its benefits._

**StrictMode** is a tool to highlight potential problems in an application. Although StrictMode is used as a component, it doesn’t create a visible UI in the DOM. It only enables additional checks for its descendants.

You can enable strict mode for any part of your application by wrapping the components inside the `React.StrictMode` component. The following code shows how strict mode checks are run on the `BlogContent` component and its descendants. The `Header` component won’t be checked as it is outside of the `React.StrictMode` component.

    import React from 'react';
    
    function Application() {
      return (
        <div>
          <Header />
          <React.StrictMode>
            <div>
              <BlogContent />
            </div>
          </React.StrictMode>
        </div>
      );
    }

Benefits of using StrictMode include:

-   Identifying components with unsafe lifecycles
-   Warning about legacy string ref API usage
-   Warning about deprecated `findDOMNode` usage
-   Detecting unexpected side effects
-   Detecting legacy context API
-   Ensuring reusable state

### 5\. What are React **Fragments** used for?

Sometimes, we need to return multiple React elements from a single parent. This only works when the elements are wrapped under a single generic HTML element like a `div`. Fragments allow us to return multiple elements directly without the additional wrapper element.

An interviewer might ask this question to gauge the candidate’s level of understanding of React components. The candidate should be able to explain what fragments are and the problem they solve.

React **fragments** are special features that allow creating a group of children elements or components without creating an actual node in the template. Fragments are denoted by an open empty tag (`<>`) and a closed empty tag (`</>`).

The code below shows how a React component could return two `td` elements without wrapping them inside a `div` container.

    function Columns() {
      return (
        <>
          <td>Column 1</td>
          <td>Column 2</td>
        </>
      );
    }

### More React Advanced Interview Questions to Practice

Before we wrap this section up, here are a few other More React advanced interview questions you might be asked at your upcoming interview.

-   How to prevent re-renders in React?
-   How do you modularize code in a React project?
-   What is React Router?
-   How does the React Router differ from conventional routing?
-   How do you access query parameters using React Router?
-   What is Redux?
-   How does data flow in a React-Redux application?
-   When do you use React Context vs Redux?
-   How do you pass data from a child component to its parent?
-   How do you use decorators in React?

**Read More**: [How to Build a Software Engineer Portfolio (With Examples & Tips)](https://arc.dev/developer-blog/software-engineer-portfolio/)

## Wrapping Up

Interviewing a React developer involves much more than just testing for React knowledge — you should also ask questions about JavaScript and about other nuances more closely related to the project or job in question.

This article attempted to cover some basic talking points that would demonstrate whether or not a developer has an adequate understanding of React and its core concepts. I hope you find it useful — good luck!

_Arc is the **radically different remote job search platform for developers** where companies apply to you. We’ll feature you to great global startups and tech companies hiring remotely so you can **[land a great remote job](https://arc.dev/join-arc?utm_source=arc-blog&utm_medium=cta&utm_campaign=general)** in 14 days. We make it easier than ever for software developers and engineers to find great remote jobs. **[Sign up today and get started](https://arc.dev/join-arc?utm_source=arc-blog&utm_medium=cta&utm_campaign=general)**_.

This article was written by William Juan, with elements grandfathered in from an earlier article by Arthur Kay. Arthur is a developer who has been working with the Web since the late 1990s, when GeoCities and scrolling marquees were all the rage. Arthur graduated from Loyola University Chicago and now works as a Senior Software Engineer with a core focus on JavaScript.