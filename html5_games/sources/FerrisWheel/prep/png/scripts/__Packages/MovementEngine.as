class MovementEngine
{
   static var textFormatting = new TextFormat("Arial",40,16777215,true);
   static var shadowFormatting = new TextFormat("Arial",40,0,true);
   static var highlightFormatting = new TextFormat("Arial",40,16449390,true);
   static var WHEEL_PAUSE_TIME = 2000;
   static var INIT_SPEED = 1;
   static var SPEED_MAX = 3.5;
   function MovementEngine(classScope, letters)
   {
      this.soundFX1 = LZGame.getStage().attachMovie("soundFX1","soundFX1",LZGame.getStage().getNextHighestDepth());
      this.soundFX2 = LZGame.getStage().attachMovie("soundFX2","soundFX2",LZGame.getStage().getNextHighestDepth());
      this.soundFX3 = LZGame.getStage().attachMovie("soundFX3","soundFX3",LZGame.getStage().getNextHighestDepth());
      this.soundFX4 = LZGame.getStage().attachMovie("soundFX4","soundFX4",LZGame.getStage().getNextHighestDepth());
      this.soundFX5 = LZGame.getStage().attachMovie("soundFX5","soundFX5",LZGame.getStage().getNextHighestDepth());
      this.soundFX6 = LZGame.getStage().attachMovie("soundFX6","soundFX6",LZGame.getStage().getNextHighestDepth());
      this.classScope = classScope;
      this.letters = letters;
      this.speed = 1;
      this.stopped = false;
      this.placeLetters();
      LZGame.getStage().onEnterFrame = mx.utils.Delegate.create(this,this.spinWheel);
   }
   function placeLetters()
   {
      var _loc4_ = this.letters.length - 1;
      var _loc3_ = 1;
      while(_loc3_ < this.letters.length)
      {
         var _loc2_ = LZGame.getStage().wheel["seat" + _loc3_];
         _loc2_.createTextField("textfield",_loc3_ * 2,-13,-21,0,0);
         _loc2_.createTextField("textShadow",_loc3_,-10,-18,0,0);
         _loc2_.textfield.autoSize = true;
         _loc2_.textShadow.autoSize = true;
         _loc2_.textfield.selectable = false;
         _loc2_.textShadow.selectable = _loc2_.textfield.selectable;
         _loc2_.textfield.setNewTextFormat(MovementEngine.textFormatting);
         _loc2_.textShadow.setNewTextFormat(MovementEngine.shadowFormatting);
         _loc2_.textfield.text = this.letters[_loc4_];
         _loc2_.textShadow.text = this.letters[_loc4_];
         _loc2_.highlighted = false;
         _loc4_ = _loc4_ - 1;
         _loc3_ = _loc3_ + 1;
      }
   }
   function spinWheel()
   {
      if(!this.stopped)
      {
         LZGame.getStage().wheel._rotation = LZGame.getStage().wheel._rotation + this.speed;
         var _loc3_ = 1;
         while(_loc3_ < this.letters.length)
         {
            var _loc2_ = LZGame.getStage().wheel["seat" + _loc3_];
            _loc2_._rotation = _loc2_._rotation - this.speed;
            if(_loc2_.hitTest(LZGame.getStage().answerPoint))
            {
               if(!_loc2_.highlighted)
               {
                  _loc2_.textfield.setTextFormat(MovementEngine.highlightFormatting);
                  _loc2_.highlighted = true;
               }
            }
            else if(_loc2_.highlighted)
            {
               _loc2_.textfield.setTextFormat(MovementEngine.textFormatting);
               _loc2_.highlighted = false;
            }
            
            _loc3_ = _loc3_ + 1;
         }
      }
   }
   function stopWheel()
   {
      this.stopped = true;
      this.setWait = setInterval(mx.utils.Delegate.create(this,this.wait),MovementEngine.WHEEL_PAUSE_TIME);
   }
   function wait()
   {
      this.stopped = false;
      clearInterval(this.setWait);
   }
   function increaseSpeed()
   {
      if(this.speed < MovementEngine.SPEED_MAX)
      {
         this.speed = this.speed + 0.5;
         if(this.speed == 1 || this.speed == -1)
         {
            this.soundFX1.play();
         }
         else if(this.speed == 1.5 || this.speed == -1.5)
         {
            this.soundFX2.play();
         }
         else if(this.speed == 2 || this.speed == -2)
         {
            this.soundFX3.play();
         }
         else if(this.speed == 2.5 || this.speed == -2.5)
         {
            this.soundFX4.play();
         }
         else if(this.speed == 3 || this.speed == -3)
         {
            this.soundFX5.play();
         }
         else if(this.speed == 3.5 || this.speed == -3.5)
         {
            this.soundFX6.play();
         }
         
         
         
         
         
      }
   }
   function decreaseSpeed()
   {
      if(this.speed > - MovementEngine.SPEED_MAX)
      {
         this.speed = this.speed - 0.5;
         if(this.speed == 1 || this.speed == -1)
         {
            this.soundFX1.play();
         }
         else if(this.speed == 1.5 || this.speed == -1.5)
         {
            this.soundFX2.play();
         }
         else if(this.speed == 2 || this.speed == -2)
         {
            this.soundFX3.play();
         }
         else if(this.speed == 2.5 || this.speed == -2.5)
         {
            this.soundFX4.play();
         }
         else if(this.speed == 3 || this.speed == -3)
         {
            this.soundFX5.play();
         }
         else if(this.speed == 3.5 || this.speed == -3.5)
         {
            this.soundFX6.play();
         }
         
         
         
         
         
      }
   }
   function resetSpeed()
   {
      this.speed = MovementEngine.INIT_SPEED;
   }
   function spinRight()
   {
      this.increaseSpeed();
      if(this.speed == 0)
      {
         this.speed = 0.5;
      }
   }
   function spinLeft()
   {
      this.decreaseSpeed();
      if(this.speed == 0)
      {
         this.speed = -0.5;
      }
   }
   function pauseWheel()
   {
      this.stopped = true;
   }
   function resumeWheel()
   {
      this.stopped = false;
   }
}
