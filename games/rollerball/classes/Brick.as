﻿class Brick {	private var clip:MovieClip;	private var question:Question;	private var stimDisplay:BrickStimDisplay;	private var state:String;	public function Brick(question:Question, index:Number) {		clip = LZGame.getStage().attachMovie("brick", "brick_"+index, LZGame.getStage().getNextHighestDepth());		stimDisplay = new BrickStimDisplay(clip, "stimDisplay", question.getStimulus());		stimDisplay.centerInClip();		state = "static";	}		public function setPos(xx:Number, yy:Number):Void {		clip._x = xx;		clip._y = yy;	}		public function setColliding(val:Boolean):Void {		if (val) {			if (state == "static") {				clip.gotoAndStop("highlight");				state = "highlight";			}		} else {			if (state == "highlight") {				clip.gotoAndStop("static");				state = "static";			}		}	}		public function tag():Void {		clip.gotoAndStop("tagged");		state = "tagged";	}		public function getClip():MovieClip {		return clip;	}}