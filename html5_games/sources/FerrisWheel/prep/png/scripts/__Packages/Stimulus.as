class Stimulus
{
   static var TEXT = "TEXT";
   static var IMAGE = "IMAGE";
   static var AUDIO = "AUDIO";
   function Stimulus(initContent, initType)
   {
      this.content = initContent;
      this.type = initType.toUpperCase();
   }
   function getContent()
   {
      return this.content;
   }
   function getType()
   {
      return this.type;
   }
   function equals(stim)
   {
      if(this.type == Stimulus.TEXT)
      {
         return this.content.toLowerCase() == stim.getContent().toLowerCase();
      }
      return this.content == stim.getContent() && this.type == stim.getType();
   }
   function toString()
   {
      return "[" + this.content + " :: " + this.type + "]";
   }
}
