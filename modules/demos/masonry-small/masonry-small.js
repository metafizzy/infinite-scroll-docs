EpiscrollDocs['masonry-small'] = function( elem ) {

  var scrollerContent = elem.querySelector('.scroller__content');

  var msnry = new Masonry( scrollerContent, {
    itemSelector: '.image-grid__item',
    columnWidth: '.image-grid__col-sizer',
    gutter: '.image-grid__gutter-sizer',
    percentPosition: true,
    stagger: 30,
    // nicer reveal transition
    visibleStyle: { transform: 'translateY(0)', opacity: 1 },
    hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
  });

  imagesLoaded( scrollerContent, function() {
    msnry.layout();
  });

  new Episcroll( scrollerContent, {
    path: 'demo/masonry/page{{#}}.html',
    append: '.image-grid__item',
    outlayer: msnry,
    history: false,
    elementScroll: elem,
    status: elem.querySelector('.scroller-status'),
  });

};
