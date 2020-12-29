var gulp = require('gulp');
var concat = require('gulp-concat');
var terser = require('gulp-terser');
var getGlobPaths = require('./utils/get-glob-paths');

var jsSrc = [
  // dependencies
  'node_modules/ev-emitter/ev-emitter.js',
  'node_modules/fizzy-ui-utils/utils.js',
  // infinite-scroll
  'node_modules/infinite-scroll/js/core.js',
  'node_modules/infinite-scroll/js/page-load.js',
  'node_modules/infinite-scroll/js/scroll-watch.js',
  'node_modules/infinite-scroll/js/history.js',
  'node_modules/infinite-scroll/js/status.js',
  'node_modules/infinite-scroll/js/button.js',
  // masonry
  'node_modules/desandro-matches-selector/matches-selector.js',
  'node_modules/get-size/get-size.js',
  'node_modules/outlayer/item.js',
  'node_modules/outlayer/outlayer.js',
  'node_modules/masonry-layout/masonry.js',
  // imagesloaded
  'node_modules/imagesloaded/imagesloaded.js',
  // fizzy docs modules
  'node_modules/fizzy-docs-modules/*/*.js',
  // docs
  'js/boilerplate.js',
  // modules
  'modules/**/*.js',
  // init
  'js/init.js',
];

// concat & minify js
gulp.task( 'docs-js', function() {
  return gulp.src( jsSrc )
    .pipe( terser() )
    .pipe( concat('infinite-scroll-docs.min.js') )
    .pipe( gulp.dest('build/js') );
});

gulp.task( 'js', gulp.parallel( 'docs-js' ) );

module.exports = function( site ) {

  site.data.js_paths = getGlobPaths( jsSrc );

};
