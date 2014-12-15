/**
 * @className	RunGame
 * @author		Samit Basak
 * @purpose 	Main controller of the game class.
*/
import flash.external.ExternalInterface;
//
class RunGame extends LZGame implements gametypes.MatchingGame {
	private var fishtypes:Array;
	private var fish:Array;
	private var stimDisplay:StimulusDisplay;
	private var bucket:Bucket;
	private var __busy:Boolean;
	private var penguin:Penguin;
	
	/**
	Constructor of the RunGame
		@param		main	This is the reffernce of the root movieClip
		@return 			no return value
	*/
	public function RunGame(main:MovieClip) {
		super(main);
		fishtypes = new Array("fish1", "fish2", "fish3");
		penguin = new Penguin(this, main.penguin);
		bucket = new Bucket(this, main.bucket);
		createFish();
		__busy = false;
		//initHints("Fishing", this, getHints);
		//var connection = ExternalInterface.addCallback("toggleHints", this, toggleHints);
		
		questionList.setQNum(0);
		
		refreshQDisplay();
	}
	/*
	createFish function is used to create the fish objects
		@param		no parameter
		@return 	no return value
	*/
	public function createFish():Void {
		fish = new Array();
		var i:Number = 0;
		questionList.setQNum(0);
		
		for (i = 0; i < questionList.getQTotal(); i++) {
			var stim:Stimulus = questionList.getCurrentQ().getResponses()[0].getStimulus();
			var st:Number = 1+Math.round(Math.random()*2);
			var fishObj:Fish = new Fish(this, stim, "fish"+st, main, i);
			fish.push(fishObj);
			questionList.increaseQNum();
		}
	}
	
	/**
	nextQuestion function is used to move to next question
		@param		proceed	 	indicate wheter to move in next question or not
		@return 				no return value
	*/
	public function nextQuestion(proceed:Boolean):Void {
		if (proceed) {
			questionList.increaseQNum();
		}
		refreshQDisplay();
	}
	
	/**
	refreshQdisplay function is used to refresh the state of the game on screen
		@param		no parameter
		@return 	no return value
	*/
	public function refreshQDisplay():Void {
		trace(" refresh display has been called");
		stimDisplay.reset();
		if (questionList.getCurrentQ() != undefined) {
			stimDisplay = new FishingDisplay(main, "fishingDisplay", questionList.getCurrentQ().getStimulus());
			stimDisplay.setPos(305, 15);
			stimDisplay.setDim(50, 50);
			penguin.fishing();
			resetBusy();
		} else {
			setBusy();
			winGame();
		}
	}
	
	/**
	evaluate function is used to evaluate the users option
	@parameter	attempt Object	this is the answer object choose by the user 
	@return 					no return value
	*/
	public function evaluate(attempt:Object):Void {
		var f:Fish = Fish(attempt);
		var resp:Response = new Response();
		resp.setStimulusFull(f.getStimulus());
		if (questionList.getCurrentQ().evaluate(resp)) {
			correctAnswer();
			f.mc._visible = false;
			bucket.putInBucket(f);
		} else {
			incorrectAnswer();
		}
	}
	
	/**
	correctAnswer function is responsible to initiate all the action on correct answer
		@param		no parameter
		@return 	no return value
	*/
	public function correctAnswer():Void {
		penguin.winningAction();

	}
	/**
	incorrectAnswer function is responsible to initate all the action on incorrect answer
		@param		no parameter
		@return 	no return value
	*/
	public function incorrectAnswer():Void {
		penguin.faillingAction();

	}
	
	/**
	setBusy function set the busy state of the game
		@param		no parameter
		@return		no return value
	*/
	public function setBusy():Void {
		if (__busy == false) {
			__busy = true;
		}
	}
	
	/**
	busy is a getter function to return the busy state of the game
		@parameter	no parameter
		@return 	returns the games busy state
	*/
	public function get busy():Boolean {
		var tmp:Boolean = __busy;
		return tmp;
	}
	
	/**
	resetBusy function reset the busy state to make it not busy
		@parameter	no parameter
		@return 	no return value
	*/
	public function resetBusy():Void {
		__busy = false;
	}
	
	/**
	winGame	function responsible to take actions on wining the game
		@parameter	no parameter
		@return 	no return value
	*/
	public function winGame():Void {
		penguin.winTheGame();
		main.gotoAndStop("win");
	}
	/**
	replayGame function is used to restart the game
		@parameter		no parameter
		@return 		no return value
	*/
	public function replayGame():Void {
		main.gotoAndPlay("intro");
	}
	/**
	
	*/
	public function getScore():String{
		return "";
	}
	/**
	destroy function used to delete the object of the class
		@parameter					no parameter
		@return 		boolean 	returns the result in boolean form
	*/
	public function destroy():Boolean {
		return delete (this);
	}
	
	
	//
	public function runMoveToEnd():Void {
		movetoend ();
		refreshQDisplay ();
	}
	public function pauseGame ():Void {
		var i:Number;
		for (i = 0; i < questionList.getQTotal(); i++) {
			fish[i].pauseTween();
		}
	}
	public function resumeGame ():Void {
		var i:Number;
		for (i = 0; i < questionList.getQTotal(); i++) {
			fish[i].resumeTween();
		}
	}
}
