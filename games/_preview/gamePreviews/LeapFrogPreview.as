﻿import mx.utils.Delegate;class LeapFrogPreview extends GamePreview {	//	public function LeapFrogPreview(gameName:String, clip:MovieClip, path:String) {		super(gameName, clip, path);	}	public function playGame():Void {		clearInterval(delay);		clip.gotoAndStop("game");		delay = setInterval(this, "cleanUp", 500);	}	public function cleanUp():Void {		if (clip.runGame != undefined) {			clearInterval(delay);			clip.holder.land_left.land_left_flowers._visible = false;			clip.holder.land_right.land_left_flowers._visible = false;			clip.characterHolder._visible = false;			resizeLillypads();			delay = setInterval(this, "correctAnim", 2500, "incorrectAnim");		}	}	private function resizeLillypads():Void {		var pads:Array = clip.runGame.lillypads;		for (var i:Number = 0; i < pads.length; i++) {			pads[i].scaler = pads[i].scaler / (scaleAmount / 2);			clip.holder["lillypad_"+i]._xscale = pads[i].scaler;			clip.holder["lillypad_"+i]._yscale = pads[i].scaler;		}	}	public function correctAnim(nextFunc:String):Void {		clearInterval(delay);		clip.runGame.correctAnswer();		delay = setInterval(this, nextFunc, 3000, "correctAnim");	}	public function incorrectAnim(nextFunc:String):Void {		clearInterval(delay);		clip.runGame.incorrectAnswer();		delay = setInterval(this, nextFunc, 3000, "finish");	}	public function finish():Void {		clearInterval(delay);		clip.runGame.winGame();	}}