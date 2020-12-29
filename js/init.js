( function() {

// init all modules, based on their data-js attribute
InfiniteScrollDocs.initElementJS = function( elem ) {
  let jsModuleElems = elem.querySelectorAll('[data-js]');
  for ( let i = 0; i < jsModuleElems.length; i++ ) {
    let moduleElem = jsModuleElems[i];
    let moduleName = moduleElem.getAttribute('data-js');
    let module = InfiniteScrollDocs[ moduleName ] || FizzyDocs[ moduleName ];
    if ( module ) {
      module( moduleElem );
    }
  }
};

// init all data-js elems
InfiniteScrollDocs.initElementJS( document );

} )();
