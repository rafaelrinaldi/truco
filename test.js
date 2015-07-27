'use strict';

var truncate = require('./');
var test = require('tape');

test('truncate features', function(t) {
  t.deepEqual(truncate('Lorem Ipsum Dolor Sit', 5), 'Lorem…', 'truncate');
  t.deepEqual(truncate('Lorem Ipsum'), 'Lorem Ipsum…', 'default limit');
  t.deepEqual(truncate('Lorem Ipsum Dolor Sit', 5, '...'), 'Lorem...', 'custom ellipsis');
  t.end();
});
