if(mx.lang.Locale.checkXMLStatus() == true)
{
   IDS_INSTRUCTIONS1.text = mx.lang.Locale.loadString("IDS_INSTRUCTIONS");
   IDS_INSTRUCTIONS2.text = mx.lang.Locale.loadString("IDS_INSTRUCTIONS");
   IDS_CONGRATS1.text = mx.lang.Locale.loadString("IDS_CONGRATS");
   IDS_CONGRATS_SUB1.text = mx.lang.Locale.loadString("IDS_CONGRATS_SUB");
}
else
{
   mx.lang.Locale.addDelayedInstance(IDS_INSTRUCTIONS1,"IDS_INSTRUCTIONS");
   mx.lang.Locale.addDelayedInstance(IDS_INSTRUCTIONS2,"IDS_INSTRUCTIONS");
   mx.lang.Locale.addDelayedInstance(IDS_CONGRATS1,"IDS_CONGRATS");
   mx.lang.Locale.addDelayedInstance(IDS_CONGRATS_SUB1,"IDS_CONGRATS_SUB");
}
