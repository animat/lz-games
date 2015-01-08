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
Lgz.Popup = function (playSet, label, nodeIdx) {
    'use strict';
    
    var thisObj, spriteHole, spriteMound, spriteText, spriteMask;

    thisObj = this;
    this.playSet = playSet;
    this.game = playSet.game;
    this.nodeIdx = nodeIdx;
    this.matrix = this.playSet.matrix;
    
    this.hit = false;
    
    //debug
    this.label = label;

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
    
    

    spriteText = this.game.add.text(0, 0, label, K.popupTextStyle);
 
    spriteText.setShadow(3, -2, 'rgba(0,0,0,1)', 1);
    //spriteText.fontWeight = 'bold';
    spriteText.anchor.setTo(0.5, 0);
    spriteText.inputEnabled = false;
    
    

    spriteText.inputEnabled = true;
    spriteText.events.onInputDown.add(
        function () {
            if (thisObj.playSet.cont) {
                console.debug('spriteText.onInputDown');
                thisObj.onHit();
            }
        },
        thisObj
    );
    
    
    this.addChild(spriteText);
/*
    this.inputEnabled = true;
    this.events.onInputDown.add(
        function () {
            thisObj.onHit(); 
        },
        thisObj
    );
*/

    //note: for debugging only
    thisObj.spriteText = spriteText;
    
    spriteMask = thisObj.game.add.graphics(0,0);
    spriteMask.beginFill(0xffffff);
    spriteMask.moveTo(0, 0);
    spriteMask.lineTo(640, 0);
    spriteMask.lineTo(640, -50);
    spriteMask.lineTo(0, -50);
    spriteMask.lineTo(0, 0);
    spriteMask.endFill();
    spriteMask.y = 4;
    thisObj.addChild(spriteMask);
    thisObj.spriteMask = spriteMask;
    
    spriteText.mask = spriteMask;
    this.visible = false;
    //this.hide();
    
};
LgzLib.inherit(Lgz.Popup, Phaser.Sprite);
Lgz.Popup.prototype.frameLoop = function (frame, show) {
    var thisObj, textanchor, holeScaleX, holeScaleY;
    thisObj = this;
    if (frame > 4) {
        textanchor = ((10 * (frame-5) / 4)|0)/10;
        if (show && frame === 10) {
            // bounce text
            textanchor  = 0.85;
             
        }
        this.spriteText.anchor.setTo(0.5, textanchor);        
    }
    
    if (frame < 6 ) {
        holeScaleX = (this.spriteText.width / 15) * (frame / 5);
        holeScaleY = holeScaleX / 13;
        this.spriteMound.scale.setTo(holeScaleX, holeScaleY);
    }

    if (show) {
        if (frame < 10) {
            window.setTimeout(
                function () {
                    thisObj.frameLoop(frame + 1, show);
                },
                K.frameRate
            );
        }
        
    } else {
        if (frame > 0) {
            window.setTimeout(
                function () {
                    thisObj.frameLoop(frame - 1, show);
                },
                K.frameRate
            );
        } else {
            window.setTimeout(
                function () {
                    thisObj._hide();
                },
                K.frameRate
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
        console.debug("Lgz.Popup.show: collision! " + x + "," + y + "," + idx)     
        //thisObj.tryagain(timeout);
        return;
    }
    //ivanix: debug  collsiion algor
    // this.spriteText.text = this.label + " @  (" + x + " , " + y + " , "  + idx + ") ";
    this.matrix.reserve(x,y, this);
    this.x = x;
    this.y = y;
    this.matrix.zsort(idx);
    /*
    if (x < 360) {
        this.spriteText.anchor.setTo(0, 0);
    } else {
        this.spriteText.anchor.setTo(1, 0);
    }
    */
    
    this.visible = true;
    distance = ((this.y + 200)/600);
    this.scale.x = distance;
    this.scale.y = distance;
    //this.spriteMask.x = -this.x;
    this.spriteMask.x = - (2+(this.spriteText.width/2)|0);
    
    // randDelay = this.game.rnd.integerInRange(1000, 3000);
    thisObj.frameLoop(0, 1);
    
    thisObj.ts = Date.now() + K.showTO;
    /*
    window.setTimeout(
        function () {
            // thisObj.hide();
            if (thisObj.visible) {
                thisObj.hit  = true;
            }
            
        },
        K.showTO
    );
    */
};
Lgz.Popup.prototype._hide = function () {
    'use strict';

    this.visible = false;
    this.matrix.release(this.x, this.y);
       
};
Lgz.Popup.prototype.hide = function () {
    'use strict';
    this.ts = 0;
    this.hit = false;    
    this.frameLoop(10,0);
       
};
Lgz.Popup.prototype.onHit = function () {
    'use strict';
    console.debug("Lgz.popup.onHit");
    if (this.nodeIdx === this.playSet.nm.idx) {
        console.debug("Lgz.popup.onHit: correct");
        //note: match
        this.hit = true;
        this.hide();
        this.playSet.hitCorrect();
    } else {
        this.hit = true;
        //note: let the popup go
        console.debug("Lgz.popup.onHit: miss");
        this.playSet.hitWrong();
    }

};
Lgz.Popup.prototype.update = function () {
    'use strict';
    //note: this function set based on action phase

};
