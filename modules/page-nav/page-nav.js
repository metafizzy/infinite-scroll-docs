/* globals Stickeroo */
InfiniteScrollDocs['page-nav'] = function( elem ) {
  'use strict';

  var firstPageNav = document.querySelector('.page-nav');

  if ( elem == firstPageNav ) {
    new Stickeroo( elem );
    return;
  }

  var afterContent = getComputedStyle( elem, ':after' ).content;
  var isStickyContent = afterContent.indexOf('sticky') != -1;
  if ( isStickyContent ) {
    elem.style.display = 'none';
  }

};
