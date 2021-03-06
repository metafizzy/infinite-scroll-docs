let transfob = require('transfob');
let path = require('path');

// add handlebars layouts syntax to use page layout template
module.exports = function() {
  return transfob( function( file, enc, next ) {
    file.fileBasename = path.basename( file.path, '.hbs' );
    file.relativePath = path.relative( file.cwd + '/content/', file.path )
      .replace( /.hbs$/, '' );
    // rootPath
    if ( file.data.page.is404 ) {
      file.rootPath = '/';
    } else {
      file.rootPath = path.relative( file.path, file.cwd + '/content/' )
        .replace( /\.\.$/, '' );
    }
    next( null, file );
  } );
};
