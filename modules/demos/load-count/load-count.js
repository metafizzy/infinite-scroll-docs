InfiniteScrollDocs['load-count'] = function( elem ) {

  var scroller = elem.querySelector('.scroller');
  var scrollerContent = elem.querySelector('.scroller__content');
  var demoStatus = elem.querySelector('.demo-status');

  var infScroll = new InfiniteScroll( scrollerContent, {
    path: 'demo/element-scroll/page{{#}}.html',
    append: '.scroller-item',
    elementScroll: scroller,
    status: elem.querySelector('.scroller-status'),
    history: false,
  });

  infScroll.on( 'load', function() {
    demoStatus.textContent =  infScroll.loadCount + ' page' +
      ( infScroll.loadCount > 1 ? 's' : '' ) + ' loaded';
  });

};
