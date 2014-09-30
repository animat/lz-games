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
Lgz.PlaySet = function (mgr) {
    'use strict';

    var thisObj = this;

    thisObj.mgr = mgr;
    thisObj.game = mgr.game;
    thisObj.nm = mgr.nm;
    thisObj.balloonArr = [];
    thisObj.selArr = [];
    thisObj.lock = false;
    thisObj.nodeIdx = 0;
    mgr.set = thisObj; //note: for debugging only
        
    // Note: audio 'sfx' loaded in splash scene
    // this next call should add tracks 'correct', 'next', 'pop'
    // as defined in sfx.json file
    thisObj.sfx = thisObj.mgr.rscAudioTracks('sfx');
 
    //thisObj.sfx.addMarker('swish', 0, 0.136);
    //thisObj.sfx.addMarker('swoosh', 0.138, 0.65);
    thisObj.playSound = function (key, delayTO) {
        thisObj.sfx.play(key);
        window.setTimeout(
            function () {
                thisObj.sfx.play(key);
            },
            delayTO
        );
        
    };
    thisObj.createBalloons = function (text) {
        var i, group, sprite, x, y, game, balloonGroup,
                balloonCollisionGroup;
        
        game = thisObj.game;
/*
        game.physics.startSystem(Phaser.Physics.P2JS);
        //thisObj.game.physics.arcade.gravity.y = 0;
        game.physics.p2.setImpactEvents(true);
        game.physics.p2.restitution = 0.1; 
      
        balloonCollisionGroup = game.physics.p2.createCollisionGroup();
        balloonGroup = game.add.group();
        balloonGroup.enableBody = true;
        balloonGroup.physicsBodyType = Phaser.Physics.P2JS;
g.grp = balloonGroup;        

*/
        for (i = 0; i < text.length; i += 1) {
            x = thisObj.game.rnd.integerInRange(10, 620);
            y = thisObj.game.rnd.integerInRange(150, 200);
            sprite  = new Lgz.Balloon(thisObj, text.charAt(i));
/*            
            sprite.enableBody = true;
            sprite.body = null;
            sprite.physicsBodyType = Phaser.Physics.P2JS;
            game.physics.p2.enable(sprite, true, false);

            balloonGroup.add(sprite);
            //sprite.body.setRectangle(10,10);
            sprite.body.setCollisionGroup(balloonGroup);
            //sprite.body.collides([balloonGroup]);
            sprite.body.collideWorldBounds = true;
            sprite.body.fixedRotation = true;
            sprite.body.setZeroVelocity();
*/
        }
    };

    thisObj.onLoadOK = function () {
        var i;
        console.debug('PlaySet.onLoadOK: entered');
        thisObj.question.display.createSprite();
        thisObj.question.display.sprite.position.setTo(85, 25);
        
    };
    thisObj.load = function () {
        var question, answer, i;

        thisObj.game.load.onLoadComplete.addOnce(thisObj.onLoadOK, thisObj);

        question  = {};
        question.node = thisObj.nm.getQuestion();
        question.display = new LgzLib.DisplayNode(thisObj, question.node);
        
        answer  = {};
        answer.node = thisObj.nm.getResponse();
        answer.text = answer.node.getAttribute('content');
        //todo: in this game, we can only accept text response. need to verify
        
        thisObj.question = question;
        thisObj.answer = answer;

        thisObj.createBalloons(answer.text);

        thisObj.game.load.start();
        
    };
    thisObj.start = function () {

        thisObj.nm.reset();
        thisObj.load();
    };
    thisObj.next = function () {
        thisObj.nm.incr();
        thisObj.load();
    };

    thisObj.onAllCompleted = function () {
        Lgz.hud.winOpen('winWon');
        
    };

    thisObj.update = function () {
        //thisObj.game.physics.arcade.collide(thisObj.group);
 
    };

};
