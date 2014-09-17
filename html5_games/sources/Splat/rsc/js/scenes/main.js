
/*global Phaser: true,
	K: true,
	console: true,
	window: true

 */
/*jslint  nomen: true */
var Lgz = Lgz || {};

Lgz.SceneMain = function (game) {
	'use strict';

	var thisObj, objMgr, objHud;

	thisObj = this;
	thisObj.game = game;

	thisObj.init = function (mgr) {
		objMgr = mgr;
		objHud = mgr.hud;
	};
	thisObj.preload = function () {
		var card;
 
		thisObj.saveCpu = thisObj.game.plugins.add(Phaser.Plugin.SaveCPU);
		thisObj.saveCpu.renderOnFPS = K.renderFPS;
		thisObj.game.stage.backgroundColor = K.canvasBg;

		thisObj.cardSet = new Lgz.CardSet(objMgr);
 
	};
	thisObj.createStart = function () {
		var bg, i, sx, sy;
		console.debug('SceneMain.createStart:');

		bg = thisObj.game.add.sprite(K.bgOffX, K.bgOffY, 'bg');
		sx = (K.canvasWidth / K.bgWidth);
		sy = (K.canvasHeight / K.bgHeight);
		bg.scale.setTo(sx, sy);


/*
		thisObj.cardSet.create(5, 'violet');
*/
            
        thisObj.timer = new Lgz.Timer(thisObj);
        thisObj.timer.create();
        objMgr.pause = function () {
                thisObj.timer.pause();
                thisObj.game.paused = true;
                
        };
        objMgr.resume = function () {
            thisObj.timer.resume();
            thisObj.game.paused = false;
        };
        thisObj.game.paused = true;
		thisObj.cardSet.dealStart(function () {thisObj.createFinish(); });
	};
	thisObj.createExit = function () {
		//objHud.winOpen('winMain');
		objMgr.resume();
	};
	thisObj.createFinish = function () {
        thisObj.game.paused = false;
        thisObj.timer.start();
		thisObj.createExit();
            
	};
	thisObj.create = function () {
		thisObj.createStart();
		thisObj.createFinish();
	};
	thisObj.update = function () {
		var i;
		//console.debug('SceneMain.update:');
                /*
		for (i = 0; i < thisObj.selArr.length; i += 1) {
			thisObj.selArr[i].update();
		}
                */
                
		thisObj.cardSet.update();
		thisObj.timer.update();
		if (K.renderForce) {
			thisObj.saveCpu.forceRender();
		}
	};


};
