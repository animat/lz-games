class PhraseManager {
	private var phrases:Array;
	private var nextPhraseIndex:Number;
	private var phraseCounter:Number;
	private var bgPhraseCounter:Number;
	private var timedRelease:Number;
	private var timedBGRelease:Number;
	public function PhraseManager() {
		phrases = new Array();
		nextPhraseIndex = 0;
		phraseCounter = 0;
		bgPhraseCounter = 0;
	}
	
	public function addPhrases(questions:Array) {
		for (var i:Number = 0; i < questions.length; i++) {
			var p:String = questions[i].getStimulus().getContent();
			var r:String = questions[i].getResponses()[0].getStimulus().getContent();
			phrases.push({prompt: p, response: r});
		}
	}
	
	public function activatePhrases():Void {
		timedRelease = setInterval(this, "releasePhrase", randomWait());
		timedBGRelease = setInterval(this, "releaseBackground", 2300);
	}
	private function releasePhrase():Void {
		if (nextPhraseIndex >= phrases.length) {
			nextPhraseIndex = 0;
		}
		var phraseInfo:Object = phrases[nextPhraseIndex];
		var phrase:Phrase = new Phrase(phraseInfo.prompt, phraseInfo.response, phraseCounter);
		
		phrase.activate();
		
		nextPhraseIndex++;
		phraseCounter++;
		
		clearInterval(timedRelease);
		timedRelease = setInterval(this, "releasePhrase", randomWait());
	}
	
	private function releaseBackground():Void {
		var rndm:Number = Math.floor(Math.random() * phrases.length);
		var obj:Object = phrases[rndm];
		new BGPhrase(obj.response, bgPhraseCounter);
		bgPhraseCounter++;
	}
	
	public function deactivatePhrases():Void {
		clearInterval(timedRelease);
		clearInterval(timedBGRelease);
	}
	
	private function randomWait():Number {
		return Math.round(2200 + Math.random() * 1500);
	}
}