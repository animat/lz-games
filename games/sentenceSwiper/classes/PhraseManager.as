﻿import mx.utils.Delegate;class PhraseManager {	private var phrases:Array;	private var holder:MovieClip;	private var leafClip:MovieClip;	private var currentPhrase:Phrase;		public function PhraseManager() {		holder = RunGame.getStage().createEmptyMovieClip("phraseHolder", RunGame.getStage().getNextHighestDepth());		holder._x = 75;		holder._y = 130;	}		public function createPhrases(arr:Array):Void {		phrases = new Array();		for (var i:Number = 0; i < arr.length; i++) {			var tmp:Phrase = new Phrase(holder, i, arr[i]);			tmp.setLeafClip(leafClip);			phrases.push(tmp);		}		displayPhrases();	}		public function displayPhrases():Void {		var xPos:Number = 0;		var yPos:Number = 0;		for (var i:Number = 0; i < phrases.length; i++) {			phrases[i].setPos(xPos, yPos);			xPos += phrases[i].getClip()._width + 1;		}		// TODO: Align in the center of the wood panel	}		public function beginHighlighting():Void {		for (var i:Number = 0; i < phrases.length; i++) {			phrases[i].beginHighlighting();		}	}		public function setLeafClip(mc:MovieClip):Void {		leafClip = mc;	}		public function getHighlightedPhrase():Phrase {		for (var i:Number = 0; i < phrases.length; i++) {			if (phrases[i].isHighlighted()) {				currentPhrase = phrases[i];				return currentPhrase;			}		}		return null;	}		public function growCurrentPhrase():Void {		currentPhrase.grow();	}		public function reset():Void {		for (var i:Number = 0; i < phrases.length; i++) {			phrases[i].destroy();		}	}	public function destroy():Void {		reset();		holder.removeMovieClip();	}		public function getHolder():MovieClip {		return holder;	}}