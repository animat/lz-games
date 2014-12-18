function onResize()
{
// browser viewport size
var w = window.innerWidth - 20;
var h = window.innerHeight - 20;

// stage dimensions
var ow = 640; // your stage width
var oh = 480; // your stage height
var keepAspectRatio = true;
console.debug('onResize:');

if (keepAspectRatio)
{
    // keep aspect ratio
    var scale = Math.min(w / ow, h / oh);
    stage.scaleX = scale;
    stage.scaleY = scale;

   // adjust canvas size
   stage.canvas.width =  ow * scale;
  stage.canvas.height =  oh * scale;
}
else
{
    // scale to exact fit
    stage.scaleX = w / ow;
    stage.scaleY = h / oh;

    // adjust canvas size
    stage.canvas.width = ow * stage.scaleX;
    stage.canvas.height = oh * stage.scaleY;
   }

 // update the stage
stage.update()
}

window.onresize = function()
{
         onResize();
}
