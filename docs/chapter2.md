# Documentation

Documentation for the Typescript Boilerplate project.


## Table of Contents

*  [To Do / Roadmap](index.md#roadmap)
*  [Creating a TypeScript project from scratch](index.md#creating-project)
*  [1 - Project Initial Setup](index.md#initial-setup)
*  [2 - The First Project File](index.md#first-file)
*  [3 - Dependencies](index.md#dependencies)
*  [4 - Project File Structure](#file-structure)


### 4 - Project File Structure <a name="file-structure">

```
├── dist
│   ├── components
│   │   ├── component1
│   │   ├── component2
│   │   ├── ...
│   │   └── componentN
│   ├── index.css
│   ├── index.html
│   ├── index.js
│   └── index.json
├── docs
│   ├── _config.yml
│   ├── chapter2.md
│   └── index.md
├── src
│   ├── components
│   │   ├── component1
│   │   ├── component2
│   │   ├── ...
│   │   └── componentN
│   ├── index.html
│   ├── index.scss
│   └── index.ts
├── .editorconfig
├── .gitignore
├── gulpfile.js
├── package.json
├── README.md
├── tsconfig.json
├── tslint.json
└── UNLICENSE.txt
```

* `dist`: Folder containing the version built for distribution.
* `docs`: Folder containing the project documentation.
* `src`: Folder containing the project source code.
    * `components`: the application components folder.
* `.editorconfig`: File containing the editor configuration for text editors or IDEs capable of interpreting this file.
* `.gitignore`: File containing a set of rules indicating which files should be ignored when commiting or pushing code to a git repository.
* `gulpfile.js`: File containing the Gulp tasks implementation.
* `package.json`: File containing all the relevant project information, from project details to a list of project dependencies.
* `README.md`: File containing the details and an explanation about the project.
* `tsconfig.json`: File containing the TypeScript compiler configuration options for this project.
* `tslint.json`: File containing the TypeScript code Linter rules for this project.
* `UNLICENSE.txt`: File containing the text for the licensing model applied to the project.

