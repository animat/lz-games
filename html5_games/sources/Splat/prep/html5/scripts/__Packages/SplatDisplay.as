class SplatDisplay extends StimulusDisplay
{
   function SplatDisplay(target, id, stim)
   {
      super(target,id,stim);
   }
   function setDefaultTextFormat()
   {
      this.txtFmt = new TextFormat("Arial",14,16777215);
      this.txtField.selectable = false;
      this.txtField.autoSize = true;
      this.txtField.setTextFormat(this.txtFmt);
   }
   function setPos(xx, yy)
   {
      this.clip._x = xx - this.clip._width;
      if(this.getStimulusType() == Stimulus.TEXT)
      {
         this.clip._y = yy + 3;
         this.clip._x = xx + 15;
      }
      else if(this.getStimulusType() == Stimulus.IMAGE)
      {
         this.clip._y = yy - 13;
      }
      else
      {
         this.clip._y = yy;
      }
      
   }
}
