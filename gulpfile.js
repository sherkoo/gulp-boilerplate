/********************

Node Modules

********************/

var gulp = require('gulp'),
    gulpUtil = require('gulp-util'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

/********************

Tasks

********************/

// task: default
gulp.task('default', ['watch']);

// task: javascripts
gulp.task('scripts', function(){
  return gulp.src('js/libs/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/min'))
});

// task: css
gulp.task('css', function(){
  return gulp.src('css/libs/*.css')
    .pipe(concat('main.min.css'))
    .pipe(minify())
    .pipe(gulp.dest('css/min'))
});

/********************

Watch

********************/

// watch over changes of source files
gulp.task('watch', function() {
  gulp.watch('./').on('change', livereload.changed);
  gulp.watch('./js/**', ['scripts']);
  gulp.watch('./css/**', ['css']);
  gulp.watch('./css/**').on('change', livereload.changed);
});
