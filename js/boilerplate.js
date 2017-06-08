// boilerplate
( function() {
'use strict';

// global namespace
window.InfiniteScrollDocs = {};

// ----- utils ----- //

window.utils = fizzyUIUtils;

// ----- helpers ----- //

window.filterBind = function( elem, type, selector, listener ) {
  elem.addEventListener( type, function( event ) {
    if ( matchesSelector( event.target, selector ) ) {
      listener( event );
    }
  });
};

})();
