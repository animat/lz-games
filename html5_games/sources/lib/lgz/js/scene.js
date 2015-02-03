/*global
    $: true,
    Phaser: true,
    K: true,
    console: true,
    window: true,
    LgzLib: true
 */
/*jslint  nomen: true */
var LgzLib = LgzLib || {};

LgzLib.Scene = function (lgzMgr) {
    'use strict';
    var num, key;

    this.lgzMgr = lgzMgr;
    this.lgzHud = lgzMgr.hud;

    LgzLib.Scene._objs = LgzLib.Scene._objs || [];
    num = Object.keys(LgzLib.Scene._objs).length;
    key = 'sc' + num;
    console.debug('Scene: ' + key);
    LgzLib.Scene._objs[key] = this;

    this.key = key;
    //todo: deprecate addScene, call game.state.add directly    
    //lgzMgr.addScene(key, this);
    this.state = lgzMgr.game.state.add(key, this);
    //note: gamestate should add game to obj
    this.preinit();
  
};
LgzLib.Scene.prototype.preinit = function () {
    'use strict';
    //note: called when scene obj created by new;
    console.debug('Scene.preinit: key ' + this.key);
};
LgzLib.Scene.prototype.init = function () {
    'use strict';
    //note: called by game object when starting state (scene)
    console.debug('Scene.init: key ' + this.key);
    //todo: deprecate passing lgzMgr
    
};
LgzLib.Scene.prototype.rscload = function () {
    'use strict';
    //note: each scene's rscload called at  splash preload
    console.debug('Scene.rscload: key ' + this.key);
};
LgzLib.Scene.prototype.preload = function () {
    'use strict';
    //note: called by game obj
    console.debug('Scene.preload: key ' + this.key);
    this.saveCpu = this.game.plugins.add(Phaser.Plugin.SaveCPU);
    this.saveCpu.renderOnFPS = K.renderFPS;

};
LgzLib.Scene.prototype.create = function () {
    'use strict';
    //note: called by game object
};
LgzLib.Scene.prototype.update = function () {
    'use strict';
    //note: called by game object
};
LgzLib.Scene.prototype.start = function () {
    'use strict';
    //note: called by lgzMgr or other to start this scene
    this.game.state.start(this.key,  true, false);
};

// define common scenes
LgzLib.Scenes = {};

//Scene: Splash
LgzLib.Scenes.Splash  = function (lgzMgr) {
    'use strict';
    LgzLib.Scene.call(this, lgzMgr);
};
LgzLib.Scenes.Splash.extends(LgzLib.Scene);
//LgzLib.inherit(LgzLib.Scenes.Splash, LgzLib.Scene);

LgzLib.Scenes.Splash.prototype.preload = function () {
    'use strict';
    var i, _objs;
    console.debug('Splash.preload: ');
    this._super.prototype.preload.call(this);

    this.lgzMgr.rscImage('dot', true);

    _objs = this._super._objs;
    for (i in _objs) {
        if (_objs.hasOwnProperty(i)) {
            console.debug('_objs idx: ' + i);
            _objs[i].rscload();
        }
    }
};
LgzLib.Scenes.Splash.prototype.rscload = function () {
    'use strict';
    console.debug('Scenes.Splash.rscload: key ' + this.key);
};
LgzLib.Scenes.Splash.prototype.create = function () {
    'use strict';
    var thisObj, nm;
    console.debug('Scenes.Splash.create: key ' + this.key);
    thisObj = this;
    
    this.lgzMgr.welcome();
};

