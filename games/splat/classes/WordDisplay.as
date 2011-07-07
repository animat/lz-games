﻿class WordDisplay {	private var classScope:Object;	private var currentQuestion:Question;	private var currentQuestionLang:String;	private static var textFormatting = new TextFormat("Arial", 32, 0xFFFFFF, true);	private var holderClip:MovieClip;	//	public function WordDisplay(classScope:Object, currentQuestion:Question) {		this.classScope = classScope;		this.currentQuestion = currentQuestion;		currentQuestionLang = currentQuestion.getAnswer().getStimulus();		holderClip = classScope.main.createEmptyMovieClip("balloonHolder", 100);		holderClip._x = 0;		holderClip._y = 100;		createLetterMCs();	}	private function createLetterMCs():Void {		var orderedDepth:Array = new Array();		var rndmDepth:Array = new Array();		for (var a:Number = 0; a < currentQuestionLang.length; a++) {			orderedDepth[a] = a;		}		while (orderedDepth.length > 0) {			var rndmNum = Math.round(Math.random() * (orderedDepth.length - 1));			rndmDepth.push(orderedDepth[rndmNum]);			orderedDepth.splice(rndmNum, 1);		}					for (var i:Number = 0; i < currentQuestionLang.length; i++) {			if (currentQuestionLang.charAt(i) != " ") {				var newBalloonMC:MovieClip = holderClip.createEmptyMovieClip("balloon_"+i, rndmDepth[i]);				attachBalloon(newBalloonMC, i);				createTextfield(newBalloonMC, currentQuestionLang.charAt(i));				newBalloonMC._x = 300;				newBalloonMC._y = 100;				newBalloonMC._alpha = 70;				newBalloonMC.moveBalloon = new MovementEngine(classScope, newBalloonMC);			}		}	}	private function attachBalloon(balloonClip:MovieClip, index:Number):Void {		balloonClip.attachMovie("balloon_"+random(4), "balloon", 1);	}	private function createTextfield(balloonClip:MovieClip, letter:String):Void {		balloonClip.createTextField("textfield", 0, 10, 0, 0, 0);		balloonClip.textfield.autoSize = true;		balloonClip.textfield.selectable = false;		balloonClip.textfield.setNewTextFormat(textFormatting);		balloonClip.textfield.text = letter;	}}