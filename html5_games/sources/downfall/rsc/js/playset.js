/*global
    $: true,
    Phaser: true,
    K: true,
    console: true,
    createjs: true,
    lib: true,
    window: true,
    LgzLib: true
 */
/*jslint  nomen: true */
var Lgz = Lgz || {};
Lgz.Star = function (playSet, bmd) {
    'use strict';
    var game, x, y, s;
    this.playSet = playSet;
    game = this.playSet.game;
    x = game.rnd.integerInRange(0, 600);
    y = game.rnd.integerInRange(0, 400);
    Phaser.Sprite.call(this, game, x, y, bmd);

    s = (2.5 / game.rnd.integerInRange(2, 8));
    this.scale.setTo(s, s);
    //this.vy = (2.5 / game.rnd.integerInRange(1, 20));
    this.vy =   s * s;

};
Lgz.Star.lgzExtends(Phaser.Sprite);
Lgz.Star.prototype.update = function () {
    'use strict';

    this.y += this.vy;
    if (this.y > 410) {
        this.y = this.game.rnd.integerInRange(0, -100);
        this.x = this.game.rnd.integerInRange(0, 600);
    }

};
Lgz.UFO = function (playSet) {
    'use strict';
    var game;
    this.playSet = playSet;
    game = this.playSet.game;
    this.vx = 10;
    Cjs2Phaser.Sprite.call(this, game, lib.ufo,  0, 0, '', 200);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    //this.body.immovable = true;
    //this.body.moves = false;
    this.boundsNominal();
    this.anchor.setTo(0.5, 0);
    this.reset();

};
Lgz.UFO.lgzExtends(Cjs2Phaser.Sprite);
Lgz.UFO.prototype.reset = function () {
    'use strict';
   
    this.x = this.game.rnd.integerInRange(0, 600);
    this.y = this.game.rnd.integerInRange(-100, -1200);
    this.body.velocity.y = this.game.rnd.integerInRange(50, 300);
    this.revive();
    this.spriteCJS.gotoAndStop('static');

    //todo: grab node possible answer 
};
Lgz.UFO.prototype._eventHit = function () {
    'use strict';
    var thisObj;
    thisObj = this;
    thisObj.kill();
    window.setTimeout(
        function () {
            console.log('UFO: reset');
            thisObj.reset();
        },
        2000
    );
};
Lgz.UFO.prototype.eventHit = function () {
    'use strict';
    var thisObj;
    console.log('Lgz.UFO.eventHit:');
    this.body.immovable = true;
    this.body.moves = false;
    this.playSet.spriteBullet.kill();
    this.spriteCJS.gotoAndPlay('explode');

    thisObj  = this;
    window.setTimeout(
        function () {
            console.log('UFO: killed');
            thisObj._eventHit();
        },
        2000
    );

};
Lgz.UFO.prototype.update = function () {
    'use strict';
    //console.log('Lgz.UFO.update:');

    this.game.physics.arcade.collide(
        this,
        this.playSet.spriteBullet,
        this.eventHit,
        null,
        this
    );
    this.game.physics.arcade.collide(
        this,
        this.playSet.spriteShip,
        this.playSet.eventHitShip,
        null,
        this
    );
    if (this.y > 500) {
        this.reset();
    }
    this._super.update.call(this);


};
Lgz.Ship = function (playSet) {
    'use strict';
    var game, thisObj;
    this.playSet = playSet;
    game = this.playSet.game;
    this.kVelocityX = 300;
    Cjs2Phaser.Sprite.call(this, game, lib.ship,  300, 375);

    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;
    this.body.maxVelocity.y = 0;


    thisObj = this;
    this.tweenHit = game.add.tween(this);
    this.tweenHit.to({angle: 1000, alpha: 0}, 1000);
    this.tweenHit.onComplete.add(
        function () { thisObj._eventHit(); }
    );
    this.reset();

};
Lgz.Ship.lgzExtends(Cjs2Phaser.Sprite);
Lgz.Ship.prototype.reset = function () {
    'use strict';
    this.position.setTo(300, 375);
    this.angle = 0;
    this.alpha = 1;
    this.body.immovable = false;
    this.revive();
};
Lgz.Ship.prototype._eventHit = function () {
    'use strict';
    var thisObj;
    console.log('Lgz.Ship._eventHit');
    this.kill();
    thisObj = this;
    window.setTimeout(
        function () {
            console.log('Ship: reset');
            thisObj.reset();
        },
        2000
    );

};
Lgz.Ship.prototype.eventHit = function () {
    'use strict';
    console.log('Lgz.Ship.eventHit');
    this.body.immovable = true;
    this.tweenHit.start();
};
Lgz.Ship.prototype.eventMoveLeft = function () {
    'use strict';
    this.x -= this.kVelocityX;
};
Lgz.Ship.prototype.eventMoveRight = function () {
    'use strict';
    this.x += this.kVelocityX;
};
Lgz.Ship.prototype.eventStop = function () {
    'use strict';
};
Lgz.Ship.prototype.eventFireBullet = function (bullet) {
    'use strict';

    if (bullet.visible) {
        return;
    }
    bullet.eventFire(this.x, this.y);
};
Lgz.Bullet = function (playSet) {
    'use strict';
    var game;
    this.playSet = playSet;
    game = this.playSet.game;
    Cjs2Phaser.Sprite.call(this, game, lib.bullet,  300, 350);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.kVelocityY = -500;

};
Lgz.Bullet.lgzExtends(Cjs2Phaser.Sprite);
Lgz.Bullet.prototype.eventFire = function (x, y) {
    'use strict';
    this.x = x;
    this.y = y;
    this.body.velocity.y = this.kVelocityY;
    this.revive();
};
Lgz.Bullet.prototype.update = function () {
    'use strict';

    //console.log('Lgz.UFO.update:');
    if (this.y < -100) {
        this.kill();
    }
    this._super.update.call(this);

};
Lgz.PlaySet = function (scene) {
    'use strict';
    var thisObj, $lgzInput, cjs, cjsRoot, cjsStage, cursors;
    thisObj = this;
    thisObj.scene = scene;
    thisObj.lgzMgr = scene.lgzMgr;
    thisObj.game = thisObj.lgzMgr.game;
    thisObj.nm = thisObj.lgzMgr.nm;
    thisObj.delayTS = 0;
 
    thisObj.cjsRoot = cjsRoot;

    cjs = thisObj.lgzMgr.cjs;
    cjsRoot = thisObj.lgzMgr.cjs.root;
    cjsStage = thisObj.lgzMgr.cjs.stage;

    $lgzInput = $('#lgzInput');

    thisObj.rscload = function () {
        thisObj.lgzMgr.rscAudio('sfx', true);
    };
    thisObj.cjsAdd = function (child) {
        cjsRoot.addChild(child);
        thisObj.cjsArr.push(child);
    };
    thisObj.cjsCreate  = function () {
        var i, obj, width, canWidth, seed, cjsBg;
        thisObj.cjsArr = [];
        // canWidth = K.widthPct * K.canvasWidth;
       
        
        cjs.stage.canvas = cjs.bmd.canvas;
        thisObj.spriteCJS = thisObj.game.add.sprite(0, 0, cjs.bmd);

        // ivanixcu: first child in cjsRoot is black background.
        // we set invisible to allow phaser emitter sprite
        // that displays starfield in background
        //
        cjsRoot.children[0].visible = false;
        cjsRoot.children[1].visible = false;

        
    };
    thisObj.cjsRemove  = function () {
        
        var i, child, length;
        console.log('cjsRemove: ');

        cjs.stage.canvas = thisObj.game.canvas;

        for (i = 0; i < thisObj.cjsArr.length; i += 1) {
            cjsRoot.removeChild(thisObj.cjsArr[i]);
        }
        
        length = cjsRoot.flowerbed.children.length;
        for (i = 0; i < length; i += 1) {
            child = cjsRoot.flowerbed.children[0];
            console.log('cjsRemove: ' + i);
            cjsRoot.flowerbed.removeChild(child);
        }
    };
    thisObj.cjsEndScene = function () {
        var obj;
        cjsRoot.removeChild(thisObj.spriteTryBtn);
        //obj = new lib.win();
        obj = cjs.objs.spriteWin;
        obj.setTransform(300, 200);
        thisObj.cjsAdd(obj);
        thisObj.spriteWin = obj;

    };


    thisObj.createStars1 = function () {
        var bmd, emitter;
        bmd = new Cjs2Phaser.BitmapData(thisObj.game, lib.star);
        thisObj.bmdStars = emitter;

        emitter = thisObj.game.add.emitter(300, 0, 500);
        thisObj.emitterStars = emitter;

		emitter.width = thisObj.game.world.width;
		emitter.makeParticles(bmd);
		emitter.minParticleScale = 0.1;
		emitter.maxParticleScale = 1.5;
		emitter.setYSpeed(20, 30);
		emitter.setXSpeed(0, 0);
		emitter.minRotation = 0;
		emitter.maxRotation = 0;
		emitter.gravity = 0;
		emitter.start(false, 50000, 200, 0);
    };
    thisObj.createStars = function () {
        var i, max, bmdStar, star;
        thisObj.groupStars  = thisObj.game.add.group();
        bmdStar = new Cjs2Phaser.BitmapData(thisObj.game, lib.star);
        thisObj.bmdStar = bmdStar;
        max = 40;
        for (i = 0; i < max; i += 1) {
            star = new Lgz.Star(thisObj, bmdStar);
            thisObj.groupStars.addChild(star);
        }

    };
    thisObj._create = function () {

        var i, ufo;
        
        console.log('Lgz.PlaySet._create: 1');
        thisObj.nodeCount = thisObj.nm.nodeCount();
        thisObj.sprites = {};
 
        thisObj.nm.reset();
        thisObj.sfx = thisObj.lgzMgr.rscAudioTracks('sfx');


        //ivanixcu: note:  set background to black on canvas
        thisObj.game.canvas.style.background = "#000000";
        thisObj.game.world.bounds.setTo(0, 0, 600, 400);

        thisObj.game.physics.startSystem(Phaser.Physics.ARCADE);

        thisObj.createStars();
        thisObj.groupWorld  = thisObj.game.add.group();

        thisObj.groupUFO  = thisObj.game.add.group();
        //thisObj.game.physics.enable(thisObj.groupUFO, Phaser.Physics.ARCADE);

        thisObj.groupWorld.addChild(thisObj.groupUFO);
        ufo = new Lgz.UFO(thisObj);
        thisObj.groupUFO.addChild(ufo);
        ufo = new Lgz.UFO(thisObj);
        thisObj.groupUFO.addChild(ufo);
        
        thisObj.spriteBullet = new Lgz.Bullet(thisObj);
        thisObj.spriteBullet.visible = false;
        //thisObj.game.physics.enable(thisObj.spriteBullet, Phaser.Physics.ARCADE);
        //thisObj.spriteBullet.body.collideWorldBounds = true;
        thisObj.groupWorld.addChild(thisObj.spriteBullet);

        thisObj.spriteShip = new Lgz.Ship(thisObj);
        thisObj.groupWorld.addChild(thisObj.spriteShip);


        thisObj.cjsCreate();
        thisObj.lgzMgr.spinnerHide();
        thisObj.lgzMgr.saveCpu.renderOnFPS = 60;
 
    };
    thisObj.create = function () {
        console.log('Lgz.PlaySet.create: 1');
        thisObj.delayTS = 0;

        thisObj.lgzMgr.spinnerShow();
        //ivanixcu: todo:  handle mobile input
        cursors = thisObj.game.input.keyboard.createCursorKeys();
        thisObj.game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);

/*
        window.setTimeout(
            function () {
                thisObj._create();
            },
            500
        );
        */
        thisObj._create();
    };
	thisObj.updateHandleInput = function () {
        var spriteShip = thisObj.spriteShip;
	
        spriteShip.body.velocity.x = 0;
	    if (cursors.left.isDown) {
            //thisObj.spriteShip.eventMoveLeft();
            spriteShip.body.velocity.x = -spriteShip.kVelocityX;
	    } else if (cursors.right.isDown) {
            //thisObj.spriteShip.eventMoveRight();
            spriteShip.body.velocity.x = spriteShip.kVelocityX;
        }
	
	    if (thisObj.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
	        thisObj.spriteShip.eventFireBullet(thisObj.spriteBullet);
	    }
	};
    thisObj.eventHitShip = function () {
        console.log('Lgz.PlaySet.eventHitShip:');
        var sprite;
        thisObj.spriteShip.eventHit();
        
        /*
        thisObj.game.add.tween(sprite)
            .to({alpha: 0},
                500,
                Phaser.Easing.Linear.None,
                true,
                0,
                1000,
                false
                );
        thisObj.game.add.tween(sprite)
            .to({angle: 720},
                500,
                Phaser.Easing.Linear.None,
                true,
                0,
                1000,
                false
                );
            */

    };
    thisObj.eventHitUFO = function () {
        console.log('Lgz.PlaySet.eventHitUFO:');
        thisObj.spriteBullet.kill();
    };
    thisObj.preUpdate = function () {
        console.log('playSet.preUpdate:');
    };
    thisObj.updateCJS = function () {
        var currentTS;
        currentTS = Date.now();
        if (!thisObj.cjsTS || thisObj.cjsTS < currentTS) {
            thisObj.cjsTS = Date.now() + K.cjsTS;
            thisObj.game.cjsRender = true;
        } else {
            thisObj.game.cjsRender = false;
        }
    };
    thisObj.update = function () {
	    //(thisObj.game.renderType !== Phaser.HEADLESS)
        thisObj.updateCJS();
        thisObj.updateHandleInput();
        if (!thisObj.spriteShip) {
            console.log('!spriteShip');
        }
        if (!thisObj.groupUFO) {
            console.log('!groupUFO');
        }
        if (!thisObj.spriteBullet) {
            console.log('!spriteBullet');
        }
        /*
        thisObj.game.physics.arcade.collide(
            thisObj.spriteShip,
            thisObj.groupUFO,
            thisObj.eventHitShip,
            null,
            this
        );
        */
        /*
        thisObj.game.physics.arcade.collide(
            thisObj.spriteBullet,
            thisObj.groupUFO,
            thisObj.eventHitUFO,
            null,
            this
        );
        */
        //thisObj.lgzMgr.saveCpu.forceRender();

    };
    thisObj.preRender = function () {
    };
    thisObj.render = function () {
        //thisObj.spriteShip.hybridBMD.updateCJS();
        /*
         thisObj.game.debug.body(thisObj.spriteShip);
         thisObj.game.debug.bodyInfo(thisObj.spriteShip, 16, 24);
         */
    };
    thisObj.pause = function () {

    };
    thisObj.resume = function () {

    };
    thisObj.shutdown = function () {

        console.log('Lgz.PlaySet.shutdown: ');
        thisObj.cjsRemove();
        $lgzInput.css('display', 'none');
        $lgzInput.unbind();
    };
    thisObj.dialogCongrats = function () {
        cjsRoot.gotoAndPlay('win');
        thisObj.lgzMgr.postScore();
    };
   
    thisObj.correct = function () {
        console.log('Lgz.PlaySet.correct:');
        thisObj.dialogAnswerHide();
        thisObj.lgzMgr.soundPlay('blossommp3');
    };
    thisObj.wrong = function () {
        console.log('Lgz.PlaySet.wrong:');
        thisObj.lgzMgr.soundPlay('bellwav');
    };
    thisObj.check = function () {
    };
};
