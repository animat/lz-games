class gametypes.MatchingReader extends AbstractXMLReader implements XMLReaderInterface
{
   function MatchingReader(parentScope, fileName, initCallBack)
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
      var _loc14_ = new Array();
      var _loc6_ = 0;
      while(_loc6_ < nodes.length)
      {
         var _loc12_ = nodes[_loc6_].childNodes[0];
         var _loc11_ = _loc12_.attributes;
         var _loc4_ = new Question(_loc11_.content,_loc11_.type);
         var _loc5_ = nodes[_loc6_].childNodes[1];
         var _loc13_ = _loc5_.attributes.answer == "all";
         _loc4_.setAnswerAll(_loc13_);
         var _loc1_ = 0;
         while(_loc1_ < _loc5_.childNodes.length)
         {
            var _loc2_ = _loc5_.childNodes[_loc1_].attributes;
            _loc4_.addResponse(_loc2_.content,_loc2_.type);
            _loc1_ = _loc1_ + 1;
         }
         var _loc3_ = nodes[_loc6_].childNodes[2];
         var _loc9_ = new Object();
         _loc1_ = 0;
         while(_loc1_ < _loc3_.childNodes.length)
         {
            var _loc8_ = _loc3_.childNodes[_loc1_].nodeName;
            var _loc7_ = _loc3_.childNodes[_loc1_].firstChild.nodeValue;
            _loc9_[_loc8_] = _loc7_;
            _loc1_ = _loc1_ + 1;
         }
         _loc4_.setAttributes(_loc9_);
         _loc14_.push(_loc4_);
         _loc6_ = _loc6_ + 1;
      }
      return _loc14_;
   }
   function generateUniversalOptions(inputArray)
   {
      var _loc7_ = new Array();
      var _loc2_ = 0;
      while(_loc2_ < inputArray.length)
      {
         var _loc6_ = inputArray[_loc2_].attributes.linkedto;
         var _loc1_ = 0;
         while(_loc1_ < inputArray[_loc2_].childNodes.length)
         {
            var _loc3_ = inputArray[_loc2_].childNodes[_loc1_].attributes;
            var _loc4_ = new Option(_loc3_.content,_loc3_.type);
            _loc4_.setOptionGroup(_loc6_);
            _loc7_.push(_loc4_);
            _loc1_ = _loc1_ + 1;
         }
         _loc2_ = _loc2_ + 1;
      }
      return _loc7_;
   }
}
