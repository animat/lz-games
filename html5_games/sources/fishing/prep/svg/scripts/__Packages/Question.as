class Question extends OptionFixture
{
   function Question(initStimulus, initStimulusType)
   {
      super();
      this.stimulus = new Stimulus(initStimulus,initStimulusType);
      this.responses = new Array();
   }
   function addResponse(stim, stimType)
   {
      this.responses.push(new Response(stim,stimType));
   }
   function evaluate(resp)
   {
      var _loc2_ = 0;
      while(_loc2_ < this.responses.length)
      {
         if(resp.getStimulus().equals(this.responses[_loc2_].getStimulus()))
         {
            return true;
         }
         _loc2_ = _loc2_ + 1;
      }
      return false;
   }
   function getStimulus()
   {
      return this.stimulus;
   }
   function getResponses()
   {
      return this.responses;
   }
   function getExpectedString()
   {
      return this.responses[0].getStimulus().getContent();
   }
   function setAnswerAll(val)
   {
      this.answerAll = val;
   }
   function getAnswerAll()
   {
      return this.answerAll;
   }
   function setAttributes(val)
   {
      this.attributes = val;
   }
   function getAttributes()
   {
      return this.attributes;
   }
   function toString()
   {
      return "[" + this.getStimulus() + " . . . " + this.responses + "]";
   }
}
