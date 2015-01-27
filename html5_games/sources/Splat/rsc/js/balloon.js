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
Lgz.Balloon = function (playSet, label, cg) {
    'use strict';
    
    var thisObj, world, randX, randY,
        color, f1, f2, f3,
        spriteHead, spriteTail,
        spriteText, colorIdx;

    thisObj = this;
    this.playSet = playSet;
    this.game = playSet.game;
    this.anim = {};
    this.cg = cg;

    
    world = this.game.world;

    colorIdx = Math.round(Math.random() * 4);
    color = ['red', 'green', 'blue', 'yellow', 'violet'][colorIdx];
    f1 = color  + '0';
    f2 = color  + '1';
    f3 = color  + '2';

g.bal = thisObj;

 
    randX = thisObj.game.rnd.integerInRange(100, 600);
    randY = thisObj.game.rnd.integerInRange(100, 400); 
    Phaser.Sprite.call(this, this.game, randX, randY, 'dot');
 
 
    
    spriteText = this.game.add.text(0, 0, label, K.balloonTextStyle);
    //spriteText.scale.setTo(K.balloonScale);
    spriteText.anchor.setTo(0.5, 0.5);
    spriteText.inputEnabled = false;
    this.addChild(spriteText);
    
    spriteText.hitArea = new Phaser.Rectangle(-K.grabMargin, -K.grabMargin, spriteText.width + K.grabMargin, spriteText.height + K.grabMargin);
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
    this.body.data.gravityScale=0;
    this.body.setZeroDamping();
    
    this.body.setCollisionGroup(cg.balloons);
    this.body.collides([cg.balloons, cg.letters]);
 
    randX = this.game.rnd.integerInRange(-5,5);
    randY = this.game.rnd.integerInRange(-3,3);
    this.body.moveUp(randY);
    this.body.moveRight(randX);
    
};
LgzLib.inherit(Lgz.Balloon, Phaser.Sprite);
Lgz.Balloon.prototype.damp = function(gravity) {
    var vel, vx, vy;

    if(!this.body) {
        return;
    }
    vel = this.body.data.velocity;    
    if(gravity) {
        if(vel[0] < -K.velMaxX || vel[0] >  K.velMaxX ) {

            vx =  vel[0] - (Math.abs(vel[0])/vel[0]);
            //console.debug('damping vx:' + vel[0] + ' to ' + vx);
            vel[0] = vx;
        }  
        if( vel[1] > K.velMaxY) {
            vy =   vel[1] - (Math.abs(vel[1])/vel[1]);
             //console.debug('damping vy:' + vel[1] + ' to ' + vy);
             vel[1] = vy;
        }
        if (this.body.y > K.floorY && vel[1]!=0 && Math.abs(vel[1]) < 2) {
            vel[0] = 0;
            vel[1] = 0;
        }
    } else {        
        
        if(vel[0] < -K.velMaxX || vel[0] >  K.velMaxX ) {

            vx =  vel[0] - (Math.abs(vel[0])/vel[0]);
            //console.debug('damping vx:' + vel[0] + ' to ' + vx);
            vel[0] = vx;
        }  
        if(vel[1] < -K.velMaxY || vel[1] > K.velMaxY) {
            vy =   vel[1] - (Math.abs(vel[1])/vel[1]);
             //console.debug('damping vy:' + vel[1] + ' to ' + vy);
             vel[1] = vy;
        }  
    } 

};
Lgz.Balloon.prototype.update = function (sprite) {
    'use strict';
    
    if (this.spriteHead.visible) { 
        this.damp(false);
        return;
    }
    if (this.hang && this.body) {
        this.body.data.velocity[1] = K.velHangY-2;
    } else {
         
        this.damp(true);
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
    // thisObj.popped

    thisObj.playSet.playSound('pop', 10);
    //thisObj.body.moveUp(0);
    //thisObj.body.moveRight(0);
    
    thisObj.spriteHead.events.onInputDown.removeAll();
    thisObj.spriteHead.animations.play('pop', 20, false);

    thisObj.body.data.velocity[1] = K.velHangY;
    this.body.data.gravityScale = 20;
    this.hang = true;
    window.setTimeout(
        function () {
            thisObj.hang = false;
        },
        1000
    );
        
};
Lgz.Balloon.prototype.popped = function() {
    var thisObj;
    thisObj = this;
    this.spriteHead.visible = false;
    this.spriteTail.visible = false;
    this.body.setRectangleFromSprite(this.spriteText);
    this.body.setCollisionGroup(this.cg.letters);
    this.body.collides([this.cg.underlines]);    
    
    if (!this.body.static) {
        this.inputEnabled = true;
        this.input.enableDrag();
        this.events.onDragStart.add(thisObj.onDragStart, this);
        this.events.onDragStop.add(thisObj.onDragStop, this);
    }
};
Lgz.Balloon.prototype.onDragStart = function ()  {
    console.debug('onDragStart');
    this.body.moves = false;
    this.bodyhold = this.body;
    this.body = null;
};
Lgz.Balloon.prototype.onDragStop = function () {
    console.debug('onDragStop');
    this.bodyhold.x = this.x;
    this.bodyhold.y = this.y;
    this.body = this.bodyhold;
   // this.body.velocity.x = 0;
    //this.body.velocity.y = 0;
    this.body.moves = true;
    
};
