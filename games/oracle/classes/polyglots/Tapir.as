﻿import mx.utils.Delegate;//class Tapir extends Lemming {		public function Tapir(man:LemmingManager, index:Number) {		super(man, index);		clip = LZGame.getStage().attachMovie("tapir", "lemming"+index, LZGame.getStage().getNextHighestDepth());		clip._x = 40+random(60);		clip._y = 360 + index;		destination = clip._x;				hp = 5;		speed = 2+random(4);				clip.onEnterFrame = Delegate.create(this, runToDestination);	}	}