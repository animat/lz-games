﻿class Response {	private var stimulus:Stimulus;	public function Response(stim:String, stimType:String) {		stimulus = new Stimulus(stim, stimType);	}	public function getStimulus():Stimulus {		return stimulus;	}	public function setStimulus(stim:String, stimType:String):Void {		stimulus = new Stimulus(stim, stimType);	}	public function setStimulusFull(stim:Stimulus):Void {		stimulus = stim;	}	public function toString():String {		return stimulus.toString();	}}