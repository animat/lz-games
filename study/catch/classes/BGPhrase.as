import mx.utils.Delegate;
import mx.transitions.Tween;
class BGPhrase {
	private var clip:MovieClip;
	private var txt:String;
	private var speed:Number;
	
	public function BGPhrase(txt:String, index:Number) {
		this.txt = txt;
		
		clip = LZGame.getStage().createEmptyMovieClip("bgPhrase_"+index, LZGame.getStage().getNextHighestDepth());
		clip.createTextField("txtField", 2, 0, 0, 0, 0);
		clip.txtField.text = txt;
		clip.txtField.autoSize = true;
		clip.txtField.selectable = false;
		clip.txtField.embedFonts = true;
		clip.txtField.setTextFormat(new TextFormat("EmbedArial", 36, 0x9D9D9D));
		
		clip._x = 600;
		clip._y = 15 + Math.round(Math.random() * 250);
		
		var rndm:Number = Math.round(Math.random() * 90);
		if (rndm < 30) {
			speed = 1;
			clip._xscale = 50;
			clip._yscale = 50;
			clip._alpha = 30;
		} else if (rndm < 60) {
			speed = 1.5;
			clip._xscale = 60;
			clip._yscale = 60;
			clip._alpha = 45;
		} else {
			speed = 2;
			clip._xscale = 70;
			clip._yscale = 70;
			clip._alpha = 60;
		}
		
		clip.onEnterFrame = Delegate.create(this, fly);
	}
	
	private function fly():Void {
		clip._x -= speed;
		if (clip._x < -clip._width) {
			destroy();
		}
	}
	
	public function destroy():Void {
		removeMovieClip(clip);
		delete clip.onEnterFrame;
		delete this;
	}
}