import mx.utils.Delegate;
//
class ColorChoice {
	//
	var manager:ColorsManager;
	var clip:MovieClip;
	var colorName:String;
	var hex:Number;
	//
	public function ColorChoice(hex:Number, colorName:String, holder:MovieClip, manager:ColorsManager) {
		this.hex = hex;
		this.colorName = colorName;
		this.manager = manager;
		clip = holder.createEmptyMovieClip("colorName", holder.getNextHighestDepth());
		clip.lineStyle(1, 0x000000, 100);
		clip.beginFill(hex, 100);
		clip.lineTo(20, 0);
		clip.lineTo(20, 20);
		clip.lineTo(0, 20);
		clip.endFill();
		clip.onRelease = Delegate.create(this, selectColor);
	}
	public function selectColor():Void {
		manager.selectColor(this);
	}
	//
	public function setPos(xx:Number, yy:Number):Void {
		clip._x = xx;
		clip._y = yy;
	}
	public function getClip():MovieClip {
		return clip;
	}
	public function getColorName():String {
		return colorName;
	}
	public function getHex():Number {
		return hex;
	}
}