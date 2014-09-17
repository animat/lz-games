class RunGame extends LZGame implements gametypes.MatchingGame
{
   function RunGame(main)
   {
      super(main);
      this.balloonManager = new BalloonManager(this);
      this.letterNum = 0;
      this.textFmt = new TextFormat("Arial",16,0,true);
      this.correctFX = main.attachMovie("_correct.mp3","correctFX",main.getNextHighestDepth());
      this.incorrectFX = main.attachMovie("_incorrect.mp3","incorrectFX",main.getNextHighestDepth());
      this.nextQuestionFX = main.attachMovie("_nextQuestion.mp3","nextQuesitonFX",main.getNextHighestDepth());
      this.nextQuestion(false);
   }
   function nextQuestion(proceed)
   {
      if(proceed)
      {
         var _loc2_ = 0;
         while(_loc2_ < this.letterNum)
         {
            delete LZGame.main.balloonHolder["balloon_" + _loc2_].moveBalloon;
            _loc2_ = _loc2_ + 1;
         }
         this.balloonManager.destroyAllBalloons();
         this.letterNum = 0;
         this.questionList.increaseQNum();
      }
      trace("question left :: " + this.questionList.getQuestionsLeft());
      if(this.questionList.getQuestionsLeft() == 0)
      {
         this.winGame();
         trace("you did it! you won!");
         return undefined;
      }
      this.refreshQDisplay();
   }
   function refreshQDisplay()
   {
      var _loc2_ = this.questionList.getCurrentQ();
      this.letterNum = _loc2_.getResponses()[0].getStimulus().getContent().length;
      this.balloonManager.createBalloons(_loc2_.getResponses()[0].getStimulus().getContent());
      this.answerDisplay = new AnswerDisplay(this,_loc2_);
      if(!(this.stimDisplay == null))
      {
         this.stimDisplay.reset();
      }
      this.stimDisplay = new SplatDisplay(LZGame.main,"stimDisplay",_loc2_.getStimulus());
      this.stimDisplay.setDim(50,50);
      this.stimDisplay.setPos(70,30);
   }
   function evaluate(attempt)
   {
      if(attempt.getClip().hitTest(LZGame.main.answerHolder))
      {
         var _loc3_ = 0;
         while(_loc3_ < this.questionList.getCurrentQ().getResponses()[0].getStimulus().getContent().length)
         {
            var _loc2_ = LZGame.main.answerHolder["letter_" + _loc3_];
            if(attempt.getClip().hitTest(_loc2_))
            {
               if(attempt.getClip().txtfield.text == _loc2_.textfield.text && _loc2_.textfield._visible == false)
               {
                  _loc2_.textfield._visible = true;
                  attempt.destroy();
                  this.correctAnswer();
                  return undefined;
               }
            }
            _loc3_ = _loc3_ + 1;
         }
      }
      this.incorrectAnswer();
   }
   function correctAnswer()
   {
      this.answerDisplay.decreaseLettersLeft();
      if(this.answerDisplay.wordIsFinished())
      {
         this.writeCorrectAnswer();
         this.nextQuestionFX.gotoAndPlay(2);
         this.nextQuestion(true);
      }
      else
      {
         trace("trying to play correct FX!");
         this.correctFX.gotoAndPlay(2);
      }
   }
   function writeCorrectAnswer()
   {
      var _loc3_ = this.questionList.getQNum();
      var _loc4_ = 800 + _loc3_;
      LZGame.main.createTextField("correctAnswer_" + _loc3_,_loc4_,1,1,100,20);
      var _loc2_ = LZGame.main["correctAnswer_" + _loc3_];
      _loc2_.autoSize = true;
      _loc2_.selectable = false;
      _loc2_.setNewTextFormat(this.textFmt);
      _loc2_._x = 0;
      _loc2_._y = 100 + 20 * _loc3_;
      _loc2_.text = this.questionList.getCurrentQ().getResponses()[0].getStimulus().getContent();
      _loc2_.align = "center";
      var _loc5_ = LZGame.main.attachMovie("whiteBG","whiteBG_" + _loc3_,_loc4_ - 100,{_x:_loc2_._x,_y:_loc2_._y,_width:_loc2_._width,_height:_loc2_._height,_alpha:20});
      trace("thats correct!");
   }
   function incorrectAnswer()
   {
      this.incorrectFX.gotoAndPlay(2);
   }
   function winGame()
   {
      LZGame.main.gotoAndStop("win");
      removeMovieClip(LZGame.main.answerHolder);
   }
   function getScore()
   {
      return "";
   }
   function pauseGame()
   {
      this.balloonManager.pauseBalloons();
   }
   function resumeGame()
   {
      this.balloonManager.resumeBalloons();
   }
   function runMoveToEnd()
   {
      this.movetoend();
      var _loc2_ = 0;
      while(_loc2_ < this.letterNum)
      {
         delete LZGame.main.balloonHolder["balloon_" + _loc2_].moveBalloon;
         _loc2_ = _loc2_ + 1;
      }
      this.balloonManager.destroyAllBalloons();
      this.letterNum = 0;
      this.refreshQDisplay();
   }
   function runGiveUp()
   {
      while(this.answerDisplay.getLettersLeft() > 1)
      {
         this.answerDisplay.decreaseLettersLeft();
      }
      this.correctAnswer();
   }
}
