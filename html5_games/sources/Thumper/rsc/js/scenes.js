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
    this.playSet = new Lgz.PlaySet(this);
};
LgzLib.Scenes.Main.prototype.rscload = function () {
    console.debug('Scene.rscload: key ' + this.key);    
    this.lgzMgr.rscImage('main');
    this.playSet.rscload();

};
LgzLib.Scenes.Main.prototype.create = function () {

    console.debug('Scene.create: key ' + this.key);    

    //sprite: main background
    this.game.add.sprite(0, 0, 'main');
    this.playSet.create();

};
LgzLib.Scenes.Main.prototype.update = function () {
    this.playSet.update();
};
LgzLib.Scenes.End.prototype.rscload = function () {
    console.debug('Scene.rscload: key ' + this.key);    
    
    this.lgzMgr.rscImage('end');
    this.lgzMgr.rscImage('sign2');
};
LgzLib.Scenes.End.prototype.create = function () {
    var ps, score, spriteSign, sprite;
    
    console.debug('Scene.create: key ' + this.key); 
    
    ps = this.lgzMgr.scenes.main.playSet;
    score = ps.score.correct / ps.score.total;
    this.lgzMgr.postScore(score.toFixed(2));
    //todo: show correct vs total in spriteSign sprites

    this.game.canvas.style.cursor="";
    this.game.add.sprite(0, 0, 'end');
    
    spriteSign = this.game.add.sprite(300, 40, 'sign2');
    spriteSign.scale.setTo(1.2);
    this.spriteSign = spriteSign;
    
    sprite = this.game.add.text(50, 210, 'Correct', K.signSmallTextStyle);
    spriteSign.addChild(sprite);
    
    sprite = this.game.add.text(140, 210, 'Total', K.signSmallTextStyle);
    spriteSign.addChild(sprite);
    
    sprite = this.game.add.text(70, 182, ps.score.correct, K.signTextStyle);
    spriteSign.addChild(sprite);
 
    sprite = this.game.add.text(150, 182, ps.score.total, K.signTextStyle);
    spriteSign.addChild(sprite);

    this.lgzMgr.soundPlay('c-end');
    Lgz.hud.winOpen('winWon');
   
};