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
Lgz.Fish = function (playSet, label, nodeIdx) {
    'use strict';
    
    var thisObj, world, randX, randY,
        colorIdx, color, f0, f1, f2, f3, f4, frameArr, frameRate, vel, dir,
        spriteBody,  spriteText;

    thisObj = this;
    this.playSet = playSet;
    this.game = playSet.game;
    this.nodeIdx = nodeIdx;
    this.anim = {};

    world = this.game.world;

    randX = thisObj.game.rnd.integerInRange(-100, 800);
    randY = thisObj.game.rnd.integerInRange(260, 470);
            
    colorIdx = Math.floor(Math.random() * 3);
    color = ['red', 'green', 'yellow'][colorIdx];

    f0 = color  + '0';
    f1 = color  + '1';
    f2 = color  + '2';
    f3 = color  + '3';
    f4 = color  + '4';
    
    frameArr = thisObj.shuffle([f0, f1, f2, f3, f2, f1, f3]);

    
    Phaser.Sprite.call(this, this.game, randX, randY, 'dot');
    this.game.add.existing(this); 
    
    spriteText = this.game.add.text(0, 0, label, K.fishTextStyle);
    spriteText.anchor.setTo(0.5, 0);
    spriteText.inputEnabled = false;
    this.addChild(spriteText);

    spriteBody = this.game.add.sprite(0, 0, 'fishes', f0);
    spriteBody.inputEnabled = true;
    spriteBody.anchor.setTo(0.5, 1);

    spriteBody.input.useHandCursor = true;
 
    thisObj.anim.swim = spriteBody.animations.add('swim', frameArr, false, false);
    thisObj.anim.swim = spriteBody.animations.add('turn', [f0, f4], false, false);
    spriteBody.events.onInputDown.add(
        function () {
            console.debug('spriteBody: touched();');
            thisObj.touched(); 
        },
        thisObj
    );

  
    
    
    thisObj.addChild(spriteBody);

    //note: for debugging only
    thisObj.spriteBody = spriteBody;
    thisObj.spriteText = spriteText;
    
    frameRate = thisObj.game.rnd.integerInRange(3, 8);
    //note: need frameRate for release
    this.frameRate = frameRate;
    thisObj.spriteBody.animations.play('swim', frameRate, true);
    
    thisObj.game.physics.enable(thisObj, Phaser.Physics.ARCADE);
 
    thisObj.body.collideWorldBounds = true;

    thisObj.initVelocity();

    thisObj.update = thisObj.actionFaceForward;
    
};
LgzLib.inherit(Lgz.Fish, Phaser.Sprite);

Lgz.Fish.prototype.initVelocity = function () {
    var thisObj, dir, vel;
    
    thisObj = this;
    thisObj.vx = null;
    this.testflip = false;    
    //note: initial random direction and velocity;
    dir = 1 - (2 * thisObj.game.rnd.integerInRange(0, 1));       
    vel = thisObj.game.rnd.integerInRange(10, 20);
    thisObj.body.velocity.x=  dir * vel * this.frameRate;  

    vel = thisObj.game.rnd.integerInRange( -10, 10);
    thisObj.body.velocity.y=  vel;  
    thisObj.body.bounce.set(1);    

};
    

