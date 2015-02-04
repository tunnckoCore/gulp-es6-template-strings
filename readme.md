## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Gulp plugin for [es6-template-strings][es6-template-strings] package. Compile and resolve template strings notation as specified in ES6.

## Install
```
npm i --save gulp-es6-template-strings
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

**fixture.md**
```md
Welcome to ${siteName}, you are visitor number ${visitorNumber}!!
```

**in gulpfile.js**
```js
var gulp = require('gulp');
var template = require('gulp-es6-template-strings');

gulp.task('default', function () {
  return gulp.src('fixture.md')
    .pipe(template({siteName: 'Google', visitorNumber: 1584375935}))
    .pipe(gulp.dest('dist'));
});
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/gulp-es6-template-strings
[npmjs-img]: https://img.shields.io/npm/v/gulp-es6-template-strings.svg?style=flat&label=gulp-es6-template-strings

[coveralls-url]: https://coveralls.io/r/tunnckoCore/gulp-es6-template-strings?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/gulp-es6-template-strings.svg?style=flat

[license-url]: https://github.com/tunnckoCore/gulp-es6-template-strings/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/gulp-es6-template-strings
[travis-img]: https://img.shields.io/travis/tunnckoCore/gulp-es6-template-strings.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/gulp-es6-template-strings
[daviddm-img]: https://img.shields.io/david/tunnckoCore/gulp-es6-template-strings.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/gulp-es6-template-strings/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), February 4, 2015_

[es6-template-strings]: https://github.com/medikoo/es6-template-strings