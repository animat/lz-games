﻿import mx.utils.Delegate;//class Fatbug extends Lemming {		public function Fatbug(man:LemmingManager, index:Number) {		super(man, index);		clip = LZGame.getStage().attachMovie("fatbug", "lemming"+index, LZGame.getStage().getNextHighestDepth());		clip._x = 40+random(60);		clip._y = 360 + index;		destination = clip._x;				hp = 2;		speed = 2+random(3);				clip.onEnterFrame = Delegate.create(this, runToDestination);	}	}