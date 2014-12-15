/*global
    $: true,
    Phaser: true,
    K: true,
    console: true,
 
    LgzLib: true
 */

/*jslint  nomen: true */
/*
 * note:  Four required scenes are defined in lib/lgz/scene.js:
 * 
 * LgzLib.Scenes.Splash,  
 * LgzLib.Scenes.Welcome, 
 * LgzLib.Scenes.Main, 
 * LgzLib.Scenes.End 
 * 
 * Lgz.mgr.sceneInit() creates an object for each scene
 * 
 * We customize methods here
 * 
 */
LgzLib.Scenes.Splash.prototype._create = LgzLib.Scenes.Splash.prototype.create;
LgzLib.Scenes.Splash.prototype.create = function () {
    this.game.stage.backgroundColor = K.canvasBg;    
    this._create();
};
LgzLib.Scenes.Main.prototype.preinit = function () {
    console.debug('Scenes2.Main.preinit:');
    this.cardSet = new Lgz.CardSet(this);
};
LgzLib.Scenes.Main.prototype.rscload = function () {
    console.debug('Scenes2.Main.rscload: key ' + this.key);    
    this.lgzMgr.rscImage('main');
    this.cardSet.rscload();

};
LgzLib.Scenes.Main.prototype.update = function () {
    // console.debug('Scenes2.Main.update: key ' + this.key); 
    this.cardSet.update();
    this.timer.update();
};
LgzLib.Scenes.Main.prototype.create = function () {
    var bg, i, sx, sy, thisObj;
    
    console.debug('Scenes2.Main.create: key ' + this.key);    

    thisObj = this;
   
    //sprite: main background
    thisObj.game.add.sprite(0, 0, 'main');

    thisObj.timer = new Lgz.Timer(thisObj);
    thisObj.timer.create();
    thisObj.lgzMgr.pause = function () {
                thisObj.timer.pause();
                thisObj.game.paused = true;

    };
    thisObj.lgzMgr.resume = function () {
        thisObj.timer.resume();
        thisObj.game.paused = false;
    };
    thisObj.game.paused = true;
    thisObj.cardSet.create(function () {thisObj.createFinish(); });
};
LgzLib.Scenes.Main.prototype.createFinish = function () {
    console.debug('Scenes2.Main.createFinish:')
    this.game.paused = false;
    this.timer.start();
    this.lgzMgr.resume();

};
LgzLib.Scenes.End.prototype.rscload = function () {
    console.debug('Scenes2.End.rscload: key ' + this.key);    
    this.lgzMgr.rscImage('end');
};
LgzLib.Scenes.End.prototype.create = function () { 
    console.debug('Scenes2.End.create: key ' + this.key);   
    this.game.add.sprite(0, 0, 'end');
};