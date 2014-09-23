class mx.lang.Locale
{
   static var xmlLang = System.capabilities.language;
   static var xmlMap = new Object();
   static var stringMap = new Object();
   static var delayedInstanceArray = new Array();
   static var currentXMLMapIndex = -1;
   static var autoReplacment = true;
   static var stringMapList = new Object();
   function Locale()
   {
   }
   static function __get__autoReplace()
   {
      return mx.lang.Locale.autoReplacment;
   }
   static function __set__autoReplace(auto)
   {
      mx.lang.Locale.autoReplacment = auto;
      return mx.lang.Locale.__get__autoReplace();
   }
   static function __get__languageCodeArray()
   {
      var _loc1_ = new Array();
      for(var _loc2_ in mx.lang.Locale.xmlMap)
      {
         if(!(_loc2_ == undefined))
         {
            _loc1_.push(_loc2_);
         }
      }
      return _loc1_;
   }
   static function __get__stringIDArray()
   {
      var _loc1_ = new Array();
      for(var _loc2_ in mx.lang.Locale.stringMap)
      {
         if(!(_loc2_ == ""))
         {
            _loc1_.push(_loc2_);
         }
      }
      return _loc1_;
   }
   static function setFlaName(name)
   {
      mx.lang.Locale.flaName = name;
   }
   static function getDefaultLang()
   {
      return mx.lang.Locale.defaultLang;
   }
   static function setDefaultLang(langCode)
   {
      mx.lang.Locale.defaultLang = langCode;
   }
   static function addXMLPath(langCode, path)
   {
      if(mx.lang.Locale.xmlMap[langCode] == undefined)
      {
         mx.lang.Locale.xmlMap[langCode] = new Array();
      }
      mx.lang.Locale.xmlMap[langCode].push(path);
   }
   static function addDelayedInstance(instance, stringID)
   {
      mx.lang.Locale.delayedInstanceArray.push({inst:instance,strID:stringID});
      var _loc1_ = mx.lang.Locale.delayedInstanceArray.length;
   }
   static function checkXMLStatus()
   {
      var _loc1_ = mx.lang.Locale.xmlDoc.loaded && mx.lang.Locale.xmlDoc.status == 0;
      return _loc1_;
   }
   static function setLoadCallback(loadCallback)
   {
      mx.lang.Locale.callback = loadCallback;
   }
   static function loadString(id)
   {
      return mx.lang.Locale.stringMap[id];
   }
   static function loadStringEx(stringID, languageCode)
   {
      var _loc1_ = mx.lang.Locale.stringMapList[languageCode];
      if(!(_loc1_ == undefined))
      {
         return _loc1_[stringID];
      }
      return "";
   }
   static function setString(stringID, languageCode, stringValue)
   {
      var _loc1_ = mx.lang.Locale.stringMapList[languageCode];
      if(!(_loc1_ == undefined))
      {
         _loc1_[stringID] = stringValue;
      }
      else
      {
         _loc1_ = new Object();
         _loc1_[stringID] = stringValue;
         mx.lang.Locale.stringMapList[languageCode] = _loc1_;
      }
   }
   static function initialize()
   {
      mx.lang.Locale.xmlDoc = new XML();
      mx.lang.Locale.xmlDoc.ignoreWhite = true;
      mx.lang.Locale.xmlDoc.onLoad = function(success)
      {
         mx.lang.Locale.onXMLLoad(success);
         mx.lang.Locale.callback.call(null,success);
      };
      var _loc1_ = mx.lang.Locale.xmlLang;
      if(mx.lang.Locale.xmlMap[mx.lang.Locale.xmlLang] == undefined)
      {
         _loc1_ = mx.lang.Locale.defaultLang;
      }
      mx.lang.Locale.currentXMLMapIndex = 0;
      mx.lang.Locale.xmlDoc.load(mx.lang.Locale.xmlMap[_loc1_][0]);
   }
   static function loadLanguageXML(xmlLanguageCode, customXmlCompleteCallback)
   {
      var _loc1_ = xmlLanguageCode != ""?xmlLanguageCode:System.capabilities.language;
      if(mx.lang.Locale.xmlMap[_loc1_] == undefined)
      {
         _loc1_ = mx.lang.Locale.defaultLang;
      }
      if(customXmlCompleteCallback)
      {
         mx.lang.Locale.callback = customXmlCompleteCallback;
      }
      if(mx.lang.Locale.stringMapList[xmlLanguageCode] == undefined)
      {
         if(mx.lang.Locale.xmlDoc)
         {
            delete mx.lang.Locale.xmlDoc;
         }
         mx.lang.Locale.xmlDoc = new XML();
         mx.lang.Locale.xmlDoc.ignoreWhite = true;
         mx.lang.Locale.xmlDoc.onLoad = function(success)
         {
            mx.lang.Locale.onXMLLoad(success);
            mx.lang.Locale.callback.call(null,success);
         };
         mx.lang.Locale.xmlDoc.load(mx.lang.Locale.xmlMap[_loc1_][0]);
      }
      else
      {
         mx.lang.Locale.stringMap = mx.lang.Locale.stringMapList[_loc1_];
         if(mx.lang.Locale.callback)
         {
            mx.lang.Locale.callback.call(null,true);
         }
      }
      mx.lang.Locale.currentLang = _loc1_;
   }
   static function onXMLLoad(success)
   {
      if(success == true)
      {
         delete mx.lang.Locale.stringMap;
         mx.lang.Locale.stringMap = new Object();
         mx.lang.Locale.parseStringsXML(mx.lang.Locale.xmlDoc);
         if(mx.lang.Locale.stringMapList[mx.lang.Locale.currentLang] == undefined)
         {
            mx.lang.Locale.stringMapList[mx.lang.Locale.currentLang] = mx.lang.Locale.stringMap;
         }
         if(mx.lang.Locale.autoReplacment)
         {
            mx.lang.Locale.assignDelayedInstances();
         }
      }
   }
   static function parseStringsXML(doc)
   {
      if(doc.childNodes.length > 0 && doc.childNodes[0].nodeName == "xliff")
      {
         mx.lang.Locale.parseXLiff(doc.childNodes[0]);
      }
   }
   static function parseXLiff(node)
   {
      if(node.childNodes.length > 0 && node.childNodes[0].nodeName == "file")
      {
         mx.lang.Locale.parseFile(node.childNodes[0]);
      }
   }
   static function parseFile(node)
   {
      if(node.childNodes.length > 1 && node.childNodes[1].nodeName == "body")
      {
         mx.lang.Locale.parseBody(node.childNodes[1]);
      }
   }
   static function parseBody(node)
   {
      var _loc1_ = 0;
      while(_loc1_ < node.childNodes.length)
      {
         if(node.childNodes[_loc1_].nodeName == "trans-unit")
         {
            mx.lang.Locale.parseTransUnit(node.childNodes[_loc1_]);
         }
         _loc1_ = _loc1_ + 1;
      }
   }
   static function parseTransUnit(node)
   {
      var _loc2_ = node.attributes.resname;
      if(_loc2_.length > 0 && node.childNodes.length > 0 && node.childNodes[0].nodeName == "source")
      {
         var _loc1_ = mx.lang.Locale.parseSource(node.childNodes[0]);
         if(_loc1_.length > 0)
         {
            mx.lang.Locale.stringMap[_loc2_] = _loc1_;
         }
      }
   }
   static function parseSource(node)
   {
      if(node.childNodes.length > 0)
      {
         return node.childNodes[0].nodeValue;
      }
      return "";
   }
   static function assignDelayedInstances()
   {
      var _loc1_ = 0;
      while(_loc1_ < mx.lang.Locale.delayedInstanceArray.length)
      {
         if(!(mx.lang.Locale.delayedInstanceArray[_loc1_] == undefined))
         {
            var _loc3_ = mx.lang.Locale.delayedInstanceArray[_loc1_].inst;
            var _loc2_ = mx.lang.Locale.delayedInstanceArray[_loc1_].strID;
            _loc3_.text = mx.lang.Locale.loadString(_loc2_);
         }
         _loc1_ = _loc1_ + 1;
      }
   }
}
