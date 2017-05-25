var transfob = require('transfob');
var path = require('path');

// add handlebars layouts syntax to use page layout template
module.exports = function() {
  return transfob( function( file, enc, next ) {
    file.basename = path.basename( file.path, '.hbs' );
    file.rootPath = path.relative( file.path, file.cwd + '/content/' )
      .replace( /\.\.$/, '' );
    next( null, file );
  });
};
