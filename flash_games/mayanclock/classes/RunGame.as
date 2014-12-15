class RunGame extends LZGame implements gametypes.MatchingGame {
	
	private var clock:Clock;
	private var bird:Bird;
	
	public function RunGame(main:MovieClip) {
		super(main);
		//
		clock = new Clock(main.hourHand, main.minuteHand);
		bird = new Bird();
		//
		LZGame.setInstance(this);
		nextQuestion(false);
	}
	public function nextQuestion(proceed:Boolean):Void {
		clock.setTime("12:05");
		if (proceed == true || proceed == "true") {
			questionList.increaseQNum();
		}
		trace("Spinning the Mayan face, counting down to 0, counting up number of correct answers");
		refreshQDisplay();
	}
	public function refreshQDisplay():Void {
		if (questionList.getCurrentQ().getAttributes().mode == "explore") {
			LZGame.getStage().centerPanel.gotoAndStop("static");
			bird.setQDisplay(questionList.getCurrentQ().getStimulus());
		} else if (questionList.getCurrentQ().getAttributes().mode == "match") {
			
		} else if (questionList.getCurrentQ().getAttributes().mode == "typein") {
			
		}
	}
	public function evaluate(attempt:Object):Void {
		trace(attempt+" :: "+questionList.getCurrentQ()+" :: "+clock.getHour()+" :: "+LZGame.getStage());
		LZGame.getStage().sky.gotoAndStop("23");
		if (attempt == questionList.getCurrentQ().getResponses()[0].getStimulus().getContent()) {
			if (questionList.getQuestionsLeft() == 1) {
				winGame();
			} else {
				correctAnswer();
			}
		} else {
			incorrectAnswer();
		}
	}
	public function correctAnswer():Void {
		trace("That's correct!");
	}
	public function incorrectAnswer():Void {
		trace("Sorry, incorrect");
	}
	public function winGame():Void {
		trace("You win");
		main.gotoAndPlay("win");
	}
	public function getScore():String {
		return "";
	}
}