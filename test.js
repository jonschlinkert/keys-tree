/*!
 * keys-tree <https://github.com/jonschlinkert/keys-tree>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var should = require('should');
var keys = require('./');
var util = require('util');

describe('keys', function () {
  it('should get the keys of an object:', function () {
    keys({a: 'b', c: 'd'}).should.eql({ keys: [ 'a', 'c' ] });
  });

  it('should get the keys of nested object:', function () {
    keys({a: 'b', c: {d: 'e', f: 'g'}}).should.eql({ keys: [ 'a', 'c' ], c: { keys: [ 'd', 'f' ] } });
  });

  it('should throw an error:', function () {
    (function () {
      keys();
    }).should.throw('keys-tree expects an object.');
  });
});
