/**
 * @file gulpfile.js
 * @description Gulp task automator javascript file.
 * @author André Rosa
 * @email andreros@gmail.com
 */
const gulp = require('gulp'),
    fs = require('fs'),

    // TypeScript Linter
    tslint = require('gulp-tslint'),

    // SASS
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),

    // Handlebars
    hb = require('gulp-hb'),

    // Browser Sync
    browserSync = require('browser-sync').create();

const DIST_FOLDER = './dist';
const SRC_FOLDER = './src';

/**
 * Typescript Lint task.
 * This task is responsible for linting the application TS (Typescript) files for errors.
 */
gulp.task('tslint', function () {
    gulp.src([ SRC_FOLDER + '/**/*.ts' ])
        .pipe(tslint({ formatter: 'verbose' }))
        .pipe(tslint.report());
});

/**
 * Compile Typescript task.
 * This task is responsible for transpiling the application TS (Typescript) into regular Javascript.
 */
gulp.task('compile:typescript', function () {
    // TODO: Compile typescript
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
 * Build HTML task.
 * This task is responsible for compiling Handlebars templates into HTML.
 */
gulp.task('build:html', function () {
    // TODO: Read multiple JSON files
    var content = fs.readFileSync(SRC_FOLDER + '/index.json');
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

/**
 * Default task.
 * This task is responsible for bundling and running all tasks associated with the production of the application
 * in a distributable format. This task also starts the application server in development mode.
 */
gulp.task('default', [ 'tslint', 'compile:typescript', 'copy:images', 'build:scss', 'build:html' ], function () {
    browserSync.init({
        server: {
            baseDir: DIST_FOLDER,
            index: 'index.html'
        }
    });
    // listen for changes in the following file types
    gulp.watch(SRC_FOLDER + '/**/*.ts', [ 'tslint', 'compile:typescript' ]);
    gulp.watch(SRC_FOLDER + '/**/*.scss', [ 'build:scss' ]);
    gulp.watch(SRC_FOLDER + '/**/*.hbs', [ 'build:html' ]);
    gulp.watch(SRC_FOLDER + '/**/*.html', [ 'build:html' ]);
    gulp.watch([ DIST_FOLDER + '/*.js', DIST_FOLDER + '/*.html', DIST_FOLDER + '/*.css' ]).on('change', browserSync.reload);
});
