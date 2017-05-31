EpiscrollDocs['button-start'] = function( elem ) {

  var scrollerContent = elem.querySelector('.scroller__content');

  var infScroll = new Episcroll( scrollerContent, {
    path: 'demo/element-scroll/page{{#}}.html',
    append: '.post',
    elementScroll: elem,
    loadOnScroll: false,
    status: elem.querySelector('.scroller-status'),
    history: false,
  });

  var button = elem.querySelector('.view-more-button');
  button.addEventListener( 'click', onButtonClick );

  function onButtonClick() {
    infScroll.loadNextPage();
    infScroll.options.loadOnScroll = true;
    button.style.display = 'none';
    button.removeEventListener( 'click', onButtonClick );
  }

};
