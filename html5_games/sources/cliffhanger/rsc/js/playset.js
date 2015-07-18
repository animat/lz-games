/*global
    $: true,
    Phaser: true,
    K: true,
    console: true,
    createjs: true,
    lib: true,
    window: true,
    Cjs2Phaser: true,
    LgzLib: true
 */
/*jslint  nomen: true */
var Lgz = Lgz || {};
LgzLib.DisplayNodeText.prototype.conform = function () {
    'use strict';
};
Lgz.Tree = function (playSet, node, x, y, leftside) {
    'use strict';
    var game, spriteMMA, height, width, cfg;
    this.playSet = playSet;
    game = this.playSet.game;
    this.game = game;
    Cjs2Phaser.Sprite.call(this, game, lib.trees,  x, y);

    this.anchor.setTo(0, 0.5);

    this.node = node;


    cfg  = {};
    cfg.text = {};
    if (leftside) {
        cfg.text.style =  K.nodeTextStyleLeft;
    } else {
        cfg.text.style =  K.nodeTextStyleRight;
    }

    spriteMMA = new LgzLib.DisplayNodeBox(this.game, this.node, 70, -10, 150, 50, cfg);
    spriteMMA.playOnLoad = false;
    this.addChild(spriteMMA);
    this.spriteMMA = spriteMMA;

    width = Math.abs(this.width);
    height = Math.abs(this.height);
    /*
    spriteMMA.eventLoadOK = function () {
        spriteMMA.conform((width * 0.8)|0, (height * 0.8)|0);
    };
    spriteMMA.load();
    */

    if (!leftside) {
        this.scale.x = -1;
        spriteMMA.scale.x = -1;
        spriteMMA.x = 70;
        spriteMMA.mma.anchor.x = 1;
    }
    
    this.reset();
};
Lgz.Tree.lgzExtends(Cjs2Phaser.Sprite);
Lgz.Tree.prototype.reset = function () {
    'use strict';
   
    this.revive();
    this.spriteCJS.gotoAndStop('static');
};
Lgz.Tree.prototype._eventHit = function () {
    'use strict';
    var thisObj;
    thisObj = this;
    thisObj.kill();
};
Lgz.Tree.prototype.eventHit = function () {
    'use strict';
    var thisObj;
    console.log('Lgz.Tree.eventHit:');
    this.spriteCJS.gotoAndPlay('pop');

    thisObj  = this;
    window.setTimeout(
        function () {
            console.log('Tree: killed');
            thisObj._eventHit();
        },
        2000
    );

};
Lgz.PlaySet = function (scene) {
    'use strict';
    var thisObj, cjs, cjsRoot, cjsStage;
    thisObj = this;
    thisObj.scene = scene;
    thisObj.lgzMgr = scene.lgzMgr;
    thisObj.game = thisObj.lgzMgr.game;
    thisObj.nm = thisObj.lgzMgr.nm;
 
    thisObj.cjsRoot = cjsRoot;

    cjs = thisObj.lgzMgr.cjs;
    cjsRoot = thisObj.lgzMgr.cjs.root;
    cjsStage = thisObj.lgzMgr.cjs.stage;


    thisObj.rscload = function () {
        thisObj.lgzMgr.rscAudio('sfx', true);
    };
    thisObj.cjsAdd = function (child) {
        cjsRoot.addChild(child);
        thisObj.cjsArr.push(child);
    };
    thisObj.cjsCreate  = function () {

    };

    thisObj.cjsRemove  = function () {
        
        var i, child, length;
        console.log('cjsRemove: ');
        for (i = 0; i < thisObj.cjsArr.length; i += 1) {
            cjsRoot.removeChild(thisObj.cjsArr[i]);
        }
        
    };
    thisObj.cjsBringToFront = function () {
        cjsRoot.removeChild(thisObj.spriteTryBtn);
        cjsRoot.addChild(thisObj.spriteTryBtn);

    };
    thisObj.cjsEndScene = function () {
        var obj;
        cjsRoot.removeChild(thisObj.spriteTryBtn);
        obj = cjs.objs.spriteWin;
        obj.setTransform(300, 200);
        thisObj.cjsAdd(obj);
        thisObj.spriteWin = obj;

    };

    thisObj._create = function () {
        var i, obj, $optArr, height, y, ygap, x;
        
        console.log('Lgz.PlaySet._create:');

        thisObj.nodeCount = thisObj.nm.nodeCount();
        thisObj.sprites = {};
 
        thisObj.nm.reset();
        thisObj.sfx = thisObj.lgzMgr.rscAudioTracks('sfx');
        thisObj.cjsCreate();

        thisObj.groupTrees = thisObj.game.add.group();

        $optArr = thisObj.nm.$tpdata.find('set[linkedto="ltarget"]').find('option');

        height = K.canvasVHeight - K.leftTopY;
        ygap = Math.round(height / $optArr.length);
        console.log('ygap: ' + ygap);
        for (i = 0; i < $optArr.length; i += 1) {
            y = K.leftTopY + ygap * i;
            console.log('y: ' + y);
            obj = new Lgz.Tree(thisObj, $optArr[i], K.leftTreeX, y, true);
            thisObj.groupTrees.addChild(obj);
        }
        

        $optArr = thisObj.nm.$tpdata.find('set[linkedto="rtarget"]').find('option');

        height = K.canvasVHeight - K.leftTopY;
        ygap = Math.round(height / $optArr.length);
        console.log('ygap: ' + ygap);
        for (i = 0; i < $optArr.length; i += 1) {
            y = K.rightTopY + ygap * i;
            console.log('y: ' + y);
            obj = new Lgz.Tree(thisObj, $optArr[i], K.rightTreeX, y, false);
            thisObj.groupTrees.addChild(obj);
        }

        thisObj.lgzMgr.spinnerHide();
 
    };
    thisObj.create = function () {

        thisObj.lgzMgr.spinnerShow();
        window.setTimeout(
            function () {
                thisObj._create();
            },
            500
        );
    };
    thisObj.syncCJS = function () {
        var currentTS;
        currentTS = Date.now();
        if (!thisObj.cjsTS || thisObj.cjsTS < currentTS) {
            thisObj.cjsTS = Date.now() + K.cjsTS;
            thisObj.game.cjsRender = true;
        } else {
            thisObj.game.cjsRender = false;
        }
    };
    thisObj.update = function () {
        thisObj.syncCJS();
    };
    thisObj.pause = function () {

    };
    thisObj.resume = function () {

    };
    thisObj.shutdown = function () {
        console.log('Lgz.PlaySet.shutdown: ');
        thisObj.cjsRemove();
    };
    thisObj.dialogCongrats = function () {
        cjsRoot.gotoAndPlay('win');
        thisObj.lgzMgr.postScore();
    };
   
    thisObj.eventAnswerSubmit = function () {
        thisObj.check();
    };
    thisObj.eventAnswerCancel = function () {
        thisObj.dialogAnswerHide();
    };
    thisObj.correct = function () {
        console.log('Lgz.PlaySet.correct:');
        thisObj.dialogAnswerHide();
        thisObj.lgzMgr.soundPlay('blossommp3');
    };
    thisObj.wrong = function () {
        console.log('Lgz.PlaySet.wrong:');
        thisObj.lgzMgr.soundPlay('bellwav');
    };
    thisObj.check = function () {
    };
};
