class Bird {
	
	private var clip:MovieClip;
	private var speechBubble:MovieClip;
	private var qDisplay:StimulusDisplay;
	
	public function Bird() {
		clip = LZGame.getStage().bird;
		speechBubble = LZGame.getStage().speechBubble;
	}
	
	public function setQDisplay(stim:Stimulus) {
		if (qDisplay != null) {
			qDisplay.reset();
			qDisplay = null;
		}
		qDisplay = new StimulusDisplay(LZGame.getStage().speechBubble, "qDisplay", stim);
	}
	
}