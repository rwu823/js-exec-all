<h1 align="center">
  js-exec-all
</h1>
<p align="center">
  <a href="https://github.com/rwu823/js-exec-all/releases">
    <img src="https://flat.badgen.net/github/release/rwu823/js-exec-all" />
  </a>
  <a href="https://www.npmjs.com/package/js-exec-all">
    <img src="https://flat.badgen.net/npm/v/js-exec-all" />
  </a>
  <a href="https://circleci.com/gh/rwu823/js-exec-all" alt="Build Status">
    <img src="https://flat.badgen.net/circleci/github/rwu823/js-exec-all/master" />
  </a>
  <a href="https://codecov.io/gh/rwu823/js-exec-all" alt="Coverage">
    <img src="https://flat.badgen.net/codecov/c/github/rwu823/js-exec-all" />
  </a>
</p>

## Why

Suppose we want to match a set of strings in RegExp, but due to the characteristics and limitations of the RegExp, you can only extract fragments that have not been matched.

For example:
```
'abaca'.match(/a.a/g) // ['aba']
```

But sometimes we expect to extract `'aba'` and `'aca'`, its impossibility in RegExp.

## Examples

```js
import execAll from 'js-exec-all'

execAll(/a.a/, 'abaca')
```

And then it outputs:

```
[
  {
    match: 'aba',
    index: 0,
  },
  {
    match: 'aca',
    index: 2,
  },
]
```
