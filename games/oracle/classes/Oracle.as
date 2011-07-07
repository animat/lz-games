﻿import mx.utils.Delegate;import mx.transitions.Tween;class Oracle {		private var clip:MovieClip;	private var oracle:MovieClip;	private var speechBubble:MovieClip;	private var qStimDisplay:StimulusDisplay;	private var stim:Stimulus;	private var animWait:Number;		public function Oracle() {		clip = LZGame.getStage().attachMovie("platform", "platform", LZGame.getStage().getNextHighestDepth(), {_x: 485, _y: 70});		oracle = clip.oracle;		speechBubble = clip.attachMovie("speechbubble", "speechbubble", clip.getNextHighestDepth(), {_x: -140, _y: -50});		speechBubble.bubble._xscale = 5;		speechBubble._alpha = 0;	}		public function speak(stim:Stimulus):Void {		if (qStimDisplay != null) {			qStimDisplay.reset();		}		this.stim = stim;				oracle.gotoAndPlay("talk");				speechBubble._alpha = 100;		speechBubble.bubble._alpha = 100;		speechBubble.tail._alpha = 100;		trace("animating bubble");		var twn:Tween = new Tween(speechBubble.bubble, "_xscale", mx.transitions.easing.Elastic.easeOut, 5, 100, 1.5, true);		twn.onMotionFinished = Delegate.create(this, showStim);	}	private function showStim():Void {		trace("showing stim");		qStimDisplay = new StimulusDisplay(clip, "qStimDisplay", stim);		qStimDisplay.setPos(-130, -45);		animWait = setInterval(this, "rest", 3000);	}		public function showHappy():Void {		clip.gotoAndPlay("happy");	}		public function showAngry():Void {		clip.gotoAndPlay("angry");	}		public function rest():Void {		clearInterval(animWait);		oracle.gotoAndStop("static");		speechBubble.tail._visible = false;	}		public function clearSpeechBubble():Void {		if (qStimDisplay != null) {			qStimDisplay.reset();		}		clearInterval(animWait);		oracle.gotoAndStop("static");		new Tween(speechBubble, "_alpha", mx.transitions.easing.Regular.easeOut, speechBubble._alpha, 0, 0.5, true);	}		public function destroy():Void {		removeMovieClip(clip);	}}