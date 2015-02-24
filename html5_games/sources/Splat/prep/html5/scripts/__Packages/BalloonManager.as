class BalloonManager
{
   function BalloonManager(classScope)
   {
      this.classScope = classScope;
      this.holder = LZGame.getStage().createEmptyMovieClip("balloonHolder",100);
      this.holder._x = 0;
      this.holder._y = 100;
      this.balloons = new Array();
   }
   function evaluate(attempt)
   {
      this.classScope.evaluate(attempt);
   }
   function createBalloons(stimulus)
   {
      var _loc3_ = new Array();
      var _loc6_ = new Array();
      var _loc2_ = 0;
      while(_loc2_ < stimulus.length)
      {
         _loc3_[_loc2_] = _loc2_;
         _loc2_ = _loc2_ + 1;
      }
      while(_loc3_.length > 0)
      {
         var _loc4_ = Math.round(Math.random() * (_loc3_.length - 1));
         _loc6_.push(_loc3_[_loc4_]);
         _loc3_.splice(_loc4_,1);
      }
      _loc2_ = 0;
      while(_loc2_ < stimulus.length)
      {
         if(!(stimulus.charAt(_loc2_) == " "))
         {
            this.balloons.push(new Balloon(this,this.holder,_loc2_,stimulus.charAt(_loc2_),_loc6_[_loc2_]));
         }
         _loc2_ = _loc2_ + 1;
      }
   }
   function destroyAllBalloons()
   {
      var _loc2_ = 0;
      while(_loc2_ < this.balloons.length)
      {
         if(!this.balloons[_loc2_].destroyed)
         {
            this.balloons[_loc2_].destroy();
            delete this.balloons.register2;
            this.balloons[_loc2_] = null;
         }
         _loc2_ = _loc2_ + 1;
      }
      this.balloons = new Array();
   }
   function pauseBalloons()
   {
      var _loc2_ = 0;
      while(_loc2_ < this.balloons.length)
      {
         this.balloons[_loc2_].pauseBalloon();
         _loc2_ = _loc2_ + 1;
      }
   }
   function resumeBalloons()
   {
      var _loc2_ = 0;
      while(_loc2_ < this.balloons.length)
      {
         this.balloons[_loc2_].resumeBalloon();
         _loc2_ = _loc2_ + 1;
      }
   }
}
