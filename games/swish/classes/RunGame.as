﻿import mx.utils.Delegate;import mx.events.EventDispatcher;import flash.external.ExternalInterface;import toolbarcomponent.core.ForeignCharacters;//class RunGame extends LZGame implements gametypes.TranslationGame {	//	private var winFX:MovieClip;	public var hoops:Array;	public var basketball:Basketball;	public var ballShadow:Shadow;	public var displayQ:DisplayQ;	public var scoreCard:ScoreCard;	public var foreignChars:ForeignCharacters;	//	public function RunGame(main:MovieClip) {		super(main);				winFX = main.attachMovie("_applause.mp3", "winFX", main.getNextHighestDepth());		//		hoops = createHoops();		basketball = new Basketball(this);		ballShadow = new Shadow(main, basketball);		displayQ = new DisplayQ(this);		scoreCard = new ScoreCard(main);		//		basketball.getClip().swapDepths(ballShadow.getClip());		basketball.saveDepth(basketball.getClip().getDepth(), "default");		basketball.saveDepth(main.hoops.getDepth(), "swoosh");				foreignChars = new ForeignCharacters (language, main, 200, Stage.height + 30, 200, null);				var keyListener:Object = new Object;		keyListener.onKeyDown = Delegate.create(this, checkInput);		Key.addListener(keyListener);				nextQuestion(false);	}	public function nextQuestion(proceed:Boolean):Void {		if (proceed == "true" || proceed == true) {			questionList.increaseQNum();			displayQ.clearCorrectAnswer();			displayQ.clearAnswerText();			displayQ.endCountdown();		}		if (questionList.getIsValid(questionList.getQNum())) {			refreshQDisplay();		} else {			winGame();		}	}	public function refreshQDisplay(reset:Boolean):Void {		displayQ.setFocusOnA();		displayQ.showUserInput();		setCorrectHoop();		// *** TODO: Change to use Stimulus Display		displayQ.displayQuestion(questionList.getCurrentQ().getStimulus().getContent());	}	//	// Create all of the hoops from the universal options array	public function createHoops():Array {		var newHoops:Array = new Array();		var hoopsHolder:MovieClip = LZGame.getStage().createEmptyMovieClip("hoops", LZGame.getStage().getNextHighestDepth());		for (var i:Number = 0; i < questionList.getOTotal(); i++) {			newHoops.push(new Hoop(hoopsHolder, questionList.getOByIndex(i), i));		}		hoopsHolder._x = (Stage.width - hoopsHolder._width) / 2;		return newHoops;	}	//	// Set which hoop is correct. Search from bottom because hoop is likely in 2nd XML position.	private function setCorrectHoop():Void {		var resps:Array = questionList.getCurrentQ().getResponses();		for (var i:Number = resps.length - 1; i >= 0; i--) {			for (var j:Number = 0; j < hoops.length; j++) {				if (resps[i].getStimulus().equals(hoops[j].getOption().getStimulus())) {					basketball.setCorrectHoop(hoops[j]);					return;				}			}		}	}	public function checkInput():Void {		if (Key.isDown(Key.ENTER)) {			evaluate();		}	}	public function evaluate():Void {		var userResponse:Response = new Response(displayQ.getInputString(), "text");		displayQ.displayFeedback(questionList.getCurrentQ().getResponses()[0].getStimulus().getContent());				if (questionList.getCurrentQ().evaluate(new TypedInput(displayQ.getInputString()))) {			correctAnswer();		} else {			incorrectAnswer();		}	}	public function correctAnswer():Void {		displayQ.displayCorrectAnswer();		displayQ.hideUserInput();		basketball.setClipEnabled(true);		scoreCard.addScore(5);	}	public function incorrectAnswer():Void {		displayQ.playWrongAnswer();	}	public function winGame():Void {		basketball.destroy();		ballShadow.destroy();		for (var i:Number = 0; i < hoops.length; i++) {			hoops[i].destroy();		}		main.gotoAndPlay("congrats");		winFX.gotoAndPlay(2);		displayQ.hideTimer();		scoreCard.focusScore();	}	public function getScore():String {		return String(scoreCard.getScore());	}		public function runMoveToEnd ():Void {		movetoend ();		refreshQDisplay (true);	}	public function runGiveUp ():Void {		//timer.addSeconds(10);		giveup (this, correctAnswer);		displayQ.setCorrectAnswerText(questionList.getCurrentQ().getResponses()[0].getStimulus().getContent());	}	public function runNextLetter ():Void {		//timer.addSeconds(3);		nextLetter (displayQ.input_textField);	}	}