( function() {
'use strict';

// init all modules, based on their data-js attribute
EpiscrollDocs.initElementJS = function( elem ) {
  var jsModuleElems = elem.querySelectorAll('[data-js]');
  for ( var i=0; i < jsModuleElems.length; i++ ) {
    var moduleElem = jsModuleElems[i];
    var moduleName = moduleElem.getAttribute('data-js');
    var module = EpiscrollDocs[ moduleName ] || FizzyDocs[ moduleName ];
    if ( module ) {
      module( moduleElem );
    }
  }
};

// init all data-js elems
EpiscrollDocs.initElementJS( document );

})();
