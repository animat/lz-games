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

    //ivanixcu: disable phase input event handling for cjs play button in welcome window
    //          required for ie11
    this.game.input.disabled = true;

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

    //ivanixcu: renable phaser input handling events on phaser sprites
    this.game.input.disabled = false;

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
    console.debug('Scene.create: key ' + this.key);

};
LgzLib.Scenes.End.prototype.render = function () {
    'use strict';
    this.lgzMgr.cjs.stage.update();
};
