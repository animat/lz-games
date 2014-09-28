if(mx.lang.Locale.checkXMLStatus() == true)
{
   IDS_INSTRUCTIONS1.text = mx.lang.Locale.loadString("IDS_INSTRUCTIONS");
   IDS_CONGRATS1.text = mx.lang.Locale.loadString("IDS_CONGRATS");
   IDS_WIN1.text = mx.lang.Locale.loadString("IDS_WIN");
}
else
{
   mx.lang.Locale.addDelayedInstance(IDS_INSTRUCTIONS1,"IDS_INSTRUCTIONS");
   mx.lang.Locale.addDelayedInstance(IDS_CONGRATS1,"IDS_CONGRATS");
   mx.lang.Locale.addDelayedInstance(IDS_WIN1,"IDS_WIN");
}
