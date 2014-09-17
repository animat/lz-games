class gametypes.GroupingReader extends AbstractXMLReader implements XMLReaderInterface
{
   function GroupingReader(parentScope, fileName, initCallBack)
   {
      super(parentScope,fileName,initCallBack);
   }
   function getXML()
   {
      var _loc2_ = this.xml.firstChild.childNodes;
      var _loc3_ = this.getAttributeNames(_loc2_);
      var _loc5_ = this.getBranchByName("gamedata",_loc2_);
      var _loc4_ = this.getBranchByName("templatedata",_loc2_);
      this.language = this.getBranchByName("language",_loc2_).toString();
      this.questionList = this.compileQuestionList(this.generateQuestions(_loc5_,_loc3_),this.generateUniversalOptions(_loc4_));
      this.callBackFunction();
   }
   function generateQuestions(nodes, attributeNames)
   {
      var _loc10_ = new Array();
      var _loc5_ = 0;
      while(_loc5_ < nodes.length)
      {
         var _loc7_ = nodes[_loc5_].childNodes[0];
         var _loc6_ = _loc7_.attributes;
         var _loc4_ = new Question(_loc6_.content,_loc6_.type);
         var _loc3_ = nodes[_loc5_].childNodes[1];
         var _loc9_ = _loc3_.attributes.answer == "all";
         _loc4_.setAnswerAll(_loc9_);
         var _loc1_ = 0;
         while(_loc1_ < _loc3_.childNodes.length)
         {
            var _loc2_ = _loc3_.childNodes[_loc1_].attributes;
            _loc4_.addResponse(_loc2_.content,_loc2_.type);
            _loc1_ = _loc1_ + 1;
         }
         _loc10_.push(_loc4_);
         _loc5_ = _loc5_ + 1;
      }
      return _loc10_;
   }
   function generateUniversalOptions(inputArray)
   {
      var _loc5_ = new Array();
      var _loc1_ = 0;
      while(_loc1_ < inputArray.length)
      {
         if(inputArray[_loc1_].attributes.label == "theme")
         {
            var _loc2_ = inputArray[_loc1_].firstChild.attributes;
            var _loc4_ = new Option(_loc2_.content,_loc2_.type);
            _loc5_.push(_loc4_);
            return _loc5_;
         }
         _loc1_ = _loc1_ + 1;
      }
   }
}
