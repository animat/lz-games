class ControlPanel {
	private var clip:MovieClip;
	private var deaths:Number;
	public function ControlPanel(clip:MovieClip) {
		this.clip = clip;
		deaths = 0;
	}
	public function activateTurbo():Void {
		clip.turboIndicator.gotoAndPlay("active");
	}
	public function deactivateTurbo():Void {
		clip.turboIndicator.gotoAndStop("inactive");
	}
	public function countDeath(num:Number):Void {
		clip.lives["life"+num].gotoAndPlay("dead");
	}
	public function destroy():Void {
		removeMovieClip(clip);
	}
}