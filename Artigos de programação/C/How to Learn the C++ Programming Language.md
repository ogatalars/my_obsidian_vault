  ![How to Learn the C++ Programming Language](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/How-to-Learn-the-C---Programming-Language.png)

In the early days of computer programming, programmers had to write individual instructions in the Assembly language one by one.

Later on programming languages like FORTRAN and COBOL were created. The problem with these languages was that they were targeted at a certain group of people – FORTRAN for engineers and scientists and COBOL for business people.

Then during the 60s a new language called Simula surfaced and introduced the concept of a class, which sort of let anyone make software for their special fields.

After that, during the 80s, Bjarne Stroustrup came up with the idea of combining the general abstraction of Simula with the low level functionalities of C, which at the time was the best language for the job.

Thus, "C with Classes" was born which later became known as the C++ programming language.

The C++ programming language is a statically typed, compiled, multi-paradigm, general purpose programming language notorious for it's steep learning curve. It has wide spread use in video game, desktop software, and embedded system development.

C++ is somewhat complex and extremely powerful – and to be honest, if you plan your learning roadmap properly, C++ is not as bad as many people may want you to believe.

In this article, I'll start by showing you the very basics of the C++ programming language.

If you've programmed before, this introduction should be pretty straightforward for you. But if you're learning C++ as your first programming language, you may find it quite challenging because of the sheer amount of concepts you'll have to understand.

Once I've finished with the introduction, I'll give you a list of high quality learning resources as well as recommendations on how to make the most out of them.

So without further ado, let's jump in.

## Table of Contents

