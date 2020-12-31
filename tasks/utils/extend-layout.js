let transfob = require('transfob');

// add handlebars layouts syntax to use page layout template
module.exports = function() {
  return transfob( function( file, enc, next ) {
    let contents = file.contents.toString();
    // use layout set in YAML front matter
    let layout = file.data.page.layout;
    contents = `{{#extend "${layout}"}}{{#content "main"}}
      ${contents}
    {{/content}}{{/extend}}`;
    file.contents = Buffer.from( contents );
    next( null, file );
  } );
};
