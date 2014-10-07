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
        thisObj.mgr.rscImage('dot');
        thisObj.mgr.rscImage('welcome');
        thisObj.mgr.rscImage('main');
        thisObj.mgr.rscAtlas('fishes');
        thisObj.mgr.rscImage('blue');
        thisObj.mgr.rscImage('mainfg');        
        thisObj.mgr.rscImage('basketfg');
        
        //thisObj.mgr.rscAtlas('penguin_fishing');
        thisObj.mgr.rscSpriteSheet('penguin_crying', 265, 370);
        thisObj.mgr.rscSpriteSheet('penguin_catching', 480, 410);        

        thisObj.mgr.rscAudio('sfx', true);
 
        thisObj.saveCpu = thisObj.game.plugins.add(Phaser.Plugin.SaveCPU);
        thisObj.saveCpu.renderOnFPS = K.renderFPS;
        thisObj.game.stage.backgroundColor = K.canvasBg;
        
    };
    thisObj.create = function () {
        thisObj.mgr.welcome();
    };

};