-   [High Level Overview of C++](https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/#high-level-overview-of-c-)
    -   [Hello World](https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/#hello-world)
    -   [Understanding a C++ Program](https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/#understanding-a-c-program)
    -   [Common Data Types and Arrays](https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/#common-data-types-and-arrays)
    -   [Flow Control](https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/#flow-control)
    -   [Functions](https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/#functions)
-   [C++ Learning Resources](https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/#c-learning-resources)
    -   [Learn C++ in 31 Hours](https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/#learn-c-in-31-hours)
    -   [Learn C++ in 4 Hours](https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/#learn-c-in-4-hours)
    -   [Object Oriented Programming (OOP) in C++](https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/#object-oriented-programming-oop-in-c-)
    -   [OpenGL Crash Course](https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/#opengl-crash-course)
    -   [Unreal Engine in 5 Hours](https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/#unreal-engine-in-5-hours)
-   [Conclusion](https://www.freecodecamp.org/news/how-to-learn-the-c-programming-language/#conclusion)

## High Level Overview of C++

Before I jump into the learning roadmap and resources section, I would like to introduce you to the C++ programming language itself. This way, you won't feel overwhelmed once you start diving into the below mentioned resources.

Keep in mind that this section assumes that you have experience of working with some other programming language such as Python or JavaScript.

### Hello World

As I've already mentioned, C++ is a statically typed, compiled programming language and there are a number of compilers available out there.

The GCC or GNU Compiler Collection is one of the most popular compilers for C++ and my fellow freeCodeCamp author [Md. Fahim Bin Amin](https://www.freecodecamp.org/news/author/fahimbinamin/) has written an excellent guide on [How to Install C and C++ Compilers on Windows](https://www.freecodecamp.org/news/how-to-install-c-and-cpp-compiler-on-windows/).

Depending on your Linux distribution, one of the following commands should install GCC for you:

    # Debian/Ubuntu
    sudo apt install build-essential
    
    # Fedora
    sudo dnf install make automake gcc gcc-c++
    
    # Arch Linux
    sudo pacman -S base-devel

On a mac, you can either install GCC using [Homebrew](https://brew.sh/) or follow the guide written by another freeCodeCamp author [Daniel Kehoe](https://www.freecodecamp.org/news/author/danielkehoe/) on [How to Install Xcode Command Line Tools on a Mac](https://www.freecodecamp.org/news/install-xcode-command-line-tools/).

Apart from GCC, there is also MSVC or Microsoft Visual C++ compiler on Windows. To install MSVC, head over to [https://visualstudio.com/](https://visualstudio.com/), download the latest installer, and install the "Desktop development with C++" workload:

![image-120](https://www.freecodecamp.org/news/content/images/2022/03/image-120.png)

Once you've done that, you should be able to write and compile C++ programs on your computer. To do so, create a file `hello-world.cpp` anywhere in your computer and put the following code in it:

    #include <iostream>
    
    int main() {
    std::cout << "Hello World!" << std::endl;
        
        return 0;
    }

Now if you're using GCC, open a terminal window in the same directory where the `hello-world.cpp` file exists and execute the following command:

    g++ -o hello-world hello-world.cpp

This command will compile the `hello-world.cpp` into the file indicated in the `-o` option. You should see a new binary file named `hello-world` in the same folder. Execute the file from the terminal as follows:

    ./hello-world
    
    # Hello World!

If you're using MSVC, open up the start menu and search for "Developer PowerShell" and open the appropriate program according to your Visual Studio version:

![developer-powershell](https://www.freecodecamp.org/news/content/images/2022/03/developer-powershell.png)

Now, cd into the directory where you've saved your `hello-world.cpp` file and execute the following command:

    cl -o hello-world hello-world.cpp

Like the `g++` command, this will compile your `hello-world.cpp` file into a `hello-world.exe` binary executable. Execute the file using the following command:

    .\hello-world.exe
    
    # Hello World!

### Understanding a C++ Program

Now that you've written your first C++ program, it's time to understand what you just did. Let's take a look at the source code once again:

    #include <iostream>
    
    int main() {
    std::cout << "Hello World!" << std::endl;
        
        return 0;
    }

The source file has four lines of code in total. The first line is `#include <iostream>` and it does exactly what it sounds like. It includes the content of the `iostream` header file in the `hello-world.cpp` file.

Header files contain declarations of things like the `std::cout` and `std::endl` objects. The `iostream` header file deals with input and output streams.

After the `#include` statement, the `int main(){}` lines declares and defines a new function. This `main()` function will be called by the OS when you execute your program and every executable C++ program must have a `main()` function.

Everything you write within the curly braces will be part of this function. In the above mentioned code, the `std::cout` object prints any string that comes after the `<<` sign. The `std::endl` object appends a newline character at the end of the line. You can chain multiple things to output in a single `std::cout` call as follows:

    #include <iostream>
    
    int main() {
    std::cout << "Hello World!" << " " << "C++ is awesome!" << std::endl;
        
        return 0;
    }

If you compile and run this program, you'll get the following output:

    Hello World! C++ is awesome!

The word `int` in the function declaration simply means this function returns an integer. Returning `0` at the end of a program means it ran successfully. A non zero return value usually indicates some kind of failure, but that topic is out of the scope of this article.

### Common Data Types and Arrays

C++ has seven fundamental data types. They are as follows:

| Data Type | Meaning |
| --- | --- |
| `int` | Integer |
| `float` | Floating Point |
| `double` | Double Floating Point |
| `char` | Character |
| `w_char` | Wide Character |
| `bool` | Boolean |
| `void` | Empty |

There are modifiers such as `short`, `long`, `signed`, and `unsigned` but I won't touch upon them in this high level overview.

To declare a variable of a certain data type, you can do something like this:

    #include<iostream>
    
    int main() {
    int number = 25;
    
    std::cout << "The number is " << number << std::endl;
        
        return 0;
    }

If you compile and run this program, the output will be:

    The number is 25

There are also arrays which are capable of storing multiple values of the same type. So if you want to declare an array of type `int`, you can do so as follows:

    #include<iostream>
    
    int main() {
    int numbers[] = { 1, 2, 3, 4, 5 };
    
    std::cout << "The number is " << numbers[0] << std::endl;
    
    return 0;
    }

You can access any element from the array following the `array_name[element_index]` syntax. Array indexes are zero-based so to access the number one element, you'll have to write `numbers[0]`, and the output of the above code will be:

    The number is 1

You can also create strings using arrays of `char` type as follows:

    #include<iostream>
    
    int main() {
    char name[] = "Farhan";
    
    std::cout << "My name is " << name << std::endl;
    
    return 0;
    }

The output of this program will be:

    My name is Farhan

There is also `std::string` but I won't touch upon that. You can [read more about it here](https://www.freecodecamp.org/news/c-string-std-string-example-in-cpp/).

### Flow Control

In C++ there are the common ways of controlling the flow of your program such as if-else statements, switch statements, loops, breaks and so on.

In this section, I'll show you an example of if-else, a for loop, and a break statement.

Have a look at the following program:

    #include<iostream>
    
    int main() {
    int numbers[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    
    for (int i = 0; i < 10; i++) {
    if (numbers[i] == 5) {
    std::cout << numbers[i] << std::endl;
    
    break;
    }
    }
    
    return 0;
    }

It's a simple program that loops over an array of integers and checks whether the current element if 5 or not. If it is, the program will print out the number and break out of the loop. This can also be done using a range-based for loop as follows:

    #include<iostream>
    
    int main() {
    int numbers[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    
    for (auto number : numbers) {
    if (number == 5) {
    std::cout << number << std::endl;
    
    break;
    }
    }
    
    return 0;
    }

The `auto` keyword will infer the type of the variable automatically. This syntax is again out of the scope of this article, but I just wanted to show you what you can do in C++.

### Functions

Like any other programming language, C++ also has functions. You can create one as follows:

    #include<iostream>
    
    int add(int a, int b) {
    return a + b;
    }
    
    int main() {
    std::cout << "The sum is " << add(8, 2) << std::endl;
    
    return 0;
    }

In this example, I've created a function named `add()` which returns an `int` and takes `int a` and `int b` as parameters.

When you call this function and pass two integers to it, the function will simply add the two numbers and return the sum. This is probably the simplest form of function in C++. In reality functions can get much more complex than this.

Now that you have a very brief idea of how the C++ programming language works, I'll introduce you to some very high quality learning resources on YouTube that you can use to learn C++.

## C++ Learning Resources

In this section I'll give you a list of free and awesome videos on C++. Let's begin with the first one.

### Learn C++ in 31 Hours

<iframe src="https://www.youtube.com/embed/8jLOx1hD3_o?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" title="Embedded content" loading="lazy" name="fitvid0"></iframe>

This is the latest C++ video on freeCodeCamp's YouTube channel. It's 31 hours long and touches upon every single important C++ concept. This is also the most up to date video on the list.

The instructor **Daniel Gakwaya** is an experienced software developer and knows what's he doing. If you're getting started with C++ in 2022, this is the video to follow.

But there are a few things to keep in mind when you're watching this. I've watched this video myself to brush up my rusty C++ skills and I can say from experience that you may feel overwhelmed by the time you've reached the middle of the video.

Don't worry, it's totally okay. What I suggest that you do is don't try to watch the entire video in one go. That way you won't remember anything.

Start from **Chapter 1** and watch the video until **Chapter 7**. Make sure to take breaks after each chapter and practice what you've learned.

Once you've reached Chapter 7, you should be able to solve any basic programming problem using C++. So find a programming problem solving platform that suits you and start solving problems using C++.

Once you feel confident about what you've already learned, come back to the video and resume watching.

Then I would suggest that you watch one chapter a day starting from Chapter 8. Because these are all intermediate to advanced topics and will take time to be properly understood. Don't rush, take it slow.

### Learn C++ in 4 Hours

<iframe src="https://www.youtube.com/embed/vLnPwxZdW4Y?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" title="Embedded content" loading="lazy" name="fitvid1"></iframe>

If you think that 31 hours is a bit too overwhelming for you, then I would suggest this one. It's one of the older videos on the channel and teaches most of the fundamental concepts of C++ pretty nicely.

The instructor **Mike** from **Giraffe Academy** has created multiple courses on the freeCodeCamp channel and is well known for making enjoyable long tutorials.

The instructor will build some simple projects such as a calculator and mad libs game during the video. Make sure to understand what he's doing and try to implement those projects by yourself. This way you'll learn way better than just copying what he's doing on the video.

### Object Oriented Programming (OOP) in C++

<iframe src="https://www.youtube.com/embed/wN0x9eZLix4?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" title="Embedded content" loading="lazy" name="fitvid2"></iframe>

This video is a bit different than the previous ones. Let's assume that you know C++ but you're not confident about your understanding of object oriented programming. In that case this video will help you immensely. It's a 1.5 hour long video completely dedicated to object oriented programming in C++.

The instructor **Saldina Nurak** aka **CodeBeauty** is a software developer and runs [an entire channel dedicated to C++](https://www.youtube.com/c/CodeBeauty/). Feel free to check out her content.

### OpenGL Crash Course

<iframe src="https://www.youtube.com/embed/45MIykWJ-C4?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" title="Embedded content" loading="lazy" name="fitvid3"></iframe>

Assume that you have mastered C++ following one of the previous videos and now want to do something fun. Well, one of the most common things that you can do with C++ is working with graphics.

In this almost 2 hour long video course by **Victor Gordan** you'll not only learn about applying you C++ skills to render pretty graphics on screen, but also you'll get a good understanding of how computer graphics work in general.

The video requires understanding of OOP in C++ and some math skills. Even if you're not confident about your math, give the video a go. You may find it fun.

If you like this one and want to learn more, the same instructor has another video on the advanced parts of OpenGL

<iframe src="https://www.youtube.com/embed/GJFHqK_-ARA?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" title="Embedded content" loading="lazy" name="fitvid4"></iframe>

In this one you'll learn a lot more advanced stuff about OpenGL and you'll need an understanding of the topics covered in the previous videos.

There is another instructor **Etay Meiri** who has created a really cool course on OpenGL on the freeCodeCamp YouTube channel.

<iframe src="https://www.youtube.com/embed/GZQkwx10p-8?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" title="Embedded content" loading="lazy" name="fitvid5"></iframe>

In this one, the instructor does an awesome job of teaching you how to implement skeletal animations using OpenGL.

But this video tackles some really advanced concepts so make sure that you have a good command of C++ and a mug of coffee nearby.

### Unreal Engine in 5 Hours

<iframe src="https://www.youtube.com/embed/LsNW4FPHuZE?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" title="Embedded content" loading="lazy" name="fitvid6"></iframe>

If you think rendering graphics manually on screen is not your thing and you want to use your new C++ skills in another way, then this video will surely interest you.

In this 5 hour long video course from Awesome Tuts, you'll create three complete games from scratch using Unreal Engine and C++. Although the video uses Unreal Engine 4 and not 5, you should be able to carry your knowledge from this video to UE5 pretty effortlessly.

If you like this one and want more videos on UE and C++, there are two more from the same instructor.

<iframe src="https://www.youtube.com/embed/SOjZTmOMGcY?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" title="Embedded content" loading="lazy" name="fitvid7"></iframe>

In this one you'll learn to make an endless runner game like Subway Surfer or temple run using Unearl Engine 4 and C++.

<iframe src="https://www.youtube.com/embed/4HoJIgyclZ4?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" title="Embedded content" loading="lazy" name="fitvid8"></iframe>

If you're not into endless runners and want to create a first person shooter, the instructor also has a video on that.

## Conclusion

I would like to thank you from the bottom of my heart for the time you've spent reading this article. I hope you've learned some valuable stuff from this article and always remember:

> “The only way to learn a new programming language is by writing programs in it.” -- Dennis Ritchie

So keep applying what you're learning about C++, make whimsical projects, share them on GitHub, and you'll become a C++ wizard in no time.

I also have a personal blog where I write about random tech stuff, so if you're interested in something like that, checkout [https://farhan.dev](https://farhan.dev/). If you have any questions or are confused about anything – or just want to get in touch – I'm available on [Twitter](https://twitter.com/frhnhsin) and [LinkedIn](https://www.linkedin.com/in/farhanhasin/).

___

___

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started](https://www.freecodecamp.org/learn/)