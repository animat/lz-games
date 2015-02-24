class RunGame extends LZGame implements gametypes.MatchingGame
{
   function RunGame(main)
   {
      super(main);
      LZGame.setInstance(this);
      this.moleManager = new MoleManager(this.questionList.getQArray());
      this.mallet = LZGame.getStage().attachMovie("mallet","mallet",LZGame.getStage().getNextHighestDepth());
      this.mallet.onEnterFrame = mx.utils.Delegate.create(this,this.chaseMouse);
      Mouse.hide();
      this.correctHits = 0;
      this.totalHits = 0;
      this.nextQuestion(false);
   }
   function nextQuestion(proceed)
   {
      if(proceed)
      {
         this.questionList.increaseQNum();
      }
      if(this.questionList.getQuestionsLeft() == 0)
      {
         this.winGame();
         return undefined;
      }
      this.refreshQDisplay();
   }
   function refreshQDisplay()
   {
      if(!(this.qStimDisplay == null))
      {
         this.qStimDisplay.reset();
      }
      this.qStimDisplay = new StimulusDisplay(LZGame.getStage(),"qStimDisplay",this.questionList.getCurrentQ().getStimulus());
      this.qStimDisplay.setPos(200,20);
   }
   function evaluate(attempt)
   {
      this.mallet.gotoAndPlay("hit");
      if(this.questionList.getCurrentQ().evaluate(new ClickedOptionInput(attempt)))
      {
         this.correctAnswer();
         attempt.strikeDown();
      }
      else
      {
         this.incorrectAnswer();
         attempt.strikeBounce();
      }
   }
   function correctAnswer()
   {
      this.correctHits = this.correctHits + 1;
      this.totalHits = this.totalHits + 1;
      LZGame.getStage().correctHits.score = this.correctHits;
      LZGame.getStage().totalHits.score = this.totalHits;
      LZGame.getStage().correctHits.gotoAndPlay("increment");
      this.nextQuestion(true);
   }
   function incorrectAnswer()
   {
      this.totalHits = this.totalHits + 1;
      LZGame.getStage().totalHits.score = this.totalHits;
      LZGame.getStage().totalHits.gotoAndPlay("increment");
   }
   function winGame()
   {
      this.qStimDisplay.reset();
      removeMovieClip(this.mallet);
      Mouse.show();
      this.moleManager.destroy();
      LZGame.getStage().gotoAndPlay("win");
   }
   function getScore()
   {
      return "";
   }
   function chaseMouse()
   {
      this.mallet._x = _root._xmouse;
      this.mallet._y = _root._ymouse;
   }
}
