
/*global
	$: true,
	Phaser: true,
	K: true,
	console: true,
	window: true,
	LgzLib: true
 */
/*jslint  nomen: true */
var g = {};

var Lgz = Lgz || {};

if ($('#lgzFrame').length) {
    console.log('lgz.js: found parent frame: #lgzFrame');
 
    Lgz.frameParent = new LgzLib.MsgFrames.Parent();
}
if ($('#lgzBody').length) {
    console.log('lgz.js: found loader frame: #lgzFrame');
    Lgz.frameLoader = new LgzLib.MsgFrames.Loader();
}
console.log("lgz.js loaded for /Frame/web.html");