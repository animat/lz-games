/**
 * This class reads the XML for all GroupingGames (e.g. Alphabet Tree)
 * and turns the XML into Question objects in the QuestionList.
 */
class gametypes.GroupingReader extends AbstractXMLReader implements XMLReaderInterface {
	
	public function GroupingReader(parentScope:Object, fileName:String, initCallBack:Function) {
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
			
			var responsesNode:XMLNode = nodes[i].childNodes[1];
			
			var answerAll:Boolean = (responsesNode.attributes.answer == "all");
			question.setAnswerAll(answerAll);
			
			for(var j:Number = 0; j < responsesNode.childNodes.length; j++) {
				var rspsAttributes:Object = responsesNode.childNodes[j].attributes;
				question.addResponse(rspsAttributes.content, rspsAttributes.type);
			}
			questionArray.push(question);
		}
		return questionArray;
	}
	
	public function generateUniversalOptions(inputArray:Array):Array {
		var optionArray:Array = new Array();
		for (var i:Number = 0; i < inputArray.length; i++) {
			if (inputArray[i].attributes.label == "theme") {
				var optionAttributes:Object = inputArray[i].firstChild.attributes;
				var optn = new Option(optionAttributes.content, optionAttributes.type);
				optionArray.push(optn);
				return optionArray;
			}
		}
	}
	
}