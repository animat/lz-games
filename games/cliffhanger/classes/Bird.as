﻿import mx.utils.Delegate;import flash.filters.BlurFilter;//class Bird {	private var classScope:RunGame;	private var clip:MovieClip;	private var branchAttempt:TreeBranch;	private var targetClip:MovieClip;	private var targetY:Number;	private var speed:Number;	private var initSpeed:Number;	private var dir:String;	private var friction:Number;	private var blur:BlurFilter;	private var paused:Boolean;	private var hyperspeedFX:Sound;	//	public function Bird(classScope:RunGame) {		this.classScope = classScope;		clip = LZGame.getStage().attachMovie("bird", "bird", LZGame.getStage().getNextHighestDepth(), {_x:600, _y:240});		speed = initSpeed = 4;		dir = "left";		friction = 5;		blur = new BlurFilter(13, 2, 2);		paused = false;		changeDirection(dir);	}	public function changeDirection(newDir:String):Void {		this.dir = newDir;		if (dir == "left") {			classScope.treeManager.defaultCommitToTreeBranch("left");			clip.onEnterFrame = Delegate.create(this, moveLeft);		} else if (dir == "right") {			classScope.treeManager.defaultCommitToTreeBranch("right");			clip.onEnterFrame = Delegate.create(this, moveRight);			resetSpeed();			clip._x += clip._width + 10;			clip._xscale = -100;			clip.gotoAndPlay("good");		}	}	public function moveLeft():Void {		if (!paused) {			clip._x -= speed;			easeToYPos();			hitTestTargetClip();			if (clip._x <= -20) {				classScope.incorrectAnswer();			}		}	}	public function moveRight():Void {		if (!paused) {			clip._x += speed;			easeToYPos();			hitTestTargetClip();			if (clip._x >= 600) {				classScope.incorrectAnswer();			}		}	}	public function easeToYPos():Void {		clip._y += (targetY - clip._y) / friction;	}	public function hitTestTargetClip():Void {		if (clip.hitTest(targetClip)) {			classScope.evaluate(getBranchAttempt());		}	}	public function goToNest():Void {		moveInHyperspeed(false);		clip.onEnterFrame = Delegate.create(this, goToNestAnim);	}	private function goToNestAnim():Void {		clip._x += (550 - clip._x) / 5;		clip._y += (280 - clip._y) / 5;		clip._alpha -= (clip._alpha - 0) / 5;		if ((550 - clip._x) < 0.5) {			delete clip.onEnterFrame;			removeMovieClip(clip);			classScope.nextQuestion(true);		}	}	public function fall():Void {		moveInHyperspeed(false);		clip.onEnterFrame = Delegate.create(this, fallAnim);	}	private function fallAnim():Void {		clip._y += (425 - clip._y) / 5;		if ((425 - clip._y) < 1) {			delete clip.onEnterFrame;			clip.gotoAndPlay("puff");			TimelineManager.registerClip(clip, this, destroy, []);		}	}	public function commitToTreeBranch(branch:TreeBranch, hyper:Boolean):Void {		branchAttempt = branch;		setTargetY(branch.getTargetY());		setTargetClip(branch.getTargetClip());		moveInHyperspeed(hyper);	}	public function moveInHyperspeed(bool:Boolean):Void {		if (bool) {			var tmp:Array = new Array();			tmp.push(blur);			clip.filters = tmp;			setSpeed(12);			hyperspeedFX.start();		} else {			clip.filters = new Array();		}	}	public function pause():Void {		paused = true;		clip.stop();	}	public function resume():Void {		paused = false;		clip.play();	}	public function destroy():Void {		delete clip.onEnterFrame;		clip.removeMovieClip();		delete this;	}	//	public function setBranchAttempt(brnch:TreeBranch):Void {		branchAttempt = brnch;	}	public function getBranchAttempt():TreeBranch {		return branchAttempt;	}	public function setTargetClip(mc:MovieClip):Void {		targetClip = mc;	}	public function getTargetClip():MovieClip {		return targetClip;	}	public function setTargetY(num:Number):Void {		targetY = num;	}	public function getTargetY():Number {		return targetY;	}	public function setSpeed(num:Number):Void {		speed = num;	}	public function getSpeed():Number {		return speed;	}	public function resetSpeed():Void {		speed = initSpeed;	}	public function setDir(str:String):Void {		dir = str;	}	public function getDir():String {		return dir;	}}