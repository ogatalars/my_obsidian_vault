## [](https://dev.to/rajrathod/mastering-object-oriented-programming-with-typescript-encapsulation-abstraction-inheritance-and-polymorphism-explained-c6p#what-is-oops)What is OOPS?

Object-Oriented Programming is a programming paradigm that revolves around the concept of "objects." An object is a self-contained unit that encapsulates data (attributes) and behaviors (methods) that operate on that data. The primary principles of OOP include:

1.  **Encapsulation:** Encapsulation refers to the bundling of data (attributes) and the methods that operate on that data within a single unit (object). It hides the internal implementation details of the object, allowing the object to be treated as a black box, and only exposing a public interface through which other parts of the code can interact with it.
    
2.  **Abstraction:** Abstraction allows you to focus on the essential aspects of an object while hiding the unnecessary complexities. It helps in creating a clear separation between the interface (how an object is used) and the implementation (how it is internally defined).
    
3.  **Inheritance:** Inheritance is a mechanism that enables a class (subclass) to inherit the properties and methods of another class (superclass). This promotes code reusability and hierarchical relationships between classes.
    
4.  **Polymorphism:** Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to represent different types of objects, providing flexibility and extensibility to the codebase.
    

In TypeScript, you can create classes and interfaces to implement object-oriented programming concepts. Here's a basic example of a TypeScript class:  

    class Animal {
      private name: string;
    
      constructor(name: string) {
        this.name = name;
      }
    
      makeSound() {
        console.log(`${this.name} makes a sound.`);
      }
    }
    
    class Dog extends Animal {
      constructor(name: string) {
        super(name);
      }
    
      makeSound() {
        console.log(`${this.name} barks.`);
      }
    }
    
    const dog = new Dog("Buddy");
    dog.makeSound(); // Output: "Buddy barks."
    

Enter fullscreen mode Exit fullscreen mode

In this example, we define an `Animal` class with a `makeSound` method, and then a `Dog` class that extends `Animal`. The `Dog` class overrides the `makeSound` method to provide a specialized implementation.

By using OOP principles in TypeScript, you can create more organized, maintainable, and scalable applications.

## [](https://dev.to/rajrathod/mastering-object-oriented-programming-with-typescript-encapsulation-abstraction-inheritance-and-polymorphism-explained-c6p#what-is-the-class-and-obeject)What is the class and obeject?

A class is a blueprint for creating objects. It defines the structure and behavior of objects that will be instantiated based on the class. A class in TypeScript contains properties (also known as fields or attributes) and methods (functions associated with the class). It encapsulates the data and operations that are related to a particular concept or entity.

Here's the basic syntax for creating a class in TypeScript:  

    class ClassName {
      // Properties (attributes)
      propertyName1: type;
      propertyName2: type;
    
      // Constructor
      constructor(parameter1: type, parameter2: type) {
        this.propertyName1 = parameter1;
        this.propertyName2 = parameter2;
      }
    
      // Methods
      methodName1() {
        // Method implementation
      }
    
      methodName2() {
        // Method implementation
      }
    }
    

Enter fullscreen mode Exit fullscreen mode

Let's create a simple class in TypeScript representing a basic car:  

    class Car {
      // Properties
      make: string;
      model: string;
      year: number;
    
      // Constructor
      constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
      }
    
      // Method
      start() {
        console.log(`Starting the ${this.make} ${this.model}.`);
      }
    }
    

Enter fullscreen mode Exit fullscreen mode

Now, an object is an instance of a class. Once you have defined a class, you can create objects based on that class blueprint. Objects represent specific instances of the entity described by the class. Each object has its own set of properties and can invoke methods defined in the class.

Here's how you create an object based on the `Car` class we defined earlier:  

    const myCar = new Car("Toyota", "Camry", 2022);
    const anotherCar = new Car("Honda", "Accord", 2023);
    
    myCar.start(); // Output: "Starting the Toyota Camry."
    anotherCar.start(); // Output: "Starting the Honda Accord."
    

Enter fullscreen mode Exit fullscreen mode

In this example, we created two separate instances of the `Car` class, `myCar` and `anotherCar`, each with its own set of properties (`make`, `model`, and `year`) and the ability to call the `start` method.

