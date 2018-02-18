# Documentation

Documentation for the Typescript Boilerplate project.


## Table of Contents

*  [To Do / Roadmap](index.md#roadmap)
*  [Creating a TypeScript project from scratch](index.md#creating-project)
*  [1 - Project Initial Setup](index.md#initial-setup)
*  [2 - The First Project File](index.md#first-file)
*  [3 - Dependencies](chapter2.html#dependencies)
*  [4 - Project File Structure](chapter3.html#file-structure)
*  [5 - Gulp Task Automation](chapter4.html#task-automation)
*  [6 - TypeScript Linting and Compiling](#typescript)
*  [7 - Browserify](chapter6.html#browserify)
*  [8 - CSS Pre-processing](chapter7.html#sass)
*  [9 - HTML Templates Compiling](chapter8.html#handlebars)
*  [10 - Development Server](chapter9.html#browser-sync)


### 6 - TypeScript Linting and Compiling <a name="typescript">

#### TypeScript Linting

The TypeScript linter checks the application code for stylistic or programming errors. This 
check is performed by the `ts:lint` gulp task. 

```javascript
// TypeScript lint gulp task

const gulp = require('gulp'),
      gulpTslint = require('gulp-tslint'),
      tslint = require('tslint');

gulp.task('ts:lint', function () {
    var program = tslint.Linter.createProgram("tsconfig.json");
    return gulp.src([SRC_FOLDER + '/**/*.ts'])
        .pipe(gulpTslint({ program: program, formatter: 'verbose' }))
        .pipe(gulpTslint.report());
});
```

If we take a closer look at the task, we see a reference to a `tsconfig.json` file. The `tsconfig.json`
file holds the configuration for our application TypeScript compilation. However, some of these rules are
also relevant for the TypeScript linter, namely the `module` and the `target` rules.

```json
// tsconfig.json file

{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es6",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "sourceMap": true
    }
}
```

Besides reading some configurations from the `tsconfig.json` file, our TypeScript linter looks for its own
configuration file in our application root folder, the `tslint.json` file.

```json
// tslint.json file example

{
    "rules": {
        "class-name": true,
        "comment-format": [true, "check-space"],
        "curly": true,
        "eofline": true,
        "forin": true,

        ...

        "variable-name": false,
        "whitespace": [true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-separator",
            "check-type"
        ]
    }
}
```

The `tslint.json` is an extensive file, so the previous example shows only a few of the possible configurations
for demonstration purposes. For a more complete list of Typescript lint rules, please visit 
[https://palantir.github.io/tslint/rules/](https://palantir.github.io/tslint/rules/) or the project page
[https://github.com/palantir/tslint](https://github.com/palantir/tslint).

#### TypeScript Compiling

The TypeScript compiler converts code written in the TypeScript programming language into plain 100% browser
compatible and fully interpretable javascript. This process is called transpilation rather than compilation,
as the code is indeed converted rather than compiled. This process is performed by the `ts:compile` gulp task.

```javascript
// TypeScript compile gulp task

const gulp = require('gulp'),
      ts = require('gulp-typescript');

gulp.task('ts:compile', function () {
    var tsProject = ts.createProject('tsconfig.json');
    return gulp.src(SRC_FOLDER + '/**/*.ts')
        .pipe(tsProject())
        .js
        .pipe(gulp.dest(DIST_FOLDER));
});
```

The `tsconfig.json` holds the configurations for the TypeScript compiler, as stated before. For a complete list 
of all the possible TypeScript configurations, please visit 
[https://www.typescriptlang.org/docs/handbook/compiler-options.html](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
and [http://www.typescriptlang.org/docs/handbook/tsconfig-json.html](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html).


### Next: [7 - Browserify](chapter6.html#browserify)
