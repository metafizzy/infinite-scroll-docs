let highlightjs = require('highlight.js');
let transfob = require('transfob');

highlightjs.configure({
  classPrefix: '',
});

let hljsJavascript = highlightjs.getLanguage('javascript');
// highlight Packery
hljsJavascript.keywords['infinite-scroll_keyword'] = 'InfiniteScroll';
// highlight packery variables
/* eslint-disable-next-line camelcase */
hljsJavascript.keywords.infscroll_var = 'infScroll';

hljsJavascript.contains.push({
  className: 'jquery_var',
  begin: /\$container/,
});

function replaceCodeBlock( whiteSpace, block ) {
  if ( !block ) {
    return '';
  }
  let langMatch = block.match( /^ *([\w]+)\n/ );
  let language = langMatch && langMatch[1];
  // remove first line
  block = block.replace( /.*\n/, '' );
  // remove leading whitespace from code block
  if ( whiteSpace && whiteSpace.length ) {
    let reWhiteSpace = new RegExp( '^' + whiteSpace, 'gim' );
    block = block.replace( reWhiteSpace, '' );
  }
  // highlight code
  let highlighted = block;
  if ( language ) {
    highlighted = highlightjs.highlight( language, block, true ).value;
  }
  let codeAttr = language ? `class="${language}"` : '';
  return `<pre><code ${codeAttr}>${highlighted}</code></pre>\n`;
}

module.exports = function() {
  return transfob( function( file, enc, next ) {
    let contents = file.contents.toString();
    // split contents by ```, get leading white space
    let blocks = contents.split( /\n( *)```/ );
    let hiContent = '';
    for ( let i = 0; i < blocks.length; i += 4 ) {
      let normBlock = blocks[i];
      let whitespace = blocks[ i + 1 ] || '';
      let codeBlock = blocks[ i + 2 ] || '';
      codeBlock = replaceCodeBlock( whitespace, codeBlock );
      hiContent += `${normBlock}\n${codeBlock}`;
    }
    file.contents = Buffer.from( hiContent );
    next( null, file );
  } );
};
