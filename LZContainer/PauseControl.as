import mx.utils.Delegate;
import mx.events.EventDispatcher;
import flash.events.*;
/**
 *  @className PauseControl
 *@authorSamit Basak
 * @purposeControlls the pause event and shows the hint and report debug buttons
*/
class PauseControl {
	private var _hintsControl:HintControl;
	private var _mc:MovieClip;
	private var _enable:Boolean;
	private var _isHidden:Boolean;
	private var _rootMc:MovieClip;
	private var _game:Object;
	private var _reportBug:ReportBug;
	private var _availableHints:Array;
	private var _toolbar:MovieClip;
	private var _gameDesc:String;


/**
*Constructor of the class
*@param rootMc MovieCliproot movieClip
*@param hintsControlHintControlControls the hint
*/
	function PauseControl (game:Object, rootMc:MovieClip, toolbar:MovieClip, availableHints:Array, desc:String) {
		_toolbar = toolbar;
		_rootMc = rootMc;
		_gameDesc = desc;
		_game = game;
		_availableHints = availableHints;
		_isHidden = true;
		_mc = _rootMc.attachMovie ("pauseMenu", "pauseMenu", _rootMc.getNextHighestDepth ());
		_hintsControl = new HintControl (_rootMc, _gameDesc);
		_hintsControl.initHints (_game,_availableHints);
		EventDispatcher.initialize (_mc);
		LZContainer.initializeBubbling (_mc);
		_toolbar.pv._rootMc = _rootMc;
		_toolbar.pv._mc = _mc;

		_toolbar.pv.onRelease = Delegate.create (this, helpMeHandle);
		var _listenerObj = new Object ();
		_listenerObj.pause = Delegate.create (this, pauseCallBack);
		_listenerObj.resume = Delegate.create (this, resumeCallBack);
		_listenerObj.reportbug = Delegate.create (this, reportbugCallBack);
		_listenerObj.hint = Delegate.create (this, hintCallBack);
		_listenerObj.hide = Delegate.create (this, hideSubMenu);
		_rootMc.addEventListener ("pause",_listenerObj);
		_rootMc.addEventListener ("resume",_listenerObj);
		_rootMc.addEventListener ("hint",_listenerObj);
		_rootMc.addEventListener ("reportbug",_listenerObj);
		_hintsControl.addEventListener ("hide",_listenerObj);
		_reportBug = new ReportBug (_rootMc);
		_reportBug.addEventListener ("hide",_listenerObj);
		_enable = false;
		initListenerToPause ();
	}
	private function helpMeHandle () {
		//if (_mc.currentFrame != 1) {
		if (!this._enable) {
			_rootMc.dispatchEvent ({type:"pause", bubbles:true});

		} else {
			_rootMc.dispatchEvent ({type:"resume", bubbles:true});
		}
	}
	private function hideSubMenu (evt):Void {
		resumeCallBack ();
		//if (_enable) {

		//_mc.gotoAndPlay ("menu");
		//}
	}
/**
hintCallBack is call back function when ready event occurs
@param  evt Object is the reference of the event generator
*/
	private function hintCallBack (evt) {
		hideAllItems ();
		if (_hintsControl.isHidden) {
			_mc.gotoAndStop ("active");
			_hintsControl.showHints = true;
		} else {
			_hintsControl.showHints = false;
		}
	}
/**
*tobblePause :: toggles the pause menu on screen
*/
	public function togglePause ():Void {
		if (!_enable) {
			_enable = true;
			viewPauseMenu ();
		} else {
			_enable = false;
			hidePauseMenu ();
		}
	}

	private function pauseCallBack (evt) {
		_enable = true;
		_isHidden = true;
		viewPauseMenu ();
	}
	private function resumeCallBack (evt) {
		_hintsControl.showHints = false;
		_reportBug.hideForm ();
		_enable = false;
		_isHidden = false;
		hidePauseMenu ();
	}
/**
* viewPauseMenu : function to show the pause menu
*/
	public function viewPauseMenu ():Void {
		_mc.gotoAndPlay ("menu");
		_game.pauseGame ();
	}
	private function reportbugCallBack (evt) {
		hideAllItems ();
		_mc.gotoAndStop ("active");
		_reportBug.showForm ();
	}
/**
* hidePauseMenu: function to hide the pause menu
*/
	public function hidePauseMenu ():Void {
		hideAllItems ();
		_mc.gotoAndPlay ("hide");
		_game.resumeGame ();
	}
	private function hideAllItems ():Void {
		_hintsControl.showHints = false;
		_reportBug.hideForm ();
		_mc.gotoAndPlay ("menu");
	}
/**
initListenerToPause : function to introdue listenr of the key down

*/
	private function initListenerToPause ():Void {
		var keyListener:Object = new Object ();
		keyListener.onKeyDown = Delegate.create (this, checkInput);
		Key.addListener (keyListener);
	}
/**
*checkInput :function that checks the input and toggles the pause menu
*/
	public function checkInput ():Void {
		if (Key.isDown (Key.ESCAPE)) {
			togglePause ();
			//clearEscInput();
		}
	}
}