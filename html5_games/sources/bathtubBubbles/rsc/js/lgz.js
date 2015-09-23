
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
    var cjs, root, objs,  strTags, stage;
    console.log('Lgz._cbCjsReady');

    cjs = {};
    root = new lib.bathTubBubblesCJS();
    cjs.root = root;

    objs = {};
    // objs.spriteWin = new lib.win();
    cjs.objs = objs;

    strTags = {};
    strTags.IDS_INSTRUCTIONS = function (str) {
        root.text.text = str;
    };
    strTags.IDS_PLAY = function (str) {
        root.play_.text.text = str;
    };
    strTags.IDS_CURRENT_SCORE = function (str) {
        root.text_2.text = str;
    };
    strTags.IDS_FINAL_SCORE = function (str) {
        root.text_Final.text = str;
    };
    /*
     * todo: remove 
    strTags.IDS_CONGRATS = function (str) {
        root.congratsWindow.text.text = str;
    };
    strTags.IDS_YOU_WIN = function (str) {
        root.congratsWindow.text_1.text = str;
    };
     * todo: add IDS_CURRENT_SCORE 
     * todo: add IDS_FINAL_SCORE 
    */
    strTags.IDS_PLAY_AGAIN = function (str) {
        root.playAgain.text.text = str;
        /*
        objs.spriteWin.playAgain.text.text = str;
        */
    };
    cjs.strTags = strTags;

    root.play_.on('click', function () {
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
    mgr.hud.orient = mgr.hud.ORIENT.LANDSCAPE;      
    
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
Lgz.debug = function () {
    ps = Lgz.mgr.scenes.main.playSet;
    b0 = ps.groupBubbles.children[0];
    for(var i = 1; i < ps.groupBubbles.children.length; i +=1) {
        ps.groupBubbles.children[i].x = 500;
    };
    b0.x = 100;
    b0.y = 100;

};