Using classes and objects in TypeScript allows you to structure your code more efficiently, promote code reuse through inheritance, and take advantage of object-oriented programming principles.

## [](https://dev.to/rajrathod/mastering-object-oriented-programming-with-typescript-encapsulation-abstraction-inheritance-and-polymorphism-explained-c6p#encapsulation)Encapsulation

Encapsulation is one of the fundamental principles of Object-Oriented Programming (OOP). It refers to the bundling of data (attributes) and the methods (functions) that operate on that data within a single unit, known as a class. The main goal of encapsulation is to hide the internal implementation details of an object and only expose a well-defined public interface through which other parts of the code can interact with the object. This concept is often summarized with the phrase "data hiding."

Encapsulation provides several benefits:

1.  **Modularity:** By encapsulating related data and behavior within a class, you create a self-contained module that can be reused and maintained independently.
    
2.  **Data Protection:** By making the internal data private (or protected), you prevent unauthorized access and modification from outside the class, ensuring data integrity and security.
    
3.  **Code Flexibility:** Encapsulation allows you to change the internal implementation of a class without affecting the code that uses the class, as long as the public interface remains unchanged.
    

Now, let's see an example of encapsulation in TypeScript:  

    class BankAccount {
      private accountNumber: string;
      private balance: number;
    
      constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
      }
    
      public getAccountNumber(): string {
        return this.accountNumber;
      }
    
      public getBalance(): number {
        return this.balance;
      }
    
      public deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
      }
    
      public withdraw(amount: number): void {
        if (this.balance >= amount) {
          this.balance -= amount;
          console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
        } else {
          console.log("Insufficient balance");
        }
      }
    }
    

Enter fullscreen mode Exit fullscreen mode

In this example, we have a `BankAccount` class that represents a simple bank account. The class has two private properties: `accountNumber` and `balance`. These properties are marked as private, so they are not accessible from outside the class. This ensures that other parts of the code cannot directly access or modify these properties.

To interact with the private properties, the class provides public methods: `getAccountNumber`, `getBalance`, `deposit`, and `withdraw`. These methods serve as the public interface through which other parts of the code can interact with the `BankAccount` object.

Now, let's use this class:  

    const account = new BankAccount("123456789", 1000);
    
    console.log("Account Number:", account.getAccountNumber()); // Output: "Account Number: 123456789"
    console.log("Balance:", account.getBalance()); // Output: "Balance: 1000"
    
    account.deposit(500); // Output: "Deposited 500. New balance: 1500"
    account.withdraw(200); // Output: "Withdrawn 200. New balance: 1300"
    account.withdraw(1500); // Output: "Insufficient balance"
    

Enter fullscreen mode Exit fullscreen mode

In this usage example, we can see that we can access the account number and balance through the public methods, but we cannot directly modify them. This is due to the encapsulation, which protects the internal state of the `BankAccount` object and allows controlled access through the defined public interface.

By encapsulating the data within the class and providing well-defined methods to interact with it, we ensure that the state of the object remains consistent and secure, making the code easier to maintain and less prone to bugs or accidental misuse.

## [](https://dev.to/rajrathod/mastering-object-oriented-programming-with-typescript-encapsulation-abstraction-inheritance-and-polymorphism-explained-c6p#abstraction)Abstraction

Abstraction is a key concept in Object-Oriented Programming (OOP) that focuses on presenting essential features of an object while hiding unnecessary details. It allows you to represent complex systems or entities in a simplified manner, making it easier to understand and work with them. Abstraction enables you to build models that capture the relevant characteristics of an object, without exposing all the implementation specifics.

In OOP, abstraction is achieved through the use of abstract classes and interfaces. These abstract constructs provide a blueprint for other classes to follow, defining a set of methods and properties without providing their implementation. The concrete subclasses that extend the abstract class or implement the interface are responsible for implementing these abstract elements.

The main benefits of abstraction are:

1.  **Simplified Complexity:** Abstraction allows you to focus on the high-level design and behavior of an object, hiding the intricate details that might not be relevant at that level.
    
2.  **Code Reusability:** By defining common interfaces through abstract classes or interfaces, you promote code reuse. Concrete classes can inherit from an abstract class or implement an interface, inheriting its structure and behavior.
    
