
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
Lgz.init = function () {
    'use strict';
    var mgr;

    //note: LgzLib Dom has 'IDS_PLAY'. Need 'IDS_PLAY_GAME' for this game
    $("[resname='IDS_INSTRUCTIONS']").attr('resname', 'IDS_INTRO');
    $('#lgzBtnPlay').attr('resname', 'IDS_PLAY_BUTTON');


    mgr = new LgzLib.Mgr(
        Lgz,
        K.urlGamePrefix,
        function () {
            Lgz._cbMgrReady(mgr);
        }
    );
 
};
Lgz._cbMgrReady = function (mgr) {
    'use strict';
    //mgr.hud.orient = mgr.hud.ORIENT.PORTRAIT;      
    mgr.hud.orient = mgr.hud.ORIENT.NONE;
    Lgz.cjsInit(mgr);
};
Lgz.cjsInit  = function (mgr) {
    'use strict';
    var loader;
	loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
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
    var cjs, root,  strTags, stage;
    console.log('Lgz._cbCjsReady');
    
    cjs = {};
    root = new lib.leapFrogCJS();
    //exportRoot = new lib.leapFrogCJS(null, null, null, null, Lgz.mgr);
    cjs.root = root;

    strTags = {};
    strTags.IDS_INTRO = function (str) {
        root.text_2.text = str;
    };
    strTags.IDS_PLAY_BUTTON = function (str) {
        root.playGame.text.text = str;
        root.playGame.text_1.text = str;
    };
    strTags.IDS_PLAY_AGAIN_BUTTON = function (str) {
        root.playAgain.text.text = str;
    };
    cjs.strTags = strTags;

    root.playGame.on('click', function () {
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

    //cjs.root.gotoAndPlay('intro');
    console.log('calling mgr.sceneInit()');

    
    mgr.cjs = cjs;
    mgr.sceneInit();
    mgr.scenes.splash.start();
};
