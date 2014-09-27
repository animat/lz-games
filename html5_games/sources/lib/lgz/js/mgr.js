/*global
	$: true,
	Phaser: true,
	K: true,
	console: true,
	window: true,
	LgzLib: true
 */
/*jslint  nomen: true */

var g  = g || {};
var LgzLib = LgzLib || {};
LgzLib.Mgr = function (globLgz, gamePrefix) {
	'use strict';
	var thisObj, game, lang;
	thisObj = this;

	thisObj.init = function () {
		game = new Phaser.Game(K.canvasWidth, K.canvasHeight, Phaser.CANVAS, 'lgzGameCanvas');
		lang = new LgzLib.Lang();
		lang.load(gamePrefix,  K.lang);
		thisObj.lang = lang;
		thisObj.game = game;
		thisObj.hud = new LgzLib.Hud(thisObj);
		thisObj.nm = new LgzLib.NodeManager(thisObj);

		globLgz.lang = thisObj.lang;
		globLgz.game = thisObj.game;
		globLgz.hud = thisObj.hud;
		globLgz.nm = thisObj.nm;
		globLgz.mgr = thisObj;
	};
	thisObj.pause = function () {
		//override
	};
	thisObj.resume = function () {
		//override
	};
	thisObj.addScene = function (str, obj) {
		thisObj.game.state.add(str, obj);
	};
	thisObj.nmLoadOK = function (str) {
		console.debug('LgzLib.Mgr.nmLoadOK: str ' + str);
		//todo: localize ui based on language tag found in xml data.
		thisObj.startScene(str);
	};
	thisObj.nmLoadFail = function () {
		console.error('Could not load xml data from server');
	};
	thisObj.initScene = function (str) {
		console.debug('LgzLib.Mgr.initScene: str ' + str);
		thisObj.nm.load(
			function () { thisObj.nmLoadOK(str); },
			function () { thisObj.nmLoadFail(); }
		);
	};
	thisObj.startScene = function (str) {
		console.debug('LgzLib.Mgr.startScene: str ' + str);
		thisObj.game.state.start(str,  true, false, thisObj);
	};
	thisObj.fullScreenToggle = function () {
		console.debug('Mgr.fullScreenToggle');
		thisObj.hud.fullScreenToggle();
	};
    thisObj.help = function () {
        thisObj.hud.winOpen('winHelp');
    };
    thisObj._welcome = function () {
        thisObj.hud.toggleFsButtons();
        thisObj.hud.localize();
        thisObj.startScene('Welcome');
    };
    thisObj.welcome = function () {
        thisObj.hud.winCloseAll(true);
        window.setTimeout(function () {
			thisObj._welcome();
        }, 900);
    };
    thisObj.exit = function () {
        thisObj.hud.fullScreenStop();
        thisObj.hud.fullScreenStopPost();
        thisObj.hud.onResize();
        thisObj.welcome();
		//window.location.reload();
    };
    thisObj.play = function () {
        thisObj.hud.winCloseAll(true);
        if(!game.device.desktop) {
            thisObj.hud.fullScreenStart();
        }
        thisObj.startScene('Main');
    };
    thisObj.sendBug = function () {
        var $form, sdata;
        $form = $('#bugmsg');
        sdata = $form.serialize();
		$.post('/play/report_bug',
			sdata,
			function (reply) {
				console.debug('post reply: ' + reply);
			}
			);
		thisObj.hud.winClose('winbug', false);
    };
    thisObj.gameId = function () {
		var id, tail;
		tail = document.URL.match(/.*\/(.*)$/)[1];
		id = tail.split('.')[0];
		return id;
	};
	thisObj.rscImage = function (name) {
		thisObj.game.load.image(name, K.urlRscMedia + name + '.png');
	};
	thisObj.rscAudio = function (name) {
			
		thisObj.game.load.audio(
			name,
			K.urlRscMedia + name + '.mp3',
			K.urlRscMedia + name + '.ogg'
		);
                
	};
	thisObj.rscAtlas = function (name) {
		thisObj.game.load.atlas(
			name,
			K.urlRscMedia + name + '.png?',
			K.urlRscMedia + name + '.json?'
		);
	};
	thisObj.init();
};
