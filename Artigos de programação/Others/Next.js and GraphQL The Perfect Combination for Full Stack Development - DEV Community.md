## [](https://dev.to/franciscomendes10866/nextjs-and-graphql-the-perfect-combination-for-full-stack-development-18l7#what-you-will-learn)What you will learn

In today's article we are going to create a full stack application using Next.js with GraphQL Yoga.

![final result](https://res.cloudinary.com/practicaldev/image/fetch/s--SbZqjYrk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_800/https://res.cloudinary.com/dj5iihhqv/image/upload/v1686490411/2023-06-11_at_14.31.01_-_Lavender_Owl_idncii.gif)

## [](https://dev.to/franciscomendes10866/nextjs-and-graphql-the-perfect-combination-for-full-stack-development-18l7#what-does-this-article-cover)What does this article cover

-   Next.js App Router and Actions
-   GraphQL Yoga Integration
-   Perform operations such as Get, Create and Delete on the database

## [](https://dev.to/franciscomendes10866/nextjs-and-graphql-the-perfect-combination-for-full-stack-development-18l7#prerequisites)Prerequisites

Before starting the article, it is recommended that you have knowledge of React, Next.js and GraphQL.

## [](https://dev.to/franciscomendes10866/nextjs-and-graphql-the-perfect-combination-for-full-stack-development-18l7#creating-the-project)Creating the Project

To initialize a project in Remix we execute the following command:  

    npx create-next-app@latest my-app
    

Enter fullscreen mode Exit fullscreen mode

The setup that was used includes TypeScript, ESLint, Tailwind CSS and we are using the `app` router.

We start the dev server with the following command:  

    npm run dev
    

Enter fullscreen mode Exit fullscreen mode

In addition to the base configuration we also use the [daisyUI](https://daisyui.com/) library to be able to use pre-styled components.  

    npm install daisyui
    

Enter fullscreen mode Exit fullscreen mode

Then we add the library to the list of plugins in the `tailwind.config.js` file in which we can also define which theme we want to use, as follows:  

    module.exports = {
      // ...
      plugins: [require("daisyui")],
      daisyui: {
        themes: ["winter"],
      },
    };
    

Enter fullscreen mode Exit fullscreen mode

With the application setup ready, we can move on to the next point.

## [](https://dev.to/franciscomendes10866/nextjs-and-graphql-the-perfect-combination-for-full-stack-development-18l7#backend-setup)Backend Setup

First of all, we need to configure the connection to our database so that we can persist the data in our application. To facilitate the whole process, we are going to use an ORM, which for the article I decided to choose the [Drizzle ORM](https://orm.drizzle.team/). And for the database, I decided to use SQLite since it's the most accessible.

We start by installing the dependencies:  

    npm install drizzle-orm better-sqlite3
    npm install -D drizzle-kit @types/better-sqlite3
    

Enter fullscreen mode Exit fullscreen mode

Then inside the `server/` folder we will create a folder called `db/` which will contain the connection and the database schema.

Starting with the configuration, let's create the `server/db/config.ts` file with the following:  

    import { drizzle } from "drizzle-orm/better-sqlite3";
    import { migrate } from "drizzle-orm/better-sqlite3/migrator";
    import Database from "better-sqlite3";
    
    const sqlite = new Database("sqlite.db");
    
    export const db = drizzle(sqlite);
    
    migrate(db, { migrationsFolder: "./server/db/migrations" });
    

Enter fullscreen mode Exit fullscreen mode

The next step would be to create the database schema, which for today's article we will have just one table in the database called `todos` with three columns, like this:  

    import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
    
    export const todos = sqliteTable("todos", {
      id: integer("id").primaryKey(),
      title: text("username").notNull(),
      createdAt: integer("createdAt").notNull(),
    });
    

Enter fullscreen mode Exit fullscreen mode

The above code is in the `server/db/schema.ts` file which will be taken into account to create database migrations and as entity. Now in `package.json` let's add the following script:  

    {
      // ...
      "scripts": {
        // ...
        "db:migrations": "drizzle-kit generate:sqlite --out ./server/db/migrations --schema ./server/db/schema.ts"
      },
      // ...
    }
    

Enter fullscreen mode Exit fullscreen mode

And from the script above we can run the following command to create the migrations taking into account the schema that was created:  

    npm run db:migrations
    

Enter fullscreen mode Exit fullscreen mode

And once it is finished it is expected that the `migrations/` folder will be created inside the `server/db/` folder.

Once we have the data layer ready, we can start working on our GraphQL layer, starting by installing these dependencies:  

    # graphql related dependencies
    npm install garph graphql-yoga graphql
    # JS Dates
    npm install dayjs
    

Enter fullscreen mode Exit fullscreen mode

The next step is undoubtedly the creation of our GraphQL Schema using [Garph](https://garph.dev/) to create a totally type-safe API without needing to do codegen.

The schema of our app will have only one Query, which will be responsible for returning all `todos` that are in the database. And we will also have two Mutations, one to insert a `todo` and another to remove an existing `todo`.

To do so, let's create a folder called `gql/` in the `server/` folder that will contain everything related to our schema, which could be similar to the following:  

    import { GarphSchema } from "garph";
    
    export const g = new GarphSchema();
    
    export const TodoGQL = g.type("Todo", {
      id: g.int(),
      title: g.string(),
      createdAt: g.int(),
    });
    
    export const queryType = g.type("Query", {
      getTodos: g.ref(TodoGQL).list().description("Gets an array of todos"),
    });
    
    export const mutationType = g.type("Mutation", {
      addTodo: g
        .ref(TodoGQL)
        .args({
          title: g.string(),
        })
        .description("Adds a new todo"),
      removeTodo: g
        .ref(TodoGQL)
        .optional()
        .args({
          id: g.int(),
        })
        .description("Removes an existing todo"),
    });
    

Enter fullscreen mode Exit fullscreen mode

With the schema created in the `schema.ts` file, we can now create the `resolvers.ts` that will contain the Query logic and each of the Mutations of our API. Which might look like the following:  

    import { InferResolvers } from "garph";
    import { YogaInitialContext } from "graphql-yoga";
    import { eq } from "drizzle-orm";
    import dayjs from "dayjs";
    
    import { mutationType, queryType } from "./schema";
    import { db } from "../db/config";
    import { todos } from "../db/schema";
    
    type Resolvers = InferResolvers<
      { Query: typeof queryType; Mutation: typeof mutationType },
      { context: YogaInitialContext }
    >;
    
    export const resolvers: Resolvers = {
      Query: {
        getTodos: (_, __, ctx) => {
          return db.select().from(todos).all();
        },
      },
      Mutation: {
        addTodo: (_, { title }, ctx) => {
          return db
            .insert(todos)
            .values({
              title,
              createdAt: dayjs().unix(),
            })
            .returning()
            .get();
        },
        removeTodo: (_, { id }, ctx) => {
          return db.delete(todos).where(eq(todos.id, id)).returning().get();
        },
      },
    };
    

Enter fullscreen mode Exit fullscreen mode

With the schema and the resolvers created, we now need to create the `index.ts` file that will build the GraphQL schema so that it can be used by GraphQL Yoga.  

    import { buildSchema } from "garph";
    
    import { resolvers } from "./resolvers";
    import { g } from "./schema";
    
    export const schema = buildSchema({ g, resolvers });
    

Enter fullscreen mode Exit fullscreen mode

This way we have everything ready and we can now jump to the `router app` where we will create the following folder structure `app/api/graphql/` with a `route.ts` file that will contain the following:  

    import { createYoga } from "graphql-yoga";
    
    import { schema } from "../../../server/gql";
    
    const { handleRequest } = createYoga({
      schema,
      graphqlEndpoint: '/api/graphql',
      fetchAPI: { Request, Response }
    });
    
    export { handleRequest as GET, handleRequest as POST }
    

Enter fullscreen mode Exit fullscreen mode

In the code block above we created a custom route handler that will create an instance of [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server) that will provide our API taking into account the schema and the resolvers created just now.

With the backend finished we can move on to the next point.

## [](https://dev.to/franciscomendes10866/nextjs-and-graphql-the-perfect-combination-for-full-stack-development-18l7#reusable-components)Reusable components

Before we start working on the pages, let's start by working on some components that will be used in them. These components are related to the list and the elements that will be rendered in it (rows), as well as some actions.

Start by installing the following dependencies:  

    npm install graphql-request zod
    

Enter fullscreen mode Exit fullscreen mode

Next, let's create the `<ListItem />` component that will correspond to each of the rows present in the list that will be rendered in the root of our app. This component will receive some props, such as `todoId`, `title` and a `removeItem()` function. In order to be interactive, the component will be rendered on the client side.  

    "use client";
    
    import { LiHTMLAttributes } from "react";
    
    interface Props extends LiHTMLAttributes<HTMLLIElement> {
      todoId: number;
      title: string;
      removeItem: (id: number) => void;
    }
    
    export default function ListItem({ todoId, title, removeItem, ...rest }: Props) {
      return (
        <li
          className="card w-96 bg-base-100 shadow-xl cursor-pointer"
          {...rest}
          onClick={() => removeItem(todoId)}
        >
          <div className="card-body">
            <p>{title}</p>
          </div>
        </li>
      );
    }
    

Enter fullscreen mode Exit fullscreen mode

Then we can create some actions that will be used in the application list, we just have to ensure that these functions always run on the server side when invoked.  

    "use server";
    
    import { revalidatePath } from "next/cache";
    import { GraphQLClient, gql } from "graphql-request";
    
    const mutation = gql`
      mutation removeTodo($id: Int!) {
        removeTodo(id: $id) {
          id
        }
      }
    `;
    
    export async function removeTodo(id: number) {
      const graphQLClient = new GraphQLClient("http://localhost:3000/api/graphql");
      await graphQLClient.request(mutation, { id });
      revalidatePath("/");
    }
    

Enter fullscreen mode Exit fullscreen mode

The above code was created inside the `app/components/` folder more specifically in the `list/` folder which contained the functions in the `actions.ts` file and will have the component code in the `index.tsx` file. This component still needs to be created and will be rendered on the server side.  

    import { Infer } from "garph";
    import { request, gql } from "graphql-request";
    
    import { TodoGQL } from "../../server/gql/schema";
    import ListItem from "../ListItem";
    import { removeTodo } from "./actions";
    
    const query = gql`
      query getTodos {
        getTodos {
          id
          title
        }
      }
    `;
    
    interface QueryData {
      getTodos: Array<Infer<typeof TodoGQL>>;
    }
    
    export default async function List() {
      const { getTodos } = await request<QueryData>(
        "http://localhost:3000/api/graphql",
        query
      );
    
      return (
        <ul className="space-y-4">
          {getTodos?.map((todo) => {
            return (
              <ListItem
                key={todo.id}
                title={todo.title}
                todoId={todo.id}
                removeItem={removeTodo}
              />
            );
          })}
        </ul>
      );
    }
    

Enter fullscreen mode Exit fullscreen mode

With the reusable components created, we can now move on to the next point.

## [](https://dev.to/franciscomendes10866/nextjs-and-graphql-the-perfect-combination-for-full-stack-development-18l7#routes-setup)Routes Setup

Now that we have everything that needs to be used ready, we can start defining our application's routes. The routes that we will have in the application are the following:

-   `app/page.tsx` - main route of the application, where we will have the list of all of them and where we can interact with them to remove them
-   `app/new/page.tsx` - where the form will be present and the actions that will validate the submitted data and make the respective mutation

Now with this in mind we can go to the `layout.tsx` file and make the following changes:  

    import "./globals.css";
    
    export const metadata = {
      title: "Today's tasks",
    };
    
    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <body className="h-screen w-screen bg-neutral">
            <section className="container mx-auto p-4">{children}</section>
          </body>
        </html>
      );
    }
    

Enter fullscreen mode Exit fullscreen mode

Next, in the `page.tsx` file, we're going to add a `Suspense` boundary so that we can take advantage of the html streaming and while the list is resolving the asynchronous request and rendering the html, we're going to show a fallback.  

    import React, { Suspense } from "react";
    import Link from "next/link";
    import dayjs from "dayjs";
    
    import List from "../components/List";
    
    export default function Page() {
      return (
        <div className="space-y-6">
          <div className="flex flex-row items-start justify-between max-w-xl">
            <span className="space-y-2">
              <h1 className="text-3xl text-primary-content">Today&apos;s tasks</h1>
              <p className="text-lg">{dayjs().format("dddd, D MMM")}</p>
            </span>
            <Link className="btn" href="/new">
              New Task
            </Link>
          </div>
    
          <Suspense fallback={<span className="loading loading-ring loading-lg" />}>
            <List />
          </Suspense>
        </div>
      );
    }
    

Enter fullscreen mode Exit fullscreen mode

Last but not least, it remains to create the page responsible for inserting a new `todo` that will be inside the `app/new/` folder in the `page.tsx` file. In this component we are going to create a schema [zod](https://zod.dev/) to validate the form data and inside this page we will have a function called `addTodo()` that should run only on the server side.  

    import Link from "next/link";
    import { redirect } from "next/navigation";
    import { GraphQLClient, gql } from "graphql-request";
    import { z } from "zod";
    
    const mutation = gql`
      mutation addTodo($title: String!) {
        addTodo(title: $title) {
          id
        }
      }
    `;
    
    const formValuesSchema = z.object({
      title: z.string().min(3),
    });
    
    async function addTodo(formData: FormData) {
      "use server";
    
      const formValues = {} as any;
      for (const [key, value] of [...formData.entries()]) {
        if (key.includes("ACTION_ID")) continue;
        formValues[key] = value.valueOf();
      }
    
      const parsed = await formValuesSchema.parseAsync(formValues);
      const graphQLClient = new GraphQLClient("http://localhost:3000/api/graphql");
      await graphQLClient.request(mutation, parsed);
      redirect("/");
    }
    
    export default function Page() {
      return (
        <div className="max-w-xs space-y-6">
          <Link href=".." className="btn btn-ghost">
            Go back
          </Link>
    
          <form action={addTodo} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Task title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Type here..."
                className="input input-bordered w-full max-w-xs"
                required
                minLength={3}
              />
            </div>
    
            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </form>
        </div>
      );
    }
    

Enter fullscreen mode Exit fullscreen mode

And with that I conclude the last step of this article.

## [](https://dev.to/franciscomendes10866/nextjs-and-graphql-the-perfect-combination-for-full-stack-development-18l7#conclusion)Conclusion

I hope you found this article helpful, whether you're using the information in an existing project or just giving it a try for fun.

Please let me know if you notice any mistakes in the article by leaving a comment. And, if you'd like to see the source code for this article, you can find it on the github repository linked below.

[Github Repo](https://github.com/FranciscoMendes10866/thanopatch/tree/main)