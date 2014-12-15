/*global
    $: true,
    Phaser: true,
    K: true,
    console: true,
    window: true,
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
LgzLib.Scenes.Main.prototype.preinit = function () {
    this.lgzPlaySet = new Lgz.PlaySet(this);
};
LgzLib.Scenes.Main.prototype.rscload = function () {
    console.debug('Scene.rscload: key ' + this.key);    
    this.lgzMgr.rscImage('main');
    this.lgzPlaySet.rscload();

};
LgzLib.Scenes.Main.prototype.create = function () {

    console.debug('Scene.create: key ' + this.key);    

    //sprite: main background
    this.game.add.sprite(0, 0, 'main');
    this.lgzPlaySet.create();

};
LgzLib.Scenes.Main.prototype.update = function () {
    this.lgzPlaySet.update();
};
LgzLib.Scenes.End.prototype.rscload = function () {
    console.debug('Scene.rscload: key ' + this.key);    
    
    this.lgzMgr.rscImage('end');
};
LgzLib.Scenes.End.prototype.create = function () { 
    console.debug('Scene.create: key ' + this.key);   
    this.game.add.sprite(0, 0, 'end');

};