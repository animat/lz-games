﻿import mx.utils.Delegate;//class RunGame extends LZGame implements gametypes.MatchingGame {	//	var brickManager:BrickManager;	//	public function RunGame(main:MovieClip) {		super(main);		setInstance(this);		//		brickManager = new BrickManager(questionList.getQArray()); 		nextQuestion(false);	}	public function nextQuestion(proceed:Boolean):Void {		if (proceed) {			trace("moving on...");		}		trace("questions left :: "+questionList.getQuestionsLeft());		if (questionList.getQuestionsLeft() == 0) {			winGame();			trace("you did it! you won!");			return;		}		refreshQDisplay();	}	public function refreshQDisplay():Void {		trace("refreshing the question display");	}	public function evaluate(attempt:Object):Void {		incorrectAnswer();	}	public function correctAnswer():Void {		trace("thats correct!");	}	public function incorrectAnswer():Void {		trace("sorry, incorrect");	}	public function winGame():Void {		trace("YAY! You win.");		main.gotoAndStop("win");	}}