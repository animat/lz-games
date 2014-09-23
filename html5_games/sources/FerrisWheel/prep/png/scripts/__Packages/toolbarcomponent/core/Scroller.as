class toolbarcomponent.core.Scroller
{
   static var scrollSpeed = 6;
   function Scroller(classScope, dir, scrollMe, holder, mask)
   {
      this.classScope = classScope;
      this.dir = dir;
      this.scrollMe = scrollMe;
      this.holderClip = holder;
      this.maskClip = mask;
      this.scrolling = false;
      this.clip = this.createScrollerClip();
      this.clip.onPress = mx.utils.Delegate.create(this,this.scrollTrue);
      this.clip.onRelease = mx.utils.Delegate.create(this,this.scrollFalse);
      this.clip.onEnterFrame = mx.utils.Delegate.create(this,this.scrollClip);
   }
   function scrollClip()
   {
      if(this.scrolling)
      {
         if(this.dir == "left" && this.isInBounds())
         {
            this.scrollMe._x = this.scrollMe._x + toolbarcomponent.core.Scroller.scrollSpeed;
         }
         if(this.dir == "right" && this.isInBounds())
         {
            this.scrollMe._x = this.scrollMe._x - toolbarcomponent.core.Scroller.scrollSpeed;
         }
      }
   }
   function isInBounds()
   {
      if(this.dir == "left")
      {
         if(this.scrollMe._x < this.maskClip._x)
         {
            return true;
         }
      }
      else if(this.scrollMe._x + this.scrollMe._width > this.maskClip._x + this.maskClip._width)
      {
         return true;
      }
      
      return false;
   }
   function createScrollerClip()
   {
      var _loc3_ = this.holderClip.getNextHighestDepth();
      var _loc2_ = this.holderClip.attachMovie("scrollMC","scrollLeft",_loc3_);
      if(this.dir == "left")
      {
         _loc2_._x = 1.5;
      }
      else
      {
         _loc2_._xscale = -100;
         _loc2_._x = this.maskClip._x + this.maskClip._width + _loc2_._width - 3;
      }
      return _loc2_;
   }
   function scrollTrue()
   {
      this.scrolling = true;
   }
   function scrollFalse()
   {
      this.scrolling = false;
   }
}
