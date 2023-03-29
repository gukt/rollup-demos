'use strict';

var foo = 'hello world!';

var version = "1.0.0";

// https://rollupjs.org/tutorial/#using-plugins

function main () {
  console.log(foo, 'version', version);
}

module.exports = main;
