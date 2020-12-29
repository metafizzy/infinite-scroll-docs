InfiniteScrollDocs.prefill = function( elem ) {

  let scroller = elem.querySelector('.scroller');
  let scrollerContent = elem.querySelector('.scroller__content');
  let button = elem.querySelector('.button');

  button.addEventListener( 'click', onButtonClick );

  function onButtonClick() {
    new InfiniteScroll( scrollerContent, {
      path: 'demo/element-scroll/page{{#}}.html',
      append: '.scroller-item',
      checkLastPage: '.pagination__next',
      elementScroll: scroller,
      prefill: true,
      status: elem.querySelector('.scroller-status'),
      history: false,
    } );

    button.disabled = 'disabled';
    button.removeEventListener( 'click', onButtonClick );
  }

};
