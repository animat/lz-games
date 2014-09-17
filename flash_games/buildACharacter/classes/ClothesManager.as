class ClothesManager {
	//
	var holder:MovieClip;
	var options:Array;
	var clothes:Array;
	//
	public function ClothesManager(holder:MovieClip, options:Array) {
		this.holder = holder.createEmptyMovieClip("clothesHolder", holder.getNextHighestDepth());
		this.holder._y = 25;
		this.options = options;
		clothes = new Array();
		createClothes();
	}
	private function createClothes():Void {
		var xPos:Number = 0;
		var yPos:Number = 0;
		for (var i:Number = 0; i < options.length; i++) {
			var newItem:ClothingItem = new ClothingItem(options[i], holder, this);
			if (i % 3 == 0) {
				xPos = 0;
				yPos += 55;
			} else {
				xPos += 55;
			}
			newItem.setPos(xPos, yPos);
			clothes.push(newItem);
		}
	}
	public function selectClothes(c:ClothingItem):Void {
		trace("you selected "+c.getClip());
	}
}