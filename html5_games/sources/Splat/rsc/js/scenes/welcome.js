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

K.welcomeCardX = -50;
K.welcomeCardY = 120;
K.welcomeDiceX = 320;
K.welcomeDiceY = 70;
K.welcomePlayX = 520;
K.welcomePlayY = 50;


var g = g || {};
var Lgz = Lgz || {};
Lgz.SceneWelcome = function (game) {
	"use strict";
	var thisObj, rsc, triggerFS, ui, objHud;

	thisObj = this;

	thisObj.selectBtn = function (btn) {
		switch (btn.textkey) {
		case 'IDS_PLAY':
			game.state.start('Main');
			//ui.fullScreenStart();
			break;
		}
	};

	thisObj.init = function (mgr) {
		objHud = mgr.hud;
	};
	thisObj.preload = function () {
    
		thisObj.saveCpu = thisObj.game.plugins.add(Phaser.Plugin.SaveCPU);
		thisObj.saveCpu.renderOnFPS = K.renderFPS;
		thisObj.game.stage.backgroundColor = K.canvasBg;
	g.w = thisObj;
              
		
	};
	thisObj.create = function () {
 
		objHud.forceLandscape();
		game.add.sprite(K.welcomeCardX, K.welcomeCardY, 'welcome');
		game.add.sprite(K.welcomeDiceX, K.welcomeDiceY, 'dice');
/*
		ui.btn('IDS_PLAY', K.welcomePlayX, K.welcomePlayY);
		ui.selectBtn = function (btn) {
			thisObj.selectBtn(btn);
		};
*/
		triggerFS = true;
		objHud.winOpen('winPlay');
	};
	thisObj.update = function () {
		if (triggerFS) {
			triggerFS = false;
			//ivanix: leave embedded
			//objHud.fullScreenStart();
		}
	};


};
