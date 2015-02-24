class gametypes.RecognitionReader extends AbstractXMLReader implements XMLReaderInterface
{
   function RecognitionReader(parentScope, fileName, initCallBack)
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
      var _loc9_ = new Array();
      var _loc2_ = 0;
      while(_loc2_ < nodes.length)
      {
         var _loc8_ = nodes[_loc2_].childNodes[0];
         var _loc7_ = _loc8_.attributes;
         var _loc6_ = new Question(_loc7_.content,_loc7_.type);
         var _loc1_ = 0;
         while(_loc1_ < nodes[_loc2_].childNodes.length)
         {
            var _loc3_ = nodes[_loc2_].childNodes[_loc1_];
            if(_loc3_.nodeName == "response")
            {
               var _loc4_ = _loc3_.attributes;
               _loc6_.addResponse(_loc4_.content,_loc4_.type);
            }
            _loc1_ = _loc1_ + 1;
         }
         _loc9_.push(_loc6_);
         _loc2_ = _loc2_ + 1;
      }
      return _loc9_;
   }
   function generateUniversalOptions(inputArray)
   {
      return new Array();
   }
}
