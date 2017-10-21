var speech;
window.onload = function(){
	speech = new p5.SpeechRec();
	speech.onResult = function(){
		document.body.innerHTML = "You said: "+speech.resultString;
		document.body.innerHTML += "<button onclick=\"listen()\">Listen</button>";
	}
	speech.start();
};
function listen(){
	speech.start();	
}
