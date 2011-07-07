import mx.transitions.Tween;
//
class PointBubble {
	private var clip:MovieClip;
	private var popped:Boolean;
	private var startX:Number;
	private var startY:Number;
	private var tweenX:Tween;
	private var tweenAlpha:Tween;
	//
	public function PointBubble(pointsHolder:MovieClip, index:Number, xPos:Number, yPos:Number) {
		clip = pointsHolder.attachMovie("point", "point"+index, pointsHolder.getNextHighestDepth());
		startX = xPos;
		startY = yPos;
		clip._x = startX;
		clip._y = startY;
		clip.gotoAndPlay("fadeIn");
		popped = false;
	}
	public function popPoint():Void {
		if (!popped) {
			popped = true;
			clip.gotoAndPlay("fadeOut");
		}
	}
	public function slideAndFade():Void {
		tweenX = new Tween(clip, "_x", mx.transitions.easing.Bounce.easeOut, clip._x, -72, 1 + Math.random() * 2, true);
		tweenAlpha = new Tween(clip, "_alpha", mx.transitions.easing.Regular.easeOut, 100, 0, 2, true);
	}
	public function resetPoint():Void {
		tweenX = null;
		tweenAlpha = null;
		popped = false;
		clip._y = startY;
		clip._x = startX;
		clip._alpha = 100;
		clip._visible = true;
	    clip.gotoAndPlay("fadeIn");
	}
	//
	public function isPopped():Boolean {
		return popped;
	}
}
