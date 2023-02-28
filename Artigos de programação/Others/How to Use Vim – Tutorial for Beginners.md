  ![How to Use Vim – Tutorial for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2023/01/BB---Vim---A-Quick-Beginner-s-Guide.png)

Vim is one of the most popular text editors among Linux users. Linux System Administrators especially often prefer it to other editors.

In this article, you'll learn a lot about Vim and see how you can quickly start using Vim as a developer.

## What is Vim?

Vim is an acronym for **Vi IM**proved. It is a free and open-source cross-platform text editor. It was first released by Bram Moolenaar in 1991 for UNIX variants.

Vim is based on the original Vi editor, which was created by Bill Joy in 1976. In the 90’s, it started becoming clear that Vi was lacking in some features when compared with the Emacs editor. So Bram implemented many missing features and released it under the name Vim.

## How to Install Vim

Vim runs across various platforms such as Windows, Linux, and Mac.

To install Vim on Windows, download the executable file from the [Vim site](https://www.vim.org/download.php) and run the file. Follow the instructions shown on the screen and you'll be good to go.

Vim comes pre-installed on most \*nix operating systems. But if it's installed on your system, you can install it with a package manager of your choice.

Here's the installation command for Debian-based operating systems:

    sudo apt-get update
    sudo apt-get install vim

Terminal commands to install Vim on Debian based operating systems

To ensure that it's installed properly, run `which vim` and you should get `/usr/bin/vim` in your output.

## How to Get Started with Vim

You can get started with Vim by typing its name on the terminal like this:

![image-274](https://www.freecodecamp.org/news/content/images/2023/01/image-274.png)

Start Vim

Once you enter the above command, you'll be able to see a screen displaying info about Vim and some instruction to find help and exit Vim.

![image-276](https://www.freecodecamp.org/news/content/images/2023/01/image-276.png)

Vim Introduction

## Vim Modes

You should be aware of the most important concept in Vim before moving on: modes in Vim.

Everything in Vim is considered a mode. You can achieve whatever you want if you understand modes in Vim. There are many modes in Vim. But, we'll be looking at the 4 most important modes.

They are:

1.  Command Mode
2.  Command-Line Mode
3.  Insert Mode
4.  Visual Mode

Let's explore them one by one.

### What is Command Mode?

This is the default mode (also called Normal mode) in Vim. Whenever Vim starts, you'll be in this mode. You can switch to any mode from this mode. You can't do this in any other modes.

Basically, to switch from one mode to another, you have to come to Command Mode first and then navigate to the other mode. The commands that you run without any prefix (colon) indicate that you're running the command in command mode.

### What is Insert Mode?

This mode is used to edit the contents of the file. You can switch to insert mode by pressing `i` from command mode. You can use the `Esc` key to switch back to command mode.

### What is Command Line Mode?

You can use this mode to play around with some commands. But the commands in this mode are prefixed with a colon (:). You can switch to this mode by pressing : (colon) in command mode.

### What is Visual Mode?

You use this mode to visually select some text and run commands over that section of code. You can switch to this mode by pressing `v` from the command mode.

The above 4 modes are enough to perform a basic set of file operations in Vim.

Ok the theory is done. Let's explore Vim practically.

## Common Text Editor Operations in Vim

### How to Create a New File

Creating a new file with Vim is simple. You can do it from command line mode.

Run the following command to create a new file:

    :edit sample.txt

Command to create (if it doesn't exist)/edit a file

The above command opens a `sample.txt` file in edit mode if it exists, and creates a new file otherwise.

![image-278](https://www.freecodecamp.org/news/content/images/2023/01/image-278.png)

Create a new file with the name `sample.txt`

After running that command, you'll be in command mode (as shown in the below screenshot), and you'll not be able to enter any text:

![image-279](https://www.freecodecamp.org/news/content/images/2023/01/image-279.png)

Command mode showing new file created

To add some text to the created file, press `i` in the keyboard. You use the `i` command to enter some text in the file. Once you press `i`, you'll be able to see that you entered Insert mode in Vim by looking at the bottom left of the file.

![image-280](https://www.freecodecamp.org/news/content/images/2023/01/image-280.png)

Insert mode in `sample.txt` file in Vim

In this mode, you can type whatever you want into the file.

![image-281](https://www.freecodecamp.org/news/content/images/2023/01/image-281.png)

Added some content in `sample.txt` file

We're done with writing our content. And now we'll want to save the file. If you do not save and just close the terminal at this point, all your content will be lost.

### How to Save a File

To save a file, you have to switch from Insert mode to Command Line mode. Remember I told you earlier – whenever you want to switch from one mode to another, you have to first switch to Command mode and then you can easily switch to whatever mode you want.

To switch to Command mode from Insert mode, you have to press the `Esc` key.

After you press the `Esc` key, you'll not be able to see the `--INSERT--` at the bottom left. This indicates that you're not in Insert mode anymore and you're now in Command mode.

![image-283](https://www.freecodecamp.org/news/content/images/2023/01/image-283.png)

Command mode in `sample.txt` file

To save the file, type the following command:

    :w

Vim command to save the file

![image-284](https://www.freecodecamp.org/news/content/images/2023/01/image-284.png)

Command to save the file

### How to Close a File and Exit Vim

Once you save the file, you can close Vim by closing the terminal. But, the proper way to close the file and the Vim editor is by using the following command:

    :q

Vim command to close file and quit Vim

![image-285](https://www.freecodecamp.org/news/content/images/2023/01/image-285.png)

Close the file and vim editor

The above command closes the file and quits the vim editor.

Alternatively, you can use a command that's the combination of the above 2 commands (save & quit) to quickly save and quit Vim. The command is:

    :wq

Vim command to save the file and close immediately

The above command quits the Vim editor immediately after saving the file.

### How to Edit a File in Vim

To edit a file, you have to open the file using Vim and switch to Insert mode.

Let's open the `sample.txt` file we created above:

    vim sample.txt

Vim command to edit `sample.txt` file

![image-287](https://www.freecodecamp.org/news/content/images/2023/01/image-287.png)

Open `sample.txt` file using Vim

We are in Command mode now. To edit the file, we have to switch to Insert mode. As we saw earlier, pressing `i` from the Command mode will switch to Insert mode.

![image-289](https://www.freecodecamp.org/news/content/images/2023/01/image-289.png)

Switch to Insert mode by pressing `i`

Follow the same procedure for saving the file and quitting Vim. Press `Esc` on the keyboard and type `:w` to save the file and `:q` to quit Vim.

You may wonder, though, what if I want to close the file without saving my changes? (Ignore the changes I made and bring the file back to the old state).

#### How to close the file without saving the changes

To close the file without saving the changes, you have to run `:q!` from Command mode.

Let's explore this with an example:

![image-292](https://www.freecodecamp.org/news/content/images/2023/01/image-292.png)

Content in `sample.txt` file

I've added some more content to the file.

![image-293](https://www.freecodecamp.org/news/content/images/2023/01/image-293.png)

Added some content in `sample.txt` file

But, I don't want to save the changes I made now. To close the file without saving this change, we have to switch to Command mode (by pressing the `Esc` key). Type `:q!` in the Command mode. This will close the file ignoring the changes made.

![image-294](https://www.freecodecamp.org/news/content/images/2023/01/image-294.png)

Ignore saving the `sample.txt` file

Let's view the file and confirm if we get the expected output:

![image-295](https://www.freecodecamp.org/news/content/images/2023/01/image-295.png)

View `sample.txt` file

Yeah. The file does not have the last line which we added recently. So, the changes were not saved.

### How to Cut, Copy, and Paste Text from a File using Vim

You can Cut, Copy, and Paste in 2 ways in Vim. They are:

1.  Using Visual mode
2.  Using keyboard

Out of these two ways, Visual mode is simpler to understand. Since this is a beginner-friendly guide, let's explore how to cut, copy, and paste in Visual mode.

Let's open the file in command mode before we proceed:

![image-231](https://www.freecodecamp.org/news/content/images/2023/01/image-231.png)

`sample.txt` file opened in command mode in Vim

Let's assume you want to copy the word "Hello" from the 1st line and paste it into the 3rd line.

The first step is to place your cursor in the place from where you want to copy the text (being in command mode).

![image-232](https://www.freecodecamp.org/news/content/images/2023/01/image-232.png)

Moved the cursor to the beginning of the word `Hello`

Enter Visual mode by pressing the `v` key on the keyboard.

![image-233](https://www.freecodecamp.org/news/content/images/2023/01/image-233.png)

Enter Visual mode

The `-- VISUAL –-` text at the bottom left indicates that we're in visual mode.

Move the cursor to the place where the text you want to copy ends.

In this case, I'm moving the cursor to the letter `o` of the word `Hello`.

While you move your cursor, Visual mode highlights the text from the beginning up to your cursor.

![image-235](https://www.freecodecamp.org/news/content/images/2023/01/image-235.png)

Highlighted text in Visual mode

Once you're done moving your cursor to the right place, hit `y` to copy the text or hit `d` to cut the text.

In this case, I'm copying the text. So, I press `y` on my keyboard.

Move the cursor to the place where you want to paste the text.

![image-296](https://www.freecodecamp.org/news/content/images/2023/01/image-296.png)

Move the cursor to the place where you want to paste the text

In our case, we have to move the cursor to the 3rd line.

Press `p` (in lowercase) to paste the text after the cursor and `P` (in uppercase) to paste the text before the cursor.

![image-236](https://www.freecodecamp.org/news/content/images/2023/01/image-236.png)

`Hello` text pasted on 3rd line

Press `:wq` to save and close the file

### How to Find and Replace Text in Vim

Finding text and replacing it with some other text is simple and straightforward in Vim. There's a one-line command that simplifies this entire process.

Here's the syntax:

    :[range]s/{pattern}/{string}/[flags]

Vim command syntax to find and replace a text

Let's dismantle each part and understand how it all works.

-   `[range]` indicates that you can pass the range of lines. Pass % to find and replace in all lines. The range is separated by a comma. To find and replace between lines 5 to 10, pass 5,10. Use `.` to represent the current line and `$` the last line of the file.
-   `{pattern}` indicates the pattern to find the text. You can pass regex patterns here.
-   `{string}` is the string to replace in the found text.  
-   `[flags]` indicates if you wish to pass any additional flags (for example, the flag `c` is passed to confirm before replacing the text). By default, this does a case-sensitive search. You can change it to do a case-insensitive search by passing a `i` flag.

Alright, let's explore this with an example.

![image-237](https://www.freecodecamp.org/news/content/images/2023/01/image-237.png)

`sample.txt` file content

Our `sample.txt` file has 2 "Hello"s. Let's replace "Hello" with "Hi" at both places.

The command to do that is:

    :%s/Hello/Hi/g

Vim command to replace "Hello" with "Hi"

-   `%s` indicates replacing the content in the entire file
-   `Hello` is the search text
-   `Hi` is the text to replace
-   `g` indicates making the change globally

![image-238](https://www.freecodecamp.org/news/content/images/2023/01/image-238.png)

While running the command to change "Hello" with "Hi"

![image-239](https://www.freecodecamp.org/news/content/images/2023/01/image-239.png)

After running the command

Let's understand this with another example.

This time, I want to change the word "Hi" (case-insensitive search) that occurs between lines 2 and 3 and replace it with "Hello and Welcome", with a confirmation to change each occurrence.

The command to do that is:

    :2,3s/Hi/Hello and Welcome/gci

Vim command to change "Hi" with "Hello and Welcome" in 2nd and 3rd line

![image-297](https://www.freecodecamp.org/news/content/images/2023/01/image-297.png)

Running the command to change the text from line 2 to line 3

![image-241](https://www.freecodecamp.org/news/content/images/2023/01/image-241.png)

Asking for confirmation to change the occurrence

Here's a description for each option:

-   `y` - Replace the match
-   `n` - Skip the match
-   `a` - Substitutes the match and all remaining occurrences of the match
-   `q` or `Esc` - Quit substitution
-   `l` - Replace the match and quit
-   `CTRL+Y` - Scroll the screen down
-   `CTRL+E` - Scroll the screen up

I want to accept the change. So, I press `y`. Here's the output after pressing `y`.

![image-242](https://www.freecodecamp.org/news/content/images/2023/01/image-242.png)

After replacing the word

Since we have only one occurrence of "Hi" between lines 2 and 3, it did not ask for any further confirmation and the operation is complete.

### How to Undo or Redo in Vim

To undo a change in Vim, press `u` in command mode. To redo, press `CTRL + R`. You can prepend a number (n) with `u` to undo `n` times. for example, `2u` will undo 2 times. To list the available undo options, type `:undolist` in command mode.

Let's understand this with an example.

Here's the current state of our sample.txt file:

![image-254](https://www.freecodecamp.org/news/content/images/2023/01/image-254.png)

Current state of `sample.txt` file

I have my cursor at "a" in the "Hello and Welcome" text on 3rd line. Let's remove the word "and" by typing `dw` on command mode:

![image-257](https://www.freecodecamp.org/news/content/images/2023/01/image-257.png)

Removed the word `and` by typing `dw` in command mode

Let's undo to bring the word "and" back into the file. To do so, press `u` in command mode.

![image-258](https://www.freecodecamp.org/news/content/images/2023/01/image-258.png)

Changes are undone after typing `u` in command mode

Let's redo and take away the word "and" by typing `CTRL + R` in command mode.

![image-298](https://www.freecodecamp.org/news/content/images/2023/01/image-298.png)

Changes were applied again on redo by pressing `CTRL + R` in command mode

## Conclusion

In this article, you have learned the basics of Vim. This article should be enough to get you going and do some basic file read/write operations with Vim.

Just keep in mind that I've not even covered 1% of Vim. But I'm sure these basics will help you explore Vim quickly and confidently.

To learn more about Vim, subscribe to my email newsletter at my [site](https://www.freecodecamp.org/news/p/e557f026-0774-4fad-9c2f-d598e88b5250/5minslearn.gogosoon.com/?ref=fcc_vim_a_quick_getting_started_guide) and follow me on social media.

___

___

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started](https://www.freecodecamp.org/learn/)