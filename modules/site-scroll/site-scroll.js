InfiniteScrollDocs['site-scroll'] = function( elem ) {

  let button = elem.querySelector('.button');
  let infScroll;

  let pages = [
    'index',
    'options',
    'api',
    'events',
    'extras',
    'license',
  ];

  let basename = document.body.getAttribute('data-basename');
  let pageIndex = pages.indexOf( basename ) + 1;

  button.addEventListener( 'click', onButtonClick );

  function onButtonClick() {
    infScroll = new InfiniteScroll( '.main .container', {
      path: function() {
        let nextIndex = pageIndex + this.loadCount;
        let page = pages[ nextIndex ];
        return page && page + '.html';
      },
      append: '.main__page',
      // debug: true,
    } );

    infScroll.on( 'append', onAppend );

    infScroll.loadNextPage();

    button.style.display = 'none';
    button.removeEventListener( 'click', onButtonClick );
  }

  function onAppend( response, path, items ) {
    for ( let i = 0; i < items.length; i++ ) {
      InfiniteScrollDocs.initElementJS( items[i] );
    }
  }

};
