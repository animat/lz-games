
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
 
/*
 *

function init() {
	canvas = document.getElementById("canvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
 *
 */
var Lgz = Lgz || {};
Lgz.g = {};
var images = images;
Lgz._cbMgrReady = function (mgr) {
    'use strict';
    //mgr.hud.orient = mgr.hud.ORIENT.PORTRAIT;      
    mgr.hud.orient = mgr.hud.ORIENT.NONE;
    Lgz.cjsInit(mgr);
};
Lgz._cbCjsFileLoaded = function (evt) {
    'use strict';
	if (evt.item.type === "image") {
        images[evt.item.id] = evt.result;
    }
};
Lgz._cbCjsReady = function (mgr) {
    'use strict';
    var cjs, root, objs,  strTags, stage;
    console.log('Lgz._cbCjsReady');

    cjs = {};
    root = new lib.gardenGrowsCJS();
    cjs.root = root;

    objs = {};
    // objs.spriteWin = new lib.win();
    cjs.objs = objs;

    strTags = {};
    strTags.IDS_INSTRUCTIONS = function (str) {
        root.text.text = str;
    };
    strTags.IDS_PLAY_GAME = function (str) {
        root.playGame.text.text = str;
    };
    strTags.IDS_CONGRATS = function (str) {
        root.congratsWindow.text.text = str;
    };
    strTags.IDS_YOU_WIN = function (str) {
        root.congratsWindow.text_1.text = str;
    };
    strTags.IDS_PLAY_AGAIN = function (str) {
        root.playAgain.text.text = str;
        /*
        objs.spriteWin.playAgain.text.text = str;
        */
    };
    cjs.strTags = strTags;

    root.playGame.on('click', function () {
        console.log('playGame: clicked');
        mgr.play();
    });
    root.playAgain.on('click', function () {
        console.log('playAgain: clicked');
        mgr.play();
    });
    
    /*
    objs.spriteWin.playAgain.on('click', function () {
        console.log('playAgain: clicked');
        mgr.play();
    });
    */
    
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
