import mx.utils.Delegate;
import mx.lang.Locale;

import gametypes.TranslationReader;
import gametypes.MatchingReader;
import gametypes.GroupingReader;
import gametypes.MultipleChoiceReader;
import gametypes.ExposureReader;
import gametypes.RecognitionReader;
import gametypes.SentenceReader;
/**
 * This class is used to load in the game's XML and prepare
 * the entire question component so that the game will start
 * with a functional QuestionList. It also localizes the game
 * so that Strings are in the target language.
 */
class LoadGame {
	private var main:MovieClip;
	private var xmlSource:String;
	private var gametype:String;
	private var xmlReader:AbstractXMLReader;
	//
	public function LoadGame(main:MovieClip, file:String, gametype:String) {
		this.main = main;
		main.stop();
		xmlSource = file;
		this.gametype = gametype;
		loadXML();
	}
	private function loadXML():Void {
		if (gametype.toUpperCase() == "TRANSLATIONGAME") {
			xmlReader = new TranslationReader(this, xmlSource, localize);
		} else if (gametype.toUpperCase() == "GROUPINGGAME") {
			xmlReader = new GroupingReader(this, xmlSource, localize);
		} else if (gametype.toUpperCase() == "MATCHINGGAME") {
			xmlReader = new MatchingReader(this, xmlSource, localize);
		} else if (gametype.toUpperCase() == "MULTIPLECHOICEGAME") {
			xmlReader = new MultipleChoiceReader(this, xmlSource, localize);
		} else if (gametype.toUpperCase() == "RECOGNITIONGAME") {
			xmlReader = new RecognitionReader(this, xmlSource, localize);
		} else if (gametype.toUpperCase() == "UNSCRAMBLINGGAME") {
			throw new Error("LoadGame :: loadXML() :: gametypes.UnscramblingReader not yet defined");
		} else if (gametype.toUpperCase() == "EXPOSUREGAME") {
			xmlReader = new ExposureReader(this, xmlSource, localize);
		} else if (gametype.toUpperCase() == "SENTENCEGAME") {
			xmlReader = new SentenceReader(this, xmlSource, localize);
		} else if (gametype == undefined) {
			throw new Error("LoadGame :: loadXML() :: Game FLA does not define a gametype");
		} else {
			throw new Error("LoadGame :: loadXML() :: Unknown error while trying to load XML data");
		}
	}
	public function localize():Void {
		Locale.setLoadCallback(localeListener);
		Locale.autoReplace = true;
		
		Locale.loadLanguageXML(xmlReader.getLanguageCode());
		gotoGame();
	}
	public function localeListener(success:Boolean):Void {
		if (success) {
			gotoGame();
	    } else {
	       trace("Error localizing the game...");
	    }
	}
	public function gotoGame():Void {
		main.play();
	}
	public function getXMLReader():AbstractXMLReader {
		return xmlReader;
	}
}