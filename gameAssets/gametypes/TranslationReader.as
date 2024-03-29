﻿/**
 * This class reads the XML for all TranslationGames (e.g. Leap Frog, Mantis, Fishing)
 * and turns the XML into Question objects in the QuestionList.
 */
class gametypes.TranslationReader extends AbstractXMLReader implements XMLReaderInterface {
	
	public function TranslationReader(parentScope:Object, fileName:String, initCallBack:Function) {
		super(parentScope, fileName, initCallBack);
	}
	
	public function getXML():Void {
		var node:Array = xml.firstChild.childNodes;
		var attributeNames:Array = getAttributeNames(node);
		var gameData:Array = getBranchByName("gamedata", node);
		var templateData:Array = getBranchByName("templatedata", node);
		language = getBranchByName("language", node).toString();
		questionList = compileQuestionList(generateQuestions(gameData, attributeNames), generateUniversalOptions(templateData));
		callBackFunction();
	}
	
	public function generateQuestions(nodes:Array, attributeNames:Array):Array {
		var questionArray:Array = new Array();
		for (var i:Number = 0; i < nodes.length; i++) {
			var questionNode:XMLNode = nodes[i].childNodes[0];
			var qstnAttributes:Object = questionNode.attributes;
			var question:Question = new Question(qstnAttributes.content, qstnAttributes.type);
			for (var j:Number = 0; j < nodes[i].childNodes.length; j++) {
				var currentNode:XMLNode = nodes[i].childNodes[j];
				if (currentNode.nodeName == "response") {
					var rspsAttributes:Object = currentNode.attributes;
					question.addResponse(rspsAttributes.content, rspsAttributes.type);
				}
			}
			questionArray.push(question);
		}
		return questionArray;
	}
	
	public function generateUniversalOptions(inputArray:Array):Array {
		return new Array();
	}
	
}