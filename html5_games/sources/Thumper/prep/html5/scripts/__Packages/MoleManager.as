class MoleManager
{
   function MoleManager(ques)
   {
      this.activeMoles = new Array();
      this.availableMoles = new Array();
      this.moles = new Array();
      this.maxMoles = 1;
      this.createMoles(ques);
      this.popUpDelay = setInterval(this,"popUpMole",750);
   }
   function createMoles(ques)
   {
      if(ques.length < this.maxMoles)
      {
      }
      var _loc4_ = 0;
      var _loc2_ = 0;
      while(_loc2_ < ques.length)
      {
         var _loc3_ = new Mole(ques[_loc2_],_loc4_,this);
         this.moles.push(_loc3_);
         this.availableMoles.push(_loc3_);
         _loc4_ = _loc4_ + 1;
         _loc2_ = _loc2_ + 1;
      }
   }
   function popUpMole()
   {
      if(this.availableMoles.length > 0)
      {
         var _loc12_ = Math.floor(Math.random() * this.availableMoles.length);
         var _loc10_ = this.availableMoles[_loc12_];
         if(!(_loc10_ == null) && !_loc10_.isShowing())
         {
            var _loc13_ = true;
            var _loc11_ = 0;
            while(_loc13_ && _loc11_ < 15)
            {
               var _loc3_ = _loc10_.calcNewPosition();
               var _loc9_ = false;
               var _loc4_ = 0;
               while(_loc4_ < this.activeMoles.length)
               {
                  var _loc2_ = this.activeMoles[_loc4_];
                  var _loc7_ = _loc2_.getLeftSide();
                  var _loc5_ = _loc2_.getRightSide();
                  var _loc8_ = _loc2_.getTopSide();
                  var _loc6_ = _loc2_.getBottomSide();
                  trace("Comparing... " + _loc8_ + ", " + _loc5_ + ", " + _loc6_ + ", " + _loc7_ + " ::: " + _loc3_.x + ", " + _loc3_.y);
                  if(!(_loc3_.x < _loc2_.getLeftSide()) && !(_loc3_.x > _loc2_.getRightSide()) && !(_loc3_.y < _loc2_.getTopSide()) && !(_loc3_.y > _loc2_.getBottomSide()))
                  {
                     _loc9_ = true;
                  }
                  _loc4_ = _loc4_ + 1;
               }
               if(!_loc9_)
               {
                  _loc10_.setNewPosition(_loc3_.x,_loc3_.y);
                  _loc10_.popUp();
                  this.activeMoles.push(_loc10_);
                  this.availableMoles.splice(_loc12_,1);
                  return undefined;
               }
               trace("MoleManager :: popUpMole :: Found an overlap. Searching again... " + _loc11_);
               _loc11_ = _loc11_ + 1;
            }
         }
      }
   }
   function deactivateMole(m)
   {
      var _loc2_ = 0;
      while(_loc2_ < this.activeMoles.length)
      {
         if(this.activeMoles[_loc2_].equals(m))
         {
            this.activeMoles.splice(_loc2_,1);
            this.availableMoles.push(m);
         }
         _loc2_ = _loc2_ + 1;
      }
   }
   function destroy()
   {
      clearInterval(this.popUpDelay);
      var _loc2_ = 0;
      while(_loc2_ < this.moles.length)
      {
         this.moles[_loc2_].destroy();
         _loc2_ = _loc2_ + 1;
      }
   }
   function hit(attempt)
   {
      LZGame.getInstance().evaluate(attempt);
   }
}
