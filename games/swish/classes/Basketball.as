﻿import mx.utils.Delegate;import flash.geom.Point;class Basketball {	//	private var swooshFX:MovieClip;	private var classScope:RunGame;	private var correctHoop:Hoop;	private var clip:MovieClip;	private var radius:Number;	private var dragging:Boolean;	private var free:Boolean;	private var bounced:Boolean;	private var oldPt:Point;	private var newPt:Point;	private var vx:Number;	private var vy:Number;	private var scaler:Number;	private var gravity;	private var elastic;	private var ballDepths:Array;	//	public function Basketball(classScope:RunGame) {		swooshFX = LZGame.getStage().attachMovie("_swoosh.mp3", "swooshFX", LZGame.getStage().getNextHighestDepth());		this.classScope = classScope;		clip = LZGame.getStage().attachMovie("basketball", "basketball", LZGame.getStage().getNextHighestDepth());		clip._x = 285;		clip._y = 350;		//		radius = clip._height / 2;		dragging = false;		clip.enabled = false;		bounced = false;		//		oldPt = new Point(clip._x, clip._y);		newPt = new Point(clip._x, clip._y);		scaler = 100;		gravity = 150;		elastic = .7;		vx = 0;		vy = 0;		//		ballDepths = new Array();		//		clip.onPress = Delegate.create(this, dragClip);		clip.onRelease = Delegate.create(this, releaseClip);		clip.onReleaseOutside = Delegate.create(this, releaseClip);	}	private function dragClip():Void {		if (!(classScope.displayQ.isInputShowing())) {			dragging = true;			free = false;			bounced = false;			clip.startDrag();			clip.onEnterFrame = Delegate.create(this, calculateVelocity);		}	}	private function releaseClip():Void {		clip.stopDrag();		dragging = false;		free = true;		clip.onEnterFrame = Delegate.create(this, fly);	}	private function calculateVelocity():Void {		newPt.x = clip._x;		newPt.y = clip._y;		//		vx = (newPt.x - oldPt.x) * 5;		vy = (newPt.y - oldPt.y) * 5;		//		oldPt.x = newPt.x;		oldPt.y = newPt.y;	}	private function fly():Void {		radius = clip._height / 2;		//		vy += gravity / 10;		newPt.x += vx / 10;		newPt.y += vy / 10;		//		checkBoundaries();		clip._x = newPt.x;		clip._y = newPt.y;		//		resizeClip();		//		checkBasket();	}	private function checkBoundaries():Void {		if (newPt.y < radius) {			newPt.y = radius;			vx = (vx * elastic);			vy = -(vy * elastic);		}		if (newPt.y > getBouncePt()) {			newPt.y = getBouncePt();			vx = (vx * elastic);			vy = -(vy * elastic);			bounced = true;			if (clip.getDepth() != ballDepths["default"]) {				resetBallDepth();			}		}		if (newPt.x < radius - 15) {			newPt.x = radius - 15;			vx = -(vx * elastic);			vy = (vy * elastic);		}		if (newPt.x > (565 - radius)) {			newPt.x = 565 - radius;			vx = -(vx * elastic);			vy = vy * elastic;		}	}	private function resizeClip():Void {		if (bounced) {			if (scaler < 100) {				scaler++;			}		} else {			if (scaler > 75) {				scaler--;			}		}		clip._xscale = scaler;		clip._yscale = scaler;	}	private function checkBasket():Void {		if (vy > 0 && !bounced) {			if(clip.hitTest(correctHoop.getClip().hoop_target) && clip.enabled) {				clip.enabled = false;				vx /= 5;				vy = 15;				newPt.x = clip._x;				oldPt.x = clip._x;				// *** TODO: Make the ball go behind the hoop				setSwooshBallDepth();				correctHoop.getClip().hoop.gotoAndPlay("swoosh");				swooshFX.gotoAndPlay(2);				this.classScope.scoreCard.addScore(3);				classScope.nextQuestion(true);				trace("balls getting checked");			}		}	}	//	public function resetBallDepth():Void {		clip.swapDepths(ballDepths["default"]);	}	public function setSwooshBallDepth():Void {		clip.swapDepths(ballDepths["swoosh"]);	}	public function saveDepth(num:Number, state:String):Void {		ballDepths[state] = num;	}	public function getCorrectHoop():Hoop {		return correctHoop;	}	public function setCorrectHoop(hp:Hoop):Void {		correctHoop = hp;	}	public function getXPos():Number {		return clip._x;	}	public function getYPos():Number {		return clip._y;	}	public function getScaler():Number {		return scaler;	}	public function setClipEnabled(bool:Boolean):Void {		clip.enabled = bool;	}	public function getBouncePt():Number {		return 375 - (300 - scaler  * 3) - radius;	}	public function getClip():MovieClip {		return clip;	}	public function getFree():Boolean {		return free;	}	public function setFree(val:Boolean):Void {		free = val;	}	public function destroy():Void {		clip._visible = false;		delete clip.onEnterFrame;		delete this;	}}