
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
Lgz.init = function () {
    'use strict';
    var mgr;

    //note: LgzLib Dom has 'IDS_PLAY'. Need 'IDS_PLAY_GAME' for this game


    $("[resname='IDS_INSTRUCTIONS']").attr('resname','IDS_INTRO');    
    $('#lgzBtnPlay').attr('resname', 'IDS_PLAY_BUTTON');


    mgr = new LgzLib.Mgr(Lgz, K.urlGamePrefix);
    console.debug('Lgz.init: game exists? ' + mgr.game);
    
    console.debug('Lgz.init: device exists? ' + mgr.game.device);
    mgr.hud.orient = mgr.hud.ORIENT.PORTRAIT;    
    Lgz.cjsInit();
 
};

Lgz.cjsInit  = function () {
	//canvas = document.getElementById("canvas");

	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("complete", Lgz.cjsHandleComplete);
	loader.loadManifest(lib.properties.manifest);
};

Lgz.cjsHandleComplete = function () {
    console.log('Lgz.cjsHandleComplete');
    var cjs, root,  strTags, stage, mgr;
    
    
    
    mgr = Lgz.mgr; 
    cjs = {};
    root = new lib.leapFrogCJS();
    //exportRoot = new lib.leapFrogCJS(null, null, null, null, Lgz.mgr);
    cjs.root = root;

    strTags = {};
    strTags['IDS_INTRO'] = function(str) {
        root.text_2.text = str;
    };
    strTags['IDS_PLAY_BUTTON'] = function(str) {
        root.playGame.text.text = str;
        root.playGame.text_1.text = str;
    };
 
    cjs.strTags = strTags;

    root.playGame.on('click', function() {
        console.log('playGame: clicked');
        //root.gotoAndPlay('game');
        mgr.play();
    });
    
    stage = new createjs.Stage(Lgz.game.canvas);
    stage.addChild(root);
    stage.update();
    stage.enableMouseOver();
    
    cjs.stage = stage;

    //createjs.Ticker.setFPS(lib.properties.fps);
    //createjs.Ticker.setFPS(5);
    //createjs.Ticker.addEventListener("tick", stage);
    createjs.Touch.enable(stage);

    cjs.root.gotoAndPlay('intro');
    console.log('calling mgr.sceneInit()');

    
    mgr.cjs = cjs;
    mgr.sceneInit();
    mgr.scenes.splash.start();    
};
 
function playSound(id, loop) {
    console.log('playSound: ' + id);
	//createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
};

