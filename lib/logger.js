var logger = require('custom-logger').config({
    level: 0
});
var colors = require('colors/safe');

logger.log = function(str) {
    console.log(colors.green(str));
};

logger.info = function(str) {
    console.log(colors.magenta(str));
};

logger.warn = function(str) {
    console.log(colors.yellow(str));
};

logger.debug = function(str) {
    console.log(colors.blue(str));
};

logger.error = function(str) {
    console.log(colors.red.underline(str));
};

module.exports = logger;
