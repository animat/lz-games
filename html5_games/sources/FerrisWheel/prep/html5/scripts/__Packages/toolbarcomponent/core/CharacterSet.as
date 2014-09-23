class toolbarcomponent.core.CharacterSet
{
   function CharacterSet(language)
   {
      this.language = language;
      this.characters = new Array();
   }
   function addCharacter(char)
   {
      this.characters.push(char.toString());
   }
   function getLanguage()
   {
      return this.language;
   }
   function getCharacters()
   {
      return this.characters;
   }
}
