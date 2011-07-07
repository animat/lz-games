/**
 * This class holds all of the game's Question objects and also holds
 * universal Options (options that are present for all questions) thanks
 * to the inherited OptionFixture.
 *
 * Besides holding these questions and options, and basic functionality
 * to work with them, this class also provides some support for 
 * the hints component.
 */
class QuestionList extends OptionFixture {
	private var questionArray:Array;
	private var qNum:Number;

	public function QuestionList() {
		questionArray = new Array();
		qNum = 0;
	}
	public function addQuestions(inputArray:Array):Void {
		for(var i:Number = 0; i < inputArray.length; i++) {
			questionArray.push(inputArray[i]);
		}
	}

	public function getCurrentQ():Question {
		return questionArray[qNum];
	}
	public function getQByIncrement():Question {
		if (getIsValid(qNum + 1)) {
			qNum++;
			return questionArray[qNum];
		} else {
			return null;
		}
	}
	public function getQByDecrement():Question {
		if (getIsValid(qNum - 1)) {
			qNum--;
			return questionArray[qNum];
		} else {
			return null;
		}
	}
	public function getQByIndex(index:Number):Question {
		if (getIsValid(index)) {
			return questionArray[index];
		} else {
			return null;
		}
	}
	
	public function setQNum(initQNum:Number):Void {
		qNum = initQNum;
	}
	public function increaseQNum():Void {
		qNum++;
	}
	public function decreaseQNum():Void {
		qNum--;
	}
	public function getQNum():Number {
		return qNum;
	}
	public function getQArray():Array {
		return questionArray;
	}
	public function getQTotal():Number {
		return questionArray.length;
	}
	public function getQuestionsLeft():Number {
		return getQTotal() - getQNum();
	}
	public function getIsValid(index:Number):Boolean {
		if (index >= 0 && index < questionArray.length) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * Method used for Hints
	 */
	public function movetoend():Void {
		var currentQuestion:Question = getCurrentQ();
		trace(currentQuestion);
		questionArray.splice(qNum,1);
		questionArray[questionArray.length] = currentQuestion;
		trace(getCurrentQ());
	}
	
	// toString used for testing only
	public function toString():String {
		var str:String = "Current question list holds "+ getQTotal() + " questions: ";
		for (var i:Number = 0; i < getQTotal; i++) {
			str += questionArray[i] + ", ";
		}
		str += " and "+optionArray.length+" options";
		return str;
	}
}