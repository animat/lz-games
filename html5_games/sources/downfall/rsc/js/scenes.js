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

/*
LgzLib.Scene.prototype.preload = function () {
    'use strict';
    //note: called by game obj
    console.debug('Scene.preload: key ' + this.key);
    this.saveCpu = this.game.plugins.add(Phaser.Plugin.SaveCPU);
    //note: todo: reset to 20 after dev/debug
    this.saveCpu.renderOnFPS = 5;
};
*/

LgzLib.Scenes.Splash.prototype.p_preinit = LgzLib.Scenes.Splash.prototype.preinit;

LgzLib.Scenes.Splash.prototype.preinit = function () {
    'use strict';
    console.debug('LgzLib.Scenes2.Splash.prototype.preinit');

    //this.lgzMgr.cjs.bitmapData = this.game.add.bitmapData(K.canvasWidth, K.canvasHeight);

    this.lgzHud.objJQ('#lgzInput');
    this.p_preinit();

};
LgzLib.Scenes.Welcome.prototype.rscload = function () {
    'use strict';
    console.log('Scenes2.Welcome.prototype.rscload');
};
LgzLib.Scenes.Welcome.prototype.create = function () {
    'use strict';
    console.debug('Scenes2.Welcome.prototype.create: key ' + this.key);
    this.lgzMgr.cjs.root.gotoAndPlay('intro');
};
LgzLib.Scenes.Welcome.prototype.render = function () {
    'use strict';
    this.lgzMgr.cjs.stage.update();
};

LgzLib.Scenes.Main.prototype.preinit = function () {
    'use strict';
        
    // this.game.renderer.clearBeforeRender = false;
    this.game.renderer.clearBeforeRender = true;
    this.playSet = new Lgz.PlaySet(this);

    this.cjsRoot = this.lgzMgr.cjs.root;
    this.cjsStage = this.lgzMgr.cjs.stage;
    this.cjsRender = true;


    //ivanixcu: for dev/debug only. should be 20-30fps
    this.lgzMgr.saveCpu.renderOnFPS = 20;
};
LgzLib.Scenes.Main.prototype.rscload = function () {
    'use strict';
    console.debug('Scenes2.Main.rscload: key ' + this.key);
    this.playSet.rscload();

};
LgzLib.Scenes.Main.prototype._createBg = function() {};
LgzLib.Scenes.Main.prototype._create = LgzLib.Scenes.Main.prototype.create;
LgzLib.Scenes.Main.prototype.create = function () {
    'use strict';

    this._create();
    console.debug('Scenes2.create: key ' + this.key);

    this.cjsRoot.gotoAndPlay('game');
    this.playSet.create();
};
LgzLib.Scenes.Main.prototype.update = function () {
    'use strict';
    this.playSet.update();
};
LgzLib.Scenes.Main.prototype.preRender = function () {
    'use strict';
    // console.log('Main.preRender:');
    this.playSet.preRender();
    if (this.cjsRender) {
        this.cjsStage.update();
    }
};
LgzLib.Scenes.Main.prototype.render = function () {
    'use strict';
    this.playSet.render();
};
LgzLib.Scenes.Main.prototype.shutdown = function () {
    'use strict';
    this.playSet.shutdown();
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

};
LgzLib.Scenes.End.prototype.render = function () {
    'use strict';
    this.lgzMgr.cjs.stage.update();
};
