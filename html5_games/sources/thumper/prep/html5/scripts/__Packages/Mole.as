class Mole
{
   function Mole(question, index, manager)
   {
      this.colorTrans = new flash.geom.ColorTransform();
      this.question = question;
      this.manager = manager;
      this.clip = LZGame.getStage().createEmptyMovieClip("mole_" + index,LZGame.getStage().getNextHighestDepth());
      this.showing = false;
      this.createShadow();
      this.createStimDisplay(question,index);
      this.moleHitArea = this.clip.attachMovie("moleHitArea","moleHitArea",this.clip.getNextHighestDepth());
      this.moleHitArea._width = this.stim.clip._width;
      this.moleHitArea._height = this.stim.clip._height;
      this.moleHitArea._y = - this.stim.clip._height;
      this.clip._alpha = 0;
      this.busy = false;
      this.clip.onPress = mx.utils.Delegate.create(this,this.hit);
   }
   function hit()
   {
      if(!this.busy)
      {
         this.manager.hit(this);
         this.busy = true;
      }
   }
   function strikeDown()
   {
      clearInterval(this.hideDelay);
      this.hideDelay = setInterval(this,"dropDown",300);
   }
   function dropDown()
   {
      clearInterval(this.hideDelay);
      this.stim.clip._y = this.stim.clip._y + this.stim.getHeight() / 5 * 2;
      this.hideDelay = setInterval(this,"hideText",1000);
   }
   function strikeBounce()
   {
      clearInterval(this.hideDelay);
      this.colorTrans.redOffset = 255;
      this.colorTrans.greenOffset = 0;
      this.colorTrans.blueOffset = 0;
      var _loc2_ = new flash.geom.Transform(this.stim);
      _loc2_.colorTransform = this.colorTrans;
      var _loc3_ = new mx.transitions.Tween(this.stim.clip,"_y",mx.transitions.easing.Regular.easeOut,this.stim.clip._y,this.stim.clip._y - 40,0.25,true);
      _loc3_.onMotionFinished = mx.utils.Delegate.create(this,this.jumpDown);
   }
   function jumpDown()
   {
      var _loc2_ = new mx.transitions.Tween(this.stim.clip,"_y",mx.transitions.easing.Regular.easeIn,this.stim.clip._y,this.stim.clip._y + 40,0.25,true);
      _loc2_.onMotionFinished = mx.utils.Delegate.create(this,this.hideText);
   }
   function createStimDisplay(q, index)
   {
      this.stim = new MoleStimDisplay(this.clip,"stim",q.getResponses()[0].getStimulus(),this);
      this.masker = LZGame.getStage().attachMovie("masker","masker_" + index,LZGame.getStage().getNextHighestDepth());
      this.masker._x = this.clip._x;
      this.masker._y = this.clip._y;
      this.stimType = q.getResponses()[0].getStimulus().getType();
      if(this.stimType == "TEXT")
      {
         this.setMasker();
      }
   }
   function setMasker()
   {
      if(this.stimType == "TEXT")
      {
         this.clip.stim.setMask(this.masker);
      }
      else
      {
         this.clip.setMask(this.masker);
      }
   }
   function createShadow()
   {
      this.shadowLeft = this.clip.attachMovie("shadow_left","shadow_left",this.clip.getNextHighestDepth());
      this.shadowLeft._x = - this.shadowLeft._width;
      this.shadowCenter = this.clip.attachMovie("shadow_center","shadow_center",this.clip.getNextHighestDepth());
      this.shadowCenter._width = this.stim.getWidth();
      this.shadowRight = this.clip.attachMovie("shadow_right","shadow_right",this.clip.getNextHighestDepth());
      this.shadowRight._x = this.shadowCenter._width;
      this.shadowRight.onEnterFrame = mx.utils.Delegate.create(this,this.attachRight);
   }
   function attachRight()
   {
      this.shadowCenter._width = this.stim.getWidth();
      this.shadowRight._x = this.shadowCenter._width;
   }
   function popUp()
   {
      this.showing = true;
      this.clip._alpha = 100;
      this.clip._width = 20;
      this.stim.clip._y = 5;
      var _loc2_ = new mx.transitions.Tween(this.clip,"_width",mx.transitions.easing.Elastic.easeOut,20,this.stim.getWidth(),0.5,true);
      _loc2_.onMotionFinished = mx.utils.Delegate.create(this,this.showText);
   }
   function showText()
   {
      clearInterval(this.hideDelay);
      if(this.stimType == "TEXT")
      {
         new mx.transitions.Tween(this.stim.clip,"_y",mx.transitions.easing.Elastic.easeOut,5,(- this.stim.getHeight()) * 0.6666666666666666 - 2,0.75,true);
      }
      else
      {
         new mx.transitions.Tween(this.stim.clip,"_y",mx.transitions.easing.Elastic.easeOut,5,- this.stim.getHeight(),1,true);
      }
      this.hideDelay = setInterval(this,"hideText",1750);
      this.busy = false;
   }
   function hideText()
   {
      clearInterval(this.hideDelay);
      this.busy = true;
      var _loc2_ = new mx.transitions.Tween(this.stim.clip,"_y",mx.transitions.easing.Regular.easeIn,this.stim.clip._y,5,0.35,true);
      _loc2_.onMotionFinished = mx.utils.Delegate.create(this,this.popDown);
   }
   function popDown()
   {
      new mx.transitions.Tween(this.clip,"_xscale",mx.transitions.easing.Elastic.easeIn,this.clip._xscale,10,0.95,true);
      var _loc2_ = new mx.transitions.Tween(this.clip,"_alpha",mx.transitions.easing.Regular.easeOut,100,0,1.5,true);
      _loc2_.onMotionFinished = mx.utils.Delegate.create(this,this.stopShowing);
   }
   function stopShowing()
   {
      this.manager.deactivateMole(this);
      this.showing = false;
      this.clip._xscale = 100;
      var _loc2_ = new flash.geom.Transform(this.clip.txt);
      _loc2_.colorTransform = new flash.geom.ColorTransform();
      this.colorTrans.redOffset = 0;
      this.colorTrans.greenOffset = 0;
      this.colorTrans.blueOffset = 0;
   }
   function destroy()
   {
      delete this.clip.onPress;
      delete this.shadowRight.onEnterFrame;
      this.clip.txt.setMask(null);
      removeMovieClip(this.clip);
      removeMovieClip(this.masker);
   }
   function calcNewPosition()
   {
      var _loc3_ = Math.random() * (600 - this.stim.getWidth());
      var _loc2_ = 100 + Math.random() * (300 - this.stim.getHeight());
      return new flash.geom.Point(_loc3_,_loc2_);
   }
   function setNewPosition(xx, yy)
   {
      this.clip._x = xx;
      this.clip._y = yy;
      this.applyMoleSize(yy);
      this.applyMask();
   }
   function applyMoleSize(yy)
   {
      var _loc3_ = Math.round(10 + 10 * yy / 150);
      if(this.stimType == "TEXT")
      {
         this.stim.setTextSize(_loc3_);
      }
      else
      {
         var _loc2_ = 50 + _loc3_ * 3;
         this.stim.setDim(_loc2_,_loc2_);
      }
      if(this.clip._x + this.clip._width > 600)
      {
         this.clip._x = 600 - this.stim.getWidth();
      }
   }
   function applyMask()
   {
      this.masker._width = this.stim.getWidth();
      this.masker._height = this.stim.getHeight() * 2.5;
      this.masker._x = this.clip._x;
      this.masker._y = this.clip._y + this.clip.shadow_center._y + this.clip.shadow_center._height / 5 * 2 - this.masker._height;
   }
   function getOption()
   {
      return this.question.getResponses()[0];
   }
   function getLeftSide()
   {
      return this.clip._x;
   }
   function getRightSide()
   {
      return this.clip._x + this.stim.getWidth();
   }
   function getTopSide()
   {
      trace("Top side... " + this.clip._y + " - " + this.stim.getHeight());
      return this.clip._y - this.stim.getHeight();
   }
   function getBottomSide()
   {
      return this.clip._y + this.stim.getHeight();
   }
   function isShowing()
   {
      return this.showing;
   }
   function isBusy()
   {
      return this.busy;
   }
   function getClip()
   {
      return this.clip;
   }
   function equals(compare)
   {
      return compare.getClip() == this.getClip();
   }
   function toString()
   {
      return this.clip.toString();
   }
}