3.  **Flexibility:** Abstraction enables you to change the implementation details of concrete classes without affecting the overall functionality of the program, as long as the abstract interface remains unchanged.
    

Let's illustrate abstraction with an example:  

    // Abstract class representing a shape
    abstract class Shape {
      abstract getArea(): number;
      abstract getPerimeter(): number;
    }
    
    // Concrete subclass representing a Circle
    class Circle extends Shape {
      private radius: number;
    
      constructor(radius: number) {
        super();
        this.radius = radius;
      }
    
      getArea(): number {
        return Math.PI * this.radius * this.radius;
      }
    
      getPerimeter(): number {
        return 2 * Math.PI * this.radius;
      }
    }
    
    // Concrete subclass representing a Rectangle
    class Rectangle extends Shape {
      private width: number;
      private height: number;
    
      constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
      }
    
      getArea(): number {
        return this.width * this.height;
      }
    
      getPerimeter(): number {
        return 2 * (this.width + this.height);
      }
    }
    

Enter fullscreen mode Exit fullscreen mode

In this example, we have an abstract class called `Shape`. It defines two abstract methods: `getArea()` and `getPerimeter()`. These methods represent the essential characteristics of any shape, but they are not implemented in the `Shape` class itself.

Then, we have two concrete subclasses, `Circle` and `Rectangle`, that extend the `Shape` class. These subclasses are responsible for providing implementations for the abstract methods.

By using abstraction, we can create a collection of different shapes and calculate their areas and perimeters without worrying about the specific implementation details of each shape:  

    function printShapeDetails(shape: Shape) {
      console.log("Area:", shape.getArea());
      console.log("Perimeter:", shape.getPerimeter());
    }
    
    const circle = new Circle(5);
    const rectangle = new Rectangle(4, 6);
    
    printShapeDetails(circle);
    printShapeDetails(rectangle);
    

Enter fullscreen mode Exit fullscreen mode

When we run this code, we get the following output:  

    Area: 78.53981633974483
    Perimeter: 31.41592653589793
    Area: 24
    Perimeter: 20
    

Enter fullscreen mode Exit fullscreen mode

The beauty of abstraction is that the `printShapeDetails` function can work with any shape that implements the `Shape` interface. We can create new shapes, such as triangles, squares, etc., without modifying the `Shape` class or the `printShapeDetails` function. This demonstrates the flexibility and reusability achieved through abstraction.

## [](https://dev.to/rajrathod/mastering-object-oriented-programming-with-typescript-encapsulation-abstraction-inheritance-and-polymorphism-explained-c6p#inheritance)Inheritance

Inheritance is a core concept in Object-Oriented Programming (OOP) that allows a class (subclass) to inherit properties and methods from another class (superclass). It forms an "is-a" relationship between classes, where the subclass is a specialized version of the superclass. Inheritance promotes code reuse, as it allows you to define common attributes and behaviors in a superclass and then extend or modify them in subclasses.

The class that is being inherited from is called the superclass or base class, while the class that inherits from the superclass is called the subclass or derived class.

Here are the main advantages of inheritance:

1.  **Code Reusability:** Inheritance allows you to reuse the functionality defined in the superclass, reducing the amount of redundant code in your application.
    
2.  **Modularity:** Inheritance promotes a hierarchical organization of classes, making the code more organized and easier to maintain.
    
3.  **Polymorphism:** Inherited methods can be overridden in the subclass to provide specialized behavior, allowing for polymorphic behavior when dealing with objects of different classes through a common superclass interface.
    

Let's demonstrate inheritance with an example:  

    // Base class: Animal
    class Animal {
      private name: string;
      private age: number;
    
      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }
    
      makeSound() {
        console.log("Some generic sound");
      }
    
      getInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
      }
    }
    
    // Subclass: Dog (inherits from Animal)
    class Dog extends Animal {
      private breed: string;
    
      constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
      }
    
      makeSound() {
        console.log("Woof!");
      }
    
      getInfo() {
        return `${super.getInfo()}, Breed: ${this.breed}`;
      }
    }
    

Enter fullscreen mode Exit fullscreen mode

In this example, we have a base class `Animal` with properties `name` and `age`, and methods `makeSound()` and `getInfo()`. Then, we define a subclass `Dog` that inherits from `Animal`. The `Dog` class adds its specific property `breed` and overrides the `makeSound()` and `getInfo()` methods.

