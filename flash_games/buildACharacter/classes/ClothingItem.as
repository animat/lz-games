import mx.utils.Delegate;
//
class ClothingItem {
	//
	var clip:MovieClip;
	var btn:MovieClip;
	var option:Option;
	var manager:ClothesManager;
	//
	public function ClothingItem(option:Option, holder:MovieClip, manager:ClothesManager) {
		this.option = option;
		this.manager = manager;
		var picId:Number = Number(option.getStimulus());
		clip = holder.createEmptyMovieClip("ci_" + picId, holder.getNextHighestDepth());
		clip.loadMovie("../media/image/" + picId + ".swf");
		clip._xscale = 25;
		clip._yscale = 25;
		btn = holder.createEmptyMovieClip("ci_" + picId + "_btn", holder.getNextHighestDepth());
		btn._width = clip._width;
		btn._height = clip._height;
		btn.onRelease = Delegate.create(this, selectClothes);
	}
	public function selectClothes():Void {
		manager.selectClothes(this);
	}
	//
	public function setPos(xx:Number, yy:Number):Void {
		clip._x = xx;
		clip._y = yy;
		btn._x = xx;
		btn._y = yy;
	}
	public function getClip():MovieClip {
		return clip;
	}
}