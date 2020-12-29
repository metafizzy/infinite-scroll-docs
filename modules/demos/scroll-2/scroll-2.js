InfiniteScrollDocs['scroll-2'] = function( elem ) {

  let scrollerContent = elem.querySelector('.scroller__content');
  let button = elem.querySelector('.view-more-button');

  let infScroll = new InfiniteScroll( scrollerContent, {
    path: 'demo/element-scroll/page{{#}}.html',
    append: '.scroller-item',
    checkLastPage: '.pagination__next',
    elementScroll: elem,
    button: button,
    status: elem.querySelector('.scroller-status'),
    history: false,
  } );

  infScroll.on( 'load', onPageLoad );

  function onPageLoad() {
    if ( infScroll.loadCount == 1 ) {
      infScroll.options.loadOnScroll = false;
      button.style.display = 'inline-block';
      infScroll.off( onPageLoad );
    }
  }

};
