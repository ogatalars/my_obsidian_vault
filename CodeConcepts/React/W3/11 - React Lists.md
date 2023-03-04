___

In React, you will render lists with some type of loop.

The JavaScript `map()` array method is generally the preferred method.

If you need a refresher on the `map()` method, check out the [ES6 section](https://www.w3schools.com/react/react_es6.asp).

___

### Example:[Get your own React.js Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

Let's render all of the cars from our garage:

    function Car(props) {
      return <li>I am a { props.brand }</li>;
    }
    
    function Garage() {
      const cars = ['Ford', 'BMW', 'Audi'];
      return (
        <>
          <h1>Who lives in my garage?</h1>
          <ul>
            {cars.map((car) => <Car brand={car} />)}
          </ul>
        </>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Garage />);
    

[Run Example »](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_list1)

When you run this code in your `create-react-app`, it will work but you will receive a warning that there is no "key" provided for the list items.

___

___

## Keys

Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.

Keys need to be unique to each sibling. But they can be duplicated globally.

Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.

### Example:[Get your own React.js Server](https://www.w3schools.com/spaces/ "W3Schools Spaces")

Let's refactor our previous example to include keys:

    function Car(props) {
      return <li>I am a { props.brand }</li>;
    }
    
    function Garage() {
      const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
      ];
      return (
        <>
          <h1>Who lives in my garage?</h1>
          <ul>
            {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
          </ul>
        </>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Garage />);

[Run Example »](https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lists_keys)

___

## Test Yourself With Exercises

## Exercise:

Add the attribute that allows React to keep track of elements in lists.

```
function GroceryList() {
  const items = [
    {id: 1, name: 'bread'},
    {id: 2, name: 'milk'},
    {id: 3, name: 'eggs'}
  ];

  return (
    <>
      <h1>Grocery List</h1>
      <ul>
        {items.map((item) => <li ={item.id}>{item.name}</li>)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GroceryList />);

```

[Start the Exercise](https://www.w3schools.com/react/exercise.asp?filename=exercise_lists1)

___