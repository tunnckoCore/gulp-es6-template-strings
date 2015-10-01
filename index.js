/*!
 * gulp-es6-template-strings <https://github.com/tunnckoCore/gulp-es6-template-strings>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var gutil = require('gulp-util')
var through2 = require('through2')
var isObject = require('is-real-object')
var template = require('es6-template-strings')

module.exports = function gulpEs6templateStrings (locals) {
  if (!isObject(locals)) {
    throw new TypeError('gulp-es6-template-strings: expect `locals` to be object')
  }

  return through2.obj(function (file, enc, cb) {
    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-es6-template-strings', 'Streaming not supported'))
      return
    }

    var contents = template(file.contents.toString(), locals)
    file.contents = new Buffer(contents)
    cb(null, file)
  })
}
