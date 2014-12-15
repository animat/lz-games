/*jslint nomen: true */
/*global
 K: true,
 LgzLib: true,
 Phaser: true,
 Scene: true,
 window: true,
 console: true,
 dbX: true,
 g: true
*/


var Lgz = Lgz || {};
Lgz.SceneWelcome = function (game) {
	"use strict";
	var thisObj, rsc, triggerFS, ui, objHud;

	thisObj = this;

	thisObj.init = function (mgr) {
		objHud = mgr.hud;
	};
	thisObj.preload = function () {
		thisObj.saveCpu = thisObj.game.plugins.add(Phaser.Plugin.SaveCPU);
		thisObj.saveCpu.renderOnFPS = K.renderFPS;
		thisObj.game.stage.backgroundColor = K.canvasBg;
		
	};
	thisObj.create = function () {
            var bg;
		objHud.forceLandscape();
		bg = game.add.sprite(K.welcomeBgOffX, K.welcomeBgOffY, 'welcome');
		triggerFS = true;
		objHud.winOpen('winPlay');
	};
	thisObj.update = function () {

	};


};
