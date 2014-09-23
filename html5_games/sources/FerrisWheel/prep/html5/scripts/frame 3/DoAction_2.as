stop();
playGame.onRelease = function()
{
   gotoAndStop("game");
   play();
};
dispatchEvent({type:"ready",bubbles:true});
