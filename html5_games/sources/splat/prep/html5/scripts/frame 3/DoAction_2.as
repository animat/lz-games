stop();
dispatchEvent({type:"ready",bubbles:true});
playGame_btn.onRelease = function()
{
   gotoAndStop("game");
};
