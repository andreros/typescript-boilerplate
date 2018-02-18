# Documentation

Documentation for the Typescript Boilerplate project. [Documentation markup examples](examples.html).


## Table of Contents

*  [To Do / Roadmap](#roadmap)
*  [Creating a TypeScript project from scratch](#creating-project)
*  [1 - Project Initial Setup](#initial-setup)
*  [2 - The First Project File](#first-file)
*  [3 - Dependencies](chapter2.html#dependencies)
*  [4 - Project File Structure](chapter3.html#file-structure)
*  [5 - Gulp Task Automation](chapter4.html#task-automation)
*  [6 - TypeScript Linting and Compiling](chapter5.html#typescript)
*  [7 - Browserify](chapter6.html#browserify)
*  [8 - CSS Pre-processing](chapter7.html#sass)
*  [9 - HTML Templates Compiling](chapter8.html#handlebars)
*  [10 - Development Server](chapter9.html#browser-sync)


## To Do / Roadmap <a name="roadmap"></a>

1. Create an example page for the project.


## Creating a TypeScript project from scratch <a name="creating-project"></a>

First of all, we assume you already have installed [Node.js](https://nodejs.org/en/download/) in your computer, as well
as, your favourite browser and text editor or IDE.

A TypeScript project is a project aimed for the web, or at least to run in a web browser. It could also be aimed to run
in a Node.js server, but it is not the case here.

In this project we will be using HTML 5 for our markup, SASS as our CSS processor, Handlebars as our templating engine
and TypeScript as our coding language. We will also ube using Gulp as our task automator and Browser Sync as our
development server / browser synchronizing tool.

*  SASS CSS Pre-processor: [https://sass-lang.com/](https://sass-lang.com/)
*  Handlebars Templating Engine: [http://handlebarsjs.com/](http://handlebarsjs.com/)
*  TypeScript Scripting Language: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
*  Browserify modules / dependencies bundler: [http://browserify.org/](http://browserify.org/)
*  Gulp Task Automator: [https://gulpjs.com/](https://gulpjs.com/)
*  Browser Sync Server Synchronizing Tool: [https://browsersync.io/](https://browsersync.io/)


### 1 - Project Initial Setup <a name="initial-setup">

Create a new empty project in your IDE and give it a suitable name. The name used  for the project in this documentation
will be `typescript-boilerplate`.


### 2 - The First Project File <a name="first-file">

Now that we have our empty project created, what is the first file we should create in it?

For many modern projects intended to be made available publicly in a git repository, the first file to be created is
`package.json`. The `package.json` file is responsible for gathering all the relevant information about the project.
Besides, many modern dependency managers (such as npm, composer, gradle, homebrew and so many others) can detect if this
file is present and read its contents from the project root folder.

Create a file `package.json` in the root directory of the project. Edit the file and add the following:

```json
{
    "name": "typescript-boilerplate",
    "version": "0.0.1",
    "description": "project description",
    "main": "index.html",
    "scripts": {
        "dev": "gulp default"
    },
    "dependencies": {},
    "devDependencies": {},
    "repository": {
        "type": "git",
        "url": "https://github.com/andreros/typescript-boilerplate"
    },
    "keywords": [],
    "author": "author name <author@email.com>",
    "contributors": [],
    "license": "licensing model"
}
```

Most `package.json` property names are self explanatory. However, some properties need to be highlighted:
* `scripts: { dev: 'gulp default' }`: In this property we are assuming this project will be executed from the command
line by `npm` and that we will be using `gulp` as a task automator for this project. This property allows us to execute
the command `npm run dev` from the project root directory and the command `gulp default` will be executed for us.
* `dependencies`: This property will hold all the project dependencies. When the project is installed for production,
all dependencies listed here will be installed.
* `devDependencies`: Similarly to the `dependencies` property, this property holds a list of all the project dependencies
used in development. When the project is installed for development, all dependencies listed here will be installed.


### Next: [3 - dependencies](chapter2.html#dependencies)
