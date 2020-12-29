var gulp = require('gulp');
var concat = require('gulp-concat');
var getGlobPaths = require('./utils/get-glob-paths');

var cssSrc = [
  // dependencies
  'node_modules/normalize.css/normalize.css',
  // fizzy docs modules
  'node_modules/fizzy-docs-modules/*/*.css',
  // base
  'css/*.css',
  // modules
  'modules/*/**/*.css'
];

gulp.task( 'css', function() {
  gulp.src( cssSrc )
    .pipe( concat('infinite-scroll-docs.css') )
    .pipe( gulp.dest('build/css') );
});

module.exports = function( site ) {
  site.data.css_paths = getGlobPaths( cssSrc );
};
