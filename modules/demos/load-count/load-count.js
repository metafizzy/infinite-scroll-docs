InfiniteScrollDocs['load-count'] = function( elem ) {

  var scroller = elem.querySelector('.scroller');
  var scrollerContent = elem.querySelector('.scroller__content');
  var demoStatus = elem.querySelector('.demo-status');

  var infScroll = new InfiniteScroll( scrollerContent, {
    path: 'demo/element-scroll/page{{#}}.html',
    append: '.post',
    elementScroll: scroller,
    status: elem.querySelector('.scroller-status'),
    history: false,
  });

  infScroll.on( 'load', function() {
    demoStatus.textContent =  infScroll.loadCount + ' page' +
      ( infScroll.loadCount > 2 ? 's' : '' ) + ' loaded';
  });

};
