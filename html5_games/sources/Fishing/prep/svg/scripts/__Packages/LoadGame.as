class LoadGame
{
   function LoadGame(main, file, gametype)
   {
      this.main = main;
      main.stop();
      this.xmlSource = file;
      this.gametype = gametype;
      this.loadXML();
   }
   function loadXML()
   {
      if(this.gametype.toUpperCase() == "TRANSLATIONGAME")
      {
         this.xmlReader = new gametypes.TranslationReader(this,this.xmlSource,this.localize);
      }
      else if(this.gametype.toUpperCase() == "GROUPINGGAME")
      {
         this.xmlReader = new gametypes.GroupingReader(this,this.xmlSource,this.localize);
      }
      else if(this.gametype.toUpperCase() == "MATCHINGGAME")
      {
         this.xmlReader = new gametypes.MatchingReader(this,this.xmlSource,this.localize);
      }
      else if(this.gametype.toUpperCase() == "MULTIPLECHOICEGAME")
      {
         this.xmlReader = new gametypes.MultipleChoiceReader(this,this.xmlSource,this.localize);
      }
      else if(this.gametype.toUpperCase() == "RECOGNITIONGAME")
      {
         this.xmlReader = new gametypes.RecognitionReader(this,this.xmlSource,this.localize);
      }
      else if(this.gametype.toUpperCase() == "UNSCRAMBLINGGAME")
      {
         throw new Error("LoadGame :: loadXML() :: gametypes.UnscramblingReader not yet defined");
      }
      else if(this.gametype.toUpperCase() == "EXPOSUREGAME")
      {
         this.xmlReader = new gametypes.ExposureReader(this,this.xmlSource,this.localize);
      }
      else if(this.gametype.toUpperCase() == "SENTENCEGAME")
      {
         this.xmlReader = new gametypes.SentenceReader(this,this.xmlSource,this.localize);
      }
      else if(this.gametype == undefined)
      {
         throw new Error("LoadGame :: loadXML() :: Game FLA does not define a gametype");
      }
      else
      {
         throw new Error("LoadGame :: loadXML() :: Unknown error while trying to load XML data");
      }
      
      
      
      
      
      
      
      
   }
   function localize()
   {
      mx.lang.Locale.setLoadCallback(this.localeListener);
      mx.lang.Locale.__set__autoReplace(true);
      mx.lang.Locale.loadLanguageXML(this.xmlReader.getLanguageCode());
      this.gotoGame();
   }
   function localeListener(success)
   {
      if(success)
      {
         this.gotoGame();
      }
      else
      {
         trace("Error localizing the game...");
      }
   }
   function gotoGame()
   {
      this.main.play();
   }
   function getXMLReader()
   {
      return this.xmlReader;
   }
}
