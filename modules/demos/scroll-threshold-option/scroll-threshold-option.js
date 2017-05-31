EpiscrollDocs['scroll-threshold-option'] = function( elem ) {

  var scrollerContent = elem.querySelector('.scroller__content');

  new Episcroll( scrollerContent, {
    path: 'demo/element-scroll/page{{#}}.html',
    append: '.post',
    elementScroll: elem,
    status: elem.querySelector('.scroller-status'),
    scrollThreshold: 100,
    history: false,
  });

};
