EpiscrollDocs['button-option'] = function( elem ) {

  var scrollerContent = elem.querySelector('.scroller__content');

  new Episcroll( scrollerContent, {
    path: 'demo/element-scroll/page{{#}}.html',
    append: '.post',
    elementScroll: elem,
    scrollThreshold: false,
    button: elem.querySelector('.view-more-button'),
    status: elem.querySelector('.scroller-status'),
    history: false,
  });

};
