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
Lgz.Popup = function (playSet, spriteMMA, nodeIdx) {
    'use strict';
    
    var thisObj, spriteHole, spriteMound, spriteMask, maskHeight;

    thisObj = this;
    this.playSet = playSet;
    this.game = playSet.game;
    this.nodeIdx = nodeIdx;
    this.matrix = this.playSet.matrix;
    
    this.hit = K.Hit.NONE;

    Phaser.Sprite.call(this, this.game, 0, 0, 'dot');
    this.game.add.existing(this);
    this.visible = false;
    
    spriteHole = thisObj.game.add.graphics(0,0);
    spriteHole.beginFill(0x000000);
    spriteHole.drawCircle(0, 1, 9);
    spriteHole.endFill();
    spriteHole.scale.setTo(1, 0.8);
    
    spriteMound = thisObj.game.add.graphics(0,0);
    spriteMound.beginFill(0xd2691e);
    spriteMound.drawCircle(0, 0, 10);
    spriteMound.endFill();
    spriteMound.addChild(spriteHole);
    spriteMound.scale.setTo(1, 0.1);
    spriteMound.y = 5;
    
    thisObj.addChild(spriteMound);
    thisObj.spriteMound = spriteMound;
 
    spriteMMA.inputEnabled = true;
    spriteMMA.events.onInputDown.add(
        function () {
            if (thisObj.playSet.cont) {
                console.debug('spriteMMA.onInputDown');
                thisObj.onHit();              
            }
        },
        thisObj
    );
   
    this.addChild(spriteMMA);
    spriteMMA.eventLoadOK = function () {
        console.debug('Lgz.Popup: spriteMMA: eventLoadOK:');
 
       spriteMMA.conform(K.popBaseWidth, K.popBaseWidth);
       this.heightRate = (spriteMMA.height / (K.Frame.Lift- K.Frame.Hole))|0;
 
 
       thisObj._hide();
    };
    spriteMMA.load();
    
    thisObj.spriteMMA = spriteMMA;
    
    maskHeight = -(K.popBaseWidth * 1.5)|0;
    spriteMask = thisObj.game.add.graphics(0,0);
    spriteMask.beginFill(0xffffff);
    spriteMask.moveTo(0, 0);
    spriteMask.lineTo(640, 0);
    spriteMask.lineTo(640, maskHeight);
    spriteMask.lineTo(0, maskHeight);
    spriteMask.lineTo(0, 0);
    spriteMask.endFill();
    spriteMask.y = 4;
    thisObj.addChild(spriteMask);
    thisObj.spriteMask = spriteMask;
    
    spriteMMA.mask = spriteMask;
    
};
LgzLib.inherit(Lgz.Popup, Phaser.Sprite);
Lgz.Popup.prototype.frameLoop = function (frame, show) {
    var thisObj, textanchor, holeScaleX, holeScaleY, jumpFrame, frameDir;
    thisObj = this;

    if (frame < K.Frame.Hole ) {
        holeScaleX = (this.spriteMMA.width / 15) * (frame / 5);
        holeScaleY = holeScaleX / 13;
        this.spriteMound.scale.setTo(holeScaleX, holeScaleY);
    } else {
        if (frame < K.Frame.Lift) {
            frameDir = (1 - 2 * show);
            this.spriteMMA.y += this.spriteMMA.heightRate * frameDir;
        } else {
            if ( frame < K.Frame.Jump) {
                frameDir = (1 - 2 * show);
            } else {
                frameDir = -(1 - 2 * show);
            }
            this.spriteMMA.y += this.spriteMMA.heightRate * frameDir * (1.15 - show);
        }
        
    }
    if (show) {
        if (frame < K.Frame.Max) {
            window.setTimeout(
                function () {
                    thisObj.frameLoop(frame + 1, show);
                },
                K.Frame.Rate
            );
        } 
    } else {
        if (frame > 0) {
            window.setTimeout(
                function () {
                    thisObj.frameLoop(frame - 1, show);
                },
                K.Frame.Rate
            );
        } else {
            window.setTimeout(
                function () {
                    thisObj._hide();
                },
                K.Frame.Rate
            );            
        }  
    }
};
Lgz.Popup.prototype.show = function () {
    'use strict';
    var thisObj, randDelay, distance, x, y, idx, frame;
    thisObj = this;

    y = this.game.rnd.integerInRange(K.ymin, K.ymax);
 
    if (y < K.y1) {
      x  = this.game.rnd.integerInRange(K.xmin1, K.xmax1); 
    } else {
      x  = this.game.rnd.integerInRange(K.xmin, K.xmax);  
    }

    idx = this.matrix.idx(x,y);
    if (!this.matrix.avl(x,y)) {
        // console.debug("Lgz.Popup.show: collision! " + x + "," + y + "," + idx)     
        //thisObj.tryagain(timeout);
        return;
    }
    //ivanix: debug  collsiion algor
    // this.spriteMMA.text = this.label + " @  (" + x + " , " + y + " , "  + idx + ") ";
    this.matrix.reserve(x,y, this);
    this.x = x;
    this.y = y;
    this.matrix.zsort(idx);
    
    this.visible = true;
    distance = ((this.y + 200)/600);
    this.scale.x = distance;
    this.scale.y = distance;
    //this.spriteMask.x = -this.x;
    this.spriteMask.x = - (2+(this.spriteMMA.width/2)|0);
    
    // randDelay = this.game.rnd.integerInRange(1000, 3000);
    thisObj.frameLoop(1, 1);
    
    thisObj.ts = Date.now() + K.showTO;

    thisObj.spriteMMA.eventPlay();

};
Lgz.Popup.prototype._hide = function () {
    'use strict';
    this.spriteMMA.y = (this.spriteMMA.height/2)|0;
    this.visible = false;
    this.hit = K.Hit.NONE; 
    this.matrix.release(this.x, this.y);
       
};
Lgz.Popup.prototype.hide = function () {
    'use strict';
    this.ts = 0;
    if (this.hit === K.Hit.WRONG) {
        this.frameLoop(K.Frame.Max-1, 0);        
    } else {
        this.frameLoop(K.Frame.Lift-1, 0);
    }

       
};
Lgz.Popup.prototype.onHit = function () {
    'use strict';

    // console.debug("Lgz.popup.onHit");
    this.ts = 1;
    if (this.nodeIdx === this.playSet.nm.idx) {
        console.debug("Lgz.popup.onHit: correct");
        //note: match
        this.hit = K.Hit.CORRECT;
        this.playSet.hitCorrect();
    } else {
        this.hit = K.Hit.WRONG;
        //note: let the popup go
        console.debug("Lgz.popup.onHit: wrong");
        this.playSet.hitWrong();
    }
    

};
Lgz.Popup.prototype.update = function () {
    'use strict';
    //note: this function set based on action phase

};
