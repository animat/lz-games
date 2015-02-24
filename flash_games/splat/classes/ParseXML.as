import mx.utils.Delegate;

class ParseXML {
	private var xml:XML;
	private var classScope:Object;
	
	public function ParseXML(xml_file:String, classScope:Object) {
		this.classScope = classScope;
		
		xml = new XML();
		xml.ignoreWhite = true;
		xml.onLoad = Delegate.create(this, loadQuestions);
		xml.load(xml_file);
	}
	
	public function loadQuestions():Void {
		var questionsList:Array = new Array();
		// Create all of the questionMC instances for the panel
		var node:String = xml.firstChild.childNodes[2].childNodes;
		for (var i:Number = 0; i < node.length; i++) {
			var engText:String = node[i].attributes.english;
			var langText:String = node[i].attributes.lang;
			var currentQuestion:Question = new Question(engText, langText);
			questionsList.push(currentQuestion);
		}
	    
		classScope.getQuestionsXML(questionsList);
	}
}