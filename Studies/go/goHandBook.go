/*
Chapter 1 – Why Learn Go?
Go is fast, simple, and productive. Go is one of the fastest programming languages, beating JavaScript, Python, and Ruby handily in most benchmarks.

But, Go code doesn't run quite as fast as its compiled Rust and C counterparts. That said, it compiles much faster than they do, which makes the developer experience super productive.

A note on the structure of a Go program
We'll go over this all later in more detail, but to sate your curiosity for now, here are a few tidbits about the code:

package main

import "fmt"

func main() {
    fmt.Println("hello world")
}
package main lets the Go compiler know that we want this code to compile and run as a standalone program, as opposed to being a library that's imported by other programs.

import fmt imports the fmt (formatting) package. The formatting package exists in Go's standard library and let's us do things like print text to the console.

func main() defines the main function. main is the name of the function that acts as the entry point for a Go program.

Save the code above in a file called main.go , run go build , and then run the resulting executable.



*/

import "fmt"

func main () {
    fmt.Println("Hello World")
}



/*
Chapter 2 – How to Compile Go Code
What does it mean to be compiled?
Computers need machine code – they don't understand English or even Go. We need to convert our high-level (Go) code into machine language, which is really just a set of instructions that some specific hardware can understand. In your case, your CPU.

The Go compiler's job is to take Go code and produce machine code. On Windows, that would be a .exe file. On Mac or Linux, it would be any executable file.

Computers don't know how to do anything unless we as programmers tell them what to do. Unfortunately, computers don't understand human language. In fact, they don't even understand uncompiled computer programs.

Computers need machine code
A computer's CPU only understands its own instruction set, which we call "machine code". Instructions are basic math operations like addition, subtraction, multiplication, and the ability to save data temporarily.

For example, an ARM processor uses the ADD instruction when supplied with the number 0100 in binary.

!!!! Go, C, Rust, and so on
Go, C, and Rust are all languages where the code is first converted to machine code by the compiler before it's executed.

Compiled programs can be run without access to the original source code, and without access to a compiler.

For example, when your browser executes the code you write in this course, it doesn't use the original code, just the compiled result. Note how this is different than interpreted languages like Python and JavaScript.

With Python and JavaScript, the code is interpreted at runtime by a separate program known as the "interpreter"

Examples of compiled languages
Go

C

C++

Rust

Examples of interpreted languages
JavaSsript

Python

Ruby

Go is Strongly Typed
Go enforces strong and static typing, meaning variables can only have a single type. A string variable like "hello world" can not be changed to an int, such as the number 3.

One of the biggest benefits of strong typing is that errors can be caught at "compile time". In other words, bugs are more easily caught ahead of time because they are detected when the code is compiled before it even runs.

Contrast this with most interpreted languages, where the variable types are dynamic. Dynamic typing can lead to subtle bugs that are hard to detect. With interpreted languages, the code must be run (sometimes in production if you are unlucky 😨) to catch syntax and type errors.

the following code will fail to compile because strings and ints can't be added together:
func main() {
    var username string = "wagslane"
    var password int = 2302323

    fmt.Println("Authorization: Basic", username + ": " + password)
}

*/

/*
Chapter 3 – Variables in Go




*/