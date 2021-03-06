# keys-tree [![NPM version](https://badge.fury.io/js/keys-tree.svg)](http://badge.fury.io/js/keys-tree)  [![Build Status](https://travis-ci.org/jonschlinkert/keys-tree.svg)](https://travis-ci.org/jonschlinkert/keys-tree) 

> Recursively builds a tree of object keys. Useful for creating lists or debugging.

## Install with [npm](npmjs.org)

```bash
npm i keys-tree --save
```

## Usage

```js
var keys = require('keys-tree');

keys({a: 'b', c: 'd'});
//=> { keys: [ 'a', 'c' ] }

keys({a: 'b', c: {d: 'e', f: 'g'}});
//=> { keys: [ 'a', 'c' ], c: { keys: [ 'd', 'f' ] } }

keys({a: 'b', c: {d: 'e', f: 'g', h: {i: 'j', k: 'l', m: 'n'}}});
// results in:
// { keys: [ 'a', 'c' ], 
//   c: { keys: [ 'd', 'f', 'h' ], 
//        h: { keys: [ 'i', 'k', 'm' ] } } }
```

## Other object utils
* [stringify-keys](https://github.com/doowb/stringify-keys): Build an array of key paths from an object.
* [rename-keys](https://github.com/jonschlinkert/rename-keys): Modify the names of the own enumerable properties (keys) of an object.
* [get-value](https://github.com/jonschlinkert/get-value): Use property paths (`a.b.c`) get a nested value from an object.
* [set-object](https://github.com/jonschlinkert/set-object): Create nested objects and any intermediaries using `a.b.c` paths.  

## Running tests
Install dev dependencies.

```bash
npm i -d && npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/keys-tree/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on March 22, 2015._