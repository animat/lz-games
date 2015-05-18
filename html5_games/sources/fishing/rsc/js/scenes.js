/*global
    $: true,
    Phaser: true,
    K: true,
    console: true,
    Lgz: true,
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
    'use strict';
    this._create();
    this.game.stage.backgroundColor = K.canvasBg;

};
LgzLib.Scenes.Main.prototype.preinit = function () {
    'use strict';
    console.debug('Scenes2.Main.preinit:');
    this.playSet = new Lgz.PlaySet(this);
};
LgzLib.Scenes.Main.prototype.rscload = function () {
    'use strict';
    console.debug('Scenes2.Main.rscload: key ' + this.key);
    this.lgzMgr.rscImage('main');
    this.playSet.rscload();

};
LgzLib.Scenes.Main.prototype._create = LgzLib.Scenes.Main.prototype.create;

LgzLib.Scenes.Main.prototype.create = function () {
    'use strict';
    var bg, i, sx, sy, thisObj;
    
    console.debug('Scenes2.Main.create: key ' + this.key);

    thisObj = this;
    thisObj._create();
    
    //sprite: main background
    thisObj.game.add.sprite(0, 0, 'main');

    /*
    thisObj.timer = new Lgz.Timer(thisObj);
    thisObj.timer.create();
    */

    /*
     * note: deprecated. moved to lib/lgz/js/scene.js
     * 

    thisObj.lgzMgr.pause = function () {
        thisObj.playSet.pause();
        //thisObj.timer.pause();
        thisObj.game.paused = true;

    };
    thisObj.lgzMgr.resume = function () {
        // thisObj.timer.resume();
        thisObj.playSet.resume();
        thisObj.game.paused = false;
    };
    *
    */
   
   
    thisObj.playSet.create();

};
LgzLib.Scenes.Main.prototype.update = function () {
    'use strict';
    // console.debug('Scenes2.Main.update: key ' + this.key); 
    this.playSet.update();
    // this.timer.update();
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




LgzLib.Scenes.End.prototype.rscload = function () {
    'use strict';
    console.debug('Scenes2.End.rscload: key ' + this.key);
    this.lgzMgr.rscImage('end');
};
LgzLib.Scenes.End.prototype.create = function () {
    'use strict';
    console.debug('Scenes2.End.create: key ' + this.key);
    this.game.add.sprite(0, 0, 'end');
};
