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
Lgz.Fish = function (playSet, label) {
    'use strict';
    
    var thisObj, world, randX, randY,
        colorIdx, color, f0, f1, f2, f3, f4, frameArr, frameRate, vel, dir,
        spriteBody,  spriteText;

    thisObj = this;
    this.playSet = playSet;
    this.game = playSet.game;
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
    thisObj.spriteBody.animations.play('swim', frameRate, true);
    
    thisObj.game.physics.enable(thisObj, Phaser.Physics.ARCADE);
 
    
    //note: initial random direction and velocity;
    dir = 1 - (2 * thisObj.game.rnd.integerInRange(0, 1));       
    vel = thisObj.game.rnd.integerInRange(10, 20);
    thisObj.body.velocity.x=  dir * vel * frameRate;  

    vel = thisObj.game.rnd.integerInRange( -10, 10);
    thisObj.body.velocity.y=  vel;  
    
    //note: how we flip the sprite horizontally depending on direction;    
    spriteBody.scale.x  = thisObj.body.velocity.x / Math.abs(thisObj.body.velocity.x);

    thisObj.body.collideWorldBounds = true;
    thisObj.body.bounce.set(1);
 
    /*
        s.body.collideWorldBounds = true;
        s.body.bounce.set(1);
        s.body.velocity.setTo(10 + Math.random() * 40, 10 + Math.random() * 40);
        */
         
 
};
LgzLib.inherit(Lgz.Fish, Phaser.Sprite);

Lgz.Fish.prototype.flipOnDirChange = function () {
    var vx;
    
    vx = this.body.velocity.x;
    if (this.vx !== vx) {       
        this.spriteBody.scale.x *= -1;
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
Lgz.Fish.prototype.update = function (sprite) {
    'use strict';
    if (!this.spriteBody.visible) {
        return;
    }
    this.flipOnDirChange();
};
Lgz.Fish.prototype.touched = function () {
    this.spriteBody.animations.play('turn', 5, false);
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

