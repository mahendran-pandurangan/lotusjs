var restCall = require('../lib/backEndUtils');
var logger = require('../lib/logger');


describe('rest api suite', function(){
    it('rest test', function(){
        var test = restCall.getRestWebServicesUtil('http://www.google.com', 'GET', 'content-type=text/html','');
    });
});
