﻿interface gametypes.SentenceGame {	public function nextQuestion(proceed:Boolean):Void;	public function evaluate(attempt:Object):Void;	public function correctAnswer(attempt:Object):Void;	public function incorrectAnswer(attempt:Object):Void;	public function winGame():Void;	public function getScore():String;}