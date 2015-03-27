class Option extends Response
{
   function Option(initStimulus, initStimulusType)
   {
      super(initStimulus,initStimulusType);
   }
   function getIdentifier()
   {
      return this.identifier;
   }
   function toString()
   {
      return this.getStimulus().toString();
   }
   function setAttributes(attributes)
   {
      this.__attributes = attributes;
   }
   function setGroupAttributes(attributes)
   {
      this.__groupAttributes = attributes;
   }
   function getGroupAttributes()
   {
      return this.__groupAttributes;
   }
   function getAttributes()
   {
      return this.__attributes;
   }
   function setOptionGroup(str)
   {
      this.optionGroup = str;
   }
   function getOptionGroup()
   {
      return this.optionGroup;
   }
}
