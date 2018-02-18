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
*  [6 - TypeScript Linting and Compiling](chapter5.html#typescript)
*  [7 - Browserify](chapter6.html#browserify)
*  [8 - CSS Pre-processing](chapter7.html#sass)
*  [9 - HTML Templates Compiling](#handlebars)
*  [10 - Development Server](chapter9.html#browser-sync)


### 9 - HTML Templates Compiling <a name="handlebars">

HTML templates allow web designers and developers to create reusable pieces of markup for the automatic generation
of custom web pages. Templates can be reused by the static elements of a web page or dynamic elements to be defined
based on the parameters. Templates provide a basic structure and appearance characteristic for web content.

There are several HTML teplate engines available. In this project we use the [Handlebars](https://handlebarsjs.com/)
template engine. The template processing and convertion to HTML is performed by the `build:html` gulp task.

```javascript
// Build HTML gulp task

const gulp = require('gulp'),
      hb = require('gulp-hb');

gulp.task('build:html', ['build:json'], function () {
    var content = fs.readFileSync(DIST_FOLDER + '/index.json');
    var templateData = JSON.parse(content);
    return gulp
        .src(SRC_FOLDER + '/index.html')
        .pipe(hb({ debug: false }) // set to 'true' to enable debug
            .partials(SRC_FOLDER + '/**/*.hbs')
            .helpers([SRC_ASSETS_FOLDER + '/handlebars-helpers/**/*.js'])
            .data(templateData)
        )
        .pipe(gulp.dest(DIST_FOLDER));
});
```

The `hb` dependency processes all the application `.hbs` files, interpolating them with the data defined inside the
`index.json` file. For this file to be available, the `build:json` gulp task must be ran before the `build:html` gulp
task.

```javascript
// Build JSON gulp task

const gulp = require('gulp'),
      mergeJson = require('gulp-merge-json');

gulp.task('build:json', function () {
    return gulp.src(SRC_FOLDER + '/**/*.json')
        .pipe(mergeJson({
            fileName: 'index.json'
        }))
        .pipe(gulp.dest(DIST_FOLDER));
});
```

The `build:json` gulp task bundles all application JSON files contents into one main JSON file to be consumed by the
`build:html` gulp task. The data contained by the `index.json` file will be used during the templates interpolation
process to generate the final markup.


### Next: [10 - Development Server](chapter9.html#browser-sync)