Lgz.Fish.prototype.actionFaceForward = function () {
    var vx;
    
    //todo: rebound from left or right world wall detected by change of velocity.x
    //there should be a callback event when world collide, but not yet found in phaser docs
    vx = this.body.velocity.x;
    if (this.vx !== vx) {
/*
        console.debug(
                  'actionFaceForward: idx: ' + this.nodeIdx 
                + ' body.velocity.y: '  + this.body.velocity.y
                + ' body.bounce.y: '  + this.body.bounce.y                
                )
*/        
        if (this.spriteBody.scale.x * this.body.velocity.x > 0) {
            this.spriteBody.scale.x *= -1;            
        }
        this.vx  = vx;
    }
};
Lgz.Fish.prototype.shuffle = function (array) {
  var currentIdx = array.length, tmpVal, randomIdx ;
  while (0 !== currentIdx) {

    randomIdx = Math.floor(Math.random() * currentIdx);
    currentIdx -= 1;

    tmpVal = array[currentIdx];
    array[currentIdx] = array[randomIdx];
    array[randomIdx] = tmpVal;
  }

  return array;
};
Lgz.Fish.prototype.release = function () {
    var thisObj, frame;
    console.debug('wrong fish! idx: ' + this.nodeIdx);
    thisObj = this;
    //this.initVelocity();
    frame = this.spriteBody.frame;
    this.spriteBody.loadTexture("fishes", frame, false);
 
console.debug (
        'release: vx: ' + this.vx 
        + ' body.vx: ' + this.body.velocity.x
        + ' body.vy: ' + this.body.velocity.y
        + ' scale.x: ' + this.spriteBody.scale.x
        + ' nodeIdx: ' + this.nodeIdx
        )
//    this.spriteBody.loadTexture("fishes");
    this.update = this.actionFaceForward;
    this.playSet.missed();
    window.setTimeout(
        function () {
                thisObj.initVelocity();
        },
        500
    );       
};
Lgz.Fish.prototype.onFishInBasket = function () {
    console.debug('Fish.onFishInBasket: entered');
    //todo: get next word, resume play, allow new fish to be selected;
    this.update = function() {};
    this.body.velocity.setTo(0, 0);    
    this.spriteBody.animations.stop('swim',0 );
    this.playSet.found();
};
Lgz.Fish.prototype.actionFlipToBasket = function () {
    var thisObj, flag, rc;
    thisObj = this;

    flag = this.game.physics.arcade.collide(thisObj, thisObj.playSet.spriteInBasket, function() {thisObj.onFishInBasket();});
    if (!flag) {
        rc=this.game.physics.arcade.moveToObject(this, this.playSet.spriteInBasket, 800);
        //console.debug('actionFlipToBasket: rc: ' + rc);
        if (rc < 0) {
            console.debug('actionFlipToBasket: rc <0. bounce: ' + this.body.bounce.x  + ' , ' + this.body.bounce.y);
            thisObj.onFishInBasket();
        }
    }
};
Lgz.Fish.prototype.onMidPoint = function () {
    var target, thisObj;
    
    thisObj = this;
    target = this.playSet.spriteInBasket;
    
    this.bringToTop();
    this.playSet.spriteBasket.bringToTop();
    if (target.x > 80) {
        target.x = 5;
        target.y += 5;
    } else {
        target.x += 10;        
    }
    console.debug('target.x: '  + target.x);    
    this.body.angularVelocity = 0;
    this.rotation = Math.PI * 1.5;
    // heads or tails
    if (this.nodeIdx % 2) {
        this.spriteBody.scale.x *= -1;
    }
    this.body.bounce.set(0);
    
    //this.game.physics.arcade.collide(thisObj, thisObj.playSet.spriteInBasket, function() {thisObj.onFishInBasket();}); 
    //this.game.physics.arcade.moveToObject(this, this.playSet.spriteInBasket, 800);
    this.update = this.actionFlipToBasket;    
};
Lgz.Fish.prototype.actionFlipToMidPoint = function () {
    var thisObj;
    thisObj = this;
    this.game.physics.arcade.moveToObject(this, this.playSet.spriteMidPoint, 700);
    this.game.physics.arcade.collide(thisObj, thisObj.playSet.spriteMidPoint, function() {thisObj.onMidPoint();});    
};
Lgz.Fish.prototype.caught = function() {     
    var frame;
    //todo: animate fish caught and in basket
    console.debug('fish caught!');  
    this.testflip = false;
    this.spriteBody.anchor.setTo(0.5, 0.5);
    this.spriteText.visible = false;
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
    this.body.angularVelocity = -700;
    this.body.collideWorldBounds = false;

    this.playSet.caught();

    frame = this.spriteBody.frame;
    this.spriteBody.loadTexture("fishes", frame, false);

    //send fish to basket, free willy style 
    this.update = this.actionFlipToMidPoint;

};

Lgz.Fish.prototype.onLure = function () {
    var thisObj = this;
    
    if (this.nodeIdx === this.playSet.nm.idx) {
        //note: match
        this.caught();
    } else {
        //note: let the fish go
        this.release();
    }


};
Lgz.Fish.prototype.actionLure = function ()  {
    var thisObj, rc;
    thisObj = this;
        //todo: testflip ugly hack. should be a better way.
        if (!this.testflip) {
            this.testflip = true;
            if(this.x < 240 && this.body.velocity.x < 0 || this.x > 240 && this.body.velocity.x > 0) {
                this.spriteBody.scale.x *= -1;
            }
        }

        this.game.physics.arcade.collide(thisObj, thisObj.playSet.spriteHook, function() {thisObj.onLure();});
        
        rc = this.game.physics.arcade.moveToObject(this, this.playSet.spriteHook, 150);
        if (rc < 0 ) {
            console.debug('actionLure: rc < 0');
            //thisObj.onLure();
        }
            

   
        //console.debug('update/lure: velx: ' + this.body.velocity.x);    
};
Lgz.Fish.prototype.update = function () {
    'use strict';
    //note: this function set based on action phase
};
Lgz.Fish.prototype.touched = function () {
    var frame;
    frame = this.spriteBody.frame;
    this.spriteBody.loadTexture("fishes_active", frame, false);
    this.body.bounce.setTo(0);    
    this.update = this.actionLure;
};
Lgz.Fish.prototype.swim = function () {
    'use strict';
    var thisObj;
    
    thisObj = this;

    thisObj.playSet.playSound('swim', 10);
    thisObj.body.moveUp(0);
    thisObj.body.moveRight(0);

    thisObj.spriteBody.events.onInputDown.removeAll();


        
};

