class Score {
	
	private var score:Number;
	private var clip:MovieClip;
	
	public function Score() {
		score = 0;
		clip = LZGame.getStage().attachMovie("score", "score", LZGame.getStage().getNextHighestDepth(), {_x: 500, _y: 250});
		clip.score.text = 0;
	}
	
	public function addToScore(val:Number):Void {
		score += val;
		clip.score.text = score;
	}
	
	public function getScore():Number {
		return score;
	}
	
	public function destroy():Void {
		clip.removeMovieClip();
	}
	
}