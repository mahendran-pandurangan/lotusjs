var request = require('request');
var fs = require('path');
var path = require('path');
var logger = require('./logger');

exports.getRestWebServicesUtil = function(restUrl, methods, header, jsonBody){
    var resp='';
    request({
        url:restUrl,
        method:methods,
        headers:header,
        body:jsonBody
    }, function(err, response, body){
        if(error){
            logger.error(error);
        } else {
            logger.info(body);
            resp = response;
        }
    });
    while(resp==undefined) {
        require('deasync').runLoopOnce();
    }
    return resp;
};
