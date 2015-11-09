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
LgzLib.Timer = function (spriteText, countdown) {
    'use strict';
    var thisObj;

    thisObj = this;
    thisObj.delayTO = 1000;
    
    thisObj.eventTime = function (rem) {
        //note: intercept in game code
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
    };
	thisObj.updateInterval = function () {
    };
    thisObj.updateCountUp = function () {
        var  dur, min, sec;

	    if (thisObj.paused) {
	        return;
	    }
        
        thisObj.endTS = new Date();
        dur = Math.floor((thisObj.endTS - thisObj.beginTS) / 1000);
        min = Math.floor(dur / 60);
        sec = (dur % 60) / 100;
        spriteText.text = min + ':' + sec.toFixed(2).toString().replace('0.', '');
        thisObj.eventTime(dur);

        // console.log('LgzLib.Timer.updateCountUp: timestr: ' + spriteText.text);
    };
    thisObj.updateCountDown = function () {
        var  dur, min, rem;

	    if (thisObj.paused) {
	        return;
	    }
        
        thisObj.endTS = new Date();
        dur = Math.floor((thisObj.endTS - thisObj.beginTS) / 1000);
        rem = countdown - dur;
        spriteText.text = rem;
        thisObj.eventTime(rem);

    };
    thisObj.penalty = function (value) {
        thisObj.beginTS = thisObj.beginTS - (value * 1000)
    }
    thisObj.reset = function () {
        thisObj.beginTS = new Date();
        thisObj.endTS = thisObj.beginTS;
        thisObj.paused = false;
    };
    thisObj.start = function () {
        thisObj.reset();

        thisObj.updateTOID = window.setInterval(
            function () {
                thisObj.updateInterval();
            },
            thisObj.delayTO
        );
    };
    thisObj.stop = function () {
        window.clearInterval(thisObj.updateTOID);
    };
    if (countdown) {
        thisObj.updateInterval = thisObj.updateCountDown;
    } else {
        thisObj.updateInterval = thisObj.updateCountUp;
    }
};
