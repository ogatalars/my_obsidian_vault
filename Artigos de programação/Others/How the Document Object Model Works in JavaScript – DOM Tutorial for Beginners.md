  ![How the Document Object Model Works in JavaScript – DOM Tutorial for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2023/01/JavaScript-DOM-cover-image1.jpg)

The Document Object Model (DOM) is an essential part of web development. It provides a way for programmers to interact with and manipulate the structure of a website.

With the help of the DOM, developers can access and change the different parts of a webpage. This allows them to create dynamic and interactive websites, where user interactions can trigger changes in the page's layout and content.

Understanding the DOM is crucial for creating responsive and user-friendly websites. So in this article, we will delve deeper into what the DOM can do and how you can use it in JavaScript.

## What is the DOM?

The DOM, or Document Object Model, is like a map of a website. Just like how a map shows you where all the streets and buildings are in a city, the DOM shows you where everything is on a website.

The DOM helps your computer understand the different parts of a website and how they are put together.

Just like you can use a map to find your way around a city, programmers can use the DOM to find different parts of a website and change their properties. For example, they can make a button change color when a user hovers over it or make pictures move around on the screen.

The DOM is like a big puzzle. But using JavaScript, we can move the puzzle pieces around and make a website look and work however we want it to work.

JavaScript is a programming language that helps us interact with the DOM. The DOM and JavaScript are like two friends that work together to make websites cool and interactive. Again, the DOM is like a big map that shows where all the different parts of the website are located.

On the other hand, JavaScript is like a magic wand that can change a website by using the map (DOM) to find the different parts of the website. It can make a button change color when you click on it or make a picture move to a different spot on the page.

Together, the DOM and JavaScript make the website come alive and respond to what you do, like moving your mouse or clicking on a button.

In summary, the DOM is like a map that shows where everything is and JavaScript is like a magic wand that can change things on that map.

## DOM Structure – Understanding the DOM Tree

Imagine a website is like a big book, and each page in that book represents a different part of the website. The DOM tree is like a table of contents for that book. It shows you all the different parts of the website, and how they are organized.

Each part of the website is called an "element" and these elements are arranged in a tree-like structure.

The top of the tree is called the "root" and it represents the entire website. From there, the tree branches out into different sections, like the headings, paragraphs, images, and others that make up the entire website.

![DOM-tree-5](https://www.freecodecamp.org/news/content/images/2023/01/DOM-tree-5.png)

Illustration of the DOM tree

Just like how the table of contents in a book helps you find specific pages, the DOM tree helps computers find specific elements on a website. In addition, it allows developers to access and change those elements, so they can make the website interactive.

In short, the DOM tree represents the structure of a website in a way that computers can understand. Developers can use it to access and manipulate different elements in that structure to create dynamic web pages.

## How to Access the DOM

Accessing elements in the DOM means finding specific parts of a website and changing or manipulating them.

To access an element on a website, you need to know the specific element you want to access.

JavaScript provides different methods to access the elements in the DOM, such as `getElementById`, `getElementsByTagName`, `querySelector`, and `querySelectorAll`.

These methods allow you to find an element based on its `id`, `tagname`, or `classname` and select it for manipulation.

For example, you can access a button on a webpage and change its text or color when a user clicks on it. Or, you can access an image on a webpage and change it to a different image when a user hovers over it.

Here's an example of how you might use the DOM to access an element on a webpage:

Let's say you have a webpage that displays a list of students and you want to change the background color of a specific student when they are clicked.

You can use the DOM method `getElementById` to access the specific element that represents the student and then use the `style` property in JavaScript to change the background color of that element.

Here's how that might look:

    <div id="student-list">
      <div id="student-1" class="student">John</div>
      <div id="student-2" class="student">Alice</div>
      <div id="student-3" class="student">Bob</div>
    </div>

HTML code

    .student {
      padding: 40px;
      margin-bottom: 10px;
      cursor: pointer;
    }
    .student:hover {
      background-color: #f1f1f1;
    }
    

CSS code

    let student1 = document.getElementById("student-1");
    
    student1.addEventListener("click", () => {
      student1.style.backgroundColor = "lightblue";
    });
    

JavaScript code

In this example, JavaScript is using the `getElementById` method to select the element with the id "student-1" and it changes its `backgroundColor` property to "light blue" when you click on it.

![Document_4](https://www.freecodecamp.org/news/content/images/2023/01/Document_4.gif)

Similarly, you can use `getElementsByClassName` to select all elements with a specific class and `querySelector` to select an element based on a CSS selector.

This is just a basic example, but it illustrates how you can use the DOM to access specific elements on a webpage and change their properties in response to user interaction.

## How to Add, Remove, and Modify DOM Elements

Adding, removing, and modifying elements in the DOM refers to adding new elements to a webpage, removing existing elements, and changing the properties of existing elements.

For example, if you want to add a new button to a webpage, you would use JavaScript to create a new element and then use the DOM to add that element to the webpage. Similarly, if you want to remove an element, you would use the DOM to find the element and then delete it.

Modifying elements also involves making changes to the properties of an existing element. For example, you could use the DOM to change the text inside a button.

Here’s how you can express this in code.:

        <div id="wrapper" class="btn-wrapper">
          <button id="create-btn" class="btn">Create new button</button>
        </div>

HTML code

    .btn-wrapper {
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }
    

CSS code

    let createButton = document.getElementById("create-btn");
    let wrapper = document.getElementById("wrapper");
    
    createButton.addEventListener("click", () => {
      let newButton = document.createElement("button");
      newButton.innerHTML = "Click me";
      wrapper.appendChild(newButton);
    });

JS code

In the above example, we are creating a new button element and setting the text inside the button to "Click me". Then we're using the `appendChild` method to add this new button element to the webpage.

![Document](https://www.freecodecamp.org/news/content/images/2023/01/Document.gif)

## Recap

The Document Object Model (DOM) is an essential tool for creating interactive, dynamic web pages using JavaScript. It allows developers to access and manipulate the contents of a webpage in real time.

Understanding the DOM tree and how to access, add, remove, and modify elements is crucial for JavaScript developers.

We've seen how the DOM represents a webpage as a tree of objects and how we can use different methods like `getElementById`, `getElementsByTagName`, `querySelector`, and `querySelectorAll` to access specific elements on a webpage. With these methods, we can change the content, style, or layout of a webpage after it has loaded in the browser.

Additionally, we've seen how to add new elements to a webpage, remove existing elements, and change the properties of existing elements.

## Conclusion

I hope this article has given you a better understanding of the Document Object Model and how to use it to create dynamic web pages.

Remember that the DOM is a powerful tool that you can use to create amazing websites, so don't be afraid to experiment and try new things.

Thanks for reading! Kindly share this article and follow me on  Twitter [@alege\_dev](https://twitter.com/alege_dev) for updates on future posts.

___

___

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started](https://www.freecodecamp.org/learn/)