(function(exports) {

  'use strict';

  function truco(string, limit, ellipsis) {
    limit = limit || string.length;
    ellipsis = ellipsis || '…';

    if(string.length <= limit) {
      return string;
    }

    return string.substring(0, limit).concat(ellipsis);
  }

  if(typeof define === 'function' && define.amd) {
    define(function() { return truco; });
  } else if(typeof module !== 'undefined' && module.exports) {
    module.exports = truco;
  } else {
    exports.truco = truco;
  }

})(this);

