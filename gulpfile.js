'use strict';

/**
 * Gulp Dependencies
 */
var gulp = require('gulp');
var util = require('gulp-util');
var $ = require('gulp-load-plugins')();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var sequence = require('gulp-sequence');

var production = util.env.production;


/**
 * Styles compiler task
 */
gulp.task('styles', function() {
    gulp.src(['sass/styles.scss'])
    // .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sass().on('error', sass.logError))
        // .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    // .pipe(production ? minifyCss(): util.noop())
    // .pipe(production ? util.noop(): sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'));
});




/**
 * Watcher task
 */
gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', ['styles']);
});


/**
 * Development task
 */
gulp.task('dev', ['default', 'watch']);



/**
 * Default task
 */
gulp.task('default', sequence('styles'));
