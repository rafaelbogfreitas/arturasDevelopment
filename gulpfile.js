const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const html = require('gulp-minify-html');
const css = require('gulp-cssnano');
const image = require('gulp-imagemin');
const uglify = require('gulp-uglify-es').default;

sass.compile = require('node-sass');

const jsSrc = ['./components/scripts/*.js'];
const sassSrc = ['./components/sass/*.scss'];

//concat script files from 'components' folder
function concatJs (cb) {
    gulp.src(jsSrc)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./development/scripts/'));
    cb();
};

//compile sass 
function compile(cb) {
    gulp.src(sassSrc)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./development/styles/'));
    cb();
};

//watch for changes in the scripts or styles files
function watch() {
    gulp.watch(jsSrc, concatJs);
    gulp.watch(sassSrc, compile);
    gulp.watch('./development/**/*.*', minify);
}

//minify all files and send to dist
function minify(cb){
    //html
    gulp.src('./development/*.html')
    .pipe(html())
    .pipe(gulp.dest('./dist/'));
    //css
    gulp.src('./development/styles/*.css')
    .pipe(css())
    .pipe(gulp.dest('./dist/css/'));
    //js
    gulp.src('./development/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
    cb();
}



exports.concat = concatJs;
exports.compile = compile;
exports.watch = watch;
exports.minify = minify;
