class dialogs.GameOver extends MovieClip {
	// this is the button in the movieclip in the library
	private var button_close:MovieClip;
	
	// constructor
	public function GameOver() {
		trace("creating menu!");
		trace("foudn button" + button_close);
		
		setButtons();
	}
	
	private function setButtons() {
		button_close.onPress = function() {
			_parent._visible = false;
		}
	}
}