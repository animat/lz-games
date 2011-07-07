import mx.utils.Delegate;
/**
 * This class is an abstract superclass for all the XML readers of all the games. It contains a
 * standard constructor and numerous helper methods.
 * Each game will have its own Reader as defined by its gametype (e.g. gametypes.TranslationReader).
 * These gametype-Readers will extend this class and must implement:
 *  - getXML()
 *  - XMLReaderInterface
 */
class AbstractXMLReader {
	public var itemData:Array;
	private var xml:XML;
	private var callBackFunction:Function;
	private var language:String;
	private var questionList:QuestionList;
	
	public function AbstractXMLReader(parentScope:Object, fileName:String, initCallBack:Function) {
		xml = new XML();
		xmlInit(fileName);
		itemData = new Array();
		callBackFunction = Delegate.create(parentScope, initCallBack);
	}
	
	/* abstract */ public function xmlInit(fileName:String):Void {
		xml.ignoreWhite = true;
		xml.onLoad = Delegate.create(this, getXML);
		xml.load(fileName);
	}
	
	public function getXML():Void {
		throw new Error("AbstractXMLReader :: getXML() :: Method needs to be implemented by gametype-Reader subclass");
	}
	
	/* abstract */ public function compileQuestionList(inputArray:Array, optionsArray:Array):QuestionList {
		var questionList:QuestionList = new QuestionList();
		questionList.addQuestions(inputArray);
		questionList.addOptions(optionsArray);
		return questionList;
	}
	
	/* final */ private function getNodeByName(findMe:String, node:Array):XMLNode {
		for (var i:Number = 0; i < node.length; i++) {
			if (node[i].nodeName == findMe) {
				return node[i];
			}
		}
	}
	
	/* final */ private function getBranchByName(branchName:String, node:Array):Array {
		for (var i:Number = 0; i < node.length; i++) {
			if (node[i].nodeName == branchName) {
				return node[i].childNodes;
			}
		}
		return null;
	}
	
	/* final */ private function copyProperties(target:Object, source_node:XMLNode, props:Object) {
		for (var prop in props) {
			target[props[prop]] = source_node.attributes[props[prop]];
		}
	}
	
	/* final */ private function getAttributeNames(node:Array):Array {
		var attributeNames:Array = new Array();
		var dataNodes:Array = getBranchByName("format", node);
		for (var i:Number = 0; i < dataNodes.length; i++) {
			attributeNames.push(dataNodes[i].attributes.name);
		}
		return attributeNames;
	}
	
	/* final */ public function getQuestionList():QuestionList {
		return questionList;
	}
	/* final */ public function getTemplateBranch():Array {
		return getBranchByName("templatedata", xml.firstChild.childNodes);
	}
	/* final */ public function getOldTemplateBranch(node:Array):Array {
		for (var i:Number = 0; i < node.length; i++) {
			if (node[i].nodeName == "gamedata") {
				if (node[i].firstChild.nodeName == "customdata") {
					return node[i].childNodes;
				}
			}
		}
	}
	/* final */ public function getLanguage():String {
		return language;
	}
	/* final */ 
	public function getLanguageCode():String {
		var langCode:String="";
		switch(language.toUpperCase()) 
		{	case "SPANISH":
				langCode = "es";
				break;
			case "FRENCH":
				langCode = "fr";
				break;
			case "GERMAN":
				langCode = "de";
				break;
			case "ITALIAN":
				langCode = "it";
				break;
			case "ENGLISH":
			    langCode ="en";
		         break;
			case "LATIN":
				langCode = "lat";
				break;
		    default :  
			  langCode ="en";
		         break;
		}
		return langCode;
	}
	/* final */ public function getPercentLoaded():Number {
		return Math.floor((xml.getBytesLoaded() / xml.getBytesTotal()) * 100);
	}
}