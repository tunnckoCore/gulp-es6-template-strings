/*!
 * gulp-es6-template-strings <https://github.com/tunnckoCore/gulp-es6-template-strings>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var test = require('assertit')
var gutil = require('gulp-util')
var template = require('./index')

function plugin (file, onerror) {
  var stream = template({
    place: 'world',
    user: {
      name: 'Charlike'
    }
  })
  stream.once('error', onerror)
  stream.write(file)
  return stream
}

test('should render file with locals', function (done) {
  var stream = plugin(new gutil.File({
    base: __dirname,
    path: __dirname + '/fixture.txt',
    contents: new Buffer('Hello ${place} and ${user.name}!')
  }), done)

  stream.once('data', function (file) {
    test.strictEqual(file.contents.toString(), 'Hello world and Charlike!')
    done()
  })
})

test('should error if stream', function (done) {
  plugin(new gutil.File({
    base: __dirname,
    path: __dirname + '/package.json',
    contents: fs.createReadStream('package.json')
  }), function (err) {
    test.strictEqual(err.message, 'Streaming not supported')
    done()
  })
})

test('should throw TypeError if `locals` not object', function (done) {
  function fixture () {
    template('foo bar')
  }

  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `locals` to be object/)
  done()
})
