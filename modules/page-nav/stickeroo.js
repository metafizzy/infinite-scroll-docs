( function( window ) {

// -------------------------- Stickeroo -------------------------- //

// sticky elements, like the page nav
function Stickeroo( element ) {
  if ( !element ) {
    return;
  }
  this.element = element;
  this.isActive = false;
  this.isFixed = false;
  window.addEventListener( 'resize', this );
  this.onresize();
}

Stickeroo.prototype.handleEvent = utils.handleEvent;

Stickeroo.prototype.onresize = function() {
  var afterContent = getComputedStyle( this.element, ':after' ).content;
  // activate if :after { content: 'sticky' } and fits in window
  var canFit = this.element.clientHeight <= window.innerHeight;
  var isStickyContent = afterContent.indexOf('sticky') != -1;
  if ( isStickyContent && canFit ) {
    this.activate();
  } else {
    this.deactivate();
  }
};

utils.debounceMethod( Stickeroo, 'onresize' );

Stickeroo.prototype.activate = function() {
  // do not re-activate
  if ( this.isActive ) {
    return;
  }
  this.isActive = true;
  this.originalY = this.element.getBoundingClientRect().top + window.pageYOffset;
  window.addEventListener( 'scroll', this );
  this.onscroll();
};

Stickeroo.prototype.deactivate = function() {
  // do not re-activate
  if ( !this.isActive ) {
    return;
  }
  this.isActive = false;
  this.isFixed = false;
  this.element.classList.remove('is-fixed');
  window.removeEventListener( 'scroll', this );
};


function throttleProto( _class, methodName, threshold ) {
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    if ( this[ timeoutName ] ) {
      return;
    }

    method.apply( this, arguments );
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, arguments );
      delete _this[ timeoutName ];
    }, threshold || 100 );
  };
}

Stickeroo.prototype.onscroll = function() {
  var isFixed = window.pageYOffset >= this.originalY;
  if ( isFixed == this.isFixed ) {
    return;
  }

  this.element.classList.toggle('is-fixed');
  this.isFixed = isFixed;
};

throttleProto( Stickeroo, 'onscroll', 50 );

window.Stickeroo = Stickeroo;

})( window );
