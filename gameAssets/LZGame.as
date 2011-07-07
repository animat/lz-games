import mx.utils.Delegate;
// Hi, Orissa. Can you see this?
// Hello.
class LZGame {
	public static var main:MovieClip;
	public static var game:RunGame;
	private static var __busy:Boolean;
	private static var language:String;
	public var questionList:QuestionList;
	private var defaultMenu:ContextMenu;
	private var characterMenu:ContextMenu;
	//
	// Superclass constructor
	public function LZGame(mainStage:MovieClip) {
		main = mainStage;
		language = main.loader.getXMLReader().getLanguage();
		questionList = main.loader.getXMLReader().getQuestionList();
		__busy = false;
		//
		createDefaultMenu();
		//createCharacterMenu(); // TODO: Create right-click menu for inserting characters?
	}
	public function createDefaultMenu():Void {
		trace("LZGame :: createDefaultMenu() called");
		defaultMenu = new ContextMenu();
		defaultMenu.hideBuiltInItems();
	}
	private function createCharacterMenu():Void {
		trace("LZGame :: createCharacterMenu() called");
		characterMenu = new ContextMenu();
		characterMenu.hideBuiltInItems();
		
		var characters = ["~Z", "x!", ".Y.", "$"]; // This array will be taken from LZContainer :: loadGameInfo()
		
		for (var i:Number = 0; i < characters.length; i++) {
			var cntxt = new ContextMenuItem("Insert letter: "+characters[i]);
			cntxt.char = characters[i];
			cntxt.onSelect = function(obj, item) {
				var field = Selection.getFocus();
				trace("LZGame :: insertCharacter :: Getting focus...");
				if (field != null) {
					trace("LZGame :: insertCharacter :: Trying to insert "+item.char+" into the text field!");
					var activeCaret:Number = Selection.getCaretIndex();
					trace("active caret :: "+activeCaret);
					if (activeCaret > -1) {
						var begin:String = field.text.substring(0, activeCaret);
						var end:String = field.text.substring(activeCaret);
						field.text = begin + item.char + end;
						trace("full textfield should now be :: "+begin + item.char + end);
						Selection.setFocus(field);
						field.setSelection(activeCaret + 1);
					}
				}
			}
			characterMenu.customItems.push(cntxt);
		}
		_root.menu = characterMenu;
	}
	
	
	public static function isBusy():Boolean {
		return __busy;
	}
	public static function setBusy(val:Boolean):Void {
		__busy = val;
	}
	
	public static function setInstance(rg:RunGame):Void {
		game = rg;
	}
	public static function getInstance():RunGame {
		return game;
	}
	public static function getStage():MovieClip {
		return main;
	}
	
	
	
	/************************************************
	 moved from Hint.as
	 */
	 // Move the current question to the end of the list (via QuestionList) . . .  PENALTY : n/a
	public function movetoend ():Void {
		questionList.movetoend ();
	}
	// Supply the next letter of the answer String to the active text field . . . PENALTY : +3 seconds
	public function nextLetter (inputTextField:TextField):Void {
		var caret:Number = Selection.getCaretIndex();
		var tmptype:String = inputTextField.type;
		inputTextField.type = "dynamic";
		var expectedString:String = questionList.getCurrentQ ().getExpectedString();
		for (var i:Number = 0; i < inputTextField.text.length; i++) {
			if (expectedString.charAt (i) != inputTextField.text.charAt (i)) {
				inputTextField.text += expectedString.charAt (i);
				return;
			}
		}
		if (i < expectedString.length) {
			inputTextField.text += expectedString.charAt (i);
		}
		inputTextField.type = tmptype;
		Selection.setSelection(i+1, i+1);
	}
	// Give up on the current question and move on . . . PENALTY : +10 seconds
	public function giveup (rg:Object, correctAnswer:Function):Void {
		rg.correctAnswer ();
	}
}