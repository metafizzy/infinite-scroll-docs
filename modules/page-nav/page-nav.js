( function() {

let firstPageNav;

InfiniteScrollDocs['page-nav'] = function( elem ) {

  let listElem = elem.querySelector('.page-nav__list');
  let afterContent = getComputedStyle( elem, ':after' ).content;
  let isStickyContent = afterContent.match('sticky');

  if ( firstPageNav && isStickyContent ) {
    // hide loaded page-navs
    elem.style.display = 'none';
    return;
  }

  // with first page nav...
  firstPageNav = elem;
  // activate if :after { content: 'sticky' } and fits in window
  let canFit = listElem.clientHeight <= window.innerHeight;
  if ( canFit && isStickyContent ) {
    elem.classList.add('is-sticky');
  }

};

} )();
