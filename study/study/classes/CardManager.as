class CardManager {
	private var currentCard:Card;
	private var originalOrder:Array;
	private var waitingCards:Array;
	private var knowItCards:Array;
	private var notSureCards:Array;
	
	private var totalCards:Number;
	private var winWait:Number;
	
	public function CardManager() {
		currentCard = null;
		
		originalOrder = new Array();
		waitingCards = new Array();
		knowItCards = new Array();
		notSureCards = new Array();
		
		totalCards = 0;
	}
	
	public function createCards(questions:Array) {
		for (var i:Number = 0; i < questions.length; i++) {
			var prompt:String = questions[i].getStimulus().getContent();
			var response:String = questions[i].getResponses()[0].getStimulus().getContent();
			var newCard:Card = new Card(prompt, response, waitingCards.length);
			originalOrder.unshift(newCard);
			waitingCards.push(newCard);
		}
		totalCards = waitingCards.length;
	}
	public function knowIt():Void {
		if (currentCard != null && !LZGame.isBusy()) {
			currentCard.shrinkToStack("knowIt");
			knowItCards.push(currentCard);
			currentCard = null;
			nextCard();
		}
	}
	public function notSure():Void {
		if (currentCard != null && !LZGame.isBusy()) {
			currentCard.shrinkToStack("notSure");
			notSureCards.unshift(currentCard);
			currentCard = null;
			nextCard();
		}
	}
	public function nextCard():Void {
		if (currentCard == null) {
			if (waitingCards.length > 0) {
				currentCard = Card(waitingCards.pop());
				currentCard.slideIn();
			} else if (notSureCards.length > 0) {
				currentCard = Card(notSureCards.pop());
				currentCard.slideIn();
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
	}
	
	public function displayAllCards():Void {
		clearInterval(winWait);
		LZGame.getInstance().destroyButtons();
		
		var xPos:Number = 50;
		var yPos:Number = 50;
		for (var i:Number = 0; i < originalOrder.length; i++) {
			if (xPos + (originalOrder[i].getTotalWidth() / 2) > 575) {
				xPos = 50;
				yPos += 58;
			}
			originalOrder[i].setScaleAndAlpha(50, 100);
			originalOrder[i].setPos(xPos, yPos);
			originalOrder[i].setColorFromPile();
			originalOrder[i].getClip().enabled = true;
			xPos += (originalOrder[i].getTotalWidth() / 2) + 20;
		}
	}
}