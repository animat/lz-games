import mx.utils.Delegate;
import mx.transitions.Tween;
//
class MagnetManager {
	//
	private var classScope:RunGame;
	private var magnets:Array;
	private var holder:MovieClip;
	private var snapFX:MovieClip;
	private var whishFX:MovieClip;
	//
	public function MagnetManager(classScope:RunGame, question:Question) {
		this.classScope = classScope;
		magnets = new Array();
		holder = LZGame.getStage().createEmptyMovieClip("magnetHolder", LZGame.getStage().getNextHighestDepth());
		holder._x = 100;
		holder._y = 90;
		snapFX = LZGame.getStage().attachMovie("_snap.mp3", "snapFX", LZGame.getStage().getNextHighestDepth());
		whishFX = LZGame.getStage().attachMovie("_whish.mp3", "whishFX", LZGame.getStage().getNextHighestDepth());
	}
	public function createMagnets(question:Question):Void {
		var fields:Array = createFields(question);
		for (var i:Number = 0; i < fields.length; i++) {
			magnets.push(new Magnet(this, holder, i, fields[i]));
		}
		setNextAndPrevMagnet();
		placeMagnets();
	}
	public function setNextAndPrevMagnet():Void {
		var prevMagnet:Magnet = null;
		var nextMagnet:Magnet = null;
		for (var i:Number = 0; i < magnets.length; i++) {
			prevMagnet = (i > 0) ? magnets[i - 1] : null;
			nextMagnet = (i < magnets.length - 1) ? magnets[i + 1] : null;
			magnets[i].setPrevMagnet(prevMagnet);
			magnets[i].setNextMagnet(nextMagnet);
		}
	}
	public function placeMagnets():Void {
		var rndmX:Number = 0;
		var rndmY:Number = 0;
		for (var i:Number = 0; i < magnets.length; i++) {
			rndmX = Math.floor(Math.random() * 350);
			rndmY = Math.floor(Math.random() * 280);
			magnets[i].setPos(rndmX, rndmY);
		}
	}
	public function checkIfOverlap(dropped:Magnet):Void {
		for (var i:Number = 0; i < magnets.length; i++) {
			if ((dropped.getClip().hitTest(magnets[i].getClip())) && (dropped != magnets[i])) {
				checkIfAdjacent(magnets[i], dropped);
				return;
			}
		}
	}
	public function checkIfAdjacent(target:Magnet, dropped:Magnet):Void {
		if (dropped.getNextMagnet() == target) {
			dropped.setNextInGroup(true);
			dropped.setPos(target.getClip()._x - dropped.getClip()._width, target.getClip()._y);
			target.setPrevInGroup(true);
			snapFX.gotoAndPlay(2);
		} else {
			dropped.setNextInGroup(false);
		}
		if (dropped.getPrevMagnet() == target) {
			dropped.setPrevInGroup(true);
			target.setNextInGroup(true);
			snapFX.gotoAndPlay(2);
		} else {
			dropped.setPrevInGroup(false);
		}
		classScope.evaluate();
	}
	public function destroyAllMagnets():Void {
		for (var i:Number = 0; i < magnets.length; i++) {
			magnets[i].destroy();
			magnets[i] = null;
		}
		magnets = new Array();
	}
	public function disappearAllMagnetsBG():Void {
		for (var i:Number = 0; i < magnets.length; i++) {
			magnets[i].disappearBG();
		}
	}
	public function raiseMagnetsToTop():Void {
		whishFX.gotoAndPlay(2);
		var mc:MovieClip = magnets[0].getClip();
		var twn:Tween = new Tween(mc, "_y", mx.transitions.easing.Regular.easeOut, mc._y, 0, 1, true);
		var twn:Tween = new Tween(mc, "_x", mx.transitions.easing.Regular.easeOut, mc._x, 60, 1, true);
	}
	private function createFields(question:Question):Array {
		var str:String = question.getResponses()[0].getStimulus().getContent();
		var delim:String = (str.indexOf(" ", 0) == -1) ? "" : " ";
		return str.split(delim);
	}
	//
	public function isOneGroup():Boolean {
		for (var i:Number = 1; i < magnets.length; i++) {
			if (!magnets[i].isPrevInGroup()) {
				return false;
			}
		}
		return true;
	}
}