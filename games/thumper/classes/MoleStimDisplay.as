﻿import mx.utils.Delegate;import mx.transitions.Tween;import flash.filters.DropShadowFilter;import flash.filters.BevelFilter;class MoleStimDisplay extends StimulusDisplay {	private var rightBoundary:Number;	private var topBoundary:Number;		public function MoleStimDisplay(target:MovieClip, id:String, stim:Stimulus) {		super(target, id, stim);		clip.filters = new Array(			new DropShadowFilter(4, 25, 0x333336, 5, 4, 4, 2, 2, false, false, false),			new BevelFilter(3, 45, 0xE8D4BE, 0.75, 0x5D3938, 0.35, 3, 3, 3, 3, "inner", false)		);	}		private function setDefaultTextFormat():Void {		txtField.autoSize = true;		txtField.selectable = false;		txtField.embedFonts = true;		txtField.setNewTextFormat(new TextFormat("EmbedArial", 12, 0xFFFFFF));	}		private function restrainDimensions():Void {		if (clip._width > maxWidth || clip._height > maxHeight) {			if (clip._width > clip._height) {				clip._width = maxWidth;				clip._yscale = clip._xscale;			} else {				clip._height = maxHeight;				clip._xscale = clip._yscale;			}			origXScale = clip._xscale;			origYScale = clip._yscale;			clip.onRollOver = Delegate.create(this, magnify);			clip.onRollOut = Delegate.create(this, recover);		}		setPos(rightBoundary, topBoundary);	}		public function setPos(xx:Number, yy:Number):Void {		rightBoundary = xx;		topBoundary = yy;				clip._x = xx - clip._width;		if (getStimulusType() == Stimulus.TEXT) {			clip._y = yy + 3;		} else if (getStimulusType() == Stimulus.IMAGE) {			clip._y = yy - 13;		} else {			clip._y = yy;		}	}}