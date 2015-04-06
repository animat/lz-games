/*global
	$: true,
	Phaser: true,
	K: true,
	console: true,
	window: true,
	LgzLib: true
 */
/*jslint  nomen: true */

var LgzLib = LgzLib || {};
LgzLib.Timer = function (spriteText) {
    'use strict';
    var thisObj = this;
    
    thisObj.start = function () {
        thisObj.beginTS = new Date();
        thisObj.endTS = thisObj.beginTS;
        thisObj.paused = false;
        
    };
    thisObj.pause = function () {
        thisObj.paused = true;
    };
    thisObj.resume = function () {
        var diff, nt, bt;
        nt = new Date();
        diff = nt.getTime() - thisObj.endTS.getTime();
        bt = thisObj.beginTS.getTime();
        thisObj.beginTS.setTime(bt + diff);
        
        thisObj.paused = false;
    };
    thisObj.value = function () {
        return spriteText.text;
    };
    thisObj.update = function () {
        var now, dur, min, sec, s;
        
        if (thisObj.paused) {
            return;
        }
 
        thisObj.endTS = new Date();
        
        dur = Math.floor((thisObj.endTS - thisObj.beginTS) / 1000);
        min = Math.floor(dur / 60);
        sec = (dur % 60) / 100;
        spriteText.text = min + ':' + sec.toFixed(2).toString().replace('0.', '');
    };
};
