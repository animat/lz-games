class OptionFixture
{
   function OptionFixture()
   {
      this.optionArray = new Array();
   }
   function addOptions(initOptionArray)
   {
      var _loc2_ = 0;
      while(_loc2_ < initOptionArray.length)
      {
         this.optionArray.push(initOptionArray[_loc2_]);
         _loc2_ = _loc2_ + 1;
      }
   }
   function getOByIndex(index)
   {
      return this.optionArray[index];
   }
   function getOptions()
   {
      return this.optionArray;
   }
   function getOTotal()
   {
      return this.optionArray.length;
   }
}
