/*global
	$: true,
	Phaser: true,
	K: true,
	console: true,
	window: true,
	LgzLib: true
 */
/*jslint  nomen: true */

var Lgz = Lgz || {};
Lgz.Timer = function (parent) {
    'use strict';
    var thisObj = this;
    thisObj.parent = parent;
    thisObj.game = parent.game;
    
    thisObj.preload = function () {
    };
    thisObj.create = function () {
        var text;
        text = '0:00';
        thisObj.label = thisObj.game.add.text(K.clockX, K.clockY, text, K.clockTextStyle);
        thisObj.label.anchor.set(0.5, 1);
        thisObj.paused = true;

    };
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
        return thisObj.label.text;
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
        thisObj.label.text = min + ':' + sec.toFixed(2).toString().replace('0.', '');
    };
};
