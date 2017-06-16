InfiniteScrollDocs['site-scroll'] = function( elem ) {

  var button = elem.querySelector('.button');
  var infScroll;

  var pages = [
    'index',
    'options',
    'api',
    'events',
    'extras',
    'license',
  ];

  var basename = document.body.getAttribute('data-basename');
  var pageIndex = pages.indexOf( basename ) + 1;

  button.addEventListener( 'click', onButtonClick );

  function onButtonClick() {
    infScroll = new InfiniteScroll( '.main .container', {
      path: function() {
        var nextIndex = pageIndex + this.loadCount;
        return pages[ nextIndex ] + '.html';
      },
      append: '.main__page',
      // debug: true,
    });

    infScroll.on( 'append', onAppend );

    infScroll.loadNextPage();

    button.style.display = 'none';
    button.removeEventListener( 'click', onButtonClick );
  }

  function onAppend( response, path, items ) {
    for ( var i=0; i < items.length; i++ ) {
      InfiniteScrollDocs.initElementJS( items[i] );
    }
  }

};
