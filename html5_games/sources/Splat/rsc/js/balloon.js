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

Lgz.Balloon = function (playSet, label) {
    'use strict';
    
    var thisObj, world, randX, randY,
        color, f1, f2, f3,
        spriteHead, spriteTail,
        spriteText, colorIdx;

    thisObj = this;
    this.playSet = playSet;
    this.game = playSet.game;
    this.anim = {};
    
    world = this.game.world;

    colorIdx = Math.round(Math.random() * 4);
    color = ['red', 'green', 'blue', 'yellow', 'violet'][colorIdx];
    f1 = color  + '0';
    f2 = color  + '1';
    f3 = color  + '2';

g.bal = thisObj;

    randX = world.randomX;
    randY = Math.floor(world.height / 2) + 100 - Math.floor(Math.random() * 100);
 

    Phaser.Text.call(this, this.game, randX, randY, label, K.balloonTextStyle);
    spriteText = this;
    
    //Phaser.Sprite.call(this, this.game, randX, randY, 'balloons', f1);

    spriteHead = this.game.add.sprite(0, 0, 'balloons', f1);
    spriteHead.inputEnabled = true;
    spriteHead.anchor.setTo(0.5, 0.5);
    thisObj.anim.pop = spriteHead.animations.add('pop', [f1, f2, f3], false, false);
    thisObj.anim.pop.onComplete.add (
        function() { thisObj.popped(); },
        thisObj
    );
    spriteHead.events.onInputDown.addOnce(
        function () {
            console.debug('spriteHead: pop();')
            thisObj.pop(); 
        },
        thisObj
    );
    this.addChild(spriteHead);
    
    //spriteText = this.game.add.text(0, 0, label, K.balloonTextStyle);
    //spriteText.scale.setTo(K.balloonScale);
    spriteText.anchor.setTo(0.5, 0.5);
    spriteText.inputEnabled = false;
    //this.addChild(spriteText);
/*
    spriteText.events.onInputDown.add(
        function () {
            console.debug('spriteText: pop();')
            thisObj.pop(); 
        },
        thisObj
    );
*/
    spriteTail = this.game.add.sprite(-5, 30, 'balloons', 'string');
    //spriteTail.scale.setTo(K.balloonScale);
    spriteTail.anchor.setTo(0.5, 0);
    spriteTail.inputEnabled = true;
    this.addChild(spriteTail);
/*
    spriteTail.events.onInputDown.add(
        function () {
            console.debug('spriteTail: pop();')
            thisObj.pop(); 
        },
        thisObj
    );
*/
    //note: for debugging only
    thisObj.spriteHead = spriteHead;
    thisObj.spriteText = spriteText;
    thisObj.spriteTail = spriteTail;
    
    this.game.add.existing(this);                
};
LgzLib.inherit(Lgz.Balloon, Phaser.Text);

Lgz.Balloon.prototype.update = function (sprite) {
    'use strict';
};
Lgz.Balloon.prototype.pop = function () {
    'use strict';
    var thisObj;
    thisObj = this;
    thisObj.playSet.lock = true;
    thisObj.playSet.playSound('pop', 10);

    thisObj.spriteHead.animations.play('pop', 20, false);
    window.setTimeout(
        function () {
            thisObj.playSet.lock = false;
        },
        K.textTO
    );
        
};
Lgz.Balloon.prototype.popped = function() {
    this.spriteHead.visible = false;
    this.spriteTail.visible = false;
};
