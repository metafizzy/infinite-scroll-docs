EpiscrollDocs['page-index'] = function( elem ) {

  var scroller = elem.querySelector('.scroller');
  var scrollerContent = elem.querySelector('.scroller__content');
  var demoStatus = elem.querySelector('.demo-status');

  var infScroll = new Episcroll( scrollerContent, {
    path: 'demo/element-scroll/page{{#}}.html',
    append: '.post',
    elementScroll: scroller,
    status: elem.querySelector('.scroller-status'),
    history: false,
  });

  infScroll.on( 'load', function() {
    demoStatus.textContent = 'Loaded page: ' + this.pageIndex;
  });

};
