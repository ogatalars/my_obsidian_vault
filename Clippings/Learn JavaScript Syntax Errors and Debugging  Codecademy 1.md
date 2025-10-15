---
title: "Learn JavaScript Syntax: Errors and Debugging | Codecademy"
source: "https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscp-22-javascript-syntax-part-ii-c8ddbace-1463-4797-ae12-503c7b0f9552/modules/wdcp-22-learn-javascript-syntax-errors-and-debugging-021f67dd-fa36-4e74-a9b7-470e46f8c913/articles/thinking-about-errors-in-your-code-differently"
author:
published:
created: 2025-10-15
description:
tags:
  - "clippings"
---
## Transforming Code Errors into Learning Opportunities

Discover how to view coding errors as valuable learning experiences in our comprehensive guide. Learn effective strategies for identifying, analyzing, and fixing errors in your code.

## Why bugs in code aren’t bad?

When you get started with coding, it’s inevitable that bugs will show up in your code. You’ll get unintended behaviors, and you even get a long, possibly scary looking, error alongside your bug(s). Even when you’re a seasoned coder you’ll continue to encounter bugs and errors — that’s a good thing! It’s important to understand that making and debugging errors is part of the process and you won’t always know the solution right away. In this article, you learn how to find the bug that’s causing your error, and how to think about the debugging process differently.

## Changing your perspective: Red is a beautiful color

Red can be a dangerous color. STOP, DANGER, DO NOT ENTER, all loud red signs telling us to turn around, don’t go in there, you’ll get hurt. It’s easy to carry this mindset over to coding that many new programmers get discouraged and distraught over the red error messages that appear in the terminal.

They think, “oh no, I’ve done something wrong again” and “clearly coding isn’t for me, even the computer knows,” but that’s the wrong way of thinking! All programmers, even the most experienced ones, get errors all the time. Believe it or not, experienced programmers likely face far more errors than a new programmer ever will.

Consider the totally made up graph below:

