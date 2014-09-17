stop();
if(_root.liveXML)
{
   var loader = new LoadGame(this,_root.liveXML,"TranslationGame");
}
else
{
   var loader = new LoadGame(this,"../games/fishing.xml","TranslationGame");
}
