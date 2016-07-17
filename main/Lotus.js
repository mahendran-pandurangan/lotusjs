'use strict';
var Common = require('../lib/common-util');
var Data = require('../lib/excel-provider');
var Logger = require('../lib/logger');
var Lotus = function(){
    this.ds = {
    readExcelData: function(fileName, sheetName) {
      return Data.readExcelData(fileName, sheetName);
    }
  }
}
module.exports = new Lotus();
