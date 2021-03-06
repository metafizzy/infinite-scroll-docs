InfiniteScrollDocs['button-option'] = function( elem ) {

  let scrollerContent = elem.querySelector('.scroller__content');

  new InfiniteScroll( scrollerContent, {
    path: 'demo/element-scroll/page{{#}}.html',
    append: '.scroller-item',
    elementScroll: elem,
    checkLastPage: '.pagination__next',
    scrollThreshold: false,
    button: elem.querySelector('.view-more-button'),
    status: elem.querySelector('.scroller-status'),
    history: false,
  } );

};
