var xlProvider = require('../lib/excel-provider');
var common = require('../lib/common-util');
var test = require('selenium-webdriver/testing');
var lotus = require('../main/Lotus');
const mochaTimeOut = 30000;

test.describe('Mortgage-Calculator', function() {
  this.timeout(mochaTimeOut);
    test.it('DDT-Mort-Calc', function(done) {
        this.timeout(mochaTimeOut);
        var dataProvider = lotus.ds.readExcelData('./resources/datasheet/MortCalc.xlsx', 'MC');
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
