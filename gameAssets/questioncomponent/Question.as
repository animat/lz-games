class Question extends OptionFixture {
	private var stimulus:Stimulus;
	private var responses:Array;
	private var answerAll:Boolean;
	private var attributes:Object;
	
	public function Question(initStimulus:String, initStimulusType:String) {
		stimulus = new Stimulus(initStimulus, initStimulusType);
		responses = new Array();
	}
	
	public function addResponse(stim:String, stimType:String):Void {
		responses.push(new Response(stim, stimType));
	}
	
	public function evaluate(resp:Response):Boolean {
		for (var i:Number = 0; i < responses.length; i++) {
			if (resp.getStimulus().equals(responses[i].getStimulus())) {
				return true;
			}
		}
		return false;
	}
	
	public function getStimulus():Stimulus {
		return stimulus;
	}
	public function getResponses():Array {
		return responses;
	}
	public function getExpectedString():String {
		return responses[0].getStimulus().getContent();
	}
	public function setAnswerAll(val:Boolean):Void {
		answerAll = val;
	}
	public function getAnswerAll():Boolean {
		return answerAll;
	}
	public function setAttributes(val:Object):Void {
		attributes = val;
	}
	public function getAttributes():Object {
		return attributes;
	}
	
	public function toString():String {
		return "["+getStimulus()+" . . . "+responses+"]";
	}
}