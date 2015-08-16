'use strict';

var truco = require('./');
var test = require('tape');

test('truco features', function(t) {
  t.deepEqual(truco('Lorem Ipsum'), 'Lorem Ipsum', 'should not add ellipsis if limit was not specified');
  t.deepEqual(truco('Lorem Ipsum Dolor Sit', 5), 'Lorem…', 'truncate on specified limit');
  t.deepEqual(truco('Lorem Ipsum Dolor Sit', 5, {ellipsis: '...'}), 'Lorem...', 'custom ellipsis');
  t.deepEqual(truco('Lorem Ipsum', 150), 'Lorem Ipsum', 'do not append ellipsis if doesn\'t need to')
  t.end();
});

test('invert', function(t) {
  t.deepEqual(truco('Lorem Ipsum', 5, {moonwalk: true}), '…Ipsum', 'truncate on specified limit');
  t.deepEqual(truco('Lorem Ipsum Dolor Sit', 3, {moonwalk: true, ellipsis: '...'}), '...Sit', 'custom ellipsis');
  t.deepEqual(truco('Lorem Ipsum', 150, {moonwalk: true}), 'Lorem Ipsum', 'do not append ellipsis if doesn\'t need to');
  t.end();
});
