import mx.utils.Delegate;
import mx.transitions.Tween;
import flash.filters.DropShadowFilter;
//
class Magnet {
	//
	private var clip:MovieClip;
	private var bgClip:MovieClip
	private var manager:MagnetManager;
	private var prevMagnet:Magnet;
	private var prevInGroup:Boolean;
	private var nextMagnet:Magnet;
	private var nextInGroup:Boolean;
	private var dragging:Boolean;
	private var str:String;
	private var filtersArray:Array;
	private var textFmt:TextFormat;
	//
	public function Magnet(manager:MagnetManager, holder:MovieClip, index:Number, str:String) {
		this.manager = manager;
		this.str = str;
		prevMagnet = null;
		prevInGroup = false;
		nextMagnet = null;
		nextInGroup = false;
		dragging = false;
		filtersArray = new Array(new DropShadowFilter(5, 30, 0x666666, 30, 2, 2, 2, 2, false, false, false));
		textFmt = new TextFormat("Arial", 16, 0x666666, true);
		clip = holder.createEmptyMovieClip("field"+index, holder.getNextHighestDepth());
		bgClip = clip.attachMovie("magnetBG", "magnetBG", clip.getNextHighestDepth());
		createText();
		bgClip._width = clip.txtfield._width;
		clip.onPress = Delegate.create(this, dragClip);
		clip.onRelease = Delegate.create(this, releaseClip);
		clip.onEnterFrame = Delegate.create(this, chasePrev);
	}
	public function dragClip():Void {
		clip.startDrag();
		dragging = true;
		setClipFilters(filtersArray);
	}
	public function releaseClip():Void {
		clip.stopDrag();
		dragging = false;
		manager.checkIfOverlap(this);
		setClipFilters(new Array());
	}
	public function chasePrev():Void {
		if (!dragging && prevInGroup) {
			clip._x = prevMagnet.getClip()._x + prevMagnet.getClip()._width;
			clip._y = prevMagnet.getClip()._y;
		}
	}
	public function disappearBG():Void {
		new Tween(bgClip, "_alpha", mx.transitions.easing.Regular.easeOut, bgClip._alpha, 0, 2, true);
	}
	public function appearBG():Void {
		if (bgClip == null || bgClip == undefined) {
			bgClip = clip.attachMovie("magnetBG", "magnetBG", clip.getNextHighestDepth());
		}
		bgClip._alpha = 100;
	}
	public function destroy():Void {
		removeMovieClip(bgClip);
		removeMovieClip(clip);
		
		//delete this;
	}
	private function createText():Void {
		var txtfield:TextField = clip.createTextField("txtfield", 10, 0, 0, 0, 0);
		txtfield.text = str;
		txtfield.autoSize = true;
		txtfield.selectable = false;
		txtfield.setTextFormat(textFmt);
	}
	//
	public function setPos(xx:Number, yy:Number):Void {
		clip._x = xx;
		clip._y = yy;
	}
	public function getClip():MovieClip {
		return clip;
	}
	public function getStr():String {
		return str;
	}
	public function getPrevMagnet():Magnet {
		return prevMagnet;
	}
	public function setPrevMagnet(m:Magnet):Void {
		prevMagnet = m;
	}
	public function setPrevInGroup(val:Boolean):Void {
		prevInGroup = val;
	}
	public function getNextMagnet():Magnet {
		return nextMagnet;
	}
	public function isPrevInGroup():Boolean {
		return prevInGroup;
	}
	public function setNextMagnet(m:Magnet):Void {
		nextMagnet = m;
	}
	public function setNextInGroup(val:Boolean):Void {
		nextInGroup = val;
	}
	public function isNextInGroup():Boolean {
		return nextInGroup;
	}
	public function setClipFilters(filt:Array):Void {
		bgClip.filters = filt;
	}
	public function toString():String {
		return "-"+str+"-";
	}
}