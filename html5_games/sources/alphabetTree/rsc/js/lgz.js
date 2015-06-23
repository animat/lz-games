
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
    root = new lib.alphabetTreeCJS();
    cjs.root = root;

    strTags = {};
    strTags.IDS_INSTRUCTIONS = function (str) {
        root.instructions.text = str;
    };
    strTags.IDS_PLAY_GAME = function (str) {
        root.playGame.text.text = str;
        root.playGame.text_1.text = str;
    };
    strTags.IDS_CONGRATS = function (str) {
        root.text.text = str;
        root.text_1.text = str;
    };
    strTags.IDS_PLAY_AGAIN = function (str) {
        root.playAgain.text.text = str;
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
//note: for making maps
Lgz.debug = function () {
    'use strict';
    Lgz.pos = [];
    Lgz.savepos = function (event) {
        var p, sprite, ps;
        p = {};
        p.x = event.x;
        p.y = event.y;
        Lgz.pos.push(p);
        ps = Lgz.mgr.scenes.main.playSet;
        //sprite =  new Lgz.Decoy(ps, Lgz.pos.length);
        sprite =  new Lgz.Decoy(ps, 10);
        sprite.x = p.x;
        sprite.y = p.y;
        Lgz.sprite = sprite;
    };
    Lgz.mgr.game.canvas.onclick = function (event) {
        Lgz.savepos(event);
    };
};
