/**
class name :  Boy
developer :  Samit Basak
purpose : To controll animation of the Boy of paintBucket game
*/
class Boy{
	private var classScope:Object;
	private var boyMc:MovieClip;
	/**
	Boy - constructor of the class
	@param 	classScope Object	reference to the main object of the game
	@return no return value
	*/
	public function Boy(classScope:Object){
		this.classScope = classScope;
		boyMc = classScope.main.boy;
	}
	/**
	worngAnswer - wrong answer is the method to show the animation of boy on wrong answer
	@param 	no parameter
	@return no return value
	*/
	public function wrongAnswer(Void):Void{
		classScope.activeState=true;
		TimelineManager.registerClip(boyMc, this, resetActiveState, [true], "sadDone");
		boyMc.gotoAndPlay("sad");
	}
	/**
	resetActiveState - function to reset the active state after completion of animation
	@param 	no parameter
	@return no return value
	*/
	public function resetActiveState():Void{
		boyMc.gotoAndStop("static");
		classScope.activeState=false;
	}
	/**
	correctAnswer - method controlls the animation of the boy on giving correct answer
	@param 	no parameter
	@return no return value
	*/
	public function correctAnswer(Void):Void{
		classScope.activeState=true;
		//trace("classScope.currentMode :"+classScope.currentMode);

		if(classScope.currentMode == 1){
		     TimelineManager.registerClip(boyMc, this, nextQuestion, [true], "smileDone");
		}else{
			 TimelineManager.registerClip(boyMc, this, resetActiveState, [true], "smileDone");
		}
		boyMc.gotoAndPlay("smile");
	}
	/**
	nextQuestion is a function that generate the event for next question
	@param 		none
	@return 	none
	*/
	private function nextQuestion(Void):Void{
		resetActiveState();
		classScope.nextQuestion(true);		
	}
	/**
	winGame - function to control the animation on the wining of the game
	@param 	no parameter
	@return no return value
	*/
	public function winGame(Void):Void{

		classScope.activeState=true;
		TimelineManager.registerClip(boyMc, this, resetActiveState, [true], "jumpDone");
		boyMc.gotoAndPlay("jump");
	}
}