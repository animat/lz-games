﻿class tools.Engine {	private var engineClip:MovieClip;	public function Engine(engineClip:MovieClip, dir:Number) {		this.engineClip = engineClip;		engineClip.vx = engineClip.vy = 0;				engineClip.dir = dir;		engineClip.speed = 3 * dir; // Set speed to go left or right		engineClip.friction = .8;		engineClip.k = 0.15;				engineClip.counter = 0;		engineClip.counterPause = 50;				engineClip.dragging = engineClip.reset = false;				engineClip.onPress = function() {			startDrag(this);			this.dragging = true;			this.reset = false;			this.initX = this._x;			this.initY = this._y;		};				engineClip.onRelease = function() {			stopDrag();			this.dragging = false;			this.reset = true;			var correctAnswer:Boolean = _global.accessCheckAnswer.isCorrect(this);			if (correctAnswer) {				trace("Engine :: "+this);				this.play();				this.initX = this._x;				this.initY = this._y;			} else {				trace("Engine :: Awww... try again.");				//this.reset = true;			}		};				engineClip.onReleaseOutside = engineClip.onRelease;		engineClip.onEnterFrame = function() {			this.initX += this.speed;			if (!this.dragging) {				this._x += this.speed;				//    Wrap the ducks around the screen...				// For ducks going to the right				if (dir == 1) {					if (this._x>=Stage.width && !this.reset) {						this._x = this.initX=(0-_global.topRowDiff);					}					// For ducks going to the left				} else {					if (this._x<=0-this._width && !this.reset) {						this._x = this.initX=(Stage.width+_global.bottomRowDiff);					}				}			}			if (this.reset) {				this.counter++;				this.enabled = false;				this.ax = (this.initX-this._x)*this.k;				this.ay = (this.initY-this._y)*this.k;				this.vx += this.ax;				this.vy += this.ay;				this.vx *= this.friction;				this.vy *= this.friction;				this._x += this.vx;				this._y += this.vy;				if (this.counter>this.counterPause) {					this.counter = 0;					this.enabled = true;					this.dragging = this.reset=false;				}			}		};	}		public function getEngineClip():MovieClip {		return engineClip;	}}