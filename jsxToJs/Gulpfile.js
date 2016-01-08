var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');

gulp.task('default', function () {
    return gulp.src('demo.jsx')
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});


//var gulp = require('gulp');
//var react = require('gulp-react');

//gulp.task('default', function () {
//    return gulp.src('template.jsx')
//        .pipe(react())
//        .pipe(gulp.dest('dist'));
//});

