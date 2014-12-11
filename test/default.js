
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert');



	var DiscoveryMessage = require('../')
		, message;



	describe('DiscoveryMessage', function(){
		it('shoud not crash when instantiated', function(){
			new DiscoveryMessage();
		});


		it('shoud not crash when instantiated with options', function(){
			message = new DiscoveryMessage({
				  action 			: DiscoveryMessage.LOOKUP
				, sender 			: 'uid--sender-----------D'
				, recipient	 		: '--static-lookup'
			});

			assert.equal(JSON.stringify(message.toJSON()), '{"sender":{"uid":"uid--sender-----------D"},"recipient":{"uid":"--static-lookup"},"headers":{},"content":null}');
		});



		it('should be able to create a response', function(){
			response = message.createResponse([{im:'data'}], {header: 3}, 'ok');

			assert.equal(JSON.stringify(response.toJSON()), '{"sender":{"uid":"--static-lookup"},"recipient":{"uid":"uid--sender-----------D"},"headers":{"header":3},"content":[{"im":"data"}]}');
		});
	});
	