class Response
{
   function Response(stim, stimType)
   {
      this.stimulus = new Stimulus(stim,stimType);
   }
   function getStimulus()
   {
      return this.stimulus;
   }
   function setStimulus(stim, stimType)
   {
      this.stimulus = new Stimulus(stim,stimType);
   }
   function setStimulusFull(stim)
   {
      this.stimulus = stim;
   }
   function toString()
   {
      return this.stimulus.toString();
   }
}
