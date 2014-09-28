class toolbarcomponent.core.ForeignLetter extends MovieClip
{
   function ForeignLetter(classScope, clip, letter, d)
   {
      super();
      this.classScope = classScope;
      this.clip = clip;
      clip.foreignText = letter;
      this.letterVar = letter;
      this.callBack = d;
      clip.onRollOver = mx.utils.Delegate.create(this,this.findActiveCaret);
      clip.onRelease = mx.utils.Delegate.create(this,this.insertCharacter);
   }
   function findActiveCaret()
   {
      this.activeCaret = Selection.getCaretIndex();
   }
   function insertCharacter()
   {
      if(this.activeCaret > -1)
      {
         if(_global.activeText)
         {
            var _loc3_ = _global.activeText.text.substr(0,this.activeCaret);
            var _loc4_ = _global.activeText.text.substr(this.activeCaret);
            _global.activeText.text = _loc3_ + this.clip.foreignText + _loc4_;
            Selection.setFocus(_global.activeText);
            Selection.setSelection(this.activeCaret + 1,this.activeCaret + 1);
         }
         else if(_global.activeLZInputText)
         {
            _loc3_ = _global.activeLZInputText.getTextField().text.substr(0,this.activeCaret);
            _loc4_ = _global.activeLZInputText.getTextField().text.substr(this.activeCaret);
            _global.activeLZInputText.setText(_loc3_ + this.clip.foreignText + _loc4_);
            trace("LZInput is done! Wahoo! See? : " + _global.activeLZInputText.getInput());
            _global.activeLZInputText.enable();
            Selection.setSelection(this.activeCaret + 1,this.activeCaret + 1);
         }
         
      }
      if(this.myText == null)
      {
         this.callBack(this.letterVar);
      }
   }
}
