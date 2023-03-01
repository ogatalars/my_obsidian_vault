  ![How to Build a RocketChat Chatbot with TypeScript](https://cdn-media-2.freecodecamp.org/w1280/5fecb6ff7af2371468bb4b4c.jpg)

Today I will show you how to build your own Rocket.Chat bot and test it locally.

This is the same process I used to build freeCodeCamp's [moderation chat bot](https://github.com/nhcarrigan/rocketchat-bot) for our community's self-hosted chat server. This code is now running in production, and lots of people are using it.

## How to Set up a Rocket.Chat Server

Your first step is to get an instance of Rocket.Chat running locally – you will need this to test the bot's functionality.

You can use freeCodeCamp's [docker file](https://github.com/freeCodeCamp/chat-config/blob/main/docker-compose.dev.yml), which will spin up both Rocket.Chat and MongoDB automatically for a development environment. This will save you a lot of time.

You can either clone [this repository](https://github.com/freeCodeCamp/chat-config/blob/main/docker-compose.dev.yml), or manually create your own docker file based on our configuration. This tutorial will assume that you are using our existing docker file.

> Note: If you do not have docker installed, you will need to install it. The installation process is different for each operating system. I personally use Windows 10, so I installed [the Docker desktop client](https://www.docker.com/products/docker-desktop) and had to enable `hardware virtualisation` in my BIOS.

Within your Rocket.Chat directory, create a `.env` file and insert the following contents:

    COMPOSE_FILE=docker-compose.dev.yml
    PORT=3000
    ROOT_URL=http://localhost:3000
    ROCKETCHAT_VERSION=latest

The `docker-compose.dev.yml` filename is specific to our repository.

Then open your terminal pointed at that same directory and run:

    docker-compose up -d

If you are using Docker desktop, this only needs to be run once. The instance can be switched on and off through the desktop GUI.

You should see three success messages in your terminal:

![image-180](https://www.freecodecamp.org/news/content/images/2020/12/image-180.png)

Image showing the console output for the `docker-compose up -d` command. Three docker images were created, and each shows `done`.

Now if you open your browser and navigate to `localhost:3000` you should see your local Rocket.Chat instance. The first screen you see will be the Setup Wizard, which will walk you through creating your Admin account.

Most developers use the Admin account for root-level access to configure their chat. Because this is a local instance, your credentials' security is less important than in a live instance.

Fill in your information to create the admin account:

![image-181](https://www.freecodecamp.org/news/content/images/2020/12/image-181.png)

Image showing the Admin Info modal, with inputs for `Name` set to Nicholas Carrigan, `Username` set to nhcarrigan, `Organization Email` set to nick@freecodecamp.org, and `Password` which is obfuscated. Below the input fields is a button labelled `Continue`.

The next screen is the Organization Info screen. This information is optional. For this tutorial, we will leave this information blank.

Clicking `Continue` will take you to the Server Info page. Here you set the name for your chat server (which will appear in the `title` metadata), your default language, the server type, and the 2FA setting.

**Be sure to turn off the automatic 2FA setup for your local instance or you could be locked out of your own server.**

![image-182](https://www.freecodecamp.org/news/content/images/2020/12/image-182.png)

Image showing Server Info modal, with inputs for `Site Name` set to fCC ChatBot tutorial, `Language` set to Default, `Server Type` with no selection made, and `Auto opt in new users for Two Factor via Email` set to No. Below the input fields are buttons labelled "Back" and "Continue".

The final step is to optionally register your server and gain access to Rocket.Chat's services such as push notifications. Note that these are paid services.

For the purpose of this tutorial, you can select the `Keep standalone` option. Then you can decide whether you want any paid services later.

After clicking `Continue`, you'll see a modal indicating that your workspace is ready to use. Then you should see your new chat room. The default channel created by the Setup Wizard is `general`.

![image-183](https://www.freecodecamp.org/news/content/images/2020/12/image-183.png)

Image showing Rocket.Chat after completing the setup wizard. Sidebar on the left shows a `general` channel, and primary windows shows a system message that "nhcarrigan has joined the channel".

If you see this, congratulations. You are half way there and now have a functional chat server.

## How to Set up a Bot Account in Rocket.Chat

Now we need to create a bot user in our local chat server for our code to connect to.

Select the three dots at the top of the sidebar and choose `Administration`. Then select `Users` from the new sidebar that appears, and click the `+New` button in the top right. This opens a pane for creating a new user account.

Fill in the information and credentials for your bot account.

A few key things to note:

-   Leave  `Require password change` and `Set random password and send by email` set to off.
-   Leave `Send welcome email` set to off.
-   Select `bot` from the `Roles` dropdown menu.

![image-185](https://www.freecodecamp.org/news/content/images/2020/12/image-185.png)

Image showing the Rocket.Chat settings screen. The left sidebar shows the list of settings - `Users` has been selected. The center screen shows a list of user accounts - nhcarrigan and Rocket.Cat. The right sidebar shows the Add User interface, with inputs for `Name` set to Tutorial Bot, `Username` set to tutorial-bot, `Email` set to nhcarrigan@gmail.com, `Verified` toggled off, `Status Message` with no value, `Bio` with no value, `Nickname` with no value, `Password` which is obfuscated, `Require Password Change` which is toggled off, `Set random password and send by email` which is toggled off, `Roles` with "bot" selected, `Join default channels` which is toggled on, and `Send Welcome Email` which is toggled off.

> Rocket.cat is a built-in account used for system notifications (i.e. Rocket.Chat updates).

Save the changes, and your bot account should now be created! Keep a note of the username and password, as we will need these for the code.

## How to Code your Rocket.Chat Chatbot

Now it's time to create the code. Start with a new, empty folder for your project.

### Initial Rocket.Chat Chatbot Project Setup

We will begin with initializing a `node.js` project. You are welcome to use `npm init` to generate a `package.json`, or you may create one manually.

Either way, you will need to add some specific values to the `scripts` section:

      "scripts": {
        "prebuild": "rm -rf ./prod",
        "build": "tsc",
        "start": "node ./prod/bot.js"
      },

The `prebuild` script will remove the existing compiled JavaScript files, to avoid conflicts. NOTE: If you are developing on Windows, you will need to use a Unix based terminal (such as Git Bash) for this command to work. Command Prompt will not recognise the `rm` command - PowerShell _will,_ but errors out on the `-rf` flag.

Next you will install your necessary dependencies. First, install the development dependencies:

    npm install --save-dev typescript @types/node

The `--save-dev` flag saves these as _development_ dependencies, so Heroku will uninstall them after building the project.

Then, install your primary dependencies:

    npm install @rocket.chat/sdk dotenv

`dotenv` can be installed as a development dependency and dynamically `import`ed based on the environment, but for the sake of this tutorial that isn't necessary.

Your next step is to set up the TypeScript configuration.

If you have installed TypeScript globally, you'll be able to call `tsc --init` and automatically generate a configuration file. Otherwise, you'll need to manually create a `tsconfig.json` file in your project's root directory.

Either way, these are the settings you will need for this project:

    {
      "compilerOptions": {
        "target": "ES5",
        "module": "CommonJS",
        "rootDir": "./src",
        "outDir": "./prod",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "resolveJsonModule": true,
        "noImplicitAny": false,
      }
    }

If you are using `git` for version control, you will need to create a `.gitignore` file. This file tells `git` which files/folders to ignore. In this case, you want to ignore:

-   the compiled JavaScript in `prod`
-   your Node modules
-   your `.env` secrets.

Add these to your `.gitignore`:

    /node_modules/
    /prod/
    .env

Speaking of secrets, you should set those up now. Create a `.env` file, and add the following values:

    ROCKETCHAT_URL="localhost:3000"
    ROCKETCHAT_USER="tutorial-bot"
    ROCKETCHAT_PASSWORD="********"
    ROCKETCHAT_USE_SSL=""

Note that you should replace `tutorial-bot` with your bot account's username, and `********` with your bot account's password.

[View the code at this point](https://github.com/nhcarrigan/fcc-rocketchat-tutorial/tree/9cd28ab2adea2c4ce9294c0c35682031cf343b5f).

### How to Write the Primary Rocket.Chat ChatBot Code

Now it is time to write the initial bot code. Create a `src` folder within your project directory, and inside that `src` folder create a `bot.ts` file. Your file structure should now look like this:

![image-9](https://www.freecodecamp.org/news/content/images/2021/01/image-9.png)

Image showing a file tree. From top to bottom: A `node_modules` folder, which is collapsed, a `src` folder which contains a `bot.ts` file, a `.env` file, a `.gitignore` file, a `.package-lock.json` file, a `package.json` file, and a `tsconfig.json` file. The files show they are being tracked by `git`, except the `node_modules` folder and `.env` file.

> The `package-lock.json` file is created/updated by `npm` whenever you run `install`. This should be committed to your repository too, as it is required for the `npm ci` command.

Within your `bot.ts` file you will write the basic code that powers your bot. Start with your necessary imports:

    import { api, driver } from "@rocket.chat/sdk";
    import dotenv from "dotenv";

`api` and `driver` are exported functions within the Rocket.Chat SDK. We will use them in our code.

Because `node` doesn't load environment variables automatically, you need to call `dotenv`'s `config()` method to bring your `.env` values into the node process:

    dotenv.config();

This is necessary when working in local development. Some hosting providers, such as Heroku and repl.it, handle loading the environment variables within their infrastructure and `dotenv` is not needed.

Now you can extract those variables from the node environment. Use destructuring to grab the values:

    const {
      ROCKETCHAT_URL,
      ROCKETCHAT_USER,
      ROCKETCHAT_PASSWORD,
      ROCKETCHAT_USE_SSL,
    } = process.env;

Aside from `ROCKETCHAT_USE_SSH`, these environment values are _required._ Missing one will cause the code you write to error out, so you need to add a step to verify that all of these values are present.

    if (!ROCKETCHAT_URL || !ROCKETCHAT_USER || ROCKETCHAT_PASSWORD) {
      console.error("Missing required environment variables.");
      process.exit(1);
    }

`process.exit(1)` terminates the node process and stops our code from continuing. Providing a `1` exit code indicates that the process exited through an error.

Now you can use the Rocket.Chat SDK to connect your bot to the account you created.

Because the methods in the SDK are asynchronous, you will use an anonymous immediately-invoked function expression (IIFE) to enable `async/await` features.

    (async () => {
      // Nothing here yet
    })();

> These next steps will be written inside this function.

First, determine if your bot should use SSL to connect to the chat server. If your chat server uses `HTTPS://`, this should be set to `true`. Because you are developing locally, this is set to `false` as `localhost` does not have an HTTPS protocol.

To ensure your code would work in a production environment as well, you can dynamically set this value based on your environment variables:

    const ssl = !!ROCKETCHAT_USE_SSL;

The `!!` operator converts the value into its matching Boolean - if we are missing that environment variable, it would result in `undefined`, which the operator converts to `false`. In our case, the environment variable is an empty string, which also converts to `false`.

Next, use the SDK `driver` to interface with your chat server. Connect the `driver` to your server:

    await driver.connect({ host: ROCKETCHAT_URL, useSsl: ssl });

Login as the bot account:

    await driver.login({
        username: ROCKETCHAT_USER,
        password: ROCKETCHAT_PASSWORD,
      });
    await api.login({ username: ROCKETCHAT_USER, password: ROCKETCHAT_PASSWORD });

`driver.login` connects your code to the bot account, and `api.login` generates an API authorization token. The SDK `driver` does not have full functionality, so some features may require an API call. The `api` method serves as a wrapper for that call.

Have the bot join your `general` room, to handle instances where the bot isn't already in the room. Also tell the bot to listen for messages with the `subscribeToMessages()` method.

      await driver.joinRooms(["general"]);
      await driver.subscribeToMessages();

Finally, have the bot send a message when it comes online (so you can confirm connection status).

      await driver.sendToRoom("I am alive!", "general");

Now, build and run the code. Call these necessary scripts in your terminal:

    npm run build
    npm run start

After some built-in logging from the SDK, you should see the bot send its online message in your chat server.

![image-10](https://www.freecodecamp.org/news/content/images/2021/01/image-10.png)

Image depicting a Rocket.Chat message. The message was sent by `tutorial-bot`, which has the `bot` role by its name. The message text reads `I am alive!`.

[View the code at this point](https://github.com/nhcarrigan/fcc-rocketchat-tutorial/tree/216a9a20a4872670d838a475c0140fa1110638d3).

### How to Write the Command Handler

Your bot will now connect to the chat server and listen for messages, but it does not have any functions.

Before you can add commands, you need to build the infrastructure to handle those commands.

First, tell the bot to handle messages. Just after your `subscribeToMessages()` call, add a line to handle responding to messages:

    driver.reactToMessages();

You'll see an error in your Intellisense, because the `reactToMessages()` method expects a callback function.

You could write the callback function within this method directly, but instead you will modularise your code and create an exported handler. This keeps your code cleaner and more maintainable.

Create a folder called `commands` within your `src` folder, and add two files: `CommandHandler.ts` and `CommandList.ts`. Within the `CommandList.ts` file, we are going to add a single line for now:

    export const CommandList = [];

As you build commands, you will add them to this array to be able to iterate through them in our handler.

Now you need to write your handler's logic in the `CommandHandler.ts` file.

Start with your required imports:

    import { driver } from "@rocket.chat/sdk";
    import { IMessage } from "@rocket.chat/sdk/dist/config/messageInterfaces";
    import { CommandList } from "./CommandList";

`IMessage` is used for our type definitions.

Define the command handler function:

    export const CommandHandler = async (
        err: unknown,
        messages: IMessage[]
    ): Promise<void> => {
        // Code will go here.
    }

The SDK does not currently have a type declaration for the `err` object.

Add some error handling.

      if (err) {
        console.error(err);
        return;
      }
      const message = messages[0];
      if (!message.msg || !message.rid) {
        return;
      }

If you see an error in the `err` parameter, you need to `return` early.

The `messages` parameter takes an array of messages, but you want to react to the _first_ message, so we extract it from that array as `message`.

Then, for TypeScript's assertion handling, you need to exit early if certain properties are missing or undefined. In this case, `message.msg` is the text content of the message, and `message.rid` is the ID of the room the message was received in.

For cleaner/more readable code, you can destructure some values out of the message object. Get the room's name from the `rid` value - the SDK includes a method for doing just this. Also get the prefix and the command that is called.

      const roomName = await driver.getRoomName(message.rid);
      const [prefix, commandName] = message.msg.split(" ");

Add the logic to iterate through our array of commands. TypeScript will identify some errors due to missing structures, but you can ignore those for now as you have not written the commands yet.

      if (prefix === "!fCC") {
        for (const Command of CommandList) {
          if (commandName === Command.name) {
            await Command.command(message, roomName);
            return;
          }
        }
        await driver.sendToRoom(
          `I am sorry, but \`${commandName}\` is not a valid command.`,
          roomName
        );
      }

You can select whichever prefix value you would like. If you are feeling ambitious, you could even make this a configurable setting through your `.env` file.

This block of code might be a bit confusing as we have not established how commands work yet.

First, the bot determines if the message begins with the correct prefix. If it does not, the bot will ignore the message.

Then the bot iterates through the list of commands, and if it finds a command for which the `name` value matches the command name sent in the message, it will run that command.

If it does not find _any_ matching commands, it will send a response in the room that the command was not valid.

Before you move on to a command, head back to the `reactToMessages()` call in the `bot.ts` file and pass your new handler as the callback:

      driver.reactToMessages(CommandHandler);

You may need to manually import it:

    import { CommandHandler } from "./commands/CommandHandler";

[View the code at this point](https://github.com/nhcarrigan/fcc-rocketchat-tutorial/tree/b3e62ec3ad4215f4081293077774b3e81f67a52c).

### How to Write a Command

TypeScript offers an `interface` feature which can be used to define an object structure.

In your `src` folder, create an `interfaces` folder, and create a `CommandInt.ts` file.

Inside that file, you will define your command type. First, import the message type again.

    import { IMessage } from "@rocket.chat/sdk/dist/config/messageInterfaces";

Now build the exported interface for the command definitions.

    export interface CommandInt {
        name: string;
        description: string;
        command: (message: IMessage, room: string) => Promise<void>
    }

The `name` is used to call the command, the `command` function runs the command, and the `description` is used to document usage (this is great for using in a `help` command). The return type is a `Promise` to allow commands to run asynchronously.

Congratulations! You are now ready to build the `ping` command.

Within your `src/commands` folder, create a `ping.ts` file. Start with your necessary imports: the Rocket.Chat driver and your new command interface.

    import { driver } from "@rocket.chat/sdk";
    import { CommandInt } from "../interfaces/CommandInt";

Define and export the command:

    export const ping: CommandInt = {
        name: "ping",
        description: "Pings the bot.",
        command: async (message, room) => {
            // Code will go here.
        }
    }

Note that the `command` function uses `async`.

Let's have the bot respond with "Pong!" when this command is called. Inside the function, replace the comment with:

    await driver.sendToRoom("Pong!", room);

Now, load this command in your list of commands. Open the `CommandList.ts` file, where you will import our new command and include it in the array.

    import { ping } from "./ping";
    
    export const CommandList = [ping];
    

With this, you should see the errors in the `CommandHandler.ts` file disappear as well, because TypeScript is inferring that the `CommandList` array contains `CommandInt` types.

For extra type safety, and to ensure you do not accidentally add values to your `CommandList` that aren't proper `CommandInt` objects, explicitly type this variable.

    import { CommandInt } from "../interfaces/CommandInt";
    import { ping } from "./ping";
    
    export const CommandList: CommandInt[] = [ping];

`CommandInt[]` tells TypeScript this variable is an array of `CommandInt` objects.

Run your `build` and `start` scripts again to test this new feature.

Call your `ping` command in the chat room. You should see a successful response:

![image-11](https://www.freecodecamp.org/news/content/images/2021/01/image-11.png)

Image depicting a Rocket.Chat conversation. The first message was sent by `nhcarrigan`, who has the `Admin` role by his name. The first message content reads "!fCC ping". The second message was sent by `tutorial-bot`, which has the `Bot` role by its name. The second message content reads "Pong!".

Call a `pong` command. You should see that the bot identifies it is not a valid command:

![image-12](https://www.freecodecamp.org/news/content/images/2021/01/image-12.png)

Image depicting a Rocket.Chat conversation. The first message was sent by `nhcarrigan`, who has the `Admin` role by his name. The first message content reads "!fCC pong". The second message was sent by `tutorial-bot`, which has the `Bot` role by its name. The second message content reads "I am sorry, but `pong` is not a valid command".

[View our final code](https://github.com/nhcarrigan/fcc-rocketchat-tutorial/tree/df645aa39fbb9f18513128cfb5b55b804719ee78).

## Further Exploration

Congratulations! You have now successfully built a basic Rocket.Chat chatbot.

If you would like to explore further features and command implementations, feel free to browse [our live bot's codebase](https://github.com/nhcarrigan/rocketchat-bot).

___

___

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started](https://www.freecodecamp.org/learn/)