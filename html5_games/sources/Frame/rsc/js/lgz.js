
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
Lgz.parentFrame = function () {
 
    Lgz.parentFrameObj = new LgzLib.MsgFrames.Parent();
};

Lgz.childFrame = function () {
    'use strict';
    Lgz.childFrameObj = new LgzLib.MsgFrames.Loader();
}; 