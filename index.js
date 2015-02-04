/**
 * gulp-es6-template-strings <https://github.com/tunnckoCore/gulp-es6-template-strings>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var through = require('through2');
var es6templateString = require('es6-template-strings');
var PluginError = require('gulp-util').PluginError;
var label = 'gulp-es6-template-strings';

module.exports = function gulpEs6TemplateStrings(context) {
  return through.obj(function(file, enc, cb) {
    /* istanbul ignore if */
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    /* istanbul ignore if */
    if (file.isStream()) {
      cb(new PluginError(label, 'Streaming not supported'));
      return;
    }

    var contents = file.contents.toString();

    try {
      file.contents = new Buffer(es6templateString(contents, context));
      this.push(file);
    } catch (err) {
      /* istanbul ignore next */
      this.emit('error', new PluginError(label, err, {fileName: file.path}));
    }

    cb();
  });
};
