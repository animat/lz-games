import mx.utils.Delegate;
import mx.transitions.Tween;
import flash.filters.DropShadowFilter;
import flash.geom.Point;
class Card {
	private var clip:MovieClip;
	private var responseClip:MovieClip;
	private var prompt:String;
	private var response:String;
	private var index:Number;
	private var fullClipWidth:Number;
	private var fullResponseClipWidth:Number;
	
	private var states:Array;
	private var notSureFlag:Boolean;
	
	private var currentPoint:Point;
	private var notSurePoint:Point;
	private var notSureLandingPoint:Point;
	private var knowItPoint:Point;
	
	private var xTwn:Tween;
	private var yTwn:Tween;
	private var xScaleTwn:Tween;
	private var yScaleTwn:Tween;
	private var alphaTwn:Tween;
	private var responseYTween:Tween;
	private var responseAlphaTween:Tween;
	private var shrinkScale:Number;
	private var mDown:Boolean;
	
	public function Card(prompt:String, response:String, index:Number) {
		this.prompt = prompt;
		this.response = response;
		this.index = index;
		states.push("WAITING");
		notSureFlag = false;
		shrinkScale = 20;
		
		responseClip = LZGame.getStage().createEmptyMovieClip("card_"+index, LZGame.getStage().getNextHighestDepth());	
		responseClip.createTextField("txtField", 2, 0, 0, 0, 0);
		responseClip.txtField.text = response;
		responseClip.txtField.autoSize = true;
		responseClip.txtField.selectable = false;
		responseClip.txtField.embedFonts = true;
		responseClip.txtField.setTextFormat(new TextFormat("EmbedArial", 36, 0xFF6600));
		
		clip = LZGame.getStage().createEmptyMovieClip("card_"+index, LZGame.getStage().getNextHighestDepth());	
		clip.createTextField("txtField", 2, 0, 0, 0, 0);
		clip.txtField.text = prompt;
		clip.txtField.autoSize = true;
		clip.txtField.selectable = false;
		clip.txtField.embedFonts = true;
		clip.txtField.setTextFormat(new TextFormat("EmbedArial", 36, 0x0000FF));
		
		fullClipWidth = clip._width;
		fullResponseClipWidth = responseClip._width;
		
		currentPoint = new Point(300 - (clip._width / 2), 200);
		notSurePoint = new Point(480, 78);
		knowItPoint = new Point(96, 78);
		
		resetClips();
		mDown = false;
		
		clip.onRollOver = Delegate.create(this, mOver);
		clip.onRollOut = Delegate.create(this, mOut);
		clip.onPress = Delegate.create(this, mousePress);
		clip.onRelease = Delegate.create(this, mouseRelease);
		clip.onReleaseOutside = Delegate.create(this, mouseRelease);
	}
	
	private function mOver():Void {
		clip.filters = new Array(new DropShadowFilter(1, 45, 0x333333, 0.3, 8, 8, 2, 3, false, false, false));
	}
	private function mOut():Void {
		clip.filters = new Array(new DropShadowFilter(2, 45, 0x333333, 0.4, 8, 8, 2, 3, false, false, false));
	}
	private function mousePress():Void {
		responseYTween = new Tween(responseClip, "_y", mx.transitions.easing.Regular.easeOut, responseClip._y, clip._y + clip._height + 5, 2, true);
		responseAlphaTween = new Tween(responseClip, "_alpha", mx.transitions.easing.Regular.easeOut, responseClip._alpha, 100, 2, true);
		mDown = true;
		responseAlphaTween.onMotionFinished = Delegate.create(this, fadeOutResponse);
	}
	private function mouseRelease():Void {
		mDown = false;
		if (responseClip._y > (clip._y + (responseClip._height / 2))) {
			responseYTween = new Tween(responseClip, "_y", mx.transitions.easing.Regular.easeOut, responseClip._y, clip._y, 2, true);
			responseAlphaTween = new Tween(responseClip, "_alpha", mx.transitions.easing.Regular.easeOut, responseClip._alpha, 0, 2, true);
		}
	}
	private function fadeOutResponse():Void {
		if (!mDown) {
			responseYTween = new Tween(responseClip, "_y", mx.transitions.easing.Regular.easeOut, responseClip._y, clip._y, 2, true);
			responseAlphaTween = new Tween(responseClip, "_alpha", mx.transitions.easing.Regular.easeOut, responseClip._alpha, 0, 2, true);
		}
	}
	
