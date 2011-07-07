﻿import mx.utils.Delegate;import mx.transitions.Tween;class BrickStimDisplay extends StimulusDisplay {	private var rightBoundary:Number;	private var topBoundary:Number;		public function BrickStimDisplay(target:MovieClip, id:String, stim:Stimulus) {		super(target, id, stim);	}		private function setDefaultTextFormat():Void {		txtFmt = new TextFormat("Arial", 14, 0xFFFFFF);		txtField.selectable = false;		txtField.autoSize = true;		txtField.setTextFormat(txtFmt);	}		private function restrainDimensions():Void {		if (clip._width > maxWidth || clip._height > maxHeight) {			if (clip._width > clip._height) {				clip._width = maxWidth;				clip._yscale = clip._xscale;			} else {				clip._height = maxHeight;				clip._xscale = clip._yscale;			}			origXScale = clip._xscale;			origYScale = clip._yscale;			clip.onRollOver = Delegate.create(this, magnify);			clip.onRollOut = Delegate.create(this, recover);		}		setPos(rightBoundary, topBoundary);	}		public function setPos(xx:Number, yy:Number):Void {		rightBoundary = xx;		topBoundary = yy;				clip._x = xx - clip._width;		if (getStimulusType() == Stimulus.TEXT) {			clip._y = yy + 3;		} else if (getStimulusType() == Stimulus.IMAGE) {			clip._y = yy - 13;		} else {			clip._y = yy;		}	}	public function centerInClip():Void {		clip._x = (clip._parent._width / 2) - (clip._width / 2);		clip._y = (clip._parent._height / 2) - (clip._height / 2);	}}