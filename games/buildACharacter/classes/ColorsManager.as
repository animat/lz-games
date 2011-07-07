class ColorsManager {
	//
	var holder:MovieClip;
	var colors:Array;
	//
	public function ColorsManager(holder:MovieClip) {
		this.holder = holder.createEmptyMovieClip("colorsHolder", holder.getNextHighestDepth());
		this.holder._x = 10;
		colors = new Array();
		createColors();
	}
	private function createColors():Void {
		colors.push(new ColorChoice(0xFF0000, "red", holder, this));
		colors.push(new ColorChoice(0xFFFF00, "yellow", holder, this));
		colors.push(new ColorChoice(0xFFFFFF, "white", holder, this));
		colors.push(new ColorChoice(0x00000, "black", holder, this));
		colors.push(new ColorChoice(0x00FF00, "green", holder, this));
		colors.push(new ColorChoice(0x0000FF, "blue", holder, this));
		alignColorClips();
	}
	private function alignColorClips():Void {
		var xPos:Number = 0;
		var yPos:Number = 0;
		for (var i:Number = 0; i < colors.length; i++) {
			if (i % 5 == 0) {
				xPos = 0;
				yPos += 25;
			} else {
				xPos += 25;
			}
			colors[i].setPos(xPos, yPos);
		}
	}
	public function selectColor(c:ColorChoice):Void {
		trace("you just selected "+c.getHex());
	}
}