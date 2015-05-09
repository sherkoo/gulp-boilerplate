/**
 * Node Modules
 */

var gulp = require('gulp'),
    gulpUtil = require('gulp-util'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');

/**
 * Tasks
 */

// task: scripts
gulp.task('scripts', function(){
  return gulp.src('js/libs/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/min'))
});

// task: sass
gulp.task('sass', function () {
  gulp.src('./scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.min.css'))
    .pipe(minify())
    .pipe(gulp.dest('./css'));
});

/**
 * Watch
 */

// task: default
gulp.task('default', ['watch']);

// watch over changes of source files
gulp.task('watch', function() {
  gulp.watch('./').on('change', livereload.changed);
  gulp.watch('./js/**', ['scripts']);
  gulp.watch('./scss/**', ['sass']);
  gulp.watch('./css/**').on('change', livereload.changed);
});
