(function(exports) {

  'use strict';

  function truco(string, limit, options) {
    limit = limit || string.length;
    options = options || {};

    var ellipsis = options.ellipsis || '…';
    var moonwalk = options.moonwalk || false;

    if(string.length <= limit) {
      return string;
    }

    if(moonwalk) {
      return ellipsis + string.substring(string.length - limit);
    } else {
      return string.substring(0, limit) + ellipsis;
    }
  }

  if(typeof define === 'function' && define.amd) {
    define(function() { return truco; });
  } else if(typeof module !== 'undefined' && module.exports) {
    module.exports = truco;
  } else {
    exports.truco = truco;
  }

})(this);

