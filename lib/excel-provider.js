var should = require('should');
var logger = require('../lib/logger.js');
var xlsx2json = require('xlsx-to-json');
var fs = require('fs');

var xlProvider = function() {
    this.readExcelData = function(xlPath, xlSheet, jsonFilePath) {
        xlsx2json({
            input: xlPath,
            output: jsonFilePath,
            sheet: xlSheet
        }, function(err, result) {
            if (err) {
                logger.error(err);
            } else {
                result.should.be.an.instanceOf(Object)
                var outputFilename = jsonFilePath;
                fs.writeFile(outputFilename, JSON.stringify(result, null, "\t"), function(err) {
                    if (err) {
                        logger.error(err);
                    } else {
                        logger.log("JSON saved to " + outputFilename);
                    }
                });
            }
        })
    }
}
module.exports = new xlProvider();