Now, let's create objects based on these classes:  

    const genericAnimal = new Animal("Generic Animal", 5);
    console.log(genericAnimal.getInfo()); // Output: "Name: Generic Animal, Age: 5"
    genericAnimal.makeSound(); // Output: "Some generic sound"
    
    const dog = new Dog("Buddy", 3, "Labrador");
    console.log(dog.getInfo()); // Output: "Name: Buddy, Age: 3, Breed: Labrador"
    dog.makeSound(); // Output: "Woof!"
    

Enter fullscreen mode Exit fullscreen mode

In this example, we can see that the `Dog` class inherits the `name`, `age`, and methods from the `Animal` class. The `makeSound()` method is overridden in the `Dog` class to provide the specific sound of a dog ("Woof!"). Additionally, the `getInfo()` method is also overridden in the `Dog` class to include the `breed` property along with the `name` and `age`.

By using inheritance, we can create a hierarchy of classes where each subclass inherits and extends the functionality of the superclass. This approach allows us to reuse common code, define specialized behaviors, and build complex systems in a structured and modular way.

## [](https://dev.to/rajrathod/mastering-object-oriented-programming-with-typescript-encapsulation-abstraction-inheritance-and-polymorphism-explained-c6p#polymorphism)Polymorphism

Polymorphism is another important concept in Object-Oriented Programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. It enables a single interface (method or property) to represent different types of objects, providing flexibility and extensibility to the codebase. Polymorphism is often achieved through method overriding and method overloading.

There are two types of polymorphism:

1.  **Compile-time Polymorphism (Static Polymorphism):** This type of polymorphism is resolved at compile time. It occurs when the method overloading is used, i.e., having multiple methods with the same name but different parameter lists. The compiler determines the appropriate method to call based on the method's signature and the arguments passed during the function call.
    
2.  **Run-time Polymorphism (Dynamic Polymorphism):** This type of polymorphism is resolved at run time. It occurs when the method overriding is used, i.e., having a method in the subclass with the same name and signature as the one in the superclass. The method to be called is determined at run time based on the actual type of the object.
    

Let's illustrate both types of polymorphism with an example:  

    // Compile-time Polymorphism (Method Overloading)
    class MathOperations {
      add(a: number, b: number): number;
      add(a: string, b: string): string;
      add(a: any, b: any): any {
        return a + b;
      }
    }
    
    const math = new MathOperations();
    console.log(math.add(5, 10)); // Output: 15 (number addition)
    console.log(math.add("Hello, ", "World!")); // Output: "Hello, World!" (string concatenation)
    
    // Run-time Polymorphism (Method Overriding)
    class Animal {
      makeSound() {
        console.log("Some generic sound");
      }
    }
    
    class Dog extends Animal {
      makeSound() {
        console.log("Woof!");
      }
    }
    
    class Cat extends Animal {
      makeSound() {
        console.log("Meow!");
      }
    }
    
    function animalSound(animal: Animal) {
      animal.makeSound();
    }
    
    const dog = new Dog();
    const cat = new Cat();
    
    animalSound(dog); // Output: "Woof!" (Dog's sound)
    animalSound(cat); // Output: "Meow!" (Cat's sound)
    

Enter fullscreen mode Exit fullscreen mode

In this example, we first demonstrate compile-time polymorphism through method overloading in the `MathOperations` class. We define two versions of the `add` method: one for number addition and another for string concatenation. The appropriate method is chosen at compile time based on the argument types used during the function call.

Next, we demonstrate run-time polymorphism through method overriding in the `Animal`, `Dog`, and `Cat` classes. The `Animal` class has a `makeSound` method that provides a generic sound. Both the `Dog` and `Cat` classes override the `makeSound` method to provide their specific sounds. When we call the `animalSound` function with different objects of `Dog` and `Cat`, the appropriate `makeSound` method is dynamically determined at run time based on the actual object's type.

Polymorphism allows you to write more flexible and extensible code by treating objects based on their common interface rather than their specific types. It plays a crucial role in designing large-scale applications and simplifies the interactions between various classes and modules.

