# truco [![Build Status](https://travis-ci.org/rafaelrinaldi/truco.svg?branch=master)](https://travis-ci.org/rafaelrinaldi/truco)

> Truncate strings.

_[Truco](https://en.wikipedia.org/wiki/Truco) is a popular trick-taking card game originally from Valencia and Balearic Islands (Spain) and very popular in some countries like Brazil, Argentina, Paraguay and Italy._

## Install

For Node.js:

```sh
$ npm install truco
```

For the browser:

> It supports CommonJS, AMD and falls back to the browser global `truco`.

```sh
$ bower install truco
```

## Features

* Zero dependencies
* Works on both Node.js and the browser

## Usage

```javascript
var truncate = require('truco');

truncate('Lorem Ipsum', 5); // Lorem…
truncate('Lorem Ipsum', 5, '***'); // Lorem***
```

### API

#### `truco(string, [limit], [ellipsis])`

#### `string`

*Required*  
Type: `string`

The string to be truncated.

#### `limit`

Type: `number`  
Default: the total length of `string`

The position where the string should be truncated at.

#### `ellipsis`

Type: `string`  
Default: `…`

The symbol that should be placed at the end of the truncated string.

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
