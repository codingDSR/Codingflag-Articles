window.onload = function(){
	var speech = new p5.SpeechRec();
	speech.onresult = function(){
		document.body = "You said: "+speech.resultString;
	}
	speech.start();
};