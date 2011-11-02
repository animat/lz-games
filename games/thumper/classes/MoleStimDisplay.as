﻿import mx.utils.Delegate;import mx.transitions.Tween;import flash.filters.DropShadowFilter;import flash.filters.BevelFilter;class MoleStimDisplay extends StimulusDisplay {	private var rightBoundary:Number;	private var topBoundary:Number;	public var clip:MovieClip;	private var textFmt:TextFormat;	private var id:String;	private var moleRef:Mole;		public function MoleStimDisplay(target:MovieClip, id:String, stim:Stimulus, mole:Mole) {		super(target, id, stim);		textFmt = new TextFormat("EmbedArial", 16, 0xFFFFFF);		moleRef = mole;	}		private function createTextDisplay():Void {		txtField = clip.createTextField("txtField", 1, 0, 0, 5, 5);		txtField.text = stim.getContent();		setDefaultTextFormat();	}		private function setDefaultTextFormat():Void {		txtField.autoSize = true;		txtField.selectable = false;		txtField.embedFonts = true;		txtField.setNewTextFormat(textFmt);		txtField.filters = new Array(			new DropShadowFilter(4, 25, 0x333336, 5, 4, 4, 2, 2, false, false, false),			new BevelFilter(3, 45, 0xE8D4BE, 0.75, 0x5D3938, 0.35, 3, 3, 3, 3, "inner", false)		);	}		public function setTextSize(num:Number):Void {		textFmt.size = num;		txtField.setTextFormat(textFmt);	}		public function setDim(wid:Number, hei:Number):Void {		maxWidth = wid;		maxHeight = hei;		restrainDimensions();	}		private function restrainDimensions():Void {		if (clip._width > maxWidth || clip._height > maxHeight) {			if (clip._width > clip._height) {				clip._width = maxWidth;				clip._yscale = clip._xscale;			} else {				clip._height = maxHeight;				clip._xscale = clip._yscale;			}			origXScale = clip._xscale;			origYScale = clip._yscale;		}		setPos(rightBoundary, topBoundary);		moleRef.setMasker();	}		public function setPos(xx:Number, yy:Number):Void {		rightBoundary = xx;		topBoundary = yy;				clip._x = xx - clip._width;		if (getStimulusType() == Stimulus.TEXT) {			clip._y = yy + 3;		} else if (getStimulusType() == Stimulus.IMAGE) {			clip._y = yy - 13;		} else {			clip._y = yy;		}	}		public function getWidth():Number {		if (getStimulusType() == Stimulus.TEXT) {			return txtField.textWidth;		} else if (getStimulusType() == Stimulus.IMAGE) {			return clip._width;		}	}	public function getHeight():Number {		if (getStimulusType() == Stimulus.TEXT) {			return txtField.textHeight;		} else if (getStimulusType() == Stimulus.IMAGE) {			return clip._height;		}	}		public function toString():String {		return "(MoleStimDisplay :: "+clip+" - "+getStimulusType()+" - "+getStimulusContent()+")";	}}