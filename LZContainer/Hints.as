import mx.events.EventDispatcher;
import mx.utils.Delegate;
class Hints extends EventDispatcher {
	private var mc:MovieClip;
	private var hintsButtons:MovieClip;
	private var hidden:Boolean;
	private var _availHints:Array;
	private var hintsXML:XML;
	public function Hints (mc:MovieClip, availHints:Array) {
		_availHints = availHints;
		this.mc = mc;
		hintsButtons = mc.createEmptyMovieClip ("hintsButtons", mc.getNextHighestDepth ());
		hintsButtons._visible = false;
		hidden = true;
		displayHints ();
	}
	//
	// Display all hints available on the swf
	public function displayHints ():Void {
		var hintClip:MovieClip;
		if (_availHints.length > 0) {
			for (var i:Number = 0; i < _availHints.length; i++) {

				if (_availHints[i].type == "movetoend") {
					hintClip = hintsButtons.attachMovie (_availHints[i].type, _availHints[i].type, hintsButtons.getNextHighestDepth ());
				} else {
					hintClip = hintsButtons.attachMovie ("penalty", _availHints[i].type, hintsButtons.getNextHighestDepth ());
					hintClip.txt.htmlText = _availHints[i].text;

				}
				hintClip._x = ((hintClip._width + 5) * i);
				hintClip._y = 225;
				hintClip.functionName = _availHints[i].type;
				hintClip.onRelease = Delegate.create (this, this[_availHints[i].type]);
			}
			hintsButtons._x = (Stage.width / 2) - (hintsButtons._width / 2);
		} else {
			noHintsAvail ();
		}
	}
	// Display a message saying there are no hints available on the swf
	public function noHintsAvail ():Void {
		var hintClip:MovieClip = hintsButtons.attachMovie ("nohints", "nohints", 1);
		hintClip._x = (Stage.width / 2) - (hintClip._width / 2);
		hintClip._y = 225;
		hintClip.onRelease = Delegate.create(this, runGameToggle);
	}
	//
	// Simple functions to hide or show
	public function showHints ():Void {
		mc.gotoAndPlay ("fadeIn");
		hidden = false;
	}
	public function hideHints ():Void {
		mc.gotoAndPlay ("fadeOut");
		hidden = true;
	}
	// Getter method for the hidden variable
	public function isHidden ():Boolean {
		return hidden;
	}
	// A method that calls the toggleHints() method from the RunGame class, as registered in the symbols array; called by every hint method
	//    *note: the toggleHints() method will be calling showHints() or hideHints() above, as well as other methods defined in the RunGame
	public function runGameToggle ():Void {
		//**********   samit basak ********************/
		dispatchEvent ({type:"toggleHint"});
/**********************************************/
	}
	//
	//     ~~~~~~~~~~~~~~~~
	// Hint functionality methods
	//
	// Move the current question to the end of the list (via QuestionList) . . .  PENALTY : n/a
	public function movetoend ():Void {

		//symbols[0].movetoend ();
		runGameToggle ();
		//**********   samit basak ********************/
		dispatchEvent ({type:"moveToEnd"});
/**********************************************/
	}
	// Supply the next letter of the answer String to the active text field . . . PENALTY : +3 seconds
	public function nextletter ():Void {
		//**********   samit basak ********************/
		dispatchEvent ({type:"nextLetter"});
/**********************************************/
/*symbols[1].addSeconds (3);
var expectedString:String = symbols[0].getCurrentQ ().getExpectedString ();
for (var i:Number = 0; i < symbols[2].text.length; i++) {
if (expectedString.charAt (i) != symbols[2].text.charAt (i)) {
symbols[2].text += expectedString.charAt (i);
return;
}
}
if (i < expectedString.length) {
symbols[2].text += expectedString.charAt (i);
}*/
		runGameToggle ();
	}
	// Give up on the current question and move on . . . PENALTY : +10 seconds
	public function giveup ():Void {
		//**********   samit basak ********************/
		dispatchEvent ({type:"giveUp"});
/**********************************************/
/*symbols[1].addSeconds (10);
var correctAnswer:Function = symbols[3];
correctAnswer ();*/
		runGameToggle ();
	}
}