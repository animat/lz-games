if(mx.lang.Locale.checkXMLStatus() == true)
{
   IDS_PLAY_GAME1.text = mx.lang.Locale.loadString("IDS_PLAY_GAME");
}
else
{
   mx.lang.Locale.addDelayedInstance(IDS_PLAY_GAME1,"IDS_PLAY_GAME");
}
