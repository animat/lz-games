﻿class BrickManager {	var bricks:Array;	public function BrickManager(questions:Array) {		bricks = new Array();		for (var i:Number = 0; i < questions.length; i++) {			bricks.push(new Brick(questions[i], i));		}		//bricks = bricks.shuffle();		placeBricks();	}		private function placeBricks():Void {		var xx:Number = 50;		var yy:Number = 220;		for (var i:Number = 0; i < bricks.length; i++) {			bricks[i].setPos(xx, yy);			xx += 150;			if (xx > 450) {				xx = 50;				yy += 50;			}		}	}}