var should = require('should');
var logger = require('../lib/logger.js');
var xlsx2json = require('xlsx-to-json');
var fs = require('fs');

exports.xlProvider = function() {
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
exports.readExcelData = function(fileName, sheetName) {
    var returnObject;
    xlsx2json({
        input: fileName,
        output: 'temp.json',
        sheet: sheetName
    }, function(err, obj) {
        returnObject = obj;
    });
    while (returnObject == undefined) {
        require('deasync').runLoopOnce();
    }
    fs.unlink('temp.json');
    return JSON.parse(JSON.stringify(returnObject, null, '\t'));
};




exports.readCsvData = function(fileName) {
    var returnObject;
    csv2array({
        file: fileName,
        columns: true
    }, function(err, obj) {
        returnObject = obj;
    });
    while (returnObject == undefined) {
        require('deasync').runLoopOnce();
    }
    return JSON.parse(JSON.stringify(returnObject, null, '\t'));
};

