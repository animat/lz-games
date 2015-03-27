class FishingDisplay extends StimulusDisplay
{
   function FishingDisplay(target, id, stim)
   {
      super(target,id,stim);
   }
   function setDefaultTextFormat()
   {
      this.txtFmt = new TextFormat("Arial",18,102);
      this.txtField.selectable = false;
      this.txtField.autoSize = true;
      this.txtField.setTextFormat(this.txtFmt);
   }
   function restrainDimensions()
   {
      if(this.clip._width > this.maxWidth || this.clip._height > this.maxHeight)
      {
         if(this.clip._width > this.clip._height)
         {
            this.clip._width = this.maxWidth;
            this.clip._yscale = this.clip._xscale;
         }
         else
         {
            this.clip._height = this.maxHeight;
            this.clip._xscale = this.clip._yscale;
         }
         this.origXScale = this.clip._xscale;
         this.origYScale = this.clip._yscale;
         this.clip.onRollOver = mx.utils.Delegate.create(this,this.magnify);
         this.clip.onRollOut = mx.utils.Delegate.create(this,this.recover);
      }
      this.setPos(this.rightBoundary,this.topBoundary);
   }
   function setPos(xx, yy)
   {
      this.rightBoundary = xx;
      this.topBoundary = yy;
      this.clip._x = xx - this.clip._width;
      if(this.getStimulusType() == Stimulus.TEXT)
      {
         this.clip._y = yy + 3;
      }
      else if(this.getStimulusType() == Stimulus.IMAGE)
      {
         this.clip._y = yy - 5;
      }
      else
      {
         this.clip._y = yy;
      }
      
   }
}
