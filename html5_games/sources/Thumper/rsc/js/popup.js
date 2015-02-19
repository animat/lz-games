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
    thisObj.playSet = playSet;
    thisObj.game = playSet.game;
    thisObj.nodeIdx = nodeIdx;
    thisObj.matrix = thisObj.playSet.matrix;
    
    thisObj.hit = K.Hit.NONE;

    Phaser.Sprite.call(thisObj, thisObj.game, 0, 0, 'dot');
    thisObj.game.add.existing(thisObj);
    thisObj.visible = false;
    thisObj.hideTS = 0;
    thisObj.tryTS = 0;

 
    
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
                //console.debug('spriteMMA.onInputDown');
                thisObj.onHit();              
            }
        },
        thisObj
    );
   
    this.addChild(spriteMMA);
    spriteMMA.eventLoadOK = function () {
        //console.debug('Lgz.Popup: spriteMMA: eventLoadOK:');
        spriteMMA.conform(K.popBaseWidth, K.popBaseWidth);
        thisObj.scaleHeight = (thisObj.spriteMMA.vheight() / (K.Frame.Lift- K.Frame.Hole))|0;        
        thisObj.scaleJump =  (2 * K.popBaseWidth / 3/ (K.Frame.Jump - K.Frame.Lift))|0;
        thisObj._hide();
    };
    spriteMMA.load();
    
    thisObj.spriteMMA = spriteMMA;
    
    maskHeight = -(K.popBaseWidth * 1.5)|0;
    spriteMask = thisObj.game.add.graphics(0,0);
    spriteMask.beginFill(0xffffff);
    spriteMask.moveTo(0, 0);
    spriteMask.lineTo(K.popBaseWidth, 0);
    spriteMask.lineTo(K.popBaseWidth, maskHeight);
    spriteMask.lineTo(0, maskHeight);
    spriteMask.lineTo(0, 0);
    spriteMask.endFill();
    spriteMask.y = 4;
    thisObj.addChild(spriteMask);
    thisObj.spriteMask = spriteMask;
    
    spriteMMA.mask = spriteMask;
    
};
LgzLib.inherit(Lgz.Popup, Phaser.Sprite);
Lgz.Popup.prototype.tryRand = function () {
    this.tryTS = Date.now() + this.game.rnd.integerInRange(K.tryRand.Min, K.tryRand.Max);
    console.debug('tryRand: ' + this.tryTS);
};
Lgz.Popup.prototype.frameLoop = function (frame, show) {
    var thisObj, textanchor, holeScaleX, holeScaleY, jumpFrame, frameDir;
    thisObj = this;
 

    if (frame < K.Frame.Hole ) {
        holeScaleX = (thisObj.spriteMMA.width / 15) * (frame / 5);
        holeScaleY = holeScaleX / 10;

        thisObj.spriteMound.scale.setTo(holeScaleX, holeScaleY);
        
    } else {
        if (frame < K.Frame.Lift) {
            frameDir = (1 - 2 * show);
            thisObj.spriteMMA.y += thisObj.scaleHeight * frameDir;
            // console.debug('frameLoop:  frame: ' + frame + ' y1: ' + thisObj.spriteMMA.y);
        } else {
            if ( frame < K.Frame.Jump) {
                frameDir = (1 - 2 * show);
            } else {
                frameDir = -(1 - 2 * show);
            }
            thisObj.spriteMMA.y += thisObj.scaleJump * frameDir * (1.10 - show);
            // console.debug('frameLoop:  frame: ' + frame + ' y2: ' + thisObj.spriteMMA.y);
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
            if (thisObj.hit === K.Hit.NONE) {
                thisObj.frameRate = K.Frame.Rate;

            } else {
                if (thisObj.hit === K.Hit.CORRECT ) {
                    if ( frame === K.Frame.Hole + 2) {
                        thisObj.frameRate = 10 * K.Frame.Rate;                    
                    } else {
                        thisObj.frameRate = 3 * K.Frame.Rate;
                    }
                    //console.debug('frameRate now ' + thisObj.frameRate);
                } else {
                    if (frame > K.Frame.Jump - 1) {
                        thisObj.frameRate = 1 * K.Frame.Rate;
                    } else {
                        thisObj.frameRate = K.Frame.Rate;
                    }
                }                
            }

            window.setTimeout(
                function () {
                    thisObj.frameLoop(frame - 1, show);
                },
                thisObj.frameRate
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
Lgz.Popup.prototype.try = function () {
    'use strict';
    var thisObj, distance, x, y, idx, frame, randDelay;
    
    //console.debug('Popup.try: nodeIdx: ' + this.nodeIdx);

    thisObj = this;

    y = thisObj.game.rnd.integerInRange(K.ymin, K.ymax);
 
    if (y < K.y1) {
      x  = thisObj.game.rnd.integerInRange(K.xmin1, K.xmax1); 
    } else {
      x  = thisObj.game.rnd.integerInRange(K.xmin, K.xmax);  
    }

    idx = thisObj.matrix.idx(x,y);
    if (!thisObj.matrix.avl(x,y)) {
        // console.debug("Lgz.Popup.show: collision! " + x + "," + y + "," + idx)     
        //thisObj.tryagain(timeout);
        thisObj.tryRand();
        return;
    }

    thisObj.matrix.reserve(x,y, this);
    thisObj.x = x;
    thisObj.y = y;
    thisObj.matrix.zsort(idx);
    thisObj._show();
};
Lgz.Popup.prototype._show = function () {
    var thisObj, distance, content;
 
    window.clearTimeout(this.winTO);

    thisObj = this;
    thisObj.visible = true;
    distance = ((thisObj.y + 200)/600);
    thisObj.scale.x = distance;
    thisObj.scale.y = distance;
    //thisObj.spriteMask.x = thisObj.spriteMMA.x;
    thisObj.spriteMask.x = -(thisObj.spriteMMA.vwidth()/2)|0;
    thisObj.frameRate = K.Frame.Rate;
    
    thisObj.frameLoop(1, 1);   

    thisObj.hideTS = Date.now() + K.showTO;
    thisObj.spriteMMA.eventPlay();

};

Lgz.Popup.prototype._hide = function () {
    'use strict';
    this.tryRand();     
    this.spriteMMA.y = 0;
    this.visible = false;
    this.hit = K.Hit.NONE; 
    this.matrix.release(this.x, this.y);  
};
Lgz.Popup.prototype.hide = function () {
    'use strict';
    //console.debug('Popup.hide: nodeIdx: ' + this.nodeIdx);    
    this.hideTS = 0;
    this.tryTS = 0;
    
    if (this.hit === K.Hit.WRONG) {
        this.frameLoop(K.Frame.Max-1, 0);        
    } else {
        this.frameLoop(K.Frame.Lift-1, 0);
    }

};
Lgz.Popup.prototype.onHit = function () {
    'use strict';

    // console.debug("Lgz.popup.onHit");
    this.hideTS = 1;
    if (this.nodeIdx === this.playSet.nm.idx) {
        //console.debug("Lgz.popup.onHit: correct");
        //note: match
        this.hit = K.Hit.CORRECT;
        this.playSet.hitCorrect();
    } else {
        this.hit = K.Hit.WRONG;
        //note: let the popup go
        //console.debug("Lgz.popup.onHit: wrong");
        this.playSet.hitWrong();
    }
    

};
Lgz.Popup.prototype.update = function () {
    'use strict';
    //note: this function set based on action phase

};
