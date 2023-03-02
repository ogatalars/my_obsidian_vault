In this section, we will learn how to convert an existing JavaScript project to TypeScript.

Let's assume you have a handful of JavaScript files that need to be converted to TypeScript. Since TypeScript files on compilation produce JavaScript files with the same name, we need to ensure that our original JavaScript files that act as input, reside in a directory so that TypeScript does not override them. Additionally, lets keep all the output files in an output directory called dist.

For this tutorial, we will have the following directory structure:

[![](https://www.tutorialsteacher.com/Content/images/typescript/proj-structure.png)](https://www.tutorialsteacher.com/Content/images/typescript/proj-structure.png)

In order to migrate from JS to TS, we will follow these steps:

1.  Add tsconfig.json file to project
2.  Integrate with a build tool
3.  Change all .js files to .ts files
4.  Check for any errors

## Add tsconfig.json File to Project

First, we will add a tsconfig.json file to our project. This file manages the project's compilation options as well as which files to include and exclude.

    {
        "compilerOptions": {
            "outDir": "./dist",
            "allowJs": true,
            "target": "es5"
        },
            "include": [
            "./src/**/*"
        ]
    }
    

In the above config file, we are specifying to include all the files from the src folder. This is done using the "include" option. The compilerOptions, outDir specifies that the output files should be redirected to a folder called "dist". The allowJs options specifies that all JS files should be allowed. The target option specify that all JavaScript constructs should be translated to ECMAScript 5.

## Integrate with a build tool

Most JavaScript projects have an integrated build tool like webpack or gulp.

To integrate with webpack,

a) Run the following command on your terminal:

npm install awesome-typescript-loader source-map-loader

awesome-typescript-loader is a TypeScript loader, whereas source-map-loader is used for debugging your source code.

b) Add/edit the module config property in your webpack.config.js file to include these two loaders:

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ],
    
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
    

For other build tools like Gulp, Grunt, and Browserify, refer to our previous section on build tools.

## Converting .js files to .ts files

Rename your first .js file to .ts. Similarly, rename the .jsx file to .tsx.

As soon as you do that, some of your code might start giving compilation errors.

## Check for Errors

Since TypeScript has strict type checking, you may notice errors in your JavaScript code.

Few examples:

a) function with too many or two few arguments

    function displayPerson(name, age, height) {
        let str1 = "Person named " + name + ",  " + age + " years old";
        let str2 = (height !== undefined) ? (" and " + height +  " feet tall") : '';
        console.log(str1 + str2);
    }
    
    displayPerson( "John", 32);
    

In the above code, we have a function named `displayPerson()` that takes three arguments: name, age, and height. We call the above function with two values: "John", and 23. The above function is perfectly valid with JavaScript. This is because if an expected argument to a function is missing in JavaScript, it assigns the value undefined to the argument.

However, the same code in TypeScript will give the compilation error: error TS2554: Expected 3 arguments, but got 2.

To rectify this, you can add an optional parameter sign to the argument `height`. Also, while you are removing errors, you can also annotate your code like below:

    function displayPerson( name: string, age: number, height?: number) {
        let str1: string = "Person named " + name + ",  " + age + " years old";
        let str2: string = (height !== undefined) ? (" and " + height +  " feet tall") : '';
        
        console.log(str1 + str2);
    }
    

b) Consider the following object in JavaScript:

    let employee = {};
    employee.code = 10;
    employee.name = "John";
    
    console.log(employee);
    

In TypeScrip, this would give a compilation error:

error TS2339: Property 'code' does not exist on type '{}'.

error TS2339: Property 'name' does not exist on type '{}'.

To rectify this, you can move the properties inside the object:

    let employee = {
        code: 10,
        name: "John"
    };
    

Or, create an interface:

    interface Employee {
        code: number,
        name: string
    }
    
    let empObj = {} as Employee;
    empObj.code = 10;
    empObj.name = "John";
    

## Using Third-party JavaScript Libraries

Most JavaScript projects use third-party libraries like jQuery or Lodash. TypeScript needs to know the types of all objects in these libraries in order to compile files. Fortunately, TypeScript Type definition files for most JavaScript libraries are already available at [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped). So, we don't need to add types to these ourselves. All you need to do is install the types for each of the libraries used in your project.

For example, for Jquery, install the definition:

npm install @types/jquery

A list of all available TypeScript Type definitions can be seen [here](https://www.npmjs.com/~types).

Once you've made all the above changes to your JavaScript project, run your build tool and you should have your TypeScript project compiled into plain JavaScript that you can run in the browser.

With that, you are all set to use TypeScript to convert your existing JavaScript projects.