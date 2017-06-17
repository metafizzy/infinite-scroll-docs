InfiniteScrollDocs['scroll-2'] = function( elem ) {

  var scrollerContent = elem.querySelector('.scroller__content');
  var button = elem.querySelector('.view-more-button');

  var infScroll = new InfiniteScroll( scrollerContent, {
    path: 'demo/element-scroll/page{{#}}.html',
    append: '.scroller-item',
    elementScroll: elem,
    button: button,
    status: elem.querySelector('.scroller-status'),
    history: false,
  });

  infScroll.on( 'load', onPageLoad );

  function onPageLoad() {
    if ( infScroll.loadCount == 2 ) {
      infScroll.options.loadOnScroll = false;
      button.style.display = 'inline-block';
      infScroll.off( onPageLoad );
    }
  }

};
