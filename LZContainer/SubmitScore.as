import mx.utils.Delegate;
import mx.controls.TextArea;
/**
* @classname :  SubmitScore
* @authorSamit Basak
* @purpose This class is used to submit the highest score
*/
class SubmitScore {
	private var _containerMc:MovieClip;
	private var _submitScoreMc:MovieClip;
	private var _listenerObj:Object;
	private var _mcLoader:MovieClipLoader;
	private var _sendBtnUI:MovieClip;
	private var _closeBtnUI:MovieClip;
	private var _gameID:String;
	private var _score:Array;
	private var _smc:MovieClip;


/**
* The constructor of the class SubmitScore
* @param containerMccontainer of the application
* @param gamieIDgame id of the particular game currently is being played.
* @return none
*/
	function SubmitScore (containerMc:MovieClip, gameID:String) {
		_gameID = gameID;
		_containerMc = containerMc;
		_listenerObj = new Object ();
		_score = new Array ();
		
		// *** Commented out multiple lines to bypass UI
		//loadMc ();
	}
/**
* Initializes the score of the game
*/
	public function initializeScore ():Void {
		_submitScoreMc.replyText.text = "";
		if (_smc != undefined) {
			_smc.removeMovieClip ();
		}
		_smc = _submitScoreMc.createEmptyMovieClip ("cnt", _submitScoreMc.getNextHighestDepth ());
		_smc._y = _submitScoreMc.frame1._y;
		_smc._x = _submitScoreMc.frame1._x;
		_smc.setMask (_submitScoreMc.frame1);
		_sendBtnUI._alpha = 100;
		_sendBtnUI.onRelease = Delegate.create (this, sendScore);
	}
/**
* loads the graphics element
*/
	private function loadMc ():Void {
		_submitScoreMc = _containerMc.createEmptyMovieClip ("submitScoreMc", _containerMc.getNextHighestDepth ());
		_mcLoader = new MovieClipLoader ();
		_mcLoader.addListener (_listenerObj);
		_mcLoader.loadClip ("../LZContainer.SubmitScore.swf",_submitScoreMc);
		_listenerObj.onLoadInit = Delegate.create (this, connectMc);
	}
/**
* Connects the uis with this code and enable event handlers
*/
	private function connectMc (mc:MovieClip):Void {
		_submitScoreMc._x = (Stage.width - _submitScoreMc._width - _containerMc._x) / 2;
		_submitScoreMc._y = (Stage.height - _submitScoreMc._height - _containerMc._y) / 2;
		hideForm ();

		_sendBtnUI = _submitScoreMc.sendBtn;

		_sendBtnUI.onRelease = Delegate.create (this, sendScore);

		_closeBtnUI = _submitScoreMc.closeBtn;
		_closeBtnUI.onRelease = Delegate.create (this, closeScore);

	}
/**
* Hides the submit score form
*/
	public function hideForm ():Void {
		_submitScoreMc._visible = false;

	}
/**
* show the form 
*/
	public function showForm ():Void {
		_submitScoreMc._visible = true;
		getScore ();
	}
/**
* get scores from external xml file
*/
	public function getScore ():Void {
		var loadGameInfo:XML = new XML ();
		var lzc = this;
		loadGameInfo.onLoad = xmlloaded;

		if (_smc != undefined) {
			_smc.removeMovieClip ();
		}
		_smc = _submitScoreMc.createEmptyMovieClip ("cnt", _submitScoreMc.getNextHighestDepth ());
		_smc._y = _submitScoreMc.frame1._y;
		_smc._x = _submitScoreMc.frame1._x;
		_smc.setMask (_submitScoreMc.frame1);
		function xmlloaded (success:Boolean) {

			var score:Array = new Array ();
			if (success) {
				for (var i:Number = 0; i < loadGameInfo.firstChild.childNodes.length; i++) {
					score.push ({name:loadGameInfo.firstChild.childNodes[i].attributes['name'], score:loadGameInfo.firstChild.childNodes[i].attributes['value']});
				}
				lzc.displayScore (score);
				lzc._submitScoreMc.replyText.text = "";
			}
		}
		_submitScoreMc.replyText.text = " Scores are loading ...";
		loadGameInfo.load (_root.liveHighScores);
		
		_submitScoreMc.score.text = "";
		new Scroller (_smc, _submitScoreMc.scroller);
	}
/**
* Display the scores in the panel
* @param score Array of scores to display
*/
	private function displayScore (score:Array):Void {
		_score = score;
		var mc:MovieClip;
		for (var i:Number = 0; i < _score.length; i++) {
			mc = _smc.attachMovie ("scoreEntry", "score" + i, _smc.getNextHighestDepth ());
			mc._y = i * 30 + 10;
			mc._x = (_submitScoreMc.frame1._width - mc._width) / 2;
			mc.slno.text = i + 1;
			mc.name.text = _score[i].name;
			mc.score.text = _score[i].score;
		}
		_submitScoreMc.score.text = "20";
	}
/**
* Close the score form
*/
	private function closeScore ():Void {
		hideForm ();
	}
/**
* Send the score to the server
*/
	public function sendScore(gameid:String, score:String, userid:String):Void {
		// *** Commented out multiple lines to bypass UI
		// disable send button
		//_sendBtnUI._alpha = 20;
		//_sendBtnUI.onRelease = undefined;
		//-------------------------
		var scorexml:LoadVars = new LoadVars ();
		var replyxml:XML = new XML ();
		var lz = this;
		if (score == null || score == undefined) {
			score = "";
		}
		scorexml.score = score;
		scorexml.user_id = userid;
		scorexml.game_id = gameid;
		
		scorexml.sendAndLoad(_root.createHighScore, replyxml, "POST"); // Dev Rails site
		replyxml.onLoad = function(success:Boolean) {
			trace("..."+replyxml.toString ()+"...");
			if (success) {
				//lz._submitScoreMc.replyText.text = replyxml.toString ();
				trace("Your score has been submitted!");
			} else {
				//lz._submitScoreMc.replyText.text = "Server Error:: Failed to write in server ";
				trace("Failed to submit score. Bummer.");
			}
			//lz.getScore ();
		}
	}
}