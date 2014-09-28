if(mx.lang.Locale.checkXMLStatus() == true)
{
   IDS_INSTRUCTIONS1.text = mx.lang.Locale.loadString("IDS_INSTRUCTIONS");
   IDS_CONGRATS1.text = mx.lang.Locale.loadString("IDS_CONGRATS");
}
else
{
   mx.lang.Locale.addDelayedInstance(IDS_INSTRUCTIONS1,"IDS_INSTRUCTIONS");
   mx.lang.Locale.addDelayedInstance(IDS_CONGRATS1,"IDS_CONGRATS");
}
