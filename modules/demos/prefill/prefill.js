InfiniteScrollDocs.prefill = function( elem ) {

  var scroller = elem.querySelector('.scroller');
  var scrollerContent = elem.querySelector('.scroller__content');
  var button = elem.querySelector('.button');

  button.addEventListener( 'click', onButtonClick );

  function onButtonClick() {
    new InfiniteScroll( scrollerContent, {
      path: 'demo/element-scroll/page{{#}}.html',
      append: '.post',
      elementScroll: scroller,
      prefill: true,
      status: elem.querySelector('.scroller-status'),
      history: false,
      // log: true,
    });

    button.disabled = 'disabled';
    button.removeEventListener( 'click', onButtonClick );
  }

};
