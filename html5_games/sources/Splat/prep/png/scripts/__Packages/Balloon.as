class Balloon
{
   function Balloon(manager, holder, index, letter, depth)
   {
      this.manager = manager;
      this.letter = letter;
      this.popped = false;
      this.dragging = false;
      this.maxSpeed = 60;
      this.textFmt = new TextFormat("Arial",32,16777215,true);
      this.clip = holder.createEmptyMovieClip("balloon_" + index,depth);
      this.txtfield = this.clip.createTextField("txtfield",0,10,0,0,0);
      this.clip.txtfield.autoSize = true;
      this.clip.txtfield.selectable = false;
      this.clip.txtfield.setNewTextFormat(this.textFmt);
      this.clip.txtfield.text = letter;
      this.clip.attachMovie("balloon_" + random(4),"balloon",1);
      this.clip._x = 300;
      this.clip._y = 100;
      this.clip._alpha = 70;
      this.destroyed = false;
      this.paused = false;
      this.clip.gotoAndPlay("balloon");
      this.dest = new flash.geom.Point(300,100);
      this.setNewDestPause();
      this.setNewFriction();
      this.resetInterval();
      this.clip.onEnterFrame = mx.utils.Delegate.create(this,this.moveBalloon);
      this.clip.balloon.onPress = mx.utils.Delegate.create(this,this.popBalloon);
   }
   function moveBalloon()
   {
      if(!this.dragging && !this.paused)
      {
         this.clip._x = this.clip._x + (this.dest.x - this.clip._x) / this.friction;
         this.clip._y = this.clip._y + (this.dest.y - this.clip._y) / this.friction;
      }
   }
   function setNewDest()
   {
      if(this.destroyed)
      {
         clearInterval(this.newDestInterval);
         return undefined;
      }
      this.setNewDestPause();
      var _loc4_ = true;
      var _loc6_ = 0;
      var _loc7_ = 15;
      while(_loc4_)
      {
         _loc4_ = false;
         var _loc3_ = this.getNewX();
         if(_loc3_ < 0 || _loc3_ > 600 - this.clip._width)
         {
            _loc4_ = true;
         }
         else
         {
            this.dest.x = Math.round(_loc3_);
         }
         _loc6_ = _loc6_ + 1;
         if(_loc6_ > _loc7_)
         {
            this.dest.x = 150;
         }
      }
      var _loc5_ = true;
      var _loc8_ = 0;
      while(_loc5_)
      {
         _loc5_ = false;
         var _loc2_ = this.getNewY();
         if(_loc2_ < 0 || _loc2_ > 300 - this.clip._height)
         {
            _loc5_ = true;
         }
         else
         {
            this.dest.y = Math.round(_loc2_);
         }
         _loc8_ = _loc8_ + 1;
         if(_loc8_ > _loc7_)
         {
            this.dest.y = 150;
         }
      }
   }
   function popBalloon()
   {
      this.clip.balloon.gotoAndPlay("pop");
      this.popped = true;
      this.clip.onPress = mx.utils.Delegate.create(this,this.dragLetter);
      this.clip.onRelease = mx.utils.Delegate.create(this,this.dropLetter);
   }
   function dragLetter()
   {
      this.clip.startDrag();
      this.dest.x = this.clip._x;
      this.dest.y = this.clip._y;
      clearInterval(this.newDestInterval);
      this.dragging = true;
   }
   function dropLetter()
   {
      this.clip.stopDrag();
      this.manager.evaluate(this);
      this.resetInterval();
      this.dragging = false;
   }
   function destroy()
   {
      if(!this.destroyed)
      {
         removeMovieClip(this.clip);
         delete this.clip.onEnterFrame;
         delete this.clip.onRelease;
         this.newDestInterval = 0;
         clearInterval(this.newDestInterval);
         this.newDestPause = 0;
         clearInterval(this.newDestPause);
         this.destroyed = true;
      }
   }
   function getClip()
   {
      return this.clip;
   }
   function resetInterval()
   {
      this.newDestInterval = setInterval(mx.utils.Delegate.create(this,this.setNewDest),this.newDestPause);
   }
   function getNewX()
   {
      return this.clip._x + (- this.maxSpeed) + Math.random() * 2 * this.maxSpeed;
   }
   function getNewY()
   {
      return this.clip._y + (- this.maxSpeed) + Math.random() * 2 * this.maxSpeed;
   }
   function setNewDestPause()
   {
      this.newDestPause = 2500 + Math.random() * 3000;
   }
   function setNewFriction()
   {
      this.friction = 40 + Math.random() * 10;
   }
   function pauseBalloon()
   {
      this.paused = true;
   }
   function resumeBalloon()
   {
      this.paused = false;
   }
}
