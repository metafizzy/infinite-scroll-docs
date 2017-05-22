EpiscrollDocs['site-scroll'] = function( elem ) {

  var button = elem.querySelector('.site-scroll__button');
  var infScroll;

  var pages = [
    '.',
    'options.html',
    'api.html',
    'events.html',
    'extras.html',
    'license.html',
  ];

  // TODO handle index.html in URL
  var pageIndex = ( function() {
    var link = document.createElement('a');
    for ( var i=0; i < pages.length; i++ ) {
      var page = pages[i];
      link.href = page;
      if ( link.href == location.href ) {
        return i + 1;
      }
    }
  })();

  button.addEventListener( 'click', onButtonClick );

  function onButtonClick() {
    infScroll = new Episcroll( '.main .container', {
      path: function() {
        var nextIndex = pageIndex + this.loadCount + 1;
        return pages[ nextIndex ];
      },
      append: '.main__page',
      log: true,
    });

    infScroll.loadNextPage();

    button.style.display = 'none';
    button.removeEventListener( 'click', onButtonClick );
  }

};
