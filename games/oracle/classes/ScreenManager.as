class ScreenManager {
	private var optionDisplays:Array;
	private var screens:Array;
	private var correctScreen:Screen;
	private var incorrectScreens:Array;
	
	public function ScreenManager() {
		optionDisplays = new Array();
		screens = new Array();
		createScreens();
	}
	
	private function createScreens():Void {
		for (var i:Number = 1; i < 5; i++) {
			var tmp:Screen = new Screen(String(i));
			tmp.setManager(this);
			screens.push(tmp);
		}
	}
	
	public function resetOptions():Void {
		if (optionDisplays.length > 0) {
			for (var i:Number = 0; i < optionDisplays.length; i++) {
				optionDisplays[i].reset();
			}
		}
	}
	
	public function setOptions(options:Array):Void {
		optionDisplays = new Array();
		incorrectScreens = new Array();
		var answer:Stimulus = LZGame.getInstance().questionList.getCurrentQ().getResponses()[0].getStimulus();
		
		for (var i:Number = 0; i < screens.length; i++) {
			var tmp:OOptionDisplay = new OOptionDisplay(screens[i], String(i), options[i].getStimulus(), LZGame.getInstance());
			tmp.setDim(100, 100);
			optionDisplays.push(tmp);
			screens[i].setStimulus(options[i].getStimulus());
			
			if (options[i].getStimulus().equals(answer)) {
				correctScreen = screens[i];
			} else {
				incorrectScreens.push(screens[i])
			}
		}
	}
	
	public function showLoading():Void {
		for (var i:Number = 0; i < screens.length; i++) {
			screens[i].showLoading();
		}
	}
	
	public function getCorrectScreen():Screen {
		return correctScreen;
	}
	public function getIncorrectScreens():Array {
		return incorrectScreens;
	}
	
	public function destroy():Void {
		for (var i:Number = 0; i < screens.length; i++) {
			screens[i].reset();
		}
	}
}