class QuestionList extends OptionFixture
{
   function QuestionList()
   {
      super();
      this.questionArray = new Array();
      this.qNum = 0;
   }
   function addQuestions(inputArray)
   {
      var _loc2_ = 0;
      while(_loc2_ < inputArray.length)
      {
         this.questionArray.push(inputArray[_loc2_]);
         _loc2_ = _loc2_ + 1;
      }
   }
   function getCurrentQ()
   {
      return this.questionArray[this.qNum];
   }
   function getQByIncrement()
   {
      if(this.getIsValid(this.qNum + 1))
      {
         this.qNum = this.qNum + 1;
         return this.questionArray[this.qNum];
      }
      return null;
   }
   function getQByDecrement()
   {
      if(this.getIsValid(this.qNum - 1))
      {
         this.qNum = this.qNum - 1;
         return this.questionArray[this.qNum];
      }
      return null;
   }
   function getQByIndex(index)
   {
      if(this.getIsValid(index))
      {
         return this.questionArray[index];
      }
      return null;
   }
   function setQNum(initQNum)
   {
      this.qNum = initQNum;
   }
   function increaseQNum()
   {
      this.qNum = this.qNum + 1;
   }
   function decreaseQNum()
   {
      this.qNum = this.qNum - 1;
   }
   function getQNum()
   {
      return this.qNum;
   }
   function getQArray()
   {
      return this.questionArray;
   }
   function getQTotal()
   {
      return this.questionArray.length;
   }
   function getQuestionsLeft()
   {
      return this.getQTotal() - this.getQNum();
   }
   function getIsValid(index)
   {
      if(!(index < 0) && index < this.questionArray.length)
      {
         return true;
      }
      return false;
   }
   function movetoend()
   {
      var _loc2_ = this.getCurrentQ();
      trace(_loc2_);
      this.questionArray.splice(this.qNum,1);
      this.questionArray[this.questionArray.length] = _loc2_;
      trace(this.getCurrentQ());
   }
   function toString()
   {
      var _loc3_ = "Current question list holds " + this.getQTotal() + " questions: ";
      var _loc2_ = 0;
      while(_loc2_ < this.getQTotal)
      {
         _loc3_ = _loc3_ + (this.questionArray[_loc2_] + ", ");
         _loc2_ = _loc2_ + 1;
      }
      _loc3_ = _loc3_ + (" and " + this.optionArray.length + " options");
      return _loc3_;
   }
}
