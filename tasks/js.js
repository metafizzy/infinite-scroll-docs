var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var getGlobPaths = require('./utils/get-glob-paths');

var jsSrc = [
  // dependencies
  'bower_components/desandro-matches-selector/matches-selector.js',
  'bower_components/ev-emitter/ev-emitter.js',
  'bower_components/fizzy-ui-utils/utils.js',
  // 'bower_components/imagesloaded/imagesloaded.js',
  'bower_components/episcroll/js/core.js',
  'bower_components/episcroll/js/page-load.js',
  'bower_components/episcroll/js/scroll-watch.js',
  'bower_components/episcroll/js/history.js',
  'bower_components/episcroll/js/status.js',
  'bower_components/episcroll/js/button.js',
  // fizzy docs modules
  'bower_components/fizzy-docs-modules/*/*.js',
  // docs
  'js/boilerplate.js',
  // modules
  'modules/**/*.js',
  // init
  'js/init.js',
];

// concat & minify js
gulp.task( 'docs-js', function() {
  gulp.src( jsSrc )
    .pipe( uglify() )
    .pipe( concat('episcroll-docs.min.js') )
    .pipe( gulp.dest('build/js') );
});

gulp.task( 'js', [ 'docs-js', 'copy-js' ] );

module.exports = function( site ) {

  site.data.js_paths = getGlobPaths( jsSrc );

};
