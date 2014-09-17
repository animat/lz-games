import mx.utils.Delegate;
import flash.external.ExternalInterface;
//
class RunGame extends LZGame implements gametypes.MatchingGame {
	//
	public var clothesManager:ClothesManager;
	public var colorsManager:ColorsManager;
	public var char:MovieClip;
	//
	public function RunGame(main:MovieClip) {
		super(main);
		//
		clothesManager = new ClothesManager(main.clothes, questionList.getOptions());
		colorsManager = new ColorsManager(main.colors);
		//
		char = main.attachMovie("boy", "char", main.getNextHighestDepth());
		char._xscale = 50;
		char._yscale = 50;
		char._x = 150;
		char._y = 30;
		//
		nextQuestion(false);
	}
	public function getHints(hintsMC:MovieClip):Void {
		hints = hintsMC.hints;
		hints.registerQList(questionList);
		hints.registerCorrectAnswerFunction(this, correctAnswer);
		hints.registerToggleFunction(this, toggleHints);
	}
	public function nextQuestion(proceed:Boolean):Void {
		//
	}
	public function refreshQDisplay():Void {
		//
	}
	public function evaluate(attempt:Object):Void {
		//
	}
	public function correctAnswer():Void {
		//
	}
	public function incorrectAnswer():Void {
		//
	}
	public function winGame():Void {
		//
	}
}