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
Lgz.Fish = function (playSet, node, nodeIdx) {
    'use strict';
    
    var thisObj, world, randX, randY, spriteMMA,
        colorIdx, color, f0, f1, f2, f3, f4, frameArr, frameRate, vel, dir,
        spriteBody, emitter, dir, width, height;

    thisObj = this;
    thisObj.playSet = playSet;
    thisObj.game = playSet.game;
    thisObj.nodeIdx = nodeIdx;
    thisObj.anim = {};

    world = thisObj.game.world;

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

    
    Phaser.Sprite.call(this, thisObj.game, randX, randY, 'dot');
    thisObj.game.add.existing(this); 



    
    
    spriteBody = thisObj.game.add.sprite(0, 0, 'fish', f0);

    spriteBody.inputEnabled = true;
    spriteBody.anchor.setTo(0.5, 1);

    spriteBody.input.useHandCursor = true;
 
    frameRate = thisObj.game.rnd.integerInRange(3, 8);
    //note: need frameRate for release
    thisObj.frameRate = frameRate; 
 
    thisObj.anim.swim = spriteBody.animations.add('swim', frameArr, frameRate, true, false);   
    thisObj.anim.turn = spriteBody.animations.add('turn', [f0, f4], frameRate, false, false);
    
    thisObj.anim.hesitate = spriteBody.animations.add('hesitate', [f0, f4, f3, f4, f0, f4, f3, f4], frameRate, false, false);
    thisObj.anim.hesitate.onComplete.add(thisObj.release, thisObj);
    
    thisObj.lure = {};
    
    thisObj.lure.dir = 0;
    
    
    spriteBody.events.onInputDown.add(
        function () {
            console.debug('spriteBody: touched();');
            thisObj.touched(); 
        },
        thisObj
    );
    thisObj.addChild(spriteBody);
    thisObj.spriteBody = spriteBody;
    
    spriteMMA = new LgzLib.DisplayNodeMMA(thisObj.game, node);
    spriteMMA.playOnLoad = false;
    this.addChild(spriteMMA);
    thisObj.spriteMMA = spriteMMA;

    width = Math.abs(spriteBody.width);
    height = Math.abs(spriteBody.height);
    //spriteMMA.y = (3* height)|0;
    spriteMMA.eventLoadOK = function () {
        //console.debug('Lgz.Popup: spriteMMA: eventLoadOK:');
        console.log('eventLoadOK: ' 
                + ' width: ' + width 
                + ' height: ' + height
                );
        spriteMMA.conform(width, (height)|0);
        spriteMMA.y = (height/5)|0;
    };
    spriteMMA.load();
    

/*    
    spriteText = thisObj.game.add.text(0, 0, ' '+ label +' ', K.fishTextStyle);
    spriteText.anchor.setTo(0.5, 0);
    spriteText.inputEnabled = false;
    thisObj.addChild(spriteText);
    //note: for debugging only
    thisObj.spriteText = spriteText; 
*/


    //thisObj.anim.swim.play(25, true); //supposed to work according to docs, but doesnt :(
    thisObj.spriteBody.animations.play('swim', thisObj.frameRate, true);
    
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
    console.log ('fish: dir: ' + dir + ' vel: ' + vel);
    

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
            //this.emitter.emitX *= -1;
        }
        this.vx  = vx;
    }
};
/*
 * Method: shuffle
 * Desc:  Used to prevent fish from all blinking at the same time
 */
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
    //thisObj.initVelocity();
    thisObj.spriteBody.animations.play('swim', thisObj.frameRate, true);    
    frame = thisObj.spriteBody.frame;
    thisObj.body.velocity.x = 500 * -thisObj.lure.dir;
    console.debug('release vel: ' + thisObj.body.velocity.x);
    thisObj.lure.dir = 0;
    
    
    //thisObj.spriteBody.loadTexture("fish", frame, false);

    thisObj.update = thisObj.actionFaceForward;
    thisObj.playSet.missed();
    window.setTimeout(
        function () {
                thisObj.spriteBody.loadTexture("fish", frame, false);
                thisObj.initVelocity();
        },
        1500
    );       
};
Lgz.Fish.prototype.hesitate = function () {
    var thisObj, frame;
    thisObj = this;
 
   thisObj.spriteBody.animations.play('hesitate', 15, false);
};
Lgz.Fish.prototype.onFishInBasket = function () {
    console.debug('Fish.onFishInBasket: entered');
    //todo: get next word, resume play, allow new fish to be selected;
    
    this.body.angularVelocity = 0;
    this.rotation = Math.PI * 1.5;    
    this.update = function() {};
    this.body.velocity.setTo(0, 0);    
    this.spriteBody.animations.stop('swim',0 );
    this.playSet.found();
    this.playSet.fishBasketArr.push(this);
};
Lgz.Fish.prototype.flipToBucket = function() {
  var newX = this.game.math.bezierInterpolation(this.points.x, this.flipPosition);
  var newY = this.game.math.bezierInterpolation(this.points.y, this.flipPosition);
  console.log(newX+", "+newY+" ("+this.flipPosition+")");
  console.log(this);
  this.x = newX;
  this.y = newY;
  this.flipPosition += .01;
  if (this.flipPosition >= 1) {
    this.onFishInBasket();
  }
}
Lgz.Fish.prototype.caught = function() {     
    var frame;
    //todo: animate fish caught and in basket
    console.debug('fish caught!');  
    this.testflip = false;
    this.spriteBody.anchor.setTo(0.5, 0.5);
    
    this.spriteMMA.visible = false;
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
    this.body.angularVelocity = -1000;
    this.body.collideWorldBounds = false;

    //this.playSet.caught();

    frame = this.spriteBody.frame;
    this.spriteBody.loadTexture("fish", frame, false);

    //send fish to basket, free willy style 
    //this.update = this.actionFlipToMidPoint;
    this.flipPosition = 0;
    this.points = {"x": [ this.x, 200, 30 + Math.random() * 40 ], "y": [ this.y, -440, 300 ]};
    this.bringToTop();
    this.playSet.spriteBasketFg.bringToTop();
    this.update = this.flipToBucket;

};

