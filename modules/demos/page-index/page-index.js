InfiniteScrollDocs['page-index'] = function( elem ) {

  let scroller = elem.querySelector('.scroller');
  let scrollerContent = elem.querySelector('.scroller__content');
  let demoStatus = elem.querySelector('.demo-status');

  let infScroll = new InfiniteScroll( scrollerContent, {
    path: 'demo/element-scroll/page{{#}}.html',
    append: '.scroller-item',
    checkLastPage: '.pagination__next',
    elementScroll: scroller,
    status: elem.querySelector('.scroller-status'),
    history: false,
  } );

  infScroll.on( 'load', function() {
    demoStatus.textContent = `Loaded page: ${infScroll.pageIndex}`;
  } );

};
