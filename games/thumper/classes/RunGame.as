<<<<<<< HEAD
﻿import mx.utils.Delegate;//class RunGame extends LZGame implements gametypes.MatchingGame {	//	private var moleManager:MoleManager;	public var mallet:MovieClip;	private var correctHits:Number;	private var totalHits:Number;	private var qStimDisplay:StimulusDisplay;	//	public function RunGame(main:MovieClip) {		super(main);		LZGame.setInstance(this);		//		moleManager = new MoleManager(questionList.getQArray());		mallet = LZGame.getStage().attachMovie("mallet", "mallet", LZGame.getStage().getNextHighestDepth());		mallet.onEnterFrame = Delegate.create(this, chaseMouse);		Mouse.hide();		//		correctHits = 0;		totalHits = 0;		//		nextQuestion(false);	}	public function nextQuestion(proceed:Boolean):Void {		if (proceed) {			questionList.increaseQNum();		}		if (questionList.getQuestionsLeft() == 0) {			winGame();			return;		}		refreshQDisplay();	}	public function refreshQDisplay():Void {		if (qStimDisplay != null) {			qStimDisplay.reset();		}		qStimDisplay = new StimulusDisplay(LZGame.getStage(), "qStimDisplay", questionList.getCurrentQ().getStimulus());		qStimDisplay.setPos(200, 20);	}	public function evaluate(attempt:Object):Void {		mallet.gotoAndPlay("hit");		if (questionList.getCurrentQ().evaluate(new ClickedOptionInput(attempt))) {			correctAnswer();			attempt.strikeDown();		} else {			incorrectAnswer();			attempt.strikeBounce();		}	}	public function correctAnswer():Void {		correctHits++;		totalHits++;		LZGame.getStage().correctHits.score = correctHits;		LZGame.getStage().totalHits.score = totalHits;		LZGame.getStage().correctHits.gotoAndPlay("increment");		nextQuestion(true);	}	public function incorrectAnswer():Void {		totalHits++;		LZGame.getStage().totalHits.score = totalHits;		LZGame.getStage().totalHits.gotoAndPlay("increment");		trace("total hits :: "+totalHits+" :: "+LZGame.getStage().totalHits);	}	public function winGame():Void {		trace("congrats! you won the game.");		qStimDisplay.reset();		removeMovieClip(mallet);		Mouse.show();		moleManager.destroy();		LZGame.getStage().gotoAndPlay("win");	}	public function getScore():String {		return "";	}		public function pauseGame():Void {			}	public function resumeGame():Void {			}		public function chaseMouse():Void {		mallet._x = _root._xmouse;		mallet._y = _root._ymouse;	}}
=======
﻿import mx.utils.Delegate;//class RunGame extends LZGame implements gametypes.MatchingGame {	//	private var moleManager:MoleManager;	public var mallet:MovieClip;	private var correctHits:Number;	private var totalHits:Number;	private var qStimDisplay:StimulusDisplay;	//	public function RunGame(main:MovieClip) {		super(main);		LZGame.setInstance(this);		//		moleManager = new MoleManager(questionList.getQArray());		mallet = LZGame.getStage().attachMovie("mallet", "mallet", LZGame.getStage().getNextHighestDepth());		mallet.onEnterFrame = Delegate.create(this, chaseMouse);		Mouse.hide();		//		correctHits = 0;		totalHits = 0;		//		nextQuestion(false);	}	public function nextQuestion(proceed:Boolean):Void {		if (proceed) {			questionList.increaseQNum();		}		if (questionList.getQuestionsLeft() == 0) {			winGame();			return;		}		refreshQDisplay();	}	public function refreshQDisplay():Void {		if (qStimDisplay != null) {			qStimDisplay.reset();		}		qStimDisplay = new StimulusDisplay(LZGame.getStage(), "qStimDisplay", questionList.getCurrentQ().getStimulus());		qStimDisplay.setPos(200, 20);	}	public function evaluate(attempt:Object):Void {		mallet.gotoAndPlay("hit");		if (questionList.getCurrentQ().evaluate(new ClickedOptionInput(attempt))) {			correctAnswer();			attempt.strikeDown();		} else {			incorrectAnswer();			attempt.strikeBounce();		}	}	public function correctAnswer():Void {		correctHits++;		totalHits++;		LZGame.getStage().correctHits.score = correctHits;		LZGame.getStage().totalHits.score = totalHits;		LZGame.getStage().correctHits.gotoAndPlay("increment");		nextQuestion(true);	}	public function incorrectAnswer():Void {		totalHits++;		LZGame.getStage().totalHits.score = totalHits;		LZGame.getStage().totalHits.gotoAndPlay("increment");	}	public function winGame():Void {		qStimDisplay.reset();		removeMovieClip(mallet);		Mouse.show();		moleManager.destroy();		LZGame.getStage().gotoAndPlay("win");	}	public function getScore():String {		return "";	}			public function chaseMouse():Void {		mallet._x = _root._xmouse;		mallet._y = _root._ymouse;	}}
>>>>>>> A few more changes before adding in Colin's work
