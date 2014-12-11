!function() {

    var   Class                 = require('ee-class')
        , log                   = require('ee-log')
        , RequestMessage        = require('distributed-request-message')
        , DiscoveryResponse     = require('./DiscoveryResponse');



    var   DiscoveryRequest
        , actions;



    actions = new RequestMessage.ActionSet([
          'lookup'
        , 'register'
        , 'deregister'
    ]);




    module.exports = DiscoveryRequest = new Class({
        inherits: RequestMessage


        // action to execute on the discovery
        , _action: null


        // expose the actions
        , actions: actions


        // action getter & setter
        , action: {
              get: actions.getter()
            , set: actions.setter()
        }




        /**
         * class constructor
         */
        , init: function init(options) {
            if (options && options.action) this.action = options.action;

            init.super.call(this, options);
        }




        /**
         * send a response to this message
         *
         * @param <Mixed> first object or any array or null found: content
         * @apram <Mixed> second object or first object in combination with null encountered: headers
         * @param <Mixed> first string encountered: status
         */
        , sendResponse: function() {
            return this.createResponse.apply(this, Array.prototype.slice.call(arguments)).send();
        }




        /**
         * create a response for this message
         *
         * @param <Mixed> first object or any array or null found: content
         * @apram <Mixed> second object or first object in combination with null encountered: headers
         * @param <Mixed> first string encountered: status
         */
        , createResponse: function() {
            var message = new DiscoveryResponse();

            // validate, set flags
            this._prepareResponse(message, arguments);

            // return the message
            return message;
        }
    });


    // expose actions on the constructor
    actions.applyTo(DiscoveryRequest);
}();
