MessagePortView = (function() {
	
	function MessagePortView() {

	}
	
	MessagePortView.prototype = {
			
			addMessage : function(msgObjList) {
				
				var msgObj = {};
				
				if (msgObjList != null) {
					
					var i = 0,
						lenList = msgObjList.length;
					
					for (i; i < lenList; i++) {
						
						switch (msgObjList[i].key) {
						
							case "from":
								msgObj.from = msgObjList[i].value;
								break;
							case "message":
								msgObj.message = msgObjList[i].value;
								break;
							case "date":
								msgObj.date = msgObjList[i].value;
								break;
							default:
								break;
						}
						
					}

					console.log(msgObj);
					
					var htmlMsg = '<div class="ui-message-body">' +
						'<div class="ui-message-header">' + msgObj.from + '</div>' +
						'<div>' + msgObj.message + '</div>' +
						'<div class="ui-message-footer">' +  msgObj.date  + '</div>' +
					'</div>';
					
					$("#message-list").append(htmlMsg);
				
				}
			}

	};
	
	return MessagePortView;
	
})();