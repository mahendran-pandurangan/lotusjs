var restCall = require('../lib/backEndUtils');
var logger = require('../lib/logger');


describe('rest api suite', function(){
    it('rest test', function() {
        var test = restCall.getRestWebServicesUtil('http://github.com/', 'GET', 'content-type=application/json', '');
        logger.info(test.statusCode);
        logger.info(test.body);
    });
});
