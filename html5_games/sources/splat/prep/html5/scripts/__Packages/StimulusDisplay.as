class StimulusDisplay extends MovieClip
{
   function StimulusDisplay(target, id, stim)
   {
      super();
      this.stim = stim;
      this.clip = target.createEmptyMovieClip(id,target.getNextHighestDepth());
      this.hidden = false;
      this.loadingImage = false;
      if(stim.getType() == Stimulus.TEXT)
      {
         this.createTextDisplay();
      }
      else if(stim.getType() == Stimulus.AUDIO)
      {
         this.createAudioDisplay();
         this.ns.play("flv:amazons3/linguazone/audio/" + stim.getContent() + ".flv");
      }
      else if(stim.getType() == Stimulus.IMAGE)
      {
         this.createImageDisplay();
      }
      
      
   }
   function createTextDisplay()
   {
      this.txtField = this.clip.createTextField("txtField",1,0,0,5,5);
      this.txtField.text = this.stim.getContent();
      this.setDefaultTextFormat();
   }
   function createAudioDisplay()
   {
      this.nc = new NetConnection();
      if(_root.liveRTMP)
      {
         this.nc.connect(_root.liveRTMP);
      }
      else
      {
         this.nc.connect("rtmp://ec2-75-101-224-115.compute-1.amazonaws.com/lz-recorder");
      }
      this.ns = new NetStream(this.nc);
      this.ns.onStatus = mx.utils.Delegate.create(this,this.nsStatus);
      this.clip.attachMovie("audio-speaker","speaker",this.clip.getNextHighestDepth());
      this.clip.speaker.stop();
      this.clip.onRelease = mx.utils.Delegate.create(this,this.playAudio);
   }
   function createImageDisplay()
   {
      var _loc3_ = new MovieClipLoader();
      var _loc2_ = new Object();
      _loc2_.onLoadInit = mx.utils.Delegate.create(this,this.restrainDimensions);
      _loc3_.addListener(_loc2_);
      _loc3_.loadClip("http://linguazone.s3.amazonaws.com/" + this.stim.getContent(),this.clip);
      this.loadingImage = true;
   }
   function setTextFormat(fmt)
   {
      this.txtField.setTextFormat(fmt);
      this.txtFmt = fmt;
   }
   function setDefaultTextFormat()
   {
      this.txtFmt = new TextFormat("Arial",14,0);
      this.txtField.setTextFormat(this.txtFmt);
      this.txtField.selectable = false;
      this.txtField.autoSize = true;
   }
   function setText(str)
   {
      this.txtField.text = str;
      this.txtField.setTextFormat(this.txtFmt);
   }
   function nsStatus(infoObject)
   {
      trace("NetStream.onStatus called: (" + getTimer() + " ms)");
      for(var _loc3_ in infoObject)
      {
         trace("\t" + _loc3_ + ":\t" + infoObject[_loc3_]);
      }
      trace("");
      if(infoObject.code == "NetStream.Play.Start")
      {
         this.playAudioMC();
      }
      else if(infoObject.code == "NetStream.Unpause.Notify")
      {
         this.playAudioMC();
      }
      else if(infoObject.code == "NetStream.Play.Stop")
      {
         this.stopAudioMC();
      }
      else if(infoObject.code == "NetStream.Pause.Notify")
      {
         this.stopAudioMC();
      }
      
      
      
   }
   function playAudio()
   {
      this.ns.seek(0);
      this.ns.pause();
      this.playing = true;
   }
   function stopAudio()
   {
      this.ns.seek(0);
      this.ns.pause();
      this.playing = false;
   }
   function playAudioMC()
   {
      this.clip.speaker.gotoAndPlay("playing");
   }
   function stopAudioMC()
   {
      this.clip.speaker.gotoAndStop("static");
   }
   function restrainDimensions()
   {
      this.loadingImage = false;
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
         this.clip._visible = !this.hidden;
      }
   }
   function magnify()
   {
      new mx.transitions.Tween(this.clip,"_xscale",mx.transitions.easing.Regular.easeOut,this.clip._xscale,this.clip._xscale * 2,0.5,true);
      new mx.transitions.Tween(this.clip,"_yscale",mx.transitions.easing.Regular.easeOut,this.clip._yscale,this.clip._yscale * 2,0.5,true);
   }
   function recover()
   {
      new mx.transitions.Tween(this.clip,"_xscale",mx.transitions.easing.Bounce.easeOut,this.clip._xscale,this.origXScale,1,true);
      new mx.transitions.Tween(this.clip,"_yscale",mx.transitions.easing.Bounce.easeOut,this.clip._yscale,this.origYScale,1,true);
   }
   function reset()
   {
      this.clip.removeMovieClip();
      this.ns.play(null);
      this.ns.close();
   }
   function setPos(xx, yy)
   {
      this.clip._x = xx;
      this.clip._y = yy;
   }
   function setDim(wid, hei)
   {
      this.maxWidth = wid;
      this.maxHeight = hei;
   }
   function hide()
   {
      this.clip._visible = false;
      this.hidden = true;
   }
   function show()
   {
      this.clip._visible = true;
      this.hidden = false;
   }
   function isPlaying()
   {
      return this.playing;
   }
   function getStimulusType()
   {
      return this.stim.getType();
   }
   function getStimulusContent()
   {
      return this.stim.getContent();
   }
   function getStimulus()
   {
      return this.stim;
   }
   function getWidth()
   {
      return this.clip._width;
   }
   function getHeight()
   {
      return this.clip._height;
   }
}
