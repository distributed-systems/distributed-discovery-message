!function() {

    var   Class                 = require('ee-class')
        , log                   = require('ee-log')
        , RequestMessage        = require('distributed-request-message');



    var   DiscoveryResponse
    	, statuses;



    statuses = new RequestMessage.StatusSet([
    	  'ok'
    	, 'error'
    ]);




    module.exports = DiscoveryResponse =  new Class({
        inherits: RequestMessage.Response

       	// status codes
       	, statuses: statuses

        /**
         * send this message
         */
       	, send: function() {
       		this._send();
       	}
    });



    // expose statuscodes
    statuses.applyTo(DiscoveryResponse);
}();
