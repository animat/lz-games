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
Lgz.Hoop = function (playSet, node, x, y) {
    'use strict';
    var thisObj, game, spriteMMA, height, width;

    thisObj = this;

    this.playSet = playSet;
    game = this.playSet.game;
    this.game = game;
    Cjs2Phaser.Sprite.call(this, game, lib.hoop,  x, y);

    this.anchor.setTo(0, 0);

    this.node = node;

    spriteMMA = new LgzLib.DisplayNodeMMA(
        this.game,
        this.node,
        0,
        0
    );
    spriteMMA.playOnLoad = false;
    this.addChild(spriteMMA);
    this.spriteMMA = spriteMMA;

    //spriteMMA.anchor.setTo(0.5, 0.5);
    spriteMMA.eventLoadOK = function () {
        spriteMMA.center(thisObj.width, thisObj.height);
    };
    spriteMMA.load();
    this.reset();
};
Lgz.Hoop.lgzExtends(Cjs2Phaser.Sprite);
Lgz.Hoop.prototype.reset = function () {
    'use strict';
   
    this.revive();
    //this.spriteCJS.gotoAndStop('static');
};
Lgz.Hoop.prototype._eventHit = function () {
    'use strict';
    var thisObj;
    thisObj = this;
    thisObj.kill();
};
Lgz.Hoop.prototype.eventHit = function () {
    'use strict';
    var thisObj;
    console.log('Lgz.Hoop.eventHit:');
    this.spriteCJS.gotoAndPlay('pop');

    thisObj  = this;
    window.setTimeout(
        function () {
            console.log('Hoop: killed');
            thisObj._eventHit();
        },
        2000
    );

};
Lgz.PlaySet = function (scene) {
    'use strict';
    var thisObj, $lgzInput, cjs, cjsRoot, cjsStage;
    thisObj = this;
    thisObj.scene = scene;
    thisObj.lgzMgr = scene.lgzMgr;
    thisObj.game = thisObj.lgzMgr.game;
    thisObj.nm = thisObj.lgzMgr.nm;
 
    thisObj.cjsRoot = cjsRoot;

    cjs = thisObj.lgzMgr.cjs;
    cjsRoot = thisObj.lgzMgr.cjs.root;
    cjsStage = thisObj.lgzMgr.cjs.stage;

    $lgzInput = $('#lgzInput');

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
        //obj = new lib.win();
        obj = cjs.objs.spriteWin;
        obj.setTransform(300, 200);
        thisObj.cjsAdd(obj);
        thisObj.spriteWin = obj;

    };

    thisObj._create = function () {

        var i, $optArr, obj, xgap, x;
        
        console.log('Lgz.PlaySet.create: 1');

        thisObj.nodeCount = thisObj.nm.nodeCount();
        thisObj.sprites = {};
 
        thisObj.nm.reset();
        thisObj.sfx = thisObj.lgzMgr.rscAudioTracks('sfx');
        thisObj.cjsCreate();

        thisObj.groupHoops = thisObj.game.add.group();

        $optArr = thisObj.nm.$tpdata.find('option');

        xgap = Math.round(K.canvasVWidth / $optArr.length);
        for (i = 0; i < $optArr.length; i += 1) {
            x = xgap * i;
            obj = new Lgz.Hoop(thisObj, $optArr[i], x, 0);
            thisObj.groupHoops.addChild(obj);
        }
        

        $lgzInput.keypress(
            function (event) {
                if (event.which === 13) {
                    thisObj.check();
                }
            }
        );
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
        $lgzInput.css('display', 'none');
        $lgzInput.unbind();
    };
    thisObj.dialogCongrats = function () {
        cjsRoot.gotoAndPlay('win');
        thisObj.lgzMgr.postScore();
    };
    thisObj.dialogAnswerShow = function () {
        $lgzInput.val('');
        $lgzInput.css('display', 'block');
        $lgzInput.focus();
        cjsRoot.dialogAnswer.visible = true;
    };
    thisObj.dialogAnswerHide = function () {
        cjsRoot.dialogAnswer.visible = false;
        $lgzInput.css('display', 'none');
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
        thisObj.updateSyncTS();
    };
    thisObj.wrong = function () {
        console.log('Lgz.PlaySet.wrong:');
        thisObj.lgzMgr.soundPlay('bellwav');
        //$lgzInput.val('');
    };
    thisObj.check = function () {
           //todo: if correct / wrong
           // thisObj.correct();
           // thisObj.wrong();
    };
};
