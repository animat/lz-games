if(mx.lang.Locale.checkXMLStatus() == true)
{
   IDS_PLAY_AGAIN1.text = mx.lang.Locale.loadString("IDS_PLAY_AGAIN");
}
else
{
   mx.lang.Locale.addDelayedInstance(IDS_PLAY_AGAIN1,"IDS_PLAY_AGAIN");
}
