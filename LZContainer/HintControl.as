import flash.external.ExternalInterface;
import mx.utils.Delegate;
import mx.events.EventDispatcher;
/**
* @classname HintControl
* @authorSamit Basak
* @purposepurpose of the class is to control the hints
*/
class HintControl extends EventDispatcher {
	//private var _gameDesc:String;
	private var _rootMc:MovieClip;
	private var _hintsHolder:MovieClip;
	private var _hintsLoader:MovieClipLoader;
	private var _hints:Hints;
	private var _callbackScope:Object;
	private var _callback:Function;
	private var _availableHints:Array;
	private var _active:Boolean;
	private var _gameDesc:String;


/**
* Constructor fo the class
* @param   rootMcMovieClipreference of the root movieClip
* @param gameIdString Game Id
* @param gameNameString Name of the game
*/
	function HintControl (rootMc:MovieClip, desc) {
		_gameDesc = desc;
		_rootMc = rootMc;
		var connection = ExternalInterface.addCallback ("toggleHints", this, toggleHints);
	}
/**
Instantiate and prepare the hints object. Call getHints(hintsHolder) on RunGame when hints.swf has initialized
*/
	public function initHints (callbackScope:Object, availableHints:Array):Void {
		_availableHints = availableHints;
		_callbackScope = callbackScope;
		_hintsHolder = _rootMc.createEmptyMovieClip ("hintsHolder", _rootMc.getNextHighestDepth());
		var hintsLoader = new MovieClipLoader ();
		var hintsListener:Object = new Object ();
		hintsListener.onLoadInit = Delegate.create (this, initHintLoaded);
		hintsLoader.addListener (hintsListener);
		hintsLoader.loadClip ("../LZContainer/hints.swf",_hintsHolder);

	}
/**
initHints :  function to register the callBack when the hint.swf has been loaded
*/
	private function initHintLoaded () {
		_hints = new Hints (_hintsHolder,  _availableHints);
		if (_gameDesc == "") {
			_hintsHolder.descripTxt = "<i>Your teacher did not create a description for this game.</i>";
		} else {
			_hintsHolder.descripTxt = "<b>Your teacher's description for this game:</b><br/>" + _gameDesc;
		}
		var _listenerObj = new Object ();
		_listenerObj.toggleHint = Delegate.create (this, toggleHints);
		_listenerObj.moveToEnd = Delegate.create (_callbackScope, _callbackScope.runMoveToEnd);
		_listenerObj.nextLetter = Delegate.create (_callbackScope, _callbackScope.runNextLetter);
		_listenerObj.giveUp = Delegate.create (_callbackScope, _callbackScope.runGiveUp);
		_hints.addEventListener ("toggleHint",_listenerObj);
		_hints.addEventListener ("moveToEnd",_listenerObj);
		_hints.addEventListener ("nextLetter",_listenerObj);
		_hints.addEventListener ("giveUp",_listenerObj);
	}
/**
toggleHints : use to toggle the hint menu
*/
	public function toggleHints ():Void {
		this.showHints = _hints.isHidden ();
	}
	
	public function get isHidden ():Boolean {
		return _hints.isHidden ();
	}
/**
showHints: used to show the hints
@param  vBooleanvalue to deside if the hints will show
*/
	public function set showHints (v:Boolean):Void {
		if (v) {
			if (this.isHidden) {
				_hints.showHints ();
			}
		} else {
			if (!this.isHidden) {
				_hints.hideHints ();
				dispatchEvent ({type:"hide"});
			}
		}
	}
/**
clearEscInput:
*/
	public function clearEscInput ():Void {
		var currentFocus:String = Selection.getFocus ();
		var pathArray:Array = new Array ();
		pathArray = currentFocus.split (".");
		var currentFocusObject:Object = _rootMc[pathArray[1]];
		for (var i:Number = 2; i < pathArray.length; i++) {
			currentFocusObject = currentFocusObject[pathArray[i]];
		}

		if (currentFocusObject.text != undefined) {
			
			if (currentFocusObject.text.substr (-1, 1) == String.fromCharCode (27)) {
				currentFocusObject.text = currentFocusObject.text.substr (0, currentFocusObject.text.length - 1);
			}
		}
	}
}