	public function resetClips():Void {
		clip._xscale = 100;
		clip._yscale = 100;
		clip._x = 300 - (clip._width / 2);
		clip._y = 600 + clip._height;
		clip._alpha = 0;
		clip.filters = new Array(new DropShadowFilter(2, 45, 0x333333, 0.4, 8, 8, 2, 3, false, false, false));
		
		responseClip._xscale = 100;
		responseClip._yscale = 100;
		responseClip._x = 300 - (responseClip._width / 2);
		responseClip._y = currentPoint.y;
		responseClip._alpha = 0;
		
		clip.enabled = true;
	}
	
	public function slideIn():Void {
		resetClips();
		xTwn = new Tween(clip, "_x", mx.transitions.easing.Elastic.easeOut, clip._x, currentPoint.x, 2, true);
		yTwn = new Tween(clip, "_y", mx.transitions.easing.Elastic.easeOut, clip._y, currentPoint.y, 2, true);
		alphaTwn = new Tween(clip, "_alpha", mx.transitions.easing.Regular.easeOut, 0, 100, 2, true);
		states.push("CURRENT");
	}
	
	public function shrinkToStack(stack:String):Void {
		clip.enabled = false;
		if (stack == "knowIt") {
			xTwn = new Tween(clip, "_x", mx.transitions.easing.Strong.easeOut, clip._x, knowItPoint.x, 1, true);
			yTwn = new Tween(clip, "_y", mx.transitions.easing.Strong.easeOut, clip._y, knowItPoint.y, 1, true);
			xScaleTwn = new Tween(clip, "_xscale", mx.transitions.easing.Regular.easeOut, clip._xscale, shrinkScale, 2, true);
			yScaleTwn = new Tween(clip, "_yscale", mx.transitions.easing.Regular.easeOut, clip._yscale, shrinkScale, 2, true);
			alphaTwn = new Tween(clip, "_alpha", mx.transitions.easing.Regular.easeOut, 100, 0, 2, true);
			states.push("KNOWIT");
		} else if (stack == "notSure") {
			xTwn = new Tween(clip, "_x", mx.transitions.easing.Strong.easeOut, clip._x, notSurePoint.x, 1, true);
			yTwn = new Tween(clip, "_y", mx.transitions.easing.Strong.easeOut, clip._y, notSurePoint.y, 1, true);
			xScaleTwn = new Tween(clip, "_xscale", mx.transitions.easing.Regular.easeOut, clip._xscale, shrinkScale, 2, true);
			yScaleTwn = new Tween(clip, "_yscale", mx.transitions.easing.Regular.easeOut, clip._yscale, shrinkScale, 2, true);
			alphaTwn = new Tween(clip, "_alpha", mx.transitions.easing.Regular.easeOut, 100, 0, 2, true);
			notSureFlag = true;
			states.push("NOTSURE");
		} else {
			trace("Error :: Card :: shrinkToStack :: Unrecognized stack '"+stack+"'.")
		}
	}
	
	public function setPos(xx:Number, yy:Number):Void {
		var rightEdge:Number = xx + (getTotalWidth() / 2);
		var mid:Number = xx + ((rightEdge - xx) / 2);
		var targetClipX:Number = mid - (fullClipWidth / 4);
		var targetResponseClipX:Number = mid - (fullResponseClipWidth / 4);
		xTwn = new Tween(clip, "_x", mx.transitions.easing.Regular.easeOut, clip._x, targetClipX, 2, true);
		yTwn = new Tween(clip, "_y", mx.transitions.easing.Regular.easeOut, clip._y, yy, 2, true);
		responseClip._x = targetResponseClipX;
		responseClip._y = yy;
	}
	
	public function setScaleAndAlpha(scale:Number, alpha:Number):Void {
		xScaleTwn = new Tween(clip, "_xscale", mx.transitions.easing.Regular.easeOut, clip._xscale, scale, 2, true);
		yScaleTwn = new Tween(clip, "_yscale", mx.transitions.easing.Regular.easeOut, clip._yscale, scale, 2, true);
		alphaTwn = new Tween(clip, "_alpha", mx.transitions.easing.Regular.easeOut, clip._alpha, alpha, 2, true);
		responseClip._xscale = scale;
		responseClip._yscale = scale;
	}
	
	public function setColorFromPile():Void {
		if (notSureFlag) {
			clip.txtField.setTextFormat(new TextFormat("EmbedArial", 36, 0xFF0000));
		} else {
			clip.txtField.setTextFormat(new TextFormat("EmbedArial", 36, 0x009900));
		}
	}
	
	public function getClip():MovieClip {
		return clip;
	}
	
	public function getTotalWidth():Number {
		return Math.max(fullClipWidth, fullResponseClipWidth);
	}
	
	public function destroy():Void {
		removeMovieClip(clip);
		delete this;
	}
}