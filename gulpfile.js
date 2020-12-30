const gulp = require('gulp');

// ----- site ----- //

let taskName = process.argv[2];

// stuff used across tasks
let site = {
  // templating data
  data: {
    productName: 'Infinite Scroll',
    majorVersion: 4,
    isDev: taskName == 'dev',
    isExport: taskName == 'export',
  },
};

// ----- tasks ----- //

require('./tasks/assets')( site );
require('./tasks/dist')( site );
require('./tasks/js')( site );
require('./tasks/css')( site );
require('./tasks/content')( site );

// ----- default ----- //

gulp.task( 'default', gulp.parallel(
    'content',
    'js',
    'css',
    'dist',
    'prod-assets',
) );

// ----- export ----- //

// version of site used in infinite-scroll-docs.zip
gulp.task( 'export', gulp.parallel(
    'content',
    'js',
    'css',
    'dist',
    'assets',
) );

// ----- watch ----- //

gulp.task( 'dev', gulp.parallel(
    'dist',
    'prod-assets',
    'content',
) );
