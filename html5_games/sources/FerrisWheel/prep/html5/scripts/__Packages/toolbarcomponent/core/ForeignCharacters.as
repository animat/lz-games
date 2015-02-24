class toolbarcomponent.core.ForeignCharacters
{
   var isVisible = false;
   var menuCounter = 0;
   function ForeignCharacters(lang, targetMC, x, y, w, e, f)
   {
      this.requestedLanguage = lang;
      this.targetMC = targetMC;
      this.initX = x;
      this.initY = y;
      this.initWidth = w;
      this.linkage = e;
      this.callBack = f;
      if(!(this.linkage == null))
      {
         var _loc4_ = targetMC.attachMovie(this.linkage,"menuButton",targetMC.getNextHighestDepth(),{_x:x,_y:y});
         _loc4_.onRelease = mx.utils.Delegate.create(this,this.menuFunc);
         dialogcomponent.core.Dialog.addListener(_loc4_);
      }
      else
      {
         targetMC.onMouseMove = mx.utils.Delegate.create(this,this.trackMouse);
      }
      this.holderClip = targetMC.createEmptyMovieClip("characterHolder",9997);
      this.holderClip._x = Stage.width + 40;
      this.holderClip._y = this.initY;
      this.buttonHolderClip = this.holderClip.createEmptyMovieClip("buttonHolderClip",this.holderClip.getNextHighestDepth());
      this.buttonHolderClip._x = 16;
      this.maskClip = this.holderClip.attachMovie("mask","mask",this.holderClip.getNextHighestDepth());
      this.maskClip._x = 16;
      this.maskClip._width = this.initWidth;
      this.buttonHolderClip.setMask(this.maskClip);
      this.background = this.holderClip.attachMovie("foreignbackground","background",this.holderClip.getNextHighestDepth());
      this.background._width = this.initWidth + 32;
      this.background.swapDepths(this.buttonHolderClip);
      this.background._alpha = 75;
      this.showable = true;
      this.languageSets = new Array();
      TextField.prototype.onSetFocus = function()
      {
         _global.activeText = this;
      };
      mx.controls.TextInput.prototype.onSetFocus = function()
      {
         _global.activeText = this;
      };
      this.getXML("../gameAssets/toolbarcomponent/characters.xml");
   }
   function menuFunc()
   {
      if(this.menuCounter == 0)
      {
         this.menuCounter = this.menuCounter + 1;
         new mx.transitions.Tween(this.holderClip,"_y",mx.transitions.easing.Elastic.easeOut,this.initY,this.initY,2,true);
         new mx.transitions.Tween(this.holderClip,"_x",mx.transitions.easing.Elastic.easeOut,Stage.width,this.initX - this.background._width,20,false);
      }
      else
      {
         this.menuCounter = 0;
         new mx.transitions.Tween(this.holderClip,"_y",mx.transitions.easing.Elastic.easeOut,this.initY,this.initY,2,true);
         new mx.transitions.Tween(this.holderClip,"_x",mx.transitions.easing.Elastic.easeOut,this.initX - this.background._width,Stage.width + 40,20,false);
      }
   }
   function makeScroller()
   {
      this.scrollLeft = new toolbarcomponent.core.Scroller(this,"left",this.buttonHolderClip,this.holderClip,this.maskClip);
      this.scrollRight = new toolbarcomponent.core.Scroller(this,"right",this.buttonHolderClip,this.holderClip,this.maskClip);
   }
   function trackMouse()
   {
      this.holderClip._x = this.initX;
      if(this.showable)
      {
         if(_root._ymouse > 370)
         {
            if(!this.isVisible)
            {
               this.isVisible = true;
               new mx.transitions.Tween(this.holderClip,"_y",mx.transitions.easing.Elastic.easeOut,Stage.height,370,1,true);
            }
         }
         else if(this.isVisible)
         {
            this.isVisible = false;
            new mx.transitions.Tween(this.holderClip,"_y",mx.transitions.easing.Elastic.easeOut,370,420,1,true);
         }
         
      }
   }
   function getXML(xml_file)
   {
      this.xml = new XML();
      this.xml.ignoreWhite = true;
      this.xml.onLoad = mx.utils.Delegate.create(this,this.createLanguagesArray);
      this.xml.load(xml_file);
   }
   function createLanguagesArray(success)
   {
      this.totalLangNum = this.xml.firstChild.childNodes.length;
      var _loc4_ = 0;
      while(_loc4_ < this.totalLangNum)
      {
         var _loc6_ = this.xml.firstChild.childNodes[_loc4_].attributes.language;
         var _loc5_ = new toolbarcomponent.core.CharacterSet(_loc6_);
         var _loc3_ = this.xml.firstChild.childNodes[_loc4_].childNodes;
         var _loc2_ = 0;
         while(_loc2_ < _loc3_.length)
         {
            _loc5_.addCharacter(_loc3_[_loc2_].firstChild);
            _loc2_ = _loc2_ + 1;
         }
         this.languageSets.push(_loc5_);
         _loc4_ = _loc4_ + 1;
      }
      this.displayCharacterSet(this.requestedLanguage);
   }
   function displayCharacterSet(lang)
   {
      var _loc7_ = this.getCharacterSet(lang);
      var _loc5_ = _loc7_.getCharacters();
      var _loc2_ = 0;
      while(_loc2_ < _loc5_.length)
      {
         var _loc4_ = this.buttonHolderClip.getNextHighestDepth();
         var _loc3_ = this.buttonHolderClip.attachMovie("letter_btn","letter_" + _loc2_,_loc4_);
         _loc3_._x = 0 + _loc2_ * (_loc3_._width + 5);
         _loc3_._y = 0;
         var _loc6_ = new toolbarcomponent.core.ForeignLetter(this,_loc3_,_loc5_[_loc2_],this.callBack);
         _loc2_ = _loc2_ + 1;
      }
      if(this.buttonHolderClip._width > this.maskClip._width)
      {
         this.makeScroller();
      }
   }
   function getCharacterSet(lang)
   {
      var _loc2_ = 0;
      while(_loc2_ < this.totalLangNum)
      {
         if(this.languageSets[_loc2_].getLanguage() == lang)
         {
            return this.languageSets[_loc2_];
         }
         _loc2_ = _loc2_ + 1;
      }
      trace("Foreign Character :: Error -- Could not find requested language [" + lang + "].");
      return null;
   }
   function destroy()
   {
   }
   function setShowable(v)
   {
      this.showable = v;
   }
}
