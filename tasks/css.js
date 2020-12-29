let gulp = require('gulp');
let concat = require('gulp-concat');
let getGlobPaths = require('./utils/get-glob-paths');

let cssSrc = [
  // dependencies
  'node_modules/normalize.css/normalize.css',
  // fizzy docs modules
  'node_modules/fizzy-docs-modules/*/*.css',
  // base
  'css/*.css',
  // modules
  'modules/*/**/*.css',
];

gulp.task( 'css', function() {
  return gulp.src( cssSrc )
    .pipe( concat('infinite-scroll-docs.css') )
    .pipe( gulp.dest('build/css') );
} );

module.exports = function( site ) {
  site.data.cssPaths = getGlobPaths( cssSrc );
};
