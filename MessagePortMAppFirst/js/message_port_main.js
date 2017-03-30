/*
 * File: message_port_main.js
 * Application: Message Port 1
 * Author: Sergei Papulin
 * 
 * Message Port:
 * https://developer.tizen.org/development/guides/web-application/application-management/application-data-exchange/message-port
 * https://developer.tizen.org/dev-guide/latest/org.tizen.web.apireference/html/device_api/mobile/tizen/messageport.html * 
 * 
 * Icons: 
 * http://www.flaticon.com/
 * 
 */

(function() {
	
	var msgPortMain = {},
		msgPortView,
		msgPortTizen;
	
	msgPortMain.init = function() {
		
		$("#btn-init-remote-port").click(initMessageRemotePort);
		$("#btn-send-message").click(sendMessage);
		$("#txt-name").keyup(doneInputText);
		
		msgPortView = new MessagePortView()
		msgPortTizen = new MessagePortTizen("PortApp1");
		
		msgPortTizen.init("PortApp1", msgPortView.addMessage);
		
		console.log(tizen.application.getCurrentApplication().appInfo.id);
	};
	
	function initMessageRemotePort() {
		
		msgPortTizen.initRemotePort("PortApp2", "ZSdvscNQTf.MessagePortMApp");
		
	}
	
	function sendMessage() {
		
		var nameFrom = $("#txt-name").val(),
			message = $("#txt-message").val();
		
		msgPortTizen.sendMessage(nameFrom, message);
		
	}
	
	function doneInputText(e) {
		
		if (e.which === 13) {
			
			$("#txt-name").trigger("blur");
			
		}
		
	}
	
	return msgPortMain;
	
})().init();