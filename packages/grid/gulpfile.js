'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const webserver = require('gulp-webserver');

gulp.task('css', () => {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('scss', () => {
  return gulp.src('./src/scss/*.scss').pipe(gulp.dest('./scss'));
});

gulp.task('watch', () => {
  gulp.src('.').pipe(
    webserver({
      livereload: true,
      directoryListing: true,
      open: true,
    })
  );

  gulp.watch('./src/**/*.scss', ['css', 'scss']);
});

gulp.task('build', ['scss', 'css']);
