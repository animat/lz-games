import mx.utils.Delegate;
import flash.external.ExternalInterface;
import flash.geom.ColorTransform;

class RunGame extends LZGame implements gametypes.UnscramblingGame {
	//
	public var qString:String;
	public var aString:String;
	public var magnetManager:MagnetManager;
	private var enableContInterval:Number;
	//
	public function RunGame(main:MovieClip) {
		super(main);
		//
		magnetManager = new MagnetManager(this);
		//
		main.nextQuestion_btn.gotoAndStop("static");
		main.nextQuestion_btn.onRelease = Delegate.create(this, nextQBtn);
		//
		nextQuestion(false);
	}
	private function nextQBtn():Void {
		nextQuestion(true);
	}
	public function nextQuestion(proceed:Boolean):Void {
		if (proceed == true || proceed == "true") {
			questionList.increaseQNum();
			magnetManager.destroyAllMagnets();
		}
		if (main.nextQuestion_btn._currentframe != 1) {
			main.nextQuestion_btn.gotoAndPlay("fadeOut");
		}
		magnetManager.createMagnets(questionList.getCurrentQ());
		refreshQDisplay();
	}
	public function refreshQDisplay():Void {
		qString = questionList.getCurrentQ().getStimulus().getContent();
		aString = questionList.getCurrentQ().getResponses()[0].getStimulus().getContent();
		main.questionText = (qString == undefined) ? "" : qString;
	}
	public function evaluate():Void {
		if (magnetManager.isOneGroup()) {
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
		main.nextQuestion_btn.gotoAndPlay("fadeIn");
		main.nextQuestion_btn.enabled = false;
		enableContInterval = setInterval(this, "enableContinueBtn", 2000);
		magnetManager.disappearAllMagnetsBG();
		trace("That's correct! Now wait for the interval...");
		magnetManager.raiseMagnetsToTop();
	}
	private function enableContinueBtn():Void {
		clearInterval(enableContInterval);
		trace("Interval complete. Go ahead");
		main.nextQuestion_btn.enabled = true;
	}
	public function incorrectAnswer():Void {
	}
	public function winGame():Void {
		magnetManager.destroyAllMagnets();
		main.questionText = "";
		main.gotoAndPlay("win");
	}
	public function getScore():String {
		return "";
	}
}