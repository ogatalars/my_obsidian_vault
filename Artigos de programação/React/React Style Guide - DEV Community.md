[![Cover image for React Style Guide](https://res.cloudinary.com/practicaldev/image/fetch/s--0V0UeI8_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0z92umflp5l2w7zq7gbf.jpeg)](https://res.cloudinary.com/practicaldev/image/fetch/s--0V0UeI8_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0z92umflp5l2w7zq7gbf.jpeg)

[![Lawson](https://res.cloudinary.com/practicaldev/image/fetch/s--_przTJYp--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/534132/a11857ea-985f-4c1c-8d9c-cd1838fbfe20.jpeg)](https://dev.to/abrahamlawson)

[Lawson](https://dev.to/abrahamlawson)

Posted on 29 de abr. de 2021

 ![](https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg) 40![](https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg) 9   ![](https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg)  ![](https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg) ![](https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg)

## [](https://dev.to/abrahamlawson/react-style-guide-24pp#react-style-guide-2021)React Style Guide (2021)

src: the original post: [https://github.com/airbnb/javascript/tree/master/react](https://github.com/airbnb/javascript/tree/master/react)

> I wanted to create this post to mark back what's important when someone is just starting out with React. Therefore, I would like to receive comments from everyone.

## [](https://dev.to/abrahamlawson/react-style-guide-24pp#basic-rules)Basic Rules

-   Only include one React component per file.
-   Always use JSX syntax.

## [](https://dev.to/abrahamlawson/react-style-guide-24pp#naming)Naming

-   **List itemExtensions**: Use `.jsx` extension for React components. eslint: [react/jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)
-   **Filename**: Use `PascalCase` for filenames. E.g., **ReservationCard**.jsx.
-   **Reference Naming**: Use `PascalCase` for React components and `camelCase` for their instances.

    // bad
    import reservationCard from './ReservationCard';
    
    // good
    import ReservationCard from './ReservationCard';
    
    // bad
    const ReservationItem = <ReservationCard />;
    
    // good
    const reservationItem = <ReservationCard />;
    

Enter fullscreen mode Exit fullscreen mode

-   **Component Naming**: Use the filename as the component name. For example, `ReservationCard.jsx` should have a reference name of `ReservationCard`. However, for root components of a directory, use `index.jsx` as the filename and use the directory name as the component name:

    // bad
    import Footer from './Footer/Footer';
    
    // bad
    import Footer from './Footer/index';
    
    // good
    import Footer from './Footer';
    

Enter fullscreen mode Exit fullscreen mode

-   **Higher-order Component Naming**: Use a composite of the higher-order component’s name and the passed-in component’s name as the `displayName` on the generated component. For example, the higher-order component `withFoo()`, when passed a component `Bar` should produce a component with a `displayName` of `withFoo(Bar)`.
    
    > Why? A component’s `displayName` may be used by developer tools or in error messages, and having a value that clearly expresses this relationship helps people understand what is happening.  
    
        // bad
        export default function withFoo(WrappedComponent) {
          return function WithFoo(props) {
            return <WrappedComponent {...props} foo />;
          }
        }
        
        // good
        export default function withFoo(WrappedComponent) {
          function WithFoo(props) {
            return <WrappedComponent {...props} foo />;
          }
        
          const wrappedComponentName = WrappedComponent.displayName
            || WrappedComponent.name
            || 'Component';
        
          WithFoo.displayName = `withFoo(${wrappedComponentName})`;
          return WithFoo;
        }
        
    

## [](https://dev.to/abrahamlawson/react-style-guide-24pp#declaration)Declaration

-   Do not use `displayName` for naming components. Instead, name the component by reference.  
    
        // bad
        export default React.createClass({
          displayName: 'ReservationCard',
          // stuff goes here
        });
        
        // good
        export default function ReservationCard(props) {
            return ()
        }
        
    

## [](https://dev.to/abrahamlawson/react-style-guide-24pp#alignment)Alignment

-   Follow these alignment styles for JSX syntax. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md) [`react/jsx-closing-tag-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)  
    
        // bad
        <Foo superLongParam="bar"
             anotherSuperLongParam="baz" />
        
        // good
        <Foo
          superLongParam="bar"
          anotherSuperLongParam="baz"
        />
        
        // if props fit in one line then keep it on the same line
        <Foo bar="bar" />
        
        // children get indented normally
        <Foo
          superLongParam="bar"
          anotherSuperLongParam="baz"
        >
          <Quux />
        </Foo>
        
        // bad
        {showButton &&
          <Button />
        }
        
        // bad
        {
          showButton &&
            <Button />
        }
        
        // good
        {showButton && (
          <Button />
        )}
        
        // good
        {showButton && <Button />}
        
        // good
        {someReallyLongConditional
          && anotherLongConditional
          && (
            <Foo
              superLongParam="bar"
              anotherSuperLongParam="baz"
            />
          )
        }
        
        // good
        {someConditional ? (
          <Foo />
        ) : (
          <Foo
            superLongParam="bar"
            anotherSuperLongParam="baz"
          />
        )}
        
    

## [](https://dev.to/abrahamlawson/react-style-guide-24pp#props)Props

-   Always use **camelCase** for prop names, or **PascalCase** if the prop value is a React component.  
    
        // bad
        <Foo
          UserName="hello"
          phone_number={12345678}
        />
        
        // good
        <Foo
          userName="hello"
          phoneNumber={12345678}
          Component={SomeComponent}
        />
        
    
-   Omit the value of the prop when it is explicitly `true`. eslint: [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)  
    
        // bad
        <Foo
          hidden={true}
        />
        
        // good
        <Foo
          hidden
        />
        
        // very good
        <Foo hidden />
        
    
-   Avoid using an array index as `key` prop, prefer a stable ID. eslint: [`react/no-array-index-key`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)
    

> Why? Not using a stable ID [is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318) because it can negatively impact performance and cause issues with component state.

We don’t recommend using indexes for keys if the order of items may change.  

      // bad
      {todos.map((todo, index) =>
        <Todo
          {...todo}
          key={index}
        />
      )}
    
      // good
      {todos.map(todo => (
        <Todo
          {...todo}
          key={todo.id}
        />
      ))}
    

Enter fullscreen mode Exit fullscreen mode

-   Always define explicit defaultProps for all non-required props.

> Why? propTypes are a form of documentation, and providing defaultProps means the reader of your code doesn’t have to assume as much. In addition, it can mean that your code can omit certain type checks.  

      // bad
      function SFC({ foo, bar, children }) {
        return <div>{foo}{bar}{children}</div>;
      }
      SFC.propTypes = {
        foo: PropTypes.number.isRequired,
        bar: PropTypes.string,
        children: PropTypes.node,
      };
    
      // good
      function SFC({ foo, bar, children }) {
        return <div>{foo}{bar}{children}</div>;
      }
      SFC.propTypes = {
        foo: PropTypes.number.isRequired,
        bar: PropTypes.string,
        children: PropTypes.node,
      };
      SFC.defaultProps = {
        bar: '',
        children: null,
      };
    

Enter fullscreen mode Exit fullscreen mode

-   Use spread props sparingly. > Why? Otherwise you’re more likely to pass unnecessary props down to components. And for React v15.6.1 and older, you could [pass invalid HTML attributes to the DOM](https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html).

Exceptions:

-   HOCs that proxy down props and hoist propTypes

      function HOC(WrappedComponent) {
        return class Proxy extends React.Component {
          Proxy.propTypes = {
            text: PropTypes.string,
            isLoading: PropTypes.bool
          };
    
          render() {
            return <WrappedComponent {...this.props} />
          }
        }
      }
    

Enter fullscreen mode Exit fullscreen mode

-   Spreading objects with known, explicit props. This can be particularly useful when testing React components with Mocha’s beforeEach construct.

      export default function Foo {
        const props = {
          text: '',
          isPublished: false
        }
    
        return (<div {...props} />);
      }
    

Enter fullscreen mode Exit fullscreen mode

Notes for use:  
Filter out unnecessary props when possible. Also, use [prop-types-exact](https://www.npmjs.com/package/prop-types-exact) to help prevent bugs.  

      // bad
      render() {
        const { irrelevantProp, ...relevantProps } = this.props;
        return <WrappedComponent {...this.props} />
      }
    
      // good
      render() {
        const { irrelevantProp, ...relevantProps } = this.props;
        return <WrappedComponent {...relevantProps} />
      }
    

Enter fullscreen mode Exit fullscreen mode

## [](https://dev.to/abrahamlawson/react-style-guide-24pp#refs)Refs

-   Always use ref callbacks. eslint: [`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)  
    
        // bad
        <Foo
          ref="myRef"
        />
        
        // good
        <Foo
          ref={(ref) => { this.myRef = ref; }}
        />
        
    

## [](https://dev.to/abrahamlawson/react-style-guide-24pp#parentheses)Parentheses

-   Wrap JSX tags in parentheses when they span more than one line. eslint: [`react/jsx-wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)  
    
        // bad
        render() {
          return <MyComponent variant="long body" foo="bar">
                   <MyChild />
                 </MyComponent>;
        }
        
        // good
        render() {
          return (
            <MyComponent variant="long body" foo="bar">
              <MyChild />
            </MyComponent>
          );
        }
        
        // good, when single line
        render() {
          const body = <div>hello</div>;
          return <MyComponent>{body}</MyComponent>;
        }
        
    

## [](https://dev.to/abrahamlawson/react-style-guide-24pp#methods)Methods

-   Use arrow functions to close over local variables. It is handy when you need to pass additional data to an event handler. Although, make sure they [do not massively hurt performance](https://www.bignerdranch.com/blog/choosing-the-best-approach-for-react-event-handlers/), in particular when passed to custom components that might be PureComponents, because they will trigger a possibly needless rerender every time.  
    
        function ItemList(props) {
          return (
            <ul>
              {props.items.map((item, index) => (
                <Item
                  key={item.key}
                  onClick={(event) => { doSomethingWith(event, item.name, index); }}
                />
              ))}
            </ul>
          );
        }
        
    
-   Bind event handlers for the render method in the constructor. eslint: [`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    
    > Why? A bind call in the render path creates a brand new function on every single render. Do not use arrow functions in class fields, because it makes them [challenging to test and debug, and can negatively impact performance](https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1), and because conceptually, class fields are for data, not logic.  
    
        // bad
        class extends React.Component {
          onClickDiv() {
            // do stuff
          }
        
          render() {
            return <div onClick={this.onClickDiv.bind(this)} />;
          }
        }
        
        // very bad
        class extends React.Component {
          onClickDiv = () => {
            // do stuff
          }
        
          render() {
            return <div onClick={this.onClickDiv} />
          }
        }
        
        // good
        class extends React.Component {
          constructor(props) {
            super(props);
        
            this.onClickDiv = this.onClickDiv.bind(this);
          }
        
          onClickDiv() {
            // do stuff
          }
        
          render() {
            return <div onClick={this.onClickDiv} />;
          }
        }
        
    
-   Do not use underscore prefix for internal methods of a React component.
    
    > Why? Underscore prefixes are sometimes used as a convention in other languages to denote privacy. But, unlike those languages, there is no native support for privacy in JavaScript, everything is public. Regardless of your intentions, adding underscore prefixes to your properties does not actually make them private, and any property (underscore-prefixed or not) should be treated as being public. See issues [#1024](https://github.com/airbnb/javascript/issues/1024), and [#490](https://github.com/airbnb/javascript/issues/490) for a more in-depth discussion.  
    
        // bad
        React.createClass({
          _onClickSubmit() {
            // do stuff
          },
        
          // other stuff
        });
        
        // good
        class extends React.Component {
          onClickSubmit() {
            // do stuff
          }
        
          // other stuff
        }
        
    
-   Be sure to return a value in your `render` methods. eslint: [`react/require-render-return`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)  
    
        // bad
        render() {
          (<div />);
        }
        
        // good
        render() {
          return (<div />);
        }