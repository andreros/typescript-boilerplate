# Documentation

Documentation for the Typescript Boilerplate project. [Documentation markup examples](examples.md).


## Table of Contents

*  [To Do / Roadmap](#roadmap)
*  [Creating a TypeScript project from scratch](#creating-project)
    *  [Project Initial Setup](#creating-project-1)
    *  [The First Project File](#creating-project-2)
    *  [Dependencies](#creating-project-3)


## <a name="roadmap"></a>To Do / Roadmap

1. Gulp task: Compile all Typescript files into one single file.
1. Gulp task: Create a Gulp Uglify task.
1. Gulp task: Create a Gulp Minify task (Thanks to [HugoGon](https://github.com/HugoGon) recommendation).
1. Gulp task: Read multiple JSON files into one central JSON file.
1. (Ongoing task) Documentation: Write a comprehensive documentation of the whole project creation process.


## <a name="creating-project"></a>Creating a TypeScript project from scratch

First of all, we assume you already have installed [Node.js](https://nodejs.org/en/download/) in your computer, as well 
as, your favourite browser and text editor or IDE.

### 1 - Project Initial Setup <a name="creating-project-1">

Create a new empty project in your IDE and give it a suitable name. The name used  for the project in this documentation 
will be `typescript-boilerplate`. 


### <a name="creating-project-2">2 - The First Project File 

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

### <a name="creating-project-3">3 - Dependencies

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

* `browser-sync`: Plugin to keep multiple browsers & devices in sync when building websites. For further details, 
please visit [https://github.com/BrowserSync/browser-sync](https://github.com/BrowserSync/browser-sync).
* `gulp`: Toolkit that helps you automate painful or time-consuming tasks in your development workflow. For further 
details, please visit [https://github.com/gulpjs/gulp](https://github.com/gulpjs/gulp). 
* `gulp-autoprefixer`: Plugin to parse CSS and add vendor prefixes to CSS rules using values from 
[Can I Use](https://caniuse.com/). It is [recommended](https://developers.google.com/web/tools/setup/setup-buildtools#dont_trip_up_with_vendor_prefixes) 
by Google and used in Twitter and Taobao. For further details, please visit 
[https://github.com/sindresorhus/gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer).
* `gulp-hb`: A sane Gulp plugin to compile Handlebars templates. Useful as a static site generator. For further details, 
please visit [https://github.com/shannonmoeller/gulp-hb](https://github.com/shannonmoeller/gulp-hb).
* `gulp-sass`: Sass plugin for Gulp. For further details, please visit 
[https://github.com/dlmanning/gulp-sass](https://github.com/dlmanning/gulp-sass).
* `gulp-sourcemaps`: Source map support for Gulp. For further details, please visit 
[https://github.com/gulp-sourcemaps/gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps).
* `gulp-tslint`: TypeScript linter plugin for Gulp. For further detials, please visit 
[https://github.com/panuhorsmalahti/gulp-tslint](https://github.com/panuhorsmalahti/gulp-tslint).
* `gulp-typescript`:
* `normalize-scss`:
* `rimraf`:
* `tslint`:
* `typescript`:









