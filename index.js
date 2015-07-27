'use strict';

function truncate(string, limit, ellipsis) {
  limit = limit || string.length;
  ellipsis = ellipsis || '…';

  return string.substring(0, limit).concat(ellipsis); 
}

if(typeof define === 'function' && define.amd) {
  define(function() { return truncate; });
} else if(typeof module !== 'undefined' && module.exports) {
  module.exports = truncate;
} else {
  window.truncate = truncate;
}

