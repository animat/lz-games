/**
* ReportBut is the class which is used to report the bug
* @author   Samit Basak
*/

import mx.utils.Delegate;
import mx.controls.TextArea;
import mx.events.EventDispatcher;
class ReportBug extends EventDispatcher{
	private var _containerMc:MovieClip;
	private var _reportMc:MovieClip;
	private var _mcLoader:MovieClipLoader;
	private var _listenerObj:Object;
	private var _sendBtnUI:MovieClip;
	private var _reportTxtUI:TextArea;
	private var _closeBtnUI:MovieClip;
	/**
	* Constructor of the class 
	* @param   containerMc    MovieClip 	this is the container movieClip
	*/
	function ReportBug (containerMc:MovieClip) {
		_containerMc = containerMc;
		_listenerObj = new Object ();
		loadMc ();
	}
	/**
	* loadMc is the function to load the movieClip containing the form
	*/
	public function loadMc ():Void {
		_reportMc = _containerMc.createEmptyMovieClip ("reportMc", _containerMc.getNextHighestDepth ());
		_mcLoader = new MovieClipLoader ();
		_mcLoader.addListener (_listenerObj);
		_mcLoader.loadClip ("../LZContainer/ReportBug.swf",_reportMc);
		_listenerObj.onLoadInit = Delegate.create (this, connectMc);
	}
	
	/**
	* connectMc  function is the function to connect the loaded UI with the code
	* @param 	mc 		MovieClip 	The movieClip which is going to connect with the code
	*/
	private function connectMc (mc:MovieClip):Void {
		hideForm ();
		_sendBtnUI = _reportMc.sendBtn;
		_reportTxtUI = _reportMc.txt;
		_sendBtnUI.onRelease = Delegate.create (this, sendReport);
		_closeBtnUI = _reportMc.closeBtn;
		_closeBtnUI.onRelease = Delegate.create (this, closeReport);
	}
	
	/**
	* hideForm function is used to hide the form 
	*/
	public function hideForm ():Void {
		_reportMc._visible = false;
		_reportTxtUI.text = "";
		
	}
	
	/**
	* showForm   function is to show the report form 
	*/
	public function showForm ():Void {
		_reportMc._visible = true;
		_reportTxtUI.text = "";
	}
	
	/**
	* closeReport function is to close the report 
	*/
	private function closeReport ():Void {
		hideForm ();
		dispatchEvent ({type:"hide"});
	}
	
	/**
	* sendReport function to send the report 
	*/
	private function sendReport ():Void {
		trace (" Debug report is going to send :" + _reportTxtUI.text);
		var bugxml:LoadVars = new LoadVars ();
		var replyxml:XML = new XML ();
		var lz = this;
		bugxml.game_id = _root.game_id;
		bugxml.user_id = _root.user_id;
		bugxml.body = _reportTxtUI.text;
		
		bugxml.sendAndLoad(_root.createBugReport, replyxml, "POST");
		replyxml.onLoad = function(success:Boolean) {
			trace("..."+replyxml.toString()+"...");
			if (success) {
				//lz._submitScoreMc.replyText.text = replyxml.toString ();
				trace("it worked! sent your bug.");
			} else {
				//lz._submitScoreMc.replyText.text = "Server Error:: Failed to write in server ";
				trace("sorry -- there was a problem sending your bug report.");
			}
		}
		closeReport ();
	}
}