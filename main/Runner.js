var fs = require('fs');
var path = require('path');
var Mocha = require('mocha');

var Runner = function(lotus) {
  this.lotus = lotus;
  return this;
};

Runner.prototype.runTests = function() {
  var testDir = this.lotus.config.testDir;
  if (!testDir) {
     testDir = path.join('.', 'test');
  }
  console.log("Test dir: " + path.resolve(testDir));
  var mocha = new Mocha();
  fs.readdirSync(testDir).filter(function(file) {
    return file.substr(-7) === 'Test.js';
  }).forEach(function(testFile) {
    var testPath = path.join(testDir, testFile);
    console.log('Adding test file: ' + path.resolve(testPath));
    mocha.addFile(testPath);
  });
  global.lotus = this.lotus;
  console.log('Tests: ' + mocha.files);
  var testRun = mocha.ui('tdd').reporter('spec').run(function() {
    console.log('Test run completed.');
  });
};

module.exports = Runner;
