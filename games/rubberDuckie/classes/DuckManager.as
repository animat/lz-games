import tools.Engine;

class DuckManager {
	private var targetMC:MovieClip;
	private var ducks:Array, words:Array;
	private var topRowLength:Number, topRowNumber:Number, bottomRowLength:Number, bottomRowNumber:Number;
	private var diff:Number;
	
	// Establish the target MC timeline, reset and prepare variables
	public function DuckManager(target:MovieClip) {
		this.targetMC = target;
		ducks = new Array(); // Are these arrays, the words one at least, being confused the RunGame arrays?
		words = new Array();
		Stage.scaleMode = "showAll";
		topRowNumber = _global.topRowNumber;
		bottomRowNumber = _global.bottomRowNumber;
	}
	
	// Add a duck to the ducks array, place it on the stage
	public function addDuck(langT:String, engT:String, dir:Number) {
		// Attach the duck from the library, place it
		var depth = targetMC.getNextHighestDepth();
		var duckMC:MovieClip = targetMC.attachMovie("duck_mc", "duckie" + ducks.length, depth);
		var duck:Duck = new Duck(duckMC, langT, engT, dir);
		
		// Make sure that the duckie's _x won't overlap with others in the same row
		var searching:Boolean = true;
		while (searching) {
			searching = false;
			var random_x:Number = getUniqueX(duckMC._width, dir);
			for (var i = 0; i < ducks.length; i++) {
				var duckClip:MovieClip = ducks[i].getDuckMC();
				if (duckClip.dir == dir) {
					if (random_x > (duckClip._x - duckClip._width)) {
						if (random_x < (duckClip._x + duckClip._width)) {
							searching = true;
						}
					}
				}
			}
		}
		
		// With a unique, random position found, place the duck, then place _y depending on its row
		duckMC._x = random_x;
		if (dir == 1) {
			duckMC._y = 75;
		} else {
			duckMC._y = 230;
			duckMC._xscale = -100;
		}
		
		// Add the duck to the ducks array
		ducks.push(duck);
	}
	
	// Add a new word to the words array, get it placed on the stage, similar to addDuck, but placement is controlled within class
	public function addWord(engT:String) {
		var temp:DisplayTextMC = new DisplayTextMC(engT, _global.accessEngArray.length, targetMC);
		_global.accessEngArray.push(engT);
	}
	
	// Figure out an estimated length that each row will be (ducks will be placed randomly within this length size)
	private function defineRowLength(duckWidth:Number) {
		_global.topRowLength = _global.topRowNumber * 1.5 * duckWidth;
		_global.bottomRowLength = _global.bottomRowNumber * 1.5 * duckWidth;
	}
	
	// Return a possible random value for the _x of the new duck
	private function getUniqueX(duckWidth:Number, dir:Number):Number {
		defineRowLength(duckWidth);
		
		if (dir == 1) {
			if (_global.topRowLength > Stage.width) {
				_global.topRowDiff = _global.topRowLength - duckWidth - Stage.width;
			} else {
				_global.topRowDiff = 0;
			}
			var randomX = random(_global.topRowLength - duckWidth) - _global.topRowDiff;
		} else {
			if (_global.bottomRowLength > Stage.width) {
				_global.bottomRowDiff = _global.bottomRowLength - duckWidth - Stage.width;
			} else {
				_global.bottomRowDiff = 0;
			}
			var randomX = random(_global.bottomRowLength - duckWidth) - _global.bottomRowDiff;
		}
		
		return randomX;
	}
}