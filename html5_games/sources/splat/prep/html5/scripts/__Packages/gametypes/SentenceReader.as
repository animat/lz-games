class gametypes.SentenceReader extends AbstractXMLReader implements XMLReaderInterface
{
   function SentenceReader(parentScope, fileName, initCallBack)
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
      var _loc2_ = 0;
      while(_loc2_ < nodes.length)
      {
         var _loc12_ = nodes[_loc2_].childNodes[0];
         var _loc10_ = _loc12_.attributes;
         var _loc5_ = new Question(_loc10_.content,_loc10_.type);
         var _loc11_ = nodes[_loc2_].childNodes[1];
         var _loc9_ = _loc11_.attributes;
         _loc5_.addResponse(_loc9_.content,_loc9_.type);
         var _loc13_ = nodes[_loc2_].childNodes[2];
         var _loc4_ = _loc13_.childNodes;
         var _loc7_ = {};
         var _loc6_ = new Array();
         var _loc1_ = 0;
         while(_loc1_ < _loc4_.length)
         {
            var _loc3_ = _loc4_[_loc1_];
            _loc6_[_loc1_] = _loc3_.firstChild.nodeValue;
            _loc1_ = _loc1_ + 1;
         }
         _loc7_.sentence = _loc6_;
         _loc5_.setAttributes(_loc7_);
         _loc14_.push(_loc5_);
         _loc2_ = _loc2_ + 1;
      }
      return _loc14_;
   }
   function generateUniversalOptions(inputArray)
   {
      var _loc6_ = new Array();
      var _loc2_ = 0;
      while(_loc2_ < inputArray.length)
      {
         var _loc1_ = 0;
         while(_loc1_ < inputArray[_loc2_].childNodes.length)
         {
            var _loc3_ = inputArray[_loc2_].childNodes[_loc1_].attributes;
            var _loc5_ = new Option(_loc3_.content,_loc3_.type);
            trace("optn :: " + inputArray[_loc2_][_loc1_]);
            _loc6_.push(_loc5_);
            _loc1_ = _loc1_ + 1;
         }
         _loc2_ = _loc2_ + 1;
      }
      return _loc6_;
   }
}
