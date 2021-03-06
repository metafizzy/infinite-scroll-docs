/* eslint-disable id-length */

const cheerio = require('cheerio');
const transfob = require('transfob');

module.exports = function pageNav() {
  return transfob( function( file, enc, next ) {
    let $ = cheerio.load( file.contents.toString() );
    let pageNavHtml = '\n';
    // query each h2, h3, h4
    $('.main h2, .main h3, .main h4').each( function( i, header ) {
      let $header = $( header );
      // replace non alphanumeric to hyphens
      let title = $header.text();
      let slug = title.replace( /[^\w\d]+/gi, '-' )
        // trim trailing hyphens
        .replace( /^-+/, '' )
        .replace( /-+$/, '' )
        .toLowerCase();
      // set id slug
      $header.attr( 'id', slug );
      // add item to pageNav
      pageNavHtml += `<li class="page-nav__item page-nav__item--${header.name}">
        <a href="#${slug}">${title}</a>
      </li>
      `;
    } );
    // add pageNavHtml to page
    $('.page-nav__list').html( pageNavHtml );

    file.contents = Buffer.from( $.html() );
    next( null, file );
  } );
};
