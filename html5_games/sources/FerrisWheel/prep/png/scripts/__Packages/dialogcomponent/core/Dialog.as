class dialogcomponent.core.Dialog extends MovieClip
{
   static var listeners = new Array();
   function Dialog()
   {
      super();
      this._x = Stage.width / 2 - this._width / 2;
      this._y = Stage.height / 2 - this._height / 2;
      this.buttons = new Array();
      this._visible = false;
      this.container = this.createEmptyMovieClip("container",1);
   }
   function handle()
   {
      var _loc2_ = this;
      (dialogcomponent.core.Dialog)_loc2_.scope.hide(_loc2_.label.text);
   }
   function show(btns, text, onResult)
   {
      this.setShade();
      this.clearButtons();
      var _loc2_ = 0;
      while(_loc2_ < btns.length)
      {
         this.addButton(btns[_loc2_]);
         _loc2_ = _loc2_ + 1;
      }
      this.enableListeners(false);
      this.onResult = onResult;
      this.textfield.text = text;
      this.swapDepths(this._parent.getNextHighestDepth());
      this._visible = this.shade._visible = true;
      this.fade(this,100);
      this.fade(this.shade,30);
   }
   function hide(result)
   {
      this.fade(this,0);
      this.fade(this.shade,0);
      this.enableListeners(true);
      if(!(this.onResult == null))
      {
         this.onResult(result);
      }
   }
   function setShade()
   {
      this.shade._width = Stage.width;
      this.shade._height = Stage.height;
      var _loc3_ = new Object({x:0,y:0});
      _root.localToGlobal(_loc3_);
      this.globalToLocal(_loc3_);
      this.shade._x = _loc3_.x;
      this.shade._y = _loc3_.y;
   }
   function clearButtons()
   {
      for(var _loc2_ in this.buttons)
      {
         this.buttons[_loc2_].removeMovieClip();
      }
      this.buttons = new Array();
   }
   function addButton(str)
   {
      var _loc3_ = this.container.getNextHighestDepth();
      var _loc2_ = this.container.attachMovie("DialogButton","btn_" + _loc3_,_loc3_);
      _loc2_.label.text = str;
      _loc2_._x = _loc2_._width * this.buttons.length + 10 * this.buttons.length;
      this.container._x = this.background._width / 2 - this.container._width / 2;
      this.container._y = this.background._height - this.container._height - 5;
      _loc2_.scope = this;
      _loc2_.onRelease = this.handle;
      this.buttons.push(_loc2_);
   }
   function fade(mc, target)
   {
      mc.onEnterFrame = function()
      {
         this._alpha = this._alpha + (target - this._alpha) / 2;
         if(Math.abs(target - this._alpha) < 5)
         {
            this._alpha = target;
            this._visible = !(target == 0);
            delete this.onEnterFrame;
         }
      };
   }
   function enableListeners(enable)
   {
      for(var _loc1_ in dialogcomponent.core.Dialog.listeners)
      {
         dialogcomponent.core.Dialog.listeners[_loc1_].enabled = enable;
      }
   }
   static function newInstance(target, name)
   {
      var _loc1_ = target.getNextHighestDepth();
      var _loc2_ = (dialogcomponent.core.Dialog)target.attachMovie("Dialog",name,_loc1_);
      return _loc2_;
   }
   static function addListener(Obj)
   {
      dialogcomponent.core.Dialog.removeListener(Obj);
      dialogcomponent.core.Dialog.listeners.push(Obj);
   }
   static function removeListener(Obj)
   {
      var _loc1_ = dialogcomponent.core.Dialog.listeners.length;
      while(_loc1_--)
      {
         if(dialogcomponent.core.Dialog.listeners[_loc1_] == Obj)
         {
            dialogcomponent.core.Dialog.listeners.splice(_loc1_,1);
         }
      }
   }
}
