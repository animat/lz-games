class AnswerDisplay
{
   static var textFormatting = new TextFormat("Arial",32,16777215,true);
   function AnswerDisplay(classScope, currentQuestion)
   {
      this.classScope = classScope;
      this.currentQuestion = currentQuestion;
      this.currentQuestionLang = currentQuestion.getResponses()[0].getStimulus().getContent();
      this.holderClip = LZGame.getStage().createEmptyMovieClip("wordHolder",100);
      this.holderClip._x = 470;
      this.holderClip._y = 50;
      this.currentLetterIndex = 0;
      this.lettersLeft = 0;
      this.createLetterMCs();
   }
   function createLetterMCs()
   {
      var _loc5_ = 0;
      var _loc6_ = 0;
      var _loc3_ = 0;
      while(_loc3_ < this.currentQuestionLang.length)
      {
         if(this.currentQuestionLang.charAt(_loc3_) == " ")
         {
            _loc5_ = _loc5_ + 30;
         }
         else
         {
            var _loc2_ = this.holderClip.createEmptyMovieClip("letter_" + _loc6_,_loc6_);
            var _loc7_ = this.createUnderline(_loc2_,_loc6_);
            var _loc4_ = this.createTextfield(_loc2_,this.currentQuestionLang.charAt(_loc3_));
            _loc7_._y = _loc4_._height - 5;
            _loc4_._x = _loc7_._width / 2 - _loc4_._width / 2;
            _loc5_ = _loc5_ + (_loc2_._width + 2);
            this.letterPosition(_loc2_,_loc5_);
            _loc2_._x = _loc5_;
            this.lettersLeft = this.lettersLeft + 1;
            _loc6_ = _loc6_ + 1;
         }
         _loc3_ = _loc3_ + 1;
      }
      this.resetWordPosition();
      this.hideAllLetters();
   }
   function createTextfield(letterClip, letter)
   {
      letterClip.createTextField("textfield",10,0,0,0,0);
      letterClip.textfield.autoSize = true;
      letterClip.textfield.setNewTextFormat(AnswerDisplay.textFormatting);
      letterClip.textfield.text = letter;
      return letterClip.textfield;
   }
   function createUnderline(letterClip, letterNum)
   {
      var _loc1_ = letterClip.attachMovie("letterUnderline","letterUnderline",1);
      return _loc1_;
   }
   function letterPosition(newLetterMC, xPos)
   {
      newLetterMC._x = xPos;
      newLetterMC.letterUnderline._width = newLetterMC._width;
   }
   function resetWordPosition()
   {
      this.holderClip._x = Stage.width - this.holderClip._width - 50;
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
   function getCorrectLetterMC()
   {
      return this.holderClip["letter_" + this.currentLetterIndex];
   }
   function getCorrectWord()
   {
      return this.currentQuestionLang;
   }
   function revealLetter()
   {
      var _loc2_ = this.getCorrectLetterMC();
      _loc2_.textfield._visible = true;
   }
   function decreaseLettersLeft()
   {
      this.currentLetterIndex = this.currentLetterIndex + 1;
   }
   function getLettersLeft()
   {
      return this.lettersLeft - this.currentLetterIndex;
   }
   function wordIsFinished()
   {
      return this.getLettersLeft() == 0;
   }
}
