Here, you will learn how to compile a TypeScript project and also learn about tsconfig.json.

As you know, TypeScript files can be compiled using the `tsc <file name>.ts` command. It will be tedious to compile multiple .ts files in a large project. So, TypeScript provides another option to compile all or certain .ts files of the project.

## tsconfig.json

TypeScript supports compiling a whole project at once by including the tsconfig.json file in the root directory.

The tsconfig.json file is a simple file in JSON format where we can specify various options to tell the compiler how to compile the current project.

Consider the following simple project which includes two module files, one namespace file, tsconfig.json and an html file.

[![](https://www.tutorialsteacher.com/Content/images/typescript/ts-project.png)](https://www.tutorialsteacher.com/Content/images/typescript/ts-project.png)

The above tsconfig.json file includes empty curly brackets { } and does not include any options. In this case, the `tsc` command will consider the default values for the compiler options and compile all the .ts files in a root directory and its sub-directories.

D:\\typescript>tsc

The above `tsc` command will generate .js files for all .ts files, as shown below.

[![](https://www.tutorialsteacher.com/Content/images/typescript/compiled-project.png)](https://www.tutorialsteacher.com/Content/images/typescript/compiled-project.png)

When using the `tsc` command to compile files, if a path to tsconfig.json is not specified, the compiler will look for the file in the current directory. If not found in the current directory, it will search for the tsconfig.json file in the parent directory. The compiler will not compile a project if a tsconfig file is absent.

If the tsconfig.json file is not found in the root directory, then you can specify the path using the `--project` or `-p` option, as shown below.

tsc -p <path to tsconfig.json>

Until now, we used an empty tsconfig.json file and so, the TypeScript compiler used default settings to compile the TypeScript files. You can set different compiler options in the "compilerOptions" property in the tsconfig.json file, as shown below.

    {
        "compilerOptions": {
            "module": "amd",
            "noImplicitAny": true,
            "removeComments": true,
            "preserveConstEnums": true,
            "sourceMap": true
        }
    }
    

In the above sample tsconfig.json file, the compilerOptions specifies the custom options for the TypeScript compiler to use when compiling a project. Learn about all the [compilerOptions](https://www.typescriptlang.org/docs/handbook/compiler-options.html) available. These are the tsc command options, which you may use while compiling a file. When compiling individual files using the tsc command, you must specify a `--` or `-` option, e.g. `--module` or `-m`. The same options can be specified without -- or - in the "compilerOptions" section of the tsconfig.json file.

You can also specify specific files to be compiled by using the "files" option. The files property provides a list of all files to be compiled.

    {
        "compilerOptions": {
            "module": "amd",
            "noImplicitAny": true,
            "removeComments": true,
            "preserveConstEnums": true,
            "sourceMap": true
        },
        "files": {
            "Employee.ts"
        }
    }
    

The above files option includes the file names to be compiled. Here, the compiler will only compile the `Employee.ts` file.

There are two additional properties that can be used to include or omit certain files: include and exclude.

All files specified in include will be compiled, except the ones specified in the exclude property.

All files specified in the exclude option are excluded by the compiler. Note that if a file in include has a dependency on another file, that file cannot be specified in the exclude property.

    {
        "compilerOptions": {
            "module": "amd",
            "noImplicitAny": true,
            "removeComments": true,
            "preserveConstEnums": true,
            "outFile": "../../built/local/tsc.js",
            "sourceMap": true
        },
        "include": [
            "src/**/*"
        ],
        "exclude": [
            "node_modules",
            "**/*.spec.ts"
        ]
    }
    

Thus, the tsconfig.json file includes all the options to indicate the compiler how to compile a project. Learn more about tsconfig.json [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

Want to check how much you know TypeScript?