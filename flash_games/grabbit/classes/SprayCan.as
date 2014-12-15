import mx.utils.Delegate;

class SprayCan {
	
	private var clip:MovieClip;
	
	public function SprayCan() {
		trace("spray can is here!");
		clip = LZGame.getStage().attachMovie("spraycan", "spraycan", LZGame.getStage().getNextHighestDepth());
		clip._xscale = 50;
		clip._yscale = 50;
		Mouse.hide();
		clip.onEnterFrame = Delegate.create(this, chaseMouse);
		clip.onPress = Delegate.create(this, spray);
	}
	
	private function spray():Void {
		trace("spraying!");
		clip.gotoAndPlay("spray");
	}
	
	private function chaseMouse():Void {
		clip._x = _root._xmouse;
		clip._y = _root._ymouse;
	}
}