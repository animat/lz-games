﻿import flash.geom.Point;class TreeOptionManager {	private var classScope:RunGame;	private var optionArea:MovieClip;	private var treeOptions:Array;	private var groundCoords:Array;	private var totalCorrect:Number;	//	public function TreeOptionManager(classScope:RunGame, questionList:QuestionList) {		this.classScope = classScope;		this.optionArea = classScope.main.optionArea;		treeOptions = new Array();		groundCoords = new Array(			new Point(350, 240),			new Point(465, 240),			new Point(215, 257),			new Point(369, 266),			new Point(498, 266),			new Point(134, 288),			new Point(263, 288),			new Point(386, 294),			new Point(498, 294),			new Point(150, 316),			new Point(273, 316),			new Point(379, 320),			new Point(488, 320),			new Point(145, 345),			new Point(290, 345),			new Point(407, 348),			new Point(267, 370),			new Point(407, 377)			);		totalCorrect = 0;		createOptionMCs(questionList);		placeOptionMCs();	}	private function createOptionMCs(qList:QuestionList):Void {		var total:Number = Math.min(qList.getQTotal(), 18);		var qArray:Array = qList.getQArray();		var unsortedQArray:Array = new Array();				while(qArray.length > 0) {			var rndm:Number = Math.floor(Math.random() * qArray.length);			var q:Question = qArray[rndm];			qArray.splice(rndm, 1);			unsortedQArray.push(q);		}				for (var i:Number = 0; i < total; i++) {			var clip:MovieClip = LZGame.getStage().createEmptyMovieClip("opt"+i, LZGame.getStage().getNextHighestDepth());			var tmp:TreeOption = new TreeOption(classScope, clip, unsortedQArray[i]);			if (tmp.isCorrect()) {				totalCorrect++;			}			treeOptions.push(tmp);		}	}	private function placeOptionMCs():Void {		for (var i:Number = 0; i < treeOptions.length; i++) {			var rndm:Number = Math.floor(Math.random() * groundCoords.length);			var pt:Point = groundCoords[rndm];			groundCoords.splice(rndm, 1);			treeOptions[i].setStartPos(pt.x, pt.y);		}	}	public function disableClips():Void {		for (var i:Number = 0; i < treeOptions.length; i++) {			treeOptions[i].disableClip();		}	}	public function resetClips():Void {		for (var i:Number = 0; i < treeOptions.length; i++) {			treeOptions[i].resetPos();		}	}	public function removeClips():Void {		for(var i:Number = 0; i < treeOptions.length; i++) {			treeOptions[i].getClip().removeMovieClip();		}	}	public function getTotalCorrectTrees():Number {		return totalCorrect;	}}