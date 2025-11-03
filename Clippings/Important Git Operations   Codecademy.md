---
title: "Important Git Operations  | Codecademy"
source: "https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscj-22-git-and-github-part-i/modules/wdcp-22-important-git-operations-da30bb5a-8cd0-4294-b963-9841dd1c22db/articles/handy-git-operations"
author:
published:
created: 2025-11-03
description:
tags:
  - "clippings"
---
## Handy Git Operations

Git provides us with a vast number of different commands that are listed on the documentation which can be intimidating at first. We will break down a couple that are powerful for daily tasks.

## Introduction

Git provides us with a vast number of different commands that are listed on the [documentation](https://git-scm.com/docs) which can be intimidating at first. We will break down a couple that are powerful for daily tasks.

### Git stash

Let’s say you’re working on experimental code on a fresh branch and realize that you forgot to add something to a previous commit in order to continue your work. In order to go to a different branch, one must always be at a clean commit point. In this case you don’t want to commit your experimental code since it’s not ready but you also don’t want to lose all the code you’ve been working on.

A good way to handle this is by using `git stash`, which allows you to get back to a clean commit point with a synchronized working tree, and avoid losing your local changes in the process. You’re “stashing” your local work temporarily in order to update a previous commit and later on retrieve your work.

The flow when using `git stash` might look something like this:

  
![In this diagram, a coworker asks the programmer if they can work on something else while they have their current code open. Git stash allows their current code to be stashed as they finish the other update. Git stash pop puts the code changes back into the working directory.](https://static-assets.codecademy.com/Courses/learn-git-github/handy-git-operations/git-stash-pop-diagram.svg)  

While working on a file, you find a small bug in a separate file from a previous commit that needs to be fixed before you continue.

```
$ git stash
```

Running the command above will store your work temporarily for later use in a hidden directory.

At this point, you can switch branches and do work elsewhere.

Once the bug is fixed, you want to retrieve the code you were working on previously, you can “pop” the work that was stored when you used `git stash`.

```
$ git stash pop
```

From here, you can continue your work and commit it when ready.

Coming up we have a short video demo’ing this in action.

![](https://www.youtube.com/watch?v=7gL3Safgahk)

## Git log

At this point you might be familiar with the command `git log`, which allows you to view the commit history of the branch you currently have checked out:

![Git Log output shows recent commit history](https://static-assets.codecademy.com/Courses/learn-git-github/handy-git-operations/git-log.png)

There are other ways you can use `git log` in order to view recorded changes. Here are a few examples:

- `git log --oneline` shows the list of commits in one line format.

![Git Log online output shows recent commit history all in one line](https://static-assets.codecademy.com/Courses/learn-git-github/handy-git-operations/git-log-oneline-2.png)

- `git log -S "keyword"` displays a list of commits where the number of occurrences of the keyword changes within at least one file via addition, deletion, or modification. In the screenshot below, we use `git log -S "Add"` to find any commits where the number of occurrences of “Add” within a file changes.

![The output of `git log -S "Add"` finds a commit where the number of occurrences of "Add" changes within a file.](https://static-assets.codecademy.com/Courses/learn-git-github/handy-git-operations/git-log-S.png)

- `git log --oneline --graph` - `--graph` Displays a visual representation of how the branches and commits were created in order to help you make sense of your repository history. When used alone, the description can be very lengthy, so you can combine the command with `--oneline` in order to shorten the description.

![Git log --online --graph outputs a graphical representation of commits, showing where branches were created earlier and merged.](https://static-assets.codecademy.com/Courses/learn-git-github/handy-git-operations/git-log-oneline-graph.png)

## Git commit amend

Git’s `--amend` flag is extremely useful when updating a commit, it allows you to correct mistakes and edit commits easily instead of creating a completely new one.

Let’s say you finish working on a lengthy feature and everything seems to be working fine so you commit your work. Shortly after, you realize you missed a few semicolons in one of your functions. You could technically create a new commit, but ideally, you want to keep all commits specific, clean, and succinct. To avoid creating a new one, you could create your changes, stage them with `git add` and then type the command `git commit --amend` to update your previous commit.

It’s important to note that although it seems like `--amend` is simply updating the commit, what Git actually does is replace the whole previous commit. For this reason, when you execute the command `git commit --amend`, your terminal editor asks you to update your commit message:

![git-amend](https://static-assets.codecademy.com/Courses/learn-git-github/handy-git-operations/git-commit-amend.png)

However, if you want to keep the same commit message, you can simply add the flag `--no-edit`:

```
$ git commit --amend --no-edit
```

## Git alias commands

When grouping commands together, you can end up writing very long lines of Git commands in the terminal such as:

```
$ git log --pretty=format:"%h %s" --graph
```

Fortunately, Git offers a helpful feature that can make your Git experience simpler, easier, and more familiar: aliases.

If you have a set of commands that you use regularly and want to save some time from typing them, you can easily set up an alias for each command using Git config.

Below are a couple of examples:

```
$ git config --global alias.co "checkout"
$ git config --global alias.br "branch"
$ git config --global alias.glop "log --pretty=format:"%h %s" --graph"
```

Once the aliases are configured, next time you want to check out to another branch you could type the command:

```
$ git co example_branch
```

Instead of:

```
$ git checkout example_branch
```

Using Git aliases can create a much more fluid and efficient workflow experience when using Git. By getting creative with your aliases, you’re able to wrap a sequence of Git commands into one in order to save time and effort.