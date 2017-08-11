'use strict';
var Common = require('../lib/common-util');
var Data = require('../lib/excel-provider');
var Logger = require('../lib/logger');
var Runner = require('../main/Runner');
var Lotus = function(){
    this.ds = {
    readExcelData: function(fileName, sheetName) {
      return Data.readExcelData(fileName, sheetName);
    }
  }
    this.runner = new Runner(this);
}
module.exports = new Lotus();
