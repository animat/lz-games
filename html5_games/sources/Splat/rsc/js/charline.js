/* 
 * Underscore sprite where letter from balloon should be placed.
 */
Lgz.CharLine = function (playSet, x, y, char, cg) {
    'use strict';
    var spriteText, thisObj;
    
    thisObj = this;
        
    this.playSet = playSet;
    this.game = playSet.game;    
    this.char = char;

    Phaser.Sprite.call(this, this.game, x, y, 'dot');    
    //Phaser.Sprite.call(this, this.game, x, y, 'balloons', 'underline');

    spriteText = this.game.add.text(0, 0, '__', K.balloonTextStyle);
    spriteText.anchor.setTo(0.5, 1);
 
    this.addChild(spriteText);
    this.spriteText = spriteText;

    this.anchor.setTo(0.5, 0.5);
    this.game.add.existing(this);
    
    this.body = null;
    this.enableBody = true;

    this.physicsBodyType = Phaser.Physics.P2JS;
    this.game.physics.p2.enable(this, false, false);

    this.body.static = true;
    
    this.body.setRectangleFromSprite(this.spriteText);    
    this.body.onBeginContact.add(this.onContact, this);

    this.body.setCollisionGroup(cg.underlines);
    this.body.collides([cg.letters]); 
}
LgzLib.inherit(Lgz.CharLine, Phaser.Sprite);
Lgz.CharLine.prototype.bounceOff = function (balloon, dir) {
    var randX, randY;
    
    randX = this.game.rnd.integerInRange(-100,100);
    randY = this.game.rnd.integerInRange(50, 200) * dir;    
    balloon.body.moveUp(randY);
    balloon.body.moveRight(randX);    
} 
Lgz.CharLine.prototype.onContact = function (target) {
    var balloon;
    balloon = target.sprite;
    if (balloon.spriteHead.visible) {
        return;
    }    
    if (!balloon.body) {
        //note: letter being dragged. wait until dragging is done.
        return;
    }
    console.debug('onContact: balloon.y: ' + balloon.body.y  + ' _y: ' + this.y);
    if (this.filled || balloon.spriteText.text !== this.char ) {
        //if we are filled or not match our char, reject incomming letter
        // this.bounceOff(balloon, 1);
        balloon.body.y = this.body.y + 20;
        return;
        //todo: bounce sound
    } else {
        if (this.y < balloon.body.y ) {
            console.debug('onContact: from below');
            //note: contact from below not allowed. 
            // letter must be dropped from above.
            this.bounceOff(balloon, -1);
            return;
        }
        balloon.body.static = true;
        balloon.body.x = this.x;
        balloon.body.y = this.y - 20;

        if (balloon.input) {
            balloon.input.disableDrag();
            balloon.inputEnabled = false;
        } 
        /* 
         * autopop
         * 
        if (balloon.spriteHead.visible) {
            balloon.pop();
        }
        */

        this.filled = true;
        this.playSet.charFound();
        //todo: yay sound
    }
};