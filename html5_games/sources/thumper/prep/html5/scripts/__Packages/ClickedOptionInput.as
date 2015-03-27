class ClickedOptionInput extends Response
{
   function ClickedOptionInput(attempt)
   {
      super(attempt.getOption().getStimulus().getContent(),attempt.getOption().getStimulus().getType());
   }
}
