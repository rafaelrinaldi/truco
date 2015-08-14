'use strict';

var truco = require('./');
var test = require('tape');

test('truco features', function(t) {
  t.deepEqual(truco('Lorem Ipsum Dolor Sit', 5), 'Lorem…', 'truncate');
  t.deepEqual(truco('Lorem Ipsum Dolor Sit', 5, '...'), 'Lorem...', 'custom ellipsis');
  t.deepEqual(truco('Lorem Ipsum', 150), 'Lorem Ipsum', 'do not append ellipsis if doesn\'t need to')
  t.end();
});
