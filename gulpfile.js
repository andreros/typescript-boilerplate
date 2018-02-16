/**
 * @file gulpfile.js
 * @description Gulp task automator javascript file.
 * @author André Rosa
 * @email andreros@gmail.com
 */
const gulp = require('gulp'),
    fs = require('fs'),
    rimraf = require('rimraf'),

    // TypeScript Linter
    gulpTslint = require('gulp-tslint'),
    tslint = require('tslint'),

    // TypeScript
    ts = require('gulp-typescript'),

    // Javascript
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),

    // Browserify
    browserify = require('gulp-browserify'),

    // SASS
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),

    // Handlebars
    hb = require('gulp-hb'),
    mergeJson = require('gulp-merge-json'),

    // Browser Sync
    browserSync = require('browser-sync').create();

const DIST_FOLDER = './dist';
const SRC_FOLDER = './src';

/**
 * Clean task.
 * This task is responsible for removing the whole 'dist' folder before making a new build.
 */
gulp.task('clean', function(callback) {
    rimraf(DIST_FOLDER, {}, callback);
});

/**
 * Typescript Lint task.
 * This task is responsible for linting the application TS (Typescript) files for errors.
 */
gulp.task('ts:lint', function () {
    var program = tslint.Linter.createProgram("tsconfig.json");
    gulp.src([ SRC_FOLDER + '/**/*.ts' ])
        .pipe(gulpTslint({ program: program, formatter: 'verbose' }))
        .pipe(gulpTslint.report());
});

/**
 * Compile Typescript task.
 * This task is responsible for transpiling the application TS (Typescript) into regular Javascript.
 */
gulp.task('ts:compile', function () {
    var tsProject = ts.createProject('tsconfig.json');
    return gulp.src(SRC_FOLDER + '/**/*.ts')
        .pipe(tsProject())
        .js
        .pipe(gulp.dest(DIST_FOLDER));
});

/**
 * Browserify task.
 * This task is responsible for bundling all transpiled javascript files into one file with all the javascript code to be executed.
 */
gulp.task('browserify', ['ts:compile'], function() {
    // Single entry point to browserify 
    return gulp.src(DIST_FOLDER + '/index.js')
        .pipe(browserify({
          insertGlobals : true
        }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(DIST_FOLDER));
});

/**
 * Copy Images task.
 * This task is responsible for copying the application images folder into the distribution folder.
 */
gulp.task('copy:images', function () {
    return gulp.src(SRC_FOLDER + '/assets/img/**/*')
        .pipe(gulp.dest(DIST_FOLDER + '/assets/img/'));
});

/**
 * Build SCSS task.
 * This task is responsible for converting SASS files into CSS.
 */
gulp.task('build:scss', function () {
    return gulp.src(SRC_FOLDER + '/index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: [ 'last 2 versions' ]
        }))
        .pipe(gulp.dest(DIST_FOLDER));
});

/**
 * Build JSON task.
 * This task is responsible for merging all JSON files into one central JSON file.
 */
gulp.task('build:json', function() {
    return gulp.src(SRC_FOLDER + '/**/*.json')
        .pipe(mergeJson({
            fileName: 'index.json'
        }))
        .pipe(gulp.dest(DIST_FOLDER));
});

/**
 * Build HTML task.
 * This task is responsible for compiling Handlebars templates into HTML.
 */
gulp.task('build:html', function () {
    // sub task
    gulp.task('build:html:after:build:json', ['build:json'], function() {
        var content = fs.readFileSync(DIST_FOLDER + '/index.json');
        var templateData = JSON.parse(content);
        return gulp
            .src(SRC_FOLDER + '/index.html')
            .pipe(hb({ debug: false }) // set to 'true' to enable debug
                .partials(SRC_FOLDER + '/**/*.hbs')
                //.helpers('./src/assets/helpers/*.js')
                .data(templateData)
            )
            .pipe(gulp.dest(DIST_FOLDER));
    });
    gulp.start('build:html:after:build:json');
});

/**
 * Build main task.
 * This task is responsible for gathering all the subtasks involved in the building process and launch them in parallel.
 */
gulp.task('build', [ 'ts:lint', 'browserify', 'copy:images', 'build:scss', 'build:html' ]);

/**
 * Serve task.
 * This task is responsible for launching Browser Sync and setting up watchers over the file types involved in the
 * development process. If any changes are detected in one of those files, the build process is triggered and finally,
 * Browser Sync reloads the application in all opened browsers.
 */
gulp.task('serve', function() {
    // make sure the application is built before launching
    fs.stat(DIST_FOLDER + '/index.html', function(err) {
        if (!err) {
            browserSync.init({
                server: {
                    baseDir: DIST_FOLDER,
                    index: 'index.html'
                }
            });
            // listen for changes in the following file types
            gulp.watch(SRC_FOLDER + '/**/*.ts', [ 'ts:lint', 'ts:compile' ]);
            gulp.watch(SRC_FOLDER + '/**/*.scss', [ 'build:scss' ]);
            gulp.watch(SRC_FOLDER + '/**/*.hbs', [ 'build:html' ]);
            gulp.watch(SRC_FOLDER + '/**/*.html', [ 'build:html' ]);
            gulp.watch([ DIST_FOLDER + '/*.js', DIST_FOLDER + '/*.html', DIST_FOLDER + '/*.css' ]).on('change', browserSync.reload);
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

/**
 * Default task.
 * This task is responsible for bundling and running all tasks associated with the production of the application
 * in a distributable format. This task also starts the application server in development mode.
 */
gulp.task('default', ['clean'], function() {
    gulp.task('serve:after:build', [ 'ts:lint', 'browserify', 'copy:images', 'build:scss', 'build:html' ], function() {
        gulp.start('serve');
    });
    gulp.start('serve:after:build');
});
