To get the most out of this article you should have at least an introductory understanding of [npm](https://www.npmjs.com/).

## Contents

In this article:

1.  We will ****compare**** exactly how Dependencies work versus Peer Dependencies.
2.  We will look at some ****examples**** of both Dependencies and Peer Dependencies.
3.  Then, we will examine how npm handles ****version conflicts****.
4.  Finally, having the fundamentals solidly in our grasp, we will lay out an approach to ****deciding when Peer Dependencies are appropriate****.

## The Scenario

To keep it real, let’s assume you’re creating an Angular Library or even just a simple JavaScript file that exports some functions.

Your project relies on packages from the [npm Registry](https://www.npmjs.com/). These packages are your project’s ****dependencies****.

You want to create your own ****npm package**** from your project. So you use `npm pack` to generate an ****npm package**** from your project. You might even decide to publish it to the npm Registry.

Other teams will add your package as a dependency in their own projects. We use Dependencies and Peer Dependencies in package.json to tell these other projects what packages also need to be added for our package to work.

So, at their most basic level here is how Dependencies and Peer Dependencies work:

### Dependencies

****Dependencies**** are listed in the package.json file in a [dependencies](https://docs.npmjs.com/files/package.json#dependencies) object.

When you add a package in `dependencies`, you are saying:

-   My code needs this package to run.
-   If this package doesn’t already exist in my ****node\_modules**** directory, then add it automatically.
-   Furthermore, add the packages that are listed in the package’s dependencies. These packages are called ****transitive dependencies****.

### Peer Dependencies

****Peer Dependencies**** are listed in the package.json file in a [peerDependencies](https://docs.npmjs.com/files/package.json#peerdependencies) object.

By adding a package in `peerDependencies` you are saying:

-   My code is compatible with this version of the package.
-   If this package already exists in ****node\_modules****, do nothing.
-   If this package doesn’t already exist in the ****node\_modules**** directory or it is the wrong version, don’t add it. But, show a warning to the user that it wasn’t found.

## Adding Dependencies

So, we add dependencies in the ****package.json file**** of our npm package folder. Let’s look at exactly how we add packages as dependencies and some examples of package dependencies.

### Adding a Dependency

A ****Dependency**** is an npm package that our package depends on in order to be able to run. Some popular packages that are typically added as dependencies are [lodash](https://www.npmjs.com/package/lodash), [request](https://www.npmjs.com/package/request), and [moment](https://www.npmjs.com/package/moment).

We add a regular dependency like this:

```
<>Copynpm install lodash
```

npm adds the package name and version to the `dependencies` object in our project’s ****package.json**** file.

```
<>Copy"dependencies": {
    "lodash": "^4.17.11"
  }
```

Some of you might remember the old days when we had to use the `--save` flag to get npm to update the `dependencies` in ****package.json****. Thankfully, we don’t need to do that anymore.

### Adding a Peer Dependency

****Peer Dependencies**** are used to specify that our package is compatible with a specific version of an npm package. Good examples are [Angular](https://angular.io/) and [React](https://reactjs.org/).

To add a ****Peer Dependency**** you actually need to manually modify your ****package.json**** file. For example, for Angular component library projects, I recommend adding `angular/core` as a peer dependency. So if you wanted to specify that your package is built for Angular 7, you could include something like this:

```
<>Copy"peerDependencies": {
  "@angular/core": "^7.0.0"
}
```

## About Conflicts

I get a lot of questions about whether a certain npm package should go into `dependencies` or into `peerDependencies`. The key to making this decision involves understanding how ****npm**** deals with ****version conflicts****.

If you have read my previous articles, you know I like you to be able to do this stuff along with me! So feel free to work along with me for this little npm experiment.

[](https://bit.ly/39cqbxa)

### conflict-test Project

To get started let’s create a trivial test project. I am going to name mine:  
`conflict-test`

I created it like this:

```
<>Copymd conflict-test
cd conflict-test
npm init -y
```

I then manually edited the ****package.json**** file and added two dependencies:

```
<>Copy"dependencies": {
    "todd-a": "^1.0.0",
    "todd-b": "^1.0.0"
  }
```

These `todd-a` and `todd-b` packages also have their own dependencies:

### todd-a

```
<>Copy"dependencies": {
    "lodash": "^4.17.11",
    "todd-child": "^1.0.0"
  }
```

### todd-b

```
<>Copy"dependencies": {
    "lodash": "^4.17.11",
    "todd-child": "^2.0.0"
  }
```

The thing I want you to notice here is that `todd-a` and `todd-b` use the same version of `lodash`. But, they have a version conflict for `todd-child`:  
`todd-a` uses todd-child ****version 1.0.0****  
`todd-b` uses todd-child ****version 2.0.0****

Now I know that, like me, you are keenly interested to see how npm handles this version conflict. In my main project `conflict-test` I run `npm install`. As we would expect, npm magically installs the `todd-a` and `todd-b` packages in our ****node\_modules**** folder. It also adds the packages that they depend on (the transitive dependencies). So after running `npm install` we take a look at the ****node\_modules**** folder. It looks like this:

```
<>Copynode_modules
├── lodash 4.17.11
├── todd-a 1.0.0
├── todd-b 1.0.0
│   └── node_modules
│       └── todd-child 2.0.0
└── todd-child 1.0.0
```

The interesting thing about this is that our project has one copy of `lodash`. But, it has two copies of `todd-child`. Notice that `todd-b` gets its own private copy of `todd-child 2.0.0`.

So here is the rule:

> npm deals with version conflicts by adding duplicate private versions of the conflicted package.

## An Approach to Peer Dependencies

As we saw from our experiment with npm version conflicts, if you add a package to your `dependencies`, there is a chance it may end up being duplicated in ****node\_modules****.

Sometimes, having two versions of the same package is fine. However, some packages will cause conflicts when there are two different versions of them in the same code base.

For example, assume our component library was created using ****Angular 5****. We wouldn’t want our package adding another completely different version of `angular/core` when someone adds it as a dependency to their ****Angular 6**** application.

The key is:  
We don’t want our library adding another version of a package to ****node-modules**** when that package could conflict with an existing version and cause problems.

`peerDependencies` **or dependencies?**

So this brings us to the main question for our dependencies:

> When my package depends on another package, should I put it in dependencies or peerDependencies?

Well, as with most technical questions: it depends.

****Peer Dependencies**** express compatibility. For example, you will want to be specific about which version of Angular your library is compatible with.

### The Guidelines

Favor using Peer Dependencies when one of the following is true:

-   Having multiple copies of a package would cause conflicts
-   The dependency is visible in your interface
-   You want the developer to decide which version to install

Let’s take the example of `angular/core`. Obviously, if you are creating an Angular Library, `angular/core` is going to be a very visible part of your library’s interface. Hence, it belongs in your `peerDependencies`.

However, maybe your library uses [Moment.js](https://momentjs.com/) internally to process some time related inputs. Moment.js most likely won’t be exposed in the interface of your Angular Services or Components. Hence, it belongs in your `dependencies`.

## Angular as a Dependency

Given that you are going to specify in your documentation that your library is a set of Angular Components and Services, you may be asking the question:

> “Do I even need to specify angular/core as a dependency? If someone is using my library, they will already have an existing Angular project.”

Good question!

Yes, we can usually assume that for our Angular specific library the Workspace will already have the Angular packages available. Hence, technically we wouldn’t need to bother adding them to our list of dependencies.

However, we really do want to tell the developer ****which Angular versions**** our library is compatible with. So I recommend the following approach:

Add at least angular/core for the compatible Angular version to your `peerDependencies`.

This way developers will see a warning if they try to use your Angular 7 library in their Angular 6 project. Don’t bother adding the other Angular packages. You can assume if they have angular/core, they have the other Angular libraries.

## In Conclusion

When in doubt you should probably lean toward using `peerDependencies`. This lets the users of your package make their own choice about which packages to add.