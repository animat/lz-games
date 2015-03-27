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
Lgz.PlaySet = function (scene) {
    'use strict';
    var thisObj, balArr, charArr;
    
    thisObj = this;
    thisObj.scene = scene;
    thisObj.lgzMgr = scene.lgzMgr;
    thisObj.game = thisObj.lgzMgr.game;
    thisObj.nm = thisObj.lgzMgr.nm;
    thisObj.nodeIdx = 0;
    thisObj.charRemaining = 0;
    thisObj.useTailPhysics = true;
    
    thisObj.rscload = function () {
        thisObj.lgzMgr.rscAtlas('balloons');
        thisObj.lgzMgr.rscImage('str');
        thisObj.lgzMgr.rscAudio('sfx', true);
    };
    thisObj.create = function () {
        thisObj.sfx = thisObj.lgzMgr.rscAudioTracks('sfx');

        thisObj.nm.reset();
        thisObj.load();
    };
    thisObj.playSound = function (key, delayTO) {
        if (!delayTO) {
            delayTO = 0;
        }
        window.setTimeout(
            function () {
                thisObj.sfx.play(key);
            },
            delayTO
        );
        
    };
    thisObj.createBalloons = function (text) {
        var i, balloon, randX, randY, game,
            hspacer, charline, clX, clY, wordStart, wordStop, j,
            spacer, spacecount, cg;
        thisObj.balArr = [];
        thisObj.charArr = [];
         
        game = thisObj.game;

        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.defaultRestitution = 0.8;
        game.physics.p2.setImpactEvents(true);
        game.physics.p2.setBounds(0, 0, 600, 400, true, true, true, true, false);
        game.physics.p2.gravity.y = K.gravity;
        
        cg = {};
        cg.balloons = game.physics.p2.createCollisionGroup();
        cg.letters = game.physics.p2.createCollisionGroup();
        cg.underlines = game.physics.p2.createCollisionGroup();
        cg.string = game.physics.p2.createCollisionGroup();
        
        game.physics.p2.updateBoundsCollisionGroup();
        
        /*ivanixcu: deprecated
        randText = thisObj.shuffle(text);
        */
        hspacer = K.canvasWidth / text.length;
        
        clY = K.textTopMargin;
        clX = K.textLeftMargin;
        
        spacer = 0;
        spacecount = 0;
        wordStart = 0;
        wordStop = 0;
        
        for (i = 0; i < text.length; i += 1) {
            console.debug("i: " + i  + " char: " + text.charAt(i));
  
            if (text.charAt(i) !== '_') {
                charline = new Lgz.CharLine(thisObj, clX, clY, text.charAt(i), cg);
                this.charArr.push(charline);
                // spacer = Math.round(charline.spriteText.width * 1.5);
            } else {
                spacecount += 1;
                wordStart = this.charArr.length;
            }
            clX = clX  +  Math.round(charline.spriteText.width * 1.5);
            if (clX > K.textRightMargin) {
                clX = K.textLeftMargin;
                clY = clY + Math.round(charline.spriteText.height * 2);
                wordStop = this.charArr.length;
                for (j = wordStart; j < wordStop; j += 1) {
                    this.charArr[j].body.x = clX;
                    this.charArr[j].body.y = clY;
                    clX = clX  +  Math.round(charline.spriteText.width * 1.5);
                }
            }
        }
        for (i = 0; i < text.length; i += 1) {
            console.debug("i: " + i  + " char: " + text.charAt(i));
            if (text.charAt(i) !== '_') {

                balloon  = new Lgz.Balloon(thisObj, text.charAt(i), cg);
                
                this.balArr.push(balloon);
            }
  
        }
        this.charRemaining = text.length - spacecount;
    };

    thisObj.onLoadOK = function () {
        var i;
        console.debug('PlaySet.onLoadOK: entered');
        //thisObj.question.display.createSprite();
        //thisObj.question.display.sprite.position.setTo(85, 25);
        
    };
    thisObj.load = function () {
        var question, answer, i, substext, cfg;
        
        cfg = null;
        /*
         * border around question display node
            cfg = {};
            cfg.box = {};
            cfg.box.strokeWidth = 2;
        */

        if(thisObj.useTailPhysics) {
            console.debug('use _updateCheckFPS');
            thisObj.update = thisObj._updateCheckFPS;
        } else {
            console.debug('use _updateEmpty');
            thisObj.update = thisObj._updateEmpty;
        }
        window.setTimeout(
            function () {
                thisObj.removeCheckFPS();
            },
            K.checkFPS_TO
        );  
        // thisObj.game.load.onLoadComplete.addOnce(thisObj.onLoadOK, thisObj);

        question  = {};
        question.node = thisObj.nm.getQuestion();
        //question.display = new LgzLib.DisplayNode(thisObj, question.node);
        question.display = new LgzLib.DisplayNodeBox(thisObj.game, question.node, 300, 40, 300, 50, cfg );
        
        answer  = {};
        answer.node = thisObj.nm.getResponse();
        answer.text = answer.node.getAttribute('content');
        //todo: in this game, we can only accept text response. need to verify
        
        thisObj.question = question;
        thisObj.answer = answer;

        substext = answer.text.replace(/ /g, '_');
        thisObj.createBalloons(substext);

        //thisObj.game.load.start();
        thisObj.onLoadOK();
    };
    
    thisObj.eventNodeBeforeNext = function () {
        var i, rtn;
        
        //thisObj.question.display.sprite.destroy();
        thisObj.question.display.destroy();
        //todo: recycle balloon and charline sprites
        for (i = 0; i < thisObj.balArr.length; i += 1) {
            thisObj.balArr[i].kill();
            thisObj.charArr[i].kill();
        }
    };
    thisObj.eventNodeAfterNext = function () {
        thisObj.playSound('next');     
        thisObj.load();
    };
    //todo: deprecate
    thisObj.eventNodeFinish = function () {
        thisObj.lgzMgr.postScore();
        thisObj.lgzMgr.hud.winOpen('winWon');

    };
    thisObj._charFound = function () {
        var y, content, textSprite;
        y = (thisObj.nm.idx * 20) + 120;
        console.debug('_charFound: y = ' + y);
        
 
        textSprite = this.game.add.text(0, 0, thisObj.answer.text, K.bgTextStyle);
        textSprite.position.setTo(10, y);
        thisObj.nm.nodeAnswered();
    };
    thisObj.charFound = function () {

        console.debug('charFound:');
        thisObj.playSound('correct');
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
    thisObj.removeCheckFPS = function () {
        console.debug('removeCheckFPS');
        thisObj.update = thisObj._updateEmpty;        
    };
    thisObj.tailFallback = function() {

        thisObj.eventNodeBeforeNext();
        thisObj.useTailPhysics = false;        
        thisObj.eventNodeAfterNext();
        //note: try to use physics on next question node;
        thisObj.useTailPhysics = true;
      
    };
    thisObj._updateCheckFPS = function () {

        if(thisObj.game.time.fps  && thisObj.game.time.fps < K.thresholdFPS) {
            console.debug('_updateCheckFPS: fps fell below threshold: ' + thisObj.game.time.fps);
            thisObj.tailFallback();
        }
    };
    thisObj._updateEmpty = function () {
        //note: should be empty
    };    
    thisObj.update = function () {

    };    
    thisObj.pause = function () {
        console.debug('Lgz.PlaySet.pause:');
        
    };
    thisObj.resume = function () {
        console.debug('Lgz.PlaySet.resume:');
        
    };
};