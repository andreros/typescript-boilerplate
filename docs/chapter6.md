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
*  [7 - Browserify](#browserify)
*  [8 - CSS Pre-processing](chapter7.html#sass)
*  [9 - HTML Templates Compiling](chapter8.html#handlebars)
*  [10 - Development Server](chapter9.html#browser-sync)


### 7 - Browserify <a name="browserify">

[Browserify](https://github.com/browserify/browserify)
is a tool for compiling node-flavored commonjs modules for the browser. The module system that browserify 
uses is the same as node, so packages published to npm that were originally intended for use in node but 
not browsers will work just fine in the browser too. With this idea in mind, this project uses 
[Browserify](https://github.com/browserify/browserify) to bundle the 
application various modules into one `bundle.js` file to be included in our distribution `index.html` file.

This process is performed by the `browserify` gulp task.

```javascript
// Browserify gulp task

const gulp = require('gulp'),
      browserify = require('browserify'),
      uglify = require('gulp-uglify-es').default,
      sourcemaps = require('gulp-sourcemaps'),
      vinylSourceStream = require('vinyl-source-stream'),
      vinylBuffer = require('vinyl-buffer');

gulp.task('browserify', ['ts:compile'], function () {
    // Single entry point to browserify
    var b = browserify({
        entries: DIST_FOLDER + '/index.js',
        debug: false
    });
    return b.bundle()
        .pipe(vinylSourceStream('bundle.js'))
        .pipe(vinylBuffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(DIST_FOLDER));
});
```

[Browserify](https://github.com/browserify/browserify) takes the application
main javascript file, in this case `index.js`, and follows all other referenced javascript files recursively
to create a single `bundle.js` javascript file with all the application code. Bear in mind the following line:

```javascript
gulp.task('browserify', ['ts:compile'], function () { ... });
```

The `browserify` gulp task defines the precedence of the `ts:compile` gulp task. This means that everytime we
run the `browserify` gulp task, the `ts:compile` task will be run previously, guaranteeing the existence of the 
`index.js` application entry point javascript file.

The `vinylSourceStream` and `vinylBuffer` dependencies are responsible for dealing with text streams throughout
the bundling process. The `sourcemaps` dependency generates sourcemaps for the bundled code, allowing the 
debugging of the uncompressed javascript code inside browsers consoles.

The `uglify` dependency is responsible for minifying the bundled javascript code into the smallest size possible
for faster application loading time in browsers.


### Next: [8 - CSS Pre-processing](chapter7.html#sass)
