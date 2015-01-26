 /*global
    $: true,
    Phaser: true,
    K: true,
    console: true,
    window: true,
    LgzLib: true
 */
/*jslint  nomen: true */

var Lgz = Lgz || {};
Lgz.Cloud = function (playSet) {
    'use strict';
    
    var thisObj, world, randX, randY, frame, idx;

    thisObj = this;
    this.playSet = playSet;
    this.game = playSet.game;
    world = this.game.world;

    randX = thisObj.game.rnd.integerInRange(-50, 800);
    randY = thisObj.game.rnd.integerInRange(0, 110);
    
    idx = thisObj.game.rnd.integerInRange(1, 3);
    frame  = 'cloud'  + idx;
    Phaser.Sprite.call(this, this.game, randX, randY, 'clouds', frame);
    this.game.add.existing(this);
    
    this.game.physics.enable(thisObj, Phaser.Physics.ARCADE);    
    this.body.velocity.x = -thisObj.game.rnd.integerInRange(1, 20);
    this.anchor.setTo(0.5, 0.5);
    
};
LgzLib.inherit(Lgz.Cloud, Phaser.Sprite);
Lgz.Cloud.prototype.update = function ()  {
    if (this.x < -100) {
        this.x = 1000;
    }
 
};

