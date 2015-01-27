
/*
 * original code from
 *
 * http://www.unfocus.com/2014/03/03/hidpiretina-for-createjs-flash-pro-html5-canvas/
 *
 
function fixretina () {
    console.debug('fixretina');

	if (window.devicePixelRatio) {
	    // grab the width and height from canvas
	    var height = canvas.getAttribute('height');
	    var width = canvas.getAttribute('width');
	    // reset the canvas width and height with window.devicePixelRatio applied
	    canvas.setAttribute('width', Math.round(width * window.devicePixelRatio));
	    canvas.setAttribute('height', Math.round( height * window.devicePixelRatio));
	    // force the canvas back to the original size using css
	    canvas.style.width = width+"px";
	    canvas.style.height = height+"px";
	    // set CreateJS to render scaled
	    //stage.scaleX = stage.scaleY = window.devicePixelRatio;
	}
}
*
*/
/*
 * scale code modified with fix for retina display
 * IE HiDPI tbd when hardware available for testing
 *
 */
function onResize()
{
    var dpr = 1;

	// browser viewport size
	var w = window.innerWidth - 20;
	var h = window.innerHeight -20;
	
	// stage dimensions
	//var ow = 640; // your stage width
	//var oh = 480; // your stage height
    var ow = 640; // your stage width
    var oh = 480; // your stage height
	var keepAspectRatio = true;

	console.debug('onResize:');

	if (window.devicePixelRatio) {
        dpr = window.devicePixelRatio;
    }
	
   var scale = dpr * Math.min(w / ow, h / oh);
   stage.scaleX = scale;
   stage.scaleY = scale;
	
  // keep aspect ratio
  // adjust canvas size
   stage.canvas.width =  ow * scale;
   stage.canvas.height =  oh * scale;

   canvas.style.width = (stage.canvas.width/dpr) +"px";
   canvas.style.height = (stage.canvas.height/dpr) +"px";
	
	stage.update();
}

/*
window.onresize = function()
{
         onResize();
}
*/
