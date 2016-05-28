# lotusjs - https://www.npmjs.com/package/lotusjs

####npm -
Node package manager. It is a command-line utility for interacting with repository that aids in package installation, version management and dependency management

####Mocha - 
is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases & Mocha allows you to use any assertion library you want, if it throws an error, it will work! This means you can utilize libraries such as: should, expect, chai.expect(), assert(), better-assert, unexpected.
we can’t use the default Mocha methods, we need to use the WebDriverJS Testing Module if you’re using Mocha. Eg: var test = require('selenium-webdriver/testing'); test.describe('sample-test', function(){ )};
Also, mocha has a quite low maximum time it will allow a test to execute for before automatically failing. Hence have to call timeout - eg: const mochaTimeOut = 30000;

####Gulp - 
is a task runner used to automate/enhance workflows programmatically 

####WebdriverJS - 
WebdriverJS" is another name for selenium-webdriver, the official Node.JS implementation of theJSONWire (WebDriver Wire) Protocol by the Selenium team.

####custom-logger - 
logging mechanism Simple yet highly customizable console logger for node.js integrated with colors to show different log levels - log, info, debug, warn, error.

####xlsx-to-json - 
Converting xlsx file to json files using nodejs

####yargs - 
helps you build interactive command line tools by parsing arguments and generating an elegant user interface


npm commands
```properties
npm install
local chrome: gulp test --remote=local --browser=chrome
local safari: gulp test --remote=local --browser=safari
local FF: gulp test --remote=local --browser=firefox
Default run:(local/FF): gulp test
Sauce chrome: gulp test --remote=sauce --browser=chrome
Sauce firefox: gulp test --remote=sauce --browser=firefox
Sauce safari: gulp test --remote=sauce --browser=safari
Mocha run(picks default tests under test folder): mocha
Mocha along with reporter: mocha -R good-mocha-html-reporter
npm: ./node_modules/gulp/bin/gulp.js
npm mocha: ./node_modules/mocha/bin/mocha
Grunt: grunt webdriver:chrome```

sonar
gulp sonar
To see Report - Follow console or launch http://localhost:9000
