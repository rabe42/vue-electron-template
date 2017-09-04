# The W3 Vue Electron Template

## Remark
**This is not completed or anyhow ready to be a starting point in a project.**

## Objective
The objective of this template is to create a simple to use and easy to learn template for creating electron applications based on the Vue tookit. It facilates w3css and awesomefont to create a simple responsible clean look and feel.

## Usage
The following targets are defined, which helps you to build your application and operate in the development process:

- **clean** - Deletes dest/ and node_modules/ folder.
- **start** - Starts the electron application. Requires a compile:view before.
- **compile:view** - Compile the sources once into the dest directory.
- **compile:view:watch** - Compile the sources into the dest directory and watches the source files for recompilation.

### Debugging
At the time of this writing it is not possible to set breakpoints in .vue files. Nevertheless the debugger statement works. The inline 'eval-source-map' is created by default.

## Approach
As there are a lot of templates for electron and Vue available in the open. I tried some of them. Unfortunately a lot of this is outdates or so complicated that I felt uncertain, if this is really what I want.

Therefore I started with a minimal setting for myself. I try to leave this as easy as possible. Easy to understand also for non professionals.

My approach is also to have always the latest versions of the toolkits in the template, as I don't plan to create anything which is going to production.

## Intended Audience

**Me!**

Maybe there are other software engineers, like me. They are welcome!

I moved to management, years ago. But I have to keep track on new technologies. My approach is, to create simple applications, with a quite small user group (me), to check which kind of tools are needed to get a full fledged environment: (Code, Test, Deploy, Log, Monitor).

In this particular case, I focus on cloud software with a heavy offline use-case. This is why I like to include a distributed NoSQL database into the game.

## Components

For the development I'm using Visual Studio Code. But I will not put any of my configurations into this project. As I learned, that the development environment should work without assumptions about the used environment. This is why I try with this project also to rely just on NPM as build tool. Everything beyont the standard node.js environment should be mentioned in this section.

### electron ###
The JavaScript framework for creating platform independent UI applications.

<https://electron.atom.io/>

### Vue.js ###
To create the user interface, I rely on Vue.js. As it allows to create custom HTML tags in a simple way. It provides a modern approach to UI creation. It uses a all in one file approach with .vue files. Unfortunately, this requires webpack.

<https://vuejs.org/>

### webpack ###
To use .vue files, it seems to be higly recommendet to use webpack. Webpack allows to put virtually everything into one file for web applications. I expected that this is also a good decision for electron applications. Unfortunately this is not true! 

Webpack is really hard to understand and even worse documented, when it comes to the loading of fonts. Even the book, I bought is not really up to help to understand if problems occurs.

<https://webpack.js.org/>

### w3css ###
Lightweight and easy to understand framework with much less tags than bootstrap. Nevertheless everything, the average software engineer needs to create a simple and clean UI. 

The w3css is simply pulled with Webpack. You will not even find it in the `dist` directory.

<https://www.w3schools.com/w3css/>

### Font Awesome ###
If it comes to UI, I appreciate the use of Icons over the use of labels. As my artwork is quite bad, I try to stick to something, which is created in a professional way.

<http://fontawesome.io/>

### Winston ###
Most popular logging framework for JavaScript. This is used on backend and frontend site, using the electron remote framework.

<https://github.com/winstonjs/winston>

### Jasmine ###
The unit test framework. Choosen, because it is complete and doesn't need additional modules.

<https://jasmine.github.io/2.0/introduction.html>

### Spectron ###
A end to end (e2e) test framework for electron. 

<https://electron.atom.io/spectron/>

### PouchDB ###
As virtual every meaningful application needs some sort of persistent memory. I choose PouchDB as my way to store data. It can be combined with an CouchDB or even Couchbase backbone, to provide a simple distributed Cloud Store for your application.

<https://pouchdb.com/>

## ToDos
- PouchDB on backend site. (Persistence)
- Unit Test Framework (Development Accelerator)
- e2e Test Framework (Development Accelerator)
- Responsive Site Menu. (Development Accelerator)
- Creation of standalone applications (Windows, Mac, Linux)

## About Me
Starting my university education in the early 1980th, I lost track how often, I had to learn a new approach to software develoment. (`Basic, Pascal, C, Modula 2, Lisp, Prolog, MC68k, C++, ML, Scheme, Smalltalk, Java, Scheme, Python, Groovy, JavaScript`) I moved to management in 2005 but never lost contact to new technologies.
