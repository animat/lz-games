﻿import mx.transitions.Tween;//class Score {	private var pointsAvailable:Number;	private var maxPointsAvailable:Number;	private var currentScore:Number;	private var clip:MovieClip;	//	public function Score(maxPointsAvailable:Number) {		clip = LZGame.getStage().pointsBubbleBG;		currentScore = 0;		pointsAvailable = maxPointsAvailable;		this.maxPointsAvailable = maxPointsAvailable;	}	public function addAvailablePoints():Void {		currentScore += pointsAvailable;		pointsAvailable = maxPointsAvailable;	}	public function increaseBubbleBG():Void {		new Tween(clip, "_xscale", mx.transitions.easing.Elastic.easeOut, clip._xscale, clip._xscale + 50, .3, true);		new Tween(clip, "_yscale", mx.transitions.easing.Elastic.easeOut, clip._yscale, clip._yscale + 50, .3, true);		currentScore++;		LZGame.getStage().totalPoints = String(getCurrentScore());	}	public function bounceBubbleBG():Void {		new Tween(clip, "_xscale", mx.transitions.easing.Elastic.easeOut, clip._xscale, 422, 2, true);		new Tween(clip, "_yscale", mx.transitions.easing.Elastic.easeOut, clip._yscale, 422, 2, true);	}	public function decrementPointsAvailable():Void {		pointsAvailable--;	}	public function getCurrentScore():Number{		return currentScore;	}}