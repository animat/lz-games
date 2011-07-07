import mx.utils.Delegate;
import flash.geom.ColorTransform;
import flash.geom.Transform;
/**
 * @className	Character
 * @author		Samit Basak
 * @purpose 	Charcter class to handle all the behaviour of character.
*/
class Character {
	private var runGame:RunGame;
	public var mc:MovieClip;
	private var lower:MovieClip;
	private var upper:MovieClip;
	private var top:MovieClip;
	private var middle:MovieClip;
	private var bottomdown:MovieClip;
	private var bottom:MovieClip;
	private var palmDress:MovieClip;
	private var main:Character;
	private var __selectedDress:MovieClip;
	private var clearDressIntervalIds:Array;
	/**
	 Constructor 
	 @param   runGame RunGame	reference ot main object of the game
	 @param 	char	String 	reference string to character
	 @return  no return value
	 */
	function Character(runGame:RunGame, char:String) {
		this.runGame = runGame;
		clearDressIntervalIds = new Array();
		mc = runGame.main.character.attachMovie(char, char, 0);
		lower = mc.lower.createEmptyMovieClip("m", 10);
		upper = mc.upper.createEmptyMovieClip("m", 11);
		middle = mc.middle.createEmptyMovieClip("m", 12);
		bottomdown = mc.bottomdown.createEmptyMovieClip("m", 13);
		bottom = mc.bottom.createEmptyMovieClip("m", 14);
		palmDress = mc.palmDress.createEmptyMovieClip("m", 14);
		top = mc.top.createEmptyMovieClip("m", 15);
		mc.lower.onRelease = setSelectedDress;
		mc.upper.onRelease = setSelectedDress;
		mc.middle.onRelease = setSelectedDress;
		mc.top.onRelease = setSelectedDress;
		mc.bottom.onRelease = setSelectedDress;
		mc.bottomdown.onRelease = setSelectedDress;
		mc.lower.main = this;
		mc.upper.main = this;
		mc.middle.main = this;
		mc.bottom.main = this;
		mc.bottomdown.main = this;
		mc.top.main = this;
	}
	/**
	setSelectedDress - sets the selected dress to the character
	@param 		no parameter
	@return 	no return value
	*/
	private function setSelectedDress():Void {
		main.__selectedDress = MovieClip(this);
		main.runGame.currentSelectedCategory = MovieClip(this);
	}
	/**
	selectedDress	- returns the reference of the selected dress
	@param 	no parameter
	@return MovieClip	reference of the selected movieClip
	*/
	public function get selectedDress():MovieClip {
		var tmp:MovieClip = __selectedDress;
		return tmp;
	}
	/**
	setDress - sets the deress to the character
	@param 	dressfileName 	String 	dress file name reference
	@param	category		String 	category of the dress
	@param 	__name			String 	name of the dress
	@param 	correctClothSelection	Boolean 	true if corect cloath selected
	@return MovieClip	reference to the cateogory movieClip
	*/
	public function setDress(dressfileName:String, category:String, __name:String, correctClothSelection:Boolean):MovieClip {
		
		if (!runGame.busy) {
			var tmpCategory:MovieClip;
			switch (category) {
			case "lower" :
				tmpCategory = lower;
				break;
			case "upper" :
				tmpCategory = upper;
				break;
			case "top" :
				tmpCategory = top;
				break;
			case "middle" :
				tmpCategory = middle;
				break;
			case "bottom" :
				tmpCategory = bottom;
				break;
			case "bottomdown" :
				tmpCategory = bottomdown;
				break;
			case "palmDress" :
				tmpCategory = palmDress;
				break;
			default :
				break;
			}
			//if (!tmpCategory._parent.correctClothSelection) {
				//tmpCategory._parent.correctClothSelection = false;
			//}
			if (tmpCategory._parent.correctClothSelection != true) {
				var tmpm:MovieClip = tmpCategory.createEmptyMovieClip("tmp", 1);
				tmpCategory._parent.category = category;
				tmpCategory._parent.__name = __name;
				trace(tmpm+"   category ="+category+" dressfileName ="+dressfileName+" __name="+__name+"correctClothSelection="+correctClothSelection);
				loadMovie(dressfileName, tmpm);
			}
			if (correctClothSelection && !tmpCategory._parent.correctClothSelection) {
				tmpCategory._parent.correctClothSelection = correctClothSelection;
			}
		}
		return tmpCategory._parent;
	}
	/**
	setWrongDress - sets the dress when wrong selection has been made
	@param dressfileName String 	dress filename reference
	@param category		String		cateogory of the dress
	@param 	__name 		String 		name of the string
	@return 	no return value
	*/
	public function setWrongDress(dressfileName:String, category:String, __name:String):Void {
		var m:MovieClip = setDress(dressfileName, category, __name, false);
		if (m.correctClothSelection == false) {
			runGame.setBusy();
			var n:Number = setInterval(this, "clearDress", 1000, m);
			this.clearDressIntervalIds.push(n);
		}
	}
	/**
	clearDress - clears the dress movieClip passed as argument
	@param 	m 	MovieClip	 dress movieClip to be removed
	@return 	no return value
	*/
	private function clearDress(m:MovieClip):Void {
		m.m.unloadMovie();
		m.m.unloadMovie();
		resetTransformation(m.m);
		clearAllIntervals();
		runGame.resetBusy();
	}
	/**
	clearAllIntervals - clears the registered intervals 
	@param 		no parameter
	@return 	no return value
	*/
	public function clearAllIntervals():Void {
		var tmp:Number = clearDressIntervalIds.length;
		for (var i:Number = 0; i<tmp; i++) {
			var n:Number = Number(this.clearDressIntervalIds.pop());
			clearInterval(n);
		}
	}
	/**
	resetDress - reset the dress of the character
	@param 	no parameter
	@return 	no return value
	*/
	public function resetDress():Void {
		lower.tmp.unloadMovie();
		upper.tmp.unloadMovie();
		middle.tmp.unloadMovie();
		bottom.tmp.unloadMovie();
		bottomdown.tmp.unloadMovie();
		top.tmp.unloadMovie();
		resetTransformation(lower._parent);
		resetTransformation(upper._parent);
		resetTransformation(middle._parent);
		resetTransformation(bottom._parent);
		resetTransformation(bottomdown._parent);
		resetTransformation(top._parent);
	}
	/**
	setTransformation - this funtion set the colorTransformation to the selected cloth
	@param 	m 						MovieClip			movieclip to which the transformation is to be applied
	@param  sct 					ColorTransoform		The colorTransformation object that is to be applied
	@param 	correctColorSelected	Boolean 			flags correct or wrong selection
	*/
	public function setTransformation(m:MovieClip, sct:ColorTransform, correctColorSelection:Boolean):Void {
		if (!runGame.busy) {
			if (m.correctColorSelection != true) {
				var mt:Transform = new Transform(m);
				var ct:ColorTransform = mt.colorTransform;
				var rm:Number = sct.redOffset/255;
				var gm:Number = sct.greenOffset/255;
				var bm:Number = sct.blueOffset/255;
				ct.redMultiplier = rm;
				ct.greenMultiplier = gm;
				ct.blueMultiplier = bm;
				mt.colorTransform = ct;
			}
			if (correctColorSelection && !m.correctColorSelection) {
				m.correctColorSelection = correctColorSelection;
			}
		}
	}
	/**
	setWrongTransoformation - this function set ths wrong transformation to the object
	@param 	m 	MovieClip	the target MovieClip object
	@param set	ColorTransformation 	the colorTransformation object to be applied
	@return		no return value
	*/
	public function setWrongTransformation(m:MovieClip, sct:ColorTransform):Void {
		if (m.correctColorSelection != true) {
			setTransformation(m, sct, false);
			runGame.setBusy();
			var n:Number = setInterval(this, "resetTransformation", 1000, m);
			this.clearDressIntervalIds.push(n);
		}
	}
	/**
	resetTransformation - resets the transformation to the movieClip
	@param 	m 	MovieClip	the mvoieClip of which the color transofmation is to be reset
	@return 	no return value
	*/
	private function resetTransformation(m:MovieClip):Void {
		var mt:Transform = new Transform(m);
		var ct:ColorTransform = mt.colorTransform;
		ct.redMultiplier = 1;
		ct.greenMultiplier = 1;
		ct.blueMultiplier = 1;
		mt.colorTransform = ct;
		clearAllIntervals();
		runGame.resetBusy();
	}
}
