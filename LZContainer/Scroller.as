/**
* Scroller is the class to scroll any movieClip using the scroller movieClip
* @author    Samit Basak
*/
class Scroller{
	private var _mc:MovieClip;
	private var _sc:MovieClip;
	private var _scrollbar:MovieClip;
	private var _scrollbtn:MovieClip;
	private var _pressed:Boolean = false;
	private var scroller:Object;
	/**
	* Constructor of the Scroller
	*/
	function Scroller(mc:MovieClip, sc:MovieClip){
		_mc = mc;
		_sc = sc;
		_scrollbar = _sc.bar;
		_scrollbtn = _sc.btn;
		_sc.btn.onPress = function (){
			_pressed = true;
			startDrag(this,false,this._parent.bar._x,this._parent.bar._y, 0, this._parent.bar._height-this._height);
		}
		_sc.btn.onRelease = _sc.btn.onReleaseOutside =  function (){
			this.stopDrag();
			_pressed = false;
		}
		_sc.btn.scroller = this;
		_sc.btn.onMouseMove = moveFunction;
	}
	/**
	* moveFunction is the handler whent he scroller is moved to scroll the movieClip
	*/
	private function moveFunction ():Void{
			if (_pressed){
				var f = (scroller._mc._height-scroller._scrollbar._height)/(scroller._scrollbar._height-scroller._scrollbtn._height);
				scroller._mc._y =  scroller._sc._y- scroller._scrollbtn._y* f;
			}
	}

}