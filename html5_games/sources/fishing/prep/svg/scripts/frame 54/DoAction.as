if(mx.lang.Locale.checkXMLStatus() == true)
{
   IDS_INSTRUCTIONS1.text = mx.lang.Locale.loadString("IDS_INSTRUCTIONS");
   IDS_INSTRUCTIONS2.text = mx.lang.Locale.loadString("IDS_INSTRUCTIONS");
}
else
{
   mx.lang.Locale.addDelayedInstance(IDS_INSTRUCTIONS1,"IDS_INSTRUCTIONS");
   mx.lang.Locale.addDelayedInstance(IDS_INSTRUCTIONS2,"IDS_INSTRUCTIONS");
}
