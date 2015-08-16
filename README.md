# truco [![Build Status](https://travis-ci.org/rafaelrinaldi/truco.svg?branch=master)](https://travis-ci.org/rafaelrinaldi/truco)

> Truncate strings.

<sub>[Truco](https://en.wikipedia.org/wiki/Truco) is a popular trick-taking card game originally from Valencia and Balearic Islands (Spain) and very popular in some countries like Brazil, Argentina, Paraguay and Italy.</sub>

## Install

Via [npm](http://npmjs.com):

```sh
$ npm install truco --save
```

Via [Bower](http://bower.io):

```sh
$ bower install truco --save
```

## Usage

```javascript
var truco = require('truco');

truco('Lorem Ipsum', 5); // Lorem…
truco('Lorem Ipsum', 5, '***'); // Lorem***
truco.reverse('Lorem Ipsum', 5); // …Ipsum
```

## API

## `truco(string, [limit], [options])`

### `string`

*Required*  
Type: `string`

The string to be truncated.

### `limit`

Type: `number`  
Default: the total length of `string`

The position where the string should be truncated at.

### `options`

Type: `object`

Custom options.

#### `options.ellipsis`

Type: `string`  
Default: `…`

The symbol that should be placed at the end/beginning of the truncated string.

#### `options.moonwalk` ![moonwalker](http://tgnp.me/wp-content/uploads/2011/10/lunapic_132009218615037_5.gif)

Type: `boolean`  
Default: `false`  

Wether or not to truncate string from the beginning to the end instead of the opposite.

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
