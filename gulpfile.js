const gulp = require('gulp');
const sass = require('gulp-sass');
const html = require('gulp-minify-html');
const css = require('gulp-cssnano');
const img = require('gulp-imagemin');
const uglify = require('gulp-uglify-es').default;
const json = require('gulp-json-minify');

// sass.compile = require('node-sass');

const sassSrc = ['./components/sass/*.scss'];

//compile sass 
function compile(cb) {
    gulp.src(sassSrc)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./development/styles/'));
    cb();
};

//watch for changes in the scripts or styles files
function watch() {
    // gulp.watch(jsSrc, concatJs);
    gulp.watch(sassSrc, compile);
}

function js(cb){
    gulp.src('./development/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts/'));
    cb();
}

function minifyCss(cb){
    gulp.src('./development/styles/*.css')
    .pipe(css())
    .pipe(gulp.dest('./dist/styles/'));
    cb();
}

function minifyHtml(cb){
    gulp.src('./development/*.html')
    .pipe(html())
    .pipe(gulp.dest('./dist/'));
    cb();
}

function images(cb){
    gulp.src('./development/images/*.*')
    .pipe(img())
    .pipe(gulp.dest('./dist/images/'))
    cb();
}

function miniJson(cb){
    //json
    gulp.src('./development/*.json')
    .pipe(json())
    .pipe(gulp.dest('./dist/'));
    cb();
}



// exports.concat = concatJs;
exports.watch = watch;
exports.default = gulp.series(minifyHtml, minifyCss, js, images, miniJson);
