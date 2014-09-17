class WordManager {
	
	private var words:Array;
	
	public function WordManager(strs:Array) {
		words = new Array();
		createWords(strs);
	}
	
	private function createWords(strs:Array):Void {
		for (var i:Number = 0; i < strs.length; i++) {
			trace("adding a word! :: "+strs[i]);
		}
	}
	
}