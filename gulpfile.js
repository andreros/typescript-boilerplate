const gulp = require('gulp'),
    fs = require('fs'),

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

gulp.task('build:images', function () {
    return gulp.src(SRC_FOLDER + '/assets/img/**/*')
        .pipe(gulp.dest(DIST_FOLDER + '/assets/img/'));
});

gulp.task('build:html', function () {
    // ToDO Read multiple JSON files
    var content = fs.readFileSync(SRC_FOLDER + '/index.json');
    var templateData = JSON.parse(content);

    return gulp
        .src(SRC_FOLDER + '/index.html')
        .pipe(hb(/*{ debug: true }*/)
            .partials(SRC_FOLDER + '/**/*.hbs')
            //.helpers('./src/assets/helpers/*.js')
            .data(templateData)
        )
        .pipe(gulp.dest(DIST_FOLDER));


});


gulp.task('default', [ 'build:scss', 'build:images', 'build:html' ], function () {
    browserSync.init({
        server: {
            baseDir: DIST_FOLDER,
            index: 'index.html'
        }
    });
    gulp.watch(SRC_FOLDER + '/**/*.scss', ['build:scss']);
    gulp.watch(SRC_FOLDER + '/**/*.hbs', ['build:html']);
    gulp.watch(SRC_FOLDER + '/**/*.html', ['build:html']);
    gulp.watch([DIST_FOLDER + '/*.html', DIST_FOLDER + '/*.css']).on('change', browserSync.reload);
});
