InfiniteScrollDocs['element-scroll-container'] = function( elem ) {

  new InfiniteScroll( elem, {
    path: 'demo/element-scroll/page{{#}}.html',
    append: '.scroller-item',
    checkLastPage: '.pagination__next',
    elementScroll: true,
    history: false,
  } );

};
