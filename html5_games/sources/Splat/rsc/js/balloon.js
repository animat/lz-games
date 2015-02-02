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
    //
    //spriteTail = this.game.add.sprite(-5, 30, 'dot');
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

    //this.body.setRectangleFromSprite(this.spriteHead);
    this.body.addCircle(Math.round(this.spriteHead.width/2), 0, 0, 0);
    this.body.addCircle(Math.round(this.spriteHead.width/4), 0, -12, 0);
    //this.body.debug = true;
    
    
    
    this.body.collideWorldBounds = true;
    //allow balloon to rotate
    if (K.tailPhysics) {
        this.body.fixedRotation = false;
    } else {
        this.body.fixedRotation = true;
    }
    
    this.body.data.gravityScale=0;
    //this.body.setZeroDamping();
    this.body.data.maxVelocity = new Phaser.Point(20, 20);
    this.body.data.maxAngular = 20;
    
    this.body.setCollisionGroup(cg.balloons);
    this.body.collides([cg.balloons, cg.letters]);
 
    randX = this.game.rnd.integerInRange(50,100);
    if (Math.random() > .5) {
      randX *= -1;
    }
    randY = this.game.rnd.integerInRange(-30,50);
    this.body.moveUp(randY);
    this.body.moveRight(randX);
    
    if (K.tailPhysics) {
        this.spriteTail.visible = false;
        this.createTailPhysics();        
    }

    
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
        if (this.body.y > K.floorY && vel[1] !== 0 && Math.abs(vel[1]) < 2) {
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
            vy =   (Math.abs(vel[1]/3) *(Math.abs(vel[1])/vel[1]));
             console.debug('damping vy:' + vel[1] + ' to ' + vy);
             vel[1] = vy;
        }  
    } 

};
Lgz.Balloon.prototype.update = function (sprite) {
    'use strict';
    
    if (this.spriteHead.visible) { 
        //this.damp(false);
        return;
    }
    //this.damp(true);   
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
Lgz.Balloon.prototype._killTail = function () {
    var thisObj, i;
    thisObj = this;
    
    if (thisObj.strArr) {
        for(i=0; i < thisObj.strArr.length; i += 1) {
            thisObj.strArr[i].kill();
        }
    }    
};
Lgz.Balloon.prototype.killTail = function () {
    var thisObj, i;
    thisObj = this;
    thisObj.game.physics.p2.removeConstraint(thisObj.k1);
    thisObj.strArr[0].body.data.gravityScale=5;
    window.setTimeout(
        function () {
            thisObj._killTail();
        },
        5000
    );    
};
Lgz.Balloon.prototype.pop = function () {
    'use strict';
    var thisObj, i;
    thisObj = this;

    
    thisObj.playSet.playSound('pop', 10);
    
    if (thisObj.strArr) {
        thisObj.killTail();
    }
    thisObj.spriteHead.events.onInputDown.removeAll();
    thisObj.spriteHead.animations.play('pop', 20, false);
    

    thisObj.body.applyForce([0, 800], this.x, this.y);
    this.body.data.gravityScale = 3;
    window.setTimeout(
        function () {
            if (thisObj.body && thisObj.body.data) {
                thisObj.body.data.gravityScale = 10;
            }
            
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
        this.input.useHandCursor = true;
        this.input.enableDrag();
        this.events.onDragStart.add(thisObj.onDragStart, this);
        this.events.onDragStop.add(thisObj.onDragStop, this);
    }
};
Lgz.Balloon.prototype.onDragStart = function ()  {
    console.debug('onDragStart');
    this.body.moves = false;
    this.bodyhold = this.body;
    
    // TODO: Is it possible to change the cursor to "grabbing" when moving a letter?
    // TODO: Can we immediately reset the angle so that students can tell letters "N" apart from "Z"?
    this.body.angle = 0;
    
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
    
    // TODO: Can we then reset the cursor to default or pointer?
    //        I would like to change the pointer *only* when hovering over a letter.
    thisObj.game.canvas.style.cursor = "pointer";
};
/*
 * method to make rope/chain physics type string
 * Not working yet :(
 */
Lgz.Balloon.prototype.createTailPhysics = function () {

    var newRect;
    var lastRect;
    var height = 30;        //  Height for the physics body - your image height is 8px
    var width = 7;         //  This is the width for the physics body. If too small the rectangles will get scrambled together.
    var maxForce = 500;   //  The force that holds the rectangles together.
    var game = Lgz.game;
    var xAnchor, yAnchor, length;
    
    xAnchor = this.body.x;
    yAnchor = this.body.y;
    length = 3;
    this.strArr = [];
    
    for (var i = 0; i <  length; i++)
    {
        var x = xAnchor;                    //  All rects are on the same x position
        var y = yAnchor + (i * height);     //  Every new rect is positioned below the last
        var cg;
        cg = this.cg;
        
 
        newRect = game.add.sprite(x, y, 'str', 0);
        //this.addChild(newRect);
        
        this.strArr.push(newRect);
 
        //  Enable physicsbody
        game.physics.p2.enable(newRect, false);

        //  Set custom rectangle
        newRect.body.setRectangle(width, height);
        //newRect.body.setCollisionGroup(cg.string);
        //newRect.body.collides([cg.balloons, cg.letters, cg.string]);
        newRect.body.data.gravityScale=0;
        
        if (i === 0)
        {
            this.k1=game.physics.p2.createRevoluteConstraint(newRect, [0,-15], this, [0, (this.spriteHead.height /2)], maxForce );
            //newRect.body.static = true;
            //this.addChild(newRect);
             
        }
        else
        {  
            //  Anchor the first one created
            newRect.body.velocity.x = 0;      //  Give it a push :) just for fun
                //  Reduce mass for evey rope element
        }
        newRect.body.mass = length/ (i+1); 
        //  After the first rectangle is created we can add the constraint
        if (lastRect)
        {
            //game.physics.p2.createRevoluteConstraint(newRect, [0, -10], lastRect, [0,10], maxForce);
            game.physics.p2.createRevoluteConstraint(newRect, [0, -15], lastRect, [0,20], maxForce);        
           
        }
        
        lastRect = newRect;
    }
    this.body.data.gravityScale=-1;
    newRect.body.data.gravityScale= 1;
    g.last = newRect;
 

}
