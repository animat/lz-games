if(mx.lang.Locale.checkXMLStatus() == true)
{
   IDS_PLAY_BTN1.text = mx.lang.Locale.loadString("IDS_PLAY_BTN");
}
else
{
   mx.lang.Locale.addDelayedInstance(IDS_PLAY_BTN1,"IDS_PLAY_BTN");
}
