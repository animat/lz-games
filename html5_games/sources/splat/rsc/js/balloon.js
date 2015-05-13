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
    if (this.playSet.useTailPhysics) {
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
    
    if (this.playSet.useTailPhysics) {
        this.spriteTail.visible = false;
        this.createTailPhysics();        
    }

    
};
Lgz.Balloon.extends(Phaser.Sprite);


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
    dx  = Math.round(this.x   - this.game.input.x);
    dy  = Math.round(this.y   - this.game.input.y);
    
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
        for(i=0; i < thisObj.strArr.segments; i += 1) {
            thisObj.strArr[i].kill();
        }
        // thisObj.strArr = null;
    }    
};
Lgz.Balloon.prototype.killTail = function (nodelay) {
    var thisObj, i, delayTO;
    thisObj = this;
    delayTO = 5000;
    thisObj.game.physics.p2.removeConstraint(thisObj.k1);
    thisObj.strArr[0].body.data.gravityScale=5;
    if (nodelay) {
          delayTO = 0;
    }

    window.setTimeout(
        function () {
            thisObj._killTail();
        },
        delayTO
    );    
};
Lgz.Balloon.prototype.kill = function () {
    if (this.strArr) {
        this.killTail(true);
    }
    this._super.kill.call(this);
}
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
Lgz.Balloon.prototype._onDragStart = function ()  {
    console.debug('_onDragStart');
    this.body.moves = false;    
    this.bodyhold = this.body;
    this.body = null;
};
Lgz.Balloon.prototype.onDragStart = function ()  {
    var thisObj;
    console.debug('onDragStart');
    thisObj = this;
    // TODO: Is it possible to change the cursor to "grabbing" when moving a letter?
    this.game.canvas.style.cursor = "grabbing";
    // TODO: Can we immediately reset the angle so that students can tell letters "N" apart from "Z"?
    this.body.angle = 0;

    window.setTimeout(
        function () {
            thisObj._onDragStart();
        },
        100
    );   
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
    this.game.canvas.style.cursor = "pointer";
   // this.input.useHandCursor = false;
};
/*
 * method to make rope/chain physics type string
 * Not working yet :(
 */
Lgz.Balloon.prototype.createTailPhysics = function () {

    var newRect, width, height, lastRect, maxForce,
        xAnchor, yAnchor, segments, rcHeight,
        x, y, cg;

    //var height = 30;        //  Height for the physics body - your image height is 8px
    //var width = 5;         //  This is the width for the physics body. If too small the rectangles will get scrambled together.
    maxForce = 10000000;   //  The force that holds the rectangles together.

    
    xAnchor = this.body.x;
    yAnchor = this.body.y;
    segments = K.tailSegments;
    this.strArr = [];
    x = xAnchor;     
    y = 0;
    
    for (var i = 0; i <  segments; i++)
    {
        newRect = this.game.add.sprite(x, y, 'str', 0);
        height = newRect.height-2;
        width = newRect.width;
        rcHeight = ((height)/2);                             
        y = yAnchor + (i * height);     //  Every new rect is positioned below the last
        newRect.y = y;
        cg = this.cg;

        this.strArr.push(newRect);
 
        //  Enable physicsbody
        this.game.physics.p2.enable(newRect, false);

        //  Set custom rectangle
        newRect.body.setRectangle(width, height);
        newRect.body.data.gravityScale=0;
        
        //note: removes string tangles (collisions)
        newRect.body.collideWorldBounds = false;
        
        if (i === 0)
        {
            this.k1=this.game.physics.p2.createRevoluteConstraint(newRect, [0,-rcHeight], this, [0, (this.spriteHead.height /2)], maxForce );
        }
        else
        {  
            //  Anchor the first one created
            newRect.body.velocity.x = 0;      //  Give it a push :) just for fun
                //  Reduce mass for evey rope element
        }

        newRect.body.mass =0.1;
        newRect.body.data.gravityScale= 1;
        //  After the first rectangle is created we can add the constraint
        if (lastRect)
        {
            this.game.physics.p2.createRevoluteConstraint(newRect, [0, -rcHeight], lastRect, [0,rcHeight], maxForce);        
           
        }
        
        lastRect = newRect;
    }
    this.body.mass = 7 * segments * segments * newRect.body.mass; ;
    //this.body.mass = 2 * segments * segments;
    this.body.data.gravityScale=-0.010 * segments;
    //newRect.body.mass = segments/3;
    newRect.body.data.gravityScale= 2*segments;
    
    //note: only for debugging balloon tail physics
    //g.b = this;
    
};
