InfiniteScrollDocs.debug = function( elem ) {

  let scrollerContent = elem.querySelector('.scroller__content');

  new InfiniteScroll( scrollerContent, {
    path: 'demo/element-scroll/page{{#}}.html',
    append: '.scroller-item',
    checkLastPage: '.pagination__next',
    elementScroll: elem,
    status: elem.querySelector('.scroller-status'),
    history: false,
    debug: true,
  } );

};
