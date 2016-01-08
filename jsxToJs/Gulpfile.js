var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');

gulp.task('default', function () {
    return gulp.src('demo.jsx')
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('es6', function () {
    return gulp.src('demoes6.jsx')
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

//var gulp = require('gulp');
//var react = require('gulp-react');

//gulp.task('default', function () {
//    return gulp.src('template.jsx')
//        .pipe(react())
//        .pipe(gulp.dest('dist'));
//});

