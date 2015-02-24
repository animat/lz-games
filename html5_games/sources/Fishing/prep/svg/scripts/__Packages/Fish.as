class Fish
{
   function Fish(main, stim, fishType, pond, fishID)
   {
      this.pond = pond;
      this.__fishType = fishType;
      this.main = main;
      this.stim = stim;
      this.caught = false;
      this.mc = pond.fishLayer.attachMovie(this.__fishType,"f" + fishID,pond.fishLayer.getNextHighestDepth());
      this.mc.txt = stim.getContent();
      var _loc4_ = pond.pondBoundaryLeft._x + Math.round(Math.random() * (pond.pondBoundaryRight._x - pond.pondBoundaryLeft._x));
      var _loc3_ = pond.pondBoundaryRight._y + Math.round(Math.random() * pond.pondBoundaryRight._height);
      this.tmpStartPoint = new flash.geom.Point(_loc4_,_loc3_);
      this.tmpEndPoint = new flash.geom.Point(0,0);
      this.chooseRandomDirection();
      this.chooseStartEndPoint();
      this.swim();
      this.mc.onPress = mx.utils.Delegate.create(this,this.catchMe);
      this.mc.onEnterFrame = mx.utils.Delegate.create(this,this.checkTweenStatus);
   }
   function chooseRandomDirection()
   {
      var _loc2_ = Math.floor(Math.random() * 2);
      if(_loc2_ == 0)
      {
         this.leftDirection = false;
      }
      else
      {
         this.leftDirection = true;
      }
   }
   function chooseStartEndPoint()
   {
      this.leftDirection = !this.leftDirection;
      if(this.leftDirection == true)
      {
         this.mc.gotoAndPlay("righttoleft");
         this.swimRightToLeft();
      }
      else
      {
         this.mc.gotoAndPlay("lefttoright");
         this.swimLeftToRight();
      }
      this.speed = Math.round(120 + Math.random() * 200);
   }
   function swim()
   {
      this.myTweenX = new mx.transitions.Tween(this.mc,"_x",mx.transitions.easing.None.easeNone,this.tmpStartPoint.x,this.tmpEndPoint.x,this.speed,false);
      this.myTweenY = new mx.transitions.Tween(this.mc,"_y",mx.transitions.easing.None.easeNone,this.tmpStartPoint.y,this.tmpEndPoint.y,this.speed,false);
   }
   function __get__fishType()
   {
      var _loc2_ = this.__fishType;
      return _loc2_;
   }
   function checkTweenStatus()
   {
      if(!(this.myTweenX == undefined))
      {
         if(Math.abs(this.myTweenX.__get__finish() - this.myTweenX.__get__position()) < 2)
         {
            if(Math.abs(this.myTweenX.__get__finish() - this.pond.tergetFood._x) < 2)
            {
               this.main.evaluate(this);
               this.stopGlowing();
            }
            this.chooseStartEndPoint();
            this.myTweenX.continueTo(this.tmpEndPoint.x,this.speed);
            this.myTweenY.continueTo(this.tmpEndPoint.y,this.speed);
         }
      }
   }
   function swimLeftToRight()
   {
      if(this.tmpStartPoint.x == 0)
      {
         this.tmpStartPoint.x = this.pond.pondBoundaryLeft._x;
         this.tmpStartPoint.y = this.pond.pondBoundaryLeft._y + Math.random() * this.pond.pondBoundaryLeft._height;
      }
      this.tmpEndPoint.x = this.pond.pondBoundaryRight._x;
      this.tmpEndPoint.y = this.pond.pondBoundaryLeft._y + Math.random() * this.pond.pondBoundaryRight._height;
   }
   function swimRightToLeft()
   {
      if(this.tmpStartPoint.x == 0)
      {
         this.tmpStartPoint.x = this.pond.pondBoundaryRight._x;
         this.tmpStartPoint.y = this.pond.pondBoundaryRight._y + Math.random() * this.pond.pondBoundaryRight._height;
      }
      this.tmpEndPoint.x = this.pond.pondBoundaryLeft._x;
      this.tmpEndPoint.y = this.pond.pondBoundaryLeft._y + Math.random() * this.pond.pondBoundaryLeft._height;
   }
   function catchMe()
   {
      if(!this.main.__get__busy())
      {
         this.main.setBusy();
         if(this.myTweenX.__get__position() < this.pond.tergetFood._x)
         {
            if(this.leftDirection == true)
            {
               this.leftDirection = false;
               this.mc.gotoAndPlay("lefttoright");
            }
         }
         else if(this.leftDirection == false)
         {
            this.leftDirection = true;
            this.mc.gotoAndPlay("righttoleft");
         }
         
         this.tmpEndPoint.x = this.pond.tergetFood._x;
         this.tmpEndPoint.y = this.pond.tergetFood._y;
         this.startGlowing();
         this.myTweenX.continueTo(this.tmpEndPoint.x,25);
         this.myTweenY.continueTo(this.tmpEndPoint.y,25);
      }
   }
   function pauseTween()
   {
      this.myTweenX.stop();
      this.myTweenY.stop();
   }
   function resumeTween()
   {
      this.myTweenX.resume();
      this.myTweenY.resume();
   }
   function startGlowing()
   {
      this.mc.filters = new Array(new flash.filters.GlowFilter(255));
   }
   function stopGlowing()
   {
      this.mc.filters = new Array();
   }
   function isCaught()
   {
      return this.caught;
   }
   function destroy()
   {
      return false;
   }
   function getStimulus()
   {
      return this.stim;
   }
}