LgzLib.Scenes.Splash.prototype.start = function () {
    'use strict';
    var thisObj, nm;
    console.debug('Scenes.Splash.start: key ' + this.key);
    thisObj = this;

    nm = this.lgzMgr.nm;
    nm.eventLoadOK = function () {
        console.debug('nm.eventLoadOK callback');
        thisObj.eventNmLoadOK();
    };
    nm.eventLoadFAIL = function () {
        console.debug('nm.eventLoadFail callback');
        thisObj.eventNmLoadFAIL();
    };
 
    this.lgzMgr.nm.load();
};
LgzLib.Scenes.Splash.prototype.eventNmLoadOK = function () {
    'use strict';
    console.debug('Scenes.Splash: nmLoadOK:');
    this.game.state.start(this.key,  true, false);
};
LgzLib.Scenes.Splash.prototype.eventNmLoadFAIL = function () {
    'use strict';
    //todo: display error to user
    console.error('Scene: Splash: Could not load xml data from server');
};
//Scene: Welcome
LgzLib.Scenes.Welcome  = function (lgzMgr) {
    'use strict';
    LgzLib.Scene.call(this, lgzMgr);
};
LgzLib.Scenes.Welcome.extends(LgzLib.Scene);
LgzLib.Scenes.Welcome.prototype.rscload = function () {
    'use strict';
    console.debug('Scenes.Welcome.rscload: key ' + this.key);
    this.lgzMgr.rscImage('welcome');
};
LgzLib.Scenes.Welcome.prototype.create = function () {
    'use strict';
    console.debug('Scenes.Welcome.create: key ' + this.key);
    this.lgzHud.forceLandscape();
    this.game.add.sprite(0, 0, 'welcome');
    this.lgzHud.winOpen('winPlay');
};

//Scene: Main
LgzLib.Scenes.Main  = function (lgzMgr) {
    'use strict';
    LgzLib.Scene.call(this, lgzMgr);
};
LgzLib.Scenes.Main.extends(LgzLib.Scene);
LgzLib.Scenes.Main.prototype.rscload = function () {
    'use strict';
    console.debug('Scenes.Main.rscload: key ' + this.key);
    this.lgzMgr.rscImage('main');
};
LgzLib.Scenes.Main.prototype.create = function () {
    'use strict';
    var thisObj, hints;
    thisObj = this;
    console.debug('Scenes.Main.create: key ' + this.key);
    thisObj.game.add.sprite(0, 0, 'main');
    
    hints = thisObj.lgzMgr.hints;
    
    hints.eventPenalty = function (unit, value) {
        thisObj.eventHintPenalty(unit, value);
    };
    hints.eventMoveToEnd = function () {
        thisObj.eventHintMoveToEnd();
    };
    hints.eventNextLetter = function () {
        thisObj.eventHintNextLetter();
    };
    hints.eventGiveUp = function () {
        thisObj.eventHintGiveUp();
    };

    thisObj.lgzMgr.pause = function () {
        thisObj.game.paused = true;
        thisObj.eventGamePaused();

    };
    thisObj.lgzMgr.resume = function () {
        thisObj.game.paused = false;
        thisObj.eventGameResumed();
    };
 
    
};
LgzLib.Scenes.Main.prototype.eventHintPenalty = function (unit, value) {
    'use strict';
    console.debug('Scenes.Main.eventHintPenalty: ' + unit + ',' + value);
    //todo: record penalty on score or time here
};
LgzLib.Scenes.Main.prototype.eventHintGiveUp = function () {
    'use strict';
    console.debug('Scenes.Main.eventHintGiveUp:');
    this.lgzMgr.nm.nodeGiveUp();
};
LgzLib.Scenes.Main.prototype.eventHintMoveToEnd = function () {
    'use strict';
    console.debug('Scenes.Main.eventHintMoveToEnd:');
    this.lgzMgr.nm.nodeMoveToEnd();
};
LgzLib.Scenes.Main.prototype.eventHintNextLetter = function () {
    'use strict';
    console.debug('Scenes.Main.eventHintNextLetter:');
};
LgzLib.Scenes.Main.prototype.eventGamePaused = function () {
    'use strict';
    console.debug('Scenes.Main.eventGamePaused:');
};
LgzLib.Scenes.Main.prototype.eventGameResumed = function () {
    'use strict';
    console.debug('Scenes.Main.eventGameResumed:');
};
//Scene: End
LgzLib.Scenes.End  = function (lgzMgr) {
    'use strict';
    LgzLib.Scene.call(this, lgzMgr);
};
LgzLib.Scenes.End.extends(LgzLib.Scene);
LgzLib.Scenes.End.prototype.rscload = function () {
    'use strict';
    console.debug('Scenes.End.rscload: key ' + this.key);
    this.lgzMgr.rscImage('end');
};
LgzLib.Scenes.End.prototype.create = function () {
    'use strict';
    console.debug('Scenes.Emd.create: key ' + this.key);
    this.game.add.sprite(0, 0, 'end');
};
