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
Lgz.Balloon = function (playSet, x, y, label) {
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

    //randX = world.randomX;
    //randY = Math.floor(world.height / 2) + 100 - Math.floor(Math.random() * 100);
 
    Phaser.Sprite.call(this, this.game, x, y, 'dot');
 
 
    
    spriteText = this.game.add.text(0, 0, label, K.balloonTextStyle);
    //spriteText.scale.setTo(K.balloonScale);
    spriteText.anchor.setTo(0.5, 0.5);
    spriteText.inputEnabled = false;
    this.addChild(spriteText);
/*
    spriteText.events.onInputDown.add(
        function () {
            console.debug('spriteText: pop();')
            thisObj.pop(); 
        },
        thisObj
    );
*/
    spriteHead = this.game.add.sprite(0, 0, 'balloons', f1);
    spriteHead.inputEnabled = true;
    spriteHead.anchor.setTo(0.5, 0.5);
    thisObj.anim.pop = spriteHead.animations.add('pop', [f1, f2, f3], false, false);
    thisObj.anim.pop.onComplete.add (
        function() { thisObj.popped(); },
        thisObj
    );
    spriteHead.events.onInputDown.add(
        function () {
            console.debug('spriteHead: touched();')
            thisObj.touched(); 
        },
        thisObj
    );
    this.addChild(spriteHead);

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
    
    this.popx = Math.round((this.spriteHead.width / 4 ));
    this.popy = Math.round((this.spriteHead.height/ 4 ));
    
    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.P2JS;
    this.game.physics.p2.enable(this, false, false);

    this.body.setRectangleFromSprite(this.spriteHead);
    this.body.collideWorldBounds = true;
    this.body.fixedRotation = true;
    this.body.setZeroDamping();
    
};
LgzLib.inherit(Lgz.Balloon, Phaser.Sprite);

Lgz.Balloon.prototype.update = function (sprite) {
    'use strict';
    if (!this.spriteHead.visible) {
        return;
    }

    if (this.y > 300 && this.x < 600) {
        this.body.moveRight(50);
    }   
    if (this.y > 20 && this.x > 550) {
        this.body.moveUp(50);
    }
    if (this.y < 80 && this.x > 200) {
        this.body.moveUp(20);
        this.body.moveLeft( 50);
    }
};
Lgz.Balloon.prototype.touched = function () {
    var dx, dy, absx, absy;
    dx  = Math.round(this.x   - Lgz.game.input.x);
    dy  = Math.round(this.y   - Lgz.game.input.y);
    
    console.debug('touch: (' + dx + ',' + dy + ')');
    absx = Math.abs(dx);
    absy = Math.abs(dy);
    if (absx < this.popx && absy < this.popy ) {
        console.debug('pop range!');
        this.pop();
        return;
    } 
    if (this.body) {
        this.body.moveDown(dy * 5);
        this.body.moveRight(dx * 5);
    }
};
Lgz.Balloon.prototype.pop = function () {
    'use strict';
    var thisObj;
    thisObj = this;
    thisObj.popped

    thisObj.playSet.playSound('pop', 10);
    thisObj.body.moveUp(0);
    thisObj.body.moveRight(0);
    //thisObj.body = null;
    thisObj.spriteHead.events.onInputDown.removeAll();
    thisObj.spriteHead.animations.play('pop', 20, false);

        
};
Lgz.Balloon.prototype.popped = function() {
    var thisObj;
    thisObj = this;
    this.spriteHead.visible = false;
    this.spriteTail.visible = false;
    this.body.setRectangleFromSprite(this.spriteText);
    if (!this.body.static) {
        this.inputEnabled = true;
        this.input.enableDrag();
        this.events.onDragStart.add(thisObj.onDragStart, this);
        this.events.onDragStop.add(thisObj.onDragStop, this);
    }
};
Lgz.Balloon.prototype.onDragStart = function ()  {
    console.debug('onDragStart:');
    this.body.moves = false;
    this.bodyhold = this.body;
    this.body = null;
};
Lgz.Balloon.prototype.onDragStop = function () {
    console.debug('onDragStop');
    this.bodyhold.x = this.x;
    this.bodyhold.y = this.y;
    this.body = this.bodyhold;
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
    this.body.moves = true;
    
};
