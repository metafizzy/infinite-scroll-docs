/* globals Masonry, imagesLoaded */

EpiscrollDocs['image-grid'] = function( elem ) {

  // --------------------------  -------------------------- //

  var proto = Episcroll.prototype;

  proto.onAppendHistory = function( response, path, items ) {
    var index = this.scrollPages.length;
    this.updateHistoryPage( response, path, items, index );
  };

  proto.updateHistoryPage = function( response, path, items, pageIndex ) {
    pageIndex = pageIndex === undefined ? this.loadCount : pageIndex;
    var firstItem = items[0];
    var elemScrollY = this.getElementScrollY( firstItem );
    // resolve path
    link.href = path;
    // add page data to hash
    this.scrollPages[ pageIndex ] = {
      top: elemScrollY,
      path: link.href,
      title: response.title,
    };
  };
  
  // --------------------------  -------------------------- //

  var msnry = new Masonry( elem, {
    itemSelector: '.image-grid__item',
    columnWidth: '.image-grid__col-sizer',
    gutter: '.image-grid__gutter-sizer',
    percentPosition: true,
    stagger: 30,
  });

  imagesLoaded( elem, function() {
    msnry.layout();
  });

  var infScroll = new Episcroll( elem, {
    path: '.pagination__next',
    hideNav: '.pagination',
    append: '.image-grid__item',
    log: true,
    // scrollThresold: 1,
    history: false,
  });


  infScroll.on( 'append', function( response, path, items ) {
    var loadCount = infScroll.loadCount;
    infScroll.options.loadOnScroll = false;
    setItemsDisplay( items, 'none' );
    imagesLoaded( items, function() {
      setTimeout( function() {
        setItemsDisplay( items, 'block' );
        msnry.appended( items );
        infScroll.updateHistoryPage( response, path, items, loadCount );
        infScroll.options.loadOnScroll = true;
      }, 1000 );
    })
  });

  function setItemsDisplay( items, value ) {
    for ( var i=0; i < items.length; i++ ) {
      items[i].style.display = value;
    }
  }

  // infScroll.on( 'load', function( response ) {
  //   var items = response.querySelectorAll('.image-grid__item');
  //   // append items to fragment for imagesLoaded
  //   // TODO check if necessary with jQuery
  //   infScroll.getItemsFragment( items );
  //   imagesLoaded( items, function() {
  //     infScroll.appendItems( items );
  //     msnry.appended( items );
  //   });
  // });

};
