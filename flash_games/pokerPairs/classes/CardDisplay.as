import mx.utils.Delegate;
import mx.transitions.Tween;

class CardDisplay extends StimulusDisplay {
	public function CardDisplay(target:MovieClip, id:String, stim:Stimulus) {
		super(target, id, stim);
	}
	
	private function setDefaultTextFormat():Void {
		txtFmt = new TextFormat("Arial", 12, 0x333333)
		txtField.selectable = false;
		txtField.autoSize = true;
		
		txtField.html = true;
		txtField.multiline = true;
		var str:String = txtField.text;
		var breakCounter:Number = 0;
		var changed:Boolean = false;
		for (var i:Number = 0; i < str.length; i++) {
			breakCounter++;
			if (breakCounter > 9 && str.charAt(i) == " ") {
				var start:String = str.substring(0, i);
				var end:String = str.substring(i, str.length);
				str = start + "<br />" + end;
				breakCounter = 0;
				changed = true;
			}
		}
		if (changed) {
			txtField.text = "";
			txtField.htmlText = str;
		}
		
		txtField.setTextFormat(txtFmt);
	}
	
	private function restrainDimensions():Void {
		if (clip._width > maxWidth || clip._height > maxHeight) {
			if (clip._width > clip._height) {
				clip._width = maxWidth;
				clip._yscale = clip._xscale;
			} else {
				clip._height = maxHeight;
				clip._xscale = clip._yscale;
			}
			origXScale = clip._xscale;
			origYScale = clip._yscale;
			clip.onRollOver = Delegate.create(this, magnify);
			clip.onRollOut = Delegate.create(this, recover);
			clip._visible = !hidden;
		}
		setPos(8, 15);
	}
}