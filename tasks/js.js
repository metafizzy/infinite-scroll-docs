var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var getGlobPaths = require('./utils/get-glob-paths');

var jsSrc = [
  // dependencies
  'bower_components/desandro-matches-selector/matches-selector.js',
  'bower_components/ev-emitter/ev-emitter.js',
  'bower_components/fizzy-ui-utils/utils.js',
  // infinite-scroll
  'bower_components/infinite-scroll/js/core.js',
  'bower_components/infinite-scroll/js/page-load.js',
  'bower_components/infinite-scroll/js/scroll-watch.js',
  'bower_components/infinite-scroll/js/history.js',
  'bower_components/infinite-scroll/js/status.js',
  'bower_components/infinite-scroll/js/button.js',
  // masonry
  'bower_components/get-size/get-size.js',
  'bower_components/outlayer/item.js',
  'bower_components/outlayer/outlayer.js',
  'bower_components/masonry/masonry.js',
  // imagesloaded
  'bower_components/imagesloaded/imagesloaded.js',
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
    .pipe( concat('infinite-scroll-docs.min.js') )
    .pipe( gulp.dest('build/js') );
});

gulp.task( 'js', [ 'docs-js' ] );

module.exports = function( site ) {

  site.data.js_paths = getGlobPaths( jsSrc );

};
