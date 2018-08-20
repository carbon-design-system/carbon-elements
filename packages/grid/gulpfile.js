'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

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
  gulp.watch('./src/**/*.scss', ['css', 'scss']);
});

gulp.task('build', ['scss', 'css']);
