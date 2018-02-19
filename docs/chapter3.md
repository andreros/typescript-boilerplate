# Documentation

Documentation for the Typescript Boilerplate project.


## Table of Contents

*  [Creating a TypeScript project from scratch](index.md#creating-project)
*  [1 - Project Initial Setup](index.md#initial-setup)
*  [2 - The First Project File](index.md#first-file)
*  [3 - Dependencies](chapter2.html#dependencies)
*  [4 - Project File Structure](#file-structure)
*  [5 - Gulp Task Automation](chapter4.html#task-automation)
*  [6 - TypeScript Linting and Compiling](chapter5.html#typescript)
*  [7 - Browserify](chapter6.html#browserify)
*  [8 - CSS Pre-processing](chapter7.html#sass)
*  [9 - HTML Templates Compiling](chapter8.html#handlebars)
*  [10 - Development Server](chapter9.html#browser-sync)


### 4 - Project File Structure <a name="file-structure">

This project presents the following file structure. The structure for the components inside the `src` folder
is one possible approach on how to organize a library of developed components. In any case, feel free to adjust
it to your project needs, should that necessity arise.

The project implements two components `header` and `footer`, meant to live inside the `app` component.In turn, 
the `app` component is intended to wrap any other existing component, being only component called inside our main
`index.html` file. This is a common approach among modern front-end frameworks like React or Angular.

Below is a detailed explanation of each file purpose.


```
├── dist
│   ├── assets
│   │   └── img
│   ├── bundle.js
│   ├── bundle.js.map
│   ├── index.css
│   └── index.html
├── docs
│   ├── _config.yml
│   ├── chapter2.md
│   ├── ...
│   ├── chapter9.md
│   └── index.md
├── src
│   ├── assets
│   │   ├── handlebars-helpers
│   │   │   └── *.js
│   │   └── img
│   │       └── *.[jpg, png, gif]
│   ├── components
│   │   ├── app
│   │   │   ├── app.hbs
│   │   │   ├── app.json
│   │   │   ├── app.scss
│   │   │   └── app.ts
│   │   ├── footer
│   │   │   ├── footer.hbs
│   │   │   ├── footer.json
│   │   │   ├── footer.scss
│   │   │   └── footer.ts
│   │   ├── header
│   │   │   ├── _title.hbs
│   │   │   ├── header.hbs
│   │   │   ├── header.json
│   │   │   ├── header.scss
│   │   │   └── header.ts
│   │   └── index.ts
│   ├── index.html
│   ├── index.scss
│   ├── index.ts
│   └── theme.scss
├── .editorconfig
├── .gitignore
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── gulpfile.js
├── ISSUE_TEMPLATE.md
├── package.json
├── PULL_REQUEST_TEMPLATE.md
├── README.md
├── tsconfig.json
├── tslint.json
└── UNLICENSE.txt
```

* `dist`: Folder containing the version built for distribution. This folder and its contents will only be available after a 
            successful build.
    * `assets`: The application assets folder.
        * `img`: The application images folder.
    * `bundle.js`: The application executable javascript file yield from the browserify module bundler.
    * `bundle.js.map`: Source map for the `bundle.js` file.
    * `index.css`: The compiled CSS file.
    * `index.html`: The application main HTML file.

* `docs`: Folder containing the project documentation.
    * `_config.yml`: GitHub Jekyll documentation theme configuration file.
    * `index.md`: Index file for the project documentation.
    * `*.md`: Project documentation files.

* `src`: Folder containing the project source code.
    * `assets`: The application assets folder.
        * `handlebars-helpers`: Handlebars templates helpers.
        * `img`: The application images folder.

    * `components`: The application components folder.
        * `<component-folder>`: The component folder where all files related to each component are stored.
            * `<component>.hbs`: The component handlebars template file. This file holds the component HTML.
            * `<component>.json`: The component JSON file. This file holds the component data.
            * `<component>.scss`: The component SASS file. This file holds the component styling.
            * `<component>.ts`: The component TypeScript file. This file holds the component code.
        * `index.ts`: The typescript components export file.

    * `index.html`: The application main HTML file.
    * `index.scss`: The application main SASS file where all other application SASS files must be included.
    * `index.ts`: The application main typescript file. This file is the entrypoint for the typescript compilation.
    * `theme.scss`: The application global SASS variables file.

* `.editorconfig`: File containing the editor configuration for text editors or IDEs capable of interpreting this file.
* `.gitignore`: File containing a set of rules indicating which files should be ignored when commiting or pushing code to a git repository.
* `CODE_OF_CONDUCT.md`: Code of Conduct about this open source community project.
* `CONTRIBUTING.md`:  Contributing rules for this open source community project.
* `gulpfile.js`: File containing the Gulp tasks implementation.
* `ISSUE_TEMPLATE.md`:  Issue reportin gtemplate for the project.
* `package.json`: File containing all the relevant project information, from project details to a list of project dependencies.
* `PULL_REQUEST_TEMPLATE.md`:  Pull request template for the project.
* `README.md`: File containing the details and an explanation about the project.
* `tsconfig.json`: File containing the TypeScript compiler configuration options for this project.
* `tslint.json`: File containing the TypeScript code Linter rules for this project.
* `UNLICENSE.txt`: File containing the text for the licensing model applied to the project.


### Next: [5 - Gulp Task Automation](chapter4.html#task-automation)
