const gulp = require('gulp');
const rename = require('gulp-rename');
const filter = require('gulp-filter');
const frontMatter = require('gulp-front-matter');
const path = require('path');
const pageNav = require('./utils/page-nav');
const highlightCodeBlock = require('./utils/highlight-code-block');
const hb = require('gulp-hb');
const hbLayouts = require('handlebars-layouts');
const extendLayout = require('./utils/extend-layout');
const addFileProperties = require('./utils/add-file-properties');

// sources
let contentSrc = 'content/**/*.hbs';
let partialsSrc = [
  'node_modules/fizzy-docs-modules/*/*.hbs',
  'modules/*/**/*.hbs',
];
let dataSrc = 'data/*.json';
let pageTemplateSrc = 'templates/*.hbs';

// ----- page template ----- //

let helpers = {
  lowercase: function( str ) {
    return str.toLowerCase();
  },
  firstValue: function( ary ) {
    return ary[0];
  },
  plusOne: function( str ) {
    return parseInt( str, 10 ) + 1;
  },
  slug: function( str ) {
    return str.replace( /[^\w\d]+/gi, '-' ).toLowerCase();
  },
};

module.exports = function( site ) {

  gulp.task( 'content', function() {
    // exclude 404 if export
    let filterQuery = site.data.isExport ? [ '**', '!**/404.*' ] : '**';

    site.data.sourceUrlPath = site.data.isExport ? '' :
      'https://unpkg.com/infinite-scroll@4/dist/';

    return gulp.src( contentSrc )
      .pipe( filter( filterQuery ) )
      .pipe( frontMatter({
        property: 'data.page',
        remove: true,
      }) )
      .pipe( extendLayout() )
      .pipe( addFileProperties() )
      .pipe( hb()
        .partials( pageTemplateSrc )
        .partials( partialsSrc, {
          parsePartialName: function( options, file ) {
            return path.basename( file.path, '.hbs' );
          },
        } )
        .data( dataSrc )
        .data( site.data )
        .helpers( hbLayouts )
        .helpers( helpers ) )
      .pipe( highlightCodeBlock() )
      .pipe( pageNav() )
      .pipe( rename({ extname: '.html' }) )
      .pipe( gulp.dest('build') );
  } );

  site.watch( contentSrc, [ 'content' ] );
  site.watch( pageTemplateSrc, [ 'content' ] );
  site.watch( dataSrc, [ 'content' ] );
  site.watch( partialsSrc, [ 'content' ] );

};
