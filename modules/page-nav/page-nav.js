( function() {

var firstPageNav;

InfiniteScrollDocs['page-nav'] = function( elem ) {

  var listElem = elem.querySelector('.page-nav__list');
  var afterContent = getComputedStyle( elem, ':after' ).content;
  var isStickyContent = afterContent.match('sticky');

  if ( firstPageNav && isStickyContent ) {
    // hide loaded page-navs
    elem.style.display = 'none';
    return;
  }

  // with first page nav...
  firstPageNav = elem;
  // activate if :after { content: 'sticky' } and fits in window
  var canFit = listElem.clientHeight <= window.innerHeight;
  if ( canFit && isStickyContent ) {
    elem.classList.add('is-sticky');
  }

};

})();
