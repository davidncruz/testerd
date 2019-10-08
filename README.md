testerd
======

[![GitHub issues](https://img.shields.io/github/issues-raw/davidncruz/testerd)](https://github.com/davidncruz/testerd/issues)
[![npm](https://img.shields.io/npm/v/testerd)](https://www.npmjs.com/package/testerd)
![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/min/testerd/1.0.0)

Install
------
```
$ npm install testerd
```

Usage
------
```javascript
const testerd = require("testerd");

testerd("Testing them spaces.");
//=> "Testingthemspaces."

testerd(1337);
//=> Uncaught TypeError: Expected String, int given
//    at testerd (<anonymous>:2:41)
//    at <anonymous>:1:1
```