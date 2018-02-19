# Documentation

Documentation for the Typescript Boilerplate project.


## Table of Contents

*  [Creating a TypeScript project from scratch](index.md#creating-project)
*  [1 - Project Initial Setup](index.md#initial-setup)
*  [2 - The First Project File](index.md#first-file)
*  [3 - Dependencies](chapter2.html#dependencies)
*  [4 - Project File Structure](chapter3.html#file-structure)
*  [5 - Gulp Task Automation](chapter4.html#task-automation)
*  [6 - TypeScript Linting and Compiling](chapter5.html#typescript)
*  [7 - Browserify](chapter6.html#browserify)
*  [8 - CSS Pre-processing](chapter7.html#sass)
*  [9 - HTML Templates Compiling](chapter8.html#handlebars)
*  [10 - Development Server](#browser-sync)


### 10 - Development Server <a name="browser-sync">

Now that we have all our application technologies well defined and gulp tasks in place, we just lack one final step
to make our development process come together, focus on coding and not have to worry with the application build
process when we make changes to our code: the development server.

There are several development server options available. In this project we use [Browser Sync](https://browsersync.io/)
as our browser synchronization and live reloading tool. The development server bootstrap is performed by the `serve`
gulp task.

```javascript
// Serve gulp task

const gulp = require('gulp'),
      browserSync = require('browser-sync').create();

gulp.task('serve', function () {
    // make sure the application is built before launching
    fs.stat(DIST_FOLDER + '/index.html', function (err) {
        if (!err) {
            browserSync.init({
                server: {
                    baseDir: DIST_FOLDER,
                    index: 'index.html'
                }
            });
            // listen for changes in the following file types
            gulp.watch(SRC_FOLDER + '/**/*.ts', ['ts:lint', 'ts:compile']);
            gulp.watch(SRC_FOLDER + '/**/*.scss', ['build:scss']);
            gulp.watch(SRC_FOLDER + '/**/*.json', ['build:html']);
            gulp.watch(SRC_FOLDER + '/**/*.hbs', ['build:html']);
            gulp.watch(SRC_FOLDER + '/**/*.html', ['build:html']);
            gulp.watch([DIST_FOLDER + '/*.js', DIST_FOLDER + '/*.html', DIST_FOLDER + '/*.css']).on('change', browserSync.reload);
        } else {
            // detect specific errors
            switch (err.code) {
                case 'ENOENT':
                    console.log('\x1b[31mGulp "serve" task error\x1b[0m: There is no build available. ' +
                        'Please, run the command \x1b[32mgulp build\x1b[0m before starting the server ' +
                        'or simply \x1b[32mgulp\x1b[0m.\n');
                    break;
                default:
                    console.log('\x1b[31mGulp "serve" task error\x1b[0m: Unknown error. Details: ', err);
                    break;
            }
        }

    });
});

```

There are some aspects involved in the process of bootstraping the development server:

1.  Ensure the `index.html` file exists inside the `dist` folder so we can start the application.
1.  Start the `browserSync` server.
1.  Set up watchers for all the file types involved in the development so the server can be reloaded every time one of 
these files changes.

Once we have our development server up and running we can start developing our code. Now, every time we save changes 
to any code file in the project, the server 'automagically' reloads and the changes are immediately presented in our
browser window.

This chapter concludes our documentation. Please, feel free to submit any comments 
[here](https://github.com/andreros/typescript-boilerplate/issues). Happy coding!
