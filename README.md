@daatyson/testerd
======

[![GitHub issues](https://img.shields.io/github/issues-raw/daatysonz/testerd)](https://github.com/daatysonz/testerd/issues)
[![npm (scoped)](https://img.shields.io/npm/v/@daatyson/testerd?url=https://github.com/daatysonz/testerd)](https://www.npmjs.com/package/@daatyson/testerd)
![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/min/@daatyson/testerd/0.1.0)

Install
------
```
$ npm install @daatyson/testerd
```

Usage
------
```javascript
const testerd = require("@daatyson/testerd");

tiny("Testing them spaces.");
//=> "Testingthemspaces."

tiny(1337);
//=> Uncaught TypeError: Expected String, int given
//    at testerd (<anonymous>:2:41)
//    at <anonymous>:1:1
```