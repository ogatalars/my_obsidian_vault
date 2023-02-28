  ![What is an Algorithm? Algorithm Definition for Computer Science Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2022/11/laptop-gfe4d4bfc0_1280.png)

If you’re a student and want to study computer science, or you’re learning to code, then there’s a chance you’ve heard of algorithms. Simply put, an algorithm is a set of instructions that performs a particular action.

Contrary to popular belief, an algorithm is not some piece of code that requires extremely advanced knowledge in order to implement. At the same time, I won't say that an algorithm is easy to implement, either. Some can be, but it depends on what you're trying to do.

In the end, the best way to get better at algorithms is by practicing them regularly.

In this article, you'll learn all about algorithms so you'll be prepared next time you encounter one, or have to write one yourself. I will also share some freeCodeCamp resources that will help you learn how to write algorithms in different languages.

## What We'll Cover

-   [What Exactly Is an Algorithm?](https://www.freecodecamp.org/news/what-is-an-algorithm-definition-for-beginners/#whatexactlyisanalgorithm)
-   [Why Do You Need an Algorithm?](https://www.freecodecamp.org/news/what-is-an-algorithm-definition-for-beginners/#whydoyouneedanalgorithm)
-   [Types of Algorithms](https://www.freecodecamp.org/news/what-is-an-algorithm-definition-for-beginners/#typesofalgorithms)
-   [Which Programming Language Is Best for Writing Algorithms?](https://www.freecodecamp.org/news/what-is-an-algorithm-definition-for-beginners/#whichprogramminglanguageisbestforwritingalgorithms) (rename)
-   [Resources for Learning Algorithms](https://www.freecodecamp.org/news/what-is-an-algorithm-definition-for-beginners/#resourcesforlearningalgorithms)
-   [Conclusion](https://www.freecodecamp.org/news/what-is-an-algorithm-definition-for-beginners/#conclusion)

## What Exactly Is an Algorithm?

An algorithm is a set of steps for solving a known problem. Most algorithms are implemented to run following the **four steps** below:

-   take an input
-   access that input and make sure it's correct
-   show the result
-   terminate (the stage where the algorithm stop running)

Some steps of the algorithm may run repeatedly, but in the end, **termination** is what ends an algorithm.

For example, the algorithm below sort numbers in descending order. It loops through the numbers specified until it arranges them in descending order, then terminates when there are no more number to sort:

    function sortNumbersInDescendingOrder(nums) {
      let sortedNums = false;
      while (!sortedNums) {
        sortedNums = true;
        for (let i = 1; i < nums.length; i++) {
          if (nums[i] > nums[i - 1]) {
            [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
            sortedNums = false;
          }
        }
      }
      return nums;
    }
    
    const unsortedNums = [2, 3, 1, 6, 4, 5, 10, 9, 8, 7];
    const sortedNums = sortNumbersInDescendingOrder(unsortedNums);
    
    console.log(sortedNums); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
    

For a theoretical basis, for instance, an algorithm for dividing two numbers and showing the remainder could run through the steps below:

-   **Step 1**: the user enters the first and second numbers – the dividend and the divisor
-   **Step 2**: the algorithm written to perform the division takes in the number, then puts a division sign between the dividend and the divisor. It also checks for a remainder.
-   **Step 3**: the result of the division and remainder is shown to the user
-   **Step 4**: the algorithm terminates

Here's how that kind of algorithm is implemented in JavaScript:

    function divideTwoNums(num1, num2) {
      const result =  num1 / num2;
      const remainder = num1 % num2
      
      return `The result is ${result} remainder ${remainder}`
    }
    
    const result = divideTwoNums(21, 2)
    
    console.log(result) // The result is 10.5 remainder 1
    

If there's an error, the algorithm may not run, or might return the wrong output. If the programmer who wrote the algorithm took user experience into consideration, then an error handler could show an error to the user and let them know what to do.

## Why do you Need an Algorithm?

If you’re one of those computer science students asking “why algorithms”, here are some reasons why you should learn about them:

**Problem Solving**: being able to write an algorithm improves your problem-solving capacity. It is a common belief that once you can solve a problem with one thing, you can solve problems with another closely related one. So, if you can solve problems with Python, you can solve problems with JavaScript.

**Scalability**: an algorithm helps your software/application/website respond appropriately to demands.

**Proper Utilization of Resources:** choosing the right algorithm ensures proper utilization of resources such as memory, storage, network, and others.

## Types of Algorithms

Algorithms in computer science can be broadly categorized into searching and sorting algorithms:

-   Sorting – selection sort, bubble sort, insertion sort, merge sort, quick sort, and so on.
-   Searching – binary search, exponential search, jump search, and so on.

But there are many types of algorithms that programers use regularly. Here are some other common algorithm types organized by category:

-   Hashing – SHA-256, SHA-1
-   Brute force – trial and error
-   Divide and conquer – merge sort algorithm
-   Greedy – Prim's algorithm, Kruskal's algorithm
-   Recursive – computer factorials

## Which Programming Language Is Best for Writing Algorithms?

You can write angorithms in any programming language. There's no benefit to using one language over another.

Every language has its strengths and weaknesses, and each has unique syntax and features. So writing an algorithm might look different in one language compared to another.

But algorithms are universal concepts. So if you can write **bubble sort** in Python, you should also be able to write it in JavaScript or C#.

## Resources for Learning Algorithms

Here are some videos from the freeCodeCamp YouTube channel that can help you learn algorithms effectively:

-   [Algorithms and Data Structures Tutorial - Full Course for Beginners](https://www.youtube.com/watch?v=8hly31xKli0)
-   [Algorithms in Python – Full Course for Beginners](https://www.youtube.com/watch?v=fW_OS3LGB9Q)
-   [Data Structures Easy to Advanced Course - Full Tutorial from a Google Engineer](https://www.youtube.com/watch?v=RBSGKlAvoiM&list=PLR69o5h4xAwUgZHf8Y6V-KukXHBlbAcc1&index=2)
-   [Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges](https://www.youtube.com/watch?v=oBt53YbR9Kk&list=PLR69o5h4xAwUgZHf8Y6V-KukXHBlbAcc1&index=4)
-   [Understanding Sorting Algorithms](https://www.youtube.com/watch?v=l7-f9gS8VOs&list=PLR69o5h4xAwUgZHf8Y6V-KukXHBlbAcc1&index=14)

Also, the interactive [JavaScript Algorithms and Data Structures Certification](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) on freeCodeCamp can give you a crash course in algorithmic thinking in JavaScript.

## Conclusion

In this article, we went over what an algorithm is, their types, and resources for learning algorithms.

If you read this far, the next thing you should do is start learning algorithms with one or more of the resources listed in this article.

Thank you for reading.

___

___

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started](https://www.freecodecamp.org/learn/)