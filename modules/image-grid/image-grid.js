/* globals Masonry, imagesLoaded */

EpiscrollDocs['image-grid'] = function( elem ) {

  var msnry = new Masonry( elem, {
    itemSelector: 'none', // select none at first
    columnWidth: '.image-grid__col-sizer',
    gutter: '.image-grid__gutter-sizer',
    percentPosition: true,
    stagger: 30,
    // nicer reveal transition
    visibleStyle: { transform: 'translateY(0)', opacity: 1 },
    hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
  });

  imagesLoaded( elem, function() {
    // select items now
    elem.classList.remove('are-images-unloaded');
    msnry.options.itemSelector = '.image-grid__item';
    var items = elem.querySelectorAll('.image-grid__item');
    msnry.appended( items );
  });

  var infScroll = new Episcroll( elem, {
    path: '.pagination__next',
    hideNav: '.pagination',
    append: '.image-grid__item',
    outlayer: msnry,
    status: '.scroller__status',
    log: true,
  });

};
