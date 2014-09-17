class Penguin
{
   function Penguin(main, m)
   {
      this.main = main;
      this.mc = m;
   }
   function fishing()
   {
      this.mc.gotoAndPlay("static");
   }
   function winningAction()
   {
      this.mc.gotoAndStop("catch");
      TimelineManager.registerClip(this.mc.penguin,this,this.nextQuestion,[],"done");
   }
   function nextQuestion()
   {
      this.main.nextQuestion(true);
   }
   function faillingAction()
   {
      this.mc.gotoAndStop("Empty");
      TimelineManager.registerClip(this.mc.penguin,this,this.refreshQDisplay,[true],"done");
   }
   function refreshQDisplay()
   {
      this.main.refreshQDisplay();
   }
   function winTheGame()
   {
      this.mc.gotoAndStop("Happy");
   }
   function replayGame()
   {
      this.main.replayGame();
   }
   function destroy()
   {
      return false;
   }
}
