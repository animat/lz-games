stop();
dispatchEvent({type:"ready",bubbles:true});
playGame.onRelease = function()
{
   gotoAndStop("game");
};
