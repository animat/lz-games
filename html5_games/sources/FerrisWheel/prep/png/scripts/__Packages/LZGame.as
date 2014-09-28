class LZGame
{
   function LZGame(mainStage)
   {
      LZGame.main = mainStage;
      LZGame.language = LZGame.main.loader.getXMLReader().getLanguage();
      this.questionList = LZGame.main.loader.getXMLReader().getQuestionList();
      LZGame.__busy = false;
      this.createDefaultMenu();
   }
   function createDefaultMenu()
   {
      trace("LZGame :: createDefaultMenu() called");
      this.defaultMenu = new ContextMenu();
      this.defaultMenu.hideBuiltInItems();
   }
   function createCharacterMenu()
   {
      trace("LZGame :: createCharacterMenu() called");
      this.characterMenu = new ContextMenu();
      this.characterMenu.hideBuiltInItems();
      var _loc9_ = ["~Z","x!",".Y.","$"];
      var _loc5_ = 0;
      while(_loc5_ < _loc9_.length)
      {
         var _loc6_ = new ContextMenuItem("Insert letter: " + _loc9_[_loc5_]);
         _loc6_.char = _loc9_[_loc5_];
         _loc6_.onSelect = function(obj, item)
         {
            var _loc1_ = Selection.getFocus();
            trace("LZGame :: insertCharacter :: Getting focus...");
            if(!(_loc1_ == null))
            {
               trace("LZGame :: insertCharacter :: Trying to insert " + item.char + " into the text field!");
               var _loc2_ = Selection.getCaretIndex();
               trace("active caret :: " + _loc2_);
               if(_loc2_ > -1)
               {
                  var _loc3_ = _loc1_.text.substring(0,_loc2_);
                  var _loc4_ = _loc1_.text.substring(_loc2_);
                  _loc1_.text = _loc3_ + item.char + _loc4_;
                  trace("full textfield should now be :: " + _loc3_ + item.char + _loc4_);
                  Selection.setFocus(_loc1_);
                  _loc1_.setSelection(_loc2_ + 1);
               }
            }
         };
         this.characterMenu.customItems.push(_loc6_);
         _loc5_ = _loc5_ + 1;
      }
      _root.menu = this.characterMenu;
   }
   function movetoend()
   {
      this.questionList.movetoend();
   }
   function nextLetter(inputTextField)
   {
      var _loc6_ = Selection.getCaretIndex();
      var _loc5_ = inputTextField.type;
      inputTextField.type = "dynamic";
      var _loc4_ = this.questionList.getCurrentQ().getExpectedString();
      var _loc2_ = 0;
      while(_loc2_ < inputTextField.text.length)
      {
         if(!(_loc4_.charAt(_loc2_) == inputTextField.text.charAt(_loc2_)))
         {
            inputTextField.text = inputTextField.text + _loc4_.charAt(_loc2_);
            return undefined;
         }
         _loc2_ = _loc2_ + 1;
      }
      if(_loc2_ < _loc4_.length)
      {
         inputTextField.text = inputTextField.text + _loc4_.charAt(_loc2_);
      }
      inputTextField.type = _loc5_;
      Selection.setSelection(_loc2_ + 1,_loc2_ + 1);
   }
   function giveup(rg, correctAnswer)
   {
      rg.correctAnswer();
   }
   static function isBusy()
   {
      return LZGame.__busy;
   }
   static function setBusy(val)
   {
      LZGame.__busy = val;
   }
   static function setInstance(rg)
   {
      LZGame.game = rg;
   }
   static function getInstance()
   {
      return LZGame.game;
   }
   static function getStage()
   {
      return LZGame.main;
   }
}
