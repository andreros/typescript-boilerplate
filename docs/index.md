# Documentation

Documentation for the Typescript Boilerplate project. [Documentation markup examples](examples.md).


## Table of Contents

*  [To Do / Roadmap](#roadmap)
*  [Creating a TypeScript project from scratch](#creating-project)


## [To Do / Roadmap](#roadmap)

1. Gulp task: Compile all Typescript files into one single file.
1. Gulp task: Create a Gulp Minify task (Thanks to [HugoGon](https://github.com/HugoGon) recommendation).
1. Gulp task: Read multiple JSON files into one central JSON file.


## [Creating a TypeScript project from scratch](#creating-project)

First of all, we assume you already have installed [Node.js](https://nodejs.org/en/download/) in your computer, as well 
as, your favourite browser and your favourite text editor or IDE.

### 1. Project Initial Setup

Create a new folder for your project or a new empty project in your IDE. The project name for this example will be 
`typescript-boilerplate`. 


### 2. The First Project File 

Now that we have an initial directory, what is the first file we should create for our project?

For many modern projects intended to be made available publicly in a Git repository, the first file to be created is 
`package.json`. The `package.json` file is responsible for gathering all the relevant information about the project.
Furthermore, many modern dependency managers (such as npm, composer, gradle, homebrew and so many others) try to read 
this file from the project root folder.

Create a file `package.json` in the root directory of the project. Edit the file and add the following:

```
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

