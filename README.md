@daatyson/testerd
======

![GitHub issues](https://img.shields.io/github/issues-raw/daatysonz/testerd)
![npm (scoped)](https://img.shields.io/npm/v/@daatyson/testerd)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@daatyson/testerd)

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