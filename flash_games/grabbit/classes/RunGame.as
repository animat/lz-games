class RunGame extends LZGame implements gametypes.SentenceGame {
	private var wordManager:WordManager;
	private var spraycan:SprayCan;
	
	public function RunGame(main:MovieClip) {
		super(main);
		//
		
		trace(questionList);
		
		wordManager = new WordManager(new Array());
		spraycan = new SprayCan();
	}
	
	public function nextQuestion(proceed:Boolean):Void {
		if (proceed == true || proceed == "true") {
			questionList.increaseQNum();
		}
		if (questionList.getQuestionsLeft() == 0) {
			winGame();
		}
		refreshQDisplay();
	}
	
	public function refreshQDisplay():Void {
	}
	
	public function evaluate(attempt:Object):Void {
		/*var resp:Response = new Response(attempt.getStr(), "text");
		if (questionList.getCurrentQ().evaluate(resp)) {
			correctAnswer(attempt);
		} else {
			incorrectAnswer(attempt);
		}*/
		trace("eval!");
	}
	
	public function correctAnswer(attempt:Object):Void {
		trace("you win!");
		nextQuestion(true);
	}
	
	public function incorrectAnswer(attempt:Object):Void {
		trace("sorry -- wrong");
	}
	
	public function winGame():Void {
		trace("you winnnn!");
	}
	
	public function getScore():String {
		return "";
	}
	public function destroy():Void {
	}
}
