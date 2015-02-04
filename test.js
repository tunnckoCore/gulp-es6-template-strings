/**
 * gulp-es6-template-strings <https://github.com/tunnckoCore/gulp-es6-template-strings>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var gulpEs6TemplateStrings = require('./index');
var gutil = require('gulp-util');

describe('gulp-es6-template-strings:', function() {
  it('should compile es6 string templates', function(done) {
    var stream = gulpEs6TemplateStrings({user: {
      name: 'Charlike',
      email: 'email@main.com'
    }});

    stream.on('data', function(data) {
      assert.strictEqual(data.contents.toString(), 'Charlike`s mail is email@main.com');
    });

    stream.on('end', done);

    stream.write(new gutil.File({
      contents: new Buffer('${user.name}`s mail is ${user.email}')
    }));

    stream.end();
  });

  it('should work with no data supplied', function(done) {
    var stream = gulpEs6TemplateStrings();

    stream.on('data', function (data) {
      assert.equal(data.contents.toString(), '');
    });

    stream.on('end', done);

    stream.write(new gutil.File({
      contents: new Buffer('')
    }));

    stream.end();
  });
});
