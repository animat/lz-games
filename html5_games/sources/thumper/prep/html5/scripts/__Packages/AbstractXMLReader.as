class AbstractXMLReader
{
   function AbstractXMLReader(parentScope, fileName, initCallBack)
   {
      this.xml = new XML();
      this.xmlInit(fileName);
      this.itemData = new Array();
      this.callBackFunction = mx.utils.Delegate.create(parentScope,initCallBack);
   }
   function xmlInit(fileName)
   {
      this.xml.ignoreWhite = true;
      this.xml.onLoad = mx.utils.Delegate.create(this,this.getXML);
      this.xml.load(fileName);
   }
   function getXML()
   {
      throw new Error("AbstractXMLReader :: getXML() :: Method needs to be implemented by gametype-Reader subclass");
   }
   function compileQuestionList(inputArray, optionsArray)
   {
      var _loc1_ = new QuestionList();
      _loc1_.addQuestions(inputArray);
      _loc1_.addOptions(optionsArray);
      return _loc1_;
   }
   function getNodeByName(findMe, node)
   {
      var _loc1_ = 0;
      while(_loc1_ < node.length)
      {
         if(node[_loc1_].nodeName == findMe)
         {
            return node[_loc1_];
         }
         _loc1_ = _loc1_ + 1;
      }
   }
   function getBranchByName(branchName, node)
   {
      var _loc1_ = 0;
      while(_loc1_ < node.length)
      {
         if(node[_loc1_].nodeName == branchName)
         {
            return node[_loc1_].childNodes;
         }
         _loc1_ = _loc1_ + 1;
      }
      return null;
   }
   function copyProperties(target, source_node, props)
   {
      for(var _loc2_ in props)
      {
         target[props[_loc2_]] = source_node.attributes[props[_loc2_]];
      }
   }
   function getAttributeNames(node)
   {
      var _loc4_ = new Array();
      var _loc3_ = this.getBranchByName("format",node);
      var _loc2_ = 0;
      while(_loc2_ < _loc3_.length)
      {
         _loc4_.push(_loc3_[_loc2_].attributes.name);
         _loc2_ = _loc2_ + 1;
      }
      return _loc4_;
   }
   function getQuestionList()
   {
      return this.questionList;
   }
   function getTemplateBranch()
   {
      return this.getBranchByName("templatedata",this.xml.firstChild.childNodes);
   }
   function getOldTemplateBranch(node)
   {
      var _loc1_ = 0;
      while(_loc1_ < node.length)
      {
         if(node[_loc1_].nodeName == "gamedata")
         {
            if(node[_loc1_].firstChild.nodeName == "customdata")
            {
               return node[_loc1_].childNodes;
            }
         }
         _loc1_ = _loc1_ + 1;
      }
   }
   function getLanguage()
   {
      return this.language;
   }
   function getLanguageCode()
   {
      var _loc2_ = "";
      switch(this.language.toUpperCase())
      {
         case "SPANISH":
            _loc2_ = "es";
            break;
         case "FRENCH":
            _loc2_ = "fr";
            break;
         case "GERMAN":
            _loc2_ = "de";
            break;
         case "ITALIAN":
            _loc2_ = "it";
            break;
         case "ENGLISH":
            _loc2_ = "en";
            break;
         case "LATIN":
            _loc2_ = "lat";
            break;
         default:
            _loc2_ = "en";
      }
      return _loc2_;
   }
   function getPercentLoaded()
   {
      return Math.floor(this.xml.getBytesLoaded() / this.xml.getBytesTotal() * 100);
   }
}
