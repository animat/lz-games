/**
Class Name : RunGame
Author : Samit Basak
Purpose : Main controller of the painBucket game
*/
import mx.utils.Delegate;
import flash.geom.ColorTransform;
class RunGame extends LZGame {
	//
	private var caret:Number;
	private var qString:String;
	private var aString:String;
	private var aColor:String;
	private var aImg:String;
	private var canvas:Canvas;
	//
	private var brush:Brush;
	private var splat:MovieClip;
	private var bucketMask:MovieClip;
	private var bucketHolder:MovieClip;
	private var answerHolder:MovieClip;
	private var previousButton:MovieClip;
	private var finishButton:MovieClip;
	private var nextButton:MovieClip;
	private var paddles:Array;
	private var pictures:Array;
	private var boy:Boy;
	private var picturesPath:String;
	private var mode1CurrentPictureIndex:Number;
	private var __activeState:Boolean;
	private var __currentMode:Number;
	/**
	RunGame - constructor of the class
	@param timeline MovieClip 	The main instance of the game
	@return 	none
	*/
	public function RunGame(timeline:MovieClip) {
		super(timeline);
		pictures = new Array();
		caret = 0;
		brush = new Brush(this);
		canvas = new Canvas(this);
		boy = new Boy(this);
		previousButton = main.previousButton;
		nextButton = main.nextButton;
		finishButton = main.finishButton;
		bringPaddles();
		__currentMode = 0;
		mode1CurrentPictureIndex = 0;
		previousButton.onRelease = Delegate.create(this, mode1PreviousPicture);
		nextButton.onRelease = Delegate.create(this, mode1NextPicture);
		finishButton.onRelease = Delegate.create(this, setToMode2);
		mode1PreviousPicture();
		this.activeState = false;
		//trace(questionList.getOByIndex(4)+" group:"+questionList.getOByIndex(4).getAttributes()["image"]);
	}
	/**
	setToMode2 - function is to set the game in mode2 and initiate necessary actions
	@param 	none
	@return 	none
	*/
	private function setToMode2():Void {
		previousButton._visible = false;
		nextButton._visible = false;
		finishButton._visible = false;
		__currentMode = 1;
		nextQuestion(false);
	}
	/**
	activeState is a getter function to return the state of the game
	@param 		none
	@return 	none
	*/
	public function get activeState():Boolean {
		return __activeState;
	}
	/**
	activeStae is a setter function to set the activestae value
	@param 	val 	Boolean
	@reutn 	none
	*/
	public function set activeState(val:Boolean):Void {
		__activeState = val;
	}
	/**
	mode1NextPicture - set the next picture for mode1 of the game
	@param none
	@return none
	*/
	private function mode1NextPicture():Void {
		mode1CurrentPictureIndex<pictures.length-1 ? mode1CurrentPictureIndex++ : pictures.length-1;
		if(mode1CurrentPictureIndex ==pictures.length-1){
		//trace("picutre : name "+pictures[mode1CurrentPictureIndex].name+" file name ="+pictures[mode1CurrentPictureIndex].fileName);
		nextButton._visible = false;
		}else{
		
		previousButton._visible = true;
		}
		canvas.loadPicture(pictures[mode1CurrentPictureIndex].fileName);
	}
	/**
	mode1PreviousPicture - set the previous picture for the mode1 of the game
	@param 	none
	@return none
	*/
	private function mode1PreviousPicture():Void {
		mode1CurrentPictureIndex>0 ? mode1CurrentPictureIndex-- : 0;
		if(mode1CurrentPictureIndex ==0){
			  previousButton._visible = false;
		 }else{
		 
		     nextButton._visible = true;
		} 
		canvas.loadPicture(pictures[mode1CurrentPictureIndex].fileName);
		//trace("picutre : name "+pictures[mode1CurrentPictureIndex].name+" file name ="+pictures[mode1CurrentPictureIndex].fileName);
	}
	/**
	bringPaddles - brings the paddles to the stage
	@param 	none
	@return 	none
	*/
	private function bringPaddles():Void {
		var option:Array = questionList.getOptions();
		var paddleCount:Number = 0;
		var pictureCount:Number = 0;
		for (var i:Number = 0; i<option.length; i++) {
			if (option[i].getOptionGroup() == "Colors") {
				paddleCount++;
				paddles.push(new Paddle(this, paddleCount, Number(option[i].toString()), option[i].getAttributes()["name"]));
				paddles[paddles.length-1].setText;
			}
			if (option[i].getOptionGroup() == "Images") {
				pictureCount++;
				picturesPath = option[i].getGroupAttributes()['path'];
				pictures.push(new Object({name:option[i].getAttributes()["img"], fileName:(picturesPath+"/"+option[i].toString())}));
				paddles[paddles.length-1].setText;
			}
		}
	}
	/**
	setBrushColor - set the brush color
	@param 	val	ColorTransform 	the value of the color to be set
	@param	colorName	name of the color
	@return none
	*/
	public function setBrushColor(val:ColorTransform, colorName:String):Void {
		//trace("brush is dipped"+val);
		brush.color = val;
		brush.colorName = colorName;
	}
	/**
	brushColor - getter function to get the color of the brush
	@param 	none 
	@return ColorTransform  the colorTransform object of the brush
	*/
	public function get brushColor():ColorTransform {
		return brush.color;
	}
	/**
	currentMode - is the getter function to return the current mode of the game
	@param none
	@return the mode of the game
	*/
	public function get currentMode():Number{
		var tmp:Number = __currentMode;
		return tmp;
	}
	/**
	checkAnswer - checks the answer 
	@param 	none
	@return none
	*/
	public function checkAnswer():Void {
		
		if (brush.colorName == aColor or __currentMode == 0) {
			correctAnswer();
		} else {
			incorrectAnswer();
		}
	}
	/**
	nextQuestion - is to select next question
	@param 	proceed Boolean  whether next question to featch or to return the current question
	@return 	none
	*/
	public function nextQuestion(proceed:Boolean):Void {
		if (proceed == true || proceed == undefined) {
			questionList.increaseQNum();
			caret = 0;
			
		}
		// Check if game needs to end   
		if (questionList.getQuestionsLeft() == 0) {
			finishGame();
		}
		// Store current variables   
		qString = questionList.getCurrentQ().getStimulus();
		var answers:Array = questionList.getCurrentQ().getAnswer();
		aImg = answers[0].getStimulus();
		aColor = answers[1].getStimulus();
		var i:Number = 0;
		for (i=0; i<pictures.length; i++) {
			if (pictures[i].name == aImg) {
				canvas.loadPicture(pictures[i].fileName);
			}
		}
		// Set up new displays on screen
		main.questionText.text = (qString == undefined) ? "" : qString;
	}
	/**
	correctAnswer - For correct answers
	@param none
	@reutn none
	*/
	public function correctAnswer():Void {
		boy.correctAnswer();
	}
	/**
	incorrectAnswer -For incorrect attempts
	@param none
	@return none
	*/
	public function incorrectAnswer():Void {
		boy.wrongAnswer();
		
	}

	/**
	 finishGame - No more questions left, finish the game
	 @param 	none
	 @reutn 	none
	 */
	public function finishGame():Void {
		main.gotoAndPlay("congrats");
		main.canvas.questionText.text = "";
		boy.winGame();
	}
	/**
	destroy - destructor of the objects
	@param 	none
	@return none
	*/
	public function destroy():Void{
		brush.destroy();
		canvas.destroy();
		for(var i:Number =0 ;i<paddles.length;i++){
			paddles[paddles.length-1].destroy();
		}
		
	}
}
