/*global
    $: true,
    Phaser: true,
    K: true,
    console: true,
    window: true,
    LgzLib: true,
    Lgz: true
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
    this.saveCpu.renderOnFPS = 20;
};

LgzLib.Scenes.Splash.prototype.p_preinit = LgzLib.Scenes.Splash.prototype.preinit;

LgzLib.Scenes.Splash.prototype.preinit = function () {
    'use strict';
    console.debug('LgzLib.Scenes2.Splash.prototype.preinit');
    this.lgzHud.objJQ('#lgzInput');
    this.p_preinit();
};
LgzLib.Scenes.Welcome.prototype.rscload = function () {
    'use strict';
};
LgzLib.Scenes.Welcome.prototype.create = function () {
    'use strict';
    console.debug('Scenes2.Welcome.create: key ' + this.key);
    this.lgzMgr.cjs.root.gotoAndPlay('intro');
};
LgzLib.Scenes.Welcome.prototype.render = function () {
    'use strict';
    this.lgzMgr.cjs.stage.update();
};

LgzLib.Scenes.Main.prototype.preinit = function () {
    'use strict';
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

    this.lgzMgr.cjs.root.gotoAndPlay('game');
    this.playSet.create();
};
LgzLib.Scenes.Main.prototype.update = function () {
    'use strict';
    this.playSet.update();
};
LgzLib.Scenes.Main.prototype.preRender = function () {
    'use strict';
    this.lgzMgr.cjs.stage.update();
};
LgzLib.Scenes.Main.prototype.render = function () {
    'use strict';
};
LgzLib.Scenes.Main.prototype.shutdown = function () {
    'use strict';
    this.playSet.shutdown();
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
    'use strict';
    console.debug('Scenes2.Main.eventResized: key ' + this.key);
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
    this.lgzMgr.cjs.strTags.IDS_INTRO("");
    this.lgzMgr.cjs.root.addChild(this.lgzMgr.clip.spriteTimer);
    this.lgzMgr.cjs.root.gotoAndPlay('win');
};
LgzLib.Scenes.End.prototype.render = function () {
    'use strict';
    this.lgzMgr.cjs.stage.update();
};
