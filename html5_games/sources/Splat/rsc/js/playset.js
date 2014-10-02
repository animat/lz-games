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

    var thisObj, balArr, charArr;
            
    thisObj = this;

    thisObj.mgr = mgr;
    thisObj.game = mgr.game;
    thisObj.nm = mgr.nm;
    thisObj.balArr = [];
    thisObj.charArr = [];
 
    thisObj.nodeIdx = 0;
    thisObj.charRemaining = 0;
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
    thisObj.shuffle  = function (text) {
        var a, n, i, j, tmp;
        a = text.split(""),
        n = a.length;

        for(i = n - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");        
    };
    thisObj.createBalloons = function (text) {
        var i, balloon, randX, randY, game,
                randText, hspacer, charline, clX, clY, spacer;
        
        game = thisObj.game;

        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.defaultRestitution = 0.8;
        game.physics.p2.setImpactEvents(true);
        game.physics.p2.setBounds(0, 0, 640,440, true, true, true, true, false);
        game.physics.p2.gravity.y = 50;
        randText = thisObj.shuffle(text);
        g.rt = randText;
        hspacer = K.canvasWidth / randText.length;
        
        clY = 275;
        
        spacer = 0;
        
        for (i = 0; i < randText.length; i += 1) {
            randX = thisObj.game.rnd.integerInRange(100, 600);
            randY = thisObj.game.rnd.integerInRange(100, 400);
            balloon  = new Lgz.Balloon(thisObj, randX, randY, randText.charAt(i));
            clX = 70 + i * spacer;
            charline = new Lgz.CharLine(thisObj, clX, clY, text.charAt(i));
            this.balArr.push(balloon);
            this.charArr.push(charline);
            if (!spacer) {
                spacer = Math.round(balloon.spriteText.width * 2);
                console.debug('spacer: ' + spacer);
            }

        }
        
        this.charRemaining = text.length;
    };

    thisObj.onLoadOK = function () {
        var i;
        console.debug('PlaySet.onLoadOK: entered');
        thisObj.question.display.createSprite();
        thisObj.question.display.sprite.position.setTo(85, 25);
        
    };
    thisObj.load = function () {
        var question, answer, i, substext;

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

        substext = answer.text.replace(/ /g,'_');
        thisObj.createBalloons(substext);

        thisObj.game.load.start();
        
    };
    thisObj.start = function () {

        thisObj.nm.reset();
        thisObj.load();
    };
    thisObj.next = function () {
        var rtn;
  
        
        rtn = thisObj.nm.next();
        if (rtn) {
            thisObj.load();
        } else {
          Lgz.hud.winOpen('winWon');  
        }
        
    };
    thisObj._charFound = function () {
        var y, i;
        y = (thisObj.nm.idx * 20 ) + 120;
        console.debug('_charFound: y = ' + y);
        thisObj.question.display.sprite.position.setTo(10, y);
        //todo: recycle balloon and charline sprites
        for (i = 0; i < this.balArr.length; i += 1) {
            this.balArr[i].kill();
            this.charArr[i].kill();
        }          
        thisObj.next();
    }
    thisObj.charFound = function () {

        console.debug('charFound:');
        this.charRemaining -= 1;
        console.debug('charFound:' + this.charRemaining);
        if (thisObj.charRemaining) {
            return;
        }
        //note: pause before next word
        window.setTimeout(
            function () {
                thisObj._charFound();
            },
            2000
        );
        
    };
    thisObj.update = function () {

 
    };

};
