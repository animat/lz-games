import mx.utils.Delegate;
import mx.events.EventDispatcher;
/**
 * @className	Preloader
 * @author		Samit Basak
 * @purpose 	Preloads the game and construct the event architecture.
*/

class Preloader {
	// _rootMc: the main movieClip reference
	private var _rootMc:MovieClip;
	// _gameURL: the reference of the gameURL
	private var _gameURL:String;
	// _listenerObj: is the lisitner object
	private var _listenerObj:Object;
	// _gameLoader: is the movieClipLoader used to load the game
	private var _gameLoader:MovieClipLoader;
	// _preloaderMc: preloader movieClip 
	private var _preloaderMc:MovieClip;
	// _gameMc: game movieClip;
	private var _gameMc:MovieClip;
	// _callback: call back functin reference
	private var _callback:Function;
	// _initalzieEventMechanism: function reference which used to initialize the event mechanism
	private var _intializeEventMechanism:Function;
	// _container: reference to the container object
	private var _container:Object;
	
	/**
	Preloader Constructor
	@param mc  			MovieClip 	the main movieClip reference
	@param file			String 		The reference of the .swf file name
	@param container	Object		reference to the Container object
	@param callback 	Function	reference to the container callback function
	*/
	
	function Preloader(mc:MovieClip, file:String, container:Object, callback:Function) {
		_container = container;
		_callback = callback;
		_intializeEventMechanism = Delegate.create(_container, _callback);
		_rootMc = mc;
		_gameMc = _rootMc.gameMc;
		_gameURL = file;
		loadPreLoader();
	}
	
	/**
	loadPreLoader function to load the grahics of the preloader of the game
	@param none
	@return none
	*/
	function loadPreLoader():Void {
		_listenerObj = new Object();
		_listenerObj.onLoadComplete = Delegate.create(this, loadTheGame);
		_gameLoader = new MovieClipLoader();
		_gameLoader.addListener(_listenerObj);
		_preloaderMc = _rootMc.createEmptyMovieClip("_preloaderMc", _rootMc.getNextHighestDepth());
		if (_root.game_id == null) {
			_gameLoader.loadClip("preloader.swf", _preloaderMc);
		} else {
			_gameLoader.loadClip("/../../LZContainer/preloader.swf", _preloaderMc);
		}
	}
	
	/**
	loadTheGame  function is to load the game
	@param target_mc	MovieClip	target movieClip 
	@param httpStatus 	Number		reference to the httpStatus of the loading operatin
	*/
	private function loadTheGame(target_mc:MovieClip, httpStatus:Number) {
		//target_mc.file = _gameURL;
		_gameLoader.removeListener(_listenerObj);
		_listenerObj.onLoadProgress = function(t_mc:MovieClip, bytes_loaded:Number, bytes_total:Number) {
			var pct:Number = bytes_loaded/bytes_total*100;
			target_mc.pct = "Loading :"+Math.round(pct)+"%";
		};
		_listenerObj.onLoadComplete = Delegate.create(this, loadingComplete);
		_listenerObj.onLoadInit = function(target_mc:MovieClip):Void  {
		};
		_gameLoader.addListener(_listenerObj);
		_gameLoader.loadClip(_gameURL, _gameMc);
	}
	
	/**
	* loadingComplete handler is called when the loading is complete
	* @param tgt_mc 	MovieClip	movieClip that used to show the preloading.
	*/
	function loadingComplete(tgt_mc:MovieClip):Void {
		_intializeEventMechanism();
		_gameLoader.unloadClip(_preloaderMc);
	}
	
}
