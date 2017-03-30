MessagePortTizen = (function() {
	
	function MessagePortTizen() {
		
		this.localPortName = null;
		this.remotePortName = null;
		this.remoteAppId = null;
		this.remotePort = null;
		this.localPort = null;
		
		this.init();
	}
	
	MessagePortTizen.prototype = {
			
			init : function(localMessagePortName, callbackView) {
				
				this.localPortName = localMessagePortName;
				
				this.localPort = tizen.messageport.requestLocalMessagePort(this.localPortName);
				
				var localPortWatchId = this.localPort.addMessagePortListener(onsuccessRecieveEvent);
				
				console.log("App2 - MessagePortTizen: init");
				
				function onsuccessRecieveEvent(data, replyPort) 
				{
					console.log("App2 - MessagePortTizen: recieved");
					console.log(data);
					console.log(replyPort);
					
					callbackView(data);
					   
				}
			},
			initRemotePort : function(remoteMessagePortName, remoteAppicationId) {
				
				this.remotePortName = remoteMessagePortName;
				this.remoteAppId = remoteAppicationId;
				
				this.remotePort = tizen.messageport.requestRemoteMessagePort(this.remoteAppId, this.remotePortName);
				
				console.log("App2 - MessagePortTizen: initRemotePort");
				
			},
			sendMessage : function(from, message) {
			
				if (this.remotePort != null) {
				
					var messageData = [{
						key: "from", 
						value: from
					},
					{
						key: "message",
						value: message
					},
					{
						key: "date",
						value: new Date()
					}];
						
					this.remotePort.sendMessage(messageData, this.localPort);
					
					console.log("App2 - MessagePortTizen: sendMessage");
					
					alert("Message was sent")
					
				}
			}
				
	};
	
	return MessagePortTizen;
	
})();