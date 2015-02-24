class OptionManager {
	private var optionDisplays:Array;
	
	public function OptionManager() {
		optionDisplays = new Array();
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
		var totalSpacing:Number = 236;
		var avgSpacing:Number = Math.floor(totalSpacing / options.length);
		for (var i:Number = 0; i < options.length; i++) {
			var tmp:QSOptionDisplay = new QSOptionDisplay(LZGame.getStage(), "option_"+i, options[i].getStimulus(), LZGame.getInstance());
			tmp.setManager(this);
			tmp.setPos(200, 125 + (i * avgSpacing));
			tmp.setDim(50, 50);
			optionDisplays.push(tmp);
		}
	}
	
	public function hideAllOptionsExcept(keep:Object):Void {
		var keeper:QSOptionDisplay = QSOptionDisplay (keep);
		for (var i:Number = 0; i < optionDisplays.length; i++) {
			if (optionDisplays[i] != keeper) {
				optionDisplays[i].momentaryFade();
			}
		}
	}
	
}