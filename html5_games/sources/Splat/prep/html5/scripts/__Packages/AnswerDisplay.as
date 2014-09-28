class AnswerDisplay
{
   function AnswerDisplay(classScope, currentQuestion)
   {
      this.classScope = classScope;
      this.currentQuestion = currentQuestion;
      this.currentQuestionLang = currentQuestion.getResponses()[0].getStimulus().getContent();
      this.lettersLeft = this.currentQuestionLang.length;
      this.textFormatting = new TextFormat("Arial",32,16777215,true);
      this.letterWidth = 32;
      this.holderClip = LZGame.getStage().createEmptyMovieClip("answerHolder",150);
      this.holderClip._x = 200;
      this.holderClip._y = 20;
      this.createLetterMCs();
   }
   function createLetterMCs()
   {
      var _loc6_ = 0;
      var _loc7_ = 0;
      if(this.currentQuestionLang.length > 12)
      {
         this.textFormatting = new TextFormat("Arial",25,16777215,true);
         this.letterWidth = 20;
      }
      var _loc2_ = 0;
      while(_loc2_ < this.currentQuestionLang.length)
      {
         if(this.currentQuestionLang.charAt(_loc2_) == " ")
         {
            _loc6_ = 0;
            _loc7_ = _loc7_ + 35;
            this.lettersLeft = this.lettersLeft - 1;
         }
         else
         {
            var _loc3_ = this.holderClip.createEmptyMovieClip("letter_" + _loc2_,_loc2_);
            var _loc4_ = this.createTextfield(_loc3_,this.currentQuestionLang.charAt(_loc2_));
            var _loc5_ = this.createUnderline(_loc3_);
            _loc5_._y = Math.ceil(_loc4_._height) - 4;
            _loc5_._width = this.letterWidth + 4;
            _loc4_._x = Math.ceil(_loc5_._width / 2 - _loc4_._width / 2);
            _loc6_ = _loc6_ + (_loc3_._width + 2);
            this.letterPosition(_loc3_,_loc6_,_loc2_);
            _loc3_._x = _loc6_;
            _loc3_._y = _loc7_;
         }
         _loc2_ = _loc2_ + 1;
      }
      this.hideAllLetters();
   }
   function createTextfield(letterClip, letter)
   {
      letterClip.createTextField("textfield",10,0,0,0,0);
      letterClip.textfield.autoSize = true;
      letterClip.textfield.selectable = false;
      letterClip.textfield.setNewTextFormat(this.textFormatting);
      letterClip.textfield.text = letter;
      return letterClip.textfield;
   }
   function createUnderline(letterClip)
   {
      var _loc1_ = letterClip.attachMovie("letterUnderline","letterUnderline",1);
      return _loc1_;
   }
   function letterPosition(newLetterMC, xPos, num)
   {
      newLetterMC._x = xPos;
   }
   function hideAllLetters()
   {
      var _loc2_ = 0;
      while(_loc2_ < this.currentQuestionLang.length)
      {
         var _loc3_ = this.holderClip["letter_" + _loc2_];
         _loc3_.textfield._visible = false;
         _loc2_ = _loc2_ + 1;
      }
   }
   function revealLetter(letterClip)
   {
      letterClip.textfield._visible = true;
   }
   function decreaseLettersLeft()
   {
      this.lettersLeft = this.lettersLeft - 1;
   }
   function getLettersLeft()
   {
      return this.lettersLeft;
   }
   function wordIsFinished()
   {
      if(this.lettersLeft == 0)
      {
         this.classScope.main.engDisplay.text = "";
         return true;
      }
      return false;
   }
   function getClip()
   {
      return this.holderClip;
   }
}
