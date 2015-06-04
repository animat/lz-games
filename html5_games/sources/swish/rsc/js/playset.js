/*global
    $: true,
    Phaser: true,
    K: true,
    console: true,
    createjs: true,
    lib: true,
    window: true,
    LgzLib: true
 */
/*jslint  nomen: true */
var Lgz = Lgz || {};
Lgz.PlaySet = function (scene) {
    'use strict';
    var thisObj, $lgzInput, cjs, cjsRoot, cjsStage;
    thisObj = this;
    thisObj.scene = scene;
    thisObj.lgzMgr = scene.lgzMgr;
    thisObj.game = thisObj.lgzMgr.game;
    thisObj.nm = thisObj.lgzMgr.nm;
    thisObj.syncTS = 0;
 
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
        
        console.log('Lgz.PlaySet.create: 1');

        thisObj.nodeCount = thisObj.nm.nodeCount();        
        thisObj.sprites = {};
 
        thisObj.nm.reset();
        thisObj.sfx = thisObj.lgzMgr.rscAudioTracks('sfx');
        thisObj.cjsCreate();
        thisObj.growCount = 0;

        $lgzInput.keypress(
            function (event) {
                console.log('Lgz.PlaySet.create: on $lgzInput.keypress()');
                if (event.keyCode === 13) {
                    thisObj.check();
                }
            }
        );
        thisObj.lgzMgr.spinnerHide();

        thisObj.updateSyncTS();
 
    };
    thisObj.create = function () {
        thisObj.syncTS = 0;

        thisObj.lgzMgr.spinnerShow();
        window.setTimeout(
            function () {
                thisObj._create();
            },
            500
        );
    };
    thisObj.updateSyncTS = function () {
        thisObj.syncTS = Date.now() + K.syncTS;
    };
    thisObj.update = function () {
        var currentTS;
        currentTS = Date.now();
        if (thisObj.syncTS && thisObj.syncTS < currentTS) {
            thisObj.updateSyncTS();
        }
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
        thisObj.syncTS = 0;
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
        thisObj.syncTS = 1;
    };
    thisObj.correct = function () {
        console.log('Lgz.PlaySet.correct:');
        thisObj._answeredCorrect = true;
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
