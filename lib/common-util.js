var logger = require('../lib/logger.js');
var webdriver = require('selenium-webdriver');
var argv = require('yargs').argv;
var By = require('selenium-webdriver').By;
var until = webdriver.until;
var expect = require('chai').expect;
var browser = null;
var sauce = 'http://ondemand.saucelabs.com:80/wd/hub';
var remote = null;
var driver = null;


switch (argv.remote) {
    case 'local':
        driver = new webdriver.Builder().usingServer().withCapabilities({
            'browserName': argv.browser
        }).build();
        logger.info('remote = ' +argv.remote +' & browser = ' +argv.browser);
        break;
    case 'sauce':
        driver = new webdriver.Builder().
        usingServer(sauce).
        withCapabilities({
            browserName: argv.browser,
            platform: '',
            name: 'sauce fund-box-plugin-test',
            username: 'SBM_NON_PAC',
            accessKey: '024858db-3187-48c0-93b7-8a7b57d6046d'
        }).
        build();
        logger.info('remote = ' +argv.remote +' & browser = ' +argv.browser);
        break;
    default:
        logger.error('command line args - remote/browser type is missing');
        logger.debug('launching default remote=local & browser=firefox');
        argv.remote = 'local';
        driver = new webdriver.Builder().usingServer().withCapabilities({
            'browserName': 'firefox'
        }).build();
        break;
}


exports.launchUrl = function(url) {
    driver.get(url).then(function(){
    logger.info('launched url: ' +url);
    });
};

var isElementPresent = function(locator) {

    try {
    if (locator.startsWith('xpath')) {
        driver.wait(until.elementLocated(By.xpath(locator.split('=.')[1])), 10000);
    }
    if (locator.startsWith('id')) {
        driver.wait(until.elementLocated(By.id(locator.split('=')[1])), 10000);
    }
    if (locator.startsWith('css')) {
        driver.wait(until.elementLocated(By.css(locator.split('=')[1])), 10000);
    }
    if (locator.startsWith('name')) {
        driver.wait(until.elementLocated(By.name(locator.split('=')[1])), 10000);
    }
    }
    catch(err){
      logger.error(locator +'not found ');
    }

};

var getLocatorType = function(locatorType) {
    var caseString = locatorType.split('=')[0];
    switch (caseString) {
        case 'xpath':
            return driver.findElement(By.xpath(locatorType.split('=.')[1]));
        case 'id':
            return driver.findElement(By.id(locatorType.split('=')[1]));
        case 'name':
            return driver.findElement(By.name(locatorType.split('=')[1]));
        case 'css':
            return driver.findElement(By.css(locatorType.split('=')[1]));
        case 'link':
            return driver.findElement(By.link(locatorType.split('=')[1]));
        default:
            logger.error('locator Info not found');
    }
};

exports.waitShort = function(ms) {
    driver.sleep(ms).then(function(){
      logger.info("waiting for " +ms +"ms");
    })
};

exports.shutDriver = function() {
    driver.quit();
};

exports.clickElement = function(locator) {
    isElementPresent(locator);
    getLocatorType(locator).then(function(getElement){
    getElement.click();
    });
};


exports.sendKey = function(locator, value) {
    isElementPresent(locator);
    getLocatorType(locator).sendKeys(value).then(function(){
        logger.info('Entered : ' +value);
    });
};

exports.waitForElement = function(locator) {

    if (locator.startsWith('xpath')) {
        driver.wait(until.elementLocated(By.xpath(locator.split('=.')[1])), 30000, 'Could not locate the xpath element within the time specified');
    }
    if (locator.startsWith('css')) {
        driver.wait(until.elementLocated(By.css(locator.split('=')[1])), 30000, 'Could not locate the css element within the time specified');
    }
    if (locator.startsWith('id')) {
        driver.wait(until.elementLocated(By.id(locator.split('=')[1])), 30000, 'Could not locate the id element within the time specified');
    }
    if (locator.startsWith('name')) {
        driver.wait(until.elementLocated(By.name(locator.split('=')[1])), 30000, 'Could not locate the name element within the time specified');
    }

};

exports.navigateBack = function(locator) {
    if (argv.browser === 'safari') {
        getLocatorType(locator).sendKeys(webdriver.Key.ESCAPE);
    } else {
        driver.navigate().back().then(function(){
          logger.info('navigated back');
        });

    }
};

exports.getAttributeValue = function(getAttributeLocator, dataType, value) {
    isElementPresent(getAttributeLocator);
    getLocatorType(getAttributeLocator).getAttribute(dataType).then(function(getValue) {
        logger.info('Attribute Value : ' + getValue);
        expect(getValue).to.equal(value);
    });


};

exports.getElementText = function(getElementLocator) {
    isElementPresent(getElementLocator);
    getLocatorType(getElementLocator).getText().then(function(getValue) {
        logger.info('Element Text : ' + getValue);
    });


};

exports.refreshPage = function() {
    driver.navigate().refresh().then(function(){
        logger.info('refreshed the page');
    });

};
