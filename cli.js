#!/usr/bin/env node

(function() {
  'use strict';

  var die = function(msg) {
    console.error(msg);
    process.exit(1);
  };

  var ccs = require('closure-compiler-service');
  var fs = require('fs');

  // write output to console if called from command line
  if (process.argv.length === 3) {
    var filename = process.argv[2];

    var js_code = fs.readFile(filename, function(err, buf) {
      if (err) { die(err); }

      ccs.compile(buf, function(errs, code) {
        if (errs) { die(errs); }
        console.log(code);
      });
    });
  }
})();
