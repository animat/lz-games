class CardManager {
	private var currentCard:Card;
	private var waitingCards:Array;
	private var knowItCards:Array;
	private var notSureCards:Array;
	
	private var totalCards:Number;
	private var offset:Number;
	private var winWait:Number;
	
	public function CardManager() {
		currentCard = null;
		
		waitingCards = new Array();
		knowItCards = new Array();
		notSureCards = new Array();
		
		totalCards = 0;
		offset = 2;
	}
	
	public function createCards(questions:Array) {
		var waitingOffset:Number = 0;
		for (var i:Number = 0; i < questions.length; i++) {
			var prompt:String = questions[i].getStimulus().getContent();
			var response:String = questions[i].getResponses()[0].getStimulus().getContent();
			var newCard:Card = new Card(prompt, response, waitingCards.length);
			waitingCards.push(newCard);
			newCard.setWaitingOffset(offset * waitingCards.length);
		}
		totalCards = waitingCards.length;
	}
	public function knowIt():Void {
		if (currentCard != null) {
			currentCard.shrinkToStack("knowIt");
			knowItCards.push(currentCard);
			currentCard.setKnowItOffset(offset * knowItCards.length);
			trace("just set the know it offset on the current card...");
			currentCard = null;
		}
	}
	public function notSure():Void {
		if (currentCard != null) {
			currentCard.shrinkToStack("notSure");
			notSureCards.unshift(currentCard);
			currentCard = null;
		}
	}
	public function setCurrentUnderNotSureStack():Void {
		for (var i:Number = 0; i < notSureCards.length; i++) {
			notSureCards[i].getClip().swapDepths(LZGame.getStage().getNextHighestDepth());
			notSureCards[i].setNotSureOffset(offset * i);
		}
	}
	public function nextCard():Void {	
		if (currentCard == null) {
			var card:Card = null;
			if (waitingCards.length > 0) {
				card = Card(waitingCards.pop());
				card.slideIn();
			} else if (notSureCards.length > 0) {
				card = Card(notSureCards.pop());
				card.slideIn();
			} else {
				winWait = setInterval(this, "displayAllCards", 3000);
				displayAllCards();
			}
		}
	}
	
	public function setCurrentCard(card:Card):Void {
		if (currentCard != null) {
			notSure();
		}
		for (var i:Number = 0; i < notSureCards.length; i++) {
			if (notSureCards[i] == card) {
				notSureCards.splice(i, 1);
			}
		}
		for (var i:Number = 0; i < waitingCards.length; i++) {
			if (waitingCards[i] == card) {
				waitingCards.splice(i, 1);
			}
		}
		currentCard = card;
		currentCard.getClip().swapDepths(LZGame.getStage().getNextHighestDepth());
	}
	
	public function displayAllCards():Void {
		clearInterval(winWait);
		LZGame.getInstance().destroyButtons();
		
		var xSpacing:Number = 95;
		var ySpacing:Number = 90;
		var rowCounter = 0;
		var colCounter = 0;
		for (var i:Number = 0; i < knowItCards.length; i++) {
			colCounter++;
			if (colCounter > 5) {
				rowCounter++;
				colCounter = 0;
			}
			if (rowCounter > 7) {
				trace("woahhhh too many questions");
			}
			knowItCards[i].setPos(50 + (colCounter * xSpacing), 100 + (rowCounter * ySpacing));
		}
	}
}