![A chart depicting a linear correlation between the number of errors you'll encounter in your code and the complexity of your code.](https://www.codecademy.com/resources/blog/wp-content/uploads/2018/07/image3-1.png)

As your code increases in complexity, the number of errors you’ll encounter rises at a similar rate. An error means you’re trying to do something that might be a little complicated (or very complicated), and it doesn’t quite work yet, but by no means is it a sign that you should stop trying!

In fact, there are entire engineering roles built around finding and fixing errors. A [site reliability engineer](https://en.wikipedia.org/wiki/Site_Reliability_Engineering) finds and report errors in web platforms. A [test engineer](https://en.wikipedia.org/wiki/Test_engineer) builds automated tests to discover errors in software and make sure that it meets a company’s standards.

Almost all major technology companies offer cash rewards to intrepid programmers who can find bugs in their software. [Google](https://www.google.com/about/appsecurity/reward-program/), [Amazon](https://aws.amazon.com/security/vulnerability-reporting/), and [Microsoft](https://technet.microsoft.com/en-us/library/dn425036.aspx) all encourage users to seek out bugs and report any they might find.

Why do they do this? Why would a major technology company want its users to try to break their software? Because they understand that encountering bugs is one of the best ways you can improve your code. Bugs show you where the weaknesses are, make you really consider what you want your code to accomplish, and then guide you towards building more reliable and secure products.

Okay, okay, that makes sense! Error messages shouldn’t be scary, but tackling them and coming up with a solution is still a skill that must be developed. Being willing to tackle an error is a great first step, and having some tools at your disposal to debug is a great way to feel comfortable tackling even the gnarliest of bugs in the future.

Let’s outline a few steps you can take to solve any compiler errors that you might encounter – these types of errors print out to the console.

The following steps will guide you through a standard error that might get thrown your way as you learn to code, and they’ll show you that errors aren’t as scary as they seem. In fact, the steps are mostly a combination of reading the error carefully and copying and pasting it in a web search!

When an error first appears on your screen, find the line in the error specific to your code. Lots of error messages have tons of boilerplate details that aren’t important to the actual error. You want to find the part of the error message that gives you insight about what happened. That line is generally at the top of the error stack trace.

Let’s take a look at a plausible error that you could encounter when writing a program that finds students on the honor roll among a list of students based on their GPA. Given the list, you might want to filter for all of the honor roll students by looking at the `gpa` property.

```
const GPA_BENCHMARK = 3.5;
let students = {
  1: {
    name: 'Egill Vignission',
    gpa: 3.4
  },
  2: {
    name: 'Bianca Pargas',
    gpa: 3.8
  },
  3: {
    name: 'Aisling O\'Sullivan',
    gpa: 3.4
  },
  4: {
    name: 'Sameer Fares',
    gpa: 3.9
  }
}
 
let honorRoll = students.filter(student => {
 return student.gpa >= GPA_BENCHMARK;
});
 
console.log(honorRoll);
```

After running that code, a *stack trace* that contains a lot of error information will appear:

So, which line has the most important information? The first two lines seem pretty promising.

The first line says that the JavaScript engine doesn’t think that `.filter()` is a function — but it should be, so there might be an issue in how it’s being used. The second line points to the line of code that is throwing the error, which is line 21 and at the 26th character: `let honorRoll = students.filter(student => {...`.

The code is calling `.filter()` on the `students` variable. Checking back in on the code, you can see that `students` is an object. This seems like a good place to start.

Often, you’ll encounter syntax errors that will show exactly where the error occurred and what the error was. When you get these types of errors, you can go directly back to your code and fix them. Here’s an example of code that will throw a syntax error:

```
for (let x = 0; x < 10, x++) {
  console.log(x)
}
```

Running this code will output:

Notice that in this case, the compiler is pointing to the syntax issue with the `^` symbol, which sometimes makes it easier to debug. However, the issue is that there’s accidentally a comma (`,`) instead of a semicolon (`;`). Error messages can help, but you still need to use your developer knowledge to fix the error!

Sometimes, step 2 will not apply, and you’ll have to dive a little deeper into the error. Let’s return to the honor roll error that came up in step one. Since the solution isn’t immediately obvious, you’ll need to do some research to understand why it flagged an error.

Copy and paste the important part of the error message into a search engine and look through the results until you find someone else who has also run into that issue. To get better search results, you can include relevant keywords and modify the error message to be more generic.

In the error message `TypeError: students.filter is not a function`, it’s highly unlikely that someone else is having a `.filter()` issue on a `students` variable with the same data types, so that’s the type of thing that could be more generic. Instead of searching for “TypeError: students.filter is not a function”, you can try something like “TypeError: object filter() is not a function” and add a keyword for the language. The final search might be: “TypeError: object filter() is not a function JavaScript”.

After searching, one of the first results looks promising: “filter is a method on arrays. Since the code you posted contains an object, you’re seeing this error. You may want to apply filter after…”

Aha! If you consult the `.filter()` documentation on [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) you can confirm that `.filter()` is only for arrays. On the Stack Overflow page, it recommends using `Object.keys(data)` to turn the object into an iterable array so you can use the `.filter()` `Array` method on the new array.

Google is always a good place to check, but you can also reread documentation on MDN Web Docs or search directly on Stack Overflow, which is a wonderful community of programmers sharing knowledge and building cool stuff.

### Step 4: Compare different use cases to yours

Often you will not find someone who was trying to do the exact same thing you were trying to do, but who still encountered the same error. Read through their code a bit and see if it is comparable to yours. Even if their code is wildly different, the one or two lines that threw the error might be very similar to your code, so the solution may end up being the same.

Consider the result found for the `TypeError`.

![The screenshot shows a suggested solution on the forum Stack Overflow and includes a code snippet with a possible solution for the error message.](https://static-assets.codecademy.com/Courses/errors-and-error-handling/typeerror_stackoverflow.png)

Even though the solution didn’t involve a `students` object, the answer does provide a quick way to make an `Object` work with the `.filter()` method. It’s worth a shot to try it!

### Step 5: Implement the solution

Tweak the code a bit to match your use case and try it out! Worst case is that the error doesn’t go away and then you can try again. Best case is that it’s fixed and you’ve learned what was causing your error!

Every solution you implement is a new tool you can add to your programmer’s toolbox, and another error you will know how to solve in the future.

Thankfully, `31piy` ‘s solution was able to solve the issue using the `Object.values()` method. Take a look at the updated code:

```
const GPA_BENCHMARK = 3.5;
let students = {
  1: {
    name: 'Egill Vignission',
    gpa: 3.4
  },
  2: {
    name: 'Bianca Pargas',
    gpa: 3.8
  },
  3: {
    name: 'Aisling O\'Sullivan',
    gpa: 3.4
  },
  4: {
    name: 'Sameer Fares',
    gpa: 3.9
  }
}
let honorRoll = Object.values(students).filter(student => {
  return student.gpa >= GPA_BENCHMARK;
});
console.log(honorRoll);
```

After reading through the documentation and a few more Stack Overflow responses, it also seemed like a good idea to try changing my code in a different way, by making the `students` object be an array instead of an object in the first place. That way the `.filter()` method can be used directly on the array instead of first turning an object into an array.

Take a look at the updated code to reflect that change:

```
const GPA_BENCHMARK = 3.5;
let students = [
  {
    name: 'Egill Vignission',
    gpa: 3.4
  },
  {
    name: 'Bianca Pargas',
    gpa: 3.8
  },
  {
    name: 'Aisling O\'Sullivan',
    gpa: 3.4
  },
  {
    name: 'Sameer Fares',
    gpa: 3.9
   }
]
let honorRoll = students.filter(student => {
  return student.gpa >= GPA_BENCHMARK;
});
console.log(honorRoll);
```

In the process of figuring out this compiler error, you were able to learn how to use `Array` methods on objects, and how to think about your use of data types. See, every error is an opportunity to learn!

### Step 6: If it doesn’t work, repeat steps 2-4

Keep searching through Google and Stack Overflow. The answer will be there! Sometimes it’s helpful to Google parts of the error message, use `console.log()` to see the outputs, or to read about methods and data types at the website [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

The solutions to your errors are out there, and the process of finding them will make you a stronger and more confident programmer. As you grow and learn, expect to encounter countless errors, and expect each one to be its own unique learning opportunity.

### Step 7: Ask for help

Okay, maybe the answer isn’t out there… yet. There is a wealth of information out on the web, but you might be the first one doing something completely new and shiny. It’s ok to ask for help. On the same sites and forums that you found help from, post a question. Ideally, you supply all the background information and provide relevant code that others can look at and do their best to help you out.

### Conclusion

Remember that bugs are a good thing: finding bugs gives you the opportunity to make your code stronger and more secure. Debugging is a learning opportunity, and other programmers have encountered similar issues and had to ask a lot of the same questions before you. So don’t reinvent the wheel; instead, tap into the pool of solved bugs and learning opportunities available on sites like Stack Overflow, or other resources that can turn up in a web search.

When debugging, remember that you can generalize your error messages or use keywords to make searches more relevant. Don’t be afraid of reading through the documentation either; MDN offers a great option for that.

Most importantly, as you continue growing your debugging tool belt, remember that everyone who has learned before you has encountered a lot of the same bugs, and has asked the same questions online, so don’t be afraid to try a lot of new ideas and ask questions during the debugging process!

### Additional resources:

- [List of errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
- [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
- [Stack Overflow](https://stackoverflow.com/)

Free response