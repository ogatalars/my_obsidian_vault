![Cover image for Setting up TypeScript in a Node.js Application: A Step-by-Step Guide](https://res.cloudinary.com/practicaldev/image/fetch/s--TfZoy3Un--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z2v3wrd9bmigtpp0h5bw.png)

[![Luqman Shaban](https://res.cloudinary.com/practicaldev/image/fetch/s--izGH5KRt--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/898886/5115d7cd-0e5f-48b3-a4ef-556ea952c787.jpeg)](https://dev.to/luqmanshaban)

**Introduction:**  
TypeScript is a powerful superset of JavaScript that adds static typing and advanced features to the language. When building Node.js applications, TypeScript can enhance development by providing type checking, better code organization, and improved tooling. In this article, we will walk through the process of setting up TypeScript in a Node.js application, including configuring the `tsconfig.json` and `package.json` files. By the end, you will be able to console.log "Hello TypeScript" from an `index.ts` file.

**Step 1:** Create a new Node.js project  
Before setting up TypeScript, make sure you have Node.js installed on your machine. Create a new directory for your project and navigate to it using the command line. Initialize a new Node.js project by running the following command:  

    npm init -y
    

Enter fullscreen mode Exit fullscreen mode

**Step 2:** Install required dependencies  
To work with TypeScript in a Node.js project, we need to install specific dependencies. In the `package.json` file, add the following dependencies under the `"dependencies"` section:  

    {
      "dependencies": {
        "@types/node": "^20.2.5",
        "express": "^4.18.2"
      }
    }
    

Enter fullscreen mode Exit fullscreen mode

Save the file, and run the following command to install the dependencies:  

    npm install
    

Enter fullscreen mode Exit fullscreen mode

**Step 3:** Create the tsconfig.json file  
To configure TypeScript, we need to create a `tsconfig.json` file in the root of our project. This file defines the compiler options and other settings. Open a text editor and paste the following content into the `tsconfig.json` file:  

    {
      "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "moduleResolution": "node",
        "sourceMap": true,
        "strict": true,
        "esModuleInterop": true,
        "noImplicitAny": true,
        "outDir": "./dist",
        "rootDir": "./src"
      },
      "include": [
        "src/**/*"
      ],
      "exclude": [
        "node_modules"
      ]
    }
    

Enter fullscreen mode Exit fullscreen mode

Here's a breakdown of the key options in the `compilerOptions` section:

-   `"target": "es6"`: Specifies the ECMAScript version to compile the TypeScript code to. In this case, we target ECMAScript 6.
-   `"module": "commonjs"`: Sets the module system to CommonJS, which is used by Node.js.
-   `"moduleResolution": "node"`: Instructs TypeScript to use Node.js-style module resolution.
-   `"sourceMap": true`: Generates source map files, which are useful for debugging TypeScript code.
-   `"strict": true`: Enforces strict type checking and catches more potential errors.
-   `"esModuleInterop": true`: Enables compatibility with modules that use the CommonJS module syntax.
-   `"noImplicitAny": true`: Disallows implicit `any` types, ensuring type annotations are always provided.

**Step 4:** Create an index.ts file  
In the root of your project, create a new `src` directory. Inside the `src` directory, create an `index.ts` file. Open the `index.ts` file in a text editor and add the following code:  

    console.log("Hello TypeScript");
    

Enter fullscreen mode Exit fullscreen mode

**Step 5:** Build and run the TypeScript code  
To compile the TypeScript code and run the application, we'll add a script to the `package.json` file. Under the `"scripts"` section, add the following line:  

    {
      "scripts": {
        "build": "tsc",
        "start": "
    
    node dist/index.js"
      }
    }
    

Enter fullscreen mode Exit fullscreen mode

Save the `package.json` file.

**Step 6:** Build and run the application  
To compile the TypeScript code into JavaScript and start the application, run the following command:  

    npm run build
    npm start
    

Enter fullscreen mode Exit fullscreen mode

You should see the output "Hello TypeScript" in the console, indicating that TypeScript is successfully set up in your Node.js application.

**Conclusion:**  
In this article, we walked through the steps required to set up TypeScript in a Node.js application. By configuring the `tsconfig.json` file and installing the necessary dependencies, we enabled static typing and other TypeScript features in our project. Additionally, we created a simple `index.ts` file and used the `console.log` function to output "Hello TypeScript." Armed with this knowledge, you can now leverage the benefits of TypeScript when developing Node.js applications.

Happy coding!

Let's connect:  
[LinkedIn](https://www.linkedin.com/in/luqman-shaban/)  
[Twitter](https://twitter.com/luqmanshaban01)