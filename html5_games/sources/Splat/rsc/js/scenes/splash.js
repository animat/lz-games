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

K.splashCardX = -50;
K.splashCardY = 120;
K.splashDiceX = 320;
K.splashDiceY = 70;
K.splashPlayX = 520;
K.splashPlayY = 50;

var g = g || {};
var Lgz = Lgz || {};
Lgz.SceneSplash = function (game) {
	"use strict";
	var thisObj, triggerFS, ui;

	thisObj = this;

        
	thisObj.init = function (mgr) {
		thisObj.mgr = mgr;
	};
	thisObj.preload = function () {
		thisObj.mgr.rscImage('welcome');
		thisObj.mgr.rscImage('dice');
		thisObj.mgr.rscImage('bg');
		thisObj.mgr.rscAtlas('card');
		thisObj.mgr.rscAudio('sfx');
 
		thisObj.saveCpu = thisObj.game.plugins.add(Phaser.Plugin.SaveCPU);
		thisObj.saveCpu.renderOnFPS = K.renderFPS;
		thisObj.game.stage.backgroundColor = K.canvasBg;
		
	};
	thisObj.create = function () {
		thisObj.mgr.welcome();
	};

};