## [](https://dev.to/rajrathod/mastering-object-oriented-programming-with-typescript-encapsulation-abstraction-inheritance-and-polymorphism-explained-c6p#typescript-interfaces)TypeScript Interfaces

In TypeScript, interfaces are used to define the structure and shape of an object. They provide a way to define contracts that objects must adhere to, specifying the properties, methods, and their types that an object of that interface should have. Interfaces play a crucial role in achieving static type checking and providing code documentation. Here's an overview of TypeScript interfaces:

### [](https://dev.to/rajrathod/mastering-object-oriented-programming-with-typescript-encapsulation-abstraction-inheritance-and-polymorphism-explained-c6p#interface-declaration)Interface Declaration:

You can declare an interface using the `interface` keyword, followed by the name of the interface. For example:  

       interface Person {
         name: string;
         age: number;
       }
    

Enter fullscreen mode Exit fullscreen mode

### [](https://dev.to/rajrathod/mastering-object-oriented-programming-with-typescript-encapsulation-abstraction-inheritance-and-polymorphism-explained-c6p#properties)Properties:

Interfaces define the properties that an object must have. Each property is defined with a name and its type. For example:  

       interface Person {
         name: string;
         age: number;
       }
    

Enter fullscreen mode Exit fullscreen mode

### [](https://dev.to/rajrathod/mastering-object-oriented-programming-with-typescript-encapsulation-abstraction-inheritance-and-polymorphism-explained-c6p#optional-properties)Optional Properties:

You can make properties optional in an interface by adding a `?` (question mark) after the property name. These properties can be present or omitted in the implementing object. For example:  

       interface Person {
         name: string;
         age?: number;
       }
    

Enter fullscreen mode Exit fullscreen mode

### [](https://dev.to/rajrathod/mastering-object-oriented-programming-with-typescript-encapsulation-abstraction-inheritance-and-polymorphism-explained-c6p#readonly-properties)Readonly Properties:

You can mark properties as readonly using the `readonly` modifier. Readonly properties can only be assigned a value when the object is created and cannot be modified thereafter. For example:  

       interface Person {
         readonly name: string;
         readonly age: number;
       }
    

Enter fullscreen mode Exit fullscreen mode

### [](https://dev.to/rajrathod/mastering-object-oriented-programming-with-typescript-encapsulation-abstraction-inheritance-and-polymorphism-explained-c6p#methods)Methods:

Interfaces can also define methods that an object should implement. Method signatures include the method name, parameter types, and return type. For example:  

       interface Calculator {
         add(a: number, b: number): number;
         subtract(a: number, b: number): number;
       }
    

Enter fullscreen mode Exit fullscreen mode

### [](https://dev.to/rajrathod/mastering-object-oriented-programming-with-typescript-encapsulation-abstraction-inheritance-and-polymorphism-explained-c6p#extending-interfaces)Extending Interfaces:

Interfaces can extend other interfaces, inheriting their properties and methods while adding new ones. This helps in creating modular and reusable interface definitions. For example:  

       interface Employee extends Person {
         employeeId: number;
         department: string;
       }
    

Enter fullscreen mode Exit fullscreen mode

### [](https://dev.to/rajrathod/mastering-object-oriented-programming-with-typescript-encapsulation-abstraction-inheritance-and-polymorphism-explained-c6p#implementing-interfaces)Implementing Interfaces:

To ensure an object adheres to an interface, you can use the `implements` keyword to specify that the object implements a particular interface. TypeScript will enforce that the object provides the required properties and methods. For example:  

       class Person implements Employee {
         name: string;
         age: number;
         employeeId: number;
         department: string;
       }
    

Enter fullscreen mode Exit fullscreen mode

Interfaces in TypeScript provide a way to define contracts and enforce type checking for objects. They promote code reusability, maintainability, and help in catching errors at compile-time. They are a fundamental tool in writing type-safe and structured code in TypeScript.

## [](https://dev.to/rajrathod/mastering-object-oriented-programming-with-typescript-encapsulation-abstraction-inheritance-and-polymorphism-explained-c6p#thank-you)Thank You 🌿

> Thank you for taking the time to read my blog post! I hope you found it helpful and informative. Your support and engagement mean a lot to me. If you have any questions or feedback, please don’t hesitate to reach out. I appreciate your continued interest and look forward to sharing more valuable content in the future. Thank you once again!