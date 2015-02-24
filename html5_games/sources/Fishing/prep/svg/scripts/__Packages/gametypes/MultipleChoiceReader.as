class gametypes.MultipleChoiceReader extends AbstractXMLReader implements XMLReaderInterface
{
   function MultipleChoiceReader(parentScope, fileName, initCallBack)
   {
      super(parentScope,fileName,initCallBack);
   }
   function getXML()
   {
      var _loc2_ = this.xml.firstChild.childNodes;
      var _loc3_ = this.getAttributeNames(_loc2_);
      var _loc5_ = this.getBranchByName("gamedata",_loc2_);
      var _loc4_ = this.getOldTemplateBranch(_loc2_);
      this.language = this.getBranchByName("language",_loc2_).toString();
      this.questionList = this.compileQuestionList(this.generateQuestions(_loc5_,_loc3_),this.generateUniversalOptions(_loc4_));
      this.callBackFunction();
   }
   function generateQuestions(nodes, attributeNames)
   {
      var _loc14_ = new Array();
      var _loc3_ = 0;
      while(_loc3_ < nodes.length)
      {
         var _loc12_ = this.getNodeByName("question",nodes[_loc3_].childNodes);
         var _loc10_ = _loc12_.attributes;
         var _loc6_ = new Question(_loc10_.content,_loc10_.type);
         var _loc11_ = this.getNodeByName("response",nodes[_loc3_].childNodes);
         var _loc9_ = _loc11_.attributes;
         _loc6_.addResponse(_loc9_.content,_loc9_.type);
         var _loc7_ = this.getBranchByName("options",nodes[_loc3_].childNodes);
         var _loc8_ = new Array();
         var _loc2_ = 0;
         while(_loc2_ < _loc7_.length)
         {
            var _loc4_ = _loc7_[_loc2_].attributes;
            _loc8_.push(new Option(_loc4_.content,_loc4_.type));
            _loc2_ = _loc2_ + 1;
         }
         _loc6_.addOptions(_loc8_);
         if(!(nodes[_loc3_].attributes.mode == null))
         {
            _loc6_.setAttributes({mode:nodes[_loc3_].attributes.mode});
         }
         _loc14_.push(_loc6_);
         _loc3_ = _loc3_ + 1;
      }
      return _loc14_;
   }
   function generateUniversalOptions(inputArray)
   {
      return new Array();
   }
}
