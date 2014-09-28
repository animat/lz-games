stop();
dispatchEvent({type:"win",bubbles:true});
playAgain.onRelease = function()
{
   gotoAndStop("intro");
   play();
};
