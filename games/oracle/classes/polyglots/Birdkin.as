﻿import mx.utils.Delegate;//class Birdkin extends Lemming  {		public function Birdkin(man:LemmingManager, index:Number) {		super(man, index);		clip = LZGame.getStage().attachMovie("birdkin", "lemming"+index, LZGame.getStage().getNextHighestDepth());		clip._x = 40+random(60);		clip._y = 360 + index;		destination = clip._x;				hp = 4;		speed = 3+random(5);				clip.onEnterFrame = Delegate.create(this, runToDestination);	}	}