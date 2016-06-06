'use strict';

var path = require('path');
var fs = require('fs');
var request = require('request');
var logger = require('./logger');

exports.getRestWebServicesUtil = function(baseUrl, operationType, customHeaders, payload) {
    var response=null;
    request({
        url: baseUrl,
        method: operationType,
        headers: customHeaders,
        body: payload
    }, function(error, responseOutput, body) {
        if (error) {
            logger.error(error);
        } else {
            response = responseOutput;
        }
    });
    while (response == undefined) {
        require('deasync').runLoopOnce();
    }
    return response;
}
