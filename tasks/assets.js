var gulp = require('gulp');

gulp.task( 'fonts', function() {
  return gulp.src( 'fonts/*.*', { base: '.' } )
    .pipe( gulp.dest('build') );
});

gulp.task( 'assets', function() {
  return gulp.src('assets/**/*.*')
    .pipe( gulp.dest('build') );
});

var demoSrc = 'demo/**/*.*';

gulp.task( 'demo', function() {
  return gulp.src( demoSrc )
    .pipe( gulp.dest('build/demo') );
});

// copy prod assets
gulp.task( 'prod-assets', [ 'fonts', 'assets', 'demo' ] );

module.exports = function( site ) {
  site.watch( demoSrc, [ 'demo' ] );
};
