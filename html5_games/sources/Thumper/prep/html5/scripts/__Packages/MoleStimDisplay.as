class MoleStimDisplay extends StimulusDisplay
{
   function MoleStimDisplay(target, id, stim, mole)
   {
      super(target,id,stim);
      this.textFmt = new TextFormat("EmbedArial",16,16777215);
      this.moleRef = mole;
   }
   function createTextDisplay()
   {
      this.txtField = this.clip.createTextField("txtField",1,0,0,5,5);
      this.txtField.text = this.stim.getContent();
      this.setDefaultTextFormat();
   }
   function setDefaultTextFormat()
   {
      this.txtField.autoSize = true;
      this.txtField.selectable = false;
      this.txtField.embedFonts = true;
      this.txtField.setNewTextFormat(this.textFmt);
      this.txtField.filters = new Array(new flash.filters.DropShadowFilter(4,25,3355446,5,4,4,2,2,false,false,false),new flash.filters.BevelFilter(3,45,15258814,0.75,6109496,0.35,3,3,3,3,"inner",false));
   }
   function setTextSize(num)
   {
      this.textFmt.size = num;
      this.txtField.setTextFormat(this.textFmt);
   }
   function setDim(wid, hei)
   {
      this.maxWidth = wid;
      this.maxHeight = hei;
      this.restrainDimensions();
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
      }
      this.setPos(this.rightBoundary,this.topBoundary);
      this.moleRef.setMasker();
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
         this.clip._y = yy - 13;
      }
      else
      {
         this.clip._y = yy;
      }
      
   }
   function getWidth()
   {
      if(this.getStimulusType() == Stimulus.TEXT)
      {
         return this.txtField.textWidth;
      }
      if(this.getStimulusType() == Stimulus.IMAGE)
      {
         return this.clip._width;
      }
   }
   function getHeight()
   {
      if(this.getStimulusType() == Stimulus.TEXT)
      {
         return this.txtField.textHeight;
      }
      if(this.getStimulusType() == Stimulus.IMAGE)
      {
         return this.clip._height;
      }
   }
   function toString()
   {
      return "(MoleStimDisplay :: " + this.clip + " - " + this.getStimulusType() + " - " + this.getStimulusContent() + ")";
   }
}
