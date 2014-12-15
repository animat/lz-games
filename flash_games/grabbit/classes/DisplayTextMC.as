import mx.utils.Delegate;

class DisplayTextMC {
	private var classScope:Object;
	
	private var str:String;
	private var part:String;
	private var newParagraph:Boolean;
	private var wordHolder:MovieClip;
	private var clip:MovieClip;
	private var wNum:Number;
	
	private static var textFormatting:TextFormat = new TextFormat("Comic Sans", 20, 0xFFFFFF, true);
	private static var textShadowFormatting:TextFormat = new TextFormat("Comic Sans", 20, 666666, true);
	
	public function DisplayTextMC(classScope:Object, str:String, part:String, newPara:Boolean, wNum:Number) {
		this.classScope = classScope;
		this.str = str;
		this.part = part;
		newParagraph = newPara;
		this.wNum = wNum;
		wordHolder = classScope.getWordHolder();

		createMC();
		createTextField();
		
		clip.onRollOver = Delegate.create(this, rollOverWord);
		clip.onRollOut = Delegate.create(this, rollOutWord);
		clip.onDragOut = clip.onRollOut;
		clip.onDragOver = clip.onRollOver; 
		clip.onRelease = Delegate.create(this,releaseWord);
	}
	
	private function createMC():Void {
		var depth:Number = wordHolder.getNextHighestDepth();
		clip = wordHolder.createEmptyMovieClip("str_"+wNum, depth);
	}
	
	private function createTextField():Void {
		clip.createTextField("textfield", 1, 0, 0, 0, 0);
		clip.textfield.autoSize = true;
		clip.textfield.setNewTextFormat(textFormatting);
		clip.textfield.text = str;
		clip.createTextField("textShadow", 0, 1, 1, 0, 0);
		clip.textShadow.autoSize = true;
		clip.textShadow.setNewTextFormat(textShadowFormatting);
		clip.textShadow.text = str;
	}

	public function placeMC(xPos:Number, yPos:Number):Void {
		clip._x = xPos;
		clip._y = yPos;
	}
	
	private function rollOverWord():Void {
		clip._y -= 2;
	}
	
	public function rollOutWord():Void {
		clip._y += 2;
	}
	
	private function releaseWord() {
		classScope.gameControl.checkAnswer(wNum);
	}
	
	public function getEngText():String {
		return str;
	}
	public function getPart():String {
		return part;
	}
	public function isNewPara():Boolean {
		return newParagraph;
	}
	public function getClip():MovieClip {
		return clip;
	}
	public function getWidth():Number {
		return clip._width;
	}
	public function getUniqueId() {
		return wNum;
	}
}
