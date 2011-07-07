﻿import mx.utils.Delegate;//class RunGame extends LZGame implements gametypes.MatchingGame {	private var answerDisplay:AnswerDisplay;	private var balloonManager:BalloonManager;	private var letterNum:Number;	private var textFmt:TextFormat;	private var stimDisplay:StimulusDisplay;	//	private var correctFX:MovieClip;	private var incorrectFX:MovieClip;	private var nextQuestionFX:MovieClip;	//	public function RunGame(main:MovieClip) {		super(main);		//		balloonManager = new BalloonManager(this);		letterNum = 0;		textFmt = new TextFormat("Arial", 16, 0x000000, true);		//		correctFX = main.attachMovie("_correct.mp3", "correctFX", main.getNextHighestDepth());		incorrectFX = main.attachMovie("_incorrect.mp3", "incorrectFX", main.getNextHighestDepth());		nextQuestionFX = main.attachMovie("_nextQuestion.mp3", "nextQuesitonFX", main.getNextHighestDepth());		//		nextQuestion(false);	}	public function nextQuestion(proceed:Boolean):Void {		if (proceed) {			for (var i:Number = 0; i < letterNum; i++) {				delete main.balloonHolder["balloon_"+i].moveBalloon;			}			balloonManager.destroyAllBalloons();			letterNum = 0;			questionList.increaseQNum();		}		trace("question left :: "+questionList.getQuestionsLeft());		if (questionList.getQuestionsLeft() == 0) {			winGame();			trace("you did it! you won!");			return;		}		refreshQDisplay();	}	public function refreshQDisplay():Void {		var newQuestion:Question = questionList.getCurrentQ();		letterNum = newQuestion.getResponses()[0].getStimulus().getContent().length;		balloonManager.createBalloons(newQuestion.getResponses()[0].getStimulus().getContent());		answerDisplay = new AnswerDisplay(this, newQuestion);				if (stimDisplay != null) {			stimDisplay.reset();		}		stimDisplay = new SplatDisplay(main, "stimDisplay", newQuestion.getStimulus());		stimDisplay.setDim(50, 50);		stimDisplay.setPos(70, 30);	}	public function evaluate(attempt:Object):Void {		// If dragged letter lands on the answer area		if (attempt.getClip().hitTest(main.answerHolder)) {			// Search through each of the letters in the answer			for (var i:Number = 0; i < questionList.getCurrentQ().getResponses()[0].getStimulus().getContent().length; i++) {				var letterDroppedOn:MovieClip = main.answerHolder["letter_"+i];				// Check if the letter is dropped in the right place				if (attempt.getClip().hitTest(letterDroppedOn)) {					if (attempt.getClip().txtfield.text == letterDroppedOn.textfield.text && letterDroppedOn.textfield._visible == false) {						letterDroppedOn.textfield._visible = true;						attempt.destroy();						correctAnswer();						return;					}				}			}		}		incorrectAnswer();	}	public function correctAnswer():Void {		answerDisplay.decreaseLettersLeft();		if (answerDisplay.wordIsFinished()) {			writeCorrectAnswer();			nextQuestionFX.gotoAndPlay(2);			nextQuestion(true);		} else {			trace("trying to play correct FX!");			correctFX.gotoAndPlay(2);		}	}	private function writeCorrectAnswer():Void {		var num:Number = questionList.getQNum();		var depth:Number = 800 + num;		main.createTextField("correctAnswer_"+num, depth, 1, 1, 100, 20);		var correctText:TextField = main["correctAnswer_"+num];		correctText.autoSize = true;		correctText.selectable = false;		correctText.setNewTextFormat(textFmt);		correctText._x = 0;		correctText._y = 100 + (20 * num);		correctText.text = questionList.getCurrentQ().getResponses()[0].getStimulus().getContent();		correctText.align = "center";		var whiteBG:MovieClip = main.attachMovie("whiteBG", "whiteBG_" + num, depth-100, {_x: correctText._x , _y: correctText._y, _width:correctText._width, _height:correctText._height, _alpha:20});		trace("thats correct!");	}	public function incorrectAnswer():Void {		incorrectFX.gotoAndPlay(2);	}	public function winGame():Void {		main.gotoAndStop("win");		removeMovieClip(main.answerHolder);	}	public function getScore():String {		return "";	}		public function pauseGame():Void {		balloonManager.pauseBalloons();	}	public function resumeGame():Void {		balloonManager.resumeBalloons();	}	public function runMoveToEnd():Void {		movetoend();		for (var i:Number = 0; i < letterNum; i++) {			delete main.balloonHolder["balloon_"+i].moveBalloon;		}		balloonManager.destroyAllBalloons();		letterNum = 0;		refreshQDisplay();	}	public function runGiveUp():Void {		while (answerDisplay.getLettersLeft() > 1) {			answerDisplay.decreaseLettersLeft();		}		correctAnswer();		// penalty	}}