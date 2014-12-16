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
    
    var thisObj, spriteText;

    thisObj = this;
    this.playSet = playSet;
    this.game = playSet.game;
    this.nodeIdx = nodeIdx;


    Phaser.Sprite.call(this, this.game, 0, 0, 'dot');
    this.game.add.existing(this);
    this.visible = false;
    
    spriteText = this.game.add.text(0, 0, label, K.popupTextStyle);
    spriteText.anchor.setTo(0.5, 0);
    spriteText.inputEnabled = false;
    
    /*
    spriteText.inputEnabled = true;
    spriteText.events.onInputDown.add(
        function () {
            console.debug('spriteText.onInputDown');
            thisObj.onHit(); 
        },
        thisObj
    );
    */
    
    this.addChild(spriteText);

    this.inputEnabled = true;
    this.events.onInputDown.add(
        function () {
            thisObj.onHit(); 
        },
        thisObj
    );

    //note: for debugging only
    thisObj.spriteText = spriteText;
    this.hide();
    
};
LgzLib.inherit(Lgz.Popup, Phaser.Sprite);
Lgz.Popup.prototype.show = function () {
    'use strict';
    var thisObj, randDelay, distance;    
    this.x  = this.game.rnd.integerInRange(20, 600);
    this.y = this.game.rnd.integerInRange(50, 470);
    this.visible = true;
    distance = ((this.y + 200)/600);
    this.scale.x = distance;
    this.scale.y = distance;
    
    thisObj = this;
    randDelay = this.game.rnd.integerInRange(1000, 3000);
    window.setTimeout(
        function () {
            thisObj.hide();
        },
        randDelay
    );
};
Lgz.Popup.prototype.hide = function () {
    'use strict';
    var thisObj, randDelay;
    this.visible = false;
    
    thisObj = this;
    randDelay = this.game.rnd.integerInRange(3000, 7000);
    window.setTimeout(
        function () {
            thisObj.show();
        },
        randDelay
    );     
};
Lgz.Popup.prototype.onHit = function () {
    'use strict';
    
    if (this.nodeIdx === this.playSet.nm.idx) {
        //note: match
        this.playSet.hitCorrect();
    } else {
        //note: let the popup go
        this.playSet.hitWrong();
    }

};
Lgz.Popup.prototype.update = function () {
    'use strict';
    //note: this function set based on action phase

};
