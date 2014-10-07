
/*global Phaser: true,
    K: true,
    console: true,
    window: true

  */
/*jslint  nomen: true */
var Lgz = Lgz || {};
Lgz.SceneMain = function (game) {
    'use strict';

    var thisObj, objMgr, objHud;

    thisObj = this;
    thisObj.game = game;

    thisObj.init = function (mgr) {
        objMgr = mgr;
        objHud = mgr.hud;
    };
    thisObj.preload = function () {
        thisObj.saveCpu = thisObj.game.plugins.add(Phaser.Plugin.SaveCPU);
        thisObj.saveCpu.renderOnFPS = K.renderFPS;
        thisObj.game.stage.backgroundColor = K.canvasBg;
 
        thisObj.playSet = new Lgz.PlaySet(objMgr);
  
    };
    thisObj.create = function () {
        var bg, i, sx, sy;
  

        bg = thisObj.game.add.sprite(K.mainBgOffX, K.mainBgOffY, 'main');
  
        sx = (K.canvasWidth / K.mainBgWidth);
        sy = (K.canvasHeight / K.mainBgHeight);
        bg.scale.setTo(sx, sy);
             
                 
        thisObj.timer = new Lgz.Timer(thisObj);
        thisObj.playSet.start();                 
        thisObj.timer.create();
        objMgr.pause = function () {
            thisObj.playSet.pause();
            thisObj.timer.pause();
            thisObj.game.paused = true;
        };
        objMgr.resume = function () {
            thisObj.timer.resume();
            thisObj.playSet.resume();
            thisObj.game.paused = false;
        };
        thisObj.timer.start();

  
    };
    thisObj.update = function () {


        if (K.renderForce) {
            thisObj.saveCpu.forceRender();
        }
        thisObj.playSet.update();
        thisObj.timer.update();
    };

};