Lgz.Fish.prototype.onLure = function () {
    var thisObj = this;
    
    if (this.nodeIdx === this.playSet.nm.idx) {
        //note: match
        this.playSet.caught(thisObj);
    } else {
        //note: let the fish go
        //this.release();
        this.hesitate();
    }
    thisObj.playSet.spritePenguin.luring(false);

};
Lgz.Fish.prototype.actionLure = function ()  {
    var thisObj, rc, diff;
    thisObj = this;
    
    thisObj.playSet.spritePenguin.luring(true);
    //todo: testflip ugly hack. should be a better way.
    if (!thisObj.testflip) {
        thisObj.testflip = true;
        if(thisObj.x < 240 && thisObj.body.velocity.x < 0 || thisObj.x > 240 && thisObj.body.velocity.x > 0) {
            thisObj.spriteBody.scale.x *= -1;
        }
    }

    //thisObj.game.physics.arcade.collide(thisObj, thisObj.playSet.spriteHook, function() {thisObj.onLure();});
    if (!thisObj.lure.dir) {
        diff = this.playSet.spriteHook.x  - thisObj.x;
        thisObj.lure.dir = Math.abs(diff)/diff;
        console.log('lure.dir: ' + thisObj.lure.dir);
        thisObj.lure.x = thisObj.playSet.spriteHook.x +  (-thisObj.lure.dir * 70);
        thisObj.lure.y = thisObj.playSet.spriteHook.y - 20;
        thisObj.lure.count = 0;
        
    }
    //rc = thisObj.game.physics.arcade.moveToObject(this, thisObj.playSet.spriteHook, 150);
    rc = thisObj.game.physics.arcade.moveToXY(this, thisObj.lure.x, thisObj.lure.y, 150);
    console.debug('actionLure: rc: ' + rc);
    if ( Math.abs(rc) < 1 ) {
        console.debug('actionLure: rc < 0 : ' 
                    + rc + ' fish.x: ' 
                    + thisObj.x 
                    + ' lure.x: '
                    + thisObj.lure.x 
                    + ' hook.x: ' 
                    + thisObj.playSet.spriteHook.x 
                    + ' lure.count: ' 
                    + thisObj.lure.count
                    );
        thisObj.lure.count += 1;
        if (thisObj.lure.count > 30) {
            thisObj.onLure();
        }
    }

};
Lgz.Fish.prototype.update = function () {
    'use strict';
    //note: this function set based on action phase
};
Lgz.Fish.prototype.touched = function () {
    var frame;
    frame = this.spriteBody.frame;
    this.spriteBody.loadTexture("fish_glow", frame, false);
    this.body.bounce.setTo(0);    
    this.update = this.actionLure;
    this.bringToTop();
    this.playSet.zsort();

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

