class RunGame extends LZGame implements gametypes.MatchingGame
{
   function RunGame(main)
   {
      super(main);
      this.fishtypes = new Array("fish1","fish2","fish3");
      this.penguin = new Penguin(this,main.penguin);
      this.bucket = new Bucket(this,main.bucket);
      this.createFish();
      this.__busy = false;
      this.questionList.setQNum(0);
      this.refreshQDisplay();
   }
   function createFish()
   {
      this.fish = new Array();
      var _loc2_ = 0;
      this.questionList.setQNum(0);
      _loc2_ = 0;
      while(_loc2_ < this.questionList.getQTotal())
      {
         var _loc5_ = this.questionList.getCurrentQ().getResponses()[0].getStimulus();
         var _loc3_ = 1 + Math.round(Math.random() * 2);
         var _loc4_ = new Fish(this,_loc5_,"fish" + _loc3_,LZGame.main,_loc2_);
         this.fish.push(_loc4_);
         this.questionList.increaseQNum();
         _loc2_ = _loc2_ + 1;
      }
   }
   function nextQuestion(proceed)
   {
      if(proceed)
      {
         this.questionList.increaseQNum();
      }
      this.refreshQDisplay();
   }
   function refreshQDisplay()
   {
      trace(" refresh display has been called");
      this.stimDisplay.reset();
      if(!(this.questionList.getCurrentQ() == undefined))
      {
         this.stimDisplay = new FishingDisplay(LZGame.main,"fishingDisplay",this.questionList.getCurrentQ().getStimulus());
         this.stimDisplay.setPos(305,15);
         this.stimDisplay.setDim(50,50);
         this.penguin.fishing();
         this.resetBusy();
      }
      else
      {
         this.setBusy();
         this.winGame();
      }
   }
   function evaluate(attempt)
   {
      var _loc2_ = (Fish)attempt;
      var _loc3_ = new Response();
      _loc3_.setStimulusFull(_loc2_.getStimulus());
      if(this.questionList.getCurrentQ().evaluate(_loc3_))
      {
         this.correctAnswer();
         _loc2_.mc._visible = false;
         this.bucket.putInBucket(_loc2_);
      }
      else
      {
         this.incorrectAnswer();
      }
   }
   function correctAnswer()
   {
      this.penguin.winningAction();
   }
   function incorrectAnswer()
   {
      this.penguin.faillingAction();
   }
   function setBusy()
   {
      if(this.__busy == false)
      {
         this.__busy = true;
      }
   }
   function __get__busy()
   {
      var _loc2_ = this.__busy;
      return _loc2_;
   }
   function resetBusy()
   {
      this.__busy = false;
   }
   function winGame()
   {
      this.penguin.winTheGame();
      LZGame.main.gotoAndStop("win");
   }
   function replayGame()
   {
      LZGame.main.gotoAndPlay("intro");
   }
   function getScore()
   {
      return "";
   }
   function destroy()
   {
      return false;
   }
   function runMoveToEnd()
   {
      this.movetoend();
      this.refreshQDisplay();
   }
   function pauseGame()
   {
      var _loc2_ = undefined;
      _loc2_ = 0;
      while(_loc2_ < this.questionList.getQTotal())
      {
         this.fish[_loc2_].pauseTween();
         _loc2_ = _loc2_ + 1;
      }
   }
   function resumeGame()
   {
      var _loc2_ = undefined;
      _loc2_ = 0;
      while(_loc2_ < this.questionList.getQTotal())
      {
         this.fish[_loc2_].resumeTween();
         _loc2_ = _loc2_ + 1;
      }
   }
}
