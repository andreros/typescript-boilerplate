# Documentation

Documentation for the Typescript Boilerplate project. [Documentation markup examples](examples.md).


## Table of Contents

*  [To Do / Roadmap](#roadmap)
*  [Creating a TypeScript project from scratch](#creating-project)


## <a name="roadmap"></a>To Do / Roadmap

1. Gulp task: Compile all Typescript files into one single file.
1. Gulp task: Create a Gulp Minify task (Thanks to [HugoGon](https://github.com/HugoGon) recommendation).
1. Gulp task: Read multiple JSON files into one central JSON file.
1. (Ongoing task) Documentation: Write a comprehensive documentation of the whole project creation process.


## <a name="creating-project"></a>Creating a TypeScript project from scratch

First of all, we assume you already have installed [Node.js](https://nodejs.org/en/download/) in your computer, as well 
as, your favourite browser and text editor or IDE.

### 1 - Project Initial Setup

Create a new empty project in your IDE and give it a suitable name. The name used  for the project in this documentation 
will be `typescript-boilerplate`. 


### 2 - The First Project File 

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

### 3 - Dependencies

Since our project is a TypeScript boilerplate, the following dependencies are the ones needed for the development of 
such project. Therefore, we will be focusing on the development dependencies rather than the distribution ones.

```json
{
    ...
    
    "devDependencies": {
        "browser-sync": "^2.23.6",
        "gulp": "^3.9.1",
        "gulp-autoprefixer": "^4.1.0",
        "gulp-hb": "^7.0.1",
        "gulp-sass": "^3.1.0",
        "gulp-sourcemaps": "^2.6.4",
        "gulp-tslint": "^8.1.2",
        "gulp-typescript": "^4.0.1",
        "normalize-scss": "^7.0.1",
        "rimraf": "^2.6.2",
        "tslint": "^5.9.1",
        "typescript": "^2.6.2"
    },
    
    ...
}
```

* `browser-sync`: Keep multiple browsers & devices in sync when building websites. For further details, please visit 
[https://github.com/BrowserSync/browser-sync](https://github.com/BrowserSync/browser-sync).
* `gulp`: Toolkit that helps you automate painful or time-consuming tasks in your development workflow. For further 
details, please visit [https://github.com/gulpjs/gulp](https://github.com/gulpjs/gulp). 
* `gulp-autoprefixer`:
* `gulp-hb`:
* `gulp-sass`:
* `gulp-sourcemaps`:
* `gulp-tslint`:
* `gulp-typescript`:
* `normalize-scss`:
* `rimraf`:
* `tslint`:
* `typescript`:









