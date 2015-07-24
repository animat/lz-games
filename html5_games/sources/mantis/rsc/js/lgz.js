
/*global
	$: true,
	Phaser: true,
	K: true,
	createjs: true,
	lib: true,
	console: true,
	window: true,
	LgzLib: true
 */
/*jslint  nomen: true */
var g = {};
 
var Lgz = Lgz || {};


Lgz.cjsInit  = function (mgr) {
    'use strict';
    var loader;
	loader = new createjs.LoadQueue(false);
	// loader.installPlugin(createjs.Sound);
	loader.addEventListener(
        "complete",
        function () {
            Lgz._cbCjsReady(mgr);
        }
    );
	loader.loadManifest(lib.properties.manifest);
};
Lgz._cbCjsReady = function (mgr) {
    'use strict';
    var cjs, root, objs,  strTags, stage;
    console.log('Lgz._cbCjsReady');

    cjs = {};
    root = new lib.mantisCJS();
    cjs.root = root;

    objs = {};
    objs.spriteWin = new lib.win();
    cjs.objs = objs;

    strTags = {};
    strTags.IDS_INSTRUCTIONS = function (str) {
        root.text.text = str;
    };
    strTags.IDS_PLAY = function (str) {
        root.instance.text.text = str;
    };

    strTags.IDS_CONGRATULATIONS = function (str) {
        objs.spriteWin.text_1.text = str;
    };

    strTags.IDS_CONGRATS = function (str) {
        objs.spriteWin.text.text = str;
    };



    strTags.IDS_PLAY_AGAIN = function (str) {
        objs.spriteWin.playAgain.text.text = str;
    };

    cjs.strTags = strTags;

    root.instance.on('click', function () {
        console.log('playGame: clicked');
        mgr.play();
    });

    objs.spriteWin.playAgain.on('click', function () {
        console.log('playAgain: clicked');
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

    //cjs.root.gotoAndPlay('intro');
    console.log('calling mgr.sceneInit()');

    
    mgr.cjs = cjs;
    mgr.sceneInit();
    mgr.scenes.splash.start();
};
Lgz._cbMgrReady = function (mgr) {
    'use strict';
    mgr.hud.orient = mgr.hud.ORIENT.PORTRAIT;
    mgr.hud.inputInit();
    Lgz.cjsInit(mgr);
};
Lgz.init = function () {
    'use strict';
    var mgr;


    //note: using cjs text ui instead of domui
    /*
    $("[resname='IDS_INSTRUCTIONS']").attr('resname', 'IDS_INTRO');
    $('#lgzBtnPlay').attr('resname', 'IDS_PLAY_BUTTON');
    */


    mgr = new LgzLib.Mgr(
        Lgz,
        K.urlGamePrefix,
        function () {
            Lgz._cbMgrReady(mgr);
        }
    );
 
};
