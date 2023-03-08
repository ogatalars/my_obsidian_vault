## Peer dependencies are a must-know feature that many developers overlook

![](https://miro.medium.com/v2/resize:fit:1400/1*TYY9PzrAl4Iz8Oocu2JwVg.jpeg)

Image by [Bessi](https://pixabay.com/users/bessi-909086/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=817365) from [Pixabay](https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=817365)

Although useful for all developers alike, peer dependencies is a feature very few back-end developers know exactly how it works, while front-end devs have been using it for the longest time.

I believe this is because of how easy it is to affect the global scope of the front-end while doing the same in the back is a bit more difficult. That being said, this feature solves problems that are common to both sides, and in this article, I’m going to be showing examples that are valid for both as well.

_Do you know what peer dependencies are?_

## What exactly are peer dependencies?

Peer dependencies are almost like normal dependencies, but instead of defining a strong requirement between A and B (i.e the project you’re developing and the project it depends on), they’re meant to specify a package that your code requires, but doesn’t directly `require` it. Does that make sense? No, right? Let me explain.

Imagine you’re developing your module A which is a plugin for module B. This means A will be used in conjunction with B and to do that, A needs to follow a certain structure and, most likely, have a public API that conforms to a set of requirements by B.

The above example tries to show that relationship in practice. As you can see, you’d be using B outside of A, but you still need B to use A. So, there is a dependency between both of them.

Where is the problem then? The problem lies in the behavior of the `dependencies` key. It’s not really a problem, it’s just how it is designed to work, the actual problem is that some developers don’t spend any time properly reading the documentation.

If you were to define B as a direct dependency of A like this:

```
{  "dependencies": {     "B": "1.2.0"  }}
```

When you install A inside your host project, you would get the following:

```
node_modules|_ A  |_ node_modules    |_ B
```

And the problem with that? I’m sure you can see that if you also add 2 more plugins, C and D that depend on B and declare it as a direct dependency, you’d have the following result:

```
node_modules|_ A| |_ node_modules|   |_ B|_C| |_ node_modules|   |_ B|_D  |_ node_modules    |_ B
```

This will work, if the versions of B installed are all the same one, however, we run into a potential problem if they’re not. I’m of course leaving out the fact that you’re also triplicating module B which makes no sense.

The point here is, if you were to declare B as a peer dependency of A, C and D, your package manager of choice might do one of two things. It will either just ignore that dependency (just like Yarn does by default), leaving you, the developer to take care of that.

Or it could do something like what NPM does:

1.  Check if B is already installed.
2.  If it is, then ignore it.
3.  If it isn’t, it’ll properly install it at the root level (i.e inside `your-folder/node_module` ) if it can, otherwise it will abort with a proper error message.

And why wouldn’t it be able to install a peer dependency? If you have conflicting versions defined. Imagine A depends on version 2.0.0 of B and C depends on version 7.1.3. If B is properly using [semver](https://semver.org/), there are quite a few breaking changes between both versions, so chances are A is not going to work with the version C requires and vice-versa. So what can you do then? That’s really up to the developer, since an automatic decision here would not be possible.

This, however, is the current behavior of NPM ([after version 7](https://blog.bitsrc.io/npm-7-this-is-what-i-call-an-update-de17a34ab787?source=post_stats_page-------------------------------------)), previous versions would not install B in any case, but instead it would issue a warning stating that you needed it.

## When to use peerDependencies?

Peer dependencies really come into play when you’re developing code that will be used by others, such as plugins and packages. If you’re just working on a final product (i.e one that can’t really be used inside another project), then you don’t really have to worry about it.

This is definitely one of those cases where using the key is completely optional. If you don’t use it, and forget to declare your peer dependencies, nothing wrong might happen. You’re just giving the developer the responsibility of knowing which libraries and packages are required for your code to work.

If your plugin is just one of many being used, then odds are, you’re safe because either someone else declared the dependency correctly, or the developer working with them already installed the library. However, if yours is one of the first plugins to be added or in fact the only one, then you’re potentially giving whoever is using your plugin a small headache.

Examples of when you want to use `peerDependencies` are:

-   [**Babel plugins**](https://babeljs.io/docs/en/plugins). You want to declare things such as babel itself as a peer dependency.
-   Express middleware packages: This is just one example of an NPM module that would require the use of peer dependencies. You’d want to declare [**express**](https://expressjs.com/) as a dependency, just not a hard one, otherwise, every middleware would install the entire framework each time.
-   If you’re building a Micro Frontend, trying to decide which dependencies are external (so they don’t get bundled) and which ones aren’t. Peer dependencies might be a good way to handle this.
-   [**Bit components**](https://bit.cloud/). If you’re writing and publishing a front-end component, such as when you’re [**sharing your React components**](https://bit.dev/blog/how-to-reuse-react-components-across-your-projects-l4pz83f4/) on Bit. In this case, you would declare React as a peer dependency for your components, because you want the host project to have the right version you require.

For example, take a look at this React component I published a while ago: it’s a simple selectable button (i.e you click it and it remains selected until you click it again).

[

![](https://miro.medium.com/v2/resize:fit:1400/1*mwLIPzJil99y6uVTlqeYSg.png)

](https://bit.dev/deleteman/my-extended-buttons/extended-selectable-button)

Screenshot of the component as seen on [Bit’s component hub](https://bit.dev/)

If you install it, you’d get the full code which contains its `package.json` file listing all peer dependencies:

![](https://miro.medium.com/v2/resize:fit:1400/1*pO5KUV9Bvd1mM2JWk4PmhQ.png)

Notice how the package has no direct dependency, even though it works on top of React. We’re making sure that things such as React and React-dom are required, just not installed.

Given the flexibility of a plugin-based architecture, many libraries are taking advantage of it, allowing developers to extend them organically based on their needs. This makes the use (and understanding) of peer dependencies a must for anyone interested in properly developing for these frameworks.

Whether you fall into that category or not, you want to make sure you understand how peer dependencies work. There are very few things worse than having conflicting dependencies installed in your project, because the author of one of the plugins you’re using didn’t set up their project correctly.

Can you think of another use of peer dependencies that I haven’t mentioned? Leave a comment down below and share it!

## Build Apps with reusable components, just like Lego

![](https://miro.medium.com/v2/resize:fit:1400/0*94jw_DwGFARM1Fqo.png)

[**Bit**](https://bit.cloud/)**’s open-source tool** help 250,000+ devs to build apps with components.

Turn any UI, feature, or page into a **reusable component** — and share it across your applications. It’s easier to collaborate and build faster.

**→** [**Learn more**](https://bit.dev/)

Split apps into components to make app development easier, and enjoy the best experience for the workflows you want:

## → [Micro-Frontends](https://blog.bitsrc.io/how-we-build-micro-front-ends-d3eeeac0acfc)

## → [Design System](https://blog.bitsrc.io/how-we-build-our-design-system-15713a1f1833)

## → [Code-Sharing and reuse](https://bit.cloud/blog/how-to-reuse-react-components-across-your-projects-l4pz83f4)

## → [Monorepo](https://www.youtube.com/watch?v=5wxyDLXRho4&t=2041s)

## Learn More