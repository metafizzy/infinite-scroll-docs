var gulp = require('gulp');

// copy infinite-scroll dist to build/
gulp.task( 'dist', function() {
  return gulp.src( 'node_modules/infinite-scroll/dist/*.*' )
    .pipe( gulp.dest('build') );
});

module.exports = function() {};
