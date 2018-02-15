# Documentation

Documentation for the Typescript Boilerplate project. [Documentation markup examples](examples.html).


## Table of Contents

*  [To Do / Roadmap](#roadmap)
*  [Creating a TypeScript project from scratch](#creating-project)
*  [1 - Project Initial Setup](#initial-setup)
*  [2 - The First Project File](#first-file)
*  [3 - Dependencies](#dependencies)
*  [4 - Project File Structure](chapter2.html#file-structure)


## To Do / Roadmap <a name="roadmap"></a>

1. Gulp task: Compile all Typescript files into one single file.
1. Gulp task: Create a Gulp Uglify task.
1. Gulp task: Create a Gulp Minify task (Thanks to [HugoGon](https://github.com/HugoGon) recommendation).
1. (Ongoing task) Documentation: Write a comprehensive documentation of the whole project creation process.


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


### 3 - Dependencies <a name="dependencies">

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

* `browser-sync` [https://github.com/BrowserSync/browser-sync](https://github.com/BrowserSync/browser-sync):
Plugin to keep multiple browsers & devices in sync when building websites.
* `gulp` [https://github.com/gulpjs/gulp](https://github.com/gulpjs/gulp): 
Toolkit that helps you automate painful or time-consuming tasks in your development workflow. 
* `gulp-autoprefixer` [https://github.com/sindresorhus/gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer): 
Plugin to parse CSS and add vendor prefixes to CSS rules using values from 
[Can I Use](https://caniuse.com/). It is 
[recommended](https://developers.google.com/web/tools/setup/setup-buildtools#dont_trip_up_with_vendor_prefixes) 
by Google and used in Twitter and Taobao.
* `gulp-hb` [https://github.com/shannonmoeller/gulp-hb](https://github.com/shannonmoeller/gulp-hb):
A sane Gulp plugin to compile Handlebars templates. Useful as a static site generator.
* `gulp-sass` [https://github.com/dlmanning/gulp-sass](https://github.com/dlmanning/gulp-sass):
Sass plugin for Gulp.
* `gulp-sourcemaps` [https://github.com/gulp-sourcemaps/gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps): 
Source map support for Gulp.
* `gulp-tslint` [https://github.com/panuhorsmalahti/gulp-tslint](https://github.com/panuhorsmalahti/gulp-tslint): 
TypeScript linter plugin for Gulp.
* `gulp-typescript` [https://github.com/ivogabe/gulp-typescript](https://github.com/ivogabe/gulp-typescript): 
A TypeScript compiler for gulp with incremental compilation support.
* `normalize-scss` [https://github.com/JohnAlbin/normalize-scss](https://github.com/JohnAlbin/normalize-scss):
Sass version of Normalize.css, a collection of HTML element and attribute rulesets to normalize styles across all browsers.
* `rimraf` [https://github.com/isaacs/rimraf](https://github.com/isaacs/rimraf):
A `rm -rf` util for node.js.
* `tslint` [https://github.com/palantir/tslint](https://github.com/palantir/tslint): 
An extensible linter for the TypeScript language.
* `typescript` [https://github.com/Microsoft/TypeScript](https://github.com/Microsoft/TypeScript):
TypeScript is a superset of JavaScript that compiles to clean JavaScript output.


Now that our `package.json` file is in place, from the project directory run the command `npm install` to install all 
the needed project dependencies. Notice the newly created directory `node_modules` inside the project directory.


### Next: [4 - Project File Structure](chapter2.html#file-structure)
