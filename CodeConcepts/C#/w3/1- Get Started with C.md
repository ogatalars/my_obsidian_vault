___

## C# IDE

The easiest way to get started with C#, is to use an IDE.

An IDE (Integrated Development Environment) is used to edit and compile code.

In our tutorial, we will use Visual Studio Community, which is free to download from [https://visualstudio.microsoft.com/vs/community/](https://visualstudio.microsoft.com/vs/community/).

Applications written in C# use the .NET Framework, so it makes sense to use Visual Studio, as the program, the framework, and the language, are all created by Microsoft.

___

## C# Install

Once the Visual Studio Installer is downloaded and installed, choose the .NET workload and click on the **Modify/Install** button:

![](https://www.w3schools.com/cs/Workload.png)

After the installation is complete, click on the **Launch** button to get started with Visual Studio.

On the start window, choose **Create a new project**:

![](https://www.w3schools.com/cs/Newproject.png)

Then click on the "Install more tools and features" button:

![](https://www.w3schools.com/cs/Newproject2.png)

Choose "Console App (.NET Core)" from the list and click on the Next button:

![](https://www.w3schools.com/cs/Consoleapp.png)

Enter a name for your project, and click on the Create button:

![](https://www.w3schools.com/cs/saveas.png)

Visual Studio will automatically generate some code for your project:

![](https://www.w3schools.com/cs/Program.png)

The code should look something like this:

#### Program.cs

    using System;
    
    namespace HelloWorld
    {
      class Program
      {
        static void Main(string[] args)
        {
          Console.WriteLine("Hello World!");    
        }
      }
    }

[Try it Yourself »](https://www.w3schools.com/cs/trycs.php?filename=demo_helloworld)

Don't worry if you don't understand the code above - we will discuss it in detail in later chapters. For now, focus on how to run the code.

Run the program by pressing the **F5** button on your keyboard (or click on "**Debug**" -> "**Start Debugging**"). This will compile and execute your code. The result will look something to this:

`Hello World!   C:\Users\Username\source\repos\HelloWorld\HelloWorld\bin\Debug\netcoreapp3.0\HelloWorld.exe (process 13784) exited with code 0.   To automatically close the console when debugging stops, enable Tools->Options->Debugging->Automatically close the console when debugging stops.   Press any key to close this window . . .`

**Congratulations**! You have now written and executed your first C# program.

___

## Learning C# At W3Schools

When learning C# at W3Schools.com, you can use our "Try it Yourself" tool, which shows both the code and the result. This will make it easier for you to understand every part as we move forward:

#### Program.cs

    using System;
    
    namespace HelloWorld
    {
      class Program
      {
        static void Main(string[] args)
        {
          Console.WriteLine("Hello World!");    
        }
      }
    }

Result:

`Hello World!`

[Try it Yourself »](https://www.w3schools.com/cs/trycs.php?filename=demo_helloworld)