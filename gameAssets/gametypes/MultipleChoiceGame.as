﻿interface gametypes.MultipleChoiceGame {	public function nextQuestion(proceed:Boolean):Void;	public function refreshQDisplay():Void;	public function evaluate(attempt:Object):Boolean;	public function correctAnswer(attempt:Object):Void;	public function incorrectAnswer(attempt:Object):Void;	public function winGame():Void;	public function getScore():String;}