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
LgzLib.Scene.prototype.preload = function () {
    'use strict';
    //note: called by game obj
    console.debug('Scene.preload: key ' + this.key);
    this.saveCpu = this.game.plugins.add(Phaser.Plugin.SaveCPU);
    this.saveCpu.renderOnFPS = 15;
};
LgzLib.Scenes.Splash.prototype.preinit = function () {

    this.lgzHud.objJQ('#lgzInput');
    this.lgzHud.objArrSave();

};
LgzLib.Scenes.Welcome.prototype.rscload = function () {
    'use strict';
};
LgzLib.Scenes.Welcome.prototype.create = function () {
    'use strict';
    console.debug('Scenes2.Welcome.create: key ' + this.key);
    //this.lgzHud.forceLandscape();
    //this.game.add.sprite(0, 0, 'welcome');
    //this.lgzHud.winOpen('winPlay');
};
LgzLib.Scenes.Welcome.prototype.render = function () {
    this.lgzMgr.cjs.stage.update();
};

LgzLib.Scenes.Main.prototype.preinit = function () {
    this.game.renderer.clearBeforeRender = false;
    this.playSet = new Lgz.PlaySet(this);
};
LgzLib.Scenes.Main.prototype.rscload = function () {
    'use strict';    
    console.debug('Scenes2.rscload: key ' + this.key);    
    this.playSet.rscload();

};
LgzLib.Scenes.Main.prototype._createBg = function() {};
LgzLib.Scenes.Main.prototype._create = LgzLib.Scenes.Main.prototype.create;
LgzLib.Scenes.Main.prototype.create = function () {
    'use strict';
    this._create();
    console.debug('Scenes2.create: key ' + this.key);    

    this.playSet.create();
    this.lgzMgr.cjs.root.gotoAndPlay('game');    

};
LgzLib.Scenes.Main.prototype.update = function () {
    'use strict';    
    this.playSet.update();
    //console.debug('LgzLib.Scenes.Main.update: renderType' + this.game.renderType );
    //Lgz.mgr.cjs.stage.update();

};
LgzLib.Scenes.Main.prototype.preRender = function () {
    'use strict';
    //console.debug('LgzLib.Scenes.Main.preRender: renderType: ' + this.game.renderType );
    Lgz.mgr.cjs.stage.update();
    
};
LgzLib.Scenes.Main.prototype.render = function () {
    'use strict';
    //console.debug('LgzLib.Scenes.Main.render: renderType: ' + this.game.renderType );

};
LgzLib.Scenes.Main.prototype.eventNodeBeforeNext = function () {
    'use strict';
    console.debug('Scenes2.Main.eventNodeBeforeNext:');
    this.playSet.eventNodeBeforeNext();
    
};
LgzLib.Scenes.Main.prototype.eventNodeAfterNext = function () {
    'use strict';
    console.debug('Scenes2.Main.eventNodeAfterNext:');
    this.playSet.eventNodeAfterNext();
};
LgzLib.Scenes.Main.prototype.eventNodeFinish = function () {
    'use strict';
    console.debug('Scenes2.Main.eventNodeFinish:');
    this.playSet.eventNodeFinish();
};
LgzLib.Scenes.Main.prototype.eventResized = function () {
    console.debug('Scenes2.Main.eventResized: key ' + this.key);    
 
   console.log('Scenes2.eventResized: fs: ' + this.lgzHud.isFullScreen());
   console.log ('Scenes2.eventResized: cw: ' + $('canvas').width() + ' csw: ' + $('canvas').css('width'));
   this.lgzHud.objArrResize();   
};
LgzLib.Scenes.End.prototype.rscload = function () {
    'use strict';
    console.debug('Scene.rscload: key ' + this.key);

};
LgzLib.Scenes.End.prototype.create = function () {
    'use strict';
    var ps, score, spriteSign, sprite, thisObj;
    
    console.debug('Scene.create: key ' + this.key);

};
