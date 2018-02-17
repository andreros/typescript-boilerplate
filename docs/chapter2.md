# Documentation

Documentation for the Typescript Boilerplate project.


## Table of Contents

*  [To Do / Roadmap](index.md#roadmap)
*  [Creating a TypeScript project from scratch](index.md#creating-project)
*  [1 - Project Initial Setup](index.md#initial-setup)
*  [2 - The First Project File](index.md#first-file)
*  [3 - Dependencies](#dependencies)
*  [4 - Project File Structure](chapter3.html#file-structure)
*  [5 - Gulp Task Automation](chapter4.html#task-automation)
*  [6 - TypeScript Linting and Compiling](chapter5.html#typescript)
*  [7 - Browserify](chapter6.html#browserify)
*  [8 - CSS Pre-processing](chapter7.html#sass)
*  [9 - HTML Templates Compiling](chapter8.html#handlebars)
*  [10 - Development Server](chapter9.html#browser-sync)


### 3 - Dependencies <a name="dependencies">

Since our project is a TypeScript boilerplate, the following dependencies, ordered alphabetically for better readability,
are the ones needed for the development of such project. Therefore, we will be focusing on the development dependencies
rather than the distribution ones. The version chosen for each dependency was the latest version available to the date of
writing of this documentation.

```json
{
    ...

    "devDependencies": {
        "browser-sync": "^2.23.6",
        "browserify": "^16.1.0",
        "gulp": "^3.9.1",
        "gulp-autoprefixer": "^4.1.0",
        "gulp-concat": "^2.6.1",
        "gulp-hb": "^7.0.1",
        "gulp-merge-json": "^1.2.1",
        "gulp-rename": "^1.2.2",
        "gulp-sass": "^3.1.0",
        "gulp-sourcemaps": "^2.6.4",
        "gulp-tslint": "^8.1.3",
        "gulp-typescript": "^4.0.1",
        "gulp-uglify-es": "^1.0.0",
        "normalize-scss": "^7.0.1",
        "rimraf": "^2.6.2",
        "tslint": "^5.9.1",
        "typescript": "^2.7.1",
        "vinyl-source-stream": "^2.0.0",
        "vinyl-buffer": "^1.0.1"
    },

    ...
}
```

* `browser-sync` [https://github.com/BrowserSync/browser-sync](https://github.com/BrowserSync/browser-sync):
Plugin to keep multiple browsers & devices in sync when building websites.

* `browserify` [https://github.com/browserify/browserify](https://github.com/browserify/browserify):
Bundle modules with BrowserifyJS, browser-side require() the node.js way.

* `gulp` [https://github.com/gulpjs/gulp](https://github.com/gulpjs/gulp):
Toolkit that helps you automate painful or time-consuming tasks in your development workflow.

* `gulp-autoprefixer` [https://github.com/sindresorhus/gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer):
Plugin to parse CSS and add vendor prefixes to CSS rules using values from
[Can I Use](https://caniuse.com/). It is
[recommended](https://developers.google.com/web/tools/setup/setup-buildtools#dont_trip_up_with_vendor_prefixes)
by Google and used in Twitter and Taobao.

* `gulp-concat` [https://github.com/gulp-community/gulp-concat](https://github.com/gulp-community/gulp-concat):
Streaming concat middleware for Gulp.

* `gulp-hb` [https://github.com/shannonmoeller/gulp-hb](https://github.com/shannonmoeller/gulp-hb):
A sane Gulp plugin to compile Handlebars templates. Useful as a static site generator.

* `gulp-merge-json` [https://github.com/joshswan/gulp-merge-json](https://github.com/joshswan/gulp-merge-json):
A gulp plugin for deep-merging multiple JSON & JSON5 files into one file. Export as JSON or a node module.

* `gulp-rename` [https://github.com/hparra/gulp-rename](https://github.com/hparra/gulp-rename):
A gulp plugin for renaming files. This plugin provides simple file renaming methods.

* `gulp-sass` [https://github.com/dlmanning/gulp-sass](https://github.com/dlmanning/gulp-sass):
Sass plugin for Gulp.

* `gulp-sourcemaps` [https://github.com/gulp-sourcemaps/gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps):
Source map support for Gulp.

* `gulp-tslint` [https://github.com/panuhorsmalahti/gulp-tslint](https://github.com/panuhorsmalahti/gulp-tslint):
TypeScript linter plugin for Gulp.

* `gulp-typescript` [https://github.com/ivogabe/gulp-typescript](https://github.com/ivogabe/gulp-typescript):
A TypeScript compiler for gulp with incremental compilation support.

* `gulp-uglify-es` [https://gitlab.com/itayronen/gulp-uglify-es](https://gitlab.com/itayronen/gulp-uglify-es):
Gulp stream to uglify with 'uglify-es' (es6 supported).

* `normalize-scss` [https://github.com/JohnAlbin/normalize-scss](https://github.com/JohnAlbin/normalize-scss):
Sass version of Normalize.css, a collection of HTML element and attribute rulesets to normalize styles across all browsers.

* `rimraf` [https://github.com/isaacs/rimraf](https://github.com/isaacs/rimraf):
A `rm -rf` util for node.js.

* `tslint` [https://github.com/palantir/tslint](https://github.com/palantir/tslint):
An extensible linter for the TypeScript language.

* `typescript` [https://github.com/Microsoft/TypeScript](https://github.com/Microsoft/TypeScript):
TypeScript is a superset of JavaScript that compiles to clean JavaScript output.

* `vinyl-source-stream` [https://github.com/hughsk/vinyl-source-stream](https://github.com/hughsk/vinyl-source-stream):
Use conventional text streams at the start of your gulp or vinyl pipelines 

* `vinyl-buffer` [https://github.com/hughsk/vinyl-buffer](https://github.com/hughsk/vinyl-buffer):
Convert streaming vinyl files to use buffers.


Now that our `package.json` file is in place, from the project directory run the command `npm install` to install all
the needed project dependencies. Notice the newly created directory `node_modules` inside the project directory.


### Next: [4 - Project File Structure](chapter3.html#file-structure)
