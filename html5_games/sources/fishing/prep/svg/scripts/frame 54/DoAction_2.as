stop();
if(!(game == undefined))
{
   delete game;
}
var game = new RunGame(this);
dispatchEvent({type:"play",bubbles:true,game:game});
