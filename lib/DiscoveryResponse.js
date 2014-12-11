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
         * class constructor
         */
        , init: function init(options) {
            if (options && options.status) this.status = options.status;

            init.super.call(this, options);
        }

        

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
