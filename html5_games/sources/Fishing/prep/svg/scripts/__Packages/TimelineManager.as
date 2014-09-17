class TimelineManager
{
   static var interval = 500;
   static var mcs = [];
   function TimelineManager()
   {
   }
   static function registerClip(newClip, callbackObj, newCallback, newArgs, newLabel)
   {
      var _loc1_ = !(newLabel == null || newLabel == undefined)?TimelineManager.findEndFrame(newClip,newLabel):1;
      var _loc4_ = mx.utils.Delegate.create(callbackObj,newCallback);
      TimelineManager.mcs.push({clip:newClip,callback:_loc4_,args:newArgs,endFrame:_loc1_});
      TimelineManager.runInterval();
   }
   static function pauseAllClips()
   {
      var _loc1_ = 0;
      while(_loc1_ < TimelineManager.mcs.length)
      {
         TimelineManager.mcs[_loc1_].stop();
         _loc1_ = _loc1_ + 1;
      }
   }
   static function resumeAllClips()
   {
      var _loc1_ = 0;
      while(_loc1_ < TimelineManager.mcs.length)
      {
         TimelineManager.mcs[_loc1_].play();
         _loc1_ = _loc1_ + 1;
      }
   }
   static function runInterval()
   {
      TimelineManager.intervalID = setInterval(TimelineManager.checkClips,TimelineManager.interval);
   }
   static function checkClips()
   {
      if(TimelineManager.mcs.length > 0)
      {
         var _loc1_ = 0;
         while(_loc1_ < TimelineManager.mcs.length)
         {
            if(TimelineManager.mcs[_loc1_].clip._currentframe == TimelineManager.mcs[_loc1_].endFrame)
            {
               TimelineManager.mcs[_loc1_].callback(TimelineManager.mcs[_loc1_].args.join(", "));
               TimelineManager.removeClip(_loc1_);
            }
            _loc1_ = _loc1_ + 1;
         }
      }
   }
   static function findEndFrame(mc, lbl)
   {
      var _loc1_ = mc.duplicateMovieClip("dummy",mc._parent.getNextHighestDepth());
      _loc1_._visible = false;
      _loc1_.gotoAndStop(lbl);
      var _loc2_ = _loc1_._currentframe;
      _loc1_.removeMovieClip();
      return _loc2_;
   }
   static function removeClip(index)
   {
      TimelineManager.mcs.splice(index,1);
      if(TimelineManager.mcs.length == 0)
      {
         clearInterval(TimelineManager.intervalID);
      }
   }
}
