InfiniteScrollDocs['button-start'] = function( elem ) {

  let scrollerContent = elem.querySelector('.scroller__content');

  let infScroll = new InfiniteScroll( scrollerContent, {
    path: 'demo/element-scroll/page{{#}}.html',
    append: '.scroller-item',
    checkLastPage: '.pagination__next',
    elementScroll: elem,
    loadOnScroll: false,
    status: elem.querySelector('.scroller-status'),
    history: false,
  } );

  let button = elem.querySelector('.view-more-button');
  button.addEventListener( 'click', onButtonClick );

  function onButtonClick() {
    infScroll.loadNextPage();
    infScroll.options.loadOnScroll = true;
    button.style.display = 'none';
    button.removeEventListener( 'click', onButtonClick );
  }

};
