InfiniteScrollDocs['element-scroll-container'] = function( elem ) {

  new InfiniteScroll( elem, {
    path: 'demo/element-scroll/page{{#}}.html',
    append: '.post',
    elementScroll: true,
    history: false,
  });

};
