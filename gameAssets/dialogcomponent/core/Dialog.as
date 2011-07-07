import mx.utils.Delegate;
import flash.display.BitmapData;
//
class dialogcomponent.core.Dialog extends MovieClip {
	
	static private var listeners:Array = new Array();
	//
	private var background:MovieClip;
	private var shade:MovieClip;
	private var container:MovieClip;
	private var buttons:Array;
	private var textfield:TextField;
	//
	public var onResult:Function;
	
	// constructor
	private function Dialog() {
		this._x = (Stage.width / 2) - (this._width / 2)
		this._y = (Stage.height / 2) - (this._height / 2)
		buttons = new Array();
		this._visible = false;
		container = this.createEmptyMovieClip("container", 1);
	}
	
	// a static instance factory.
	// attaches the movie from the library and returns this stricttyped
	public static function newInstance(target:MovieClip, name:String):Dialog {
		var depth:Number = target.getNextHighestDepth();
		var dialog:Dialog = Dialog(target.attachMovie("Dialog", name, depth));
		return dialog;
	}

	private function handle() {
		// 'this' is the button that called this function
		var _this:MovieClip = this;
		Dialog(_this.scope).hide(_this.label.text);
	};
	
	public function show(btns:Array, text:String, onResult:Function) {
		setShade();
		clearButtons();
		for (var i = 0; i < btns.length; i++) {
			addButton(btns[i]);
		}
		
		enableListeners(false);

		this.onResult = onResult;
		textfield.text = text;
		// put dialog on top of everything
		this.swapDepths(this._parent.getNextHighestDepth());
		this._visible = shade._visible = true;
		
		fade(this, 100);
		fade(shade, 30);
	}
	
	public function hide(result:String) {
		fade(this, 0);
		fade(shade, 0);
		
		enableListeners(true);
		
		if (onResult != null) {
			onResult(result);
		}
	}
	
	private function setShade() {
		shade._width = Stage.width;
		shade._height = Stage.height;
		
		var point:Object = new Object({x:0, y:0});
		_root.localToGlobal(point);
		this.globalToLocal(point);
		shade._x = point.x;
		shade._y = point.y;
	}
	
	private function clearButtons() {
		for (var btn in buttons) {
			buttons[btn].removeMovieClip();
		}
		buttons = new Array();
	}
	
	private function addButton(str:String) {
		var depth:Number = container.getNextHighestDepth();
		var button:MovieClip = container.attachMovie("DialogButton", "btn_" + depth, depth);
		button.label.text = str;
		button._x = button._width * buttons.length + 10 * buttons.length;
		container._x = (background._width / 2) - (container._width / 2);
		container._y = (background._height - container._height) - 5;
		button.scope = this;
		button.onRelease = handle;
		buttons.push(button);
	}
	
	private function fade(mc:MovieClip, target:Number) {
		mc.onEnterFrame = function () {
			this._alpha += (target - this._alpha) / 2;
			if (Math.abs(target - this._alpha) < 5) {
				this._alpha = target;
				this._visible = (target != 0);
				delete this.onEnterFrame;
			}
		}
	}
	
	// enable/disable every listening control
	private function enableListeners(enable:Boolean) {
		for (var listener in listeners) {
			listeners[listener].enabled = enable;
		}
	}
	
	
	//////////////////////////
	// STATIC methods
	//////////////////////////
	
	
	static public function addListener(Obj:Object) {
		removeListener(Obj);
		listeners.push(Obj);
	}
	
	static public function removeListener(Obj:Object) {
		var i:Number = listeners.length;
		while (i--) {
			if (listeners[i] == Obj) {
				listeners.splice(i, 1);
			}
		}
	}
}