/*!
 * keys-tree <https://github.com/jonschlinkert/keys-tree>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('is-plain-object');

/**
 * Expose `tree`
 */

module.exports = tree;

function tree(o, own) {
  if (!isObject(o)) throw new TypeError('keys-tree expects an object.');
  var res = {keys: Object.keys(o)};

  for (var key in o) {
    if (own && !o.hasOwnProperty(key)) {
      continue;
    }
    var val = o[key];
    if (isObject(val)) {
      res[key] = tree(val);
    }
  }
  return res;
}
