var commons = require('../lib/common-util.js');
var logger = require('../lib/logger.js');

exports.loginQBO = function(url, username, password) {
      commons.launchUrl(url);
      commons.sendKey("id=ius-userid",username);
      commons.sendKey("id=ius-password",password);
      commons.clickElement("id=ius-sign-in-submit-btn");
      commons.waitForElement("xpath=.//*[@id='moreBusinessInfo']/div[1]/div[1]");
      commons.navigateBack("xpath=.//*[@id='moreBusinessInfo']/div[1]/div[1]");
      commons.waitForElement("xpath=.//*[@class='left-nav-list-view']/div[2]/a");
  };
