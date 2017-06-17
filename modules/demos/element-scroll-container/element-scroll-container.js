InfiniteScrollDocs['element-scroll-container'] = function( elem ) {

  new InfiniteScroll( elem, {
    path: 'demo/element-scroll/page{{#}}.html',
    append: '.scroller-item',
    elementScroll: true,
    history: false,
  });

};
