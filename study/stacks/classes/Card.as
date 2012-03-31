import mx.utils.Delegate;
import mx.transitions.Tween;
import flash.filters.DropShadowFilter;
import flash.geom.Point;
class Card {
	private var clip:MovieClip;
	private var prompt:String;
	private var response:String;
	private var index:Number;
	private var showingPrompt:Boolean;
	private var state:String;
	private var currentPoint:Point;
	private var waitingPoint:Point;
	private var notSurePoint:Point;
	private var notSureLandingPoint:Point;
	private var knowItPoint:Point;
	private var shrinkScale:Number;
	
	public function Card(prompt:String, response:String, index:Number) {
		this.prompt = prompt;
		this.response = response;
		this.index = index;
		state = "WAITING";
		shrinkScale = 20;
		
		currentPoint = new Point(300, 200);
		waitingPoint = new Point(300, 370);
		notSurePoint = new Point(475, 50);
		notSureLandingPoint = new Point(485, 110);
		knowItPoint = new Point(100, 50);

		clip = LZGame.getStage().attachMovie("card", "card_"+index, LZGame.getStage().getNextHighestDepth(), 
					{_x: waitingPoint.x, _y: waitingPoint.y, _xscale: shrinkScale, _yscale: shrinkScale});
		clip.display = prompt;
		showingPrompt = true;
		
		clip.onPress = Delegate.create(this, mousePress);
		clip.onRelease = Delegate.create(this, mouseRelease);
		clip.onReleaseOutside = Delegate.create(this, mouseRelease);
	}
	
	private function mousePress():Void {
		if (state == "CURRENT") {
			if (clip._xmouse > clip.flipBtn._x && clip._xmouse < clip.flipBtn._x + clip.flipBtn._width &&
					clip._ymouse > clip.flipBtn._y && clip._ymouse < clip.flipBtn._y + clip.flipBtn._height) {
				flip();
			} else {
				clip.startDrag(false);
			}
		}
	}
	private function mouseRelease():Void {
		if (state == "WAITING") {
			slideIn();
		} else if (state == "NOTSURE") {
			trace("this one is not sure... going to try slideIn again...");
			slideIn();
		} else if (state == "CURRENT") {
			clip.stopDrag();
			if (clip.hitTest(LZGame.getStage().notSureDropZone) && clip.hitTest(LZGame.getStage().knowItDropZone)) {
				trace("mouseRelease() :: Hit both targets. Doing nothing...");
			} else if (clip.hitTest(LZGame.getStage().knowItDropZone)) {
				LZGame.getInstance().cardManager.knowIt();
			} else if (clip.hitTest(LZGame.getStage().notSureDropZone)) {
				LZGame.getInstance().cardManager.notSure();
			}
		}
	}
	
	public function slideIn():Void {
		new Tween(clip, "_x", mx.transitions.easing.Elastic.easeOut, clip._x, currentPoint.x, 2, true);
		new Tween(clip, "_y", mx.transitions.easing.Elastic.easeOut, clip._y, currentPoint.y, 2, true);
		new Tween(clip, "_xscale", mx.transitions.easing.Elastic.easeOut, clip._xscale, 100, 2, true);
		new Tween(clip, "_yscale", mx.transitions.easing.Elastic.easeOut, clip._yscale, 100, 2, true);
		
		clip.filters = new Array(new DropShadowFilter(3, 45, 0x333333, 0.5, 8, 8, 2, 3, false, false, false));
		clip.display = prompt;
		showingPrompt = true;
		state = "CURRENT";
		LZGame.getInstance().cardManager.setCurrentCard(this);
	}
	
	public function shrinkToStack(stack:String):Void {
		clip.filters = new Array();
		if (stack == "knowIt") {
			new Tween(clip, "_x", mx.transitions.easing.Strong.easeOut, clip._x, knowItPoint.x, 1, true);
			var twn:Tween = new Tween(clip, "_y", mx.transitions.easing.Strong.easeOut, clip._y, knowItPoint.y, 1, true);
			twn.onMotionFinished = Delegate.create(this, dropOntoStack);
			state = "KNOWIT";
		} else if (stack == "notSure") {
			new Tween(clip, "_x", mx.transitions.easing.Strong.easeOut, clip._x, notSureLandingPoint.x, 1, true);
			new Tween(clip, "_y", mx.transitions.easing.Strong.easeOut, clip._y, notSureLandingPoint.y, 1, true);
			new Tween(clip, "_xscale", mx.transitions.easing.Bounce.easeOut, clip._xscale, shrinkScale, 2, true);
			var twn:Tween = new Tween(clip, "_yscale", mx.transitions.easing.Bounce.easeOut, clip._yscale, shrinkScale, 2, true);
			twn.onMotionFinished = Delegate.create(this, slideUnderStack);
			state = "NOTSURE";
		} else {
			trace("Error :: Card :: shrinkToStack :: Unrecognized stack '"+stack+"'.")
		}
	}
	
	private function dropOntoStack():Void {
		new Tween(clip, "_xscale", mx.transitions.easing.Bounce.easeOut, clip._xscale, shrinkScale, 2.5, true);
		var twn:Tween = new Tween(clip, "_yscale", mx.transitions.easing.Bounce.easeOut, clip._yscale, shrinkScale, 2.5, true);
		twn.onMotionFinished = Delegate.create(LZGame.getInstance().cardManager, LZGame.getInstance().cardManager.nextCard);
	}
	
	private function slideUnderStack():Void {
		LZGame.getInstance().cardManager.setCurrentUnderNotSureStack();
		new Tween(clip, "_x", mx.transitions.easing.Strong.easeInOut, clip._x, notSurePoint.x, 2, true);
		var twn:Tween = new Tween(clip, "_y", mx.transitions.easing.Strong.easeInOut, clip._y, notSurePoint.y, 2, true);
		twn.onMotionFinished = Delegate.create(LZGame.getInstance().cardManager, LZGame.getInstance().cardManager.nextCard);
	}
	
	public function flip():Void {
		if (state == "CURRENT") {
			clip.gotoAndPlay("flipping");
			if (showingPrompt) {
				clip.prevDisplay = prompt;
				clip.display = response;
				showingPrompt = false;
			} else {
				clip.prevDisplay = response;
				clip.display = prompt;
				showingPrompt = true;
			}
		}
	}
	
	public function setWaitingOffset(offset:Number):Void {
		waitingPoint = new Point(waitingPoint.x + offset, waitingPoint.y - offset);
		setPos(waitingPoint.x, waitingPoint.y);
	}
	
	public function setNotSureOffset(offset:Number):Void {
		notSurePoint = new Point(notSurePoint.x + offset, notSurePoint.y - offset);
		setPos(notSurePoint.x, notSurePoint.y);
	}
	
	public function setKnowItOffset(offset:Number):Void {
		knowItPoint = new Point(knowItPoint.x + offset, knowItPoint.y - offset);
		setPos(knowItPoint.x, knowItPoint.y);
	}
	
	public function setPos(xx:Number, yy:Number):Void {
		new Tween(clip, "_x", mx.transitions.easing.Regular.easeOut, clip._x, xx, 2, true);
		new Tween(clip, "_y", mx.transitions.easing.Regular.easeOut, clip._y, yy, 2, true);
	}
	
	public function getClip():MovieClip {
		return clip;
	}
	public function getNotSurePoint():Point {
		return notSurePoint;
	}
	
	public function destroy():Void {
		removeMovieClip(clip);
		delete this;
	}
}