import mx.utils.Delegate;
//
class CheckAnswer {
	private var classScope:Object;
	private var clip:MovieClip;
	private var inputText:utilities.LZInputText;
	//
	public function CheckAnswer(classScope:Object) {
		this.classScope = classScope;
		clip = LZGame.getStage().attachMovie("inputPanel", "inputPanel", LZGame.getStage().getNextHighestDepth());
		inputText = new utilities.LZInputText(clip, "inputText", 228, 28);
		clip._visible = false;
		clip._x = (600 - clip._width) / 2;
		clip._y = (400 - clip._height) / 2;
		clip.submit.onRelease = Delegate.create(this, submitOnRelease);
		clip.cancel.onRelease = Delegate.create(this, cancelOnRelease);
		var enterListener:Object = new Object();
		enterListener.onKeyDown = Delegate.create(this, enterDown);
		Key.addListener(enterListener);
	}
	private function enterDown() {
		if (Key.getCode() == 13) {
			submitOnRelease();
		}
	}
	public function showPanel() {
		clip._visible = true;
		inputText.clearText();
		inputText.enable();
	}
	public function displayFeedback(expected:String):Void {
		inputText.displayFeedback(expected);
	}
	public function hidePanel() {
		clip._visible = false;
	}
	private function submitOnRelease() {
		classScope.evaluate();
	}
	private function cancelOnRelease() {
		classScope.continuePlaying();
	}
	//
	public function getClip():MovieClip {
		return clip;
	}
	public function getInput():String {
		return inputText.getInput();
	}
	public function setClipFilters(filt:Array):Void {
		clip.filters = filt;
	}
}