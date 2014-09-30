/*jslint nomen: true */
/*global
 K: true,
 LgzLib: true,
 Phaser: true,
 Scene: true,
 window: true,
 console: true,
 dbX: true,
 g: true
*/

var Lgz = Lgz || {};
Lgz.SceneSplash = function (game) {
    "use strict";
    var thisObj, triggerFS, ui;

    thisObj = this;

        
    thisObj.init = function (mgr) {
        thisObj.mgr = mgr;
    };
    thisObj.preload = function () {
        thisObj.mgr.rscImage('welcome');
        thisObj.mgr.rscImage('main');
        thisObj.mgr.rscAtlas('balloons');
        thisObj.mgr.rscAudio('sfx', true);
 
        thisObj.saveCpu = thisObj.game.plugins.add(Phaser.Plugin.SaveCPU);
        thisObj.saveCpu.renderOnFPS = K.renderFPS;
        thisObj.game.stage.backgroundColor = K.canvasBg;
        
    };
    thisObj.create = function () {
        thisObj.mgr.welcome();
    };

};
