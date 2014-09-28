stop();
dispatchEvent({type:"win",bubbles:true});
playAgain._visible = false;
playAgain.onRelease = function()
{
   gotoAndStop("intro");
   play();
};
