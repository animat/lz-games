class RunGame extends LZGame implements gametypes.MatchingGame
{
   static var letters = [null,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   function RunGame(main)
   {
      super(main);
      this.movementEngine = new MovementEngine(this,RunGame.letters);
      this.correctAnswers = main.createTextField("answers",5000,0,0,200,600);
      this.correctAnswers.html = true;
      this.correctAnswers.multiline = true;
      this.correctAnswers.htmlText = "";
      this.keyListenerSpace = new Object();
      Key.addListener(this.keyListenerSpace);
      this.keyListenerSpace.onKeyDown = mx.utils.Delegate.create(this,this.selectLetter);
      var _loc4_ = new toolbarcomponent.core.ForeignCharacters(LZGame.language,main,200,Stage.height,200,null,mx.utils.Delegate.create(this,this.selectLetter));
      this.paused = false;
      main.lang._visible = false;
      this.nextQuestion(false);
      this.rightFX = LZGame.getStage().attachMovie("rightFX","rightFX",LZGame.getStage().getNextHighestDepth());
      this.wrongFX = LZGame.getStage().attachMovie("wrongFX","wrongFX",LZGame.getStage().getNextHighestDepth());
   }
   function selectLetter(a)
   {
      if(a == undefined)
      {
         if(Key.getCode() == 32)
         {
            this.movementEngine.stopWheel();
            this.checkAttempt();
         }
      }
      else
      {
         this.movementEngine.stopWheel();
         this.evaluate(new Array(a));
      }
      if(Key.getCode() == 37)
      {
         this.movementEngine.spinLeft();
      }
      if(Key.getCode() == 39)
      {
         this.movementEngine.spinRight();
      }
   }
   function nextQuestion(proceed)
   {
      if(proceed == true || proceed == "true")
      {
         this.questionList.increaseQNum();
      }
      if(this.questionList.getQuestionsLeft() > 0)
      {
         this.refreshQDisplay();
      }
      else
      {
         this.winGame();
      }
   }
   function refreshQDisplay()
   {
      LZGame.main.english = "Provide the " + LZGame.language + " for: ";
      if(!(this.answerDisplay == null))
      {
         delete this.answerDisplay;
      }
      this.answerDisplay = new AnswerDisplay(this,this.questionList.getCurrentQ());
      var _loc2_ = this.questionList.getCurrentQ();
      LZGame.main.english = LZGame.main.english + _loc2_.getStimulus().getContent();
   }
   function evaluate(attempts)
   {
      var _loc6_ = false;
      var _loc3_ = 0;
      while(_loc3_ < attempts.length)
      {
         var _loc4_ = this.answerDisplay.getCorrectLetterMC().textfield.text;
         var _loc2_ = attempts[_loc3_].textfield.text;
         if(_loc2_ == null || _loc2_ == undefined)
         {
            _loc2_ = attempts[_loc3_].toString();
         }
         _loc2_ = _loc2_.toLowerCase();
         _loc4_ = _loc4_.toLowerCase();
         if(_loc2_ == _loc4_)
         {
            _loc6_ = true;
         }
         _loc3_ = _loc3_ + 1;
      }
      if(_loc6_)
      {
         this.correctAnswer();
      }
      else
      {
         this.incorrectAnswer();
      }
   }
   function checkAttempt()
   {
      var _loc3_ = new Array();
      var _loc2_ = 1;
      while(!(_loc2_ > 26))
      {
         if(LZGame.main.wheel["seat" + _loc2_].hitTest(LZGame.main.answerPoint))
         {
            _loc3_.push(LZGame.main.wheel["seat" + _loc2_]);
         }
         _loc2_ = _loc2_ + 1;
      }
      this.evaluate(_loc3_);
   }
   function correctAnswer()
   {
      this.answerDisplay.revealLetter();
      this.answerDisplay.decreaseLettersLeft();
      this.rightFX.play();
      if(this.answerDisplay.wordIsFinished())
      {
         this.correctAnswers.htmlText = this.correctAnswers.htmlText + ("<font face=\'Arial\' size=\'16\' color=\'#FFFFFF\'>" + this.answerDisplay.getCorrectWord() + "</font><br />");
         this.nextQuestion(true);
      }
   }
   function incorrectAnswer()
   {
      this.wrongFX.play();
   }
   function winGame()
   {
      this.movementEngine.stopWheel();
      LZGame.main.gotoAndPlay("win");
      LZGame.main.english = "";
      this.correctAnswers.htmlText = "";
      removeMovieClip(LZGame.main.wordHolder);
   }
   function getScore()
   {
      return "";
   }
   function pauseGame()
   {
      this.movementEngine.pauseWheel();
   }
   function resumeGame()
   {
      this.movementEngine.resumeWheel();
   }
   function runMoveToEnd()
   {
      this.movetoend();
      this.refreshQDisplay();
   }
   function runNextLetter()
   {
      this.correctAnswer();
   }
   function runGiveUp()
   {
      while(this.answerDisplay.getLettersLeft() > 1)
      {
         this.correctAnswer();
         trace("calling the correct answer... " + this.answerDisplay.getLettersLeft());
      }
      this.correctAnswer();
      trace("correct answer one last time to move ahead.");
   }
}
