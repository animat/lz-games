/**
 * This class reads the XML for all MultipleChoiceGames (e.g. Quiz Show)
 * and turns the XML into Question objects in the QuestionList.
 */
class gametypes.MultipleChoiceReader extends AbstractXMLReader implements XMLReaderInterface {
	
	public function MultipleChoiceReader(parentScope:Object, fileName:String, initCallBack:Function) {
		super(parentScope, fileName, initCallBack);
	}
	
	public function getXML():Void {
		var node:Array = xml.firstChild.childNodes;
		var attributeNames:Array = getAttributeNames(node);
		var gameData:Array = getBranchByName("gamedata", node);
		var templateData:Array = getOldTemplateBranch(node);
		language = getBranchByName("language", node).toString();
		questionList = compileQuestionList(generateQuestions(gameData, attributeNames), generateUniversalOptions(templateData));
		callBackFunction();
	}
	
	public function generateQuestions(nodes:Array, attributeNames:Array):Array {
		var questionArray:Array = new Array();
		for (var i:Number = 0; i < nodes.length; i++) {
			var questionNode:XMLNode = getNodeByName("question", nodes[i].childNodes);
			var qstnAttributes:Object = questionNode.attributes;
			var question:Question = new Question(qstnAttributes.content, qstnAttributes.type);
			
			var respNode:XMLNode = getNodeByName("response", nodes[i].childNodes);
			var respAttributes:Object = respNode.attributes;
			question.addResponse(respAttributes.content, respAttributes.type);
			
			var optionNodes:Array = getBranchByName("options", nodes[i].childNodes);
			var options:Array = new Array();
			for (var j:Number = 0; j < optionNodes.length; j++) {
				var optnAttributes:Object = optionNodes[j].attributes;
				options.push(new Option(optnAttributes.content, optnAttributes.type));
			}
			question.addOptions(options);
			
			if (nodes[i].attributes.mode != null) {
				question.setAttributes({mode: nodes[i].attributes.mode});
			}
			questionArray.push(question);
		}
		return questionArray;
	}

	public function generateUniversalOptions(inputArray:Array):Array {
		return new Array();
	}
	
}