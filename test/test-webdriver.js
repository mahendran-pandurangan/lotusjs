var logger = require('../lib/logger.js');
var xlProvider = require('../lib/excel-provider.js');
var common = require('../lib/common-util.js');
var test = require('selenium-webdriver/testing');

const mochaTimeOut = 90000;

test.describe('Mortgage-Calculator', function() {
  this.timeout(mochaTimeOut);
    before('Excel-JSON', function() {
        xlProvider.readExcelData('resources/datasheet/MortCalc.xlsx', 'MC', 'resources/json-output/MC-data.json');
    });

    test.it('DDT-Mort-Calc', function(done) {
        this.timeout(mochaTimeOut);
        var dataProvider = require('../resources/json-output/MC-data.json');
        dataProvider.forEach(function(readData) {
          if (readData.url !== '' && readData.flag === 'Y') {
            try {
            common.launchUrl(readData.url);
            common.sendKey(readData.homeValueXpath, readData.homeValue);
            common.sendKey(readData.loanAmountXpath, readData.loanAmount);
            common.sendKey(readData.interestXpath, readData.interestRate);
            common.clickElement(readData.calculateButton);  
            common.shutDriver();
            }
            catch(err){
              logger.error('Error due to' + err);
            }
              done();
          }
        });
    });

});
