var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jsonLint = require('gulp-json-lint');

gulp.task( 'hint-js', function() {
  return gulp.src([ 'js/*.js', 'modules/**/*/*.js' ])
    .pipe( jshint() )
    .pipe( jshint.reporter('default') );
});

gulp.task( 'hint-tasks', function() {
  return gulp.src([ 'gulpfile.js', 'tasks/*.js' ])
    .pipe( jshint() )
    .pipe( jshint.reporter('default') );
});

gulp.task( 'hint-json', function() {
  return gulp.src([ '*.json, data/*.json' ])
    .pipe( jsonLint() )
    .pipe( jsonLint.report('verbose') );
});

gulp.task( 'hint', [ 'hint-js', 'hint-tasks', 'hint-json' ]);

module.exports = function() {
};
