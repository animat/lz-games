import mx.utils.Delegate;
import mx.transitions.Tween;
import flash.filters.DropShadowFilter;
class Phrase {
	private var clip:MovieClip;
	private var prompt:String;
	private var response:String;
	private var index:Number;
	private var speed:Number;
	private var targetX:Number;
	private var targetY:Number;
	private var dragging:Boolean;
	
	public function Phrase(prompt:String, response:String, index:Number) {
		this.prompt = prompt;
		this.response = response;
		this.index = index;
		speed = 3;
		targetX = 0;
		targetY = 0;
		clip = LZGame.getStage().createEmptyMovieClip("phrase_"+index, LZGame.getStage().getNextHighestDepth());
		clip._visible = false;
		clip._y = -200;
		clip.createTextField("txtField", 2, 0, 0, 0, 0);
		clip.txtField.text = response;
		clip.txtField.autoSize = true;
		clip.txtField.selectable = false;
		clip.txtField.embedFonts = true;
		clip.txtField.setTextFormat(new TextFormat("EmbedArial", 36, 0x333333));
		clip.filters = new Array(new DropShadowFilter(4, 45, 0x333333, .35, 4, 4, 2, 2, false, false, false));
		dragging = false;
	}
	
	public function activate():Void {
		targetX = clip._x = 600;
		targetY = clip._y = 15 + Math.round(Math.random() * 250);
		clip._visible = true;
		clip.onEnterFrame = Delegate.create(this, fly);
		clip.onPress = Delegate.create(this, dragMe);
		clip.onRelease = Delegate.create(this, dropMe);
		clip.onReleaseOutside = Delegate.create(this, dropMe);
	}
	
	private function fly():Void {
		if (!dragging) {
			clip._x -= speed;
		}
		if (clip._x < -clip._width) {
			destroy();
		}
	}
	
	private function dragMe():Void {
		dragging = true;
		clip.startDrag(false);
	}
	
	private function dropMe():Void {
		clip.stopDrag();
		LZGame.getInstance().evaluate(this);
	}
	
	public function resetPhrase():Void {
		var twn:Tween = new Tween(clip, "_y", mx.transitions.easing.Elastic.easeOut, clip._y, targetY, 2.5, true);
		twn.onMotionFinished = Delegate.create(this, enableClip);
		clip.enabled = false;
		dragging = false;
	}
	
	private function enableClip():Void {
		clip.enabled = true;
	}
	
	public function fadeOut():Void {
		var twn:Tween = new Tween(clip, "_alpha", mx.transitions.easing.Regular.easeOut, 100, 0, 2, true);
		twn.onMotionFinished = Delegate.create(this, destroy);
	}
	
	public function destroy():Void {
		removeMovieClip(clip);
		delete clip.onEnterFrame;
		delete this;
	}
	
	public function getPrompt():String {
		return prompt;
	}
	public function getClip():MovieClip {
		return clip;
	}
}