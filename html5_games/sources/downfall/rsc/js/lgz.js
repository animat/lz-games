
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
var g = g || {};
var Lgz = Lgz || {};
var images = images;

Lgz._cbCjsFileLoaded = function (evt) {
    'use strict';
	if (evt.item.type === "image") {
        images[evt.item.id] = evt.result;
    }
};
Lgz._cbCjsReady = function (mgr) {
    'use strict';
    var cjs,  root, objs,  strTags, stage, cfg;
    console.log('Lgz._cbCjsReady');

    cjs = {};
    root = new lib.downfallCJS();
    cjs.root = root;

    //
    // ivanixcu:note: 
    // createjs will draw into phaser bitmapData.canvas during Main scene
    // bitmapData in turn, is reference by a Phaser sprite and rendered into the main
    // canvas at the proper time and zindex
    // Phaser sprites can now be drawn above and below the createjs scene
    //
    cjs.bmd = mgr.game.add.bitmapData(K.canvasWidth, K.canvasHeight);

    cfg = {};
    cfg.difficulty = 0;
    mgr.cfg = cfg;


    objs = {};
    // objs.spriteWin = new lib.win();
    cjs.objs = objs;

    strTags = {};
    strTags.IDS_INSTRUCTIONS = function (str) {
        root.text.text = str;
    };
    strTags.IDS_MEDIUM_DIFFICULTY = function (str) {
        root.playMedium.text.text = str;
    };
    strTags.IDS_HARD_DIFFICULTY = function (str) {
        root.playHard.text.text = str;
    };
    strTags.IDS_CONGRATS = function (str) {
        root.textWon.text = str;
    };
    strTags.IDS_LOST = function (str) {
        root.textLost.text = str;
    };
    strTags.IDS_SPACE = function (str) {
        root.textSpace.text = str;
    };
    strTags.IDS_MADE_IT = function (str) {
        root.text_1.text = str;
    };
    strTags.IDS_TOTAL_SCORE = function (str) {
        root.text_3.text = str;
    };
    strTags.IDS_SHOOT_UFO = function (str) {
        root.text_4.text = str;
        root.text_5.text = str;
    };
    strTags.IDS_EARN_POINTS = function (str) {
        root.text_6.text = str;
    };
    strTags.IDS_TURBO_BOOST = function (str) {
        root.text_7.text = str;
    };
    strTags.IDS_LIVES = function (str) {
        root.text_8.text = str;
    };
    strTags.IDS_FIRE_MISSILE = function (str) {
        root.text_9.text = str;
    };
    strTags.IDS_MOVE_SHIP = function (str) {
        root.text_10.text = str;
    };
    strTags.IDS_PLAY_AGAIN = function (str) {
        root.playAgain.text.text = str;
    };
    strTags.IDS_PLAY_GAME = function (str) {
        root.playGame.text.text = str;
    };

    cjs.strTags = strTags;

    root.playMedium.on('click', function () {
        cfg.difficulty = 1;
        root.gotoAndStop('instructions');
    });
    root.playHard.on('click', function () {
        cfg.difficulty = 2;
        root.gotoAndStop('instructions');
    });
    root.playGame.on('click', function () {
        mgr.play();
    });
    root.playAgain.on('click', function () {
        console.log('playAgain: clicked');
        mgr.play();
    });
    
    stage = new createjs.Stage(Lgz.game.canvas);
    stage.addChild(root);
    stage.update();
    stage.enableMouseOver();
    
    cjs.stage = stage;

    createjs.Touch.enable(stage);
    console.log('calling mgr.sceneInit()');

    mgr.cjs = cjs;
    mgr.sceneInit();
    mgr.scenes.splash.start();
};

Lgz.cjsInit  = function (mgr) {
    'use strict';
    var loader;
	loader = new createjs.LoadQueue(false);
	// loader.installPlugin(createjs.Sound);
	loader.addEventListener(
        "fileload",
        Lgz._cbCjsFileLoaded
    );
	loader.addEventListener(
        "complete",
        function () {
            Lgz._cbCjsReady(mgr);
        }
    );
	loader.loadManifest(lib.properties.manifest);
};
Lgz._cbMgrReady = function (mgr) {
    'use strict';
    //mgr.hud.orient = mgr.hud.ORIENT.PORTRAIT;      
    mgr.hud.orient = mgr.hud.ORIENT.NONE;
    
    
    Lgz.cjsInit(mgr);
};
Lgz.init = function () {
    'use strict';
    var mgr;

    mgr = new LgzLib.Mgr(
        Lgz,
        K.urlGamePrefix,
        function () {
            Lgz._cbMgrReady(mgr);
        }
    );
 
};
